'use client';

const STACK = [
  'Java',
  'Spring Boot',
  'Next.js 15',
  'TypeScript',
  'Microsoft Azure',
  'Cosmos DB',
  'PostgreSQL',
  'Docker',
  'Wireshark',
  'Metasploit',
  'Nmap',
  'Edge Runtime',
  'REST APIs',
  'Tailwind CSS',
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-slate-800/80 bg-slate-950/40 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b1120] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b1120] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8">
        {[...STACK, ...STACK].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-teal-300 transition"
          >
            <span className="text-teal-500/50">✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
