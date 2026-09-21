"use client";

export default function TechMarquee({ items }: { items: string[] }) {
  return (
    <div className="relative w-full overflow-hidden py-4 mask-gradient">
      <div className="animate-marquee gap-3">
        {[...items, ...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800/80 bg-zinc-950/70 text-zinc-300 text-sm font-medium hover:border-zinc-600 hover:text-white transition-all shadow-sm shrink-0 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
