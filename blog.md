# AC 算模 - a Hardware-Aware Architecture Compiler for Transformers

Architecture choices are currently made through a mix of convention, scaling laws, intuition, and expensive ablations. But many choices are hardware-coupled: GQA/MLA affects KV bandwidth, width/depth affects latency and parallelism, MoE changes active vs total capacity, precision changes both quality risk and throughput, and hybrid state/attention ratios depend on recall vs memory pressure.


## Current Build

AC turns hardware + workload + architecture constraints into executable architecture search. It supports greenfield design, baseline-aware local modification, and delta influence evaluation. It takes three inputs:

1. **Hardware** — H100 SXM, H800 SXM, B200, GB200 NVL72, TPU v5p/v5e, and Trainium 2/3.
2. **Workload** — context length, serving batch, latency budget (TBT/TTFT), training token count.
3. **Quality budget** — how much loss you're willing to spend for throughput.

It produces a Pareto-front architecture, a JSON config you can hand to your training framework, a justification document explaining every choice, and a shadow-price report telling you which hardware constraint is the binding one. 



## Three workflows

The useful output is not “the optimal architecture.” The useful output is a Pareto report: what improved, what got worse, what bottleneck moved, what quality risk was introduced, and which assumptions are uncertain.

| Capability | Question | Command |
|---|---|---|
| **Greenfield** | Given compute, what's the optimal architecture? | `ac-compile --hardware H --params N --tokens T` |
| **Modifier** | Given a baseline, what's the best local Pareto improvement? | `ac-compile --baseline-config CONF --hardware H` |
| **Delta evaluation** | What does *this specific* architectural change cost or save? | `ac-delta-eval --baseline CONF --apply NAME` |


## Currently Supported

AC searches tile-aligned width/depth, MLP-to-attention ratio, query/KV head split, vocabulary size, precision policy, active versus total parameters, hybrid composition, and parallelism under memory, latency, quality-risk, and hardware-fabric constraints.

- **Hardware**: NVIDIA H100 SXM, H800 SXM, B200, and rack-scale GB200 NVL72; Google TPU v5p/v5e; AWS Trainium 2/3. The system-level targets model their fabric, including NVL72 expert-parallel domains and H800's reduced NVLink bandwidth.
- **Attention and KV cache**: full attention with MHA/GQA/MQA, MLA (DeepSeek-V2/V3), NSA, CSA, IndexShare, MSA, sliding-window attention, local/global interleaving, and YOCO cross-layer KV sharing.
- **FFN**: dense SwiGLU; top-k MoE with optional shared experts, capacity factors, fine- or coarse-grained experts, and EP topology; first-K-dense MoE prefixes in the DeepSeek-V3/Qwen3-MoE style.
- **State and hybrid layers**: Mamba-2/Mamba/S4-S6; GLA, KDA, DeltaNet, and Gated DeltaNet; RWKV-7, RetNet, and linear attention; parallel-head hybrids; sliding-window/local-recurrent hybrids. Placement can be interleaved, periodic, or first-periodic-last, with hardware-derived state sizing.
- **Long context**: local/global attention, Position Interpolation, NTK-aware scaling, YaRN, LongRoPE, and context parallelism with ring or Ulysses communication.
- **Precision**: BF16/FP16, FP8, FP4, MXFP4, and MXFP6 for supported compute paths; BF16, FP8, INT8, FP4, and INT4 KV cache. Unsupported formats are filtered by hardware, and weight, activation/FFN, state, and KV precision remain distinct.
- **Other primitives**: Multi-Token Prediction and RMSNorm. Component-level 2:4 structured sparsity is represented in the quality model, but is not yet a greenfield search axis.
- **Parallelism**: TP, PP, EP, and CP sweeps, plus candidate-specific DP derived from a fixed training-cluster budget. Reports distinguish per-GPU, per-replica, and aggregate throughput.

Optional architecture families enter greenfield search through explicit CLI flags. Once enabled, they are evaluated in the same lattice, so combinations such as MoE + hybrid + MLA can compete on one Pareto frontier. Modifier mode preserves the baseline family; explicit family transitions belong in delta evaluation.

## AC is NOT a replacement for training. 

It is a compiler for proposing and evaluating architecture deltas before expensive experiments.


## Next

The current release is a pre-calibration architecture decision-support tool: its wiring and physical invariants are tested, but the public-anchor trust audit still blocks publication-grade absolute throughput, latency, memory, and loss claims. The next milestone is measurement calibration, fitting model coefficients to controlled 12-architecture × 3-scale runs rather than literature priors. After that, lab-local calibration via `ac-auto-calibrate` becomes the standard workflow: bring your own measurements, get a calibration pack tuned to your kernels and your data mix.


## :）
The goal is to make architecture design less like folklore and more like hardware-aware multi-objective pareto optimization.



## Install

```bash
pip install -e .
ac-compile --help
```


```bash
# Optimal 7B dense architecture for an H100 cluster
ac-compile \
  --hardware h100 --params 7 --tokens 2 --context 8192 \
  --serving-tbt 50 --serving-batch 32 --tp 8 --pp 1 --dp 8 \
  --output-config out/mistral_arch.json \
  --output-justification out/mistral_arch.md \
  --output-pareto out/mistral_pareto.csv

# Modifier Search: Pareto-front delta against Mistral-7B
ac-compile \
  --baseline-config configs/mistral_7b.json \
  --hardware h100 --tp-options 4,8 \
  --quality-risk-budget-pct 1.0 --allow-quality-spending \
  --out out/mistral_modifier

# Modifier Delta: what does GQA(group_size=8) do to Mistral-7B at 32k?
ac-delta-eval \
  --baseline-config configs/mistral_7b.json \
  --hardware h100 --tp 8 --workload long_context \
  --apply swap_attention_to_gqa --apply-args group_size=8 \
  --out out/mistral_delta_gqa
```

Repository, full docs, and the public-benchmark validation pack at [github.com/AntheaLi/AC](https://github.com/AntheaLi/AC).
