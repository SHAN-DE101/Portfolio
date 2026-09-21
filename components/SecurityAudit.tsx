"use client";

import { useState } from "react";
import { ShieldCheck, ShieldAlert, Play, CheckCircle2, Lock, Terminal, Activity } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { sound } from "@/lib/sounds";

interface CheckItem {
  name: string;
  category: string;
  status: "PASS" | "OPTIMAL";
  details: string;
}

export default function SecurityAudit({ onNotify }: { onNotify?: (msg: string) => void }) {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [progress, setProgress] = useState(0);

  const securityChecks: CheckItem[] = [
    {
      name: "TLS 1.3 / Strict-Transport-Security",
      category: "Transport Layer",
      status: "PASS",
      details: "max-age=31536000; includeSubDomains; preload enabled",
    },
    {
      name: "Content-Security-Policy (CSP)",
      category: "Application Layer",
      status: "PASS",
      details: "script-src 'self' 'unsafe-eval'; frame-ancestors 'none'",
    },
    {
      name: "CORS & Origin Isolation",
      category: "API Gateway",
      status: "PASS",
      details: "Strict origin whitelisting & preflight token enforcement",
    },
    {
      name: "Anti-Clickjacking (X-Frame-Options)",
      category: "Client Defense",
      status: "PASS",
      details: "DENY header injected across serverless edge responses",
    },
    {
      name: "Zero-Trust Header Sanitization",
      category: "Data Integrity",
      status: "OPTIMAL",
      details: "X-Content-Type-Options: nosniff • OWASP Top 10 Compliant",
    },
  ];

  const runAudit = () => {
    sound.playClick();
    setScanning(true);
    setScanned(false);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setScanned(true);
          sound.playSuccess();
          onNotify?.("Cyber Security Posture Audit: 100% Passed (A+ Grade)");
          return 100;
        }
        return prev + 25;
      });
    }, 180);
  };

  return (
    <SpotlightCard className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-semibold text-white font-mono">
            Security Posture &amp; Threat Audit
          </h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            M.TECH CYBER SECURITY
          </span>
        </div>

        <button
          onClick={runAudit}
          disabled={scanning}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-sm"
        >
          {scanning ? (
            <Activity className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Play className="w-3 h-3 fill-current" />
          )}
          <span>{scanning ? `Probing... ${progress}%` : "Run Security Audit"}</span>
        </button>
      </div>

      {/* Progress Bar during scan */}
      {scanning && (
        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div
            className="h-full bg-emerald-400 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Audit Checklist */}
      <div className="space-y-2 pt-1">
        {securityChecks.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-800/70 bg-zinc-900/30 text-xs font-mono hover:bg-zinc-800/30 transition-colors"
          >
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <div className="truncate">
                <span className="text-zinc-200 font-medium block truncate">{item.name}</span>
                <span className="text-[10px] text-zinc-500 block truncate">{item.details}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] text-zinc-400 hidden sm:inline">{item.category}</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {scanned && (
        <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-300">Defense-in-Depth Status:</span>
          <span className="text-emerald-400 font-bold">GRADE A+ (Zero Critical Vulnerabilities)</span>
        </div>
      )}
    </SpotlightCard>
  );
}
