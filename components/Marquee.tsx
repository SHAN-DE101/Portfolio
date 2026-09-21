"use client";

export default function TechMarquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="relative w-full overflow-hidden py-2 mask-gradient">
      <div
        className={`flex w-max gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
      >
        {[...items, ...items, ...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-zinc-800/70 bg-zinc-950/60 text-zinc-300 text-xs font-mono font-medium hover:border-zinc-600 hover:text-white transition-all shadow-sm shrink-0 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
