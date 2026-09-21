"use client";

import SpotlightCard from "./SpotlightCard";
import { Laptop, Cpu, ShieldCheck, Terminal, Compass, Zap } from "lucide-react";

export default function DevSetupBento() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Dev Environment */}
      <SpotlightCard className="space-y-3">
        <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono">
          <Laptop className="w-4 h-4 text-emerald-400" />
          <span>ENVIRONMENT &amp; RIG</span>
        </div>
        <div className="space-y-1.5 text-xs text-zinc-400">
          <p><span className="text-zinc-200">OS:</span> macOS / Debian Linux</p>
          <p><span className="text-zinc-200">Editor:</span> VS Code / IntelliJ IDEA</p>
          <p><span className="text-zinc-200">Shell:</span> Zsh + Oh My Zsh</p>
          <p><span className="text-zinc-200">Terminal:</span> Warp / iTerm2</p>
        </div>
      </SpotlightCard>

      {/* Engineering Philosophy */}
      <SpotlightCard className="space-y-3">
        <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono">
          <Compass className="w-4 h-4 text-indigo-400" />
          <span>ENGINEERING CREED</span>
        </div>
        <blockquote className="text-xs text-zinc-400 leading-relaxed italic border-l-2 border-emerald-500/60 pl-2.5">
          &ldquo;With scalable architecture comes great reliability. Secure by default, optimized for latency.&rdquo;
        </blockquote>
        <div className="text-[10px] font-mono text-emerald-400/90 pt-1">
          Zero-Trust • Low-Latency • 99.99% Uptime
        </div>
      </SpotlightCard>

      {/* Core Security Suite */}
      <SpotlightCard className="space-y-3">
        <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>SECURITY ARSENAL</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Wireshark", "Nmap", "Metasploit", "OWASP ZAP", "Burp Suite", "Tcpdump"].map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </div>
  );
}
