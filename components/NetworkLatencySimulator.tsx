'use client';

import { useState } from 'react';
import { Play, CheckCircle2, ShieldAlert, Cpu, Radio, Sparkles } from 'lucide-react';

interface Hop {
  name: string;
  location: string;
  latencyMs: number;
  status: 'ok' | 'throttled' | 'sanitized';
}

export default function NetworkLatencySimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [testMode, setTestMode] = useState<'normal' | 'ratelimit'>('normal');
  const [activeHop, setActiveHop] = useState<number>(-1);
  const [totalRtt, setTotalRtt] = useState<number | null>(null);

  const runSimulation = () => {
    setIsRunning(true);
    setActiveHop(0);
    setTotalRtt(null);

    // Hop 0: Client to Edge
    setTimeout(() => {
      setActiveHop(1);
      // Hop 1: Rate limiter / Auth check
      setTimeout(() => {
        if (testMode === 'ratelimit') {
          setActiveHop(2); // stops at limiter
          setIsRunning(false);
          setTotalRtt(2.8);
          return;
        }
        setActiveHop(2);
        // Hop 2: Provider Upstream
        setTimeout(() => {
          setActiveHop(3);
          setIsRunning(false);
          setTotalRtt(14.6);
        }, 350);
      }, 300);
    }, 250);
  };

  return (
    <div className="mt-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs text-slate-300">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-teal-400">
          <Radio className="w-3.5 h-3.5 animate-pulse text-teal-400" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">Live Edge Route Inspector</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Selector */}
          <div className="flex bg-slate-900 p-0.5 rounded border border-slate-800 text-[10px]">
            <button
              type="button"
              onClick={() => { setTestMode('normal'); setActiveHop(-1); setTotalRtt(null); }}
              className={`px-2 py-0.5 rounded transition ${testMode === 'normal' ? 'bg-teal-500/20 text-teal-300' : 'text-slate-500'}`}
            >
              200 OK Flow
            </button>
            <button
              type="button"
              onClick={() => { setTestMode('ratelimit'); setActiveHop(-1); setTotalRtt(null); }}
              className={`px-2 py-0.5 rounded transition ${testMode === 'ratelimit' ? 'bg-rose-500/20 text-rose-300' : 'text-slate-500'}`}
            >
              429 Rate Limit
            </button>
          </div>

          <button
            type="button"
            disabled={isRunning}
            onClick={runSimulation}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40 hover:bg-teal-500/30 disabled:opacity-50 transition text-[11px]"
          >
            <Play className="w-3 h-3 fill-current" />
            {isRunning ? 'Tracing...' : 'Trace Packet'}
          </button>
        </div>
      </div>

      {/* Network Hops Diagram */}
      <div className="grid grid-cols-4 gap-2 my-3 text-[10px]">
        {/* Hop 1 */}
        <div className={`p-2 rounded border transition-all ${
          activeHop >= 0 ? 'border-teal-400/80 bg-slate-900 text-teal-300 shadow-sm' : 'border-slate-800/60 bg-slate-950 text-slate-500'
        }`}>
          <div className="font-semibold text-slate-200">01. Origin Client</div>
          <div className="text-slate-500 text-[9px] mt-0.5">TLS 1.3 / HTTP/2</div>
        </div>

        {/* Hop 2 */}
        <div className={`p-2 rounded border transition-all ${
          activeHop >= 1 ? 'border-teal-400/80 bg-slate-900 text-teal-300 shadow-sm' : 'border-slate-800/60 bg-slate-950 text-slate-500'
        }`}>
          <div className="font-semibold text-slate-200">02. Edge (iad1)</div>
          <div className="text-slate-500 text-[9px] mt-0.5">Virtual Key Auth</div>
        </div>

        {/* Hop 3 */}
        <div className={`p-2 rounded border transition-all ${
          activeHop >= 2 
            ? testMode === 'ratelimit' 
              ? 'border-rose-500 bg-rose-950/40 text-rose-300' 
              : 'border-teal-400/80 bg-slate-900 text-teal-300 shadow-sm'
            : 'border-slate-800/60 bg-slate-950 text-slate-500'
        }`}>
          <div className="font-semibold text-slate-200">03. Sliding Limiter</div>
          <div className="text-slate-500 text-[9px] mt-0.5">
            {testMode === 'ratelimit' && activeHop >= 2 ? '429 THROTTLED' : 'TPM / RPM Guard'}
          </div>
        </div>

        {/* Hop 4 */}
        <div className={`p-2 rounded border transition-all ${
          activeHop >= 3 
            ? 'border-emerald-400/80 bg-slate-900 text-emerald-300 shadow-sm' 
            : 'border-slate-800/60 bg-slate-950 text-slate-500'
        }`}>
          <div className="font-semibold text-slate-200">04. Upstream LLM</div>
          <div className="text-slate-500 text-[9px] mt-0.5">Zero Payload Store</div>
        </div>
      </div>

      {/* Telemetry Output Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          {totalRtt !== null ? (
            testMode === 'ratelimit' ? (
              <span className="text-rose-400 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Throttled in {totalRtt}ms (Sliding Window Cap Exceeded)
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Routed successfully in {totalRtt}ms (Edge Overhead: 2.1ms)
              </span>
            )
          ) : (
            <span className="text-slate-500">Ready for packet trace trigger.</span>
          )}
        </div>

        <span className="text-slate-500 text-[10px]">Zero data retention active</span>
      </div>
    </div>
  );
}
