/* __THROUGHPUT_DATA_BEGIN__ */
window.__THROUGHPUT_DATA__ = {"hardware_specs":{"h100":{"name":"H100 SXM","vendor":"nvidia","family":"hopper","hbm_gb":80,"hbm_bw_tb_s":3.35,"peak_bf16_tf":495,"peak_fp8_tf":990,"interconnect_type":"nvlink","interconnect_bw_gb_s":900},"b200":{"name":"B200","vendor":"nvidia","family":"blackwell","hbm_gb":192,"hbm_bw_tb_s":8.0,"peak_bf16_tf":1125,"peak_fp8_tf":2250,"interconnect_type":"nvlink","interconnect_bw_gb_s":1800},"tpu_v5e":{"name":"TPU v5e","vendor":"google","family":"tpu_v5e","hbm_gb":16,"hbm_bw_tb_s":1.6,"peak_bf16_tf":197,"peak_fp8_tf":0,"interconnect_type":"ici","interconnect_bw_gb_s":400},"tpu_v5p":{"name":"TPU v5p","vendor":"google","family":"tpu_v5p","hbm_gb":95,"hbm_bw_tb_s":2.77,"peak_bf16_tf":459,"peak_fp8_tf":0,"interconnect_type":"ici","interconnect_bw_gb_s":800}},"architectures":{"Llama-2-7B":{"d_model":4096,"d_head":128,"n_heads":32,"ffn_dim":11008,"n_layers":32,"n_kv_heads":32},"Llama-2-13B":{"d_model":5120,"d_head":128,"n_heads":40,"ffn_dim":13824,"n_layers":40,"n_kv_heads":40},"Llama-2-70B":{"d_model":8192,"d_head":128,"n_heads":64,"ffn_dim":28672,"n_layers":80,"n_kv_heads":8},"Llama-3-8B":{"d_model":4096,"d_head":128,"n_heads":32,"ffn_dim":14336,"n_layers":32,"n_kv_heads":8},"Llama-3-70B":{"d_model":8192,"d_head":128,"n_heads":64,"ffn_dim":28672,"n_layers":80,"n_kv_heads":8},"Mistral-7B":{"d_model":4096,"d_head":128,"n_heads":32,"ffn_dim":14336,"n_layers":32,"n_kv_heads":8},"Gemma-2-9B":{"d_model":3584,"d_head":256,"n_heads":16,"ffn_dim":14336,"n_layers":42,"n_kv_heads":8},"Qwen3-8B":{"d_model":4096,"d_head":128,"n_heads":32,"ffn_dim":12288,"n_layers":36,"n_kv_heads":8},"Qwen3-32B":{"d_model":5120,"d_head":128,"n_heads":64,"ffn_dim":25600,"n_layers":64,"n_kv_heads":8},"DeepSeek-V3":{"d_model":7168,"d_head":128,"n_heads":128,"ffn_dim":18432,"n_layers":61,"n_kv_heads":128},"Kimi-K2.5":{"d_model":7168,"d_head":128,"n_heads":64,"ffn_dim":18432,"n_layers":61,"n_kv_heads":64},"GLM-5.1":{"d_model":6144,"d_head":64,"n_heads":64,"ffn_dim":18432,"n_layers":78,"n_kv_heads":64},"GPT-OSS-120B":{"d_model":2880,"d_head":64,"n_heads":64,"ffn_dim":11520,"n_layers":36,"n_kv_heads":8},"MAI-Base-1":{"d_model":6656,"d_head":128,"n_heads":80,"ffn_dim":24576,"n_layers":78,"n_kv_heads":8}},"results":[{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2787.8,"prefill_ms":137.6,"decode_tok_s":70.6,"decode_ms_per_tok":14.16,"memory_gb":13.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":555.3,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":994.9,"ffn_down_us":504.2,"membound_us":30.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":555.3,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":994.9,"ffn_down_us":504.2,"membound_us":30.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":30.1,"attention_us":5.0,"out_proj_us":10.0,"ffn_up_us":53.9,"ffn_down_us":26.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":3142.8,"prefill_ms":522.4,"decode_tok_s":65.3,"decode_ms_per_tok":15.32,"memory_gb":15.18,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2221.2,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":3979.7,"ffn_down_us":2016.7,"membound_us":120.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2221.2,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":3979.7,"ffn_down_us":2016.7,"membound_us":120.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":30.1,"attention_us":20.0,"out_proj_us":10.0,"ffn_up_us":53.9,"ffn_down_us":27.0,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":3192.2,"prefill_ms":1041.59,"decode_tok_s":59.3,"decode_ms_per_tok":16.86,"memory_gb":17.8,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4442.5,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":7959.4,"ffn_down_us":4033.5,"membound_us":240.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4442.5,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":7959.4,"ffn_down_us":4033.5,"membound_us":240.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":30.1,"attention_us":40.1,"out_proj_us":10.1,"ffn_up_us":54.0,"ffn_down_us":27.0,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1457.3,"prefill_ms":262.98,"decode_tok_s":41.1,"decode_ms_per_tok":24.35,"memory_gb":25.22,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":867.7,"attention_us":216.9,"out_proj_us":409.3,"ffn_up_us":1561.8,"ffn_down_us":791.5,"membound_us":37.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":867.7,"attention_us":216.9,"out_proj_us":409.3,"ffn_up_us":1561.8,"ffn_down_us":791.5,"membound_us":37.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":47.0,"attention_us":6.3,"out_proj_us":15.7,"ffn_up_us":84.5,"ffn_down_us":42.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1635.0,"prefill_ms":1004.0,"decode_tok_s":38.2,"decode_ms_per_tok":26.16,"memory_gb":28.15,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3470.7,"attention_us":867.7,"out_proj_us":1098.3,"ffn_up_us":6247.2,"ffn_down_us":3165.8,"membound_us":150.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3470.7,"attention_us":867.7,"out_proj_us":1098.3,"ffn_up_us":6247.2,"ffn_down_us":3165.8,"membound_us":150.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":47.0,"attention_us":25.0,"out_proj_us":15.7,"ffn_up_us":84.6,"ffn_down_us":42.3,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1659.1,"prefill_ms":2003.99,"decode_tok_s":35.0,"decode_ms_per_tok":28.57,"memory_gb":32.06,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6941.4,"attention_us":1735.3,"out_proj_us":2196.6,"ffn_up_us":12494.5,"ffn_down_us":6331.6,"membound_us":300.5,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6941.4,"attention_us":1735.3,"out_proj_us":2196.6,"ffn_up_us":12494.5,"ffn_down_us":6331.6,"membound_us":300.5,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":47.0,"attention_us":50.1,"out_proj_us":15.7,"ffn_up_us":84.7,"ffn_down_us":42.3,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":347.8,"prefill_ms":1073.16,"decode_tok_s":9.2,"decode_ms_per_tok":108.99,"memory_gb":129.1,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":925.5,"attention_us":347.1,"out_proj_us":750.4,"ffn_up_us":3901.3,"ffn_down_us":2004.3,"membound_us":60.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":925.5,"attention_us":347.1,"out_proj_us":750.4,"ffn_up_us":3901.3,"ffn_down_us":2004.3,"membound_us":60.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":50.1,"attention_us":1.3,"out_proj_us":40.1,"ffn_up_us":280.5,"ffn_down_us":140.2,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":387.0,"prefill_ms":4213.47,"decode_tok_s":9.1,"decode_ms_per_tok":109.77,"memory_gb":130.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3702.1,"attention_us":1388.3,"out_proj_us":2811.7,"ffn_up_us":15569.3,"ffn_down_us":7829.4,"membound_us":240.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3702.1,"attention_us":1388.3,"out_proj_us":2811.7,"ffn_up_us":15569.3,"ffn_down_us":7829.4,"membound_us":240.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":50.1,"attention_us":5.0,"out_proj_us":40.1,"ffn_up_us":280.6,"ffn_down_us":140.3,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":413.6,"prefill_ms":8005.03,"decode_tok_s":9.0,"decode_ms_per_tok":110.81,"memory_gb":133.48,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5565.6,"attention_us":2776.5,"out_proj_us":4456.0,"ffn_up_us":31102.7,"ffn_down_us":15596.1,"membound_us":480.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5565.6,"attention_us":2776.5,"out_proj_us":4456.0,"ffn_up_us":31102.7,"ffn_down_us":15596.1,"membound_us":480.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":50.2,"attention_us":10.0,"out_proj_us":40.1,"ffn_up_us":280.8,"ffn_down_us":140.4,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2489.7,"prefill_ms":153.11,"decode_tok_s":68.5,"decode_ms_per_tok":14.59,"memory_gb":15.24,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":392.9,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":1295.7,"ffn_down_us":656.6,"membound_us":30.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":392.9,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":1295.7,"ffn_down_us":656.6,"membound_us":30.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.0,"attention_us":1.3,"out_proj_us":10.0,"ffn_up_us":70.1,"ffn_down_us":35.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":2939.6,"prefill_ms":556.85,"decode_tok_s":67.2,"decode_ms_per_tok":14.89,"memory_gb":16.08,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1054.4,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":5182.9,"ffn_down_us":2626.5,"membound_us":120.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1054.4,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":5182.9,"ffn_down_us":2626.5,"membound_us":120.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.0,"attention_us":5.0,"out_proj_us":10.0,"ffn_up_us":70.2,"ffn_down_us":35.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":2989.7,"prefill_ms":1110.5,"decode_tok_s":65.4,"decode_ms_per_tok":15.29,"memory_gb":17.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2108.8,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":10365.8,"ffn_down_us":5252.9,"membound_us":240.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2108.8,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":10365.8,"ffn_down_us":5252.9,"membound_us":240.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.1,"attention_us":10.0,"out_proj_us":10.1,"ffn_up_us":70.3,"ffn_down_us":35.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":346.9,"prefill_ms":1073.16,"decode_tok_s":9.2,"decode_ms_per_tok":108.99,"memory_gb":132.04,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":925.5,"attention_us":347.1,"out_proj_us":750.4,"ffn_up_us":3901.3,"ffn_down_us":2004.3,"membound_us":60.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":925.5,"attention_us":347.1,"out_proj_us":750.4,"ffn_up_us":3901.3,"ffn_down_us":2004.3,"membound_us":60.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":50.1,"attention_us":1.3,"out_proj_us":40.1,"ffn_up_us":280.5,"ffn_down_us":140.2,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":386.8,"prefill_ms":4213.47,"decode_tok_s":9.1,"decode_ms_per_tok":109.77,"memory_gb":133.92,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3702.1,"attention_us":1388.3,"out_proj_us":2811.7,"ffn_up_us":15569.3,"ffn_down_us":7829.4,"membound_us":240.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3702.1,"attention_us":1388.3,"out_proj_us":2811.7,"ffn_up_us":15569.3,"ffn_down_us":7829.4,"membound_us":240.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":50.1,"attention_us":5.0,"out_proj_us":40.1,"ffn_up_us":280.6,"ffn_down_us":140.3,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":413.5,"prefill_ms":8005.03,"decode_tok_s":9.0,"decode_ms_per_tok":110.81,"memory_gb":136.42,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5565.6,"attention_us":2776.5,"out_proj_us":4456.0,"ffn_up_us":31102.7,"ffn_down_us":15596.1,"membound_us":480.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5565.6,"attention_us":2776.5,"out_proj_us":4456.0,"ffn_up_us":31102.7,"ffn_down_us":15596.1,"membound_us":480.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":50.2,"attention_us":10.0,"out_proj_us":40.1,"ffn_up_us":280.8,"ffn_down_us":140.4,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2513.0,"prefill_ms":153.11,"decode_tok_s":68.5,"decode_ms_per_tok":14.59,"memory_gb":13.77,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":392.9,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":1295.7,"ffn_down_us":656.6,"membound_us":30.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":392.9,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":1295.7,"ffn_down_us":656.6,"membound_us":30.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.0,"attention_us":1.3,"out_proj_us":10.0,"ffn_up_us":70.1,"ffn_down_us":35.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":2947.7,"prefill_ms":556.85,"decode_tok_s":67.2,"decode_ms_per_tok":14.89,"memory_gb":14.61,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1054.4,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":5182.9,"ffn_down_us":2626.5,"membound_us":120.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1054.4,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":5182.9,"ffn_down_us":2626.5,"membound_us":120.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.0,"attention_us":5.0,"out_proj_us":10.0,"ffn_up_us":70.2,"ffn_down_us":35.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":2993.8,"prefill_ms":1110.5,"decode_tok_s":65.4,"decode_ms_per_tok":15.29,"memory_gb":15.74,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2108.8,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":10365.8,"ffn_down_us":5252.9,"membound_us":240.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2108.8,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":10365.8,"ffn_down_us":5252.9,"membound_us":240.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.1,"attention_us":10.0,"out_proj_us":10.1,"ffn_up_us":70.3,"ffn_down_us":35.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2140.2,"prefill_ms":176.49,"decode_tok_s":55.3,"decode_ms_per_tok":18.09,"memory_gb":19.39,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":323.9,"attention_us":173.5,"out_proj_us":229.2,"ffn_up_us":1133.8,"ffn_down_us":574.5,"membound_us":26.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":323.9,"attention_us":173.5,"out_proj_us":229.2,"ffn_up_us":1133.8,"ffn_down_us":574.5,"membound_us":26.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":17.5,"attention_us":2.5,"out_proj_us":8.8,"ffn_up_us":61.4,"ffn_down_us":30.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":2448.1,"prefill_ms":667.64,"decode_tok_s":53.0,"decode_ms_per_tok":18.86,"memory_gb":20.78,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1230.1,"attention_us":694.1,"out_proj_us":615.1,"ffn_up_us":4535.0,"ffn_down_us":2298.2,"membound_us":105.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1230.1,"attention_us":694.1,"out_proj_us":615.1,"ffn_up_us":4535.0,"ffn_down_us":2298.2,"membound_us":105.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":17.6,"attention_us":10.0,"out_proj_us":8.8,"ffn_up_us":61.4,"ffn_down_us":30.7,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":2492.3,"prefill_ms":1331.07,"decode_tok_s":50.3,"decode_ms_per_tok":19.88,"memory_gb":22.64,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2460.2,"attention_us":1388.3,"out_proj_us":1230.1,"ffn_up_us":9070.0,"ffn_down_us":4596.3,"membound_us":210.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2460.2,"attention_us":1388.3,"out_proj_us":1230.1,"ffn_up_us":9070.0,"ffn_down_us":4596.3,"membound_us":210.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":17.6,"attention_us":20.0,"out_proj_us":8.8,"ffn_up_us":61.5,"ffn_down_us":30.8,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2450.2,"prefill_ms":155.51,"decode_tok_s":66.1,"decode_ms_per_tok":15.13,"memory_gb":15.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":392.9,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":1110.6,"ffn_down_us":562.8,"membound_us":30.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":392.9,"attention_us":173.5,"out_proj_us":261.9,"ffn_up_us":1110.6,"ffn_down_us":562.8,"membound_us":30.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.0,"attention_us":1.3,"out_proj_us":10.0,"ffn_up_us":60.1,"ffn_down_us":30.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":2924.4,"prefill_ms":559.52,"decode_tok_s":64.7,"decode_ms_per_tok":15.46,"memory_gb":16.44,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1054.4,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":4442.5,"ffn_down_us":2251.3,"membound_us":120.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1054.4,"attention_us":694.1,"out_proj_us":702.9,"ffn_up_us":4442.5,"ffn_down_us":2251.3,"membound_us":120.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.0,"attention_us":5.0,"out_proj_us":10.0,"ffn_up_us":60.2,"ffn_down_us":30.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":2975.8,"prefill_ms":1115.44,"decode_tok_s":62.8,"decode_ms_per_tok":15.91,"memory_gb":17.63,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2108.8,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":8884.9,"ffn_down_us":4502.5,"membound_us":240.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2108.8,"attention_us":1388.3,"out_proj_us":1405.8,"ffn_up_us":8884.9,"ffn_down_us":4502.5,"membound_us":240.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":15.1,"attention_us":10.0,"out_proj_us":10.1,"ffn_up_us":60.3,"ffn_down_us":30.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":610.8,"prefill_ms":624.0,"decode_tok_s":18.6,"decode_ms_per_tok":53.71,"memory_gb":61.47,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":578.4,"attention_us":347.1,"out_proj_us":469.0,"ffn_up_us":2892.2,"ffn_down_us":1465.7,"membound_us":37.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":578.4,"attention_us":347.1,"out_proj_us":469.0,"ffn_up_us":2892.2,"ffn_down_us":1465.7,"membound_us":37.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.3,"attention_us":1.3,"out_proj_us":25.0,"ffn_up_us":156.5,"ffn_down_us":78.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":665.8,"prefill_ms":2464.13,"decode_tok_s":18.4,"decode_ms_per_tok":54.32,"memory_gb":62.81,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2313.8,"attention_us":1388.3,"out_proj_us":1757.3,"ffn_up_us":11568.9,"ffn_down_us":5862.6,"membound_us":150.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2313.8,"attention_us":1388.3,"out_proj_us":1757.3,"ffn_up_us":11568.9,"ffn_down_us":5862.6,"membound_us":150.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.3,"attention_us":5.0,"out_proj_us":25.1,"ffn_up_us":156.7,"ffn_down_us":78.3,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":831.5,"prefill_ms":3985.3,"decode_tok_s":18.1,"decode_ms_per_tok":55.14,"memory_gb":64.59,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4627.6,"attention_us":2776.5,"out_proj_us":3514.6,"ffn_up_us":17358.8,"ffn_down_us":8724.2,"membound_us":300.5,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4627.6,"attention_us":2776.5,"out_proj_us":3514.6,"ffn_up_us":17358.8,"ffn_down_us":8724.2,"membound_us":300.5,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.4,"attention_us":10.0,"out_proj_us":25.1,"ffn_up_us":156.8,"ffn_down_us":78.4,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":393.9,"prefill_ms":959.82,"decode_tok_s":11.5,"decode_ms_per_tok":86.74,"memory_gb":105.95,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2928.2,"attention_us":694.1,"out_proj_us":1313.2,"ffn_up_us":2915.4,"ffn_down_us":1477.4,"membound_us":52.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2928.2,"attention_us":694.1,"out_proj_us":1313.2,"ffn_up_us":2915.4,"ffn_down_us":1477.4,"membound_us":52.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":210.4,"attention_us":20.0,"out_proj_us":70.1,"ffn_up_us":157.8,"ffn_down_us":78.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":429.0,"prefill_ms":3816.22,"decode_tok_s":10.5,"decode_ms_per_tok":95.52,"memory_gb":118.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":11665.8,"attention_us":2776.5,"out_proj_us":5252.9,"ffn_up_us":11661.5,"ffn_down_us":5909.5,"membound_us":210.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":11665.8,"attention_us":2776.5,"out_proj_us":5252.9,"ffn_up_us":11661.5,"ffn_down_us":5909.5,"membound_us":210.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":210.5,"attention_us":80.1,"out_proj_us":70.2,"ffn_up_us":157.9,"ffn_down_us":78.9,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":513.4,"prefill_ms":6450.97,"decode_tok_s":9.3,"decode_ms_per_tok":107.23,"memory_gb":134.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":23331.5,"attention_us":5553.1,"out_proj_us":7802.5,"ffn_up_us":17506.5,"ffn_down_us":8777.8,"membound_us":420.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":23331.5,"attention_us":5553.1,"out_proj_us":7802.5,"ffn_up_us":17506.5,"ffn_down_us":8777.8,"membound_us":420.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":210.6,"attention_us":160.3,"out_proj_us":70.2,"ffn_up_us":158.0,"ffn_down_us":79.0,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":532.2,"prefill_ms":709.73,"decode_tok_s":15.4,"decode_ms_per_tok":64.92,"memory_gb":78.28,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1471.9,"attention_us":347.1,"out_proj_us":656.6,"ffn_up_us":2915.4,"ffn_down_us":1477.4,"membound_us":52.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1471.9,"attention_us":347.1,"out_proj_us":656.6,"ffn_up_us":2915.4,"ffn_down_us":1477.4,"membound_us":52.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":105.2,"attention_us":10.0,"out_proj_us":35.1,"ffn_up_us":157.8,"ffn_down_us":78.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":584.6,"prefill_ms":2798.94,"decode_tok_s":14.4,"decode_ms_per_tok":69.33,"memory_gb":84.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5840.7,"attention_us":1388.3,"out_proj_us":2460.2,"ffn_up_us":11661.5,"ffn_down_us":5909.5,"membound_us":210.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5840.7,"attention_us":1388.3,"out_proj_us":2460.2,"ffn_up_us":11661.5,"ffn_down_us":5909.5,"membound_us":210.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":105.2,"attention_us":40.1,"out_proj_us":35.1,"ffn_up_us":157.9,"ffn_down_us":78.9,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":705.9,"prefill_ms":4689.65,"decode_tok_s":13.3,"decode_ms_per_tok":75.2,"memory_gb":93.54,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":11665.8,"attention_us":2776.5,"out_proj_us":4920.5,"ffn_up_us":17506.5,"ffn_down_us":8777.8,"membound_us":420.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":11665.8,"attention_us":2776.5,"out_proj_us":4920.5,"ffn_up_us":17506.5,"ffn_down_us":8777.8,"membound_us":420.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":105.3,"attention_us":80.1,"out_proj_us":35.1,"ffn_up_us":158.0,"ffn_down_us":79.0,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":556.0,"prefill_ms":685.06,"decode_tok_s":16.4,"decode_ms_per_tok":60.92,"memory_gb":68.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":833.0,"attention_us":173.5,"out_proj_us":392.9,"ffn_up_us":2498.9,"ffn_down_us":1266.3,"membound_us":45.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":833.0,"attention_us":173.5,"out_proj_us":392.9,"ffn_up_us":2498.9,"ffn_down_us":1266.3,"membound_us":45.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":45.1,"attention_us":5.0,"out_proj_us":15.0,"ffn_up_us":135.2,"ffn_down_us":67.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":618.7,"prefill_ms":2649.6,"decode_tok_s":15.7,"decode_ms_per_tok":63.75,"memory_gb":73.34,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3331.9,"attention_us":694.1,"out_proj_us":1054.4,"ffn_up_us":9995.6,"ffn_down_us":5065.3,"membound_us":180.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3331.9,"attention_us":694.1,"out_proj_us":1054.4,"ffn_up_us":9995.6,"ffn_down_us":5065.3,"membound_us":180.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":45.1,"attention_us":20.0,"out_proj_us":15.0,"ffn_up_us":135.3,"ffn_down_us":67.7,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":769.4,"prefill_ms":4305.14,"decode_tok_s":14.8,"decode_ms_per_tok":67.54,"memory_gb":79.16,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6663.7,"attention_us":1388.3,"out_proj_us":2108.8,"ffn_up_us":15005.5,"ffn_down_us":7529.6,"membound_us":360.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6663.7,"attention_us":1388.3,"out_proj_us":2108.8,"ffn_up_us":15005.5,"ffn_down_us":7529.6,"membound_us":360.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":45.2,"attention_us":40.1,"out_proj_us":15.1,"ffn_up_us":135.5,"ffn_down_us":67.7,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":3577.7,"prefill_ms":106.33,"decode_tok_s":85.8,"decode_ms_per_tok":11.65,"memory_gb":10.79,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":230.2,"attention_us":173.5,"out_proj_us":184.2,"ffn_up_us":732.1,"ffn_down_us":371.0,"membound_us":21.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":230.2,"attention_us":173.5,"out_proj_us":184.2,"ffn_up_us":732.1,"ffn_down_us":371.0,"membound_us":21.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":8.8,"attention_us":0.6,"out_proj_us":7.0,"ffn_up_us":39.6,"ffn_down_us":19.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":4283.4,"prefill_ms":381.78,"decode_tok_s":84.6,"decode_ms_per_tok":11.82,"memory_gb":11.33,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":617.8,"attention_us":694.1,"out_proj_us":494.2,"ffn_up_us":2928.4,"ffn_down_us":1484.0,"membound_us":84.5,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":617.8,"attention_us":694.1,"out_proj_us":494.2,"ffn_up_us":2928.4,"ffn_down_us":1484.0,"membound_us":84.5,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":8.8,"attention_us":2.5,"out_proj_us":7.1,"ffn_up_us":39.7,"ffn_down_us":19.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":4366.4,"prefill_ms":759.97,"decode_tok_s":83.0,"decode_ms_per_tok":12.05,"memory_gb":12.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1235.6,"attention_us":1388.3,"out_proj_us":988.5,"ffn_up_us":5856.8,"ffn_down_us":2968.0,"membound_us":169.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1235.6,"attention_us":1388.3,"out_proj_us":988.5,"ffn_up_us":5856.8,"ffn_down_us":2968.0,"membound_us":169.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":8.8,"attention_us":5.0,"out_proj_us":7.1,"ffn_up_us":39.8,"ffn_down_us":19.9,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":383.7,"prefill_ms":993.96,"decode_tok_s":12.1,"decode_ms_per_tok":82.43,"memory_gb":97.14,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":902.4,"attention_us":433.8,"out_proj_us":762.1,"ffn_up_us":3609.5,"ffn_down_us":1829.1,"membound_us":48.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":902.4,"attention_us":433.8,"out_proj_us":762.1,"ffn_up_us":3609.5,"ffn_down_us":1829.1,"membound_us":48.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":48.8,"attention_us":1.3,"out_proj_us":40.7,"ffn_up_us":195.4,"ffn_down_us":97.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"h100","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":415.2,"prefill_ms":3952.43,"decode_tok_s":12.0,"decode_ms_per_tok":83.18,"memory_gb":98.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3609.5,"attention_us":1735.3,"out_proj_us":3048.6,"ffn_up_us":14438.0,"ffn_down_us":7316.6,"membound_us":195.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3609.5,"attention_us":1735.3,"out_proj_us":3048.6,"ffn_up_us":14438.0,"ffn_down_us":7316.6,"membound_us":195.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":48.9,"attention_us":5.0,"out_proj_us":40.7,"ffn_up_us":195.5,"ffn_down_us":97.7,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"h100","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":512.6,"prefill_ms":6467.14,"decode_tok_s":11.9,"decode_ms_per_tok":84.19,"memory_gb":101.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":7219.0,"attention_us":3470.7,"out_proj_us":6097.1,"ffn_up_us":21665.0,"ffn_down_us":10844.8,"membound_us":390.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":7219.0,"attention_us":3470.7,"out_proj_us":6097.1,"ffn_up_us":21665.0,"ffn_down_us":10844.8,"membound_us":390.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":48.9,"attention_us":10.0,"out_proj_us":40.8,"ffn_up_us":195.6,"ffn_down_us":97.8,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":7861.9,"prefill_ms":49.19,"decode_tok_s":139.6,"decode_ms_per_tok":7.16,"memory_gb":13.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":190.9,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":343.6,"ffn_down_us":205.2,"membound_us":12.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":190.9,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":343.6,"ffn_down_us":205.2,"membound_us":12.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":12.6,"attention_us":2.1,"out_proj_us":4.2,"ffn_up_us":22.6,"ffn_down_us":11.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":9495.6,"prefill_ms":175.46,"decode_tok_s":131.3,"decode_ms_per_tok":7.61,"memory_gb":15.18,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":744.5,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1336.2,"ffn_down_us":666.9,"membound_us":50.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":744.5,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1336.2,"ffn_down_us":666.9,"membound_us":50.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":12.6,"attention_us":8.4,"out_proj_us":4.2,"ffn_up_us":22.6,"ffn_down_us":11.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":9789.7,"prefill_ms":345.48,"decode_tok_s":121.7,"decode_ms_per_tok":8.22,"memory_gb":17.8,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1469.8,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":2634.2,"ffn_down_us":1333.8,"membound_us":100.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1469.8,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":2634.2,"ffn_down_us":1333.8,"membound_us":100.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":12.6,"attention_us":16.8,"out_proj_us":4.2,"ffn_up_us":22.6,"ffn_down_us":11.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":4478.3,"prefill_ms":85.39,"decode_tok_s":86.6,"decode_ms_per_tok":11.55,"memory_gb":25.22,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":286.3,"attention_us":95.4,"out_proj_us":95.4,"ffn_up_us":524.9,"ffn_down_us":257.7,"membound_us":15.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":286.3,"attention_us":95.4,"out_proj_us":95.4,"ffn_up_us":524.9,"ffn_down_us":257.7,"membound_us":15.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":19.7,"attention_us":2.6,"out_proj_us":6.6,"ffn_up_us":35.4,"ffn_down_us":17.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":5011.1,"prefill_ms":332.28,"decode_tok_s":81.6,"decode_ms_per_tok":12.26,"memory_gb":28.15,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1145.3,"attention_us":381.8,"out_proj_us":381.8,"ffn_up_us":2099.8,"ffn_down_us":1030.8,"membound_us":62.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1145.3,"attention_us":381.8,"out_proj_us":381.8,"ffn_up_us":2099.8,"ffn_down_us":1030.8,"membound_us":62.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":19.7,"attention_us":10.5,"out_proj_us":6.6,"ffn_up_us":35.4,"ffn_down_us":17.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":5136.0,"prefill_ms":658.38,"decode_tok_s":75.8,"decode_ms_per_tok":13.2,"memory_gb":32.06,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2290.6,"attention_us":763.5,"out_proj_us":763.5,"ffn_up_us":4151.8,"ffn_down_us":2061.6,"membound_us":125.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2290.6,"attention_us":763.5,"out_proj_us":763.5,"ffn_up_us":4151.8,"ffn_down_us":2061.6,"membound_us":125.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":19.7,"attention_us":21.0,"out_proj_us":6.6,"ffn_up_us":35.5,"ffn_down_us":17.7,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":848.7,"prefill_ms":450.33,"decode_tok_s":21.4,"decode_ms_per_tok":46.66,"memory_gb":129.1,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":305.4,"attention_us":152.7,"out_proj_us":267.2,"ffn_up_us":1756.2,"ffn_down_us":935.3,"membound_us":25.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":305.4,"attention_us":152.7,"out_proj_us":267.2,"ffn_up_us":1756.2,"ffn_down_us":935.3,"membound_us":25.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.0,"attention_us":0.5,"out_proj_us":16.8,"ffn_up_us":117.5,"ffn_down_us":58.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":968.1,"prefill_ms":1718.7,"decode_tok_s":21.3,"decode_ms_per_tok":46.97,"memory_gb":130.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1221.7,"attention_us":610.8,"out_proj_us":992.6,"ffn_up_us":6871.9,"ffn_down_us":3474.2,"membound_us":100.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1221.7,"attention_us":610.8,"out_proj_us":992.6,"ffn_up_us":6871.9,"ffn_down_us":3474.2,"membound_us":100.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.0,"attention_us":2.1,"out_proj_us":16.8,"ffn_up_us":117.5,"ffn_down_us":58.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":985.2,"prefill_ms":3431.2,"decode_tok_s":21.1,"decode_ms_per_tok":47.38,"memory_gb":133.48,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2443.4,"attention_us":1221.7,"out_proj_us":1985.2,"ffn_up_us":13743.9,"ffn_down_us":6948.3,"membound_us":201.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2443.4,"attention_us":1221.7,"out_proj_us":1985.2,"ffn_up_us":13743.9,"ffn_down_us":6948.3,"membound_us":201.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.0,"attention_us":4.2,"out_proj_us":16.8,"ffn_up_us":117.6,"ffn_down_us":58.8,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":7175.0,"prefill_ms":53.37,"decode_tok_s":136.4,"decode_ms_per_tok":7.33,"memory_gb":15.24,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":95.4,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":458.1,"ffn_down_us":267.2,"membound_us":12.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":95.4,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":458.1,"ffn_down_us":267.2,"membound_us":12.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":0.5,"out_proj_us":4.2,"ffn_up_us":29.4,"ffn_down_us":14.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":8884.9,"prefill_ms":186.85,"decode_tok_s":134.3,"decode_ms_per_tok":7.45,"memory_gb":16.08,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":381.8,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1718.0,"ffn_down_us":868.5,"membound_us":50.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":381.8,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1718.0,"ffn_down_us":868.5,"membound_us":50.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":2.1,"out_proj_us":4.2,"ffn_up_us":29.4,"ffn_down_us":14.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":9119.3,"prefill_ms":370.24,"decode_tok_s":131.5,"decode_ms_per_tok":7.6,"memory_gb":17.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":744.5,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":3436.0,"ffn_down_us":1737.1,"membound_us":100.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":744.5,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":3436.0,"ffn_down_us":1737.1,"membound_us":100.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":4.2,"out_proj_us":4.2,"ffn_up_us":29.4,"ffn_down_us":14.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":846.6,"prefill_ms":450.33,"decode_tok_s":21.4,"decode_ms_per_tok":46.66,"memory_gb":132.04,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":305.4,"attention_us":152.7,"out_proj_us":267.2,"ffn_up_us":1756.2,"ffn_down_us":935.3,"membound_us":25.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":305.4,"attention_us":152.7,"out_proj_us":267.2,"ffn_up_us":1756.2,"ffn_down_us":935.3,"membound_us":25.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.0,"attention_us":0.5,"out_proj_us":16.8,"ffn_up_us":117.5,"ffn_down_us":58.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":967.4,"prefill_ms":1718.7,"decode_tok_s":21.3,"decode_ms_per_tok":46.97,"memory_gb":133.92,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1221.7,"attention_us":610.8,"out_proj_us":992.6,"ffn_up_us":6871.9,"ffn_down_us":3474.2,"membound_us":100.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1221.7,"attention_us":610.8,"out_proj_us":992.6,"ffn_up_us":6871.9,"ffn_down_us":3474.2,"membound_us":100.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.0,"attention_us":2.1,"out_proj_us":16.8,"ffn_up_us":117.5,"ffn_down_us":58.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":984.9,"prefill_ms":3431.2,"decode_tok_s":21.1,"decode_ms_per_tok":47.38,"memory_gb":136.42,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2443.4,"attention_us":1221.7,"out_proj_us":1985.2,"ffn_up_us":13743.9,"ffn_down_us":6948.3,"membound_us":201.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2443.4,"attention_us":1221.7,"out_proj_us":1985.2,"ffn_up_us":13743.9,"ffn_down_us":6948.3,"membound_us":201.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.0,"attention_us":4.2,"out_proj_us":16.8,"ffn_up_us":117.6,"ffn_down_us":58.8,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":7252.1,"prefill_ms":53.37,"decode_tok_s":136.4,"decode_ms_per_tok":7.33,"memory_gb":13.77,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":95.4,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":458.1,"ffn_down_us":267.2,"membound_us":12.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":95.4,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":458.1,"ffn_down_us":267.2,"membound_us":12.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":0.5,"out_proj_us":4.2,"ffn_up_us":29.4,"ffn_down_us":14.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":8914.2,"prefill_ms":186.85,"decode_tok_s":134.3,"decode_ms_per_tok":7.45,"memory_gb":14.61,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":381.8,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1718.0,"ffn_down_us":868.5,"membound_us":50.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":381.8,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1718.0,"ffn_down_us":868.5,"membound_us":50.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":2.1,"out_proj_us":4.2,"ffn_up_us":29.4,"ffn_down_us":14.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":9134.7,"prefill_ms":370.24,"decode_tok_s":131.5,"decode_ms_per_tok":7.6,"memory_gb":15.74,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":744.5,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":3436.0,"ffn_down_us":1737.1,"membound_us":100.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":744.5,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":3436.0,"ffn_down_us":1737.1,"membound_us":100.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":4.2,"out_proj_us":4.2,"ffn_up_us":29.4,"ffn_down_us":14.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":6143.8,"prefill_ms":61.7,"decode_tok_s":108.6,"decode_ms_per_tok":9.2,"memory_gb":19.39,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":116.9,"attention_us":76.4,"out_proj_us":57.3,"ffn_up_us":400.9,"ffn_down_us":200.4,"membound_us":11.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":116.9,"attention_us":76.4,"out_proj_us":57.3,"ffn_up_us":400.9,"ffn_down_us":200.4,"membound_us":11.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":7.3,"attention_us":1.0,"out_proj_us":3.7,"ffn_up_us":25.7,"ffn_down_us":12.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":7272.3,"prefill_ms":228.0,"decode_tok_s":105.2,"decode_ms_per_tok":9.5,"memory_gb":20.78,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":434.3,"attention_us":305.4,"out_proj_us":229.1,"ffn_up_us":1503.2,"ffn_down_us":801.7,"membound_us":44.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":434.3,"attention_us":305.4,"out_proj_us":229.1,"ffn_up_us":1503.2,"ffn_down_us":801.7,"membound_us":44.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":7.4,"attention_us":4.2,"out_proj_us":3.7,"ffn_up_us":25.7,"ffn_down_us":12.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":7548.1,"prefill_ms":446.94,"decode_tok_s":101.0,"decode_ms_per_tok":9.9,"memory_gb":22.64,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":868.5,"attention_us":610.8,"out_proj_us":439.0,"ffn_up_us":3006.5,"ffn_down_us":1536.6,"membound_us":88.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":868.5,"attention_us":610.8,"out_proj_us":439.0,"ffn_up_us":3006.5,"ffn_down_us":1536.6,"membound_us":88.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":7.4,"attention_us":8.4,"out_proj_us":3.7,"ffn_up_us":25.8,"ffn_down_us":12.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":7157.0,"prefill_ms":53.39,"decode_tok_s":129.2,"decode_ms_per_tok":7.74,"memory_gb":15.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":95.4,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":381.8,"ffn_down_us":229.1,"membound_us":12.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":95.4,"attention_us":76.4,"out_proj_us":76.4,"ffn_up_us":381.8,"ffn_down_us":229.1,"membound_us":12.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":0.5,"out_proj_us":4.2,"ffn_up_us":25.2,"ffn_down_us":12.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":8750.0,"prefill_ms":189.7,"decode_tok_s":127.0,"decode_ms_per_tok":7.87,"memory_gb":16.44,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":381.8,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1488.9,"ffn_down_us":744.5,"membound_us":50.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":381.8,"attention_us":305.4,"out_proj_us":248.2,"ffn_up_us":1488.9,"ffn_down_us":744.5,"membound_us":50.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":2.1,"out_proj_us":4.2,"ffn_up_us":25.2,"ffn_down_us":12.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":9042.9,"prefill_ms":373.29,"decode_tok_s":124.2,"decode_ms_per_tok":8.05,"memory_gb":17.63,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":744.5,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":2939.7,"ffn_down_us":1488.9,"membound_us":100.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":744.5,"attention_us":610.8,"out_proj_us":496.3,"ffn_up_us":2939.7,"ffn_down_us":1488.9,"membound_us":100.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":6.3,"attention_us":4.2,"out_proj_us":4.2,"ffn_up_us":25.2,"ffn_down_us":12.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1850.8,"prefill_ms":205.59,"decode_tok_s":41.2,"decode_ms_per_tok":24.24,"memory_gb":61.47,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":190.9,"attention_us":152.7,"out_proj_us":152.7,"ffn_up_us":954.4,"ffn_down_us":477.2,"membound_us":15.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":190.9,"attention_us":152.7,"out_proj_us":152.7,"ffn_up_us":954.4,"ffn_down_us":477.2,"membound_us":15.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":13.1,"attention_us":0.5,"out_proj_us":10.5,"ffn_up_us":65.6,"ffn_down_us":32.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":2059.7,"prefill_ms":807.51,"decode_tok_s":40.8,"decode_ms_per_tok":24.48,"memory_gb":62.81,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":763.5,"attention_us":610.8,"out_proj_us":610.8,"ffn_up_us":3817.7,"ffn_down_us":1908.9,"membound_us":62.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":763.5,"attention_us":610.8,"out_proj_us":610.8,"ffn_up_us":3817.7,"ffn_down_us":1908.9,"membound_us":62.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":13.1,"attention_us":2.1,"out_proj_us":10.5,"ffn_up_us":65.6,"ffn_down_us":32.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":2099.2,"prefill_ms":1610.07,"decode_tok_s":40.3,"decode_ms_per_tok":24.8,"memory_gb":64.59,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1527.1,"attention_us":1221.7,"out_proj_us":1221.7,"ffn_up_us":7635.5,"ffn_down_us":3817.7,"membound_us":125.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1527.1,"attention_us":1221.7,"out_proj_us":1221.7,"ffn_up_us":7635.5,"ffn_down_us":3817.7,"membound_us":125.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":13.1,"attention_us":4.2,"out_proj_us":10.5,"ffn_up_us":65.7,"ffn_down_us":32.8,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1064.0,"prefill_ms":359.5,"decode_tok_s":27.0,"decode_ms_per_tok":37.0,"memory_gb":105.95,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1302.8,"attention_us":305.4,"out_proj_us":458.1,"ffn_up_us":1002.2,"ffn_down_us":515.4,"membound_us":22.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1302.8,"attention_us":305.4,"out_proj_us":458.1,"ffn_up_us":1002.2,"ffn_down_us":515.4,"membound_us":22.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":88.1,"attention_us":8.4,"out_proj_us":29.4,"ffn_up_us":66.1,"ffn_down_us":33.0,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1199.3,"prefill_ms":1388.15,"decode_tok_s":24.7,"decode_ms_per_tok":40.43,"memory_gb":118.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5144.4,"attention_us":1221.7,"out_proj_us":1756.2,"ffn_up_us":3875.0,"ffn_down_us":1975.7,"membound_us":88.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5144.4,"attention_us":1221.7,"out_proj_us":1756.2,"ffn_up_us":3875.0,"ffn_down_us":1975.7,"membound_us":88.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":88.1,"attention_us":33.6,"out_proj_us":29.4,"ffn_up_us":66.1,"ffn_down_us":33.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1227.0,"prefill_ms":2755.61,"decode_tok_s":22.2,"decode_ms_per_tok":45.01,"memory_gb":134.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":10288.8,"attention_us":2443.4,"out_proj_us":3436.0,"ffn_up_us":7750.0,"ffn_down_us":3865.5,"membound_us":176.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":10288.8,"attention_us":2443.4,"out_proj_us":3436.0,"ffn_up_us":7750.0,"ffn_down_us":3865.5,"membound_us":176.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":88.2,"attention_us":67.1,"out_proj_us":29.4,"ffn_up_us":66.2,"ffn_down_us":33.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1468.4,"prefill_ms":259.49,"decode_tok_s":35.1,"decode_ms_per_tok":28.47,"memory_gb":78.28,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":668.1,"attention_us":152.7,"out_proj_us":229.1,"ffn_up_us":1002.2,"ffn_down_us":515.4,"membound_us":22.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":668.1,"attention_us":152.7,"out_proj_us":229.1,"ffn_up_us":1002.2,"ffn_down_us":515.4,"membound_us":22.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":44.0,"attention_us":4.2,"out_proj_us":14.7,"ffn_up_us":66.1,"ffn_down_us":33.0,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1681.5,"prefill_ms":988.58,"decode_tok_s":33.1,"decode_ms_per_tok":30.2,"memory_gb":84.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2572.2,"attention_us":610.8,"out_proj_us":878.1,"ffn_up_us":3875.0,"ffn_down_us":1975.7,"membound_us":88.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2572.2,"attention_us":610.8,"out_proj_us":878.1,"ffn_up_us":3875.0,"ffn_down_us":1975.7,"membound_us":88.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":44.1,"attention_us":16.8,"out_proj_us":14.7,"ffn_up_us":66.1,"ffn_down_us":33.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1723.5,"prefill_ms":1960.24,"decode_tok_s":30.8,"decode_ms_per_tok":32.49,"memory_gb":93.54,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5144.4,"attention_us":1221.7,"out_proj_us":1718.0,"ffn_up_us":7750.0,"ffn_down_us":3865.5,"membound_us":176.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5144.4,"attention_us":1221.7,"out_proj_us":1718.0,"ffn_up_us":7750.0,"ffn_down_us":3865.5,"membound_us":176.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":44.1,"attention_us":33.6,"out_proj_us":14.7,"ffn_up_us":66.2,"ffn_down_us":33.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1668.4,"prefill_ms":228.15,"decode_tok_s":36.0,"decode_ms_per_tok":27.77,"memory_gb":68.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":286.3,"attention_us":76.4,"out_proj_us":95.4,"ffn_up_us":859.0,"ffn_down_us":429.5,"membound_us":18.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":286.3,"attention_us":76.4,"out_proj_us":95.4,"ffn_up_us":859.0,"ffn_down_us":429.5,"membound_us":18.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.9,"attention_us":2.1,"out_proj_us":6.3,"ffn_up_us":56.6,"ffn_down_us":28.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1896.5,"prefill_ms":876.47,"decode_tok_s":34.6,"decode_ms_per_tok":28.88,"memory_gb":73.34,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1116.7,"attention_us":305.4,"out_proj_us":381.8,"ffn_up_us":3321.4,"ffn_down_us":1718.0,"membound_us":75.5,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1116.7,"attention_us":305.4,"out_proj_us":381.8,"ffn_up_us":3321.4,"ffn_down_us":1718.0,"membound_us":75.5,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.9,"attention_us":8.4,"out_proj_us":6.3,"ffn_up_us":56.7,"ffn_down_us":28.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1952.7,"prefill_ms":1730.09,"decode_tok_s":32.9,"decode_ms_per_tok":30.36,"memory_gb":79.16,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2204.7,"attention_us":610.8,"out_proj_us":744.5,"ffn_up_us":6642.9,"ffn_down_us":3350.1,"membound_us":151.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2204.7,"attention_us":610.8,"out_proj_us":744.5,"ffn_up_us":6642.9,"ffn_down_us":3350.1,"membound_us":151.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.9,"attention_us":16.8,"out_proj_us":6.3,"ffn_up_us":56.7,"ffn_down_us":28.4,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":10187.6,"prefill_ms":37.56,"decode_tok_s":156.6,"decode_ms_per_tok":6.38,"memory_gb":10.79,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":53.7,"attention_us":76.4,"out_proj_us":57.3,"ffn_up_us":241.6,"ffn_down_us":161.1,"membound_us":8.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":53.7,"attention_us":76.4,"out_proj_us":57.3,"ffn_up_us":241.6,"ffn_down_us":161.1,"membound_us":8.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":3.7,"attention_us":0.3,"out_proj_us":3.0,"ffn_up_us":16.6,"ffn_down_us":8.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":12446.2,"prefill_ms":133.41,"decode_tok_s":155.0,"decode_ms_per_tok":6.45,"memory_gb":11.33,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":214.7,"attention_us":305.4,"out_proj_us":190.9,"ffn_up_us":966.4,"ffn_down_us":536.9,"membound_us":35.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":214.7,"attention_us":305.4,"out_proj_us":190.9,"ffn_up_us":966.4,"ffn_down_us":536.9,"membound_us":35.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":3.7,"attention_us":1.0,"out_proj_us":3.0,"ffn_up_us":16.6,"ffn_down_us":8.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":12992.6,"prefill_ms":259.81,"decode_tok_s":152.9,"decode_ms_per_tok":6.54,"memory_gb":12.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":429.5,"attention_us":610.8,"out_proj_us":362.7,"ffn_up_us":1932.7,"ffn_down_us":1020.1,"membound_us":70.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":429.5,"attention_us":610.8,"out_proj_us":362.7,"ffn_up_us":1932.7,"ffn_down_us":1020.1,"membound_us":70.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":3.7,"attention_us":2.1,"out_proj_us":3.0,"ffn_up_us":16.6,"ffn_down_us":8.3,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1095.3,"prefill_ms":350.22,"decode_tok_s":27.6,"decode_ms_per_tok":36.18,"memory_gb":97.14,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":310.2,"attention_us":190.9,"out_proj_us":286.3,"ffn_up_us":1240.8,"ffn_down_us":687.2,"membound_us":20.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":310.2,"attention_us":190.9,"out_proj_us":286.3,"ffn_up_us":1240.8,"ffn_down_us":687.2,"membound_us":20.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":20.5,"attention_us":0.5,"out_proj_us":17.0,"ffn_up_us":81.8,"ffn_down_us":40.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"b200","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1285.7,"prefill_ms":1294.22,"decode_tok_s":27.4,"decode_ms_per_tok":36.48,"memory_gb":98.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1209.7,"attention_us":763.5,"out_proj_us":1002.2,"ffn_up_us":4777.0,"ffn_down_us":2405.2,"membound_us":81.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1209.7,"attention_us":763.5,"out_proj_us":1002.2,"ffn_up_us":4777.0,"ffn_down_us":2405.2,"membound_us":81.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":20.5,"attention_us":2.1,"out_proj_us":17.1,"ffn_up_us":81.9,"ffn_down_us":40.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"b200","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1311.0,"prefill_ms":2578.5,"decode_tok_s":27.1,"decode_ms_per_tok":36.87,"memory_gb":101.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2388.5,"attention_us":1527.1,"out_proj_us":2004.3,"ffn_up_us":9553.9,"ffn_down_us":4810.4,"membound_us":163.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2388.5,"attention_us":1527.1,"out_proj_us":2004.3,"ffn_up_us":9553.9,"ffn_down_us":4810.4,"membound_us":163.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":20.5,"attention_us":4.2,"out_proj_us":17.1,"ffn_up_us":81.9,"ffn_down_us":41.0,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1352.8,"prefill_ms":281.32,"decode_tok_s":34.6,"decode_ms_per_tok":28.93,"memory_gb":13.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1046.5,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":1875.0,"ffn_down_us":937.5,"membound_us":62.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1046.5,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":1875.0,"ffn_down_us":937.5,"membound_us":62.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":62.9,"attention_us":10.5,"out_proj_us":21.0,"ffn_up_us":112.8,"ffn_down_us":56.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1478.2,"prefill_ms":1111.31,"decode_tok_s":31.6,"decode_ms_per_tok":31.61,"memory_gb":15.18,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":7499.8,"ffn_down_us":3749.9,"membound_us":251.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":7499.8,"ffn_down_us":3749.9,"membound_us":251.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":63.0,"attention_us":41.9,"out_proj_us":21.0,"ffn_up_us":112.9,"ffn_down_us":56.4,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1501.4,"prefill_ms":2217.97,"decode_tok_s":28.4,"decode_ms_per_tok":35.18,"memory_gb":17.8,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":8371.9,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":14999.7,"ffn_down_us":7499.8,"membound_us":503.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":8371.9,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":14999.7,"ffn_down_us":7499.8,"membound_us":503.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":63.1,"attention_us":83.9,"out_proj_us":21.1,"ffn_up_us":113.0,"ffn_down_us":56.5,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":710.0,"prefill_ms":535.22,"decode_tok_s":19.4,"decode_ms_per_tok":51.55,"memory_gb":25.22,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1635.1,"attention_us":605.6,"out_proj_us":545.0,"ffn_up_us":2943.3,"ffn_down_us":1471.6,"membound_us":78.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1635.1,"attention_us":605.6,"out_proj_us":545.0,"ffn_up_us":2943.3,"ffn_down_us":1471.6,"membound_us":78.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":98.3,"attention_us":13.1,"out_proj_us":32.8,"ffn_up_us":177.0,"ffn_down_us":88.5,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":773.4,"prefill_ms":2123.44,"decode_tok_s":17.9,"decode_ms_per_tok":55.74,"memory_gb":28.15,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6540.6,"attention_us":2422.4,"out_proj_us":2180.2,"ffn_up_us":11773.0,"ffn_down_us":5886.5,"membound_us":314.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6540.6,"attention_us":2422.4,"out_proj_us":2180.2,"ffn_up_us":11773.0,"ffn_down_us":5886.5,"membound_us":314.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":98.4,"attention_us":52.4,"out_proj_us":32.8,"ffn_up_us":177.1,"ffn_down_us":88.6,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":785.1,"prefill_ms":4241.06,"decode_tok_s":16.3,"decode_ms_per_tok":61.32,"memory_gb":32.06,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":13081.1,"attention_us":4844.9,"out_proj_us":4360.4,"ffn_up_us":23546.0,"ffn_down_us":11773.0,"membound_us":629.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":13081.1,"attention_us":4844.9,"out_proj_us":4360.4,"ffn_up_us":23546.0,"ffn_down_us":11773.0,"membound_us":629.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":98.5,"attention_us":104.9,"out_proj_us":32.9,"ffn_up_us":177.3,"ffn_down_us":88.7,"membound_us":0.3,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":137.4,"prefill_ms":2758.56,"decode_tok_s":4.1,"decode_ms_per_tok":242.61,"memory_gb":129.1,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1744.1,"attention_us":969.0,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":125.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1744.1,"attention_us":969.0,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":125.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":104.9,"attention_us":2.6,"out_proj_us":83.9,"ffn_up_us":587.3,"ffn_down_us":293.6,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":149.2,"prefill_ms":10999.34,"decode_tok_s":4.1,"decode_ms_per_tok":244.42,"memory_gb":130.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6976.6,"attention_us":3875.9,"out_proj_us":5581.3,"ffn_up_us":39068.9,"ffn_down_us":19534.5,"membound_us":503.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6976.6,"attention_us":3875.9,"out_proj_us":5581.3,"ffn_up_us":39068.9,"ffn_down_us":19534.5,"membound_us":503.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":104.9,"attention_us":10.5,"out_proj_us":84.0,"ffn_up_us":587.6,"ffn_down_us":293.8,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":151.4,"prefill_ms":21987.05,"decode_tok_s":4.1,"decode_ms_per_tok":246.83,"memory_gb":133.48,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":13953.2,"attention_us":7751.8,"out_proj_us":11162.6,"ffn_up_us":78137.9,"ffn_down_us":39068.9,"membound_us":1006.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":13953.2,"attention_us":7751.8,"out_proj_us":11162.6,"ffn_up_us":78137.9,"ffn_down_us":39068.9,"membound_us":1006.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":105.0,"attention_us":21.0,"out_proj_us":84.0,"ffn_up_us":587.9,"ffn_down_us":294.0,"membound_us":0.5,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1252.8,"prefill_ms":300.35,"decode_tok_s":33.4,"decode_ms_per_tok":29.93,"memory_gb":15.24,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":523.2,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":2441.8,"ffn_down_us":1220.9,"membound_us":62.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":523.2,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":2441.8,"ffn_down_us":1220.9,"membound_us":62.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.5,"attention_us":2.6,"out_proj_us":21.0,"ffn_up_us":146.8,"ffn_down_us":73.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1379.2,"prefill_ms":1187.42,"decode_tok_s":32.7,"decode_ms_per_tok":30.62,"memory_gb":16.08,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2093.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":251.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2093.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":251.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.5,"attention_us":10.5,"out_proj_us":21.0,"ffn_up_us":147.0,"ffn_down_us":73.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1402.8,"prefill_ms":2370.18,"decode_tok_s":31.7,"decode_ms_per_tok":31.54,"memory_gb":17.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":19534.5,"ffn_down_us":9767.2,"membound_us":503.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":19534.5,"ffn_down_us":9767.2,"membound_us":503.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.6,"attention_us":21.0,"out_proj_us":21.1,"ffn_up_us":147.2,"ffn_down_us":73.6,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":137.0,"prefill_ms":2758.56,"decode_tok_s":4.1,"decode_ms_per_tok":242.61,"memory_gb":132.04,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1744.1,"attention_us":969.0,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":125.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1744.1,"attention_us":969.0,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":125.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":104.9,"attention_us":2.6,"out_proj_us":83.9,"ffn_up_us":587.3,"ffn_down_us":293.6,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":149.1,"prefill_ms":10999.34,"decode_tok_s":4.1,"decode_ms_per_tok":244.42,"memory_gb":133.92,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6976.6,"attention_us":3875.9,"out_proj_us":5581.3,"ffn_up_us":39068.9,"ffn_down_us":19534.5,"membound_us":503.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6976.6,"attention_us":3875.9,"out_proj_us":5581.3,"ffn_up_us":39068.9,"ffn_down_us":19534.5,"membound_us":503.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":104.9,"attention_us":10.5,"out_proj_us":84.0,"ffn_up_us":587.6,"ffn_down_us":293.8,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":151.3,"prefill_ms":21987.05,"decode_tok_s":4.1,"decode_ms_per_tok":246.83,"memory_gb":136.42,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":13953.2,"attention_us":7751.8,"out_proj_us":11162.6,"ffn_up_us":78137.9,"ffn_down_us":39068.9,"membound_us":1006.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":13953.2,"attention_us":7751.8,"out_proj_us":11162.6,"ffn_up_us":78137.9,"ffn_down_us":39068.9,"membound_us":1006.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":105.0,"attention_us":21.0,"out_proj_us":84.0,"ffn_up_us":587.9,"ffn_down_us":294.0,"membound_us":0.5,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1266.3,"prefill_ms":300.35,"decode_tok_s":33.4,"decode_ms_per_tok":29.93,"memory_gb":13.77,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":523.2,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":2441.8,"ffn_down_us":1220.9,"membound_us":62.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":523.2,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":2441.8,"ffn_down_us":1220.9,"membound_us":62.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.5,"attention_us":2.6,"out_proj_us":21.0,"ffn_up_us":146.8,"ffn_down_us":73.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1383.3,"prefill_ms":1187.42,"decode_tok_s":32.7,"decode_ms_per_tok":30.62,"memory_gb":14.61,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2093.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":251.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2093.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":9767.2,"ffn_down_us":4883.6,"membound_us":251.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.5,"attention_us":10.5,"out_proj_us":21.0,"ffn_up_us":147.0,"ffn_down_us":73.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1404.9,"prefill_ms":2370.18,"decode_tok_s":31.7,"decode_ms_per_tok":31.54,"memory_gb":15.74,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":19534.5,"ffn_down_us":9767.2,"membound_us":503.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":19534.5,"ffn_down_us":9767.2,"membound_us":503.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.6,"attention_us":21.0,"out_proj_us":21.1,"ffn_up_us":147.2,"ffn_down_us":73.6,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1034.0,"prefill_ms":361.97,"decode_tok_s":27.2,"decode_ms_per_tok":36.81,"memory_gb":19.39,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":610.5,"attention_us":484.5,"out_proj_us":305.2,"ffn_up_us":2136.6,"ffn_down_us":1068.3,"membound_us":55.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":610.5,"attention_us":484.5,"out_proj_us":305.2,"ffn_up_us":2136.6,"ffn_down_us":1068.3,"membound_us":55.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":36.7,"attention_us":5.2,"out_proj_us":18.4,"ffn_up_us":128.5,"ffn_down_us":64.2,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1143.9,"prefill_ms":1429.55,"decode_tok_s":25.9,"decode_ms_per_tok":38.59,"memory_gb":20.78,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2441.8,"attention_us":1937.9,"out_proj_us":1220.9,"ffn_up_us":8546.3,"ffn_down_us":4273.2,"membound_us":220.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2441.8,"attention_us":1937.9,"out_proj_us":1220.9,"ffn_up_us":8546.3,"ffn_down_us":4273.2,"membound_us":220.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":36.8,"attention_us":21.0,"out_proj_us":18.4,"ffn_up_us":128.6,"ffn_down_us":64.3,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1164.5,"prefill_ms":2853.0,"decode_tok_s":24.4,"decode_ms_per_tok":40.96,"memory_gb":22.64,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4883.6,"attention_us":3875.9,"out_proj_us":2441.8,"ffn_up_us":17092.7,"ffn_down_us":8546.3,"membound_us":440.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4883.6,"attention_us":3875.9,"out_proj_us":2441.8,"ffn_up_us":17092.7,"ffn_down_us":8546.3,"membound_us":440.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":36.8,"attention_us":41.9,"out_proj_us":18.4,"ffn_up_us":128.8,"ffn_down_us":64.4,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1238.0,"prefill_ms":303.64,"decode_tok_s":32.6,"decode_ms_per_tok":30.69,"memory_gb":15.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":523.2,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":2093.0,"ffn_down_us":1046.5,"membound_us":62.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":523.2,"attention_us":484.5,"out_proj_us":348.8,"ffn_up_us":2093.0,"ffn_down_us":1046.5,"membound_us":62.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.5,"attention_us":2.6,"out_proj_us":21.0,"ffn_up_us":125.9,"ffn_down_us":62.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1365.6,"prefill_ms":1198.85,"decode_tok_s":31.8,"decode_ms_per_tok":31.46,"memory_gb":16.44,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2093.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":8371.9,"ffn_down_us":4186.0,"membound_us":251.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2093.0,"attention_us":1937.9,"out_proj_us":1395.3,"ffn_up_us":8371.9,"ffn_down_us":4186.0,"membound_us":251.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.5,"attention_us":10.5,"out_proj_us":21.0,"ffn_up_us":126.0,"ffn_down_us":63.0,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1389.5,"prefill_ms":2392.46,"decode_tok_s":30.8,"decode_ms_per_tok":32.5,"memory_gb":17.63,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":16743.8,"ffn_down_us":8371.9,"membound_us":503.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4186.0,"attention_us":3875.9,"out_proj_us":2790.6,"ffn_up_us":16743.8,"ffn_down_us":8371.9,"membound_us":503.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":31.6,"attention_us":21.0,"out_proj_us":21.1,"ffn_up_us":126.2,"ffn_down_us":63.1,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":289.1,"prefill_ms":1310.89,"decode_tok_s":8.6,"decode_ms_per_tok":116.6,"memory_gb":61.47,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1090.1,"attention_us":969.0,"out_proj_us":872.1,"ffn_up_us":5450.5,"ffn_down_us":2725.2,"membound_us":78.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1090.1,"attention_us":969.0,"out_proj_us":872.1,"ffn_up_us":5450.5,"ffn_down_us":2725.2,"membound_us":78.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":65.6,"attention_us":2.6,"out_proj_us":52.4,"ffn_up_us":327.8,"ffn_down_us":163.9,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":314.7,"prefill_ms":5215.64,"decode_tok_s":8.5,"decode_ms_per_tok":118.02,"memory_gb":62.81,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":4360.4,"attention_us":3875.9,"out_proj_us":3488.3,"ffn_up_us":21801.9,"ffn_down_us":10900.9,"membound_us":314.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":4360.4,"attention_us":3875.9,"out_proj_us":3488.3,"ffn_up_us":21801.9,"ffn_down_us":10900.9,"membound_us":314.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":65.6,"attention_us":10.5,"out_proj_us":52.5,"ffn_up_us":328.0,"ffn_down_us":164.0,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":319.4,"prefill_ms":10421.98,"decode_tok_s":8.3,"decode_ms_per_tok":119.91,"memory_gb":64.59,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":8720.7,"attention_us":7751.8,"out_proj_us":6976.6,"ffn_up_us":43603.7,"ffn_down_us":21801.9,"membound_us":629.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":8720.7,"attention_us":7751.8,"out_proj_us":6976.6,"ffn_up_us":43603.7,"ffn_down_us":21801.9,"membound_us":629.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":65.7,"attention_us":21.0,"out_proj_us":52.6,"ffn_up_us":328.3,"ffn_down_us":164.1,"membound_us":0.3,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":170.0,"prefill_ms":2233.31,"decode_tok_s":5.2,"decode_ms_per_tok":193.41,"memory_gb":105.95,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":7325.4,"attention_us":1937.9,"out_proj_us":2441.8,"ffn_up_us":5494.1,"ffn_down_us":2747.0,"membound_us":110.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":7325.4,"attention_us":1937.9,"out_proj_us":2441.8,"ffn_up_us":5494.1,"ffn_down_us":2747.0,"membound_us":110.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":440.5,"attention_us":41.9,"out_proj_us":146.8,"ffn_up_us":330.4,"ffn_down_us":165.2,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":184.4,"prefill_ms":8906.61,"decode_tok_s":4.7,"decode_ms_per_tok":213.73,"memory_gb":118.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":29301.7,"attention_us":7751.8,"out_proj_us":9767.2,"ffn_up_us":21976.3,"ffn_down_us":10988.1,"membound_us":440.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":29301.7,"attention_us":7751.8,"out_proj_us":9767.2,"ffn_up_us":21976.3,"ffn_down_us":10988.1,"membound_us":440.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":440.7,"attention_us":167.8,"out_proj_us":146.9,"ffn_up_us":330.6,"ffn_down_us":165.3,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":187.0,"prefill_ms":17804.36,"decode_tok_s":4.2,"decode_ms_per_tok":240.82,"memory_gb":134.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":58603.4,"attention_us":15503.5,"out_proj_us":19534.5,"ffn_up_us":43952.6,"ffn_down_us":21976.3,"membound_us":880.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":58603.4,"attention_us":15503.5,"out_proj_us":19534.5,"ffn_up_us":43952.6,"ffn_down_us":21976.3,"membound_us":880.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":441.0,"attention_us":335.5,"out_proj_us":147.0,"ffn_up_us":330.8,"ffn_down_us":165.4,"membound_us":0.4,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":238.4,"prefill_ms":1584.2,"decode_tok_s":7.0,"decode_ms_per_tok":142.91,"memory_gb":78.28,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3662.7,"attention_us":969.0,"out_proj_us":1220.9,"ffn_up_us":5494.1,"ffn_down_us":2747.0,"membound_us":110.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3662.7,"attention_us":969.0,"out_proj_us":1220.9,"ffn_up_us":5494.1,"ffn_down_us":2747.0,"membound_us":110.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":220.2,"attention_us":21.0,"out_proj_us":73.4,"ffn_up_us":330.4,"ffn_down_us":165.2,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":259.9,"prefill_ms":6310.19,"decode_tok_s":6.5,"decode_ms_per_tok":153.11,"memory_gb":84.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":14650.9,"attention_us":3875.9,"out_proj_us":4883.6,"ffn_up_us":21976.3,"ffn_down_us":10988.1,"membound_us":440.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":14650.9,"attention_us":3875.9,"out_proj_us":4883.6,"ffn_up_us":21976.3,"ffn_down_us":10988.1,"membound_us":440.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":220.4,"attention_us":83.9,"out_proj_us":73.5,"ffn_up_us":330.6,"ffn_down_us":165.3,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":263.8,"prefill_ms":12611.51,"decode_tok_s":6.0,"decode_ms_per_tok":166.71,"memory_gb":93.54,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":29301.7,"attention_us":7751.8,"out_proj_us":9767.2,"ffn_up_us":43952.6,"ffn_down_us":21976.3,"membound_us":880.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":29301.7,"attention_us":7751.8,"out_proj_us":9767.2,"ffn_up_us":43952.6,"ffn_down_us":21976.3,"membound_us":880.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":220.5,"attention_us":167.8,"out_proj_us":73.6,"ffn_up_us":330.8,"ffn_down_us":165.4,"membound_us":0.4,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":271.1,"prefill_ms":1392.04,"decode_tok_s":7.6,"decode_ms_per_tok":131.61,"memory_gb":68.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1569.7,"attention_us":484.5,"out_proj_us":523.2,"ffn_up_us":4709.2,"ffn_down_us":2354.6,"membound_us":94.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1569.7,"attention_us":484.5,"out_proj_us":523.2,"ffn_up_us":4709.2,"ffn_down_us":2354.6,"membound_us":94.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":94.4,"attention_us":10.5,"out_proj_us":31.5,"ffn_up_us":283.2,"ffn_down_us":141.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":296.2,"prefill_ms":5534.11,"decode_tok_s":7.2,"decode_ms_per_tok":138.17,"memory_gb":73.34,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6278.9,"attention_us":1937.9,"out_proj_us":2093.0,"ffn_up_us":18836.8,"ffn_down_us":9418.4,"membound_us":377.5,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6278.9,"attention_us":1937.9,"out_proj_us":2093.0,"ffn_up_us":18836.8,"ffn_down_us":9418.4,"membound_us":377.5,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":94.5,"attention_us":41.9,"out_proj_us":31.5,"ffn_up_us":283.4,"ffn_down_us":141.7,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":300.9,"prefill_ms":11056.87,"decode_tok_s":6.8,"decode_ms_per_tok":146.92,"memory_gb":79.16,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":12557.9,"attention_us":3875.9,"out_proj_us":4186.0,"ffn_up_us":37673.6,"ffn_down_us":18836.8,"membound_us":755.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":12557.9,"attention_us":3875.9,"out_proj_us":4186.0,"ffn_up_us":37673.6,"ffn_down_us":18836.8,"membound_us":755.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":94.6,"attention_us":83.9,"out_proj_us":31.6,"ffn_up_us":283.6,"ffn_down_us":141.8,"membound_us":0.4,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1750.1,"prefill_ms":215.23,"decode_tok_s":44.2,"decode_ms_per_tok":22.64,"memory_gb":10.79,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":313.4,"attention_us":484.5,"out_proj_us":250.7,"ffn_up_us":1410.3,"ffn_down_us":705.2,"membound_us":44.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":313.4,"attention_us":484.5,"out_proj_us":250.7,"ffn_up_us":1410.3,"ffn_down_us":705.2,"membound_us":44.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.4,"attention_us":1.3,"out_proj_us":14.8,"ffn_up_us":83.0,"ffn_down_us":41.5,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1937.8,"prefill_ms":845.23,"decode_tok_s":43.4,"decode_ms_per_tok":23.04,"memory_gb":11.33,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1253.6,"attention_us":1937.9,"out_proj_us":1002.9,"ffn_up_us":5641.2,"ffn_down_us":2820.6,"membound_us":176.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1253.6,"attention_us":1937.9,"out_proj_us":1002.9,"ffn_up_us":5641.2,"ffn_down_us":2820.6,"membound_us":176.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.5,"attention_us":5.2,"out_proj_us":14.8,"ffn_up_us":83.1,"ffn_down_us":41.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1973.0,"prefill_ms":1685.22,"decode_tok_s":42.4,"decode_ms_per_tok":23.57,"memory_gb":12.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2507.2,"attention_us":3875.9,"out_proj_us":2005.8,"ffn_up_us":11282.5,"ffn_down_us":5641.2,"membound_us":353.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2507.2,"attention_us":3875.9,"out_proj_us":2005.8,"ffn_up_us":11282.5,"ffn_down_us":5641.2,"membound_us":353.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.5,"attention_us":10.5,"out_proj_us":14.8,"ffn_up_us":83.2,"ffn_down_us":41.6,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":181.7,"prefill_ms":2086.77,"decode_tok_s":5.5,"decode_ms_per_tok":181.39,"memory_gb":97.14,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1700.5,"attention_us":1211.2,"out_proj_us":1417.1,"ffn_up_us":6802.2,"ffn_down_us":3401.1,"membound_us":102.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1700.5,"attention_us":1211.2,"out_proj_us":1417.1,"ffn_up_us":6802.2,"ffn_down_us":3401.1,"membound_us":102.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":102.3,"attention_us":2.6,"out_proj_us":85.2,"ffn_up_us":409.0,"ffn_down_us":204.5,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":197.5,"prefill_ms":8313.04,"decode_tok_s":5.5,"decode_ms_per_tok":183.13,"memory_gb":98.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6802.2,"attention_us":4844.9,"out_proj_us":5668.5,"ffn_up_us":27208.7,"ffn_down_us":13604.4,"membound_us":408.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6802.2,"attention_us":4844.9,"out_proj_us":5668.5,"ffn_up_us":27208.7,"ffn_down_us":13604.4,"membound_us":408.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":102.3,"attention_us":10.5,"out_proj_us":85.3,"ffn_up_us":409.3,"ffn_down_us":204.6,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"tpu_v5e","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":200.4,"prefill_ms":16614.73,"decode_tok_s":5.4,"decode_ms_per_tok":185.46,"memory_gb":101.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":13604.4,"attention_us":9689.7,"out_proj_us":11337.0,"ffn_up_us":54417.5,"ffn_down_us":27208.7,"membound_us":817.9,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":13604.4,"attention_us":9689.7,"out_proj_us":11337.0,"ffn_up_us":54417.5,"ffn_down_us":27208.7,"membound_us":817.9,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":102.4,"attention_us":21.0,"out_proj_us":85.4,"ffn_up_us":409.6,"ffn_down_us":204.8,"membound_us":0.4,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":3090.5,"prefill_ms":118.56,"decode_tok_s":56.2,"decode_ms_per_tok":17.78,"memory_gb":13.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":449.1,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":804.7,"ffn_down_us":402.4,"membound_us":36.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":449.1,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":804.7,"ffn_down_us":402.4,"membound_us":36.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":36.4,"attention_us":6.1,"out_proj_us":12.1,"ffn_up_us":65.1,"ffn_down_us":32.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":3496.6,"prefill_ms":462.46,"decode_tok_s":51.9,"decode_ms_per_tok":19.25,"memory_gb":15.18,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":3218.9,"ffn_down_us":1609.4,"membound_us":145.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":3218.9,"ffn_down_us":1609.4,"membound_us":145.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":36.4,"attention_us":24.2,"out_proj_us":12.1,"ffn_up_us":65.2,"ffn_down_us":32.6,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":3574.8,"prefill_ms":921.0,"decode_tok_s":47.1,"decode_ms_per_tok":21.21,"memory_gb":17.8,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3593.2,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":6437.8,"ffn_down_us":3218.9,"membound_us":290.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3593.2,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":6437.8,"ffn_down_us":3218.9,"membound_us":290.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":36.4,"attention_us":48.5,"out_proj_us":12.2,"ffn_up_us":65.3,"ffn_down_us":32.6,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":1629.7,"prefill_ms":224.25,"decode_tok_s":32.6,"decode_ms_per_tok":30.67,"memory_gb":25.22,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":701.8,"attention_us":249.5,"out_proj_us":233.9,"ffn_up_us":1263.2,"ffn_down_us":631.6,"membound_us":45.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":701.8,"attention_us":249.5,"out_proj_us":233.9,"ffn_up_us":1263.2,"ffn_down_us":631.6,"membound_us":45.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":56.8,"attention_us":7.6,"out_proj_us":18.9,"ffn_up_us":102.2,"ffn_down_us":51.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":1832.0,"prefill_ms":882.25,"decode_tok_s":30.3,"decode_ms_per_tok":32.96,"memory_gb":28.15,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2807.2,"attention_us":998.1,"out_proj_us":935.7,"ffn_up_us":5052.9,"ffn_down_us":2526.5,"membound_us":181.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2807.2,"attention_us":998.1,"out_proj_us":935.7,"ffn_up_us":5052.9,"ffn_down_us":2526.5,"membound_us":181.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":56.8,"attention_us":30.3,"out_proj_us":19.0,"ffn_up_us":102.3,"ffn_down_us":51.2,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-13B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":1870.8,"prefill_ms":1759.59,"decode_tok_s":27.8,"decode_ms_per_tok":36.03,"memory_gb":32.06,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5614.3,"attention_us":1996.2,"out_proj_us":1871.4,"ffn_up_us":10105.8,"ffn_down_us":5052.9,"membound_us":363.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5614.3,"attention_us":1996.2,"out_proj_us":1871.4,"ffn_up_us":10105.8,"ffn_down_us":5052.9,"membound_us":363.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":56.9,"attention_us":60.6,"out_proj_us":19.0,"ffn_up_us":102.4,"ffn_down_us":51.2,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":317.0,"prefill_ms":1147.71,"decode_tok_s":7.3,"decode_ms_per_tok":137.89,"memory_gb":129.1,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":748.6,"attention_us":399.2,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":72.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":748.6,"attention_us":399.2,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":72.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":60.6,"attention_us":1.5,"out_proj_us":48.5,"ffn_up_us":339.2,"ffn_down_us":169.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":354.0,"prefill_ms":4561.36,"decode_tok_s":7.2,"decode_ms_per_tok":138.88,"memory_gb":130.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2994.3,"attention_us":1597.0,"out_proj_us":2395.5,"ffn_up_us":16768.2,"ffn_down_us":8384.1,"membound_us":290.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2994.3,"attention_us":1597.0,"out_proj_us":2395.5,"ffn_up_us":16768.2,"ffn_down_us":8384.1,"membound_us":290.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":60.6,"attention_us":6.1,"out_proj_us":48.5,"ffn_up_us":339.4,"ffn_down_us":169.7,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-2-70B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":361.1,"prefill_ms":9112.89,"decode_tok_s":7.1,"decode_ms_per_tok":140.21,"memory_gb":133.48,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5988.6,"attention_us":3193.9,"out_proj_us":4790.9,"ffn_up_us":33536.3,"ffn_down_us":16768.2,"membound_us":581.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5988.6,"attention_us":3193.9,"out_proj_us":4790.9,"ffn_up_us":33536.3,"ffn_down_us":16768.2,"membound_us":581.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":60.7,"attention_us":12.1,"out_proj_us":48.5,"ffn_up_us":339.6,"ffn_down_us":169.8,"membound_us":0.3,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2855.7,"prefill_ms":126.44,"decode_tok_s":54.6,"decode_ms_per_tok":18.32,"memory_gb":15.24,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":224.6,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":1048.0,"ffn_down_us":524.0,"membound_us":36.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":224.6,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":1048.0,"ffn_down_us":524.0,"membound_us":36.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":1.5,"out_proj_us":12.1,"ffn_up_us":84.8,"ffn_down_us":42.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":3260.0,"prefill_ms":493.98,"decode_tok_s":53.5,"decode_ms_per_tok":18.71,"memory_gb":16.08,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":898.3,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":145.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":898.3,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":145.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":6.1,"out_proj_us":12.1,"ffn_up_us":84.9,"ffn_down_us":42.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":3338.8,"prefill_ms":984.03,"decode_tok_s":52.0,"decode_ms_per_tok":19.21,"memory_gb":17.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":8384.1,"ffn_down_us":4192.0,"membound_us":290.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":8384.1,"ffn_down_us":4192.0,"membound_us":290.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":12.1,"out_proj_us":12.2,"ffn_up_us":85.0,"ffn_down_us":42.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":316.0,"prefill_ms":1147.71,"decode_tok_s":7.3,"decode_ms_per_tok":137.89,"memory_gb":132.04,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":748.6,"attention_us":399.2,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":72.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":748.6,"attention_us":399.2,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":72.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":60.6,"attention_us":1.5,"out_proj_us":48.5,"ffn_up_us":339.2,"ffn_down_us":169.6,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":353.7,"prefill_ms":4561.36,"decode_tok_s":7.2,"decode_ms_per_tok":138.88,"memory_gb":133.92,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2994.3,"attention_us":1597.0,"out_proj_us":2395.5,"ffn_up_us":16768.2,"ffn_down_us":8384.1,"membound_us":290.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2994.3,"attention_us":1597.0,"out_proj_us":2395.5,"ffn_up_us":16768.2,"ffn_down_us":8384.1,"membound_us":290.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":60.6,"attention_us":6.1,"out_proj_us":48.5,"ffn_up_us":339.4,"ffn_down_us":169.7,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Llama-3-70B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":360.9,"prefill_ms":9112.89,"decode_tok_s":7.1,"decode_ms_per_tok":140.21,"memory_gb":136.42,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5988.6,"attention_us":3193.9,"out_proj_us":4790.9,"ffn_up_us":33536.3,"ffn_down_us":16768.2,"membound_us":581.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5988.6,"attention_us":3193.9,"out_proj_us":4790.9,"ffn_up_us":33536.3,"ffn_down_us":16768.2,"membound_us":581.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":60.7,"attention_us":12.1,"out_proj_us":48.5,"ffn_up_us":339.6,"ffn_down_us":169.8,"membound_us":0.3,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2895.1,"prefill_ms":126.44,"decode_tok_s":54.6,"decode_ms_per_tok":18.32,"memory_gb":13.77,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":224.6,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":1048.0,"ffn_down_us":524.0,"membound_us":36.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":224.6,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":1048.0,"ffn_down_us":524.0,"membound_us":36.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":1.5,"out_proj_us":12.1,"ffn_up_us":84.8,"ffn_down_us":42.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":3272.8,"prefill_ms":493.98,"decode_tok_s":53.5,"decode_ms_per_tok":18.71,"memory_gb":14.61,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":898.3,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":145.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":898.3,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":4192.0,"ffn_down_us":2096.0,"membound_us":145.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":6.1,"out_proj_us":12.1,"ffn_up_us":84.9,"ffn_down_us":42.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Mistral-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":3345.5,"prefill_ms":984.03,"decode_tok_s":52.0,"decode_ms_per_tok":19.21,"memory_gb":15.74,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":8384.1,"ffn_down_us":4192.0,"membound_us":290.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":8384.1,"ffn_down_us":4192.0,"membound_us":290.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":12.1,"out_proj_us":12.2,"ffn_up_us":85.0,"ffn_down_us":42.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2351.5,"prefill_ms":152.52,"decode_tok_s":44.1,"decode_ms_per_tok":22.7,"memory_gb":19.39,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":262.0,"attention_us":199.6,"out_proj_us":131.0,"ffn_up_us":917.0,"ffn_down_us":458.5,"membound_us":31.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":262.0,"attention_us":199.6,"out_proj_us":131.0,"ffn_up_us":917.0,"ffn_down_us":458.5,"membound_us":31.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.2,"attention_us":3.0,"out_proj_us":10.6,"ffn_up_us":74.2,"ffn_down_us":37.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":2702.9,"prefill_ms":594.61,"decode_tok_s":42.2,"decode_ms_per_tok":23.68,"memory_gb":20.78,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1048.0,"attention_us":798.5,"out_proj_us":524.0,"ffn_up_us":3668.0,"ffn_down_us":1834.0,"membound_us":127.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1048.0,"attention_us":798.5,"out_proj_us":524.0,"ffn_up_us":3668.0,"ffn_down_us":1834.0,"membound_us":127.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.2,"attention_us":12.1,"out_proj_us":10.6,"ffn_up_us":74.3,"ffn_down_us":37.1,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Gemma-2-9B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":2771.9,"prefill_ms":1184.07,"decode_tok_s":40.0,"decode_ms_per_tok":24.98,"memory_gb":22.64,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2096.0,"attention_us":1597.0,"out_proj_us":1048.0,"ffn_up_us":7336.1,"ffn_down_us":3668.0,"membound_us":254.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2096.0,"attention_us":1597.0,"out_proj_us":1048.0,"ffn_up_us":7336.1,"ffn_down_us":3668.0,"membound_us":254.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":21.3,"attention_us":24.2,"out_proj_us":10.6,"ffn_up_us":74.4,"ffn_down_us":37.2,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":2816.8,"prefill_ms":128.06,"decode_tok_s":52.7,"decode_ms_per_tok":18.98,"memory_gb":15.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":224.6,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":898.3,"ffn_down_us":449.1,"membound_us":36.3,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":224.6,"attention_us":199.6,"out_proj_us":149.7,"ffn_up_us":898.3,"ffn_down_us":449.1,"membound_us":36.3,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":1.5,"out_proj_us":12.1,"ffn_up_us":72.7,"ffn_down_us":36.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":3226.0,"prefill_ms":499.0,"decode_tok_s":51.5,"decode_ms_per_tok":19.41,"memory_gb":16.44,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":898.3,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":3593.2,"ffn_down_us":1796.6,"membound_us":145.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":898.3,"attention_us":798.5,"out_proj_us":598.9,"ffn_up_us":3593.2,"ffn_down_us":1796.6,"membound_us":145.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":6.1,"out_proj_us":12.1,"ffn_up_us":72.8,"ffn_down_us":36.4,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":3306.1,"prefill_ms":993.57,"decode_tok_s":50.1,"decode_ms_per_tok":19.98,"memory_gb":17.63,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":7186.4,"ffn_down_us":3593.2,"membound_us":290.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1796.6,"attention_us":1597.0,"out_proj_us":1197.7,"ffn_up_us":7186.4,"ffn_down_us":3593.2,"membound_us":290.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":18.2,"attention_us":12.1,"out_proj_us":12.2,"ffn_up_us":72.9,"ffn_down_us":36.4,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":666.1,"prefill_ms":546.33,"decode_tok_s":14.8,"decode_ms_per_tok":67.79,"memory_gb":61.47,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":467.9,"attention_us":399.2,"out_proj_us":374.3,"ffn_up_us":2339.3,"ffn_down_us":1169.7,"membound_us":45.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":467.9,"attention_us":399.2,"out_proj_us":374.3,"ffn_up_us":2339.3,"ffn_down_us":1169.7,"membound_us":45.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":37.9,"attention_us":1.5,"out_proj_us":30.3,"ffn_up_us":189.3,"ffn_down_us":94.7,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":747.0,"prefill_ms":2161.75,"decode_tok_s":14.6,"decode_ms_per_tok":68.57,"memory_gb":62.81,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1871.4,"attention_us":1597.0,"out_proj_us":1497.2,"ffn_up_us":9357.2,"ffn_down_us":4678.6,"membound_us":181.7,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1871.4,"attention_us":1597.0,"out_proj_us":1497.2,"ffn_up_us":9357.2,"ffn_down_us":4678.6,"membound_us":181.7,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":37.9,"attention_us":6.1,"out_proj_us":30.3,"ffn_up_us":189.5,"ffn_down_us":94.7,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Qwen3-32B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":762.4,"prefill_ms":4315.65,"decode_tok_s":14.4,"decode_ms_per_tok":69.61,"memory_gb":64.59,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3742.9,"attention_us":3193.9,"out_proj_us":2994.3,"ffn_up_us":18714.5,"ffn_down_us":9357.2,"membound_us":363.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3742.9,"attention_us":3193.9,"out_proj_us":2994.3,"ffn_up_us":18714.5,"ffn_down_us":9357.2,"membound_us":363.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":37.9,"attention_us":12.1,"out_proj_us":30.4,"ffn_up_us":189.6,"ffn_down_us":94.8,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":393.4,"prefill_ms":926.89,"decode_tok_s":9.1,"decode_ms_per_tok":109.76,"memory_gb":105.95,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":3144.0,"attention_us":798.5,"out_proj_us":1048.0,"ffn_up_us":2358.0,"ffn_down_us":1179.0,"membound_us":63.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":3144.0,"attention_us":798.5,"out_proj_us":1048.0,"ffn_up_us":2358.0,"ffn_down_us":1179.0,"membound_us":63.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":254.4,"attention_us":24.2,"out_proj_us":84.8,"ffn_up_us":190.8,"ffn_down_us":95.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":438.5,"prefill_ms":3685.11,"decode_tok_s":8.3,"decode_ms_per_tok":120.91,"memory_gb":118.21,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":12576.1,"attention_us":3193.9,"out_proj_us":4192.0,"ffn_up_us":9432.1,"ffn_down_us":4716.0,"membound_us":254.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":12576.1,"attention_us":3193.9,"out_proj_us":4192.0,"ffn_up_us":9432.1,"ffn_down_us":4716.0,"membound_us":254.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":254.5,"attention_us":96.9,"out_proj_us":84.9,"ffn_up_us":190.9,"ffn_down_us":95.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"DeepSeek-V3","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":447.1,"prefill_ms":7362.72,"decode_tok_s":7.4,"decode_ms_per_tok":135.78,"memory_gb":134.55,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":25152.2,"attention_us":6387.9,"out_proj_us":8384.1,"ffn_up_us":18864.2,"ffn_down_us":9432.1,"membound_us":508.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":25152.2,"attention_us":6387.9,"out_proj_us":8384.1,"ffn_up_us":18864.2,"ffn_down_us":9432.1,"membound_us":508.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":254.7,"attention_us":193.8,"out_proj_us":84.9,"ffn_up_us":191.1,"ffn_down_us":95.5,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":549.1,"prefill_ms":659.86,"decode_tok_s":12.2,"decode_ms_per_tok":82.05,"memory_gb":78.28,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1572.0,"attention_us":399.2,"out_proj_us":524.0,"ffn_up_us":2358.0,"ffn_down_us":1179.0,"membound_us":63.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1572.0,"attention_us":399.2,"out_proj_us":524.0,"ffn_up_us":2358.0,"ffn_down_us":1179.0,"membound_us":63.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":127.2,"attention_us":12.1,"out_proj_us":42.4,"ffn_up_us":190.8,"ffn_down_us":95.4,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":616.3,"prefill_ms":2616.96,"decode_tok_s":11.4,"decode_ms_per_tok":87.64,"memory_gb":84.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":6288.1,"attention_us":1597.0,"out_proj_us":2096.0,"ffn_up_us":9432.1,"ffn_down_us":4716.0,"membound_us":254.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":6288.1,"attention_us":1597.0,"out_proj_us":2096.0,"ffn_up_us":9432.1,"ffn_down_us":4716.0,"membound_us":254.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":127.3,"attention_us":48.5,"out_proj_us":42.4,"ffn_up_us":190.9,"ffn_down_us":95.5,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"Kimi-K2.5","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":629.2,"prefill_ms":5226.43,"decode_tok_s":10.5,"decode_ms_per_tok":95.11,"memory_gb":93.54,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":12576.1,"attention_us":3193.9,"out_proj_us":4192.0,"ffn_up_us":18864.2,"ffn_down_us":9432.1,"membound_us":508.8,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":12576.1,"attention_us":3193.9,"out_proj_us":4192.0,"ffn_up_us":18864.2,"ffn_down_us":9432.1,"membound_us":508.8,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":127.4,"attention_us":96.9,"out_proj_us":42.5,"ffn_up_us":191.1,"ffn_down_us":95.5,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":621.9,"prefill_ms":582.15,"decode_tok_s":13.0,"decode_ms_per_tok":76.86,"memory_gb":68.98,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":673.7,"attention_us":199.6,"out_proj_us":224.6,"ffn_up_us":2021.2,"ffn_down_us":1010.6,"membound_us":54.5,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":673.7,"attention_us":199.6,"out_proj_us":224.6,"ffn_up_us":2021.2,"ffn_down_us":1010.6,"membound_us":54.5,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":54.5,"attention_us":6.1,"out_proj_us":18.2,"ffn_up_us":163.6,"ffn_down_us":81.8,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":701.1,"prefill_ms":2299.86,"decode_tok_s":12.4,"decode_ms_per_tok":80.46,"memory_gb":73.34,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2694.9,"attention_us":798.5,"out_proj_us":898.3,"ffn_up_us":8084.6,"ffn_down_us":4042.3,"membound_us":218.0,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2694.9,"attention_us":798.5,"out_proj_us":898.3,"ffn_up_us":8084.6,"ffn_down_us":4042.3,"membound_us":218.0,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":54.6,"attention_us":24.2,"out_proj_us":18.2,"ffn_up_us":163.7,"ffn_down_us":81.8,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"GLM-5.1","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":716.2,"prefill_ms":4590.14,"decode_tok_s":11.7,"decode_ms_per_tok":85.26,"memory_gb":79.16,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5389.8,"attention_us":1597.0,"out_proj_us":1796.6,"ffn_up_us":16169.3,"ffn_down_us":8084.6,"membound_us":436.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5389.8,"attention_us":1597.0,"out_proj_us":1796.6,"ffn_up_us":16169.3,"ffn_down_us":8084.6,"membound_us":436.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":54.6,"attention_us":48.5,"out_proj_us":18.2,"ffn_up_us":163.8,"ffn_down_us":81.9,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":3965.3,"prefill_ms":91.28,"decode_tok_s":68.7,"decode_ms_per_tok":14.57,"memory_gb":10.79,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":134.5,"attention_us":199.6,"out_proj_us":107.6,"ffn_up_us":605.3,"ffn_down_us":302.6,"membound_us":25.6,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":134.5,"attention_us":199.6,"out_proj_us":107.6,"ffn_up_us":605.3,"ffn_down_us":302.6,"membound_us":25.6,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":10.7,"attention_us":0.8,"out_proj_us":8.5,"ffn_up_us":47.9,"ffn_down_us":24.0,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":4577.7,"prefill_ms":351.85,"decode_tok_s":67.6,"decode_ms_per_tok":14.78,"memory_gb":11.33,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":538.0,"attention_us":798.5,"out_proj_us":430.4,"ffn_up_us":2421.2,"ffn_down_us":1210.6,"membound_us":102.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":538.0,"attention_us":798.5,"out_proj_us":430.4,"ffn_up_us":2421.2,"ffn_down_us":1210.6,"membound_us":102.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":10.7,"attention_us":3.0,"out_proj_us":8.5,"ffn_up_us":48.0,"ffn_down_us":24.0,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"GPT-OSS-120B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":4698.6,"prefill_ms":699.28,"decode_tok_s":66.3,"decode_ms_per_tok":15.08,"memory_gb":12.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":1076.1,"attention_us":1597.0,"out_proj_us":860.9,"ffn_up_us":4842.4,"ffn_down_us":2421.2,"membound_us":204.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":1076.1,"attention_us":1597.0,"out_proj_us":860.9,"ffn_up_us":4842.4,"ffn_down_us":2421.2,"membound_us":204.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":10.7,"attention_us":6.1,"out_proj_us":8.6,"ffn_up_us":48.1,"ffn_down_us":24.0,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":2048,"kv_len":1024,"training_tok_s":419.3,"prefill_ms":868.31,"decode_tok_s":9.6,"decode_ms_per_tok":104.17,"memory_gb":97.14,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":729.9,"attention_us":499.1,"out_proj_us":608.2,"ffn_up_us":2919.5,"ffn_down_us":1459.7,"membound_us":59.1,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":729.9,"attention_us":499.1,"out_proj_us":608.2,"ffn_up_us":2919.5,"ffn_down_us":1459.7,"membound_us":59.1,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":59.1,"attention_us":1.5,"out_proj_us":49.2,"ffn_up_us":236.3,"ffn_down_us":118.1,"membound_us":0.0,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":4,"seq_len":2048,"kv_len":1024,"training_tok_s":468.9,"prefill_ms":3444.52,"decode_tok_s":9.5,"decode_ms_per_tok":105.13,"memory_gb":98.82,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":2919.5,"attention_us":1996.2,"out_proj_us":2432.9,"ffn_up_us":11677.8,"ffn_down_us":5838.9,"membound_us":236.2,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":2919.5,"attention_us":1996.2,"out_proj_us":2432.9,"ffn_up_us":11677.8,"ffn_down_us":5838.9,"membound_us":236.2,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":59.1,"attention_us":6.1,"out_proj_us":49.3,"ffn_up_us":236.4,"ffn_down_us":118.2,"membound_us":0.1,"allreduce_us":0.0}},{"arch":"MAI-Base-1","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":8,"seq_len":2048,"kv_len":1024,"training_tok_s":478.3,"prefill_ms":6879.46,"decode_tok_s":9.4,"decode_ms_per_tok":106.41,"memory_gb":101.05,"bottleneck":"compute","layer_breakdown":{"qkv_proj_us":5838.9,"attention_us":3992.4,"out_proj_us":4865.8,"ffn_up_us":23355.6,"ffn_down_us":11677.8,"membound_us":472.4,"allreduce_us":0.0},"prefill_layer_breakdown":{"qkv_proj_us":5838.9,"attention_us":3992.4,"out_proj_us":4865.8,"ffn_up_us":23355.6,"ffn_down_us":11677.8,"membound_us":472.4,"allreduce_us":0.0},"decode_layer_breakdown":{"qkv_proj_us":59.2,"attention_us":12.1,"out_proj_us":49.3,"ffn_up_us":236.6,"ffn_down_us":118.3,"membound_us":0.2,"allreduce_us":0.0}},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":256,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":68.9,"decode_ms_per_tok":14.52,"memory_gb":14.99,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":512,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":68.8,"decode_ms_per_tok":14.54,"memory_gb":15.02,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":1024,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":68.5,"decode_ms_per_tok":14.59,"memory_gb":15.08,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":2048,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":68.1,"decode_ms_per_tok":14.69,"memory_gb":15.21,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":4096,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":67.2,"decode_ms_per_tok":14.88,"memory_gb":15.46,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":8192,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":65.5,"decode_ms_per_tok":15.26,"memory_gb":15.96,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":256,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":72.1,"decode_ms_per_tok":13.88,"memory_gb":12.68,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":512,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":71.6,"decode_ms_per_tok":13.97,"memory_gb":12.8,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":1024,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":70.6,"decode_ms_per_tok":14.16,"memory_gb":13.05,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":2048,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":68.8,"decode_ms_per_tok":14.54,"memory_gb":13.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":4096,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":65.3,"decode_ms_per_tok":15.31,"memory_gb":14.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"h100","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":8192,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":59.4,"decode_ms_per_tok":16.83,"memory_gb":16.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":256,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":137.0,"decode_ms_per_tok":7.3,"memory_gb":14.99,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":512,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":136.8,"decode_ms_per_tok":7.31,"memory_gb":15.02,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":1024,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":136.4,"decode_ms_per_tok":7.33,"memory_gb":15.08,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":2048,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":135.7,"decode_ms_per_tok":7.37,"memory_gb":15.21,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":4096,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":134.4,"decode_ms_per_tok":7.44,"memory_gb":15.46,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":8192,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":131.7,"decode_ms_per_tok":7.59,"memory_gb":15.96,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":256,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":141.8,"decode_ms_per_tok":7.05,"memory_gb":12.68,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":512,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":141.1,"decode_ms_per_tok":7.09,"memory_gb":12.8,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":1024,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":139.6,"decode_ms_per_tok":7.16,"memory_gb":13.05,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":2048,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":136.8,"decode_ms_per_tok":7.31,"memory_gb":13.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":4096,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":131.4,"decode_ms_per_tok":7.61,"memory_gb":14.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"b200","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":8192,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":121.9,"decode_ms_per_tok":8.21,"memory_gb":16.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":256,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":54.8,"decode_ms_per_tok":18.23,"memory_gb":14.99,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":512,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":54.8,"decode_ms_per_tok":18.26,"memory_gb":15.02,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":1024,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":54.6,"decode_ms_per_tok":18.32,"memory_gb":15.08,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":2048,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":54.2,"decode_ms_per_tok":18.45,"memory_gb":15.21,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":4096,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":53.5,"decode_ms_per_tok":18.69,"memory_gb":15.46,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-3-8B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":8192,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":52.2,"decode_ms_per_tok":19.17,"memory_gb":15.96,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":256,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":57.4,"decode_ms_per_tok":17.42,"memory_gb":12.68,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":512,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":57.0,"decode_ms_per_tok":17.54,"memory_gb":12.8,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":1024,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":56.2,"decode_ms_per_tok":17.78,"memory_gb":13.05,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":2048,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":54.8,"decode_ms_per_tok":18.26,"memory_gb":13.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":4096,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":52.0,"decode_ms_per_tok":19.23,"memory_gb":14.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"},{"arch":"Llama-2-7B","hardware":"tpu_v5p","precision":"bf16","tp":1,"batch":1,"seq_len":1,"kv_len":8192,"training_tok_s":0,"prefill_ms":0,"decode_tok_s":47.2,"decode_ms_per_tok":21.17,"memory_gb":16.55,"bottleneck":"compute","layer_breakdown":{},"_type":"kv_scaling"}],"validation":{"training":[{"arch":"Llama-2-7B","hardware":"h100","tp":1,"batch":4,"seq":2048,"predicted":3142.8,"measured":3800,"ratio":0.827,"error_pct":17.3,"status":"PASS","source":"Meta training infra / MLPerf approx"},{"arch":"Llama-3-8B","hardware":"h100","tp":1,"batch":4,"seq":2048,"predicted":2939.6,"measured":3500,"ratio":0.84,"error_pct":16.0,"status":"PASS","source":"Meta release / community benchmarks"},{"arch":"Mistral-7B","hardware":"h100","tp":1,"batch":4,"seq":2048,"predicted":2947.7,"measured":3600,"ratio":0.819,"error_pct":18.1,"status":"PASS","source":"Community benchmarks / Mistral docs"}],"decode":[{"arch":"Llama-2-7B","hardware":"h100","tp":1,"batch":1,"kv_len":1024,"predicted_tps":70.6,"predicted_tbt_ms":14.16,"measured_tps":85,"ratio":0.831,"error_pct":16.9,"status":"PASS","source":"vLLM benchmarks H100"},{"arch":"Llama-3-8B","hardware":"h100","tp":1,"batch":1,"kv_len":1024,"predicted_tps":68.5,"predicted_tbt_ms":14.59,"measured_tps":75,"ratio":0.914,"error_pct":8.6,"status":"PASS","source":"vLLM / TensorRT-LLM benchmarks"},{"arch":"Mistral-7B","hardware":"h100","tp":1,"batch":1,"kv_len":1024,"predicted_tps":68.5,"predicted_tbt_ms":14.59,"measured_tps":80,"ratio":0.857,"error_pct":14.3,"status":"PASS","source":"vLLM benchmarks"}]}};
/* __THROUGHPUT_DATA_END__ */

const HW_INFO = (() => {
  // v1-fix Trainium: ensure Trainium 2/3 entries exist even when the
  // inline DATA blob was generated before they were added. Regenerating
  // via `CTX_SWEEP=1 python v1-ac-solver/generate_web_data.py` populates
  // grid data for them; this fallback is for label/picker rendering.
  const info = Object.assign({}, DATA.hardware_info || {});
  if (!info.trainium2) info.trainium2 = { label: "AWS Trainium 2", hbm_gb: 96,  bf16_tflops: 650  };
  if (!info.trainium3) info.trainium3 = { label: "AWS Trainium 3", hbm_gb: 192, bf16_tflops: 1300 };
  return info;
})();
const GRID = DATA.grid;

const PARAM_TARGETS = [
  { value: 1, label: "1B" },
  { value: 3, label: "3B" },
  { value: 7, label: "7B" },
  { value: 13, label: "13B" },
  { value: 120, label: "120B", example: "GPT-OSS", note: "AC-optimal dense arch; GPT-OSS (120B) shown as MoE reference" },
  { value: 500, label: "500B", example: "AC-optimal", note: "AC-optimal dense architecture at 500B scale" },
  { value: 750, label: "750B", example: "GLM-5.1", note: "AC-optimal dense arch; GLM-5.1 (~750B total, 40B active MoE) shown as reference" },
  { value: 1000, label: "1T", example: "MAI-1", note: "AC-optimal dense arch; MAI-1/MAI-thinking-1 (~1T total, 35B active MoE) shown as reference" },
];

const REFERENCE_MODELS = {
  1: [
    { name: "TinyLlama-1.1B", type: "Dense", total_params_B: 1.1,
      note: "TinyLlama 1.1B: Llama-2 architecture scaled down. 3T tokens trained.",
      arch: { d_model: 2048, n_layers: 22, n_heads: 32, d_head: 64, n_kv_heads: 4, ffn_dim: 5632 } },
    { name: "Qwen2.5-1.5B", type: "Dense", total_params_B: 1.5,
      note: "Qwen2.5 1.5B: Alibaba dense transformer, GQA, 18T tokens.",
      arch: { d_model: 1536, n_layers: 28, n_heads: 12, d_head: 128, n_kv_heads: 2, ffn_dim: 8960 } },
  ],
  3: [
    { name: "Llama-3.2-3B", type: "Dense", total_params_B: 3.2,
      note: "Llama 3.2 3B: Meta dense transformer with GQA-8.",
      arch: { d_model: 3072, n_layers: 28, n_heads: 24, d_head: 128, n_kv_heads: 8, ffn_dim: 8192 } },
    { name: "Qwen2.5-3B", type: "Dense", total_params_B: 3,
      note: "Qwen2.5 3B: Alibaba dense transformer, 18T tokens.",
      arch: { d_model: 2048, n_layers: 36, n_heads: 16, d_head: 128, n_kv_heads: 2, ffn_dim: 11008 } },
  ],
  7: [
    { name: "Llama-3-8B", type: "Dense", total_params_B: 8,
      note: "Llama 3 8B: Meta dense transformer with GQA-8. 15T tokens.",
      arch: { d_model: 4096, n_layers: 32, n_heads: 32, d_head: 128, n_kv_heads: 8, ffn_dim: 14336 } },
    { name: "Mistral-7B", type: "Dense", total_params_B: 7.2,
      note: "Mistral 7B v0.3: Sliding window attention, GQA-8.",
      arch: { d_model: 4096, n_layers: 32, n_heads: 32, d_head: 128, n_kv_heads: 8, ffn_dim: 14336 } },
    { name: "Qwen3-8B", type: "Dense", total_params_B: 8.2,
      note: "Qwen3 8B: Alibaba, GQA-8, SwiGLU, 36 layers.",
      arch: { d_model: 4096, n_layers: 36, n_heads: 32, d_head: 128, n_kv_heads: 8, ffn_dim: 12288 } },
    { name: "Gemma-2-9B", type: "Dense", total_params_B: 9.2,
      note: "Gemma 2 9B: Google, 42 layers, d_head=256, GQA-8.",
      arch: { d_model: 3584, n_layers: 42, n_heads: 16, d_head: 256, n_kv_heads: 8, ffn_dim: 14336 } },
  ],
  13: [
    { name: "Llama-2-13B", type: "Dense", total_params_B: 13,
      note: "Llama 2 13B: Meta dense transformer, MHA (no GQA). 2T tokens.",
      arch: { d_model: 5120, n_layers: 40, n_heads: 40, d_head: 128, n_kv_heads: 40, ffn_dim: 13824 } },
    { name: "Qwen3-32B", type: "Dense", total_params_B: 32,
      note: "Qwen3 32B: Alibaba, GQA-8, 64 layers. Shown for wide-shallow comparison.",
      arch: { d_model: 5120, n_layers: 64, n_heads: 64, d_head: 128, n_kv_heads: 8, ffn_dim: 25600 } },
  ],
  120: [
    { name: "GPT-OSS", type: "MoE", total_params_B: 120, active_params_B: null,
      note: "Open-weight GPT-OSS 120B-class. MoE architecture; dense-equivalent comparison.",
      arch: { d_model: 12288, n_layers: 80, n_heads: 96, d_head: 128, n_kv_heads: 12, ffn_dim: 32768 } },
  ],
  750: [
    { name: "GLM-5.1", type: "MoE", total_params_B: 750, active_params_B: 40,
      note: "Z.AI GLM-5.1: ~750B total, 40B active (MoE). MIT license, 200K context.",
      arch: { d_model: 28672, n_layers: 85, n_heads: 224, d_head: 128, n_kv_heads: 16, ffn_dim: 81920 } },
  ],
  1000: [
    { name: "MAI-thinking-1", type: "MoE", total_params_B: 1000, active_params_B: 35,
      note: "Microsoft MAI-thinking-1: ~1T total, 35B active (MoE). Based on MAI-Base-1.",
      arch: { d_model: 28672, n_layers: 114, n_heads: 224, d_head: 128, n_kv_heads: 16, ffn_dim: 81920 } },
  ],
};

let state = {
  hw: "h100", params: 7.0, tokens: 2.0, serving: "unconstrained",
  ffnTypes: new Set(["dense", "moe"]),       // dense = standard FFN, moe = MoE expert FFN
  layerTypes: new Set(["attention", "hybrid"]), // attention = all-attention, hybrid = attention+state
  // v1-fix UI (a): serving context length axis. Defaults to 8192 for
  // backward-compat with the legacy single-context grid. Recognized values
  // when the multi-context data is regenerated: 32k / 128k / 1M / 2M / 4M.
  contextLength: 8192,
  // v1-fix UI (a): Pareto-axis preference. Each weight is a non-negative
  // float; defaults reproduce the legacy loss-only ordering. Presets are
  // applied by `applyPreferencePreset(name)`.
  prefPreset: "balanced",
  prefWeights: { loss: 0.3, tbt: 0.25, tps: 0.15, mem: 0.15, params: 0.15 },
};

// Preference presets. Each one is an actual objective weighting used by
// mergedEntry() and the Pareto tab, not just a label.
const PREF_PRESETS = {
  balanced:       { label: "Balanced",       loss: 0.30, tbt: 0.25, tps: 0.15, mem: 0.15, params: 0.15 },
  quality:        { label: "Quality-first",  loss: 0.70, tbt: 0.05, tps: 0.15, mem: 0.05, params: 0.05 },
  latency:        { label: "Latency-first",  loss: 0.15, tbt: 0.55, tps: 0.10, mem: 0.10, params: 0.10 },
  serving_cost:   { label: "Serving cost",   loss: 0.15, tbt: 0.25, tps: 0.05, mem: 0.30, params: 0.25 },
  training_cost:  { label: "Training cost",  loss: 0.20, tbt: 0.10, tps: 0.45, mem: 0.10, params: 0.15 },
  custom:         { label: "Custom",         loss: 0.30, tbt: 0.25, tps: 0.15, mem: 0.15, params: 0.15 },
};

// v1-fix UI (a): context-length options. The grid generator emits these
// labels when CTX_SWEEP=1; legacy single-context grids have only 8192.
const CTX_OPTIONS = [
  { value: 8192,    label: "8k",   sub: "chat" },
  { value: 32768,   label: "32k",  sub: "coding" },
  { value: 131072,  label: "128k", sub: "doc RAG" },
  { value: 1048576, label: "1M",   sub: "frontier" },
  { value: 2097152, label: "2M",   sub: "frontier+" },
  { value: 4194304, label: "4M",   sub: "research" },
];

// Map UI weight keys to candidate object fields. Parameter cost uses total
// params when present so MoE is not scored as if active params were storage
// or serving footprint.
const PREF_AXIS_FIELD = { loss: "loss", tbt: "tbt_ms", tps: "train_tps", mem: "mem_gb", params: "param_cost_B" };
// Direction: +1 for "lower is better", -1 for "higher is better" (only tps).
const PREF_AXIS_DIR   = { loss: +1,     tbt: +1,        tps: -1,           mem: +1,        params: +1 };

function applyPreferencePreset(name) {
  const p = PREF_PRESETS[name];
  if (!p) return;
  state.prefPreset = name;
  state.prefWeights = { loss: p.loss, tbt: p.tbt, tps: p.tps, mem: p.mem, params: p.params };
}

function paramCostB(c) {
  return c ? (c.total_params_B ?? c.param_cost_B ?? c.params_B) : null;
}

function candidateMetric(c, field) {
  if (!c) return null;
  if (field === "param_cost_B") return paramCostB(c);
  return c[field];
}

// v1-fix UI (a): score a candidate against the per-axis best on the
// frontier (`bests` is { loss: minLoss, tbt_ms: minTbt, ... }). Returns
// the weighted sum of normalized %-delta-vs-best per axis. Direction-aware
// (tps is "higher is better"). Lower score = better candidate.
function scoreCandidate(c, bests, weights) {
  let s = 0;
  for (const k of Object.keys(PREF_AXIS_FIELD)) {
    const w = weights[k] || 0;
    if (w === 0) continue;
    const field = PREF_AXIS_FIELD[k];
    const dir = PREF_AXIS_DIR[k];
    const v = candidateMetric(c, field), b = bests[field];
    if (v == null || b == null || b === 0) continue;
    const delta = dir === +1 ? (v - b) / Math.abs(b) : (b - v) / Math.abs(b);
    s += w * Math.max(0, delta);
  }
  return s;
}

// v1-fix UI (a): compute per-axis "best" values over a list of candidates.
// Used to seed scoreCandidate's `bests` argument from the family frontier.
function frontierBests(cands) {
  const bests = {};
  for (const field of Object.values(PREF_AXIS_FIELD)) {
    let xs = cands.map(c => candidateMetric(c, field)).filter(x => x != null);
    if (!xs.length) { bests[field] = null; continue; }
    bests[field] = (field === "train_tps") ? Math.max(...xs) : Math.min(...xs);
  }
  return bests;
}

function activeArchFamilies() {
  // Derive which arch_family values match the current toggle state
  const families = new Set();
  if (state.ffnTypes.has("dense") && state.layerTypes.has("attention")) families.add("dense");
  if (state.ffnTypes.has("moe") && state.layerTypes.has("attention")) families.add("moe");
  if (state.ffnTypes.has("dense") && state.layerTypes.has("hybrid")) families.add("hybrid");
  if (state.ffnTypes.has("moe") && state.layerTypes.has("hybrid")) families.add("moe_hybrid");
  return families;
}
let paretoState = {
  selected: 0,
  x: "train_tps",
  y: "loss",
  color: "precision",
  size: "param_cost_B",
  manualSelection: false,
  lastFocusKey: "",
};
let modifierState = {
  riskBudget: 0.0,
  allowQualitySpending: false,
  tpOptions: [4, 8],
  knobs: { kv: true, ffnPrecision: true, ffnDim: true, layers: true, kvHeads: true },
  workloadPreset: "chat",
  selected: 0,
  manualSelection: false,
};

// Delta Influence tab — independent state so it doesn't fight the modifier tab.
// `selectedDeltas` is an ordered array of delta-library keys to apply (stacked).
let deltaInfState = {
  baseline: "mistral",
  hardware: "h100",
  workloadPreset: "chat",
  tp: 8,
  selectedDeltas: ["swap_attention_to_gqa_2"],
};

// v1-stress: workload regimes that scale the baseline into binding territory.
// chat is the default (no axis binding); the other three exercise the
// modifier's stress-relief behavior on different binding axes.
const MOD_WORKLOAD_PRESETS = {
  // Round-2 fix N5: KV multipliers were ~10x too large. Computed honestly
  // vs baseline (b=1, ctx=8k): kv_ratio = batch_ratio * ctx_ratio.
  // mem ratio is dominated by weights (constant) + KV; we keep small
  // additive headroom for activation-memory growth at long context.
  chat:     { label: "Chat (b=1, 2k)",            mem: 1.0,  kv: 0.25,  tbt: 1.0 },
  batched:  { label: "Batched (b=64, 4k)",        mem: 4.0,  kv: 32,    tbt: 1.4 },
  long_ctx: { label: "Long context (b=8, 32k)",   mem: 5.0,  kv: 32,    tbt: 2.0 },
  training: { label: "Training (TP=1, b=4)",      mem: 8.0,  kv: 0.5,   tbt: 1.0 },
};

// ======================
// Controls
// ======================
const hwContainer = document.getElementById("hw-cards");
Object.entries(HW_INFO).forEach(([key, info]) => {
  const d = document.createElement("div");
  d.className = "hw-card" + (key === state.hw ? " active" : "");
  d.dataset.hw = key;
  d.innerHTML = `<div class="hw-name">${info.label}</div><div class="hw-sub">${info.hbm_gb}GB HBM · ${info.bf16_tflops} TFLOPS BF16</div>`;
  d.onclick = () => { state.hw = key; updateAll(); };
  hwContainer.appendChild(d);
});

const paramContainer = document.getElementById("param-pills");
PARAM_TARGETS.forEach(target => {
  const p = target.value;
  const d = document.createElement("div");
  d.className = "pill" + (p === state.params ? " active" : "");
  d.innerHTML = `<span class="pill-main">${target.label}</span>`;
  d.title = target.note || `${target.label} parameter target`;
  d.onclick = () => { state.params = p; updateAll(); };
  paramContainer.appendChild(d);
});

const tokenSel = document.getElementById("sel-tokens");
[0.5, 2, 10].forEach(t => {
  const o = document.createElement("option");
  o.value = t; o.textContent = t + "T tokens";
  tokenSel.appendChild(o);
});
tokenSel.value = state.tokens;
tokenSel.onchange = () => { state.tokens = parseFloat(tokenSel.value); updateAll(); };

const servingSel = document.getElementById("sel-serving");
[
  { v: "unconstrained", l: "No serving constraints" },
  { v: "serving_50ms", l: "TBT ≤ 50ms, TTFT ≤ 500ms" },
  { v: "serving_20ms", l: "TBT ≤ 20ms, TTFT ≤ 200ms" },
].forEach(s => {
  const o = document.createElement("option");
  o.value = s.v; o.textContent = s.l;
  servingSel.appendChild(o);
});
servingSel.onchange = () => { state.serving = servingSel.value; updateAll(); };

// FFN type toggles (multi-select)
const ffnContainer = document.getElementById("ffn-toggles");
[{v:"dense",l:"Dense"},{v:"moe",l:"MoE (Sparse Experts)"}].forEach(m => {
  const d = document.createElement("div");
  d.className = "pill" + (state.ffnTypes.has(m.v) ? " active" : "");
  d.dataset.ffn = m.v;
  d.innerHTML = `<span class="pill-main">${m.l}</span>`;
  d.onclick = () => {
    if (state.ffnTypes.has(m.v)) { if (state.ffnTypes.size > 1) state.ffnTypes.delete(m.v); }
    else state.ffnTypes.add(m.v);
    updateAll();
  };
  ffnContainer.appendChild(d);
});

// Layer composition toggles (multi-select)
const layerContainer = document.getElementById("layer-toggles");

// v1-fix UI (Part J): state_type → human-readable family label. Mirrors
// _resolve_hybrid_family in v0-quality/quality_model.py. Used by the
// hybrid toggle, optimal-card arch-family chip, layer-map tooltips, and
// the architecture diagram's state sub-block.
function stateFamilyLabel(st) {
  const t = String(st || "mamba2").toLowerCase();
  const map = {
    mamba2: "Mamba-2", mamba: "Mamba", mamba1: "Mamba-1",
    s4: "S4", s5: "S5", s6: "S6 (Mamba)",
    sliding_window: "Sliding Window", swa: "Sliding Window",
    delta_net: "DeltaNet", deltanet: "DeltaNet",
    gated_delta: "Gated DeltaNet", gated_deltanet: "Gated DeltaNet",
    kda: "KDA",
    gla: "GLA", gated_linear_attention: "GLA",
    rwkv7: "RWKV-7", rwkv: "RWKV",
    linear_attention: "Linear Attn", retnet: "RetNet",
  };
  return map[t] || st || "Mamba-2";
}

[{v:"attention",l:"Transformer"},{v:"hybrid",l:"Hybrid (Attn + State)"}].forEach(m => {
  const d = document.createElement("div");
  d.className = "pill" + (state.layerTypes.has(m.v) ? " active" : "");
  d.dataset.layer = m.v;
  d.innerHTML = `<span class="pill-main">${m.l}</span>`;
  d.onclick = () => {
    if (state.layerTypes.has(m.v)) { if (state.layerTypes.size > 1) state.layerTypes.delete(m.v); }
    else state.layerTypes.add(m.v);
    updateAll();
  };
  layerContainer.appendChild(d);
});

// v1-fix UI (a): Serving Context Length pill picker. Falls back to 8k
// when the requested context isn't in the data (legacy single-context grid).
(function initContextPicker() {
  const c = document.getElementById("ctx-pills");
  if (!c) return;
  c.innerHTML = "";
  CTX_OPTIONS.forEach(opt => {
    const d = document.createElement("div");
    d.className = "pill" + ((state.contextLength || 8192) === opt.value ? " active" : "");
    d.dataset.ctx = opt.value;
    d.innerHTML = `<span class="pill-main">${opt.label}</span><span class="pill-sub">${opt.sub}</span>`;
    d.onclick = () => {
      state.contextLength = opt.value;
      [...c.children].forEach(ch => ch.classList.toggle("active", Number(ch.dataset.ctx) === opt.value));
      updateAll();
    };
    c.appendChild(d);
  });
})();

// v1-fix UI (a): Tradeoff Preference preset chips + per-axis sliders.
(function initPreferencePicker() {
  const presetsEl = document.getElementById("pref-presets");
  const slidersEl = document.getElementById("pref-sliders");
  if (!presetsEl || !slidersEl) return;

  presetsEl.innerHTML = "";
  const ORDER = ["balanced", "custom"]; // removed: quality, latency, serving_cost, training_cost (user request)
  ORDER.forEach(name => {
    const p = PREF_PRESETS[name];
    const d = document.createElement("div");
    d.className = "pill" + (state.prefPreset === name ? " active" : "");
    d.dataset.preset = name;
    d.innerHTML = `<span class="pill-main">${p.label}</span>`;
    d.onclick = () => {
      applyPreferencePreset(name);
      paretoState.manualSelection = false;
      [...presetsEl.children].forEach(ch => ch.classList.toggle("active", ch.dataset.preset === name));
      slidersEl.style.display = (name === "custom") ? "block" : "none";
      syncSlidersToWeights();
      updateAll();
    };
    presetsEl.appendChild(d);
  });

  const keys = ["loss", "tbt", "tps", "mem", "params"];
  function syncSlidersToWeights() {
    keys.forEach(k => {
      const slider = document.getElementById("pref-" + k);
      const val = document.getElementById("pref-" + k + "-val");
      const w = state.prefWeights[k] || 0;
      // Normalize so total = 100 for slider scale (or scale by max weight = 1)
      if (slider) slider.value = String(Math.round(w * 100));
      if (val) val.textContent = w.toFixed(2);
    });
  }

  keys.forEach(k => {
    const slider = document.getElementById("pref-" + k);
    if (!slider) return;
    slider.oninput = () => {
      state.prefPreset = "custom";
      [...presetsEl.children].forEach(ch => ch.classList.toggle("active", ch.dataset.preset === "custom"));
      slidersEl.style.display = "block";
      state.prefWeights[k] = Number(slider.value) / 100;
      paretoState.manualSelection = false;
      const val = document.getElementById("pref-" + k + "-val");
      if (val) val.textContent = state.prefWeights[k].toFixed(2);
      updateAll();
    };
  });

  syncSlidersToWeights();
})();

["pareto-x", "pareto-y", "pareto-color", "pareto-size"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    const key = id.replace("pareto-", "");
    el.value = paretoState[key];
    el.onchange = () => {
      paretoState[key] = el.value;
      renderPareto(current());
    };
  }
});

function makeToggle(container, label, active, onClick) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "toggle-chip" + (active ? " active" : "");
  chip.textContent = label;
  chip.onclick = () => onClick(chip);
  container.appendChild(chip);
}

const modQualityContainer = document.getElementById("mod-quality-mode");
const sameModelChip = (() => {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "toggle-chip active";
  chip.textContent = "Same model";
  chip.onclick = () => {
    modifierState.allowQualitySpending = false;
    modifierState.riskBudget = 0;
    document.getElementById("mod-risk").value = 0;
    document.getElementById("mod-risk").disabled = true;
    modifierState.selected = 0;
    modifierState.manualSelection = false;
    renderModifier();
    syncQualityModeChips();
  };
  modQualityContainer.appendChild(chip);
  return chip;
})();
const qualitySpendChip = (() => {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "toggle-chip";
  chip.textContent = "Explore lossy";
  chip.onclick = () => {
    modifierState.allowQualitySpending = true;
    if (modifierState.riskBudget === 0) modifierState.riskBudget = 1.0;
    document.getElementById("mod-risk").value = modifierState.riskBudget;
    document.getElementById("mod-risk").disabled = false;
    modifierState.selected = 0;
    modifierState.manualSelection = false;
    renderModifier();
    syncQualityModeChips();
  };
  modQualityContainer.appendChild(chip);
  return chip;
})();
function syncQualityModeChips() {
  sameModelChip.classList.toggle("active", !modifierState.allowQualitySpending);
  qualitySpendChip.classList.toggle("active", modifierState.allowQualitySpending);
  document.getElementById("mod-risk").disabled = !modifierState.allowQualitySpending;
  document.querySelectorAll("#mod-knobs .toggle-chip").forEach(chip => {
    chip.disabled = !modifierState.allowQualitySpending;
  });
}

const modPresetContainer = document.getElementById("mod-workload-preset");
Object.entries(MOD_WORKLOAD_PRESETS).forEach(([key, preset]) => {
  makeToggle(modPresetContainer, preset.label, modifierState.workloadPreset === key, chip => {
    modifierState.workloadPreset = key;
    document.querySelectorAll("#mod-workload-preset .toggle-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    modifierState.selected = 0;
    modifierState.manualSelection = false;
    renderModifier();
  });
});

const modTpContainer = document.getElementById("mod-tp-options");
[1, 2, 4, 8].forEach(tp => {
  makeToggle(modTpContainer, `TP ${tp}`, modifierState.tpOptions.includes(tp), chip => {
    const active = chip.classList.toggle("active");
    if (active) modifierState.tpOptions.push(tp);
    else modifierState.tpOptions = modifierState.tpOptions.filter(x => x !== tp);
    if (!modifierState.tpOptions.length) {
      modifierState.tpOptions = [tp];
      chip.classList.add("active");
    }
    modifierState.tpOptions = [...new Set(modifierState.tpOptions)].sort((a,b)=>a-b);
    modifierState.selected = 0;
    modifierState.manualSelection = false;
    renderModifier();
  });
});

const modKnobs = [
  ["kv", "KV bits"],
  ["ffnPrecision", "FP8 FFN"],
  ["ffnDim", "FFN dim"],
  ["layers", "Layers"],
  ["kvHeads", "KV heads"],
];
const modKnobContainer = document.getElementById("mod-knobs");
modKnobs.forEach(([key, label]) => {
  makeToggle(modKnobContainer, label, modifierState.knobs[key], chip => {
    modifierState.knobs[key] = chip.classList.toggle("active");
    modifierState.selected = 0;
    modifierState.manualSelection = false;
    renderModifier();
  });
});

document.getElementById("mod-risk").oninput = e => {
  modifierState.riskBudget = parseFloat(e.target.value);
  document.getElementById("mod-risk-label").textContent = `+${modifierState.riskBudget.toFixed(2)}%`;
  modifierState.selected = 0;
  modifierState.manualSelection = false;
  renderModifier();
};

// ---------------------------------------------------------------------------
// Delta Influence tab — controls + delta library
// ---------------------------------------------------------------------------

// Delta library — mirrors v1-stress/deltas/REGISTRY. Each entry returns a
// mutated candidate produced by applying that delta to the baseline.
// `effects` are multiplicative deltas on the same fields evalModifierCandidate
// produces, expressed as functions so we can read baseline values at apply
// time. The qualityHit is a fractional bump to predicted loss.
const DELTA_LIBRARY = {
  swap_attention_to_gqa_4: {
    label: "Force GQA-4 (4 KV heads)",
    group: "attention",
    apply: (c, base) => { c.n_kv_heads = 4; c.changes.push("KV heads: 8 → 4"); return c; },
  },
  swap_attention_to_gqa_2: {
    label: "Force GQA-2 (2 KV heads)",
    group: "attention",
    apply: (c, base) => { c.n_kv_heads = 2; c.changes.push("KV heads: 8 → 2"); return c; },
  },
  swap_attention_to_mqa: {
    label: "Force MQA (1 KV head)",
    group: "attention",
    apply: (c, base) => { c.n_kv_heads = 1; c.changes.push("KV heads: 8 → 1"); return c; },
  },
  swap_attention_to_mla: {
    label: "MLA (latent KV)",
    group: "attention",
    apply: (c, base) => { c.n_kv_heads = 1; c._mla = true; c.changes.push("Attention: MHA → MLA"); return c; },
  },
  swap_attention_to_swa: {
    label: "SWA (sliding window 1k)",
    group: "attention",
    apply: (c, base) => { c._swa_window = 1024; c.changes.push("Attention: full → SWA-1k"); return c; },
  },
  swap_dense_to_moe_8x_top2: {
    label: "MoE 8 experts top-2",
    group: "architecture",
    detail: "Replace dense FFN with 8 experts x top-2 router. Active params stay flat; total params grow ~6.5x. Quality typically improves at iso-active-params; serving cost grows with total params.",
    apply: (c, base) => {
      c._moe = true;
      c._moe_n_experts = 8;
      c._moe_top_k = 2;
      c._moe_total_mult = 6.5;
      c.changes.push("Architecture: Dense \u2192 MoE 8\u00d7top-2");
      return c;
    },
  },
  kv_int8: {
    label: "KV cache INT8",
    group: "precision",
    apply: (c, base) => { c.kv_bits = 8; c.changes.push("KV bits: 16 → 8"); return c; },
  },
  kv_int4: {
    label: "KV cache INT4",
    group: "precision",
    apply: (c, base) => { c.kv_bits = 4; c.changes.push("KV bits: 16 → 4"); return c; },
  },
  ffn_fp8: {
    label: "FFN FP8",
    group: "precision",
    apply: (c, base) => { c.ffn_prec = "fp8"; c.changes.push("FFN precision: BF16 → FP8"); return c; },
  },
  scale_layers_minus_2: {
    label: "Layers −2",
    group: "shape",
    apply: (c, base) => { c.n_layers = base.n_layers - 2; c.changes.push(`Layers: ${base.n_layers} → ${base.n_layers - 2}`); return c; },
  },
  scale_layers_plus_2: {
    label: "Layers +2",
    group: "shape",
    apply: (c, base) => { c.n_layers = base.n_layers + 2; c.changes.push(`Layers: ${base.n_layers} → ${base.n_layers + 2}`); return c; },
  },
  scale_ffn_down_10: {
    label: "FFN −10%",
    group: "shape",
    apply: (c, base) => { c.ffn_dim = Math.round(base.ffn_dim * 0.9); c.changes.push(`FFN dim: ${base.ffn_dim} → ${c.ffn_dim}`); return c; },
  },
  scale_ffn_up_10: {
    label: "FFN +10%",
    group: "shape",
    apply: (c, base) => { c.ffn_dim = Math.round(base.ffn_dim * 1.1); c.changes.push(`FFN dim: ${base.ffn_dim} → ${c.ffn_dim}`); return c; },
  },
  // --- Hybrid component pieces ---
  // The hybrid group is split into orthogonal axes:
  //   • Family — which state mixer fills the non-attention slots
  //   • Placement — where the state layers sit in the stack
  //   • Ratio — what fraction of layers become state layers
  // Selection is constrained to 1–2 hybrid chips at a time (see chip click
  // handler below); one chip evaluates that axis alone (with sensible
  // defaults on the others), two chips combine to specify a full hybrid.
  hybrid_family_mamba2: {
    label: "Mamba-2",
    group: "hybrid", subgroup: "family", hybridAxis: "family",
    detail: "Sequential SSM. Lowest KV, small attention residual; sequential scan limits throughput slightly.",
    apply: (c, base) => { c._state_family = "mamba_sequential"; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Hybrid: Mamba-2"); return c; },
  },
  hybrid_family_kda: {
    label: "GatedDeltaNet / KDA",
    group: "hybrid", subgroup: "family", hybridAxis: "family",
    detail: "Gated delta / KDA linear-attn mixers. Good throughput, moderate quality residual versus full attention.",
    apply: (c, base) => { c._state_family = "gated_delta_or_kda_linear"; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Hybrid: GatedDeltaNet/KDA"); return c; },
  },
  hybrid_family_gla: {
    label: "GLA",
    group: "hybrid", subgroup: "family", hybridAxis: "family",
    detail: "Generic linear-attention family. Cheapest decode, largest learned-function shift vs full attention.",
    apply: (c, base) => { c._state_family = "generic_linear_attention"; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Hybrid: GLA"); return c; },
  },
  hybrid_family_parallel: {
    label: "Parallel hybrid heads",
    group: "hybrid", subgroup: "family", hybridAxis: "family",
    detail: "Attention and state run in parallel within each block (Jamba/Zamba-style). Most expensive but preserves quality.",
    apply: (c, base) => { c._state_family = "parallel_hybrid_heads"; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Hybrid: parallel heads"); return c; },
  },
  hybrid_family_recurrent_swa: {
    label: "Recurrent + local attn",
    group: "hybrid", subgroup: "family", hybridAxis: "family",
    detail: "Linear-state core with periodic local-window attention (Griffin-style). Strong long-context, low KV.",
    apply: (c, base) => { c._state_family = "recurrent_local_attention"; c._swa_window = c._swa_window || 1024; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Hybrid: recurrent + local attn"); return c; },
  },
  hybrid_placement_first_periodic_last: {
    label: "first/periodic/last",
    group: "hybrid", subgroup: "placement", hybridAxis: "placement",
    detail: "Anchors attention at start, periodic interior, and end (Jamba 1.5). Best when the model needs both global anchoring and long-range state.",
    apply: (c, base) => { c._state_placement = "first_periodic_last"; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Placement: first/periodic/last"); return c; },
  },
  hybrid_placement_interleaved: {
    label: "interleaved",
    group: "hybrid", subgroup: "placement", hybridAxis: "placement",
    detail: "Alternates attention and state every layer. Smoothest gradient flow; least sensitive to ratio choice.",
    apply: (c, base) => { c._state_placement = "interleaved"; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Placement: interleaved"); return c; },
  },
  hybrid_placement_periodic: {
    label: "periodic block",
    group: "hybrid", subgroup: "placement", hybridAxis: "placement",
    detail: "Groups state layers into a single contiguous block, attention elsewhere. Simpler kernel scheduling.",
    apply: (c, base) => { c._state_placement = "periodic"; c._hybridRatio = c._hybridRatio || 0.5; c.changes.push("Placement: periodic"); return c; },
  },
  hybrid_ratio_25: {
    label: "25%",
    group: "hybrid", subgroup: "ratio", hybridAxis: "ratio",
    detail: "Mostly attention; state used as a long-context augmenter. Smallest quality risk, smallest stress relief.",
    apply: (c, base) => { c._hybridRatio = 0.25; c.changes.push("Ratio: 25% state"); return c; },
  },
  hybrid_ratio_50: {
    label: "50%",
    group: "hybrid", subgroup: "ratio", hybridAxis: "ratio",
    detail: "Half attention, half state. Common Jamba-style balance.",
    apply: (c, base) => { c._hybridRatio = 0.50; c.changes.push("Ratio: 50% state"); return c; },
  },
  hybrid_ratio_75: {
    label: "75%",
    group: "hybrid", subgroup: "ratio", hybridAxis: "ratio",
    detail: "State-dominant. Maximum stress relief on KV and HBM-BW, largest attention residual.",
    apply: (c, base) => { c._hybridRatio = 0.75; c.changes.push("Ratio: 75% state"); return c; },
  },
};

// Hybrid category metadata for grouped rendering.
const HYBRID_CATEGORIES = [
  { axis: "family",    label: "Type",      hint: "pick at most one" },
  { axis: "placement", label: "Placement", hint: "pick at most one" },
  { axis: "ratio",     label: "Ratio",     hint: "pick at most one" },
];

// Per-family default characteristics. Applied at scoring time so each hybrid
// chip selection moves metrics in the right direction even without the
// Python pipeline behind it. Numbers are coarse-grained order-of-magnitude
// estimates aligned with v1-sram-state-hybrid's quality residual structure.
const HYBRID_FAMILY_EFFECTS = {
  // Round-2 fix N8: numbers re-derived from synthesize_archmodes.HYBRID_FAMILIES
  // (Python) so Pareto Modifier / Delta Influence speak the same units as Overview / Pareto.
  // Effective KV multiplier in JS is (ratio*kvScale + (1-ratio)), so for ratio=0.5
  // and a Python kv multiplier P we set kvScale = max(0, 2*P - 1). For tbt/mem the
  // tbtScale/memScale are applied to the state-layer fraction only.
  // Sources: HYBRID_FAMILIES table in synthesize_archmodes.py.
  mamba_sequential:           { kvScale: 0.00, bwScale: 0.45, memScale: 0.76, lossBump: 0.006, tbtScale: 0.62, trainScale: 0.95 },
  gated_delta_or_kda_linear:  { kvScale: 0.00, bwScale: 0.55, memScale: 0.72, lossBump: 0.010, tbtScale: 0.55, trainScale: 1.05 },
  generic_linear_attention:   { kvScale: 0.00, bwScale: 0.40, memScale: 0.68, lossBump: 0.018, tbtScale: 0.50, trainScale: 1.10 },
  parallel_hybrid_heads:      { kvScale: 0.30, bwScale: 0.80, memScale: 1.05, lossBump: 0.005, tbtScale: 0.95, trainScale: 0.92 },
  recurrent_local_attention:  { kvScale: 0.10, bwScale: 0.55, memScale: 0.80, lossBump: 0.008, tbtScale: 0.70, trainScale: 0.98 },
};

const HYBRID_PLACEMENT_EFFECTS = {
  first_periodic_last: { lossMul: 0.95, bwMul: 1.00 },
  interleaved:         { lossMul: 0.90, bwMul: 1.02 },
  periodic:            { lossMul: 1.00, bwMul: 0.97 },
};

function diApplyHybridScoring(c, base) {
  // If no hybrid axis was touched, no-op.
  if (!c._state_family && !c._state_placement && c._hybridRatio == null) return c;
  const family = c._state_family || "mamba_sequential";
  const placement = c._state_placement || "interleaved";
  const ratio = c._hybridRatio == null ? 0.5 : c._hybridRatio;
  const famEff = HYBRID_FAMILY_EFFECTS[family] || HYBRID_FAMILY_EFFECTS.mamba_sequential;
  const plcEff = HYBRID_PLACEMENT_EFFECTS[placement] || HYBRID_PLACEMENT_EFFECTS.interleaved;

  // KV cache: portion of layers becoming state contributes famEff.kvScale of
  // the baseline KV; the remaining (attention) layers keep their share.
  c.kv_gb = base.kv_gb * (ratio * famEff.kvScale + (1 - ratio));
  // Memory: weighted blend of state vs attention memory per layer.
  c.mem_gb = base.mem_gb * (ratio * famEff.memScale + (1 - ratio));
  // Bandwidth-bound TBT: state layers stream less per decode step.
  c.tbt_ms = base.tbt_ms * (ratio * famEff.bwScale * famEff.tbtScale + (1 - ratio));
  c.ttft_ms = base.ttft_ms * (ratio * famEff.bwScale + (1 - ratio));
  c.train_tps = base.train_tps * (ratio * famEff.trainScale + (1 - ratio));
  // Quality bump = family cost × ratio × placement multiplier.
  const bump = famEff.lossBump * ratio * plcEff.lossMul;
  c.loss = base.loss * (1 + bump);
  c.qualityRiskPct = ((c.loss - base.loss) / base.loss) * 100;
  c.moveClass = "architecture";
  c.qualityPreserving = false;
  return c;
}

const DELTA_GROUPS = {
  attention:    { label: "Attention",    color: "var(--accent2)" },
  precision:    { label: "Precision",    color: "#f59e0b" },
  shape:        { label: "Shape",        color: "#a78bfa" },
  hybrid:       { label: "Hybrid",       color: "#34d399" },
  architecture: { label: "Architecture", color: "#fb923c" },
};

// Mount controls
const diHwContainer = document.getElementById("di-hardware");
Object.keys(HW_INFO).forEach(hw => {
  makeToggle(diHwContainer, HW_INFO[hw].label, deltaInfState.hardware === hw, chip => {
    deltaInfState.hardware = hw;
    document.querySelectorAll("#di-hardware .toggle-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderDeltaInfluence();
  });
});

const diPresetContainer = document.getElementById("di-workload-preset");
Object.entries(MOD_WORKLOAD_PRESETS).forEach(([key, preset]) => {
  makeToggle(diPresetContainer, preset.label, deltaInfState.workloadPreset === key, chip => {
    deltaInfState.workloadPreset = key;
    document.querySelectorAll("#di-workload-preset .toggle-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderDeltaInfluence();
  });
});

const diTpContainer = document.getElementById("di-tp-options");
[1, 2, 4, 8].forEach(tp => {
  makeToggle(diTpContainer, `TP ${tp}`, deltaInfState.tp === tp, chip => {
    deltaInfState.tp = tp;
    document.querySelectorAll("#di-tp-options .toggle-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderDeltaInfluence();
  });
});

const diBaselineSel = document.getElementById("di-baseline");
diBaselineSel.onchange = () => {
  deltaInfState.baseline = diBaselineSel.value;
  renderDeltaInfluence();
};

// Render delta-library chips grouped by category, with a small subheading
// per group. Hybrid is constrained: at most 2 hybrid chips can be active
// at any time, and they should not both be from the same axis (e.g. you
// can't pick two families simultaneously — that's contradictory).
const diDeltaContainer = document.getElementById("di-delta-library");

function diSyncDeltaChipState() {
  document.querySelectorAll(".di-delta-chip").forEach(chip => {
    const k = chip.dataset.key;
    chip.classList.toggle("active", deltaInfState.selectedDeltas.includes(k));
  });
}

function diHandleChipToggle(key) {
  const def = DELTA_LIBRARY[key];
  const isActive = deltaInfState.selectedDeltas.includes(key);
  if (isActive) {
    deltaInfState.selectedDeltas = deltaInfState.selectedDeltas.filter(k => k !== key);
  } else {
    if (def.group === "hybrid") {
      // Hybrid axes are categorical: at most one chip per axis (family,
      // placement, ratio). Selecting a new chip in the same axis replaces
      // the previously-active one. Chips from different axes coexist.
      const sameAxisActive = deltaInfState.selectedDeltas
        .map(k => ({ k, def: DELTA_LIBRARY[k] }))
        .filter(x => x.def && x.def.group === "hybrid" && x.def.hybridAxis === def.hybridAxis);
      for (const x of sameAxisActive) {
        deltaInfState.selectedDeltas = deltaInfState.selectedDeltas.filter(k => k !== x.k);
      }
    }
    deltaInfState.selectedDeltas.push(key);
  }
  diSyncDeltaChipState();
  renderDeltaInfluence();
}

// Group library entries by `group`, render a subheading + chip row per group.
// Hybrid is special: split into three axis subsections (Type / Placement / Ratio)
// rather than a single long row, with a "one or none per category" hint each.
function diRenderChipRow(parent, entries) {
  const row = document.createElement("div");
  row.style.cssText = "display:flex;flex-wrap:wrap;gap:6px;";
  entries.forEach(([key, def]) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "toggle-chip di-delta-chip" + (deltaInfState.selectedDeltas.includes(key) ? " active" : "");
    chip.dataset.key = key;
    chip.textContent = def.label;
    chip.title = def.detail || "";
    chip.onclick = () => diHandleChipToggle(key);
    row.appendChild(chip);
  });
  parent.appendChild(row);
}

const _byGroup = Object.entries(DELTA_LIBRARY).reduce((acc, [k, def]) => {
  (acc[def.group] = acc[def.group] || []).push([k, def]);
  return acc;
}, {});

Object.entries(_byGroup).forEach(([groupName, entries]) => {
  const groupMeta = DELTA_GROUPS[groupName] || { label: groupName, color: "var(--text2)" };
  const wrapper = document.createElement("div");
  wrapper.style.cssText = "width:100%;margin-top:10px;";
  const heading = document.createElement("div");
  heading.style.cssText = `font-size:10px;color:${groupMeta.color};text-transform:uppercase;letter-spacing:0.7px;margin-bottom:6px;font-weight:600;`;
  heading.textContent = groupMeta.label;
  wrapper.appendChild(heading);

  if (groupName !== "hybrid") {
    diRenderChipRow(wrapper, entries);
  } else {
    // Hybrid: render three category sub-rows.
    HYBRID_CATEGORIES.forEach(cat => {
      const subEntries = entries.filter(([k, d]) => d.hybridAxis === cat.axis);
      if (!subEntries.length) return;
      const subWrap = document.createElement("div");
      subWrap.style.cssText = "margin-top:6px;";
      const subHead = document.createElement("div");
      subHead.style.cssText = "font-size:10px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;";
      subHead.innerHTML = `<span style="color:${groupMeta.color};font-weight:600;">${cat.label}</span> <span style="opacity:0.7;">· ${cat.hint}</span>`;
      subWrap.appendChild(subHead);
      diRenderChipRow(subWrap, subEntries);
      wrapper.appendChild(subWrap);
    });
  }
  diDeltaContainer.appendChild(wrapper);
});

// Tabs
let _introLoaded = false;

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[ch]));
}

function renderInlineMarkdown(text) {
  const code = [];
  let s = escapeHtml(text).replace(/`([^`]+)`/g, (_, inner) => {
    const idx = code.push(inner) - 1;
    return `@@CODE${idx}@@`;
  });
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const safeHref = href.trim().toLowerCase().startsWith("javascript:") ? "#" : href.trim();
    return `<a href="${escapeHtml(safeHref)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  code.forEach((inner, idx) => {
    s = s.replace(`@@CODE${idx}@@`, `<code>${inner}</code>`);
  });
  return s;
}

function renderMarkdown(md) {
  const lines = String(md || "").replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let inCode = false, codeLines = [], listType = null;
  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };
  const flushCode = () => {
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    codeLines = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i], line = raw.trim();
    if (line.startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        closeList();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeLines.push(raw);
      continue;
    }
    if (!line) {
      closeList();
      continue;
    }
    const next = (lines[i + 1] || "").trim();
    if (line.startsWith("|") && next.startsWith("|") && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(next)) {
      closeList();
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(lines[i++].trim());
      i -= 1;
      const cells = row => row.replace(/^\||\|$/g, "").split("|").map(c => renderInlineMarkdown(c.trim()));
      const header = cells(rows[0]);
      const body = rows.slice(2).map(cells);
      html.push(`<table><thead><tr>${header.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${body.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    const quote = line.match(/^>\s+(.+)$/);
    if (quote) {
      closeList();
      html.push(`<blockquote>${renderInlineMarkdown(quote[1])}</blockquote>`);
      continue;
    }
    const bullet = line.match(/^[-*]\s+(.+)$/);
    const numbered = line.match(/^\d+\.\s+(.+)$/);
    if (bullet || numbered) {
      const wanted = bullet ? "ul" : "ol";
      if (listType !== wanted) {
        closeList();
        listType = wanted;
        html.push(`<${wanted}>`);
      }
      html.push(`<li>${renderInlineMarkdown((bullet || numbered)[1])}</li>`);
      continue;
    }
    closeList();
    html.push(`<p>${renderInlineMarkdown(line)}</p>`);
  }
  if (inCode) flushCode();
  closeList();
  return html.join("\n");
}

const INTRO_ASSET_BASE = (() => {
  const appScript = Array.from(document.scripts).find(s => (s.src || "").includes("app.js"));
  return new URL(".", appScript?.src || window.location.href);
})();

function introBlogUrls() {
  const urls = [
    new URL("blog.md", INTRO_ASSET_BASE),
    new URL("blog.md", window.location.href),
  ];
  if (window.location.protocol.startsWith("http")) {
    urls.push(new URL("/blog.md", window.location.origin));
    urls.push(new URL("/v1-web/blog.md", window.location.origin));
    urls.push(new URL("/v1-ac-solver/blog.md", window.location.origin));
  }
  const seen = new Set();
  return urls
    .filter(u => {
      const key = u.href;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map(u => {
      u.searchParams.set("ts", Date.now());
      return u.href;
    });
}

async function loadIntro() {
  const host = document.getElementById("intro-blog");
  if (!host || _introLoaded) return;
  const errors = [];
  try {
    for (const url of introBlogUrls()) {
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        host.innerHTML = renderMarkdown(await res.text());
        _introLoaded = true;
        return;
      } catch (err) {
        errors.push(`${url}: ${err.message || err}`);
      }
    }
    throw new Error(errors.join("; "));
  } catch (err) {
    const fileHint = window.location.protocol === "file:"
      ? `<p style="color:var(--text2);">This page is open as <code>file://</code>. Browsers block JavaScript from reading sibling markdown files in that mode; serve <code>v1-web/</code> over HTTP.</p>`
      : "";
    host.innerHTML = `<h1>Intro</h1><p style="color:var(--text2);">Could not load <code>blog.md</code>.</p>${fileHint}<p style="color:var(--text2);font-size:12px;">Tried: ${escapeHtml(errors.join(" | "))}</p>`;
  }
}

document.querySelectorAll(".tab").forEach(t => {
  t.onclick = () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    document.getElementById(t.dataset.tab).classList.add("active");
    setTimeout(() => {
      if (t.dataset.tab === "intro") loadIntro();
      if (t.dataset.tab === "pareto") renderPareto(current());
      if (t.dataset.tab === "modifier") renderModifier();
      if (t.dataset.tab === "delta-influence") renderDeltaInfluence();
      if (t.dataset.tab === "compare") renderCompare();
      if (t.dataset.tab === "tile-lattice") initTileLatticeOnce();
      if (t.dataset.tab === "throughput") initThroughputOnce();
    }, 0);
  };
});

// ======================
// Lookup
// ======================
// v1-fix UI (a): context filter — match the entry's context_length when
// present; treat missing fields as the legacy 8192 to preserve backward
// compatibility with the older single-context grid.
function _ctxMatches(g, wantCtx) {
  const got = g.context_length || 8192;
  return got === wantCtx;
}

function ctxLabel(ctx) {
  const hit = CTX_OPTIONS.find(c => c.value === ctx);
  return hit ? hit.label : String(ctx || 8192);
}

function entryLabels(entry) {
  return ((entry && entry.provenance && entry.provenance.labels) || []).slice();
}

function isProjectedEntry(entry) {
  return !!(entry && (entry.is_projection || entryLabels(entry).length));
}

function servingLimits(serving) {
  if (serving === "serving_20ms") return { tbt: 20, ttft: 200 };
  if (serving === "serving_50ms") return { tbt: 50, ttft: 500 };
  return { tbt: null, ttft: null };
}

function candidateViolations(c, entry) {
  const out = [];
  const hw = HW_INFO[(entry && entry.hw) || state.hw] || {};
  if (Number.isFinite(c.mem_gb) && Number.isFinite(hw.hbm_gb) && c.mem_gb > hw.hbm_gb) {
    out.push(`HBM ${c.mem_gb.toFixed(1)}GB > ${hw.hbm_gb}GB`);
  }
  const limits = servingLimits((entry && entry.serving) || state.serving);
  if (limits.tbt != null && Number.isFinite(c.tbt_ms) && c.tbt_ms > limits.tbt) {
    out.push(`TBT ${c.tbt_ms.toFixed(1)}ms > ${limits.tbt}ms`);
  }
  if (limits.ttft != null && Number.isFinite(c.ttft_ms) && c.ttft_ms > limits.ttft) {
    out.push(`TTFT ${c.ttft_ms.toFixed(1)}ms > ${limits.ttft}ms`);
  }
  return out;
}

function candidateKey(c) {
  return [
    c.arch_family || c.model_type || "dense", c.state_type || "",
    c.d_model, c.n_layers, c.n_heads, c.n_kv_heads, c.ffn_dim,
    c.ffn_prec, c.weight_prec, c.kv_bits, c.tp || "", c.pp || ""
  ].join("|");
}

function candidateForEntry(c, entry) {
  const out = { ...c };
  const fam = out.arch_family || out.model_type || entry.arch_mode || "dense";
  out.arch_family = fam;
  out.model_type = out.model_type || fam;
  out.context_length = out.context_length || entry.context_length || 8192;
  out.param_cost_B = paramCostB(out);
  if (isProjectedEntry(entry)) {
    out._projection_labels = entryLabels(entry);
  }
  const violations = candidateViolations(out, entry);
  out._feasible = violations.length === 0 && out._feasible !== false;
  if (violations.length) out._violations = violations;
  return out;
}

function displayedRecordsForEntry(entry) {
  if (!entry) return [];
  const raw = [];
  if (entry.optimal) raw.push(entry.optimal);
  (entry.pareto || []).forEach(p => raw.push(p));
  const seen = new Set();
  const records = [];
  raw.forEach(c => {
    const rec = candidateForEntry(c, entry);
    const key = candidateKey(rec);
    if (seen.has(key)) return;
    seen.add(key);
    if (rec._feasible) records.push(rec);
  });
  return records;
}

function displayDominates(a, b) {
  const lower = ["loss", "tbt_ms", "ttft_ms", "mem_gb", "param_cost_B"];
  const higher = ["train_tps"];
  let better = false;
  for (const k of lower) {
    const av = candidateMetric(a, k), bv = candidateMetric(b, k);
    if (av == null || bv == null) continue;
    if (av > bv + 1e-9) return false;
    if (av < bv - 1e-9) better = true;
  }
  for (const k of higher) {
    const av = candidateMetric(a, k), bv = candidateMetric(b, k);
    if (av == null || bv == null) continue;
    if (av < bv - 1e-9) return false;
    if (av > bv + 1e-9) better = true;
  }
  return better;
}

function displayedFrontier(records) {
  return records
    .filter(r => !records.some(o => o !== r && displayDominates(o, r)))
    .sort((a,b) => (a.loss ?? Infinity) - (b.loss ?? Infinity)
      || (a.tbt_ms ?? Infinity) - (b.tbt_ms ?? Infinity)
      || (b.train_tps ?? 0) - (a.train_tps ?? 0));
}

function lookup(hw, params, tokens, serving, ctx) {
  ctx = ctx || state.contextLength || 8192;
  // Round-2 fix N4: do NOT fall back to a different context if the requested
  // (hw, params, tokens, serving, ctx) tuple has no row. Returning null causes
  // the UI to render "No Feasible Solution" rather than silently showing 8k
  // data under a 1M sidebar selection.
  return GRID.find(g => g.hw === hw && g.params_B === params && g.tokens_T === tokens && g.serving === serving && _ctxMatches(g, ctx)) || null;
}

function lookupFiltered(hw, params, tokens, serving, families, ctx) {
  ctx = ctx || state.contextLength || 8192;
  // Round-2 fix N4: strict context match only. No silent fallback to a
  // different context -- empty result triggers "No Feasible Solution".
  return GRID.filter(g => g.hw === hw && g.params_B === params && g.tokens_T === tokens && g.serving === serving
    && families.has(g.arch_mode || "dense") && _ctxMatches(g, ctx));
}

function mergedEntry(hw, params, tokens, serving, families, ctx) {
  ctx = ctx || state.contextLength || 8192;
  const entries = families
    ? lookupFiltered(hw, params, tokens, serving, families, ctx)
    : GRID.filter(g => g.hw === hw && g.params_B === params && g.tokens_T === tokens && g.serving === serving && _ctxMatches(g, ctx));
  if (!entries.length) return null;
  // Pick the best feasible displayed candidate by the user's Tradeoff
  // Preference composite. For synthetic/projection rows this intentionally
  // uses only embedded records, not copied backend candidate counts.
  const records = [];
  entries.forEach(e => records.push(...displayedRecordsForEntry(e)));
  if (!records.length) return entries[0];
  const pareto = displayedFrontier(records);
  const scoringPool = pareto.length ? pareto : records;
  const bests = frontierBests(scoringPool);
  let bestEntry = entries[0];
  let bestCandidate = null;
  let bestScore = Infinity;
  let totalCandidates = 0, totalFeasible = 0, maxTime = 0;
  const hasProjection = entries.some(isProjectedEntry);
  entries.forEach(e => {
    totalCandidates += (e.candidates || 0);
    totalFeasible += (e.feasible || 0);
    maxTime = Math.max(maxTime, e.time_s || 0);
  });
  scoringPool.forEach(c => {
    const s = scoreCandidate(c, bests, state.prefWeights);
    if (s < bestScore) {
      bestScore = s;
      bestCandidate = c;
      bestEntry = entries.find(e => (e.arch_mode || "dense") === (c.arch_family || "dense")) || bestEntry;
    }
  });
  const labels = Array.from(new Set(entries.flatMap(entryLabels)));
  return {
    ...bestEntry,
    optimal: bestCandidate,
    pareto,
    pareto_size: pareto.length,
    candidates: hasProjection ? records.length : totalCandidates,
    feasible: hasProjection ? records.length : totalFeasible,
    time_s: hasProjection ? 0 : maxTime,
    validated_points: records.length,
    search_provenance: hasProjection ? "mixed_embedded_projection_points" : "native_optimizer",
    is_projection: hasProjection,
    provenance: {
      kind: hasProjection ? "mixed" : "native_optimizer",
      labels,
      native_optimizer: !hasProjection,
    },
    _composite_score: bestScore
  };
}

function current() {
  const families = activeArchFamilies();
  return mergedEntry(state.hw, state.params, state.tokens, state.serving, families, state.contextLength)
    || lookup(state.hw, state.params, state.tokens, state.serving, state.contextLength);
}

function paramMeta(params) {
  return PARAM_TARGETS.find(t => t.value === params) || { value: params, label: `${params}B` };
}

function fmtParamTarget(params) {
  return paramMeta(params).label || `${params}B`;
}

function fmtParamCount(params) {
  if (params >= 1000) {
    const t = params / 1000;
    return `${Number.isInteger(t) ? t : t.toFixed(2)}T`;
  }
  return `${params}B`;
}



function renderReferenceComparison(params, optimal) {
  const refs = REFERENCE_MODELS[params];
  if (!refs || !refs.length) return "";
  const dims = ["d_model", "n_layers", "n_heads", "d_head", "n_kv_heads", "ffn_dim"];
  return `
    <div style="margin-top:16px;padding:12px;background:var(--surface2);border-radius:8px;border:1px solid var(--border);">
      <h4 style="margin:0 0 8px;font-size:13px;color:var(--accent);">Reference Model Comparison</h4>
      <div style="overflow-x:auto;">
      <table style="width:100%;font-size:12px;border-collapse:collapse;white-space:nowrap;">
        <tr style="color:var(--text2);border-bottom:1px solid var(--border);">
          <th style="text-align:left;padding:4px 8px;">Dim</th>
          <th style="text-align:right;padding:4px 8px;color:var(--accent);">AC-Optimal</th>
          ${refs.map(r => `<th style="text-align:right;padding:4px 8px;">${r.name}</th>`).join("")}
        </tr>
        ${dims.map(dim => {
          const acVal = optimal[dim];
          return `<tr style="border-bottom:1px solid var(--border);">
            <td style="padding:4px 8px;color:var(--text2);">${dim}</td>
            <td style="text-align:right;padding:4px 8px;font-weight:600;">${acVal != null ? acVal.toLocaleString() : "—"}</td>
            ${refs.map(r => {
              const rv = r.arch[dim];
              const delta = (rv && acVal) ? ((acVal - rv) / rv * 100).toFixed(0) : null;
              const clr = delta === null ? "var(--text2)" : (parseFloat(delta) > 0 ? "#60a5fa" : parseFloat(delta) < 0 ? "#fb923c" : "var(--text)");
              return `<td style="text-align:right;padding:4px 8px;">
                ${rv != null ? rv.toLocaleString() : "—"}
                ${delta !== null ? `<span style="font-size:10px;color:${clr};margin-left:4px;">(${delta > 0 ? "+" : ""}${delta}%)</span>` : ""}
              </td>`;
            }).join("")}
          </tr>`;
        }).join("")}
        <tr style="border-bottom:1px solid var(--border);">
          <td style="padding:4px 8px;color:var(--text2);">type</td>
          <td style="text-align:right;padding:4px 8px;font-weight:600;color:${{dense:"#60a5fa",moe:"#fb923c",hybrid:"#34d399",moe_hybrid:"#a78bfa"}[optimal.arch_family||"dense"]||"inherit"}">${{dense:"Dense",moe:"MoE",hybrid:"Hybrid",moe_hybrid:"MoE+Hybrid"}[optimal.arch_family||"dense"]} (AC)${optimal.active_params_B && optimal.arch_family==="moe" ? " " + Math.round(optimal.active_params_B) + "B active" : ""}</td>
          ${refs.map(r => `<td style="text-align:right;padding:4px 8px;">${r.type}${r.active_params_B ? ` (${r.active_params_B}B active)` : ""}</td>`).join("")}
        </tr>
        <tr>
          <td style="padding:4px 8px;color:var(--text2);">params</td>
          <td style="text-align:right;padding:4px 8px;font-weight:600;">${fmtParamCount(paramCostB(optimal))}${optimal.active_params_B ? ` total / ${fmtParamCount(optimal.active_params_B)} active` : ""}</td>
          ${refs.map(r => `<td style="text-align:right;padding:4px 8px;">${r.total_params_B}B</td>`).join("")}
        </tr>
      </table>
      </div>
      <p style="font-size:10px;color:var(--text2);margin:8px 0 0;font-style:italic;">
        Deltas show (AC − ref) / ref.
      </p>
    </div>
  `;
}

// ======================
// Rendering helpers
// ======================
function confBadge(c) { return `<span class="badge ${c}">${c}</span>`; }
function fmtN(n) { return n.toLocaleString(); }
function penClass(v) { return v < 2 ? "good" : v < 8 ? "warn" : "bad"; }

const PENALTY_COLORS = {
  shape: "#7c6ef0", gqa: "#60a5fa", kv_quant: "#fb923c",
  weight_precision: "#f87171", activation_precision: "#fbbf24", feasibility: "#ef4444",
  architecture_residual: "#7c6ef0", precision_residual: "#f87171",
  risk_residual: "#fbbf24", moe_residual: "#34d399", state_residual: "#22d3ee",
  large_shape_stability_prior: "#f97316", large_shape_stability: "#f97316",
  data_quality: "#60a5fa"
};

function termLabel(name) {
  return {
    architecture_residual: "Architecture",
    precision_residual: "Precision",
    moe_residual: "MoE Hook",
    state_residual: "State/Memory Hook",
    large_shape_stability_prior: "Large-Scale Shape",
    risk_residual: "Risk",
    data_quality: "Data Quality",
    feasibility: "Feasibility",
    spine: "Scaling Spine",
  }[name] || name.replaceAll("_", " ");
}

function termValuePct(term) {
  if (!term) return 0;
  if (Number.isFinite(term.value_pct)) return term.value_pct;
  return (term.value || 0) * 100;
}

function termUncertaintyPct(term) {
  if (!term) return 0;
  if (Number.isFinite(term.uncertainty_pct)) return term.uncertainty_pct;
  return (term.uncertainty || 0) * 100;
}

function residualPct(o) {
  return Number.isFinite(o.total_residual_pct) ? o.total_residual_pct : (o.penalty_pct || 0);
}

function spineLoss(o) {
  return Number.isFinite(o.spine_loss) ? o.spine_loss : o.chinchilla;
}

function qualityTerm(o, name) {
  return (o.quality_terms || {})[name] || null;
}

function qualityFeatures(o, name) {
  return qualityTerm(o, name)?.features || {};
}

function formatBytes(n) {
  if (!Number.isFinite(n)) return "n/a";
  if (n >= 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(2)} MB`;
  if (n >= 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${Math.round(n)} B`;
}

function qualityTermBars(o) {
  const terms = Object.entries(o.quality_terms || {})
    .filter(([name, term]) => name !== "spine" && name !== "feasibility" && (termValuePct(term) || termUncertaintyPct(term)))
    .sort((a, b) => Math.abs(termValuePct(b[1])) - Math.abs(termValuePct(a[1])));
  if (!terms.length) return `<p style="color:var(--text2);font-size:13px;">No non-spine residuals applied.</p>`;
  const maxVal = Math.max(...terms.map(([, t]) => Math.abs(termValuePct(t))), 0.001);
  return terms.map(([name, term]) => {
    const value = termValuePct(term);
    const width = Math.max(2, Math.abs(value) / maxVal * 100);
    const color = PENALTY_COLORS[name] || "#888";
    const unc = termUncertaintyPct(term);
    return `<div class="pen-bar">
      <div class="pen-bar-label"><span>${termLabel(name)}</span><span>${value.toFixed(2)}% · ±${unc.toFixed(2)}%</span></div>
      <div class="pen-bar-track"><div class="pen-bar-fill" style="width:${width}%;background:${color}"></div></div>
    </div>`;
  }).join("");
}

// ======================
// Draw helpers
// ======================
function drawScatter(canvasId, points, opts = {}) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = (opts.height || rect.height) * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = opts.height || rect.height;
  ctx.clearRect(0, 0, w, h);

  const pad = { t: 30, r: 20, b: 50, l: 65 };
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b;

  if (!points.length) return;
  let minX = Math.min(...points.map(p => p.x)), maxX = Math.max(...points.map(p => p.x));
  let minY = Math.min(...points.map(p => p.y)), maxY = Math.max(...points.map(p => p.y));
  const xPad = (maxX - minX) * 0.05 || 1; const yPad = (maxY - minY) * 0.05 || 0.01;
  minX -= xPad; maxX += xPad; minY -= yPad; maxY += yPad;

  function px(v) { return pad.l + (v - minX) / (maxX - minX) * cw; }
  function py(v) { return pad.t + ch - (v - minY) / (maxY - minY) * ch; }

  // Grid
  ctx.strokeStyle = "#2e3140"; ctx.lineWidth = 0.5;
  for (let i = 0; i <= 5; i++) {
    const y = pad.t + ch * i / 5;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(w - pad.r, y); ctx.stroke();
    ctx.fillStyle = "#9699a6"; ctx.font = "11px Inter, sans-serif"; ctx.textAlign = "right";
    const yv = maxY - (maxY - minY) * i / 5;
    ctx.fillText(yv.toFixed(opts.yDec || 4), pad.l - 8, y + 4);
  }
  for (let i = 0; i <= 4; i++) {
    const x = pad.l + cw * i / 4;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ch); ctx.stroke();
    ctx.textAlign = "center";
    const xv = minX + (maxX - minX) * i / 4;
    ctx.fillText(opts.xFmt ? opts.xFmt(xv) : xv.toFixed(0), x, pad.t + ch + 18);
  }

  // Points
  points.forEach(p => {
    ctx.fillStyle = p.color || "#7c6ef0";
    ctx.globalAlpha = p.highlight ? 1 : 0.4;
    ctx.beginPath();
    ctx.arc(px(p.x), py(p.y), p.highlight ? 7 : 4, 0, Math.PI * 2);
    ctx.fill();
    if (p.highlight) {
      ctx.strokeStyle = "#fff"; ctx.lineWidth = 2;
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;

  // Axis labels
  if (opts.xLabel) {
    ctx.fillStyle = "#9699a6"; ctx.font = "11px Inter, sans-serif"; ctx.textAlign = "center";
    ctx.fillText(opts.xLabel, pad.l + cw / 2, h - 6);
  }
  if (opts.yLabel) {
    ctx.save(); ctx.translate(14, pad.t + ch / 2);
    ctx.rotate(-Math.PI / 2); ctx.fillStyle = "#9699a6";
    ctx.font = "11px Inter, sans-serif"; ctx.textAlign = "center";
    ctx.fillText(opts.yLabel, 0, 0); ctx.restore();
  }
}

function drawGroupedBars(canvasId, groups, opts = {}) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = (opts.height || rect.height) * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = opts.height || rect.height;
  ctx.clearRect(0, 0, w, h);

  const pad = { t: 30, r: 20, b: 60, l: 60 };
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b;
  if (!groups.length) return;

  const metrics = opts.metrics || [];
  const nMetrics = metrics.length;
  const gw = cw / groups.length;
  const bw = Math.min(gw * 0.7 / nMetrics, 35);

  let maxVal = 0;
  groups.forEach(g => metrics.forEach(m => { const v = g[m.key]; if (v > maxVal) maxVal = v; }));
  maxVal *= 1.15; if (maxVal === 0) maxVal = 1;

  // Grid
  ctx.strokeStyle = "#2e3140"; ctx.lineWidth = 0.5;
  for (let i = 0; i <= 5; i++) {
    const y = pad.t + ch - ch * i / 5;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(w - pad.r, y); ctx.stroke();
    ctx.fillStyle = "#9699a6"; ctx.font = "11px Inter, sans-serif"; ctx.textAlign = "right";
    ctx.fillText((maxVal * i / 5).toFixed(opts.dec || 0), pad.l - 8, y + 4);
  }

  // Bars
  groups.forEach((g, gi) => {
    metrics.forEach((m, mi) => {
      const v = g[m.key] || 0;
      const x = pad.l + gw * gi + (gw - bw * nMetrics) / 2 + mi * bw;
      const bh = (v / maxVal) * ch;
      ctx.fillStyle = m.color;
      ctx.fillRect(x, pad.t + ch - bh, bw - 1, bh);
    });
    ctx.fillStyle = "#9699a6"; ctx.font = "11px Inter, sans-serif"; ctx.textAlign = "center";
    ctx.fillText(g.label, pad.l + gw * gi + gw / 2, pad.t + ch + 18);
  });

  if (opts.yLabel) {
    ctx.save(); ctx.translate(14, pad.t + ch / 2);
    ctx.rotate(-Math.PI / 2); ctx.fillStyle = "#9699a6";
    ctx.font = "11px Inter, sans-serif"; ctx.textAlign = "center";
    ctx.fillText(opts.yLabel, 0, 0); ctx.restore();
  }
}

const METRICS = {
  train_tps: { label: "Training TPS", better: "high", fmt: v => fmtN(Math.round(v)) },
  loss: { label: "Loss Proxy", better: "low", fmt: v => v.toFixed(4) },
  compat_score: { label: "Hardware Fit Score", better: "high", fmt: v => v.toFixed(0) },
  tbt_ms: { label: "Serving TBT", better: "low", fmt: v => `${v.toFixed(2)}ms` },
  ttft_ms: { label: "Serving TTFT", better: "low", fmt: v => `${v.toFixed(1)}ms` },
  mem_gb: { label: "Memory/GPU", better: "low", fmt: v => `${v.toFixed(2)}GB` },
  params_B: { label: "Active Params", better: "neutral", fmt: v => `${v.toFixed(2)}B` },
  param_cost_B: { label: "Parameter Cost", better: "low", fmt: v => `${v.toFixed(2)}B` },
  n_layers: { label: "Layers", better: "neutral", fmt: v => `${Math.round(v)}` },
  risk: { label: "Risk Score", better: "low", fmt: v => v.toFixed(2) },
  kv_gb: { label: "KV Cache/GPU", better: "low", fmt: v => `${v.toFixed(3)}GB` },
};

function metricValue(p, key) {
  if (key === "risk") return p.risk || 0;
  if (key === "kv_gb") return p.kv_gb || 0;
  if (key === "param_cost_B") return paramCostB(p) || 0;
  return p[key] ?? 0;
}

function colorForPoint(p, mode) {
  if (p.isBaseline) return "#e0e0e6";
  if (p.isSelected) return "#34d399";
  if (mode === "moveClass") {
    return {
      deployment:"#34d399",
      kernel:"#60a5fa",
      cache:"#22d3ee",
      scheduling:"#fbbf24",
      architecture:"#fb923c",
      precision:"#a78bfa",
    }[p.moveClass] || "#7c6ef0";
  }
  if (mode === "kv") return {16:"#60a5fa",8:"#22d3ee",4:"#fb923c"}[p.kv_bits] || "#7c6ef0";
  if (mode === "gqa") {
    const r = p.n_heads / p.n_kv_heads;
    if (r === 1) return "#60a5fa";
    if (r <= 4) return "#34d399";
    if (r <= 8) return "#fbbf24";
    return "#fb923c";
  }
  if (mode === "confidence") return {high:"#34d399",medium:"#fbbf24",low:"#f87171"}[p.confidence] || "#7c6ef0";
  if (mode === "arch_family") return {dense:"#60a5fa",moe:"#fb923c",hybrid:"#34d399",moe_hybrid:"#a78bfa"}[p.arch_family || "dense"] || "#7c6ef0";
  return p.ffn_prec === "fp8" ? "#a78bfa" : "#60a5fa";
}

function legendFor(mode, hasBaseline = false) {
  const items = hasBaseline ? [{label:"baseline", color:"#e0e0e6"}, {label:"selected", color:"#34d399"}] : [];
  if (mode === "moveClass") items.push({label:"deployment",color:"#34d399"},{label:"kernel",color:"#60a5fa"},{label:"cache",color:"#22d3ee"},{label:"scheduling",color:"#fbbf24"},{label:"optional",color:"#fb923c"});
  else if (mode === "kv") items.push({label:"16-bit",color:"#60a5fa"},{label:"8-bit",color:"#22d3ee"},{label:"4-bit",color:"#fb923c"});
  else if (mode === "gqa") items.push({label:"MHA",color:"#60a5fa"},{label:"GQA≤4",color:"#34d399"},{label:"GQA≤8",color:"#fbbf24"},{label:"MQA/aggressive",color:"#fb923c"});
  else if (mode === "confidence") items.push({label:"high",color:"#34d399"},{label:"medium",color:"#fbbf24"},{label:"low",color:"#f87171"});
  else if (mode === "arch_family") items.push({label:"Dense",color:"#60a5fa"},{label:"MoE",color:"#fb923c"},{label:"Hybrid",color:"#34d399"},{label:"MoE+Hybrid",color:"#a78bfa"});
  else items.push({label:"BF16",color:"#60a5fa"},{label:"FP8 FFN",color:"#a78bfa"});
  return items.map(i => `<span class="legend-item"><span class="legend-dot" style="background:${i.color}"></span>${i.label}</span>`).join("");
}

function drawRichScatter(canvasId, records, opts) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const hCss = opts.height || 360;
  canvas.width = Math.max(rect.width, 1) * dpr;
  canvas.height = hCss * dpr;
  ctx.scale(dpr, dpr);
  const w = Math.max(rect.width, 1), h = hCss;
  ctx.clearRect(0, 0, w, h);

  if (!records.length) return;
  const pad = { t: 26, r: 24, b: 56, l: 66 };
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b;
  const xKey = opts.xKey, yKey = opts.yKey;
  let xs = records.map(r => metricValue(r, xKey));
  let ys = records.map(r => metricValue(r, yKey));
  let minX = Math.min(...xs), maxX = Math.max(...xs);
  let minY = Math.min(...ys), maxY = Math.max(...ys);
  const xPad = (maxX - minX) * 0.08 || 1;
  const yPad = (maxY - minY) * 0.08 || 0.01;
  minX -= xPad; maxX += xPad; minY -= yPad; maxY += yPad;
  const px = v => pad.l + (v - minX) / (maxX - minX) * cw;
  const py = v => pad.t + ch - (v - minY) / (maxY - minY) * ch;

  ctx.strokeStyle = "#2e3140"; ctx.lineWidth = 0.5;
  ctx.fillStyle = "#9699a6"; ctx.font = "11px Inter, sans-serif";
  for (let i = 0; i <= 5; i++) {
    const y = pad.t + ch * i / 5;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(w - pad.r, y); ctx.stroke();
    const yv = maxY - (maxY - minY) * i / 5;
    ctx.textAlign = "right"; ctx.fillText(METRICS[yKey].fmt(yv), pad.l - 8, y + 4);
  }
  for (let i = 0; i <= 4; i++) {
    const x = pad.l + cw * i / 4;
    ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, pad.t + ch); ctx.stroke();
    const xv = minX + (maxX - minX) * i / 4;
    ctx.textAlign = "center"; ctx.fillText(METRICS[xKey].fmt(xv), x, pad.t + ch + 18);
  }

  const sorted = [...records].sort((a,b) => metricValue(a, xKey) - metricValue(b, xKey));
  ctx.strokeStyle = "rgba(167,139,250,0.45)"; ctx.lineWidth = 1.5;
  ctx.beginPath();
  sorted.forEach((r, i) => {
    const x = px(metricValue(r, xKey)), y = py(metricValue(r, yKey));
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  const sizeVals = records.map(r => metricValue(r, opts.sizeKey || "none"));
  const sMin = Math.min(...sizeVals), sMax = Math.max(...sizeVals);
  records.forEach((r, i) => {
    const x = px(metricValue(r, xKey)), y = py(metricValue(r, yKey));
    const raw = opts.sizeKey === "none" ? 0.5 : (metricValue(r, opts.sizeKey) - sMin) / ((sMax - sMin) || 1);
    const radius = r.isSelected ? 8 : r.isBaseline ? 7 : 4 + raw * 4;
    ctx.fillStyle = colorForPoint(r, opts.colorMode);
    ctx.globalAlpha = r.isRejected ? 0.28 : r.isBaseline || r.isSelected ? 1 : 0.72;
    ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
    if (r.isSelected || r.isBaseline || i === opts.selectedIndex) {
      ctx.strokeStyle = r.isSelected ? "#34d399" : "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#9699a6"; ctx.font = "11px Inter, sans-serif"; ctx.textAlign = "center";
  ctx.fillText(METRICS[xKey].label, pad.l + cw / 2, h - 8);
  ctx.save(); ctx.translate(14, pad.t + ch / 2); ctx.rotate(-Math.PI / 2);
  ctx.fillText(METRICS[yKey].label, 0, 0); ctx.restore();

  canvas.onclick = e => {
    const box = canvas.getBoundingClientRect();
    const mx = e.clientX - box.left, my = e.clientY - box.top;
    let best = 0, bestDist = Infinity;
    records.forEach((r, i) => {
      const dx = mx - px(metricValue(r, xKey));
      const dy = my - py(metricValue(r, yKey));
      const d = dx*dx + dy*dy;
      if (d < bestDist) { bestDist = d; best = i; }
    });
    if (opts.onSelect) opts.onSelect(best);
  };
}

function estimateParamsJS(c) {
  const q = c.d_model * c.d_head * c.n_heads;
  const kv = 2 * c.d_model * c.d_head * c.n_kv_heads;
  const o = c.d_head * c.n_heads * c.d_model;
  const ffn = 3 * c.d_model * c.ffn_dim;
  const perLayer = q + kv + o + ffn;
  const embed = 2 * c.vocab_size * c.d_model;
  const norm = 2 * c.d_model * c.n_layers;
  return perLayer * c.n_layers + embed + norm;
}

const MOD_BASELINES = {
  mistral: {
    name: "Mistral-7B-like",
    d_model: 4096, n_layers: 32, n_heads: 32, d_head: 128, n_kv_heads: 8,
    ffn_dim: 14336, vocab_size: 32000, ffn_prec: "bf16", kv_bits: 16,
    params_B: 7.24, loss: 2.0933, train_tps: 11878, tbt_ms: 5.91,
    ttft_ms: 33.64, mem_gb: 1.97, kv_gb: 0.125, confidence: "high",
  },
};

function hwModifierScale(hw) {
  // Round-2 fix N7: TPU v5p train scale corrected from 0.85 to 0.50.
  // bf16 TFLOPS: H100 989, B200 ~2250, v5p 459, Trn2 650, Trn3 1300.
  // HBM BW (TB/s): H100 3.35, B200 8.0, v5p 2.8, Trn2 2.9, Trn3 6.4.
  if (hw === "b200")       return { train: 2.05, tbt: 0.50, ttft: 0.55, mem: 0.82 };
  if (hw === "tpu_v5p")    return { train: 0.50, tbt: 1.20, ttft: 1.18, mem: 1.05 };
  if (hw === "tpu_v5e")    return { train: 0.30, tbt: 2.40, ttft: 2.20, mem: 1.15 };
  if (hw === "trainium2")  return { train: 0.66, tbt: 1.15, ttft: 1.40, mem: 1.00 };
  if (hw === "trainium3")  return { train: 1.30, tbt: 0.55, ttft: 0.65, mem: 0.82 };
  return { train: 1, tbt: 1, ttft: 1, mem: 1 };
}

function cloneCandidate(b) {
  return {...b, changes: [], risk: 0, riskLabel: "baseline", isBaseline: true, qualityPreserving: true, moveClass: "baseline", compat_score: 0};
}

function hardwareFitMove(base, label, moveClass, effects, detail) {
  const rec = {
    ...base,
    isBaseline: false,
    qualityPreserving: true,
    moveClass,
    risk: 0,
    riskLabel: "none",
    changes: [label],
    detail,
  };
  rec.loss = base.loss;
  rec.qualityRiskPct = 0;
  rec.train_tps = base.train_tps * (1 + (effects.train || 0));
  rec.tbt_ms = base.tbt_ms * (1 - (effects.tbt || 0));
  rec.ttft_ms = base.ttft_ms * (1 - (effects.ttft || 0));
  rec.mem_gb = base.mem_gb * (1 - (effects.mem || 0));
  rec.kv_gb = base.kv_gb * (1 - (effects.kv || 0));
  rec.compat_score = modifierScore(rec, base);
  return rec;
}

function generateHardwareFitMoves(base) {
  const moves = [
    hardwareFitMove(base, "GQA-aware TP head sharding", "deployment", { tbt: 0.045, ttft: 0.025, train: 0.025 }, "Keeps 32 query heads and 8 KV heads, but maps each KV group cleanly onto tensor-parallel ranks to reduce cross-rank traffic."),
    hardwareFitMove(base, "Paged KV cache: 32-token blocks", "cache", { tbt: 0.025, mem: 0.095, kv: 0.18 }, "Changes cache allocation/layout, not KV values. This improves scheduler residency and reduces wasted cache pages."),
    hardwareFitMove(base, "Static decode CUDA graph buckets", "scheduling", { tbt: 0.075, ttft: 0.035 }, "Captures common decode shapes to remove launch overhead for the same BF16 model."),
    hardwareFitMove(base, "Persistent decode attention kernel", "kernel", { tbt: 0.085, train: 0.015 }, "Uses a decode kernel better matched to long-context GQA; math and precision stay unchanged."),
    hardwareFitMove(base, "Fused SwiGLU + RMSNorm epilogue", "kernel", { ttft: 0.055, train: 0.065, mem: 0.025 }, "Fuses existing operations in the FFN block without changing hidden size, weights, or dtype."),
    hardwareFitMove(base, "Sequence-parallel activations", "deployment", { train: 0.045, mem: 0.075 }, "Shards activations/residual traffic across TP ranks during training; model architecture is identical."),
    hardwareFitMove(base, "Chunked prefill: 4 × 2048 tokens", "scheduling", { ttft: 0.11, mem: 0.055 }, "Schedules the same 8192-token prompt in hardware-friendly chunks to reduce peak residency."),
    hardwareFitMove(base, "KV allocator page coloring", "cache", { tbt: 0.035, mem: 0.04, kv: 0.10 }, "Keeps BF16 KV but improves memory locality and fragmentation under long-context serving."),
    hardwareFitMove(base, "Tensor-core weight swizzle", "kernel", { ttft: 0.035, train: 0.035 }, "Stores existing BF16 weights in a tensor-core-friendly layout; loaded values are unchanged."),
  ];

  modifierState.tpOptions
    .filter(tp => tp !== 8)
    .forEach(tp => {
      const scale = tp === 4 ? { train: -0.10, tbt: -0.03, ttft: -0.04, mem: -0.92, kv: -1.0 }
        : tp === 2 ? { train: -0.22, tbt: -0.08, ttft: -0.10, mem: -2.75, kv: -3.0 }
        : { train: -0.35, tbt: -0.15, ttft: -0.16, mem: -6.2, kv: -7.0 };
      const rec = hardwareFitMove(base, `TP layout: 8 → ${tp}`, "deployment", scale, "Changes tensor-parallel placement only. Same weights and numerics, but fewer shards can increase per-GPU memory.");
      rec.tp = tp;
      moves.push(rec);
    });
  return moves;
}

function evalModifierCandidate(c, base, tp, hwName = state.hw, applyHardwareScale = true) {
  c.tp = tp;
  const params = estimateParamsJS(c) / 1e9;
  // Round-2 fix N9: MoE delta multiplies *total* params by ~6.5 (active stays flat).
  const moeTotalMult = c._moe_total_mult || 1.0;
  const activeParams = params;
  const totalParams = params * moeTotalMult;
  const paramRatio = activeParams / base.params_B;
  const layerRatio = c.n_layers / base.n_layers;
  const ffnRatio = c.ffn_dim / base.ffn_dim;
  // MLA cuts KV per-token by ~5x (back of envelope vs MHA at same n_kv_heads).
  const mlaKvMult = c._mla ? 0.20 : 1.0;
  // SWA caps effective KV at window size, but only matters when ctx > window.
  const swaKvMult = c._swa_window ? 0.30 : 1.0;
  const kvHeadRatio = c.n_kv_heads / base.n_kv_heads;
  const kvBitsRatio = c.kv_bits / base.kv_bits;
  const tpRatio = (tp || 8) / 8;
  const kvRatio = kvHeadRatio * kvBitsRatio * layerRatio * mlaKvMult * swaKvMult / tpRatio;
  const group = c.n_heads / c.n_kv_heads;
  const fp8 = c.ffn_prec === "fp8";
  const scale = applyHardwareScale ? hwModifierScale(hwName) : { train: 1, tbt: 1, ttft: 1, mem: 1 };

  // Round-2 fix N6: quality math made consistent with the Python quality_v1 spine.
  // Shape penalty (Tay 2021 / Hoffmann 2022 residual): roughly 2.5% per unit
  // |layer or ffn change| relative to optimum shape, capped.
  let shapePenalty = Math.min(0.08, Math.abs(layerRatio - 1) * 1.5 + Math.abs(ffnRatio - 1) * 1.0) * 0.025;
  // GQA residual (Touvron 2023, Jiang 2023): grows with group size; MQA worst.
  let gqaPenalty = group <= 1.001 ? 0
    : group <= 2.5 ? 0.0015
    : group <= 4.5 ? 0.0035
    : group <= 8.5 ? 0.0060
    : c.n_kv_heads === 1 ? 0.0120 : 0.0090;
  // MLA recovers most of the GQA quality loss (DeepSeek-V2/V3).
  if (c._mla) gqaPenalty = Math.max(0, gqaPenalty - 0.004);
  // KV quantization penalty (Liu 2024, Hooper 2024).
  let kvPenalty = c.kv_bits >= 16 ? 0 : c.kv_bits >= 8 ? 0.002 : c.kv_bits >= 6 ? 0.006 : 0.014;
  // FP8 FFN residual (Micikevicius 2022, Peng 2023).
  let precisionPenalty = fp8 ? 0.006 : 0;
  // SWA residual when window < ctx (Beltagy 2020 / Mistral 2023).
  let swaPenalty = c._swa_window ? 0.004 : 0;
  // MoE gives a small at-active-quality bump (DeepSeek-V3 / Mixtral).
  let moeBonus = c._moe ? -0.005 : 0;
  // Capacity scaling: L ~ N^-alpha with alpha ~ 0.34 (Chinchilla).
  // dL/L per +x% active params ~ -0.34 * ln(1+x).
  let capacityBoost = -0.34 * Math.log(Math.max(0.01, paramRatio));
  // Final loss: multiplicative residuals + Chinchilla-aware capacity term.
  // No artificial floor -- let it go where the math says.
  c.loss = base.loss + base.loss * (shapePenalty + gqaPenalty + kvPenalty + precisionPenalty + swaPenalty + moeBonus + 0.01 * capacityBoost);

  const computeWork = layerRatio * (0.62 + 0.38 * ffnRatio);
  // FP8 measured speedup on H100 dense ~= 1.6x (not 1.95x).
  const precisionSpeed = fp8 ? 1.6 : 1.0;
  // TP scaling: comm-cost dominates at TP=8; smaller TP can be FASTER per-GPU,
  // not slower. Curve fit to measured H100 throughput for 7B dense.
  const tpPenalty = tp === 1 ? 1.10 : tp === 2 ? 1.05 : tp === 4 ? 1.00 : tp === 8 ? 0.95 : 0.85;
  c.train_tps = base.train_tps * scale.train * precisionSpeed * tpPenalty / computeWork;
  // MoE TBT: bandwidth-bound by *active* params, but expert-routing adds latency.
  const moeTbtSurcharge = c._moe ? 1.08 : 1.0;
  c.tbt_ms = base.tbt_ms * scale.tbt * (0.72 * computeWork / precisionSpeed + 0.28 * kvRatio) * moeTbtSurcharge;
  c.ttft_ms = base.ttft_ms * scale.ttft * computeWork / precisionSpeed * moeTbtSurcharge;
  // MoE memory: total-param footprint dominates, with shared-expert savings.
  const moeMemMult = c._moe ? moeTotalMult * 0.85 : 1.0;
  c.mem_gb = base.mem_gb * scale.mem * (fp8 ? 0.55 : 1.0) * (0.72 + 0.28 * kvRatio) * moeMemMult;
  c.kv_gb = base.kv_gb * kvRatio;
  c.params_B = +activeParams.toFixed(2);
  c.active_params_B = +activeParams.toFixed(2);
  c.total_params_B = +totalParams.toFixed(2);
  c.param_cost_B = c.total_params_B;
  c.confidence = (c.risk <= 1.25) ? "high" : c.risk <= 2.5 ? "medium" : "low";
  c.qualityRiskPct = ((c.loss - base.loss) / base.loss) * 100;
  c.qualityPreserving = c.changes.every(ch => ch.startsWith("TP:"));
  c.moveClass = c.qualityPreserving ? "deployment"
    : c._moe ? "architecture"
    : (c.ffn_prec !== base.ffn_prec || c.kv_bits !== base.kv_bits ? "precision" : "architecture");
  c.compat_score = modifierScore(c, base);
  return c;
}

function riskForCandidate(c, base, tp) {
  let risk = 0;
  if (c.ffn_prec !== base.ffn_prec) risk += 0.5;
  if (c.kv_bits === 8) risk += 0.5;
  if (c.kv_bits === 4) risk += 1.5;
  if (c.n_kv_heads !== base.n_kv_heads) {
    const group = c.n_heads / c.n_kv_heads;
    risk += c.n_kv_heads > base.n_kv_heads ? 0.25 : group <= 8 ? 0.75 : 1.5;
  }
  risk += Math.abs(c.n_layers - base.n_layers) * 0.75;
  risk += Math.abs(c.ffn_dim - base.ffn_dim) / base.ffn_dim > 0.075 ? 1.0 : (c.ffn_dim !== base.ffn_dim ? 0.5 : 0);
  if (tp !== 8) risk += 0.25;
  const riskLabel = risk <= 1 ? "low" : risk <= 2.5 ? "medium" : "high";
  return { risk: +risk.toFixed(2), riskLabel };
}

function changesForCandidate(c, base, tp) {
  const changes = [];
  [["n_layers","layers"],["n_kv_heads","KV heads"],["ffn_dim","FFN dim"],["ffn_prec","FFN precision"],["kv_bits","KV bits"]].forEach(([key,label]) => {
    if (c[key] !== base[key]) changes.push(`${label}: ${base[key]} → ${c[key]}`);
  });
  if (tp !== 8) changes.push(`TP: 8 → ${tp}`);
  return changes;
}

function generateArchitectureModifierRecords(raw, base) {
  const tpOpts = modifierState.tpOptions.length ? modifierState.tpOptions : [8];
  const layers = modifierState.knobs.layers ? [30,31,32,33,34] : [32];
  const ffnDims = modifierState.knobs.ffnDim ? [12928,13632,14336,15040,15744] : [14336];
  const kvHeads = modifierState.knobs.kvHeads ? [1,2,4,8,16,32] : [8];
  const kvBits = modifierState.knobs.kv ? [16,8,4] : [16];
  const precisions = modifierState.knobs.ffnPrecision ? ["bf16","fp8"] : ["bf16"];
  const out = [];

  tpOpts.forEach(tp => layers.forEach(nl => ffnDims.forEach(ffn => kvHeads.forEach(nkv => {
    if (32 % nkv !== 0) return;
    kvBits.forEach(kvb => precisions.forEach(prec => {
      const cand = {
        name: raw.name, d_model: raw.d_model, n_layers: nl, n_heads: raw.n_heads,
        d_head: raw.d_head, n_kv_heads: nkv, ffn_dim: ffn, vocab_size: raw.vocab_size,
        ffn_prec: prec, kv_bits: kvb, isBaseline: false, tp,
      };
      const params = estimateParamsJS(cand) / 1e9;
      if (params < raw.params_B * 0.90 || params > raw.params_B * 1.10) return;
      const risk = riskForCandidate(cand, raw, tp);
      cand.risk = risk.risk; cand.riskLabel = risk.riskLabel;
      cand.changes = changesForCandidate(cand, raw, tp);
      evalModifierCandidate(cand, base, tp, state.hw, false);
      out.push(cand);
    }));
  }))));
  return out;
}

function generateModifierRecords() {
  const raw = MOD_BASELINES.mistral;
  const base = evalModifierCandidate(cloneCandidate(raw), raw, 8, state.hw, true);
  base.loss = raw.loss * hwModifierScale(state.hw).mem / hwModifierScale(state.hw).mem;
  base.train_tps = raw.train_tps * hwModifierScale(state.hw).train;
  base.tbt_ms = raw.tbt_ms * hwModifierScale(state.hw).tbt;
  base.ttft_ms = raw.ttft_ms * hwModifierScale(state.hw).ttft;
  base.mem_gb = raw.mem_gb * hwModifierScale(state.hw).mem;
  base.kv_gb = raw.kv_gb;
  // v1-stress: apply workload preset multipliers (so the bottleneck card
  // exercises the modifier's stress-relief logic at heavier regimes).
  const preset = MOD_WORKLOAD_PRESETS[modifierState.workloadPreset] || MOD_WORKLOAD_PRESETS.chat;
  base.mem_gb *= preset.mem;
  base.kv_gb  *= preset.kv;
  base.tbt_ms *= preset.tbt;
  base.workloadPreset = modifierState.workloadPreset;
  base.changes = ["baseline"];
  base.compat_score = 0;
  base.qualityPreserving = true;
  base.moveClass = "baseline";
  base.qualityRiskPct = 0;
  base.risk = 0;
  base.riskLabel = "baseline";

  const out = [base, ...generateHardwareFitMoves(base)];
  if (modifierState.allowQualitySpending) out.push(...generateArchitectureModifierRecords(raw, base));

  const seen = new Set();
  return out.filter(r => {
    const key = [r.changes.join(";"),r.n_layers,r.n_kv_heads,r.ffn_dim,r.ffn_prec,r.kv_bits,r.tp,r.moveClass].join("|");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function dominates(a, b, includeRisk = true) {
  const keys = includeRisk ? ["loss","tbt_ms","ttft_ms","mem_gb","kv_gb","risk"] : ["loss","tbt_ms","ttft_ms","mem_gb","kv_gb"];
  let better = false;
  for (const k of keys) {
    const av = k === "train_tps" ? -a[k] : k === "risk" ? a.risk : a[k];
    const bv = k === "train_tps" ? -b[k] : k === "risk" ? b.risk : b[k];
    if (av > bv + 1e-9) return false;
    if (av < bv - 1e-9) better = true;
  }
  if ((a.train_tps || 0) < (b.train_tps || 0) - 1e-9) return false;
  if ((a.train_tps || 0) > (b.train_tps || 0) + 1e-9) better = true;
  return better;
}

function paretoFrontier(records, includeRisk = true) {
  return records.filter(r => !records.some(o => o !== r && dominates(o, r, includeRisk)))
    .sort((a,b) => a.loss - b.loss || a.tbt_ms - b.tbt_ms || b.train_tps - a.train_tps);
}

function improvesResource(r, base) {
  return r.tbt_ms < base.tbt_ms || r.ttft_ms < base.ttft_ms || r.train_tps > base.train_tps || r.mem_gb < base.mem_gb || r.kv_gb < base.kv_gb;
}

function modifierScore(r, base) {
  return ((base.tbt_ms - r.tbt_ms) / base.tbt_ms) * 100
    + ((base.ttft_ms - r.ttft_ms) / base.ttft_ms) * 50
    + ((r.train_tps - base.train_tps) / base.train_tps) * 25
    + ((base.mem_gb - r.mem_gb) / base.mem_gb) * 50
    - Math.max(r.qualityRiskPct, 0) * 10 - r.risk * 5;
}

// ======================
// Update all
// ======================
function updateAll() {
  // Update control styles
  document.querySelectorAll(".hw-card").forEach(c => c.classList.toggle("active", c.dataset.hw === state.hw));
  document.querySelectorAll("#param-pills .pill").forEach((p, i) => p.classList.toggle("active", PARAM_TARGETS[i].value === state.params));
  document.querySelectorAll("#ffn-toggles .pill").forEach(p => p.classList.toggle("active", state.ffnTypes.has(p.dataset.ffn)));
  document.querySelectorAll("#layer-toggles .pill").forEach(p => p.classList.toggle("active", state.layerTypes.has(p.dataset.layer)));

  const entry = current();
  const meta = paramMeta(state.params);

  // Config summary
  const tp = entry ? entry.tp : "?";
  const dp = entry ? entry.dp : "?";
  const pp = entry ? entry.pp : "?";
  const labels = entryLabels(entry);
  const provenanceText = entry
    ? (isProjectedEntry(entry)
      ? `Projection: ${labels.length ? labels.join(" + ") : "derived row"}`
      : "Search: native optimizer lattice")
    : "Search: no matching row";
    // Round-2 fix: surface the per-replica node count so users see when
  // TP=16/32/64 requires multi-node serving (cross-IB tensor parallel).
  const nodesPerReplica = entry ? (entry.nodes_per_replica || Math.max(1, Math.ceil(tp / 8))) : 1;
  const trainingNodes = (entry && entry.training_nodes) || 8;
  const trainingGpus = (entry && entry.training_cluster_gpus) || 64;
  const nodeNote = nodesPerReplica === 1
    ? `1 node / replica (TP=${tp} within NVLink)`
    : `${nodesPerReplica} nodes / replica (TP=${tp} spans NVLink islands; cross-IB)`;
  document.getElementById("config-summary").innerHTML =
    `TP=${tp} · PP=${pp} · DP=${dp}<br>${nodeNote}<br>Training: ${trainingGpus} GPUs / ${trainingNodes} nodes<br>Context: ${ctxLabel(state.contextLength)}<br>Vocab: 32,000<br>` +
    provenanceText +
    `${meta.note ? `<br>${meta.note}` : ""}` +
    `${REFERENCE_MODELS[state.params] ? `<br>Ref: ${REFERENCE_MODELS[state.params].map(r => r.name).join(", ")}` : ""}`;

  renderOverview(entry);
  renderPareto(entry);
  renderModifier();
  renderDeltaInfluence();
  renderShadows(entry);
  renderJustification(entry);
  renderCompare();
}

// ======================
// Tab: Overview
// ======================
function renderOverview(entry) {
  const statsBar = document.getElementById("stats-bar");
  const optCard = document.getElementById("optimal-card");
  const perfCard = document.getElementById("perf-card");
  const penCard = document.getElementById("penalty-card");
  const archVis = document.getElementById("arch-visual");

  if (!entry || !entry.optimal) {
    statsBar.innerHTML = "";
    const reasons = (entry && entry.infeasible_reasons && entry.infeasible_reasons.length)
      ? `<br><span style="color:var(--text2);">Filtered: ${entry.infeasible_reasons.join("; ")}</span>`
      : "";
    optCard.innerHTML = `<div class="no-solution"><h2>No Feasible Solution</h2><p>No displayed architecture meets all constraints for ${fmtParamTarget(state.params)} on ${HW_INFO[state.hw].label} at ${ctxLabel(state.contextLength)} context.${reasons}<br>Try relaxing serving constraints, reducing context, or selecting a larger-memory target.</p></div>`;
    perfCard.innerHTML = ""; penCard.innerHTML = ""; archVis.innerHTML = "";
    return;
  }

  const o = entry.optimal;
  const gqa = o.n_heads === o.n_kv_heads ? "MHA" : o.n_kv_heads === 1 ? "MQA" : `GQA-${o.n_heads/o.n_kv_heads}`;
  const projected = isProjectedEntry(entry);
  const labels = entryLabels(entry);
  const statCandidateLabel = projected ? "Embedded Pts" : "Candidates";
  const statFeasibleLabel = projected ? "Valid Pts" : "Feasible";
  const searchValue = projected ? "projection" : `${entry.time_s}s`;

  // Stats bar
  statsBar.innerHTML = `
    <div class="stat"><div class="stat-val">${fmtN(entry.candidates)}</div><div class="stat-label">${statCandidateLabel}</div></div>
    <div class="stat"><div class="stat-val">${fmtN(entry.feasible)}</div><div class="stat-label">${statFeasibleLabel}</div></div>
    <div class="stat"><div class="stat-val">${entry.pareto_size}</div><div class="stat-label">Frontier Pts</div></div>
    <div class="stat"><div class="stat-val">${searchValue}</div><div class="stat-label">${projected ? "Provenance" : "Search"}</div></div>
    <div class="stat"><div class="stat-val">${o.loss}</div><div class="stat-label">Pred. Loss</div></div>
    <div class="stat"><div class="stat-val">${confBadge(o.confidence)}</div><div class="stat-label">Confidence</div></div>
    <div class="stat"><div class="stat-val" style="color:${{dense:"#60a5fa",moe:"#fb923c",hybrid:"#34d399",moe_hybrid:"#a78bfa"}[o.arch_family||"dense"]||"#60a5fa"}">${{dense:"Dense",moe:"MoE",hybrid:"Hybrid",moe_hybrid:"MoE + Hybrid"}[o.arch_family||"dense"]||o.arch_family}</div><div class="stat-label">Architecture</div></div>`;

  // Optimal architecture card
  optCard.innerHTML = `
    <h3>${projected ? "Selected Projected Architecture" : "AC-Optimal Architecture"}</h3>
    ${projected ? `<p style="font-size:12px;color:#f59e0b;line-height:1.5;margin-bottom:10px;">Projection row: ${labels.join(" + ") || "derived metrics"}. Hard constraints are rechecked before display; this is not a native full-lattice search.</p>` : ""}
    ${REFERENCE_MODELS[state.params] ? `<p style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:10px;">Compared against: ${REFERENCE_MODELS[state.params].map(r => r.name + " (" + r.total_params_B + "B)").join(", ")}</p>` : ""}
    <div class="metric"><span class="label">d_model</span><span class="val">${o.d_model}</span></div>
    <div class="metric"><span class="label">n_layers</span><span class="val">${o.n_layers}</span></div>
    <div class="metric"><span class="label">n_heads</span><span class="val">${o.n_heads}</span></div>
    <div class="metric"><span class="label">d_head</span><span class="val">${o.d_head}</span></div>
    <div class="metric"><span class="label">n_kv_heads</span><span class="val">${o.n_kv_heads} (${gqa})</span></div>
    <div class="metric"><span class="label">ffn_dim</span><span class="val">${fmtN(o.ffn_dim)}</span></div>
    <div class="metric"><span class="label">vocab_size</span><span class="val">32,000</span></div>
    <div class="metric"><span class="label">Active Params</span><span class="val">${fmtParamCount(o.active_params_B || o.params_B)}</span></div>
    <div class="metric"><span class="label">Total Params</span><span class="val">${fmtParamCount(paramCostB(o))}</span></div>
    <div class="metric"><span class="label">Weight Precision</span><span class="val">${o.weight_prec.toUpperCase()}</span></div>
    <div class="metric"><span class="label">FFN Precision</span><span class="val">${o.ffn_prec.toUpperCase()}</span></div>
    <div class="metric"><span class="label">KV Cache</span><span class="val">${o.kv_bits}-bit</span></div>
    <div class="metric"><span class="label">Architecture</span><span class="val" style="color:${{dense:"#60a5fa",moe:"#fb923c",hybrid:"#34d399",moe_hybrid:"#a78bfa"}[o.arch_family||"dense"]||"inherit"}">${(((o.arch_family==="hybrid"||o.arch_family==="moe_hybrid")
  ? (o.arch_family==="moe_hybrid"
    ? ("MoE + Hybrid ("+stateFamilyLabel(o.state_type)+")")
    : ("Hybrid (Attn + "+stateFamilyLabel(o.state_type)+")"))
  : ({dense:"Dense Transformer",moe:"MoE (Sparse Experts)"}[o.arch_family||"dense"]||o.arch_family))
 + (o.attention_type==="mla" ? " · MLA" : ""))}</span></div>`;
  // MoE info
  if (o.n_experts && o.n_experts > 1) {
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:${PENALTY_COLORS.moe_residual};margin-bottom:4px;">MoE Configuration</div>
    <div class="metric"><span class="label">Experts</span><span class="val">${o.n_experts} total, top-${o.top_k || 2}</span></div>
    <div class="metric"><span class="label">Expert Dim</span><span class="val">${o.expert_dim ? fmtN(o.expert_dim) : "n/a"}</span></div>
    <div class="metric"><span class="label">Expert Parallelism</span><span class="val">${o.ep || 1}</span></div>
    <div class="metric"><span class="label">Active Params</span><span class="val">${o.active_params_B ? fmtParamCount(o.active_params_B) : "n/a"}</span></div>
    <div class="metric"><span class="label">Total Params</span><span class="val">${fmtParamCount(paramCostB(o))}</span></div>
    <div class="metric"><span class="label">MoE Residual</span><span class="val">${(o.moe_residual_pct ?? 0).toFixed(2)}%</span></div>${(o.n_dense_ffn_layers ?? 0) > 0 ? `<div class="metric"><span class="label">First-K-Dense FFN</span><span class="val">${o.n_dense_ffn_layers} dense layers${o.dense_prefix_bonus_pct ? " (bonus " + o.dense_prefix_bonus_pct.toFixed(3) + "%)" : ""}</span></div>` : ""}`;
  }
  // v1-fix MTP: Multi-Token Prediction sub-card. Renders only when k > 0.
  if ((o.mtp_n_predict_depths ?? 0) > 0) {
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:#a78bfa;margin-bottom:4px;">MTP — Multi-Token Prediction (DeepSeek-V3 §2.2)</div>
    <div class="metric"><span class="label">Predict depths (k)</span><span class="val">${o.mtp_n_predict_depths}</span></div>
    <div class="metric"><span class="label">Layers per depth</span><span class="val">${o.mtp_depth_n_layers ?? 1}</span></div>
    <div class="metric"><span class="label">Train loss weight</span><span class="val">${(o.mtp_train_loss_weight ?? 0.3).toFixed(2)}</span></div>
    <div class="metric"><span class="label">Sample-efficiency bonus</span><span class="val" style="color:var(--green);font-weight:700;">${(o.mtp_residual_pct ?? 0).toFixed(3)}%</span></div>
    <div class="metric"><span class="label">Inference mode</span><span class="val">drop (training-only)</span></div>`;
  }

  // v1-fix NSA: Native Sparse Attention sub-card. Renders only when
  // attention_type === "nsa".
  if (o.attention_type === "nsa") {
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:#fb923c;margin-bottom:4px;">NSA — Native Sparse Attention (DeepSeek 2025)</div>
    <div class="metric"><span class="label">Compressed block</span><span class="val">${o.nsa_compress_block_size ?? "?"} (stride ${o.nsa_compress_block_stride ?? "?"})</span></div>
    <div class="metric"><span class="label">Selected blocks</span><span class="val">top-${o.nsa_select_top_k ?? "?"} of size ${o.nsa_select_block_size ?? "?"}</span></div>
    <div class="metric"><span class="label">Sliding window</span><span class="val">${o.nsa_window_size ?? "?"}</span></div>
    <div class="metric"><span class="label">Branches</span><span class="val">compressed + selected + window</span></div>`;
  }

  // v1-fix YOCO: cross-layer KV-sharing sub-card.
  if ((o.yoco_n_self_attn_layers ?? 0) > 0) {
    const k = o.yoco_n_self_attn_layers;
    const share = (o.yoco_share_fraction ?? 0) * 100;
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:#22d3ee;margin-bottom:4px;">YOCO — You Only Cache Once (Microsoft 2024)</div>
    <div class="metric"><span class="label">Self-attn layers (K)</span><span class="val">${k}</span></div>
    <div class="metric"><span class="label">Sharing layers</span><span class="val">${(o.n_layers ?? 0) - k} (${share.toFixed(0)}%)</span></div>
    <div class="metric"><span class="label">KV cache reduction</span><span class="val" style="color:var(--green);font-weight:700;">${(o.n_layers / Math.max(1,k)).toFixed(1)}×</span></div>
    <div class="metric"><span class="label">Pattern</span><span class="val">cross-attend to layer ${k} KV</span></div>`;
  }

  // v1-fix 2:4 sparsity sub-card.
  if (o.sparsity_2_4 && Object.keys(o.sparsity_2_4).length > 0) {
    const components = Object.keys(o.sparsity_2_4).join(", ");
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:#a78bfa;margin-bottom:4px;">2:4 Structured Sparsity (NVIDIA tensor cores)</div>
    <div class="metric"><span class="label">Sparse components</span><span class="val">${components}</span></div>
    <div class="metric"><span class="label">Matmul speedup</span><span class="val" style="color:var(--green);font-weight:700;">~2× on sparse components</span></div>
    <div class="metric"><span class="label">Quality cost</span><span class="val">~1-3% loss-proxy</span></div>`;
  }

  // v1-fix CP: Context Parallelism sub-card.
  if ((o.cp_degree ?? 1) > 1) {
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:#34d399;margin-bottom:4px;">Context Parallelism (Ring / Ulysses)</div>
    <div class="metric"><span class="label">CP degree</span><span class="val">${o.cp_degree}</span></div>
    <div class="metric"><span class="label">CP method</span><span class="val">${o.cp_method === "ulysses" ? "DeepSpeed-Ulysses (head scatter)" : "Ring Attention"}</span></div>
    <div class="metric"><span class="label">Training speedup</span><span class="val" style="color:var(--green);">~${o.cp_degree}× at long context</span></div>`;
  }

  // v1-fix RoPE scaling sub-card.
  if (o.rope_scaling_method && o.rope_scaling_method !== "none") {
    const labels = {pi: "Position Interpolation", ntk: "NTK-aware", yarn: "YaRN", longrope: "LongRoPE"};
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:#fbbf24;margin-bottom:4px;">RoPE Scaling Extension</div>
    <div class="metric"><span class="label">Method</span><span class="val" style="color:var(--yellow);font-weight:700;">${labels[o.rope_scaling_method] || o.rope_scaling_method}</span></div>
    <div class="metric"><span class="label">Extension factor</span><span class="val">${(o.rope_scaling_factor || 1).toFixed(1)}×</span></div>
    <div class="metric"><span class="label">Original max position</span><span class="val">${o.rope_original_max_position || 8192}</span></div>`;
  }

  // v1-fix MLA: MLA Configuration sub-card. Renders only when the optimum
  // is MLA. Shows the latent dimensions, per-token KV bytes (vs MHA), and
  // the small compression-quality residual the model assigned.
  if (o.attention_type === "mla") {
    const mlaQRes = ((o.quality_terms && o.quality_terms.architecture_residual
                       && o.quality_terms.architecture_residual.features
                       && o.quality_terms.architecture_residual.features.subterms
                       && o.quality_terms.architecture_residual.features.subterms.attention_mla)
                     ?? 0) * 100;
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:#22d3ee;margin-bottom:4px;">MLA Configuration (DeepSeek-V2/V3 latent compression)</div>
    <div class="metric"><span class="label">KV Latent (c_kv)</span><span class="val">${o.mla_kv_latent_dim ?? "?"}</span></div>
    <div class="metric"><span class="label">Q Latent (c_q)</span><span class="val">${o.mla_q_latent_dim ?? "?"}</span></div>
    <div class="metric"><span class="label">RoPE head dim</span><span class="val">${o.mla_rope_head_dim ?? "?"}</span></div>
    <div class="metric"><span class="label">NoPE head dim</span><span class="val">${o.mla_nope_head_dim ?? "?"}</span></div>
    <div class="metric"><span class="label">KV cache / token / layer</span><span class="val">${o.mla_kv_bytes_per_token_per_layer ?? "?"} B <span style="color:var(--green);font-weight:700;">(${o.mla_kv_reduction_vs_mha ? o.mla_kv_reduction_vs_mha.toFixed(0)+"x" : "?"} reduction)</span></span></div>
    <div class="metric"><span class="label">MLA quality cost</span><span class="val">${mlaQRes.toFixed(3)}%</span></div>`;
  }

  // Hybrid/state info
  if (o.n_state_layers && o.n_state_layers > 0) {
    optCard.innerHTML += `
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div style="font-size:12px;font-weight:700;color:${PENALTY_COLORS.state_residual};margin-bottom:4px;">State/Hybrid Configuration</div>
    <div class="metric"><span class="label">Hybrid Type</span><span class="val" style="color:var(--cyan);font-weight:700;">${stateFamilyLabel(o.state_type)}</span></div>
    <div class="metric"><span class="label">Hybrid Ratio</span><span class="val">${(() => {
      const a = o.n_attention_layers || 0;
      const s = o.n_state_layers || 0;
      if (!a && !s) return "n/a";
      // Show as 1:N attn:state when there's >1 state per attention, otherwise N:1
      let ratio;
      if (a > 0 && s > 0) {
        if (s >= a) {
          const k = (s / a).toFixed(s % a === 0 ? 0 : 1);
          ratio = "1:" + k + " attn:state";
        } else {
          const k = (a / s).toFixed(a % s === 0 ? 0 : 1);
          ratio = k + ":1 attn:state";
        }
      } else ratio = a > 0 ? "all attention" : "all state";
      const pct = (s / (a + s) * 100).toFixed(0);
      return ratio + " · " + pct + "% state";
    })()}</span></div>
    <div class="metric"><span class="label">Attn / State / Total</span><span class="val">${o.n_attention_layers ?? "?"} attn + ${o.n_state_layers ?? "?"} state = ${o.n_layers ?? "?"} layers</span></div>
    ${(() => {
      // v1-fix (Overview audit): derive hybrid schema fallbacks for legacy
      // data that lacks d_state / placement_strategy / hybrid_family /
      // p_attn / crossover_seq_len / state_residual_pct. Mirrors the
      // synthesize_archmodes.py heuristics so old + new entries render
      // consistently.
      const HYBRID_FAMILY_OF = {
        mamba2: "mamba sequential", mamba: "mamba sequential",
        gated_delta: "gated delta / kda linear", kda: "gated delta / kda linear",
        gla: "generic linear attention", linear_attention: "generic linear attention",
        sliding_window: "recurrent local attention", swa: "recurrent local attention",
      };
      const stateType = (o.state_type || "").toLowerCase();
      const a = o.n_attention_layers || 0;
      const s = o.n_state_layers || 0;
      const total = a + s || o.n_layers || 0;
      const p_attn = o.p_attn != null ? o.p_attn : (total > 0 ? a / total : null);
      const d_state = o.d_state || (o.d_head ? o.d_head * 2 : (o.d_model ? Math.round(o.d_model / 32) : null));
      const placement = o.placement_strategy || (o.state_config && o.state_config.pattern) || "interleaved";
      const hybridFamily = o.hybrid_family || HYBRID_FAMILY_OF[stateType] || (stateType.replace(/_/g, " ") || "n/a");
      const crossover = o.crossover_seq_len || (d_state ? d_state * 32 : null);
      const stateRes = (o.state_residual_pct != null && o.state_residual_pct !== 0)
        ? o.state_residual_pct
        : (o.arch_family === "hybrid" || o.arch_family === "moe_hybrid")
          ? (function () {
              const M = { mamba2: 0.6, gated_delta: 1.0, kda: 1.2, gla: 1.8, sliding_window: 0.8 };
              return M[stateType] != null ? M[stateType] : 1.0;
            })()
          : 0;
      return `
    <div class="metric"><span class="label">d_state</span><span class="val">${d_state ?? "n/a"}</span></div>
    <div class="metric"><span class="label">Placement</span><span class="val">${(placement || "n/a").replace(/_/g," ")}</span></div>
    <div class="metric"><span class="label">Crossover L*</span><span class="val">${crossover ? fmtN(crossover) : "n/a"}</span></div>
    <div class="metric"><span class="label">Quality Family</span><span class="val">${(hybridFamily || "n/a").replace(/_/g," ")}</span></div>
    <div class="metric"><span class="label">p_attn</span><span class="val">${p_attn != null ? p_attn.toFixed(3) + (o.in_band != null ? (o.in_band ? " (in band)" : " (out of band)") : "") : "n/a"}</span></div>
    <div class="metric"><span class="label">State Residual</span><span class="val">${stateRes.toFixed(2)}%</span></div>`;
    })()}`;
  }

  // Family Champions sub-card — show best loss-proxy candidate from each
  // arch_family (dense / moe / hybrid / moe_hybrid) so the user can see
  // *why* the chosen family won. Walks the full grid for the current
  // (hw, params, tokens, serving) ignoring the user's filter, picks the
  // optimal from each family, and renders a side-by-side table.
  (() => {
    // v1-fix UI (a): filter by the active serving context. Fall back to any
    // matching context when the requested ctx has no entries (legacy 8k-only
    // grid). Champions are still grouped by arch_family.
    const wantCtx = state.contextLength || 8192;
    let allEntries = GRID.filter(g =>
      g.hw === state.hw && g.params_B === state.params &&
      g.tokens_T === state.tokens && g.serving === state.serving &&
      _ctxMatches(g, wantCtx));
    if (!allEntries.length) {
      allEntries = GRID.filter(g =>
        g.hw === state.hw && g.params_B === state.params &&
        g.tokens_T === state.tokens && g.serving === state.serving);
    }
    // Champions are picked from the same feasible displayed records used by
    // mergedEntry(), so this card cannot disagree with Overview/Pareto.
    const familyPool = {};
    allEntries.forEach(e => {
      displayedRecordsForEntry(e).forEach(p => {
        const fam = p.arch_family || e.arch_mode || "dense";
        familyPool[fam] = familyPool[fam] || [];
        familyPool[fam].push(p);
      });
    });
    const champByFamily = {};
    Object.keys(familyPool).forEach(fam => {
      const pool = familyPool[fam];
      if (!pool.length) return;
      const bests = frontierBests(pool);
      let famBest = pool[0], famBestScore = Infinity;
      pool.forEach(p => {
        const s = scoreCandidate(p, bests, state.prefWeights);
        if (s < famBestScore) { famBest = p; famBestScore = s; }
      });
      champByFamily[fam] = famBest;
    });
    const families = Object.keys(champByFamily);
    if (families.length <= 1) return; // nothing to compare
    // v1-fix UI (a): score every champion against the cross-family bests
    // and pick the global winner by composite. Loss-only preset reproduces
    // the legacy "lowest loss wins" behavior exactly.
    const champArr = families.map(f => champByFamily[f]);
    const crossBests = frontierBests(champArr);
    const champScores = {};
    families.forEach(f => { champScores[f] = scoreCandidate(champByFamily[f], crossBests, state.prefWeights); });
    const winnerFam_byScore = families.reduce((a, b) => champScores[a] <= champScores[b] ? a : b);
    const winnerLoss = champByFamily[winnerFam_byScore].loss;
    const FAM_COLORS = {dense:"#60a5fa", moe:"#fb923c", hybrid:"#34d399", moe_hybrid:"#a78bfa"};
    const FAM_LABELS = {dense:"Dense", moe:"MoE", hybrid:"Hybrid", moe_hybrid:"MoE + Hybrid"};
    const ORDER = ["dense", "moe", "hybrid", "moe_hybrid"];
    const sorted = ORDER.filter(f => f in champByFamily);
    const rows = sorted.map(f => {
      const c = champByFamily[f];
      // v1-fix UI (a): winner is the family with minimum composite score.
      // Loss-only preset → minimum loss; other presets pick by their weights.
      const isWinner = (f === winnerFam_byScore);
      const delta = c.loss - winnerLoss;
      const deltaPct = winnerLoss > 0 ? (delta / winnerLoss * 100) : 0;
      const famName = f === "hybrid" || f === "moe_hybrid"
        ? FAM_LABELS[f] + " (" + stateFamilyLabel(c.state_type) + ")"
        : FAM_LABELS[f];
      // Compact spec column
      const dims = [];
      dims.push("d=" + c.d_model);
      dims.push("L=" + c.n_layers);
      if (c.n_experts) dims.push(c.n_experts + "E top-" + (c.top_k || 2));
      if (c.n_state_layers) {
        const a = c.n_attention_layers || 0, s = c.n_state_layers;
        const r = s >= a && a > 0 ? "1:" + (s/a).toFixed(s%a===0?0:1) : (a/Math.max(1,s)).toFixed(0) + ":1";
        dims.push(r + " attn:state");
      }
      const winnerMark = isWinner ? ' <span style="color:var(--green);font-weight:700;">★</span>' : '';
      // v1-fix: deltaPct can be negative when the row's raw loss is lower
      // than the composite-score winner (Balanced/Latency don't always pick
      // the lowest-loss row). Don't hardcode "+" - let sign render naturally.
      const deltaColor = deltaPct >= 0 ? "var(--orange)" : "#34d399";
      const deltaSign = deltaPct >= 0 ? "+" : "";
      const deltaStr = isWinner ? '<span style="color:var(--green);">winner</span>'
        : '<span style="color:' + deltaColor + ';">' + deltaSign + deltaPct.toFixed(2) + '%</span>';
      return `<tr style="${isWinner ? 'background:rgba(52,211,153,0.06);' : ''}">
        <td style="padding:5px 8px;"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${FAM_COLORS[f]};margin-right:6px;"></span><span style="color:${FAM_COLORS[f]};font-weight:600;">${famName}</span>${winnerMark}</td>
        <td style="padding:5px 8px;text-align:right;font-variant-numeric:tabular-nums;font-weight:600;">${c.loss.toFixed(4)}</td>
        <td style="padding:5px 8px;text-align:right;font-variant-numeric:tabular-nums;font-size:11px;">${deltaStr}</td>
        <td style="padding:5px 8px;font-size:11px;color:var(--text2);">${dims.join(" · ")}</td>
      </tr>`;
    }).join("");
    // v1-fix UI (a): winner already chosen by composite above
    const winnerFam = winnerFam_byScore;
    const winnerLabel = FAM_LABELS[winnerFam] || winnerFam;
    const presetLabel = (PREF_PRESETS[state.prefPreset] || PREF_PRESETS.balanced).label;
    const ctxLabel = (CTX_OPTIONS.find(c => c.value === (state.contextLength || 8192)) || { label: "8k" }).label;
    const projectedComparison = allEntries.some(isProjectedEntry);
    optCard.innerHTML += `
      <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
      <div style="font-size:12px;font-weight:700;color:var(--accent2);margin-bottom:4px;">Family Champions — winner under "${presetLabel}" at ${ctxLabel} context <span class="ctx-badge">${ctxLabel}</span></div>
      <div style="font-size:11px;color:var(--text2);margin-bottom:6px;line-height:1.4;">
        Compared feasible displayed points for all enabled families at this (hw, params, tokens, serving, context). ${projectedComparison ? "Some family points are projections, not native full-lattice searches. " : ""}<b>${winnerLabel}</b> won under the <b>${presetLabel}</b> tradeoff.
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:12px;">
        <thead>
          <tr style="color:var(--text2);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;">
            <th style="text-align:left;padding:3px 8px;">Family</th>
            <th style="text-align:right;padding:3px 8px;">Loss</th>
            <th style="text-align:right;padding:3px 8px;">Δ vs winner</th>
            <th style="text-align:left;padding:3px 8px;">Selected spec</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>`;
  })();

  // Reference model comparison
  const refHtml = renderReferenceComparison(state.params, o);
  if (refHtml) {
    optCard.innerHTML += refHtml;
  }

  // Performance card — null-safe: fallback to "n/a" if fields missing
  const _tbt = o.tbt_ms ?? null;
  const _ttft = o.ttft_ms ?? null;
  const _tps = o.train_tps ?? null;
  const _mem = o.mem_gb ?? null;
  const tbtClass = _tbt == null ? "" : _tbt <= 20 ? "good" : _tbt <= 50 ? "warn" : "bad";
  const archFeatures = qualityFeatures(o, "architecture_residual");
  const subterms = archFeatures.subterms || {};
  const kvBytes = archFeatures.kv_bytes_per_token_per_layer_bf16;
  const prefill = o.prefill_model || null;
  const prefillAssumptions = prefill ? `
    <div class="metric"><span class="label">Prefill Model</span><span class="val">${prefill.version || "v3"}</span></div>
    <div class="metric"><span class="label">CP / Chunks</span><span class="val">CP ${prefill.context_parallel_degree ?? 1} · ${prefill.chunks ?? 1} × ${fmtN(prefill.chunk_size || (o.context_length || 8192))}</span></div>
    <div class="metric"><span class="label">Prefix Cache</span><span class="val">${(((prefill.prefix_cache_hit_rate || 0) * 100).toFixed(0))}% hit · cold default</span></div>
    <div class="metric"><span class="label">Prefill Split</span><span class="val">${prefill.attention_prefill_ms != null ? prefill.attention_prefill_ms + "ms attn + " + prefill.linear_prefill_ms + "ms linear" : "n/a"}</span></div>` : "";
  perfCard.innerHTML = `
    <h3>Predicted Performance</h3>
    <div class="metric"><span class="label">Loss Proxy</span><span class="val">${o.loss}</span></div>
    <div class="metric"><span class="label">Scaling Spine</span><span class="val" style="color:var(--text2)">${spineLoss(o)}</span></div>
    <div class="metric"><span class="label">Spine Active Proxy</span><span class="val">${o.spine_active_params_B ? `${o.spine_active_params_B}B` : "n/a"}</span></div>
    <div class="metric"><span class="label">Total Residual</span><span class="val ${penClass(residualPct(o))}">${residualPct(o).toFixed(2)}%</span></div>
    <div class="metric"><span class="label">Architecture Residual</span><span class="val">${(o.architecture_residual_pct ?? termValuePct(qualityTerm(o, "architecture_residual"))).toFixed(2)}%</span></div>
    <div class="metric"><span class="label">Precision Residual</span><span class="val">${(o.precision_residual_pct ?? termValuePct(qualityTerm(o, "precision_residual"))).toFixed(2)}%</span></div>
    <div class="metric"><span class="label">Uncertainty</span><span class="val">${(o.uncertainty_total_pct ?? 0).toFixed(2)}%</span></div>
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div class="metric"><span class="label">Training TPS</span><span class="val">${_tps != null ? fmtN(_tps) : "n/a"}</span></div>
    <div class="metric"><span class="label">Serving TBT</span><span class="val ${tbtClass}">${_tbt != null ? _tbt + " ms" : "n/a"}</span></div>
    <div class="metric"><span class="label">Serving TTFT</span><span class="val">${_ttft != null ? _ttft + " ms" : "n/a"}</span></div>
    ${prefillAssumptions}
    <div class="metric"><span class="label">Memory/GPU</span><span class="val">${_mem != null ? _mem + " GB" : "n/a"}</span></div>`;

  // Quality term breakdown
  const qDefault = archFeatures.n_query_heads_default;
  const qHeads = archFeatures.n_query_heads ?? o.n_heads;
  const gqaGroup = archFeatures.gqa_group_size ?? (o.n_heads / o.n_kv_heads);
  let penHTML = `
    <h3>Compiler Quality Terms</h3>
    <p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:10px;">
      L_quality = scaling-law spine over active non-embedding params + coupled architecture, precision, MoE/state, risk, and data-quality residuals.
    </p>
    <div class="quality-term-grid">
      <div class="quality-term-card"><h4>Query Heads</h4><strong>${qHeads}</strong><span>Weak width-derived prior; default ${qDefault ?? "n/a"}.</span></div>
      <div class="quality-term-card"><h4>Head Dimension</h4><strong>${archFeatures.d_head ?? o.d_head}</strong><span>Weak U-shaped prior around 128.</span></div>
      <div class="quality-term-card"><h4>KV Heads</h4><strong>${archFeatures.n_kv_heads ?? o.n_kv_heads}</strong><span>Hardware memory/latency lever; GQA group ${Number.isFinite(gqaGroup) ? gqaGroup.toFixed(2) : "n/a"}.</span></div>
      <div class="quality-term-card"><h4>KV Bytes / Token / Layer</h4><strong>${formatBytes(kvBytes)}</strong><span>BF16 estimate: 2 × n_kv_heads × d_head × bytes.</span></div>
    </div>
    ${qualityTermBars(o)}`;
  if (Object.keys(subterms).length) {
    const maxSub = Math.max(...Object.values(subterms).map(v => Math.abs(v) * 100), 0.001);
    penHTML += `<h3 style="margin-top:14px;">Architecture Subterms</h3>`;
    Object.entries(subterms).forEach(([name, val]) => {
      const pct = val * 100;
      penHTML += `<div class="pen-bar">
        <div class="pen-bar-label"><span>${name.replaceAll("_", " ")}</span><span>${pct.toFixed(2)}%</span></div>
        <div class="pen-bar-track"><div class="pen-bar-fill" style="width:${Math.max(2, Math.abs(pct) / maxSub * 100)}%;background:${PENALTY_COLORS.architecture_residual}"></div></div>
      </div>`;
    });
  }
  penCard.innerHTML = penHTML;

  // Architecture visual fallback; immediately replaced by the dynamic diagram below.
  archVis.innerHTML = `
    <h3>Architecture Diagram</h3>
    <pre style="font-size:12px;color:var(--text2);line-height:1.6;font-family:monospace;">
  ┌─────────────────────────────────────┐
  │  Embedding  (${fmtN(o.d_model)} × 32,000)         │
  ├─────────────────────────────────────┤
  │                                     │
  │  ×${o.n_layers} Transformer Blocks              │
  │  ┌───────────────────────────────┐  │
  │  │ RMSNorm                       │  │
  │  │ ${gqa} Attention                │
  │  │   ${o.n_heads} heads × ${o.d_head} dim          │
  │  │   ${o.n_kv_heads} KV heads (${o.kv_bits}-bit cache)   │
  │  │   RoPE (base=500k)            │  │
  │  │ + Residual                    │  │
  │  ├───────────────────────────────┤  │
  │  │ RMSNorm                       │  │
  │  │ SwiGLU FFN (${fmtN(o.ffn_dim)})           │
  │  │   ${(o.ffn_prec||"bf16").toUpperCase()} precision              │
  │  │ + Residual                    │  │
  │  └───────────────────────────────┘  │
  │                                     │
  ├─────────────────────────────────────┤
  │  RMSNorm → LM Head (32,000)        │
  └─────────────────────────────────────┘
    </pre>`;
  archVis.innerHTML = renderArchitectureDiagram(o, kvBytes);
}

function renderArchitectureDiagram(o, kvBytes) {
  const gqaRatio = o.n_kv_heads ? (o.n_heads / o.n_kv_heads) : 1;
  const ffnRatio = o.d_model ? (o.ffn_dim / o.d_model) : 0;
  const qDim = o.n_heads * o.d_head;
  const kvDim = o.n_kv_heads * o.d_head;
  // v1-fix MLA/NSA: relabel the attention chip per family.
  const isMLA = o.attention_type === "mla";
  const isNSA = o.attention_type === "nsa";
  const attnType = isMLA
    ? `MLA (c_kv=${o.mla_kv_latent_dim ?? "?"}, d_rope=${o.mla_rope_head_dim ?? "?"})`
    : isNSA
      ? `NSA (top-${o.nsa_select_top_k ?? "?"} blocks, win=${o.nsa_window_size ?? "?"})`
      : (o.n_heads === o.n_kv_heads ? "MHA" : o.n_kv_heads === 1 ? "MQA" : `GQA-${gqaRatio.toFixed(gqaRatio % 1 ? 1 : 0)}`);
  const optDims = (DATA.grid || []).map(e => e.optimal).filter(Boolean);
  const rangeOf = (key) => {
    const vals = optDims.map(x => Number(x[key])).filter(Number.isFinite);
    if (!vals.length) return { min: Number(o[key]) || 0, max: Number(o[key]) || 1 };
    return { min: Math.min(...vals), max: Math.max(...vals) };
  };
  const scale01 = (v, r) => r.max > r.min ? (v - r.min) / (r.max - r.min) : 0.5;
  const blockWPct = 56 + 34 * scale01(o.d_model, rangeOf("d_model"));
  const attnWPct = Math.max(45, Math.min(96, blockWPct));
  const ffnWPct = Math.max(48, Math.min(100, 54 + 40 * scale01(o.ffn_dim, rangeOf("ffn_dim"))));
  const stackH = Math.max(300, Math.min(520, 250 + 4.2 * o.n_layers));

  const hasMoE = o.n_experts && o.n_experts > 1;
  const hasState = o.n_state_layers && o.n_state_layers > 0;
  const nAttnLayers = o.n_attention_layers || o.n_layers;
  const nStateLayers = o.n_state_layers || 0;

  // Layer tiles: color-code attention vs state, with MoE stripe indicator
  // For hybrid: interleave attention layers periodically (like real Jamba/Nemotron)
  // e.g., 1:7 ratio → attention at layers 0, 8, 16, ... (every 8th)
  const layerTiles = Array.from({ length: o.n_layers }, (_, i) => {
    const major = i === 0 || i === o.n_layers - 1 || (i + 1) % 8 === 0;
    let isState = false;
    if (hasState && nAttnLayers > 0 && nStateLayers > 0) {
      // Interleaved pattern: place attention layers evenly
      const period = Math.max(1, Math.round(o.n_layers / nAttnLayers));
      isState = (i % period) !== 0; // attention at every period-th layer
    }
    const isMoE = hasMoE; // MoE applies to all FFN layers
    const tileClass = isState ? "state" : (isMoE ? "moe-tile" : "attn-only");
    const ffnLabel = isMoE ? "MoE FFN" : "FFN";
    const tileTitle = isState
      ? `Block ${i + 1}: ${stateFamilyLabel(o.state_type)} (d_state=${o.d_state || "?"}) + ${ffnLabel}`
      : `Block ${i + 1}: Attention + ${ffnLabel}`;
    return `<span class="arch-layer-tile ${tileClass} ${major ? "major" : ""} ${i === 0 ? "first" : ""} ${i === o.n_layers - 1 ? "last" : ""}" title="${tileTitle}"></span>`;
  }).join("");

  const headDots = Array.from({ length: o.n_heads }, (_, i) => `<span class="arch-head-dot" title="Q head ${i + 1} / ${o.n_heads}"></span>`).join("");
  const kvDots = Array.from({ length: o.n_kv_heads }, (_, i) => `<span class="arch-head-dot kv" title="KV head ${i + 1} / ${o.n_kv_heads}"></span>`).join("");
  const kvPct = Math.max(4, Math.min(100, (o.n_kv_heads / o.n_heads) * 100));
  const ffnPct = Math.max(12, Math.min(100, (ffnRatio / 4.5) * 100));
  const qPct = Math.max(10, Math.min(100, (qDim / Math.max(o.d_model, qDim)) * 100));
  const uncertainty = Number.isFinite(o.uncertainty_total_pct) ? o.uncertainty_total_pct.toFixed(2) : "n/a";
  const archFamily = (o.arch_family || "dense").replace(/_/g, " ");

  // Layer legend entries
  const legendItems = [];
  if (!hasState && !hasMoE) {
    legendItems.push(`<span><i class="arch-legend-mark attn"></i>Attention + Dense FFN</span>`);
  } else {
    if (hasState) {
      legendItems.push(`<span><i class="arch-legend-mark attn"></i>Attention layer (${nAttnLayers})</span>`);
      legendItems.push(`<span><i class="arch-legend-mark state"></i>${stateFamilyLabel(o.state_type)} layer (${nStateLayers})</span>`);
    }
    if (hasMoE) legendItems.push(`<span><i class="arch-legend-mark moe"></i>Sparse MoE FFN (${o.n_experts}E, top-${o.top_k || 2})</span>`);
    if (!hasMoE) legendItems.push(`<span><i class="arch-legend-mark ffn"></i>Dense FFN</span>`);
  }

  // Block formula
  let blockFormula;
  const ffnName = hasMoE ? `Sparse MoE(${o.n_experts}E top-${o.top_k || 2})` : "SwiGLU FFN";
  if (hasState) {
    const period = nAttnLayers > 0 ? Math.round(o.n_layers / nAttnLayers) : o.n_layers;
    const ratioStr = `1:${period - 1}`;
    blockFormula = `${nAttnLayers} attn + ${nStateLayers} state layers (${ratioStr} interleave) · each layer: [Norm → Attn or ${stateFamilyLabel(o.state_type)} → Add → Norm → ${ffnName} → Add]`;
  } else if (hasMoE) {
    blockFormula = `${o.n_layers} × [Norm → ${attnType} → Add → Norm → Sparse MoE (${o.top_k || 2}/${o.n_experts} experts) → Add]`;
  } else {
    blockFormula = `${o.n_layers} × [Norm → ${attnType} → Add → Norm → SwiGLU → Add]`;
  }

  // Repeat label
  const repeatLabel = hasState
    ? `${nAttnLayers} attn + ${nStateLayers} state layers`
    : `× ${o.n_layers} layers`;

  // Layer map description
  const layerMapDesc = hasState
    ? `${nAttnLayers} attention (blue) + ${nStateLayers} state (cyan)`
    : (hasMoE ? `each tile = one layer (all use MoE FFN)` : `each tile = one Transformer block`);

  // =====================================================
  // Build the flow blocks based on architecture type
  // =====================================================

  // Dense FFN sub-block
  const denseFFNBlock = `
              <div class="arch-real-block">
                <div class="arch-real-bypass"></div>
                <div class="arch-real-box norm"><div><span class="title">RMSNorm</span><span class="sub">${fmtN(o.d_model)}</span></div></div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-box ffn" style="width:${ffnWPct}%;">
                  <div><span class="title">SwiGLU FFN</span><span class="sub">${fmtN(o.d_model)} → ${fmtN(o.ffn_dim)} → ${fmtN(o.d_model)} · ${o.ffn_prec.toUpperCase()}</span></div>
                </div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-add">+</div>
              </div>`;

  // Sparse MoE FFN sub-block (replaces dense FFN)
  const expertDim = o.expert_dim || o.ffn_dim;
  const moeFFNBlock = `
              <div class="arch-real-block">
                <div class="arch-real-bypass"></div>
                <div class="arch-real-box norm"><div><span class="title">RMSNorm</span><span class="sub">${fmtN(o.d_model)}</span></div></div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-box moe" style="width:${Math.min(100, ffnWPct + 8)}%;">
                  <div>
                    <span class="title">Sparse MoE FFN</span>
                    <span class="sub">Router → top-${o.top_k || 2} of ${o.n_experts} experts → Combine</span>
                    <span class="sub">Each expert: ${fmtN(o.d_model)} → ${fmtN(expertDim)} → ${fmtN(o.d_model)} (SwiGLU)</span>
                  </div>
                </div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-add">+</div>
              </div>`;

  // Attention sub-block
  const attnBlock = `
              <div class="arch-real-block">
                <div class="arch-real-bypass"></div>
                <div class="arch-real-box norm"><div><span class="title">RMSNorm</span><span class="sub">${fmtN(o.d_model)}</span></div></div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-box attn" style="width:${attnWPct}%;">
                  <div><span class="title">${attnType} Self-Attention</span><span class="sub">${
                    isMLA ? `token mixer: softmax(QK<sup>T</sup>/√d)·V on (c_kv↑K, c_kv↑V) · cache = ONE latent + d_rope key` :
                    isNSA ? `token mixer: 3 branches — compressed (block summaries) + selected (top-K blocks) + sliding window` :
                            `token mixer: softmax(QK<sup>T</sup>/√d)·V · KV cache O(L)`
                  }</span><span class="sub">${
                    isMLA ? `Q-down ${fmtN(o.d_model)}→${fmtN(o.mla_q_latent_dim ?? 1536)}→${o.n_heads}×(${o.mla_rope_head_dim ?? 64}+${o.mla_nope_head_dim ?? 128}) · KV-cache (${o.mla_kv_latent_dim ?? 512}+${o.mla_rope_head_dim ?? 64})×${o.kv_bits}-bit = ${o.mla_kv_bytes_per_token_per_layer ?? "?"} B/tok/layer · ${o.mla_kv_reduction_vs_mha ? o.mla_kv_reduction_vs_mha.toFixed(0)+"x vs equiv. MHA" : "MLA"}` :
                    isNSA ? `compressed: ceil(L/${o.nsa_compress_block_stride ?? 16}) blocks · selected: top-${o.nsa_select_top_k ?? 16} × ${o.nsa_select_block_size ?? 64} tokens · window: ${o.nsa_window_size ?? 512} tokens · sub-linear KV` :
                            `Q ${o.n_heads}×${o.d_head}=${fmtN(qDim)} · KV ${o.n_kv_heads}×${o.d_head}=${fmtN(kvDim)} · cache ${o.kv_bits}-bit`
                  }</span></div>
                </div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-add">+</div>
              </div>`;

  // State sub-block (Mamba-2 / GLA / KDA / Gated DeltaNet / SWA / ...)
  const mambaBlock = `
              <div class="arch-real-block">
                <div class="arch-real-bypass"></div>
                <div class="arch-real-box norm"><div><span class="title">RMSNorm</span><span class="sub">${fmtN(o.d_model)}</span></div></div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-box state" style="width:${attnWPct}%;">
                  <div><span class="title">${stateFamilyLabel(o.state_type)} State Mixer</span><span class="sub">token mixer: H<sub>t</sub> = a<sub>t</sub>·H<sub>t−1</sub> + k<sub>t</sub>v<sub>t</sub><sup>T</sup>; y<sub>t</sub> = q<sub>t</sub>H<sub>t</sub> · NO KV cache</span><span class="sub">d_state=${o.d_state || "?"} · d_model=${fmtN(o.d_model)} · O(1) decode</span></div>
                </div>
                <div class="arch-real-connector"></div>
                <div class="arch-real-add">+</div>
              </div>`;

  // Compose flow blocks depending on architecture
  let flowBlocks;
  const ffnBlock = hasMoE ? moeFFNBlock : denseFFNBlock;
  if (hasState && hasMoE) {
    // MoE + Hybrid: show attention layer block, then state layer block (both with MoE FFN)
    const period = nAttnLayers > 0 ? Math.round(o.n_layers / nAttnLayers) : o.n_layers;
    flowBlocks = `
              <div style="font-size:11px;color:var(--blue);text-align:center;margin:6px 0;padding:6px;border:1px solid rgba(96,165,250,.55);border-radius:6px;background:rgba(96,165,250,.10);">
                <strong>Self-Attention sub-layer</strong> · 1 of every ${period} blocks · <span style="color:var(--text2)">mixes tokens via softmax attention, carries KV cache</span>
              </div>
              ${attnBlock}
              ${moeFFNBlock}

              <div class="arch-real-connector"></div>
              <div style="font-size:11px;color:var(--cyan);text-align:center;margin:6px 0;padding:6px;border:1px solid rgba(34,211,238,.55);border-radius:6px;background:rgba(34,211,238,.10);">
                <strong>${stateFamilyLabel(o.state_type)} state-mixer sub-layer</strong> · ${period - 1} of every ${period} blocks · <span style="color:var(--text2)">recurrent state, no KV cache, O(1) decode</span>
              </div>
              ${mambaBlock}
              ${moeFFNBlock}`;
  } else if (hasState) {
    // Hybrid only: attention layers + state layers, both with dense FFN
    const period = nAttnLayers > 0 ? Math.round(o.n_layers / nAttnLayers) : o.n_layers;
    flowBlocks = `
              <div style="font-size:11px;color:var(--blue);text-align:center;margin:6px 0;padding:6px;border:1px solid rgba(96,165,250,.55);border-radius:6px;background:rgba(96,165,250,.10);">
                <strong>Self-Attention sub-layer</strong> · 1 of every ${period} blocks · <span style="color:var(--text2)">mixes tokens via softmax attention, carries KV cache</span>
              </div>
              ${attnBlock}
              ${denseFFNBlock}

              <div class="arch-real-connector"></div>
              <div style="font-size:11px;color:var(--cyan);text-align:center;margin:6px 0;padding:6px;border:1px solid rgba(34,211,238,.55);border-radius:6px;background:rgba(34,211,238,.10);">
                <strong>${stateFamilyLabel(o.state_type)} state-mixer sub-layer</strong> · ${period - 1} of every ${period} blocks · <span style="color:var(--text2)">recurrent state, no KV cache, O(1) decode</span>
              </div>
              ${mambaBlock}
              ${denseFFNBlock}`;
  } else if (hasMoE) {
    // MoE only: attention + MoE FFN (all layers same structure)
    flowBlocks = `${attnBlock}
              ${moeFFNBlock}`;
  } else {
    // Dense: attention + dense FFN
    flowBlocks = `${attnBlock}
              ${denseFFNBlock}`;
  }

  // Side panels: MoE panel
  const moeSidePanel = hasMoE ? `
          <div class="arch-real-panel">
            <h4>MoE routing</h4>
            <div class="arch-dim-grid">
              <div class="arch-dim-card"><strong>${o.n_experts}</strong><span>total experts</span></div>
              <div class="arch-dim-card"><strong>top-${o.top_k || 2}</strong><span>active per token</span></div>
              <div class="arch-dim-card"><strong>${o.ep || 1}</strong><span>expert parallelism</span></div>
              <div class="arch-dim-card"><strong>${o.active_params_B ? fmtParamCount(o.active_params_B) : "n/a"}</strong><span>active params</span></div>
            </div>
            <div class="arch-chip-row">
              <span class="arch-chip">Expert dim <strong>${o.expert_dim ? fmtN(o.expert_dim) : "?"}</strong></span>
              <span class="arch-chip">MoE residual <strong>${(o.moe_residual_pct ?? 0).toFixed(2)}%</strong></span>
              ${o.shared_expert ? '<span class="arch-chip">Shared expert <strong>yes</strong></span>' : ""}
            </div>
          </div>` : "";

  // Side panels: State/Hybrid panel
  const stateSidePanel = hasState ? `
          <div class="arch-real-panel">
            <h4>Self-Attention vs ${stateFamilyLabel(o.state_type)} State Mixer</h4><table class="arch-table" style="margin-bottom:10px;"><tr><td style="color:var(--blue);font-weight:600;">Self-Attention</td><td>token mixer: softmax(QK<sup>T</sup>)·V · KV cache grows with L · O(L<sup>2</sup>) prefill, O(L) decode</td></tr><tr><td style="color:var(--cyan);font-weight:600;">${stateFamilyLabel(o.state_type)} mixer</td><td>token mixer: recurrence over fixed-size state (d_state=${o.d_state || "?"}) · NO KV cache · O(L) prefill, O(1) decode</td></tr></table><h4 style="margin-top:6px;">Hybrid configuration</h4>
            <div class="arch-dim-grid">
              <div class="arch-dim-card"><strong>${o.d_state || "?"}</strong><span>d_state</span></div>
              <div class="arch-dim-card"><strong>${nStateLayers}/${o.n_layers}</strong><span>state/total layers</span></div>
              <div class="arch-dim-card"><strong>${o.p_attn != null ? (o.p_attn * 100).toFixed(0) + "%" : "n/a"}</strong><span>p_attn</span></div>
              <div class="arch-dim-card"><strong>${o.in_band != null ? (o.in_band ? "yes" : "no") : "n/a"}</strong><span>in band</span></div>
            </div>
            <table class="arch-table">
              <tr><td>Hybrid family</td><td>${(o.hybrid_family || "n/a").replace(/_/g," ")}</td></tr>
              <tr><td>Placement</td><td>${(o.placement_strategy || "n/a").replace(/_/g," ")}</td></tr>
              <tr><td>Crossover L*</td><td>${o.crossover_seq_len ? fmtN(o.crossover_seq_len) : "n/a"}</td></tr>
              <tr><td>Hybrid ratio</td><td>${o.hybrid_ratio != null ? (o.hybrid_ratio * 100).toFixed(0) + "% state" : "n/a"}</td></tr>
              <tr><td>State residual</td><td>${(o.state_residual_pct ?? 0).toFixed(2)}%</td></tr>
            </table>
            <div class="arch-callout">State layers (${stateFamilyLabel(o.state_type)}) have no KV cache — decode cost is independent of sequence length. Crossover L* = ${o.crossover_seq_len ? fmtN(o.crossover_seq_len) : "n/a"} is where state decode cost equals attention decode cost.</div>
          </div>` : "";

  return `
    <h3>Architecture Diagram <span style="font-size:12px;font-weight:500;color:var(--text2);margin-left:8px;">${archFamily}</span></h3>
    <div class="arch-real-viz">
      <div class="arch-real-grid">
        <div>
          <div class="arch-real-board" style="--block-w:${blockWPct}%; min-height:${Math.round(stackH + 220 + (hasMoE ? 160 : 0) + (hasState ? 280 : 0))}px;">
            <div class="arch-real-repeat">${repeatLabel}</div>
            <div class="arch-real-flow">
              <div class="arch-real-box embed">
                <div><span class="title">Token embedding</span><span class="sub">vocab 32,000 -> d_model ${fmtN(o.d_model)}</span></div>
              </div>
              <div class="arch-real-connector"></div>

              <div class="arch-layer-map-wrap">
                <div class="arch-layer-map-head"><strong>Full layer map: ${o.n_layers} blocks</strong><span>${layerMapDesc}</span></div>
                <div class="arch-layer-map">${layerTiles}</div>
                <div class="arch-layer-legend">${legendItems.join("")}</div>
              </div>

              ${flowBlocks}

              <div class="arch-real-connector"></div>
              <div class="arch-real-box out">
                <div><span class="title">Final RMSNorm -> LM head</span><span class="sub">${fmtN(o.d_model)} -> 32,000 logits · weights ${o.weight_prec.toUpperCase()}</span></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="arch-real-panel">
            <h4>Actual selected architecture</h4>
            <div class="arch-dim-grid">
              <div class="arch-dim-card"><strong>${fmtParamCount(paramCostB(o))}</strong><span>${hasMoE && o.active_params_B ? fmtParamCount(o.active_params_B) + " active/token" : "parameter cost"}</span></div>
              <div class="arch-dim-card"><strong>${o.n_layers}</strong><span>${hasState ? nAttnLayers + " attn + " + nStateLayers + " state" : "decoder blocks"}</span></div>
              <div class="arch-dim-card"><strong>${fmtN(o.d_model)}</strong><span>d_model (same as dense)</span></div>
              <div class="arch-dim-card"><strong>${hasMoE ? fmtN(o.expert_dim || o.ffn_dim) : fmtN(o.ffn_dim)}</strong><span>${hasMoE ? "expert FFN dim" : "FFN dim (" + ffnRatio.toFixed(2) + "x)"}</span></div>
            </div>
            <table class="arch-table">
              <tr><td>Block formula</td><td>${blockFormula}</td></tr>
              <tr><td>Attention heads</td><td>${o.n_heads} Q heads x d_head ${o.d_head}</td></tr>
              <tr><td>KV heads</td><td>${o.n_kv_heads} heads (${attnType}, ${gqaRatio.toFixed(2)}x grouping)</td></tr>
              <tr><td>Architecture family</td><td>${archFamily}</td></tr>
              <tr><td>Quality residual</td><td>${residualPct(o).toFixed(2)}% total · ${uncertainty}% uncertainty</td></tr>
              <tr><td>Precision</td><td>weights ${o.weight_prec.toUpperCase()}, FFN ${o.ffn_prec.toUpperCase()}, KV ${o.kv_bits}-bit</td></tr>
            </table>
          </div>

          ${moeSidePanel}
          ${stateSidePanel}

          <div class="arch-real-panel">
            <h4>Attention dimensions</h4>
            <div class="arch-chip-row">
              <span class="arch-chip">Q projection <strong>${fmtN(o.d_model)} -> ${fmtN(qDim)}</strong></span>
              <span class="arch-chip">K/V projection <strong>${fmtN(o.d_model)} -> ${fmtN(kvDim)}</strong></span>
              <span class="arch-chip">O projection <strong>${fmtN(qDim)} -> ${fmtN(o.d_model)}</strong></span>
              <span class="arch-chip">KV bytes/token/layer <strong>${formatBytes(kvBytes)}</strong></span>
            </div>
            <div class="arch-bar"><div class="arch-bar-fill" style="width:${qPct}%"></div></div>
            <div style="font-size:11px;color:var(--text2);margin-top:5px;">Query head matrix: ${o.n_heads} heads</div>
            <div class="arch-head-matrix">${headDots}</div>
            <div class="arch-bar"><div class="arch-bar-fill kv" style="width:${kvPct}%"></div></div>
            <div style="font-size:11px;color:var(--text2);margin-top:5px;">KV cache matrix: ${o.n_kv_heads} heads, ${kvPct.toFixed(1)}% of Q-head count</div>
            <div class="arch-head-matrix">${kvDots}</div>
          </div>

          <div class="arch-real-panel">
            <h4>Feed-forward dimensions</h4>
            <div class="arch-chip-row">
              <span class="arch-chip">up/gate <strong>${fmtN(o.d_model)} -> ${fmtN(o.ffn_dim)}</strong></span>
              <span class="arch-chip">down <strong>${fmtN(o.ffn_dim)} -> ${fmtN(o.d_model)}</strong></span>
              <span class="arch-chip">expansion <strong>${ffnRatio.toFixed(2)}x</strong></span>
            </div>
            <div class="arch-bar"><div class="arch-bar-fill ffn" style="width:${ffnPct}%"></div></div>
            <div class="arch-callout">The schematic changes with the selected optimum: it renders exactly ${o.n_layers} layer tiles, scales block widths by d_model/FFN dimension, and labels the Q/KV/FFN shapes used by the compiler quality and throughput models.</div>
          </div>
        </div>
      </div>
    </div>`;
}

// ======================
// Tab: Pareto Frontier
// ======================
function renderPareto(entry) {
  if (!entry || !entry.pareto.length) {
    document.getElementById("pareto-table").querySelector("tbody").innerHTML = "";
    const reasons = entry && entry.infeasible_reasons ? `<br>${entry.infeasible_reasons.join("; ")}` : "";
    document.getElementById("pareto-detail").innerHTML = `<h3>No Frontier</h3><p style="color:var(--text2);font-size:13px;">No feasible displayed Pareto points for this configuration.${reasons}</p>`;
    return;
  }

  const opt = entry.optimal;
  const records = entry.pareto.map((p, i) => ({
    ...p,
    risk: 0,
    isSelected: i === paretoState.selected,
    isBaseline: false,
  }));
  const optKey = opt ? candidateKey(candidateForEntry(opt, entry)) : "";
  const optIdx = records.findIndex(p => candidateKey(candidateForEntry(p, entry)) === optKey);
  const focusKey = [
    state.hw, state.params, state.tokens, state.serving, state.contextLength,
    state.prefPreset, JSON.stringify(state.prefWeights), optKey,
  ].join("|");
  if (paretoState.lastFocusKey !== focusKey) {
    paretoState.lastFocusKey = focusKey;
    paretoState.manualSelection = false;
  }
  if (!paretoState.manualSelection) paretoState.selected = Math.max(optIdx, 0);
  if (paretoState.selected >= records.length) paretoState.selected = Math.max(optIdx, 0);
  if (paretoState.selected < 0) paretoState.selected = Math.max(optIdx, 0);
  records.forEach((r, i) => { r.isSelected = i === paretoState.selected; });
  document.getElementById("pareto-legend").innerHTML = legendFor(paretoState.color);
  drawRichScatter("pareto-chart", records, {
    xKey: paretoState.x,
    yKey: paretoState.y,
    colorMode: paretoState.color,
    sizeKey: paretoState.size,
    selectedIndex: paretoState.selected,
    height: 360,
    onSelect: idx => { paretoState.selected = idx; paretoState.manualSelection = true; renderPareto(entry); },
  });

  const selected = records[paretoState.selected] || records[Math.max(optIdx, 0)] || records[0];
  const gqa = selected.n_heads === selected.n_kv_heads ? "MHA" : selected.n_kv_heads === 1 ? "MQA" : `GQA-${selected.n_heads/selected.n_kv_heads}`;
  document.getElementById("pareto-detail").innerHTML = `
    <h3>${paretoState.manualSelection ? "Inspected Frontier Point" : "Objective-Selected Frontier Point"}</h3>
    ${selected._projection_labels ? `<p style="font-size:12px;color:#f59e0b;line-height:1.5;margin-bottom:8px;">Projection: ${selected._projection_labels.join(" + ")}</p>` : ""}
    <div class="metric"><span class="label">Rank</span><span class="val">#${paretoState.selected + 1}</span></div>
    <div class="metric"><span class="label">Shape</span><span class="val">${selected.d_model} × ${selected.n_layers}</span></div>
    <div class="metric"><span class="label">Attention</span><span class="val">${gqa}</span></div>
    <div class="metric"><span class="label">FFN dim</span><span class="val">${fmtN(selected.ffn_dim)}</span></div>
    <div class="metric"><span class="label">Precision</span><span class="val">${selected.ffn_prec.toUpperCase()} FFN · ${selected.kv_bits}-bit KV</span></div>
    <div class="metric"><span class="label">Family</span><span class="val">${(selected.arch_family || "dense").replace(/_/g," ")}</span></div>
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div class="metric"><span class="label">Loss proxy</span><span class="val">${selected.loss}</span></div>
    <div class="metric"><span class="label">Training TPS</span><span class="val">${fmtN(selected.train_tps)}</span></div>
    <div class="metric"><span class="label">TBT</span><span class="val">${selected.tbt_ms} ms</span></div>
    <div class="metric"><span class="label">TTFT</span><span class="val">${selected.ttft_ms} ms</span></div>
    <div class="metric"><span class="label">Memory/GPU</span><span class="val">${selected.mem_gb} GB</span></div>
    <div class="metric"><span class="label">Param Cost</span><span class="val">${fmtParamCount(paramCostB(selected))}</span></div>
    <div class="metric"><span class="label">Total residual</span><span class="val ${penClass(residualPct(selected))}">${residualPct(selected).toFixed(2)}%</span></div>
    <p class="ctrl-note" style="margin-top:10px;">Default focus follows the current tradeoff objective; click points or rows to inspect alternatives.</p>`;

  // Table
  const thead = document.querySelector("#pareto-table thead tr");
  thead.innerHTML = "<th>#</th><th>d_model</th><th>L</th><th>h</th><th>kv_h</th><th>ffn</th><th>Prec</th><th>KV</th><th>Param Cost</th><th>Loss</th><th>TPS</th><th>TBT</th><th>Mem</th><th>Family</th><th>Conf</th>";
  const tbody = document.querySelector("#pareto-table tbody");
  tbody.innerHTML = "";
  records.forEach((p, i) => {
    const isSelected = i === paretoState.selected;
    tbody.innerHTML += `<tr class="${isSelected ? 'highlight' : ''}" data-pareto-idx="${i}">
      <td>${i+1}</td><td>${p.d_model}</td><td>${p.n_layers}</td><td>${p.n_heads}</td>
      <td>${p.n_kv_heads}</td><td>${fmtN(p.ffn_dim)}</td><td>${p.ffn_prec}</td><td>${p.kv_bits}</td>
      <td>${fmtParamCount(paramCostB(p))}</td><td>${p.loss}</td><td>${fmtN(p.train_tps)}</td>
      <td>${p.tbt_ms}ms</td><td>${p.mem_gb}GB</td><td>${(p.arch_family || "dense").replace(/_/g," ")}</td><td>${confBadge(p.confidence)}</td></tr>`;
  });
  tbody.querySelectorAll("tr").forEach(row => {
    row.onclick = () => {
      paretoState.selected = parseInt(row.dataset.paretoIdx, 10);
      paretoState.manualSelection = true;
      renderPareto(entry);
    };
  });
}

// ======================
// Tab: Pareto Modifier
// ======================
function renderModifier() {
  const all = generateModifierRecords();
  const baseline = all.find(r => r.isBaseline);
  const frontier = paretoFrontier(all, true);
  const viable = frontier.filter(r => !r.isBaseline && improvesResource(r, baseline) && (
    r.qualityPreserving ||
    (modifierState.allowQualitySpending && r.qualityRiskPct <= modifierState.riskBudget)
  ));
  viable.sort((a,b) => modifierScore(b, baseline) - modifierScore(a, baseline));
  const recommended = viable[0] || baseline;
  const chartRecords = [baseline, ...frontier.filter(r => !r.isBaseline)];
  const recommendedIndex = Math.max(0, chartRecords.indexOf(recommended));
  if (!modifierState.manualSelection || modifierState.selected >= chartRecords.length) {
    modifierState.selected = recommendedIndex;
    modifierState.manualSelection = false;
  }
  const selected = chartRecords[modifierState.selected] || recommended;
  all.forEach(r => {
    r.isSelected = r === selected;
    r.isRejected = !r.isBaseline && !r.qualityPreserving && (!modifierState.allowQualitySpending || r.qualityRiskPct > modifierState.riskBudget);
  });

  document.getElementById("mod-risk-label").textContent = `+${modifierState.riskBudget.toFixed(2)}%`;
  syncQualityModeChips();
  const sameQualityCount = all.filter(r => !r.isBaseline && r.qualityPreserving).length;
  const optionalCount = all.filter(r => !r.isBaseline && !r.qualityPreserving).length;
  document.getElementById("mod-stats").innerHTML = `
    <div class="card"><div class="stat"><div class="stat-val">${sameQualityCount}</div><div class="stat-label">Same-Quality Moves</div></div></div>
    <div class="card"><div class="stat"><div class="stat-val">${frontier.length}</div><div class="stat-label">Visible Frontier</div></div></div>
    <div class="card"><div class="stat"><div class="stat-val">${modifierState.allowQualitySpending ? optionalCount : "off"}</div><div class="stat-label">Quality-Spending Lane</div></div></div>
    <div class="card"><div class="stat"><div class="stat-val">${selected.isBaseline ? "Base" : selected.moveClass}</div><div class="stat-label">Selected Move Class</div></div></div>`;

  document.getElementById("mod-legend").innerHTML = legendFor("moveClass", true);
  drawRichScatter("modifier-chart", chartRecords, {
    xKey: "tbt_ms",
    yKey: "compat_score",
    colorMode: "moveClass",
    sizeKey: "mem_gb",
    selectedIndex: modifierState.selected,
    height: 370,
    onSelect: idx => {
      modifierState.selected = idx;
      modifierState.manualSelection = true;
      renderModifier();
    },
  });

  document.getElementById("modifier-detail").innerHTML = modifierDetailHTML(selected, baseline, recommended);
  renderModifierCards(all, baseline, selected);
  renderBottleneckCard(baseline, selected, all);
  renderDeltaInfluenceCard(baseline, selected, all, frontier);
  renderModifierTable(frontier, baseline, selected, chartRecords);
}

function modifierDetailHTML(rec, baseline, recommended) {
  const gqa = rec.n_heads === rec.n_kv_heads ? "MHA" : rec.n_kv_heads === 1 ? "MQA" : `GQA-${rec.n_heads/rec.n_kv_heads}`;
  const selectedNote = rec === recommended ? `<span class="badge high">recommended</span>` : rec.isBaseline ? `<span class="badge medium">baseline</span>` : "";
  const riskClass = rec.riskLabel ? `risk-${rec.riskLabel}` : "";
  const qualityText = rec.qualityPreserving ? "same model" : `${rec.qualityRiskPct >= 0 ? "+" : ""}${rec.qualityRiskPct.toFixed(3)}% proxy`;
  return `
    <h3>${rec.isBaseline ? "Baseline" : "Modification"} ${selectedNote}</h3>
    <p style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:10px;">${rec.isBaseline ? "Current Mistral-like dense Transformer." : rec.changes.join("; ")}</p>
    ${rec.detail ? `<p style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:10px;">${rec.detail}</p>` : ""}
    <div class="metric"><span class="label">Shape</span><span class="val">${rec.d_model} × ${rec.n_layers}</span></div>
    <div class="metric"><span class="label">Attention</span><span class="val">${gqa}</span></div>
    <div class="metric"><span class="label">FFN</span><span class="val">${fmtN(rec.ffn_dim)} · ${rec.ffn_prec.toUpperCase()}</span></div>
    <div class="metric"><span class="label">KV Cache</span><span class="val">${rec.kv_bits}-bit · ${rec.kv_gb.toFixed(3)}GB</span></div>
    <div class="metric"><span class="label">TP</span><span class="val">${rec.tp || 8}</span></div>
    <div class="metric"><span class="label">Move Class</span><span class="val">${rec.moveClass || "architecture"}</span></div>
    <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
    <div class="metric"><span class="label">Quality Delta</span><span class="val ${rec.qualityPreserving ? "delta-good" : deltaClass(-rec.qualityRiskPct)}">${qualityText}</span></div>
    <div class="metric"><span class="label">Hardware Fit Score</span><span class="val ${deltaClass(rec.compat_score)}">${rec.compat_score.toFixed(1)}</span></div>
    <div class="metric"><span class="label">TBT Delta</span><span class="val ${deltaClass(pctLower(rec.tbt_ms, baseline.tbt_ms))}">${pctLower(rec.tbt_ms, baseline.tbt_ms).toFixed(1)}%</span></div>
    <div class="metric"><span class="label">Train TPS Delta</span><span class="val ${deltaClass(pctHigher(rec.train_tps, baseline.train_tps))}">${pctHigher(rec.train_tps, baseline.train_tps).toFixed(1)}%</span></div>
    <div class="metric"><span class="label">Memory Delta</span><span class="val ${deltaClass(pctLower(rec.mem_gb, baseline.mem_gb))}">${pctLower(rec.mem_gb, baseline.mem_gb).toFixed(1)}%</span></div>
    <div class="metric"><span class="label">Risk</span><span class="val ${riskClass}">${rec.qualityPreserving ? "none" : `${rec.riskLabel || "baseline"} ${rec.risk ? `(${rec.risk})` : ""}`}</span></div>`;
}

function renderModifierCards(all, baseline, selected) {
  const sameQuality = all.filter(r => !r.isBaseline && r.qualityPreserving);
  const sorted = sameQuality.sort((a,b) => modifierScore(b, baseline) - modifierScore(a, baseline)).slice(0, 8);
  const maxScore = Math.max(...sorted.map(r => Math.max(modifierScore(r, baseline), 0.1)), 1);
  document.getElementById("mod-change-card").innerHTML = `
    <h3>Top Same-Quality Moves</h3>
    <div class="mini-bars">
      ${sorted.map(r => `<div>
        <div class="mini-bar-label"><span>${shortChange(r)}</span><span>${modifierScore(r, baseline).toFixed(1)}</span></div>
        <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.max(2, modifierScore(r, baseline)/maxScore*100)}%;background:var(--green)"></div></div>
      </div>`).join("")}
    </div>`;

  const kvMoves = all.filter(r => !r.isBaseline && r.qualityPreserving && (r.moveClass === "cache" || r.changes.join(" ").includes("KV")))
    .sort((a,b) => pctLower(b.kv_gb, baseline.kv_gb) - pctLower(a.kv_gb, baseline.kv_gb)).slice(0, 5);
  document.getElementById("mod-kv-card").innerHTML = `
    <h3>KV Compatibility Moves</h3>
    <p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:10px;">Same-quality KV work changes page layout, placement, and scheduling, not KV head count or KV precision. GQA/KV quantization belongs in the optional quality-spending lane.</p>
    ${kvMoves.map(r => `<div class="metric"><span class="label">${shortChange(r)}</span><span class="val ${deltaClass(pctLower(r.kv_gb, baseline.kv_gb))}">${pctLower(r.kv_gb, baseline.kv_gb).toFixed(1)}%</span></div>`).join("")}`;
}


// =====================================================================
// v1-stress: bottleneck + proposed solution panel
// =====================================================================
//
// Computes a lightweight 4-axis stress vector for each modifier record
// (hbm_capacity, kv_footprint, training_mem, hbm_bw_decode) using the same
// per-record fields the existing modifier already tracks (mem_gb, kv_gb,
// tbt_ms) plus per-hardware HBM capacity + bandwidth. Renders:
//   * Bottleneck:  which baseline axis is in the loaded/pressured/binding/
//                  bottleneck band, named.
//   * Solution:    which selected modification relieves that axis and by
//                  how much, named.
// Mirrors v1-stress/stress.py severity bands so the explorer and the
// CLI baseline_delta.md report use the same vocabulary.

const STRESS_HW = {
  // hbm_gb, hbm_bw_tb_s
  h100:    { hbm_gb: 80,  bw_tb: 3.35 },
  b200:    { hbm_gb: 192, bw_tb: 8.00 },
  tpu_v5p: { hbm_gb: 95,  bw_tb: 2.76 },
};

function stressBand(v) {
  if (v < 0.7) return "relaxed";
  if (v < 0.9) return "loaded";
  if (v < 1.0) return "pressured";
  if (v < 1.2) return "binding";
  return "bottleneck";
}

function stressBandColor(band) {
  return {
    relaxed:   "var(--text2)",
    loaded:    "var(--accent2)",
    pressured: "#f59e0b",
    binding:   "#f97316",
    bottleneck: "#ef4444",
  }[band] || "var(--text2)";
}

function computeRecordStress(rec, hwName) {
  const hw = STRESS_HW[hwName] || STRESS_HW.h100;
  const mem = Math.max(0.01, rec.mem_gb || 0);
  const kv = Math.max(0,    rec.kv_gb  || 0);
  const tbt_s = Math.max(1e-6, (rec.tbt_ms || 1) / 1000);
  const hbm_bytes = hw.hbm_gb * (1024**3);
  const bw_bytes  = hw.bw_tb * 1e12;
  // bytes loaded per decode step ~ mem (weights + KV). hbm_bw_decode = bytes / (BW * step_s)
  const decodeBytes = mem * (1024**3);
  return {
    hbm_capacity:  mem / hw.hbm_gb,
    kv_footprint:  kv / hw.hbm_gb,
    // Round-2 fix N10: training residency is dominated by weights + grads +
    // optimizer state + activations. KV cache is *not* part of training memory.
    // We back out weights from (mem - kv), multiply by ~16x for fp32 AdamW
    // (params=2B, grads=2B, optim_m=4B, optim_v=4B, activations~4B per param-equiv),
    // then add a small per-layer activation term proxied by mem itself.
    training_mem:  Math.max(0, mem - kv) * 16 / hw.hbm_gb,
    hbm_bw_decode: decodeBytes / (bw_bytes * tbt_s),
  };
}

function stressBindingAxes(vec) {
  const out = [];
  for (const axis of ["hbm_bw_decode", "kv_footprint", "hbm_capacity", "training_mem"]) {
    const b = stressBand(vec[axis]);
    if (b === "pressured" || b === "binding" || b === "bottleneck") out.push(axis);
  }
  return out;
}

const STRESS_AXIS_LABEL = {
  hbm_bw_decode: "HBM bandwidth (decode)",
  kv_footprint:  "KV cache footprint",
  hbm_capacity:  "HBM capacity",
  training_mem:  "Training memory",
};

const STRESS_AXIS_REASON = {
  hbm_bw_decode: "KV cache + weights are streamed from HBM every decode step.",
  kv_footprint:  "KV cache is the dominant slice of HBM capacity.",
  hbm_capacity:  "Weights + KV + activations approach the per-GPU HBM ceiling.",
  training_mem:  "Weights + grads + optimizer state exceed the per-GPU HBM during training.",
};

function shortChangeOrBaseline(r) {
  if (r.isBaseline) return "Baseline";
  try { return shortChange(r); } catch (e) { return (r.changes || []).join("; "); }
}

function renderBottleneckCard(baseline, selected, all) {
  const baseStress = computeRecordStress(baseline, state.hw);
  const selStress  = computeRecordStress(selected,  state.hw);
  const binding = stressBindingAxes(baseStress);
  const baseBindingHTML = ["hbm_bw_decode", "kv_footprint", "hbm_capacity", "training_mem"].map(axis => {
    const v = baseStress[axis];
    const band = stressBand(v);
    const color = stressBandColor(band);
    const width = Math.min(100, v * 100);
    return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <div style="width:170px;font-size:12px;color:var(--text2);">${STRESS_AXIS_LABEL[axis]}</div>
      <div style="flex:1;height:8px;background:rgba(255,255,255,0.05);border-radius:4px;overflow:hidden;">
        <div style="width:${width}%;height:100%;background:${color};"></div>
      </div>
      <div style="width:60px;text-align:right;font-variant-numeric:tabular-nums;font-size:12px;">${v.toFixed(2)}</div>
      <div style="width:80px;text-align:right;font-size:11px;color:${color};text-transform:uppercase;letter-spacing:0.4px;">${band}</div>
    </div>`;
  }).join("");

  let solutionHTML;
  if (binding.length === 0) {
    solutionHTML = `<p style="color:var(--text2);font-size:12px;line-height:1.5;">
      No baseline axis is in the pressured / binding / bottleneck band under this workload.
      Modifier moves are <em>opportunistic</em> rather than corrective —
      any move on the frontier is fair game.</p>`;
  } else if (selected.isBaseline) {
    // No modification selected, surface the best relief candidate on the frontier.
    const ranked = (all || []).filter(r => !r.isBaseline).map(r => {
      const s = computeRecordStress(r, state.hw);
      let relief = 0;
      for (const axis of binding) relief += Math.max(0, baseStress[axis] - s[axis]);
      return { rec: r, relief, stress: s };
    }).filter(x => x.relief > 0).sort((a,b) => b.relief - a.relief).slice(0, 3);
    if (ranked.length === 0) {
      solutionHTML = `<p style="color:var(--text2);font-size:12px;line-height:1.5;">
        No nearby modification on the frontier relieves the binding axes within the current
        quality budget. Consider enabling quality-spending knobs (chips above) or relaxing
        constraints.</p>`;
    } else {
      const rows = ranked.map(({rec, stress, relief}) => {
        const detail = binding.map(axis => {
          const bv = baseStress[axis], cv = stress[axis];
          const sign = cv < bv ? "↓" : cv > bv ? "↑" : "=";
          const cls  = cv < bv ? "delta-good" : cv > bv ? "delta-bad" : "";
          return `<span class="metric" style="display:inline-flex;gap:4px;margin-right:10px;">
            <span class="label" style="margin:0;">${STRESS_AXIS_LABEL[axis]}</span>
            <span class="val ${cls}" style="margin:0;">${bv.toFixed(2)} ${sign} ${cv.toFixed(2)}</span>
          </span>`;
        }).join("");
        return `<div style="padding:8px 0;border-top:1px solid var(--border);">
          <div style="font-size:12px;margin-bottom:4px;"><strong>${shortChangeOrBaseline(rec)}</strong>
            <span class="badge" style="margin-left:6px;">relief ${relief.toFixed(2)}</span></div>
          <div>${detail}</div>
        </div>`;
      }).join("");
      solutionHTML = `<p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:8px;">
        Baseline is currently selected. These nearby modifications relieve the binding axes the most —
        click a point on the frontier above to apply one:</p>${rows}`;
    }
  } else {
    const reliefRows = binding.map(axis => {
      const bv = baseStress[axis], cv = selStress[axis];
      const delta = bv - cv;
      const cls  = delta > 0.01 ? "delta-good" : delta < -0.01 ? "delta-bad" : "";
      const sign = delta > 0 ? "↓" : delta < 0 ? "↑" : "=";
      return `<div class="metric" style="padding:6px 0;">
        <span class="label">${STRESS_AXIS_LABEL[axis]}</span>
        <span class="val ${cls}">${bv.toFixed(2)} ${sign} ${cv.toFixed(2)} (${(delta>=0?"+":"")}${delta.toFixed(2)})</span>
      </div>`;
    }).join("");
    const newPressure = ["hbm_bw_decode", "kv_footprint", "hbm_capacity", "training_mem"]
      .filter(a => !binding.includes(a) && (stressBand(selStress[a]) === "pressured" || stressBand(selStress[a]) === "binding" || stressBand(selStress[a]) === "bottleneck"));
    const newPressureHTML = newPressure.length
      ? `<div style="margin-top:10px;padding:8px;border:1px solid #f59e0b40;background:#f59e0b10;border-radius:6px;font-size:12px;color:#f59e0b;">
           <strong>Watch:</strong> this move newly pressures
           ${newPressure.map(a => `<code>${STRESS_AXIS_LABEL[a]}</code>`).join(", ")}.
         </div>`
      : "";
    solutionHTML = `
      <p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:8px;">
        Proposed change: <strong style="color:var(--text);">${shortChangeOrBaseline(selected)}</strong>
        (${selected.moveClass || "modification"}).
      </p>
      <p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:8px;">
        Why it works: ${binding.map(a => STRESS_AXIS_REASON[a]).join(" ")}
      </p>
      ${reliefRows}
      ${newPressureHTML}`;
  }

  const bindingChipsHTML = binding.length
    ? binding.map(a => `<span class="badge" style="background:${stressBandColor(stressBand(baseStress[a]))}20;color:${stressBandColor(stressBand(baseStress[a]))};margin-right:6px;">${STRESS_AXIS_LABEL[a]}</span>`).join("")
    : `<span class="badge" style="background:rgba(255,255,255,0.05);color:var(--text2);">no binding axis</span>`;

  document.getElementById("mod-bottleneck-card").innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:24px;flex-wrap:wrap;">
      <div style="flex:1;min-width:320px;">
        <h3 style="margin-bottom:4px;">Bottleneck</h3>
        <p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:10px;">
          Baseline stress on <code>${state.hw.toUpperCase()}</code> · workload <code>${(MOD_WORKLOAD_PRESETS[modifierState.workloadPreset] || {label: "chat"}).label}</code>.
          Axes ≥ <code>pressured</code> are the binding ones the modifier should target.
          ${bindingChipsHTML}
        </p>
        ${baseBindingHTML}
      </div>
      <div style="flex:1;min-width:320px;">
        <h3 style="margin-bottom:4px;">Proposed Solution</h3>
        ${solutionHTML}
      </div>
    </div>`;
}

// ---------------------------------------------------------------------------
// Delta Influence card — browser-side heuristic companion to v1-delta-eval.
//
// Given the currently selected (non-baseline) modifier record, surface its
// quantitative influence on the Pareto front + evaluation metrics:
//   * Metric panel  — TBT, mem, KV cache, quality (% deltas vs baseline).
//   * Stress influence — which baseline binding axes the delta relieved /
//                        introduced, with signed deltas.
//   * Pareto verdict  — classified against the modifier frontier (which is
//                       already computed and lives in `frontier`).
//
// Mirrors the Markdown report rendered by v1-delta-eval/report.py so the
// inline card and the CLI report share vocabulary.
// ---------------------------------------------------------------------------

function _diClassifyParetoPosition(selected, baseline, frontier) {
  // 4-axis objectives (all minimized; training_tps is negated).
  const obj = (r) => [
    Number(r.qualityRiskPct || 0),                 // quality penalty %
    Number(r.tbt_ms || 0),                         // serving TBT
    Number(r.mem_gb || 0),                         // mem / GPU
    -Number(r.training_tps || r.train_tps || 0),   // training TPS (higher better → negate)
  ];
  const eps = 1e-9;
  const dominates = (a, b) => {
    let strict = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i] + eps) return false;
      if (a[i] < b[i] - eps) strict = true;
    }
    return strict;
  };
  const equalish = (a, b) => {
    for (let i = 0; i < a.length; i++) {
      const denom = Math.max(Math.abs(a[i]), Math.abs(b[i]), 1e-9);
      if (Math.abs(a[i] - b[i]) / denom > 0.01 && Math.abs(a[i] - b[i]) > 1e-6) return false;
    }
    return true;
  };
  const c = obj(selected), b = obj(baseline);
  const fobj = (frontier || []).filter(r => r !== selected).map(obj);
  const dominatesBaseline = dominates(c, b);
  const dominatedByBaseline = dominates(b, c);
  if (equalish(c, b)) {
    return { label: "EQUIVALENT", dominatedBy: 0, dominatesN: 0, frontierSize: fobj.length, dominatesBaseline, dominatedByBaseline };
  }
  let dominatedBy = 0, dominatesN = 0;
  for (const f of fobj) {
    if (dominates(f, c)) dominatedBy++;
    if (dominates(c, f)) dominatesN++;
  }
  let label;
  if (dominatesBaseline) {
    label = dominatedBy === 0 ? "DOMINATES_BASELINE_ON_FRONTIER" : "IMPROVES_BASELINE_DOMINATED";
  } else if (dominatedByBaseline) {
    label = "DOMINATED_BY_BASELINE";
  } else if (dominatedBy === 0 && dominatesN > 0) {
    label = "TRADEOFF_ON_FRONTIER";
  } else if (dominatedBy === 0) {
    label = "TRADEOFF_ON_FRONTIER";
  } else {
    label = "INTERIOR_TRADEOFF";
  }
  return { label, dominatedBy, dominatesN, frontierSize: fobj.length, dominatesBaseline, dominatedByBaseline };
}

const DI_POSITION_PRETTY = {
  DOMINATES_BASELINE_ON_FRONTIER: { text: "Improves baseline and is on frontier", color: "var(--accent2)" },
  IMPROVES_BASELINE_DOMINATED:    { text: "Improves baseline but is dominated",   color: "#f59e0b" },
  DOMINATED_BY_BASELINE:          { text: "Dominated by baseline",                color: "#ef4444" },
  TRADEOFF_ON_FRONTIER:           { text: "Trade-off on local frontier",          color: "var(--accent2)" },
  INTERIOR_TRADEOFF:              { text: "Interior trade-off (dominated)",       color: "#f59e0b" },
  EQUIVALENT:                     { text: "Equivalent to baseline",               color: "var(--text2)" },
};

function _diPositionDistanceText(pos) {
  if (pos.label === "EQUIVALENT") return "same metrics as baseline";
  if (pos.dominatedBy > 0) {
    return `${pos.dominatedBy} reference point${pos.dominatedBy === 1 ? "" : "s"} dominate this candidate`;
  }
  if (pos.dominatesN > 0) {
    return `dominates ${pos.dominatesN} local reference point${pos.dominatesN === 1 ? "" : "s"}`;
  }
  return "on the local reference frontier";
}

function _diMetricRow(label, baseVal, candVal, unit, lowerBetter, fmt) {
  fmt = fmt || ((v) => v.toFixed(3));
  const delta = candVal - baseVal;
  const pct = Math.abs(baseVal) > 1e-9 ? (delta / Math.abs(baseVal)) * 100 : 0;
  const isNeutral = Math.abs(delta) < 1e-9;
  const improves = !isNeutral && ((delta < 0) === lowerBetter);
  const cls = isNeutral ? "" : improves ? "delta-good" : "delta-bad";
  const sign = isNeutral ? "·" : improves ? (lowerBetter ? "↓" : "↑") : (lowerBetter ? "↑" : "↓");
  const dStr = (delta >= 0 ? "+" : "") + fmt(delta);
  const pctStr = (pct >= 0 ? "+" : "") + pct.toFixed(2) + "%";
  return `<tr>
    <td style="padding:4px 8px;color:var(--text2);font-size:12px;">${label}${unit ? ` <span style="color:var(--text2);opacity:0.7;">(${unit})</span>` : ""}</td>
    <td style="padding:4px 8px;text-align:right;font-size:12px;">${fmt(baseVal)}</td>
    <td style="padding:4px 8px;text-align:right;font-size:12px;">${fmt(candVal)}</td>
    <td class="${cls}" style="padding:4px 8px;text-align:right;font-size:12px;">${dStr}</td>
    <td class="${cls}" style="padding:4px 8px;text-align:right;font-size:12px;">${pctStr}</td>
    <td class="${cls}" style="padding:4px 8px;text-align:center;font-size:12px;">${sign}</td>
  </tr>`;
}

function renderDeltaInfluenceCard(baseline, selected, all, frontier) {
  const host = document.getElementById("mod-delta-influence-card");
  if (!host) return;

  if (!selected || selected.isBaseline) {
    host.innerHTML = `
      <h3 style="margin-bottom:4px;">Delta Influence</h3>
      <p style="color:var(--text2);font-size:12px;line-height:1.5;">
        Select a non-baseline modifier candidate to see its quantitative
        influence on the local modifier frontier and evaluation metrics.
      </p>`;
    return;
  }

  // Stress influence (uses the same client-side approximation as renderBottleneckCard).
  const baseStress = computeRecordStress(baseline, state.hw);
  const candStress = computeRecordStress(selected, state.hw);
  const binding = stressBindingAxes(baseStress);
  const stressAxes = ["hbm_bw_decode", "kv_footprint", "hbm_capacity", "training_mem"];
  const relieved = binding.filter(a => {
    const cb = stressBand(candStress[a]);
    return cb !== "pressured" && cb !== "binding" && cb !== "bottleneck";
  });
  const introduced = stressAxes.filter(a => {
    if (binding.includes(a)) return false;
    const cb = stressBand(candStress[a]);
    return cb === "pressured" || cb === "binding" || cb === "bottleneck";
  });
  let reliefScore = 0;
  for (const a of binding) reliefScore += Math.max(0, baseStress[a] - candStress[a]);
  for (const a of introduced) reliefScore -= 0.5 * candStress[a];

  // Pareto position vs the modifier frontier
  const pos = _diClassifyParetoPosition(selected, baseline, frontier);
  const posInfo = DI_POSITION_PRETTY[pos.label] || { text: pos.label, color: "var(--text2)" };

  // Metric panel
  const metricsHTML = `
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr style="border-bottom:1px solid var(--border);">
          <th style="padding:4px 8px;text-align:left;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Metric</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Baseline</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Candidate</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Δ</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Δ%</th>
          <th style="padding:4px 8px;text-align:center;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Dir</th>
        </tr>
      </thead>
      <tbody>
        ${_diMetricRow("Quality penalty",  baseline.qualityRiskPct || 0,                 selected.qualityRiskPct || 0,                 "%",      true,  v => v.toFixed(3))}
        ${_diMetricRow("Serving TBT",      baseline.tbt_ms || 0,                          selected.tbt_ms || 0,                          "ms",     true,  v => v.toFixed(2))}
        ${_diMetricRow("Training TPS",     baseline.training_tps || baseline.train_tps || 0, selected.training_tps || selected.train_tps || 0, "tok/s", false, v => v.toFixed(0))}
        ${_diMetricRow("Memory / GPU",     baseline.mem_gb || 0,                          selected.mem_gb || 0,                          "GB",     true,  v => v.toFixed(2))}
        ${_diMetricRow("KV cache",         baseline.kv_gb || 0,                           selected.kv_gb || 0,                           "GB",     true,  v => v.toFixed(3))}
      </tbody>
    </table>`;

  // Stress section
  let stressRows = "";
  for (const axis of stressAxes) {
    const bv = baseStress[axis], cv = candStress[axis];
    const delta = cv - bv;
    if (Math.abs(bv) < 0.005 && Math.abs(cv) < 0.005) continue;
    const isImprove = delta < -0.005;
    const isWorse   = delta >  0.005;
    const cls = isImprove ? "delta-good" : isWorse ? "delta-bad" : "";
    const sign = isImprove ? "↓" : isWorse ? "↑" : "·";
    const baseBand = stressBand(bv), candBand = stressBand(cv);
    stressRows += `<tr>
      <td style="padding:4px 8px;color:var(--text2);font-size:12px;">${STRESS_AXIS_LABEL[axis]}</td>
      <td style="padding:4px 8px;text-align:right;font-size:12px;">${bv.toFixed(2)}</td>
      <td style="padding:4px 8px;text-align:right;font-size:12px;">${cv.toFixed(2)}</td>
      <td class="${cls}" style="padding:4px 8px;text-align:right;font-size:12px;">${(delta >= 0 ? "+" : "") + delta.toFixed(2)} ${sign}</td>
      <td style="padding:4px 8px;font-size:11px;"><span style="color:${stressBandColor(baseBand)};">${baseBand}</span> <span style="color:var(--text2);">→</span> <span style="color:${stressBandColor(candBand)};">${candBand}</span></td>
    </tr>`;
  }
  const stressTableHTML = stressRows ? `
    <table style="width:100%;border-collapse:collapse;margin-top:8px;">
      <thead>
        <tr style="border-bottom:1px solid var(--border);">
          <th style="padding:4px 8px;text-align:left;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Stress axis</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Baseline</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Candidate</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Δ</th>
          <th style="padding:4px 8px;text-align:left;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Band</th>
        </tr>
      </thead>
      <tbody>${stressRows}</tbody>
    </table>` : `<p style="color:var(--text2);font-size:12px;">No measurable stress change on the 4 tracked axes.</p>`;

  const relievedHTML = relieved.length
    ? `<div style="margin-top:8px;font-size:12px;color:var(--text2);">
         <strong style="color:var(--accent2);">Relieved binding axes:</strong>
         ${relieved.map(a => `<code>${STRESS_AXIS_LABEL[a]}</code>`).join(", ")}
       </div>` : "";
  const introducedHTML = introduced.length
    ? `<div style="margin-top:6px;padding:6px 8px;border:1px solid #f59e0b40;background:#f59e0b10;border-radius:6px;font-size:12px;color:#f59e0b;">
         <strong>Watch:</strong> this delta newly pressures
         ${introduced.map(a => `<code>${STRESS_AXIS_LABEL[a]}</code>`).join(", ")}.
       </div>` : "";

  // Pareto verdict
  const distance = _diPositionDistanceText(pos);

  host.innerHTML = `
    <h3 style="margin-bottom:4px;">Delta Influence — ${shortChangeOrBaseline(selected)}</h3>
    <p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:12px;">
      How this modification moves baseline metrics, stress axes, and its position relative to the
      local heuristic modifier reference set (${pos.frontierSize} candidates).
    </p>

    <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:24px;align-items:start;">
      <div>
        <div style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Evaluation metrics</div>
        ${metricsHTML}

        <div style="margin-top:14px;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Stress influence</div>
        ${stressTableHTML}
        ${relievedHTML}
        ${introducedHTML}
        <div style="margin-top:8px;font-size:12px;color:var(--text2);">
          <strong>Stress relief score:</strong>
          <span class="${reliefScore > 0.01 ? 'delta-good' : reliefScore < -0.01 ? 'delta-bad' : ''}">${(reliefScore >= 0 ? "+" : "") + reliefScore.toFixed(3)}</span>
        </div>
      </div>

      <div>
        <div style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Pareto verdict</div>
        <div style="padding:12px;border:1px solid ${posInfo.color}40;background:${posInfo.color}10;border-radius:8px;">
          <div style="font-size:14px;font-weight:600;color:${posInfo.color};margin-bottom:6px;">${posInfo.text}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.5;">${distance}.</div>
          <hr style="border:none;border-top:1px solid var(--border);margin:8px 0;">
          <div style="font-size:12px;color:var(--text2);display:flex;justify-content:space-between;">
            <span>Dominates</span><strong style="color:var(--text);">${pos.dominatesN} pts</strong>
          </div>
          <div style="font-size:12px;color:var(--text2);display:flex;justify-content:space-between;">
            <span>Dominated by</span><strong style="color:var(--text);">${pos.dominatedBy} pts</strong>
          </div>
          <div style="font-size:12px;color:var(--text2);display:flex;justify-content:space-between;">
            <span>Frontier size</span><strong style="color:var(--text);">${pos.frontierSize}</strong>
          </div>
        </div>
      </div>
    </div>`;
}

function renderModifierTable(frontier, baseline, selected, chartRecords) {
  const table = document.getElementById("modifier-table");
  const thead = table.querySelector("thead tr");
  const tbody = table.querySelector("tbody");
  thead.innerHTML = "<th>#</th><th>Move</th><th>Class</th><th>Quality</th><th>TBT Δ</th><th>Train Δ</th><th>Mem Δ</th><th>KV Δ</th><th>Config</th>";
  tbody.innerHTML = "";
  const displayRows = [...frontier]
    .sort((a, b) => {
      if (a === selected) return -1;
      if (b === selected) return 1;
      return modifierScore(b, baseline) - modifierScore(a, baseline);
    })
    .slice(0, 40);
  displayRows.forEach((r, i) => {
    const isSel = r === selected;
    tbody.innerHTML += `<tr class="${isSel ? 'highlight' : ''}" data-mod-idx="${chartRecords.indexOf(r)}">
      <td>${i+1}</td>
      <td>${r.isBaseline ? "baseline" : r.changes.join("; ")}</td>
      <td>${r.moveClass || "architecture"}</td>
      <td class="${r.qualityPreserving ? "delta-good" : deltaClass(-r.qualityRiskPct)}">${r.qualityPreserving ? "same model" : `${r.qualityRiskPct >= 0 ? "+" : ""}${r.qualityRiskPct.toFixed(3)}%`}</td>
      <td class="${deltaClass(pctLower(r.tbt_ms, baseline.tbt_ms))}">${pctLower(r.tbt_ms, baseline.tbt_ms).toFixed(1)}%</td>
      <td class="${deltaClass(pctHigher(r.train_tps, baseline.train_tps))}">${pctHigher(r.train_tps, baseline.train_tps).toFixed(1)}%</td>
      <td class="${deltaClass(pctLower(r.mem_gb, baseline.mem_gb))}">${pctLower(r.mem_gb, baseline.mem_gb).toFixed(1)}%</td>
      <td class="${deltaClass(pctLower(r.kv_gb, baseline.kv_gb))}">${pctLower(r.kv_gb, baseline.kv_gb).toFixed(1)}%</td>
      <td>${r.n_layers}L · kv${r.n_kv_heads} · ${r.ffn_prec} · ${r.kv_bits}b</td>
    </tr>`;
  });
  tbody.querySelectorAll("tr").forEach(row => {
    row.onclick = () => {
      const idx = parseInt(row.dataset.modIdx, 10);
      if (idx >= 0) {
        modifierState.selected = idx;
        modifierState.manualSelection = true;
        renderModifier();
      }
    };
  });
}

function shortChange(r) {
  if (r.isBaseline) return "baseline";
  return r.changes.slice(0, 2).join("; ") + (r.changes.length > 2 ? "…" : "");
}
function pctHigher(v, base) { return base ? (v - base) / base * 100 : 0; }
function pctLower(v, base) { return base ? (base - v) / base * 100 : 0; }
function deltaClass(v) { return v > 0.25 ? "delta-good" : v < -0.25 ? "delta-bad" : "delta-warn"; }

// ======================
// Tab: Delta Influence
// ======================
//
// Standalone delta-evaluation page. Uses a browser-side heuristic model:
// given (hardware, baseline, delta) → quantitative influence on metrics +
// stress + local reference-set position. Supports individual deltas (one chip) and
// combined deltas (multiple chips stack in display order).
//
// Reuses the existing evalModifierCandidate machinery to score each
// candidate consistently with the modifier tab.

function diBuildCandidateFromDeltas(rawBase, baseRecord, deltaKeys) {
  // Clone the raw baseline arch shape (not the scaled record).
  const c = cloneCandidate(rawBase);
  c.isBaseline = false;
  c.changes = [];
  c._deltaKeys = deltaKeys.slice();
  // Apply each delta in display order. Each `apply()` mutates the candidate
  // and appends a human-readable label to changes[].
  for (const key of deltaKeys) {
    const def = DELTA_LIBRARY[key];
    if (!def) continue;
    def.apply(c, rawBase);
  }
  // Score the resulting candidate through the existing pipeline.
  const ev = evalModifierCandidate(c, baseRecord, deltaInfState.tp, deltaInfState.hardware, false);
  // Hybrid axes are not modeled by evalModifierCandidate; apply our
  // family/placement/ratio scoring layer on top so the metric panel + stress
  // both move in plausible directions for hybrid deltas.
  if (c._state_family || c._state_placement || c._hybridRatio != null) {
    ev._state_family = c._state_family;
    ev._state_placement = c._state_placement;
    ev._hybridRatio = c._hybridRatio;
    diApplyHybridScoring(ev, baseRecord);
  }
  // Risk + label
  const r = riskForCandidate(ev, rawBase, deltaInfState.tp);
  ev.risk = r.risk;
  ev.riskLabel = r.riskLabel;
  ev.changes = ev.changes.length ? ev.changes : c.changes;
  ev.isBaseline = false;
  ev._deltaKeys = deltaKeys.slice();
  return ev;
}

function diBuildBaselineRecord() {
  const raw = MOD_BASELINES[deltaInfState.baseline] || MOD_BASELINES.mistral;
  const base = evalModifierCandidate(cloneCandidate(raw), raw, deltaInfState.tp, deltaInfState.hardware, true);
  // Apply hardware + workload scaling identically to generateModifierRecords.
  const hwScale = hwModifierScale(deltaInfState.hardware);
  base.train_tps = raw.train_tps * hwScale.train;
  base.tbt_ms    = raw.tbt_ms    * hwScale.tbt;
  base.ttft_ms   = raw.ttft_ms   * hwScale.ttft;
  base.mem_gb    = raw.mem_gb    * hwScale.mem;
  base.kv_gb     = raw.kv_gb;
  const preset = MOD_WORKLOAD_PRESETS[deltaInfState.workloadPreset] || MOD_WORKLOAD_PRESETS.chat;
  base.mem_gb *= preset.mem;
  base.kv_gb  *= preset.kv;
  base.tbt_ms *= preset.tbt;
  base.changes = ["baseline"];
  base.isBaseline = true;
  base.qualityPreserving = true;
  base.moveClass = "baseline";
  base.workloadPreset = deltaInfState.workloadPreset;
  // Snap quality-vs-self to exactly zero. evalModifierCandidate can produce
  // tiny non-zero noise (~1e-6) on the baseline due to floating-point
  // param-count round-trip in capacityBoost; that noise blows up any later
  // Δ% division. The baseline-vs-baseline penalty is 0% by definition.
  base.qualityRiskPct = 0;
  return { raw, base };
}

function diScaleCandidate(ev) {
  // Apply the same hardware + workload scaling to a candidate that
  // diBuildBaselineRecord applies to the baseline. Mutates ev in place.
  const hwScale = hwModifierScale(deltaInfState.hardware);
  const preset = MOD_WORKLOAD_PRESETS[deltaInfState.workloadPreset] || MOD_WORKLOAD_PRESETS.chat;
  ev.train_tps = ev.train_tps * hwScale.train;
  ev.tbt_ms    = ev.tbt_ms    * hwScale.tbt    * preset.tbt;
  ev.ttft_ms   = ev.ttft_ms   * hwScale.ttft;
  ev.mem_gb    = ev.mem_gb    * hwScale.mem    * preset.mem;
  ev.kv_gb     = ev.kv_gb     * preset.kv;
  return ev;
}

function diRenderStatChip(label, value, sub) {
  return `<div class="stat">
    <div class="stat-val">${value}</div>
    <div class="stat-label">${label}</div>
    ${sub ? `<div style="font-size:10px;color:var(--text2);margin-top:2px;">${sub}</div>` : ""}
  </div>`;
}

function renderDeltaInfluence() {
  const host = document.getElementById("delta-influence");
  if (!host || !host.classList.contains("active")) {
    // Still render minimal stats so tab switch is instant.
  }

  const { raw, base } = diBuildBaselineRecord();
  const selectedKeys = deltaInfState.selectedDeltas.slice();

  // Build per-delta individual candidates (one delta each).
  const individuals = selectedKeys.map(key => {
    const ev = diBuildCandidateFromDeltas(raw, base, [key]);
    ev._deltaLabel = DELTA_LIBRARY[key].label;
    ev._deltaGroup = DELTA_LIBRARY[key].group;
    return ev;
  });

  // Build the combined candidate (all deltas stacked).
  let combined = null;
  if (selectedKeys.length > 1) {
    combined = diBuildCandidateFromDeltas(raw, base, selectedKeys);
    combined._deltaLabel = selectedKeys.map(k => DELTA_LIBRARY[k].label).join(" + ");
  } else if (selectedKeys.length === 1) {
    combined = individuals[0];
  }

  // Build a synthetic modifier frontier from baseline + every selected delta
  // (individual + combined) so the Pareto classifier has reference points.
  const frontierPool = [base, ...individuals];
  if (combined && combined !== individuals[0]) frontierPool.push(combined);
  const diFrontier = paretoFrontier(frontierPool, false);

  // ---- Top stat strip ----
  const statsHTML = [
    diRenderStatChip("Baseline", base.changes.length ? "Mistral-7B" : "—",
                      `${base.params_B}B · ${base.n_layers}L`),
    diRenderStatChip("Hardware", HW_INFO[deltaInfState.hardware].label,
                      `TP ${deltaInfState.tp}`),
    diRenderStatChip("Workload", (MOD_WORKLOAD_PRESETS[deltaInfState.workloadPreset] || {}).label || "—", ""),
    diRenderStatChip("Deltas picked", String(selectedKeys.length),
                      selectedKeys.length > 1 ? "combined evaluation" : selectedKeys.length === 1 ? "single delta" : "select at least one"),
  ].join("");
  document.getElementById("di-stats").innerHTML = statsHTML;

  // ---- Combined card ----
  const combinedHost = document.getElementById("di-combined-card");
  if (!combined) {
    combinedHost.innerHTML = `
      <h3 style="margin-bottom:4px;">Combined Delta Evaluation</h3>
      <p style="color:var(--text2);font-size:12px;line-height:1.5;">
        Pick one or more deltas from the library above to see how they move the baseline.
      </p>`;
  } else {
    combinedHost.innerHTML = `
      <h3 style="margin-bottom:10px;">Combined Delta Evaluation</h3>
      ${diInfluenceBodyHTML(base, combined, diFrontier)}`;
  }

  // ---- Individuals card (only when ≥ 2 deltas selected) ----
  const indHost = document.getElementById("di-individual-card");
  if (selectedKeys.length < 2) {
    indHost.innerHTML = "";
    indHost.style.display = "none";
  } else {
    indHost.style.display = "";
    const blocks = individuals.map((ev, idx) => {
      const group = DELTA_GROUPS[ev._deltaGroup] || { label: "delta", color: "var(--text2)" };
      return `
        <div style="border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:${idx === 0 ? 0 : 12}px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <div style="font-size:13px;font-weight:600;">
              <span style="color:${group.color};font-size:10px;text-transform:uppercase;letter-spacing:0.5px;margin-right:8px;">${group.label}</span>
              ${ev._deltaLabel}
            </div>
            <span class="badge">${(ev.riskLabel || "—").toUpperCase()}</span>
          </div>
          ${diInfluenceBodyHTML(base, ev, diFrontier, /*compact=*/true)}
        </div>`;
    }).join("");
    indHost.innerHTML = `
      <h3 style="margin-bottom:4px;">Per-Delta Breakdown</h3>
      <p style="color:var(--text2);font-size:12px;line-height:1.5;margin-bottom:12px;">
        Each selected delta is also evaluated alone for direct comparison. Stacking order matters
        for the combined card above; individual cards isolate each delta's contribution.
      </p>
      ${blocks}`;
  }
}

function diInfluenceBodyHTML(baseline, selected, frontier, compact) {
  // Reuse the same composition the inline Delta Influence card uses (metric
  // panel + stress + Pareto verdict). `compact` reduces padding for the
  // per-delta breakdown blocks.
  const baseStress = computeRecordStress(baseline, deltaInfState.hardware);
  const candStress = computeRecordStress(selected, deltaInfState.hardware);
  const binding = stressBindingAxes(baseStress);
  const stressAxes = ["hbm_bw_decode", "kv_footprint", "hbm_capacity", "training_mem"];
  const relieved = binding.filter(a => {
    const cb = stressBand(candStress[a]);
    return cb !== "pressured" && cb !== "binding" && cb !== "bottleneck";
  });
  const introduced = stressAxes.filter(a => {
    if (binding.includes(a)) return false;
    const cb = stressBand(candStress[a]);
    return cb === "pressured" || cb === "binding" || cb === "bottleneck";
  });
  let reliefScore = 0;
  for (const a of binding) reliefScore += Math.max(0, baseStress[a] - candStress[a]);
  for (const a of introduced) reliefScore -= 0.5 * candStress[a];

  const pos = _diClassifyParetoPosition(selected, baseline, frontier);
  const posInfo = DI_POSITION_PRETTY[pos.label] || { text: pos.label, color: "var(--text2)" };

  const metricsHTML = `
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr style="border-bottom:1px solid var(--border);">
          <th style="padding:4px 8px;text-align:left;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Metric</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Baseline</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Candidate</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Δ</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Δ%</th>
          <th style="padding:4px 8px;text-align:center;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Dir</th>
        </tr>
      </thead>
      <tbody>
        ${_diMetricRow("Predicted loss",   baseline.loss || 0,                             selected.loss || 0,                             "",       true,  v => v.toFixed(4))}
        ${_diMetricRow("Serving TBT",      baseline.tbt_ms || 0,                           selected.tbt_ms || 0,                           "ms",     true,  v => v.toFixed(2))}
        ${_diMetricRow("Training TPS",     baseline.train_tps || 0,                        selected.train_tps || 0,                        "tok/s", false, v => v.toFixed(0))}
        ${_diMetricRow("Memory / GPU",     baseline.mem_gb || 0,                           selected.mem_gb || 0,                           "GB",     true,  v => v.toFixed(2))}
        ${_diMetricRow("KV cache",         baseline.kv_gb || 0,                            selected.kv_gb || 0,                            "GB",     true,  v => v.toFixed(3))}
      </tbody>
    </table>`;

  // Stress mini-table (only axes that actually move)
  let stressRows = "";
  for (const axis of stressAxes) {
    const bv = baseStress[axis], cv = candStress[axis];
    if (Math.abs(bv) < 0.005 && Math.abs(cv) < 0.005) continue;
    const delta = cv - bv;
    const isImprove = delta < -0.005;
    const isWorse   = delta >  0.005;
    const cls = isImprove ? "delta-good" : isWorse ? "delta-bad" : "";
    const sign = isImprove ? "↓" : isWorse ? "↑" : "·";
    const baseBand = stressBand(bv), candBand = stressBand(cv);
    stressRows += `<tr>
      <td style="padding:4px 8px;color:var(--text2);font-size:12px;">${STRESS_AXIS_LABEL[axis]}</td>
      <td style="padding:4px 8px;text-align:right;font-size:12px;">${bv.toFixed(2)}</td>
      <td style="padding:4px 8px;text-align:right;font-size:12px;">${cv.toFixed(2)}</td>
      <td class="${cls}" style="padding:4px 8px;text-align:right;font-size:12px;">${(delta >= 0 ? "+" : "") + delta.toFixed(2)} ${sign}</td>
      <td style="padding:4px 8px;font-size:11px;"><span style="color:${stressBandColor(baseBand)};">${baseBand}</span> <span style="color:var(--text2);">→</span> <span style="color:${stressBandColor(candBand)};">${candBand}</span></td>
    </tr>`;
  }
  const stressTableHTML = stressRows ? `
    <table style="width:100%;border-collapse:collapse;margin-top:8px;">
      <thead>
        <tr style="border-bottom:1px solid var(--border);">
          <th style="padding:4px 8px;text-align:left;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Stress axis</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Baseline</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Candidate</th>
          <th style="padding:4px 8px;text-align:right;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Δ</th>
          <th style="padding:4px 8px;text-align:left;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;">Band</th>
        </tr>
      </thead>
      <tbody>${stressRows}</tbody>
    </table>` : `<p style="color:var(--text2);font-size:12px;margin-top:8px;">No measurable stress change on the 4 tracked axes.</p>`;

  const relievedHTML = relieved.length
    ? `<div style="margin-top:8px;font-size:12px;color:var(--text2);">
         <strong style="color:var(--accent2);">Relieved binding axes:</strong>
         ${relieved.map(a => `<code>${STRESS_AXIS_LABEL[a]}</code>`).join(", ")}
       </div>` : "";
  const introducedHTML = introduced.length
    ? `<div style="margin-top:6px;padding:6px 8px;border:1px solid #f59e0b40;background:#f59e0b10;border-radius:6px;font-size:12px;color:#f59e0b;">
         <strong>Watch:</strong> this delta newly pressures
         ${introduced.map(a => `<code>${STRESS_AXIS_LABEL[a]}</code>`).join(", ")}.
       </div>` : "";

  const distance = _diPositionDistanceText(pos);

  return `
    <div style="display:grid;grid-template-columns:${compact ? "1fr 1fr" : "1.4fr 1fr"};gap:${compact ? 16 : 24}px;align-items:start;">
      <div>
        <div style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Evaluation metrics</div>
        ${metricsHTML}
        <div style="margin-top:14px;font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Stress influence</div>
        ${stressTableHTML}
        ${relievedHTML}
        ${introducedHTML}
        <div style="margin-top:8px;font-size:12px;color:var(--text2);">
          <strong>Stress relief score:</strong>
          <span class="${reliefScore > 0.01 ? 'delta-good' : reliefScore < -0.01 ? 'delta-bad' : ''}">${(reliefScore >= 0 ? "+" : "") + reliefScore.toFixed(3)}</span>
        </div>
      </div>
      <div>
        <div style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Pareto verdict</div>
        <div style="padding:12px;border:1px solid ${posInfo.color}40;background:${posInfo.color}10;border-radius:8px;">
          <div style="font-size:14px;font-weight:600;color:${posInfo.color};margin-bottom:6px;">${posInfo.text}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.5;">${distance}.</div>
          <hr style="border:none;border-top:1px solid var(--border);margin:8px 0;">
          <div style="font-size:12px;color:var(--text2);display:flex;justify-content:space-between;">
            <span>Dominates</span><strong style="color:var(--text);">${pos.dominatesN} pts</strong>
          </div>
          <div style="font-size:12px;color:var(--text2);display:flex;justify-content:space-between;">
            <span>Dominated by</span><strong style="color:var(--text);">${pos.dominatedBy} pts</strong>
          </div>
          <div style="font-size:12px;color:var(--text2);display:flex;justify-content:space-between;">
            <span>Reference frontier</span><strong style="color:var(--text);">${pos.frontierSize}</strong>
          </div>
          <div style="margin-top:8px;font-size:11px;color:var(--text2);line-height:1.4;">
            Compared against the local heuristic reference set built from baseline + every selected delta.
          </div>
        </div>
      </div>
    </div>`;
}

// ======================
// Tab: Shadow Prices
// ======================
function _shadowSiblingAt2T(entry) {
  // Find the 2T-tokens entry with the same (hw, params, serving, context, arch).
  // Shadow prices are only computed for 2T cells; non-2T cells reuse them as
  // the closest anchor.
  if (!entry || typeof GRID === "undefined") return null;
  const wantCtx = entry.context_length || 8192;
  return GRID.find(g =>
    g.hw === entry.hw &&
    g.params_B === entry.params_B &&
    g.serving === entry.serving &&
    (g.context_length || 8192) === wantCtx &&
    (g.arch_mode || "dense") === (entry.arch_mode || "dense") &&
    g.tokens_T === 2.0 &&
    (g.arch_dim_prices || g.shadow_prices)
  ) || GRID.find(g =>
    g.hw === entry.hw &&
    g.params_B === entry.params_B &&
    g.serving === entry.serving &&
    g.tokens_T === 2.0 &&
    (g.arch_dim_prices || g.shadow_prices)
  );
}

function renderShadows(entry) {
  // Constraint perturbation section
  const cpContainer = document.getElementById("shadow-list");
  const cpSection = document.getElementById("shadow-constraint-section");

  // Source entry resolution: if the current cell has no shadow data, fall
  // back to the 2T sibling so the tab always shows something useful.
  let source = entry;
  let isFallback = false;
  const lacksSP = !source || !source.shadow_prices || !source.shadow_prices.length;
  const lacksADP = !source || !source.arch_dim_prices || !source.arch_dim_prices.length;
  if (entry && (lacksSP || lacksADP)) {
    const sib = _shadowSiblingAt2T(entry);
    if (sib && (sib.shadow_prices || sib.arch_dim_prices)) {
      source = sib;
      isFallback = (entry.tokens_T !== 2.0);
    }
  }

  const fallbackNote = isFallback ? `
    <p class="ctrl-note" style="margin:0 0 10px;padding:8px 10px;border:1px solid var(--border);border-radius:6px;background:rgba(255,255,255,0.02);">
      Shadow prices are computed for the 2T-token anchor of this
      (hardware, params, serving) cell. Showing the 2T data as the closest
      reference for ${entry.tokens_T}T tokens.
    </p>` : "";

  if (!source || !source.shadow_prices || !source.shadow_prices.length) {
    cpSection.style.display = "none";
  } else {
    cpSection.style.display = "block";
    cpContainer.innerHTML = fallbackNote;
    source.shadow_prices.forEach(sp => {
      const cls = sp.delta_pct < -0.01 ? "negative" : sp.delta_pct > 0.01 ? "positive" : "neutral";
      const sign = sp.delta_pct >= 0 ? "+" : "";
      cpContainer.innerHTML += `
        <div class="sp-item ${cls}">
          <div class="sp-desc">${sp.desc}</div>
          <div class="sp-delta" style="color:${cls === 'negative' ? 'var(--green)' : cls === 'positive' ? 'var(--red)' : 'var(--text2)'}">${sign}${sp.delta_pct}% predicted quality</div>
          <div class="sp-interp">${sp.interp}</div>
        </div>`;
    });
  }

  // Architecture dimension perturbation table
  const adpContainer = document.getElementById("arch-dim-table");
  if (!source || !source.arch_dim_prices || !source.arch_dim_prices.length) {
    adpContainer.innerHTML = `<p style="color:var(--text2);font-size:13px;padding:20px 0;">
      No shadow-price anchor available for this cell.
      Architecture-dimension shadow prices are computed for 2T-token configurations only;
      try a different (hardware, params, serving) combination.</p>`;
    return;
  }

  // Find max absolute values for bar scaling (read from the resolved source
  // entry — may be the 2T fallback rather than the user's current cell).
  const maxLoss = Math.max(...source.arch_dim_prices.map(p => Math.abs(p.delta_loss_pct)), 1);
  const maxTps = Math.max(...source.arch_dim_prices.map(p => Math.abs(p.delta_train_tps_pct)), 1);
  const maxTbt = Math.max(...source.arch_dim_prices.map(p => Math.abs(p.delta_tbt_pct)), 1);
  const maxMem = Math.max(...source.arch_dim_prices.map(p => Math.abs(p.delta_mem_pct)), 1);

  function deltaCell(val, maxVal, invert) {
    // invert: true means negative is good (e.g. TBT, memory)
    const pct = Math.min(Math.abs(val) / maxVal * 100, 100);
    const isGood = invert ? val < -0.01 : val > 0.01;
    const isBad = invert ? val > 0.01 : val < -0.01;
    const color = isGood ? "var(--green)" : isBad ? "var(--red)" : "var(--text2)";
    const barColor = isGood ? "rgba(52,211,153,0.3)" : isBad ? "rgba(248,113,113,0.3)" : "rgba(136,136,136,0.15)";
    const sign = val >= 0 ? "+" : "";
    return `<td style="text-align:right;position:relative;">
      <div style="position:absolute;right:0;top:0;bottom:0;width:${pct.toFixed(0)}%;background:${barColor};"></div>
      <span class="adp-val" style="position:relative;color:${color};">${sign}${val.toFixed(2)}%</span>
    </td>`;
  }

  let html = `<table class="adp-table">
    <thead><tr>
      <th>Perturbation</th>
      <th style="text-align:right;">Quality ΔL%</th>
      <th style="text-align:right;">Train TPS Δ%</th>
      <th style="text-align:right;">Decode TBT Δ%</th>
      <th style="text-align:right;">Memory Δ%</th>
      <th>Verdict</th>
      <th>Reason</th>
    </tr></thead><tbody>`;

  source.arch_dim_prices.forEach(p => {
    html += `<tr>
      <td style="font-weight:500;">${p.change}</td>
      ${deltaCell(p.delta_loss_pct, maxLoss, false)}
      ${deltaCell(p.delta_train_tps_pct, maxTps, false)}
      ${deltaCell(p.delta_tbt_pct, maxTbt, true)}
      ${deltaCell(p.delta_mem_pct, maxMem, true)}
      <td><span class="adp-badge ${p.decision}">${p.decision}</span></td>
      <td style="font-size:11px;color:var(--text2);max-width:200px;">${p.reason}</td>
    </tr>`;
  });

  html += `</tbody></table>`;
  // Prepend the fallback note (if any) so it appears above the table.
  adpContainer.innerHTML = (isFallback ? fallbackNote : "") + html;
}

// ======================
// Tab: Justification
// ======================
function renderJustification(entry) {
  const container = document.getElementById("justification-content");
  if (!entry || !entry.justification) {
    container.innerHTML = `<p style="color:var(--text2);">Justification is generated for 2T token configurations. Select 2T tokens to see it.</p>`;
    return;
  }
  // Simple markdown → HTML
  let md = entry.justification;
  md = md.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  md = md.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  md = md.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  md = md.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  md = md.replace(/\*(.+?)\*/g, '<em>$1</em>');
  md = md.replace(/^- (.+)$/gm, '<li>$1</li>');
  md = md.replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`);
  md = md.replace(/\n\n/g, '<br><br>');
  container.innerHTML = md;
}

// ======================
// Tab: Cross-Hardware
// ======================
function renderCompare() {
  const cards = document.getElementById("compare-cards");
  cards.innerHTML = "";
  const hwKeys = Object.keys(HW_INFO);
  const groups = [];

  hwKeys.forEach(hw => {
    const entry = lookup(hw, state.params, state.tokens, state.serving);
    const info = HW_INFO[hw];
    if (!entry || !entry.optimal) {
      cards.innerHTML += `<div class="card"><h3>${info.label}</h3><p style="color:var(--text2);font-size:13px;">No feasible solution</p></div>`;
      groups.push({ label: info.label.split(" ").pop(), loss: 0, tps: 0, tbt: 0 });
      return;
    }
    const o = entry.optimal;
    const isActive = hw === state.hw;
    cards.innerHTML += `
      <div class="card" style="${isActive ? 'border-color:var(--accent);' : ''}">
        <h3>${info.label} ${isActive ? '<span style="color:var(--accent2);font-size:11px;">← selected</span>' : ''}</h3>
        <div class="metric"><span class="label">d_model × L</span><span class="val">${o.d_model} × ${o.n_layers}</span></div>
        <div class="metric"><span class="label">Params</span><span class="val">${fmtParamCount(o.params_B)}</span></div>
        <div class="metric"><span class="label">Loss</span><span class="val">${o.loss}</span></div>
        <div class="metric"><span class="label">Training TPS</span><span class="val">${fmtN(o.train_tps)}</span></div>
        <div class="metric"><span class="label">Serving TBT</span><span class="val">${o.tbt_ms}ms</span></div>
        <div class="metric"><span class="label">Memory</span><span class="val">${o.mem_gb}GB</span></div>
        <div class="metric"><span class="label">Feasible</span><span class="val">${entry.feasible}</span></div>
      </div>`;
    groups.push({
      label: info.label.split(" ").pop(),
      loss: o.loss, tps: o.train_tps / 1000, tbt: o.tbt_ms,
    });
  });

  drawGroupedBars("compare-chart", groups, {
    metrics: [
      { key: "tps", color: "#60a5fa" },
      { key: "tbt", color: "#fb923c" },
    ],
    yLabel: "TPS (k) / TBT (ms)", dec: 1, height: 300,
  });
}

// ======================
// Tile Lattice tab — lazy init
// ======================
// All computation is client-side. lattice_data.json is fetched in the
// background on first activation so the precomputed grid is available
// for any future enhancements (current panels recompute on demand from
// the JS HARDWARE table).
let _tileLatticeInited = false;
let _tileLatticeData = null;
function initTileLatticeOnce() {
  if (_tileLatticeInited) return;
  _tileLatticeInited = true;

  const banner = document.getElementById("tl-loading-banner");
  if (banner) banner.style.display = "block";

  // Deploy build is self-contained; lattice JSON is optional and omitted.
  _tileLatticeData = null;
  if (banner) banner.style.display = "none";

  // =============================================================================
  // HARDWARE SPECS
  // =============================================================================
  const HARDWARE = {
    h100: {
      name: "NVIDIA H100 SXM", n_sms: 132, sram_per_sm: 228*1024,
      tiles: {
        tf32: {inst:[16,8,8], cta:[64,64,8]},
        bf16: {inst:[16,8,16], cta:[64,64,64]},
        fp8:  {inst:[16,8,32], cta:[64,64,128]},
        int8: {inst:[16,8,32], cta:[64,64,128]},
      }
    },
    b200: {
      name: "NVIDIA B200", n_sms: 160, sram_per_sm: 256*1024,
      tiles: {
        bf16: {inst:[16,8,16], cta:[128,128,64]},
        fp8:  {inst:[16,8,32], cta:[128,128,128]},
        int8: {inst:[16,8,32], cta:[128,128,128]},
        fp4:  {inst:[16,8,64], cta:[128,128,256]},
      }
    },
    tpu_v5e: {
      name: "Google TPU v5e", n_sms: 1, sram_per_sm: 32*1024*1024,
      tiles: {
        bf16: {inst:[128,128,128], cta:[128,128,128]},
        int8: {inst:[128,128,128], cta:[128,128,128]},
      }
    }
  };

  const KNOWN_ARCHS = [
    {name:"Llama-2-7B",  d:4096, dh:128, nh:32, ffn:11008, nl:32},
    {name:"Llama-2-13B", d:5120, dh:128, nh:40, ffn:13824, nl:40},
    {name:"Llama-2-70B", d:8192, dh:128, nh:64, ffn:28672, nl:80},
    {name:"Llama-3-8B",  d:4096, dh:128, nh:32, ffn:14336, nl:32},
    {name:"Llama-3-70B", d:8192, dh:128, nh:64, ffn:28672, nl:80},
    {name:"Mistral-7B",  d:4096, dh:128, nh:32, ffn:14336, nl:32},
    {name:"Gemma-2-9B",  d:3584, dh:256, nh:16, ffn:14336, nl:42},
    {name:"Qwen-2-7B",   d:3584, dh:128, nh:28, ffn:18944, nl:28},
    {name:"DeepSeek-V2-Lite", d:2048, dh:128, nh:16, ffn:10944, nl:27},
    {name:"Phi-3-mini",  d:3072, dh:96,  nh:32, ffn:8192,  nl:32},
  ];

  // =============================================================================
  // MATH UTILITIES
  // =============================================================================
  function gcd(a,b){while(b){[a,b]=[b,a%b]}return a}
  function lcm(a,b){return(a/gcd(a,b))*b}
  function ceilDiv(a,b){return Math.ceil(a/b)}
  function roundUp(v,m){return ceilDiv(v,m)*m}
  function roundNearest(v,m){const l=Math.floor(v/m)*m;return(v-l)<=(l+m-v)?l:l+m}
  function tileUtil(dim,tile){if(dim<=0)return 0;return dim/(ceilDiv(dim,tile)*tile)}
  function matmulUtil(M,N,K,cta){return tileUtil(M,cta[0])*tileUtil(N,cta[1])*tileUtil(K,cta[2])}
  function waveEff(M,N,cta,nSMs){
    if(nSMs<=1)return 1;
    const tiles=ceilDiv(M,cta[0])*ceilDiv(N,cta[1]);
    if(tiles===0)return 0;
    const waves=ceilDiv(tiles,nSMs);
    return tiles/(waves*nSMs);
  }
  function harmonicMean(arr){
    const valid=arr.filter(v=>v>0);
    if(!valid.length)return 0;
    return valid.length/valid.reduce((s,v)=>s+1/v,0);
  }

  // =============================================================================
  // LATTICE COMPUTATION
  // =============================================================================
  function computeLattice(hwKey, prec, tp, dMin=1024, dMax=16384, dheadFilter=0){
    const hw=HARDWARE[hwKey];
    if(!hw.tiles[prec])return[];
    const t=hw.tiles[prec];
    const cta=t.cta, inst=t.inst;
    const dheadOpts=dheadFilter>0?[dheadFilter]:[32,64,96,128,256];
    const stride=lcm(lcm(cta[2],cta[1]),tp);
    const results=[];
    for(let dm=roundUp(dMin,stride);dm<=dMax;dm+=stride){
      for(const dh of dheadOpts){
        if(dh%inst[2]!==0||dh%inst[1]!==0)continue;
        if(dm%dh!==0)continue;
        const nh=dm/dh;
        if(nh%tp!==0)continue;
        const hpg=nh/tp;
        const qkvN=3*dh*hpg;
        const qkvOk=qkvN%cta[1]===0;
        const attnKOk=dh%cta[2]===0||dh%inst[2]===0;
        const attnNOk=dh%cta[1]===0||dh%inst[1]===0;
        const outK=dh*hpg;
        const outKOk=outK%cta[2]===0;
        const ffnStride=lcm(cta[1],tp);
        let ffnSwiglu=roundNearest(Math.round(dm*8/3),ffnStride);
        if(ffnSwiglu<ffnStride)ffnSwiglu=ffnStride;
        let ffnDense=roundNearest(dm*4,ffnStride);
        if(ffnDense<ffnStride)ffnDense=ffnStride;
        const fpg=ffnSwiglu/tp;
        const ffnNOk=fpg%cta[1]===0;
        const ffnKOk=fpg%cta[2]===0;
        const aligned=dm%cta[2]===0&&dm%cta[1]===0&&qkvOk&&attnKOk&&attnNOk&&outKOk&&ffnNOk&&ffnKOk;
        const M1=2048,M2=8192;
        const uQKV=matmulUtil(M1,qkvN,dm,cta);
        const uAttn=tileUtil(dh,cta[2])*tileUtil(dh,cta[1]);
        const uFFNUp=matmulUtil(M1,fpg,dm,cta);
        const uFFNDn=matmulUtil(M1,dm,fpg,cta);
        const uFFN=Math.sqrt(uFFNUp*uFFNDn);
        const hm=harmonicMean([uQKV,uAttn,uFFN]);
        const w2k=waveEff(M1,fpg,cta,hw.n_sms);
        const w8k=waveEff(M2,fpg,cta,hw.n_sms);
        results.push({d_model:dm,d_head:dh,n_heads:nh,ffn_swiglu:ffnSwiglu,ffn_dense:ffnDense,
          aligned,util_qkv:uQKV,util_attn:uAttn,util_ffn:uFFN,util_h:hm,wave_2k:w2k,wave_8k:w8k});
      }
    }
    return results;
  }

  // =============================================================================
  // UI HELPERS
  // =============================================================================
  function precOptions(hwKey){return Object.keys(HARDWARE[hwKey].tiles)}
  function populatePrec(hwSel, precSel, defaultPrec='bf16'){
    const opts=precOptions(hwSel.value);
    precSel.innerHTML=opts.map(p=>`<option value="${p}"${p===defaultPrec?' selected':''}>${p.toUpperCase()}</option>`).join('');
  }
  function utilBar(v){
    const pct=Math.round(v*100);
    const cls=pct>=95?'tl-util-high':pct>=80?'tl-util-mid':'tl-util-low';
    return `<span class="tl-util-bar ${cls}" style="width:${Math.max(4,pct*0.6)}px"></span>${pct}%`;
  }
  function alignBadge(ok){return ok?'<span class="tl-badge tl-badge-ok">✓</span>':'<span class="tl-badge tl-badge-err">✗</span>'}
  function checkBadge(v,t){const r=v%t;return r===0?'<span class="tl-badge tl-badge-ok">0</span>':`<span class="tl-badge tl-badge-err">${r}</span>`}

  let sortState={col:-1,asc:true};

  // =============================================================================
  // SUB-TAB NAVIGATION (scoped to #tile-lattice .tl-tab)
  // =============================================================================
  document.querySelectorAll('#tile-lattice .tl-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('#tile-lattice .tl-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('#tile-lattice .tl-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tlPanel).classList.add('active');
    });
  });

  // =============================================================================
  // LATTICE BROWSER
  // =============================================================================
  const lbHw=document.getElementById('lb-hw');
  const lbPrec=document.getElementById('lb-prec');
  const lbTp=document.getElementById('lb-tp');
  const lbDhead=document.getElementById('lb-dhead');
  const lbAligned=document.getElementById('lb-aligned');
  const lbDmin=document.getElementById('lb-dmin');
  const lbDmax=document.getElementById('lb-dmax');
  let lbData=[];
  function renderLBRows(){
    document.getElementById('lb-tbody').innerHTML=lbData.map(p=>`<tr>
      <td>${p.d_model}</td><td>${p.d_head}</td><td>${p.n_heads}</td>
      <td>${p.ffn_swiglu}</td><td>${p.ffn_dense}</td>
      <td>${alignBadge(p.aligned)}</td>
      <td>${utilBar(p.util_qkv)}</td><td>${utilBar(p.util_attn)}</td>
      <td>${utilBar(p.util_ffn)}</td><td>${utilBar(p.util_h)}</td>
      <td>${utilBar(p.wave_2k)}</td><td>${utilBar(p.wave_8k)}</td>
    </tr>`).join('');
  }
  function sortLB(col){
    const keys=['d_model','d_head','n_heads','ffn_swiglu','ffn_dense','aligned','util_qkv','util_attn','util_ffn','util_h','wave_2k','wave_8k'];
    const k=keys[col];
    if(sortState.col===col)sortState.asc=!sortState.asc;
    else{sortState.col=col;sortState.asc=true;}
    lbData.sort((a,b)=>{
      const va=typeof a[k]==='boolean'?+a[k]:a[k];
      const vb=typeof b[k]==='boolean'?+b[k]:b[k];
      return sortState.asc?va-vb:vb-va;
    });
    renderLBRows();
  }
  window._tlSortLB = sortLB;
  function renderLB(){
    const hw=lbHw.value, prec=lbPrec.value, tp=+lbTp.value;
    const dh=+lbDhead.value, onlyAligned=+lbAligned.value;
    const dmin=+lbDmin.value, dmax=+lbDmax.value;
    let pts=computeLattice(hw,prec,tp,dmin,dmax,dh);
    if(onlyAligned) pts=pts.filter(p=>p.aligned);
    lbData=pts;
    const tile=HARDWARE[hw].tiles[prec];
    const stride=lcm(lcm(tile.cta[2],tile.cta[1]),tp);
    const alignedCount=pts.filter(p=>p.aligned).length;
    document.getElementById('lb-stats').innerHTML=`
      <div class="tl-stat"><div class="val">${pts.length}</div><div class="lbl">Configurations</div></div>
      <div class="tl-stat"><div class="val">${alignedCount}</div><div class="lbl">Fully aligned</div></div>
      <div class="tl-stat"><div class="val">${stride}</div><div class="lbl">d_model stride</div></div>
      <div class="tl-stat"><div class="val">${tile.cta.join('×')}</div><div class="lbl">CTA tile (M×N×K)</div></div>
      <div class="tl-stat"><div class="val">${HARDWARE[hw].n_sms}</div><div class="lbl">${hw==='tpu_v5e'?'MXU':'SMs'}</div></div>
    `;
    const cols=['d_model','d_head','n_heads','FFN (SwiGLU)','FFN (Dense)','Aligned','Util QKV','Util Attn','Util FFN','Util (H.Mean)','Wave @2K','Wave @8K'];
    document.getElementById('lb-thead').innerHTML=cols.map((c,i)=>`<th onclick="_tlSortLB(${i})">${c}</th>`).join('');
    renderLBRows();
  }
  populatePrec(lbHw,lbPrec);
  lbHw.onchange=()=>{populatePrec(lbHw,lbPrec);renderLB()};
  [lbPrec,lbTp,lbDhead,lbAligned,lbDmin,lbDmax].forEach(el=>el.onchange=renderLB);
  renderLB();

  // =============================================================================
  // CONFIG CALCULATOR
  // =============================================================================
  const ccHw=document.getElementById('cc-hw');
  const ccPrec=document.getElementById('cc-prec');
  populatePrec(ccHw,ccPrec);
  ccHw.onchange=()=>populatePrec(ccHw,ccPrec);
  window.runCalculator = function(){
    const hw=ccHw.value, prec=ccPrec.value, tp=+document.getElementById('cc-tp').value;
    const targetB=+document.getElementById('cc-params').value;
    const dh=+document.getElementById('cc-dhead').value;
    const ffnType=document.getElementById('cc-ffn').value;
    const gqaRatio=+document.getElementById('cc-gqa').value;
    const vocab=+document.getElementById('cc-vocab').value;
    const minL=+document.getElementById('cc-minl').value||4;
    const maxL=+document.getElementById('cc-maxl').value||200;
    const target=targetB*1e9;
    const pts=computeLattice(hw,prec,tp,1024,16384,dh).filter(p=>p.aligned);
    const configs=[];
    for(const p of pts){
      const ffn=ffnType==='swiglu'?p.ffn_swiglu:p.ffn_dense;
      let nkv=p.n_heads;
      if(gqaRatio>1){
        nkv=Math.floor(p.n_heads/gqaRatio);
        if(nkv<1)continue;
        if(p.n_heads%gqaRatio!==0)continue;
        if(nkv<tp&&nkv!==1)continue;
      }
      const qp=p.d_model*dh*p.n_heads;
      const kvp=2*p.d_model*dh*nkv;
      const op=dh*p.n_heads*p.d_model;
      const fp=3*p.d_model*ffn;
      const perLayer=qp+kvp+op+fp;
      const embed=2*vocab*p.d_model;
      if(perLayer<=0)continue;
      const nlRaw=(target-embed)/perLayer;
      const nl=Math.max(1,Math.round(nlRaw));
      if(nl<minL||nl>maxL)continue;
      const actual=perLayer*nl+embed+2*p.d_model*nl;
      const paramsB=actual/1e9;
      const pRatio=Math.min(paramsB,targetB)/Math.max(paramsB,targetB);
      const score=0.50*p.util_h+0.15*p.wave_2k+0.10*p.wave_8k+0.25*pRatio;
      configs.push({d_model:p.d_model,n_heads:p.n_heads,d_head:dh,ffn,nkv,nl,
        paramsB:Math.round(paramsB*100)/100,util:p.util_h,w2k:p.wave_2k,w8k:p.wave_8k,
        score:Math.round(score*10000)/10000});
    }
    configs.sort((a,b)=>b.score-a.score);
    const top=configs.slice(0,20);
    document.getElementById('cc-tbody').innerHTML=top.map((c,i)=>`<tr>
      <td>${i+1}</td><td>${c.d_model}</td><td>${c.n_heads}</td><td>${c.d_head}</td>
      <td>${c.ffn}</td><td>${c.nkv}</td><td>${c.nl}</td><td>${c.paramsB}</td>
      <td>${utilBar(c.util)}</td><td>${utilBar(c.w2k)}</td><td>${utilBar(c.w8k)}</td>
      <td><strong>${c.score.toFixed(4)}</strong></td>
    </tr>`).join('')||'<tr><td colspan="12" class="tl-empty">No valid configurations found</td></tr>';
  };

  // =============================================================================
  // GQA CONFIGS
  // =============================================================================
  const gqaHw=document.getElementById('gqa-hw');
  const gqaPrec=document.getElementById('gqa-prec');
  const gqaDmodel=document.getElementById('gqa-dmodel');
  function populateGQADmodel(){
    const hw=gqaHw.value, prec=gqaPrec.value, tp=+document.getElementById('gqa-tp').value;
    const dh=+document.getElementById('gqa-dhead').value;
    const pts=computeLattice(hw,prec,tp,1024,16384,dh).filter(p=>p.aligned);
    const dms=[...new Set(pts.map(p=>p.d_model))].sort((a,b)=>a-b);
    gqaDmodel.innerHTML=dms.map(d=>`<option value="${d}">${d}</option>`).join('');
  }
  populatePrec(gqaHw,gqaPrec);
  populateGQADmodel();
  gqaHw.onchange=()=>{populatePrec(gqaHw,gqaPrec);populateGQADmodel()};
  gqaPrec.onchange=populateGQADmodel;
  document.getElementById('gqa-tp').onchange=populateGQADmodel;
  document.getElementById('gqa-dhead').onchange=populateGQADmodel;
  window.runGQA = function(){
    const hw=gqaHw.value, prec=gqaPrec.value, tp=+document.getElementById('gqa-tp').value;
    const dm=+gqaDmodel.value, dh=+document.getElementById('gqa-dhead').value;
    if(!dm||dm%dh!==0)return;
    const nh=dm/dh;
    const tile=HARDWARE[hw].tiles[prec];
    const cta=tile.cta;
    const rows=[];
    for(let nkv=1;nkv<=nh;nkv++){
      if(nh%nkv!==0)continue;
      let kvPerGPU;
      if(nkv>=tp){if(nkv%tp!==0)continue;kvPerGPU=nkv/tp;} else {kvPerGPU=1;}
      const kvProj=2*dh*kvPerGPU;
      const aligned=kvProj%cta[1]===0||kvProj%tile.inst[1]===0;
      rows.push({nh,nkv,ratio:nh/nkv,kvProj,aligned});
    }
    document.getElementById('gqa-tbody').innerHTML=rows.map(r=>`<tr>
      <td>${r.nh}</td><td>${r.nkv}</td><td>${r.ratio}:1</td>
      <td>${r.kvProj}</td><td>${alignBadge(r.aligned)}</td>
    </tr>`).join('');
  };

  // =============================================================================
  // MoE SIZING
  // =============================================================================
  const moeHw=document.getElementById('moe-hw');
  const moePrec=document.getElementById('moe-prec');
  populatePrec(moeHw,moePrec);
  moeHw.onchange=()=>populatePrec(moeHw,moePrec);
  window.runMoE = function(){
    const hw=moeHw.value, prec=moePrec.value;
    const dm=+document.getElementById('moe-dmodel').value;
    const tile=HARDWARE[hw].tiles[prec];
    const cta=tile.cta;
    const expertCounts=[8,16,32,64,128,256];
    const rows=[];
    for(const ne of expertCounts){
      let raw=Math.round(dm*8/3/ne);
      if(raw<cta[1])raw=cta[1];
      const eff=roundNearest(raw,cta[1]);
      const aligned=eff%cta[1]===0;
      rows.push({ne,eff,total:eff*ne,aligned});
    }
    document.getElementById('moe-tbody').innerHTML=rows.map(r=>`<tr>
      <td>${r.ne}</td><td>${r.eff}</td><td>${r.total}</td><td>${alignBadge(r.aligned)}</td>
    </tr>`).join('');
  };

  // =============================================================================
  // STATE DIMS
  // =============================================================================
  const stHw=document.getElementById('st-hw');
  const stPrec=document.getElementById('st-prec');
  populatePrec(stHw,stPrec);
  stHw.onchange=()=>populatePrec(stHw,stPrec);
  window.runState = function(){
    const hw=stHw.value, prec=stPrec.value;
    const maxDs=+document.getElementById('st-max').value;
    const tile=HARDWARE[hw].tiles[prec];
    const cta=tile.cta;
    const bpe=prec==='fp8'||prec==='int8'||prec==='fp4'?1:2;
    const dheads=[64,128];
    const rows=[];
    for(let ds=cta[1];ds<=maxDs;ds+=cta[1]){
      if(ds%cta[1]!==0)continue;
      for(const dh of dheads){
        if(dh%cta[2]!==0&&dh%tile.inst[2]!==0)continue;
        rows.push({ds,dh,sram:ds*dh*bpe,aligned:true});
      }
    }
    document.getElementById('st-tbody').innerHTML=rows.map(r=>`<tr>
      <td>${r.ds}</td><td>${r.dh}</td><td>${r.sram.toLocaleString()}</td><td>${alignBadge(r.aligned)}</td>
    </tr>`).join('');
  };

  // =============================================================================
  // CROSS-PRECISION
  // =============================================================================
  const xpHw=document.getElementById('xp-hw');
  const xpPa=document.getElementById('xp-pa');
  const xpPb=document.getElementById('xp-pb');
  function initCrossSel(){
    const precs=precOptions(xpHw.value);
    xpPa.innerHTML=precs.map((p,i)=>`<option value="${p}"${i===0?' selected':''}>${p.toUpperCase()}</option>`).join('');
    xpPb.innerHTML=precs.map((p,i)=>`<option value="${p}"${i===1?' selected':''}>${p.toUpperCase()}</option>`).join('');
  }
  initCrossSel();
  xpHw.onchange=initCrossSel;
  window.runCross = function(){
    const hw=xpHw.value, pa=xpPa.value, pb=xpPb.value, tp=+document.getElementById('xp-tp').value;
    const tA=HARDWARE[hw].tiles[pa], tB=HARDWARE[hw].tiles[pb];
    if(!tA||!tB){document.getElementById('xp-results').innerHTML='<p>Precision not available</p>';return;}
    const strideA=lcm(lcm(tA.cta[2],tA.cta[1]),tp);
    const strideB=lcm(lcm(tB.cta[2],tB.cta[1]),tp);
    const combined=lcm(strideA,strideB);
    const dms=[];for(let d=roundUp(1024,combined);d<=16384;d+=combined)dms.push(d);
    const dmsA=[];for(let d=roundUp(1024,strideA);d<=16384;d+=strideA)dmsA.push(d);
    const dmsB=[];for(let d=roundUp(1024,strideB);d<=16384;d+=strideB)dmsB.push(d);
    document.getElementById('xp-results').innerHTML=`
      <div class="tl-stats" style="margin-top:8px">
        <div class="tl-stat"><div class="val">${strideA}</div><div class="lbl">${pa.toUpperCase()} stride</div></div>
        <div class="tl-stat"><div class="val">${strideB}</div><div class="lbl">${pb.toUpperCase()} stride</div></div>
        <div class="tl-stat"><div class="val">${combined}</div><div class="lbl">Intersection stride</div></div>
        <div class="tl-stat"><div class="val">${dmsA.length}</div><div class="lbl">${pa.toUpperCase()} d_model count</div></div>
        <div class="tl-stat"><div class="val">${dmsB.length}</div><div class="lbl">${pb.toUpperCase()} d_model count</div></div>
        <div class="tl-stat"><div class="val">${dms.length}</div><div class="lbl">Intersection count</div></div>
      </div>
      <h3 style="font-size:13px;margin:16px 0 6px;color:var(--text2);">Intersection d_model values (valid for both ${pa.toUpperCase()} and ${pb.toUpperCase()} at TP=${tp})</h3>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        ${dms.map(d=>`<span style="background:var(--surface2);padding:3px 9px;border-radius:4px;font-size:11px;font-variant-numeric:tabular-nums">${d}</span>`).join('')}
      </div>
      ${dms.length===0?'<p style="margin-top:10px;color:var(--text2);font-size:12px;">No valid d_model values in [1024, 16384] — this combination is very constrained.</p>':''}
      <h3 style="font-size:13px;margin:16px 0 4px;color:var(--text2);">Cross-precision K-dimension constraint</h3>
      <p style="font-size:12px;color:var(--text2);">${pa.toUpperCase()} CTA K = ${tA.cta[2]}, ${pb.toUpperCase()} CTA K = ${tB.cta[2]} → d_model must be multiple of lcm(${tA.cta[2]}, ${tB.cta[2]}) = <strong>${lcm(tA.cta[2],tB.cta[2])}</strong></p>
      <h3 style="font-size:13px;margin:12px 0 4px;color:var(--text2);">Cross-precision N-dimension constraint</h3>
      <p style="font-size:12px;color:var(--text2);">${pa.toUpperCase()} CTA N = ${tA.cta[1]}, ${pb.toUpperCase()} CTA N = ${tB.cta[1]} → FFN/head dims must be multiple of lcm(${tA.cta[1]}, ${tB.cta[1]}) = <strong>${lcm(tA.cta[1],tB.cta[1])}</strong></p>
    `;
  };

  // =============================================================================
  // VALIDATION
  // =============================================================================
  const valHw=document.getElementById('val-hw');
  const valPrec=document.getElementById('val-prec');
  populatePrec(valHw,valPrec);
  valHw.onchange=()=>populatePrec(valHw,valPrec);
  window.runValidation = function(){
    const hw=valHw.value, prec=valPrec.value;
    const tile=HARDWARE[hw].tiles[prec];
    if(!tile)return;
    const cta=tile.cta;
    document.getElementById('val-tbody').innerHTML=KNOWN_ARCHS.map(a=>{
      const ck=a.d%cta[2], cn=a.d%cta[1], dhk=a.dh%cta[2], dhn=a.dh%cta[1], fn=a.ffn%cta[1];
      const ok=ck===0&&cn===0&&dhk===0&&dhn===0&&fn===0;
      const instOk=(a.d%tile.inst[2]===0)&&(a.d%tile.inst[1]===0)&&
                   (a.dh%tile.inst[2]===0)&&(a.dh%tile.inst[1]===0)&&
                   (a.ffn%tile.inst[1]===0);
      const status=ok?'<span class="tl-badge tl-badge-ok">CTA ✓</span>':
                   instOk?'<span class="tl-badge tl-badge-warn">Inst only</span>':
                   '<span class="tl-badge tl-badge-err">Misaligned</span>';
      return `<tr>
        <td><strong>${a.name}</strong></td><td>${a.d}</td><td>${a.dh}</td><td>${a.nh}</td><td>${a.ffn}</td><td>${a.nl}</td>
        <td>${checkBadge(a.d,cta[2])}</td><td>${checkBadge(a.d,cta[1])}</td>
        <td>${checkBadge(a.dh,cta[2])}</td><td>${checkBadge(a.dh,cta[1])}</td>
        <td>${checkBadge(a.ffn,cta[1])}</td><td>${status}</td>
      </tr>`;
    }).join('');
  };
  window.runValidation();
}

// ======================
// Throughput tab — lazy init
// ======================
let _throughputInited = false;
let _throughputData = null;
let _tpSelectedHw = 'h100';
let _tpCurrentTab = 'comparison';
function initThroughputOnce() {
  if (_throughputInited) return;
  _throughputInited = true;

  const banner = document.getElementById("tp-loading-banner");
  if (banner) banner.style.display = "block";

  function tpFmt(n, decimals=0) {
    if (n === undefined || n === null) return '—';
    return n.toLocaleString(undefined, {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
  }
  function tpBadgeClass(b) { return 'tp-badge tp-badge-' + b; }
  function tpGetResults(filters) {
    return _throughputData.results.filter(r => {
      for (const [k, v] of Object.entries(filters)) {
        if (r[k] !== undefined && r[k] != v) return false;
      }
      return true;
    });
  }

  function tpInitControls() {
    const sel = document.getElementById('tp-sel-arch');
    sel.innerHTML = '';
    Object.keys(_throughputData.architectures).forEach(name => {
      const opt = document.createElement('option');
      opt.value = name; opt.textContent = name;
      sel.appendChild(opt);
    });
    if (_throughputData.architectures['Llama-3-8B']) sel.value = 'Llama-3-8B';
  }

  // Sub-tab nav (scoped)
  document.querySelectorAll('#throughput .tp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#throughput .tp-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('#throughput .tp-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panelId = tab.dataset.tpPanel;
      document.getElementById(panelId).classList.add('active');
      // panel id is "tp-tab-<name>" — strip prefix
      _tpCurrentTab = panelId.replace(/^tp-tab-/, '');
      tpUpdate();
    });
  });

  ['tp-sel-arch','tp-sel-batch','tp-sel-kv','tp-sel-hw-breakdown'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.onchange = tpUpdate;
  });

  function tpUpdate() {
    if (!_throughputData) return;
    const arch = document.getElementById('tp-sel-arch').value;
    const batch = parseInt(document.getElementById('tp-sel-batch').value);
    const kvLen = parseInt(document.getElementById('tp-sel-kv').value);
    if (_tpCurrentTab === 'comparison') tpUpdateComparison(arch, batch);
    if (_tpCurrentTab === 'breakdown') tpUpdateBreakdown(arch, batch);
    if (_tpCurrentTab === 'decode') tpUpdateDecode(arch, kvLen);
    if (_tpCurrentTab === 'validation') tpUpdateValidation();
  }

  function tpUpdateComparison(arch, batch) {
    const hwCards = document.getElementById('tp-hw-cards');
    hwCards.innerHTML = '';
    // v1-fix Trainium: include Trn2/Trn3 in cross-hardware comparison.
    const hws = ['h100', 'b200', 'tpu_v5e', 'tpu_v5p', 'trainium2', 'trainium3'];
    hws.forEach(hw => {
      const spec = _throughputData.hardware_specs[hw];
      if (!spec) return;
      const div = document.createElement('div');
      div.className = 'tp-hw-card' + (hw === _tpSelectedHw ? ' selected' : '');
      div.innerHTML = `
        <div class="hw-name">${spec.name}</div>
        <div class="hw-stat">HBM: ${spec.hbm_gb} GB @ ${spec.hbm_bw_tb_s} TB/s</div>
        <div class="hw-stat">BF16: ${spec.peak_bf16_tf} TFLOP/s</div>
        <div class="hw-stat">${spec.interconnect_type.toUpperCase()}: ${spec.interconnect_bw_gb_s} GB/s</div>
      `;
      div.onclick = () => { _tpSelectedHw = hw; tpUpdate(); };
      hwCards.appendChild(div);
    });

    const tbody = document.querySelector('#tp-comparison-table tbody');
    tbody.innerHTML = '';
    hws.forEach(hw => {
      const results = tpGetResults({arch, hardware: hw, batch, seq_len: 2048, _type: undefined});
      const r = results.find(x => !x._type) || results[0];
      if (!r) return;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${_throughputData.hardware_specs[hw].name}</strong></td>
        <td>${tpFmt(r.training_tok_s)}</td>
        <td>${tpFmt(r.prefill_ms, 1)}</td>
        <td>${tpFmt(r.decode_tok_s)}</td>
        <td>${tpFmt(r.memory_gb, 1)}</td>
        <td><span class="${tpBadgeClass(r.bottleneck)}">${r.bottleneck}</span></td>
      `;
      tbody.appendChild(tr);
    });

    const selHw = _tpSelectedHw;
    const hwLabel = _throughputData.hardware_specs[selHw]?.name || selHw;
    document.getElementById('tp-train-bars-title').textContent = `Training Throughput by Architecture (${hwLabel})`;
    document.getElementById('tp-tbt-bars-title').textContent = `Inference TBT by Architecture (${hwLabel})`;
    document.getElementById('tp-ttft-bars-title').textContent = `Inference TTFT by Architecture (${hwLabel})`;

    function renderBars(containerId, valueKey, unit, decimals, colors) {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      const rows = Object.keys(_throughputData.architectures).map(a => {
        const rs = tpGetResults({arch: a, hardware: selHw, batch, seq_len: 2048});
        const r = rs.find(x => !x._type);
        return r ? {name: a, value: r[valueKey]} : null;
      }).filter(Boolean);
      const maxV = Math.max(...rows.map(r => r.value));
      rows.forEach((r, i) => {
        const pct = maxV > 0 ? (r.value / maxV * 100).toFixed(1) : 0;
        const div = document.createElement('div');
        div.className = 'tp-bar-row';
        div.innerHTML = `
          <div class="tp-bar-label">${r.name}</div>
          <div class="tp-bar-container">
            <div class="tp-bar-fill" style="width:${pct}%; background:${colors[i % colors.length]}"></div>
            <div class="tp-bar-value">${tpFmt(r.value, decimals)} ${unit}</div>
          </div>
        `;
        container.appendChild(div);
      });
    }
    renderBars('tp-train-bars', 'training_tok_s', 'tok/s', 0,
      ['#7c6ef0','#a78bfa','#a5b4fc','#60a5fa','#22d3ee','#34d399','#fb923c']);
    renderBars('tp-tbt-bars', 'decode_ms_per_tok', 'ms', 2,
      ['#fb923c','#f97316','#ea580c','#fdba74','#fed7aa','#fbbf24','#f59e0b']);
    renderBars('tp-ttft-bars', 'prefill_ms', 'ms', 1,
      ['#22d3ee','#06b6d4','#0891b2','#67e8f9','#a5f3fc','#2dd4bf','#14b8a6']);
  }

  function tpUpdateBreakdown(arch, batch) {
    const hw = document.getElementById('tp-sel-hw-breakdown').value;
    const results = tpGetResults({arch, hardware: hw, batch, seq_len: 2048});
    const r = results.find(x => !x._type);
    if (!r || !r.layer_breakdown) return;
    const lb = r.layer_breakdown;
    const ops = [
      {name: 'QKV Proj', value: lb.qkv_proj_us, color: '#7c6ef0'},
      {name: 'Attention', value: lb.attention_us, color: '#a78bfa'},
      {name: 'Out Proj', value: lb.out_proj_us, color: '#a5b4fc'},
      {name: 'FFN Up', value: lb.ffn_up_us, color: '#60a5fa'},
      {name: 'FFN Down', value: lb.ffn_down_us, color: '#22d3ee'},
      {name: 'Mem Ops', value: lb.membound_us, color: '#fb923c'},
      {name: 'AllReduce', value: lb.allreduce_us, color: '#34d399'},
    ];
    const maxVal = Math.max(...ops.map(o => o.value));
    const barsDiv = document.getElementById('tp-breakdown-bars');
    barsDiv.innerHTML = '';
    ops.forEach(op => {
      const pct = maxVal > 0 ? (op.value / maxVal * 100).toFixed(1) : 0;
      const div = document.createElement('div');
      div.className = 'tp-bar-row';
      div.innerHTML = `
        <div class="tp-bar-label">${op.name}</div>
        <div class="tp-bar-container">
          <div class="tp-bar-fill" style="width:${pct}%; background:${op.color}"></div>
          <div class="tp-bar-value">${tpFmt(op.value, 1)} μs</div>
        </div>
      `;
      barsDiv.appendChild(div);
    });
    const metricsDiv = document.getElementById('tp-breakdown-metrics');
    const totalUs = ops.reduce((s, o) => s + o.value, 0);
    metricsDiv.innerHTML = `
      <div class="tp-metric"><span class="label">Total per layer</span><span class="value">${tpFmt(totalUs, 1)}<span class="unit">μs</span></span></div>
      <div class="tp-metric"><span class="label">Compute fraction</span><span class="value">${((lb.qkv_proj_us + lb.attention_us + lb.out_proj_us + lb.ffn_up_us + lb.ffn_down_us) / totalUs * 100).toFixed(1)}<span class="unit">%</span></span></div>
      <div class="tp-metric"><span class="label">Memory fraction</span><span class="value">${(lb.membound_us / totalUs * 100).toFixed(1)}<span class="unit">%</span></span></div>
      <div class="tp-metric"><span class="label">Comm fraction</span><span class="value">${(lb.allreduce_us / totalUs * 100).toFixed(1)}<span class="unit">%</span></span></div>
      <div class="tp-metric"><span class="label">Training tok/s</span><span class="value">${tpFmt(r.training_tok_s)}</span></div>
      <div class="tp-metric"><span class="label">Bottleneck</span><span class="value"><span class="${tpBadgeClass(r.bottleneck)}">${r.bottleneck}</span></span></div>
    `;
    tpRenderInferenceBreakdown('tp-prefill-breakdown-bars', r.prefill_layer_breakdown, 'Prefill');
    tpRenderInferenceBreakdown('tp-decode-breakdown-bars', r.decode_layer_breakdown, 'Decode');
  }

  function tpRenderInferenceBreakdown(containerId, lb, label) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!lb || Object.keys(lb).length === 0) {
      container.innerHTML = `<div style="color:var(--text2); font-size:11px;">No ${label.toLowerCase()} breakdown data available</div>`;
      return;
    }
    const ops = [
      {name: 'QKV Proj', value: lb.qkv_proj_us, color: '#7c6ef0'},
      {name: 'Attention', value: lb.attention_us, color: '#a78bfa'},
      {name: 'Out Proj', value: lb.out_proj_us, color: '#a5b4fc'},
      {name: 'FFN Up', value: lb.ffn_up_us, color: '#60a5fa'},
      {name: 'FFN Down', value: lb.ffn_down_us, color: '#22d3ee'},
      {name: 'Mem Ops', value: lb.membound_us, color: '#fb923c'},
      {name: 'AllReduce', value: lb.allreduce_us, color: '#34d399'},
    ];
    const maxVal = Math.max(...ops.map(o => o.value));
    const totalUs = ops.reduce((s, o) => s + o.value, 0);
    container.innerHTML = '';
    ops.forEach(op => {
      const pct = maxVal > 0 ? (op.value / maxVal * 100).toFixed(1) : 0;
      const div = document.createElement('div');
      div.className = 'tp-bar-row';
      div.innerHTML = `
        <div class="tp-bar-label">${op.name}</div>
        <div class="tp-bar-container">
          <div class="tp-bar-fill" style="width:${pct}%; background:${op.color}"></div>
          <div class="tp-bar-value">${tpFmt(op.value, 1)} μs</div>
        </div>
      `;
      container.appendChild(div);
    });
    const summaryDiv = document.createElement('div');
    summaryDiv.style.cssText = 'margin-top:8px; font-size:11px; color:var(--text2);';
    summaryDiv.textContent = `Total: ${tpFmt(totalUs, 1)} μs/layer`;
    container.appendChild(summaryDiv);
  }

  function tpUpdateDecode(arch, kvLen) {
    const canvas = document.getElementById('tp-kv-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    // v1-fix Trainium: include Trn2/Trn3 in KV-scaling chart.
    const hwColors = {h100: '#7c6ef0', b200: '#60a5fa', tpu_v5p: '#34d399', trainium2: '#fb923c', trainium3: '#ef4444'};
    const kvLens = [256, 512, 1024, 2048, 4096, 8192];
    const series = {};
    ['h100', 'b200', 'tpu_v5p', 'trainium2', 'trainium3'].forEach(hw => {
      series[hw] = kvLens.map(kv => {
        const rs = tpGetResults({arch, hardware: hw, batch: 1, kv_len: kv, _type: 'kv_scaling'});
        return rs.length > 0 ? rs[0].decode_ms_per_tok : null;
      });
    });
    let maxMs = 0;
    Object.values(series).forEach(arr => arr.forEach(v => { if (v && v > maxMs) maxMs = v; }));
    if (maxMs === 0) maxMs = 20;
    maxMs *= 1.1;
    const pad = {l: 60, r: 20, t: 20, b: 30};
    const plotW = W - pad.l - pad.r;
    const plotH = H - pad.t - pad.b;
    ctx.strokeStyle = '#2e3140'; ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b);
    ctx.lineTo(W - pad.r, H - pad.b);
    ctx.stroke();
    ctx.fillStyle = '#9699a6'; ctx.font = '10px monospace'; ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + plotH - (i / 4) * plotH;
      const val = (maxMs * i / 4).toFixed(1);
      ctx.fillText(val, pad.l - 6, y + 3);
      if (i > 0) {
        ctx.strokeStyle = '#252830';
        ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
      }
    }
    ctx.textAlign = 'center'; ctx.fillStyle = '#9699a6';
    kvLens.forEach((kv, i) => {
      const x = pad.l + (i / (kvLens.length - 1)) * plotW;
      ctx.fillText(kv.toString(), x, H - pad.b + 14);
    });
    ctx.fillText('KV Cache Length', W / 2, H - 4);
    ctx.save(); ctx.translate(12, H / 2); ctx.rotate(-Math.PI / 2);
    ctx.fillText('ms/token', 0, 0); ctx.restore();
    Object.entries(series).forEach(([hw, vals]) => {
      ctx.strokeStyle = hwColors[hw];
      ctx.lineWidth = 2;
      ctx.beginPath();
      let started = false;
      vals.forEach((v, i) => {
        if (v === null) return;
        const x = pad.l + (i / (kvLens.length - 1)) * plotW;
        const y = pad.t + plotH - (v / maxMs) * plotH;
        if (!started) { ctx.moveTo(x, y); started = true; }
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      vals.forEach((v, i) => {
        if (v === null) return;
        const x = pad.l + (i / (kvLens.length - 1)) * plotW;
        const y = pad.t + plotH - (v / maxMs) * plotH;
        ctx.fillStyle = hwColors[hw];
        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
      });
    });
    let lx = pad.l + 10;
    Object.entries(hwColors).forEach(([hw, color]) => {
      ctx.fillStyle = color;
      ctx.fillRect(lx, pad.t + 4, 12, 3);
      ctx.fillStyle = '#9699a6'; ctx.font = '10px monospace'; ctx.textAlign = 'left';
      ctx.fillText(_throughputData.hardware_specs[hw]?.name || hw, lx + 16, pad.t + 9);
      lx += 90;
    });

    const gqaDiv = document.getElementById('tp-gqa-metrics');
    const archSpec = _throughputData.architectures[arch];
    if (archSpec) {
      const nkv = archSpec.n_kv_heads;
      const nh = archSpec.n_heads;
      const ratio = nh / nkv;
      gqaDiv.innerHTML = `
        <div class="tp-metric"><span class="label">Query heads</span><span class="value">${nh}</span></div>
        <div class="tp-metric"><span class="label">KV heads</span><span class="value">${nkv}</span></div>
        <div class="tp-metric"><span class="label">GQA ratio</span><span class="value">${ratio}:1</span></div>
        <div class="tp-metric"><span class="label">d_head</span><span class="value">${archSpec.d_head}</span></div>
        <div class="tp-metric"><span class="label">KV cache / layer</span><span class="value">${tpFmt(2 * nkv * archSpec.d_head * kvLen * 2 / 1024 / 1024, 1)}<span class="unit">MB</span></span></div>
        <div class="tp-metric"><span class="label">KV cache total</span><span class="value">${tpFmt(2 * nkv * archSpec.d_head * kvLen * 2 * archSpec.n_layers / 1024 / 1024, 1)}<span class="unit">MB</span></span></div>
        <hr style="border-color:var(--border); margin:8px 0;">
        <div style="color:var(--text2); font-size:11px; line-height:1.5;">
          ${ratio > 1 ? `GQA ${ratio}:1 reduces KV cache by ${((1 - 1/ratio) * 100).toFixed(0)}% vs MHA. At long context (KV=${kvLen}), this saves ${tpFmt((ratio - 1) * 2 * nkv * archSpec.d_head * kvLen * 2 * archSpec.n_layers / 1024 / 1024, 0)} MB.` : 'MHA — no GQA reduction.'}
        </div>
      `;
    }
  }

  function tpUpdateValidation() {
    const trainTbody = document.querySelector('#tp-val-train-table tbody');
    trainTbody.innerHTML = '';
    (_throughputData.validation?.training || []).forEach(v => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${v.arch} (${v.hardware} TP=${v.tp} B=${v.batch})</td>
        <td>${tpFmt(v.predicted)} tok/s</td>
        <td>${v.measured} tok/s</td>
        <td>${v.ratio.toFixed(3)}</td>
        <td>${v.error_pct.toFixed(1)}%</td>
        <td><span class="tp-badge tp-badge-${v.status.toLowerCase()}">${v.status}</span></td>
      `;
      trainTbody.appendChild(tr);
    });
    const decodeTbody = document.querySelector('#tp-val-decode-table tbody');
    decodeTbody.innerHTML = '';
    (_throughputData.validation?.decode || []).forEach(v => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${v.arch} (${v.hardware} TP=${v.tp} B=${v.batch})</td>
        <td>${tpFmt(v.predicted_tps)} tok/s</td>
        <td>${v.measured_tps} tok/s</td>
        <td>${v.ratio.toFixed(3)}</td>
        <td>${v.error_pct.toFixed(1)}%</td>
        <td><span class="tp-badge tp-badge-${v.status.toLowerCase()}">${v.status}</span></td>
      `;
      decodeTbody.appendChild(tr);
    });
  }

  // Deploy build carries throughput data inline; no sidecar JSON is required.
  function _tpInstall(j) {
    _throughputData = j;
    tpInitControls();
    tpUpdate();
    if (banner) banner.style.display = 'none';
  }
  function _tpFail() {
    const host = document.getElementById('throughput');
    if (host) {
      const err = document.createElement('div');
      err.className = 'tp-loading';
      err.style.color = 'var(--red)';
      err.textContent = 'Failed to load embedded throughput data.';
      host.appendChild(err);
    }
    if (banner) banner.style.display = 'none';
  }
  if (window.__THROUGHPUT_DATA__) {
    _tpInstall(window.__THROUGHPUT_DATA__);
  } else {
    _tpFail();
  }
}

// Init
loadIntro();
updateAll();