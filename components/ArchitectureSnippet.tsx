"use client";

import { useState } from "react";
import { Terminal, Copy, Check, Code, ShieldCheck } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { sound } from "@/lib/sounds";

export default function ArchitectureSnippet() {
  const [tab, setTab] = useState<"PAYMENT" | "SECURITY">("PAYMENT");
  const [copied, setCopied] = useState(false);

  const paymentCode = `@RestController
@RequestMapping("/api/v1/payments")
public class PaymentGatewayController {

    private final PaymentProcessingService paymentService;

    public PaymentGatewayController(PaymentProcessingService service) {
        this.paymentService = service;
    }

    @PostMapping("/process")
    public ResponseEntity<TransactionResult> execute(
            @Valid @RequestBody PaymentRequest request) {
        // Enforce transactional atomicity & low-latency validation
        TransactionResult result = paymentService.dispatch(request);
        return ResponseEntity.ok(result);
    }
}`;

  const securityCode = `@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(s -> s.sessionCreationPolicy(STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/health").permitAll()
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}`;

  const codeToDisplay = tab === "PAYMENT" ? paymentCode : securityCode;

  const copyCode = () => {
    navigator.clipboard.writeText(codeToDisplay);
    sound.playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SpotlightCard className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-indigo-400" />
          <h3 className="text-sm font-semibold text-white font-mono">
            Architecture Blueprint &amp; Clean Code
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono">
          <button
            onClick={() => { sound.playClick(); setTab("PAYMENT"); }}
            className={`px-2.5 py-0.5 rounded transition-all cursor-pointer ${
              tab === "PAYMENT"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            PaymentController.java
          </button>
          <button
            onClick={() => { sound.playClick(); setTab("SECURITY"); }}
            className={`px-2.5 py-0.5 rounded transition-all cursor-pointer ${
              tab === "SECURITY"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            SecurityConfig.java
          </button>
          <button
            onClick={copyCode}
            className="p-1 rounded text-zinc-500 hover:text-white transition-colors ml-1 cursor-pointer"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <pre className="p-4 rounded-xl border border-zinc-800/80 bg-black/60 overflow-x-auto text-[11px] font-mono text-zinc-300 leading-relaxed">
        <code>{codeToDisplay}</code>
      </pre>
    </SpotlightCard>
  );
}
