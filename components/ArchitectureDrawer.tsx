'use client';

import { useState } from 'react';
import { X, Network, ShieldAlert, Cpu, CheckCircle2 } from 'lucide-react';

interface ArchitectureData {
  title: string;
  badge: string;
  tagline: string;
  pipeline: { step: string; desc: string }[];
  securityHighlights: string[];
  techChoices: { title: string; rationale: string }[];
}

interface ArchitectureDrawerProps {
  data: ArchitectureData;
  triggerText?: string;
  accentColor?: 'teal' | 'amber';
}

export default function ArchitectureDrawer({
  data,
  triggerText = 'System Specs',
  accentColor = 'teal',
}: ArchitectureDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isAmber = accentColor === 'amber';
  const accentClass = isAmber ? 'text-amber-400 border-amber-500/30' : 'text-teal-400 border-teal-500/30';
  const badgeClass = isAmber ? 'bg-amber-950/40 text-amber-300 border-amber-500/30' : 'bg-teal-950/40 text-teal-300 border-teal-500/30';

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border transition hover:bg-slate-800 ${accentClass}`}
      >
        <Network className="w-3.5 h-3.5" />
        {triggerText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-slate-900 border-l border-slate-800 h-full p-6 md:p-8 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono border ${badgeClass} mb-2`}>
                    {data.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">{data.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">{data.tagline}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300 mb-3">
                  <Cpu className="w-4 h-4 text-teal-400" /> Request Flow & Processing Steps
                </h4>
                <div className="space-y-3 font-mono text-xs">
                  {data.pipeline.map((item, idx) => (
                    <div key={idx} className="flex gap-3 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                      <span className="text-slate-500 select-none">0{idx + 1}.</span>
                      <div>
                        <span className="text-slate-200 font-semibold block">{item.step}</span>
                        <span className="text-slate-400 text-[11px] mt-0.5 block">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300 mb-3">
                  <ShieldAlert className="w-4 h-4 text-amber-400" /> Security & Threat Mitigation
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  {data.securityHighlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-3">
                  Design Trade-Offs & Decisions
                </h4>
                <div className="space-y-2.5">
                  {data.techChoices.map((c, idx) => (
                    <div key={idx} className="text-xs bg-slate-800/30 p-3 rounded-lg border border-slate-800">
                      <div className="font-semibold text-slate-200 font-mono">{c.title}</div>
                      <div className="text-slate-400 mt-1 text-[11px] leading-relaxed">{c.rationale}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-mono transition"
              >
                Close Architecture Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
