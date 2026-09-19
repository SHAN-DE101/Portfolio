'use client';

import { useState } from 'react';
import { ExternalLink, X, Laptop } from 'lucide-react';

interface LiveDemoModalProps {
  url: string;
  title: string;
  triggerText: string;
  badge?: string;
  themeColor?: 'teal' | 'amber';
}

export default function LiveDemoModal({
  url,
  title,
  triggerText,
  badge = 'Live App',
  themeColor = 'teal',
}: LiveDemoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isAmber = themeColor === 'amber';
  const btnBorder = isAmber
    ? 'border-amber-500/30 text-amber-300 hover:bg-amber-500/10'
    : 'border-teal-500/30 text-teal-300 hover:bg-teal-500/10';

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border transition ${btnBorder}`}
      >
        <Laptop className="w-3.5 h-3.5" />
        {triggerText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative flex h-[88vh] w-full max-w-5xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-red-500" />
                <span className="flex h-3 w-3 rounded-full bg-yellow-500" />
                <span className="flex h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">{title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {badge}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition"
                >
                  Open in New Tab <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Viewport */}
            <div className="relative flex-1 bg-slate-950">
              <iframe
                src={url}
                title={title}
                className="h-full w-full border-0"
                allow="geolocation; camera; microphone"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
