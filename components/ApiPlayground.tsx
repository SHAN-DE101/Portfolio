"use client";

import { useState } from "react";
import { Play, Check, RefreshCw, Send, Radio } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { sound } from "@/lib/sounds";

export default function ApiPlayground() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>({
    status: "STANDBY",
    message: "Click 'Dispatch Probe' to query real serverless edge API endpoint",
    target: "GET /api/v1/ping",
  });
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [latency, setLatency] = useState<number | null>(null);

  const executeProbe = async () => {
    sound.playClick();
    setLoading(true);
    const start = performance.now();
    try {
      const res = await fetch("/api/v1/ping");
      const data = await res.json();
      const end = performance.now();
      setStatusCode(res.status);
      setLatency(Math.round(end - start));
      setResponse(data);
      sound.playSuccess();
    } catch {
      setStatusCode(500);
      setResponse({ error: "Edge request failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SpotlightCard className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
          <h3 className="text-sm font-semibold text-white font-mono">
            Interactive API Console
          </h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
            LIVE ENDPOINT
          </span>
        </div>

        <div className="flex items-center gap-2">
          {statusCode && (
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                statusCode === 200
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "bg-red-500/10 text-red-400 border border-red-500/30"
              }`}
            >
              HTTP {statusCode}
            </span>
          )}
          {latency !== null && (
            <span className="text-[10px] font-mono text-zinc-400">
              {latency}ms
            </span>
          )}
          <button
            onClick={executeProbe}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <RefreshCw className="w-3 h-3 animate-spin" />
            ) : (
              <Play className="w-3 h-3 fill-current" />
            )}
            <span>{loading ? "Transmitting..." : "Dispatch Probe"}</span>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>ENDPOINT: /api/v1/ping</span>
          <span>METHOD: GET</span>
        </div>
        <pre className="p-3.5 rounded-xl border border-zinc-800/80 bg-black/70 overflow-x-auto text-[11px] font-mono text-emerald-300 leading-relaxed max-h-48">
          <code>{JSON.stringify(response, null, 2)}</code>
        </pre>
      </div>
    </SpotlightCard>
  );
}
