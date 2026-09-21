"use client";

import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  tagline: string;
  stack: string[];
  metrics: string;
  link: string;
}

export default function ProjectMarquee({ projects }: { projects: ProjectItem[] }) {
  const repeated = [...projects, ...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden py-4 mask-gradient">
      <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
        {repeated.map((p, idx) => (
          <div
            key={idx}
            className="w-[340px] sm:w-[380px] p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between shrink-0 shadow-lg group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {p.category}
                </span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-all"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                  {p.tagline}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5 items-center justify-between mt-3">
              <div className="flex flex-wrap gap-1">
                {p.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
                {p.metrics.split("•")[0]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
