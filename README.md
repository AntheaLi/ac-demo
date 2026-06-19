# AC-demo - v0

Demo of [AC cli](https://github.com/AntheaLi/AC)

Architecture choices are currently made through a mix of convention, scaling laws, intuition, and expensive ablations. But many choices are hardware-coupled: GQA/MLA affects KV bandwidth, width/depth affects latency and parallelism, MoE changes active vs total capacity, precision changes both quality risk and throughput, and hybrid state/attention ratios depend on recall vs memory pressure.


## Current Build

AC turns hardware + workload + architecture constraints into executable architecture search. It supports greenfield design, baseline-aware local modification, and delta influence evaluation. It takes three inputs:

1. **Hardware** — H100 SXM, B200, TPU v5p, Trainium 2/3 (more targets landing as calibration packs ship).
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

Current implementation looks at: width/depth, MLP-attention ratio, query/KV head split, GQA group size, KV memory, precision policy, MoE active vs total capacity, hybrid state/attention ratio, uncertainty.

- **Attention**: MHA, GQA, MQA, MLA (DeepSeek-V2/V3), NSA (Native Sparse Attention), SWA, YOCO.
- **FFN**: dense SwiGLU, top-k MoE with shared experts and capacity factors, first-K-dense MoE prefixes (DeepSeek-V3 / Qwen3-MoE style).
- **State / hybrid layers**: Mamba-2, GLA, KDA, DeltaNet, Gated DeltaNet, parallel-heads, sliding-window recurrent. Five quality-residual families covering the published behaviors of each.
- **Long context**: position interpolation, NTK-aware, YaRN, LongRoPE, with their measured long-context degradation multipliers.
- **Precision**: BF16, FP8 (E4M3/E5M2), FP4 (E2M1), MXFP4, MXFP6, INT8/INT4 KV, per-component assignment.
- **Multi-token prediction** (DeepSeek-V3-style), 2:4 structured sparsity.
- **Parallelism**: TP, PP, DP, EP, and context-parallel (ring or Ulysses) sweeps.

All of it searched together. The optimizer doesn't make you pick "MoE vs hybrid" up front; combined MoE + hybrid + MLA candidates compete on the same Pareto frontier.

## AC is NOT a replacement for training. 

It is a compiler for proposing and evaluating architecture deltas before expensive experiments.


## Next

The current release is what we're calling "validated throughput-fidelity decision tool." The next milestone is "validated quality-fidelity decision tool" — Phase 2 calibration, which fits the quality model coefficients to controlled 12-arch × 3-scale measurement runs rather than literature priors. After that, lab-local calibration via `ac-auto-calibrate` becomes the standard workflow: bring your own measurements, get a calibration pack tuned to your kernels and your data mix.


## :）
The goal is to make architecture design less like folklore and more like hardware-aware Pareto search.



## Install

```bash
pip install -e .
ac-compile --help
```

Apache-2.0. Python ≥ 3.10. No runtime dependencies beyond PyYAML.

## Use

```bash
# Optimal 7B dense architecture for an H100 cluster
ac-compile --hardware h100 --params 7 --tokens 2 \
  --context 8192 --serving-tbt 50 --serving-batch 32 \
  --tp 8 --pp 1 --dp 8 --output-config out/arch.json


# Score a specific change against your baseline
ac-delta-eval --baseline-config configs/mistral_7b.json \
  --hardware h100 --tp 8 --workload long_context \
  --apply swap_attention_to_mla --apply-args latent_dim=512
```

Repository, full docs at [github.com/AntheaLi/AC](https://github.com/AntheaLi/AC).
