'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import LiveStatus from '@/components/LiveStatus';
import TechMarquee from '@/components/TechMarquee';
import SpotlightCursor from '@/components/SpotlightCursor';
import LiveCanvas from '@/components/LiveCanvas';
import CyclingText from '@/components/CyclingText';
import LiveDemoModal from '@/components/LiveDemoModal';
import ArchitectureDrawer from '@/components/ArchitectureDrawer';
import { 
  ShieldCheck, 
  Terminal, 
  Layers, 
  BatteryCharging, 
  Fuel, 
  ArrowUpRight,
  Code2,
  Cpu,
  Lock,
  Workflow,
  Activity,
  Sparkles
} from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

const GATEWAY_SPECS = {
  title: 'AI Token Gateway Architecture',
  badge: 'EDGE PROXY SPECIFICATION',
  tagline: 'Multi-tenant routing with sliding-window quota governance and zero data-at-rest retention.',
  pipeline: [
    { step: 'Edge Ingress', desc: 'Routes incoming client payloads to closest edge node (iad1) minimizing round-trip overhead.' },
    { step: 'Virtual Key Auth', desc: 'Validates synthetic tenant credentials without exposing underlying provider API secrets.' },
    { step: 'Sliding Window Rate Limiter', desc: 'Calculates instantaneous TPM and RPM across a dynamic 60s sliding window.' },
    { step: 'Budget Check', desc: 'Enforces hard monthly caps ($10,000 baseline) before initiating upstream dispatch.' },
    { step: 'Zero-Retention Audit', desc: 'Captures latency, token usage, and status metadata while discarding prompt text.' },
  ],
  securityHighlights: [
    'Virtual key obfuscation isolates tenant clients from upstream OpenAI/Anthropic API keys.',
    'Cryptographic headers verify edge-to-origin payload authenticity.',
    'Zero-payload-retention policy prevents PII and LLM hallucinations from leaking into persistent logs.',
  ],
  techChoices: [
    { title: 'Edge Runtime over Containerized Proxies', rationale: 'Sub-4ms routing overhead with instant global distribution.' },
    { title: 'In-Memory Sliding Window over Fixed Window', rationale: 'Eliminates edge-boundary traffic bursting and evenly distributes high-concurrency requests.' },
  ],
};

const LOGISTICS_SPECS = {
  efuel: {
    title: 'E-Fuel: Highway Fuel Logistics',
    badge: 'PETROLEUM ACT & GEOHASH ENGINE',
    tagline: 'High-availability emergency replenishment platform with cryptographic and legal compliance gates.',
    pipeline: [
      { step: 'Client Haversine Resolution', desc: 'Evaluates geodesic distance and Geohash cells on the client device.' },
      { step: 'PESO Statutory Compliance Gate', desc: 'Enforces Petroleum Act of India verification before unlocking payment workflows.' },
      { step: 'Serverless Cloud Ingress', desc: 'Azure Static Web App edge invokes stateless Azure Functions with pre-warmed database pools.' },
      { step: 'Atomic Order Creation', desc: 'Transactions registered in Cosmos DB with partition keys organized by localized geohash regions.' },
      { step: 'Out-of-Band Delivery Handshake', desc: 'Courier terminal must verify client-held 4-digit PIN before dispensing valve unlocks.' },
    ],
    securityHighlights: [
      'Out-of-band 4-digit physical PIN handshake eliminates spoofing and phantom deliveries.',
      'Cosmos DB webhook idempotency ledger prevents double-dispatch race conditions.',
      'Secrets managed through Azure Key Vault with Managed Identities and Zero-Trust networking.',
    ],
    techChoices: [
      { title: 'Client-side Geohash Pre-filtering', rationale: 'Shields backend database from thousands of unnecessary radius query invocations per second.' },
      { title: 'Azure Serverless Architecture', rationale: 'Guarantees zero idle infrastructure cost during low-demand highway hours.' },
    ],
  },
  echarge: {
    title: 'E-Charge: Mobile EV Charging Fleet',
    badge: 'ON-DEMAND EV LOGISTICS',
    tagline: 'Dynamic mobile charging van dispatch with per-kWh algorithmic billing and cold-start pre-warming.',
    pipeline: [
      { step: 'Vehicle Model & Port Resolution', desc: 'Identifies EV model, charging protocol (CCS2, Type 2, GB/T), and target kWh.' },
      { step: 'Fleet Haversine Sourcing', desc: 'Locates nearest mobile fast-charging van equipped with DC fast-charge batteries.' },
      { step: 'Shoulder Safety Compliance Gate', desc: 'Mandatory verification that vehicle is safely stationary with accessible charging port.' },
      { step: 'Single-Tap UPI Intent', desc: 'Calculates dynamic base delivery fee + per-kW pricing dispatched over deep-linked payment.' },
      { step: 'Cryptographic Power Handshake', desc: '4-digit out-of-band PIN activates charging sequence on delivery van hardware.' },
    ],
    securityHighlights: [
      'Pre-warming critical Azure Functions during SMS OTP phase masks 200-800ms serverless cold starts.',
      'Cryptographic hardware handshake ensures power delivery only triggers for confirmed motorist.',
      'Immutable Cosmos DB ledger for real-time auditability across high-voltage power transactions.',
    ],
    techChoices: [
      { title: 'Per-kW Dynamic Metering over Flat Fee', rationale: 'Fair, transparent billing proportional to highway range required.' },
      { title: 'Edge Single Page Application (SPA)', rationale: 'Compiles lightweight React bundles to minimize Time-to-First-Byte.' },
    ],
  },
};

export default function Home() {
  const [logisticsMode, setLogisticsMode] = useState<'efuel' | 'echarge'>('efuel');
  const activeLogistics = LOGISTICS_SPECS[logisticsMode];

  return (
    <div className="relative bg-[#0b1120] text-slate-300 min-h-screen selection:bg-teal-300 selection:text-slate-900 font-sans bg-cyber-grid">
      <LiveCanvas />
      <SpotlightCursor />
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 pt-36 pb-20 px-6 sm:px-12 max-w-5xl mx-auto flex flex-col items-center text-center">
        <LiveStatus />

        {/* Dynamic Glowing Halo */}
        <div className="absolute top-28 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 max-w-3xl leading-[1.15]">
          Architecting resilient <br />
          <CyclingText />
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          I&apos;m <span className="text-slate-100 font-semibold underline decoration-teal-400/50 underline-offset-4">Shantanu Dey</span> — 
          engineering sub-millisecond edge proxies, zero-retention logging pipelines, and high-assurance cloud infrastructure.
        </p>

        {/* Live System Metrics Bar */}
        <div className="mt-8 inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md text-xs font-mono text-slate-400 shadow-xl">
          <div className="flex items-center gap-1.5 text-teal-400">
            <Activity className="w-3.5 h-3.5 animate-pulse text-teal-400" />
            <span>Telemetry: Normal</span>
          </div>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Edge Nodes: Active</span>
          </div>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AZ-900 Certified</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-teal-400 text-slate-950 font-mono text-xs font-bold hover:bg-teal-300 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/25 hover:scale-105 active:scale-95"
          >
            <Cpu className="w-4 h-4" /> Explore Architectures
          </a>
          <a
            href="https://github.com/SHAN-DE101"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-mono text-xs transition-all duration-200 flex items-center gap-2 hover:border-teal-500/50"
          >
            <GithubIcon className="w-4 h-4" /> GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/shantanu-dey-7724571b2/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 transition hover:border-teal-500/50"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* INFINITE TECH MARQUEE */}
      <div className="relative z-10">
        <TechMarquee />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 py-24 space-y-32">

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-4">
            <Terminal className="w-4 h-4" /> // 01. Background & Security Discipline
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md relative overflow-hidden group hover:border-slate-700 transition">
              <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-40" />
              <h2 className="text-xl font-bold text-slate-100 mb-4">
                Enterprise Reliability Meets Edge Speed
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                With a background in enterprise Java and Spring Boot from my tenure at{' '}
                <span className="text-teal-300 font-medium">Persistent Systems</span>, I bridge robust distributed backend architecture 
                with edge-first microservices.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Currently pursuing an <span className="text-slate-200 font-medium">M.Tech in Information Security</span>, 
                I design architectures that treat security as an immutable foundation — combining zero-retention audit models, 
                cryptographic out-of-band handshakes, and strict rate governors.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-teal-400 mb-3 tracking-wider">Credentials</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-100">M.Tech Cyber Security</div>
                    <div className="text-xs font-mono text-teal-400 mt-0.5">MAKAUT · 2024–2026</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-200">B.Tech IT</div>
                    <div className="text-xs font-mono text-slate-400 mt-0.5">Techno India · 2016–2020</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-blue-950/50 text-blue-300 border border-blue-500/30">
                  <ShieldCheck className="w-4 h-4 text-blue-400" /> Azure AZ-900 Certified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
              <Workflow className="w-4 h-4" /> // 02. Flagship Systems Architecture
            </div>
            <span className="text-xs font-mono text-slate-500">Interactive Consoles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PROJECT 1: AI TOKEN GATEWAY */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-2xl hover:shadow-teal-500/10">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-teal-400 mb-3">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Code2 className="w-3.5 h-3.5" /> EDGE REVERSE PROXY
                  </span>
                  <div className="flex items-center gap-2">
                    <ArchitectureDrawer data={GATEWAY_SPECS} triggerText="Specs" accentColor="teal" />
                    <LiveDemoModal
                      url="https://ai-token-gateway.vercel.app/dashboard"
                      title="AI Token Gateway Console"
                      triggerText="Console"
                      themeColor="teal"
                    />
                    <a
                      href="https://ai-token-gateway.vercel.app/dashboard"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-teal-300 transition"
                      aria-label="Open project in new tab"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition">
                  AI Token Gateway & Virtual Key Router
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  High-throughput edge reverse proxy designed to enforce multi-tenant token rate limiting, budget metering, 
                  and live execution telemetry across upstream LLM providers.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2 text-[11px] text-teal-300">
                    <span>⚡ Sub-4ms edge routing overhead</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>🛡️ Sliding-window token governor (TPM/RPM)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>🔒 Zero-retention privacy auditing</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {['TypeScript', 'Edge Runtime', 'Sliding Window', 'Virtual Keys', 'Tailwind CSS'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-mono text-teal-300 bg-teal-950/50 rounded border border-teal-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT 2: E-FUEL / E-CHARGE */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/10">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-3">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>EMERGENCY LOGISTICS</span>
                  </div>

                  <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('efuel')}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition ${
                        logisticsMode === 'efuel' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <Fuel className="w-3 h-3 inline mr-1" /> Fuel
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('echarge')}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition ${
                        logisticsMode === 'echarge' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <BatteryCharging className="w-3 h-3 inline mr-1" /> EV
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition">
                    {logisticsMode === 'efuel' ? 'E-Fuel: Highway Fuel Dispatch' : 'E-Charge: Mobile EV Fleet'}
                  </h3>
                  <div className="flex items-center gap-2">
                    <ArchitectureDrawer data={activeLogistics} triggerText="Specs" accentColor="amber" />
                    {logisticsMode === 'efuel' && (
                      <LiveDemoModal
                        url="/efuel-demo.html"
                        title="E-Fuel Logistics Simulator"
                        triggerText="Sandbox"
                        themeColor="amber"
                      />
                    )}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {logisticsMode === 'efuel'
                    ? 'Emergency fuel replenishment platform with client-side Haversine spatial resolution, PESO safety compliance, and out-of-band PIN verification.'
                    : 'Serverless EV charging logistics system matching stranded electric vehicles with mobile DC fast-charging battery vans using per-kWh pricing.'}
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2 text-[11px] text-amber-300">
                    <span>📍 {logisticsMode === 'efuel' ? 'Sub-ms Haversine Geohash clustering' : 'Dynamic per-kW metering'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>🔐 Out-of-band 4-digit PIN verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>⚡ Stateless Azure Functions + Cosmos DB</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {(logisticsMode === 'efuel'
                  ? ['React 18', 'Azure Functions', 'Cosmos DB', 'Haversine', 'PESO Act']
                  : ['EV Fleet', 'Azure Static Apps', 'Key Vault', 'Zero-Trust', 'UPI']
                ).map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-mono text-amber-300 bg-amber-950/50 rounded border border-amber-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-6">
            <Lock className="w-4 h-4" /> // 03. Experience & Engineering Record
          </div>

          <div className="relative border-l border-slate-800 ml-3 space-y-8">
            <div className="relative pl-7">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
              <div className="text-xs font-mono text-teal-400">DEC 2021 — DEC 2022</div>
              <h3 className="text-lg font-bold text-slate-100 mt-1">
                Software Engineer · Persistent Systems Ltd.
              </h3>
              <div className="text-xs font-mono text-slate-500">Hinjewadi, Pune, India</div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400 list-disc list-inside leading-relaxed">
                <li>Engineered high-throughput backend APIs utilizing Spring Boot and automated Postman test suites.</li>
                <li>Designed NoSQL schemas and tuned cluster queries for distributed transaction performance.</li>
                <li>Managed CI/CD deployment pipelines using Maven and streamlined team Git workflows in Agile sprints.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Java', 'Spring Boot', 'REST APIs', 'NoSQL', 'Maven', 'Git'].map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs font-mono bg-slate-800/80 text-slate-300 rounded border border-slate-700/50">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-6">
            <Cpu className="w-4 h-4" /> // 04. Technical Capabilities
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Backend</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Core Java</li>
                <li>Spring Boot</li>
                <li>Node.js / Express</li>
                <li>REST Microservices</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Cloud & DB</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Microsoft Azure</li>
                <li>Azure Functions</li>
                <li>Cosmos DB NoSQL</li>
                <li>PostgreSQL / MongoDB</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Frontend</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Next.js 15 (App)</li>
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Security & DevOps</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Wireshark / Nmap</li>
                <li>Metasploit</li>
                <li>Docker / Kubernetes</li>
                <li>Git / CI/CD Actions</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-slate-800/80 py-12 px-6 text-center text-xs font-mono text-slate-500">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4">
          <div>© {new Date().getFullYear()} Shantanu Dey · High-Performance Edge & Cloud Architecture</div>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="https://github.com/SHAN-DE101" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shantanu-dey-7724571b2/" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition">
              LinkedIn
            </a>
            <a href="mailto:deyshantanu101@gmail.com" className="hover:text-teal-300 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
EOFcat << 'EOF' > app/page.tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import LiveStatus from '@/components/LiveStatus';
import TechMarquee from '@/components/TechMarquee';
import SpotlightCursor from '@/components/SpotlightCursor';
import LiveCanvas from '@/components/LiveCanvas';
import CyclingText from '@/components/CyclingText';
import LiveDemoModal from '@/components/LiveDemoModal';
import ArchitectureDrawer from '@/components/ArchitectureDrawer';
import { 
  ShieldCheck, 
  Terminal, 
  Layers, 
  BatteryCharging, 
  Fuel, 
  ArrowUpRight,
  Code2,
  Cpu,
  Lock,
  Workflow,
  Activity,
  Sparkles
} from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

const GATEWAY_SPECS = {
  title: 'AI Token Gateway Architecture',
  badge: 'EDGE PROXY SPECIFICATION',
  tagline: 'Multi-tenant routing with sliding-window quota governance and zero data-at-rest retention.',
  pipeline: [
    { step: 'Edge Ingress', desc: 'Routes incoming client payloads to closest edge node (iad1) minimizing round-trip overhead.' },
    { step: 'Virtual Key Auth', desc: 'Validates synthetic tenant credentials without exposing underlying provider API secrets.' },
    { step: 'Sliding Window Rate Limiter', desc: 'Calculates instantaneous TPM and RPM across a dynamic 60s sliding window.' },
    { step: 'Budget Check', desc: 'Enforces hard monthly caps ($10,000 baseline) before initiating upstream dispatch.' },
    { step: 'Zero-Retention Audit', desc: 'Captures latency, token usage, and status metadata while discarding prompt text.' },
  ],
  securityHighlights: [
    'Virtual key obfuscation isolates tenant clients from upstream OpenAI/Anthropic API keys.',
    'Cryptographic headers verify edge-to-origin payload authenticity.',
    'Zero-payload-retention policy prevents PII and LLM hallucinations from leaking into persistent logs.',
  ],
  techChoices: [
    { title: 'Edge Runtime over Containerized Proxies', rationale: 'Sub-4ms routing overhead with instant global distribution.' },
    { title: 'In-Memory Sliding Window over Fixed Window', rationale: 'Eliminates edge-boundary traffic bursting and evenly distributes high-concurrency requests.' },
  ],
};

const LOGISTICS_SPECS = {
  efuel: {
    title: 'E-Fuel: Highway Fuel Logistics',
    badge: 'PETROLEUM ACT & GEOHASH ENGINE',
    tagline: 'High-availability emergency replenishment platform with cryptographic and legal compliance gates.',
    pipeline: [
      { step: 'Client Haversine Resolution', desc: 'Evaluates geodesic distance and Geohash cells on the client device.' },
      { step: 'PESO Statutory Compliance Gate', desc: 'Enforces Petroleum Act of India verification before unlocking payment workflows.' },
      { step: 'Serverless Cloud Ingress', desc: 'Azure Static Web App edge invokes stateless Azure Functions with pre-warmed database pools.' },
      { step: 'Atomic Order Creation', desc: 'Transactions registered in Cosmos DB with partition keys organized by localized geohash regions.' },
      { step: 'Out-of-Band Delivery Handshake', desc: 'Courier terminal must verify client-held 4-digit PIN before dispensing valve unlocks.' },
    ],
    securityHighlights: [
      'Out-of-band 4-digit physical PIN handshake eliminates spoofing and phantom deliveries.',
      'Cosmos DB webhook idempotency ledger prevents double-dispatch race conditions.',
      'Secrets managed through Azure Key Vault with Managed Identities and Zero-Trust networking.',
    ],
    techChoices: [
      { title: 'Client-side Geohash Pre-filtering', rationale: 'Shields backend database from thousands of unnecessary radius query invocations per second.' },
      { title: 'Azure Serverless Architecture', rationale: 'Guarantees zero idle infrastructure cost during low-demand highway hours.' },
    ],
  },
  echarge: {
    title: 'E-Charge: Mobile EV Charging Fleet',
    badge: 'ON-DEMAND EV LOGISTICS',
    tagline: 'Dynamic mobile charging van dispatch with per-kWh algorithmic billing and cold-start pre-warming.',
    pipeline: [
      { step: 'Vehicle Model & Port Resolution', desc: 'Identifies EV model, charging protocol (CCS2, Type 2, GB/T), and target kWh.' },
      { step: 'Fleet Haversine Sourcing', desc: 'Locates nearest mobile fast-charging van equipped with DC fast-charge batteries.' },
      { step: 'Shoulder Safety Compliance Gate', desc: 'Mandatory verification that vehicle is safely stationary with accessible charging port.' },
      { step: 'Single-Tap UPI Intent', desc: 'Calculates dynamic base delivery fee + per-kW pricing dispatched over deep-linked payment.' },
      { step: 'Cryptographic Power Handshake', desc: '4-digit out-of-band PIN activates charging sequence on delivery van hardware.' },
    ],
    securityHighlights: [
      'Pre-warming critical Azure Functions during SMS OTP phase masks 200-800ms serverless cold starts.',
      'Cryptographic hardware handshake ensures power delivery only triggers for confirmed motorist.',
      'Immutable Cosmos DB ledger for real-time auditability across high-voltage power transactions.',
    ],
    techChoices: [
      { title: 'Per-kW Dynamic Metering over Flat Fee', rationale: 'Fair, transparent billing proportional to highway range required.' },
      { title: 'Edge Single Page Application (SPA)', rationale: 'Compiles lightweight React bundles to minimize Time-to-First-Byte.' },
    ],
  },
};

export default function Home() {
  const [logisticsMode, setLogisticsMode] = useState<'efuel' | 'echarge'>('efuel');
  const activeLogistics = LOGISTICS_SPECS[logisticsMode];

  return (
    <div className="relative bg-[#0b1120] text-slate-300 min-h-screen selection:bg-teal-300 selection:text-slate-900 font-sans bg-cyber-grid">
      <LiveCanvas />
      <SpotlightCursor />
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 pt-36 pb-20 px-6 sm:px-12 max-w-5xl mx-auto flex flex-col items-center text-center">
        <LiveStatus />

        {/* Dynamic Glowing Halo */}
        <div className="absolute top-28 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-100 max-w-3xl leading-[1.15]">
          Architecting resilient <br />
          <CyclingText />
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          I&apos;m <span className="text-slate-100 font-semibold underline decoration-teal-400/50 underline-offset-4">Shantanu Dey</span> — 
          engineering sub-millisecond edge proxies, zero-retention logging pipelines, and high-assurance cloud infrastructure.
        </p>

        {/* Live System Metrics Bar */}
        <div className="mt-8 inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md text-xs font-mono text-slate-400 shadow-xl">
          <div className="flex items-center gap-1.5 text-teal-400">
            <Activity className="w-3.5 h-3.5 animate-pulse text-teal-400" />
            <span>Telemetry: Normal</span>
          </div>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Edge Nodes: Active</span>
          </div>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AZ-900 Certified</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-teal-400 text-slate-950 font-mono text-xs font-bold hover:bg-teal-300 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/25 hover:scale-105 active:scale-95"
          >
            <Cpu className="w-4 h-4" /> Explore Architectures
          </a>
          <a
            href="https://github.com/SHAN-DE101"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-mono text-xs transition-all duration-200 flex items-center gap-2 hover:border-teal-500/50"
          >
            <GithubIcon className="w-4 h-4" /> GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/shantanu-dey-7724571b2/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 transition hover:border-teal-500/50"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* INFINITE TECH MARQUEE */}
      <div className="relative z-10">
        <TechMarquee />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 py-24 space-y-32">

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-4">
            <Terminal className="w-4 h-4" /> // 01. Background & Security Discipline
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md relative overflow-hidden group hover:border-slate-700 transition">
              <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-40" />
              <h2 className="text-xl font-bold text-slate-100 mb-4">
                Enterprise Reliability Meets Edge Speed
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                With a background in enterprise Java and Spring Boot from my tenure at{' '}
                <span className="text-teal-300 font-medium">Persistent Systems</span>, I bridge robust distributed backend architecture 
                with edge-first microservices.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Currently pursuing an <span className="text-slate-200 font-medium">M.Tech in Information Security</span>, 
                I design architectures that treat security as an immutable foundation — combining zero-retention audit models, 
                cryptographic out-of-band handshakes, and strict rate governors.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-teal-400 mb-3 tracking-wider">Credentials</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-100">M.Tech Cyber Security</div>
                    <div className="text-xs font-mono text-teal-400 mt-0.5">MAKAUT · 2024–2026</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-200">B.Tech IT</div>
                    <div className="text-xs font-mono text-slate-400 mt-0.5">Techno India · 2016–2020</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-blue-950/50 text-blue-300 border border-blue-500/30">
                  <ShieldCheck className="w-4 h-4 text-blue-400" /> Azure AZ-900 Certified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
              <Workflow className="w-4 h-4" /> // 02. Flagship Systems Architecture
            </div>
            <span className="text-xs font-mono text-slate-500">Interactive Consoles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* PROJECT 1: AI TOKEN GATEWAY */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-2xl hover:shadow-teal-500/10">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-teal-400 mb-3">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Code2 className="w-3.5 h-3.5" /> EDGE REVERSE PROXY
                  </span>
                  <div className="flex items-center gap-2">
                    <ArchitectureDrawer data={GATEWAY_SPECS} triggerText="Specs" accentColor="teal" />
                    <LiveDemoModal
                      url="https://ai-token-gateway.vercel.app/dashboard"
                      title="AI Token Gateway Console"
                      triggerText="Console"
                      themeColor="teal"
                    />
                    <a
                      href="https://ai-token-gateway.vercel.app/dashboard"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-teal-300 transition"
                      aria-label="Open project in new tab"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition">
                  AI Token Gateway & Virtual Key Router
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  High-throughput edge reverse proxy designed to enforce multi-tenant token rate limiting, budget metering, 
                  and live execution telemetry across upstream LLM providers.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2 text-[11px] text-teal-300">
                    <span>⚡ Sub-4ms edge routing overhead</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>🛡️ Sliding-window token governor (TPM/RPM)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>🔒 Zero-retention privacy auditing</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {['TypeScript', 'Edge Runtime', 'Sliding Window', 'Virtual Keys', 'Tailwind CSS'].map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-mono text-teal-300 bg-teal-950/50 rounded border border-teal-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT 2: E-FUEL / E-CHARGE */}
            <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/10">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-3">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>EMERGENCY LOGISTICS</span>
                  </div>

                  <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('efuel')}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition ${
                        logisticsMode === 'efuel' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <Fuel className="w-3 h-3 inline mr-1" /> Fuel
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('echarge')}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition ${
                        logisticsMode === 'echarge' ? 'bg-emerald-500/20 text-emerald-300 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      <BatteryCharging className="w-3 h-3 inline mr-1" /> EV
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition">
                    {logisticsMode === 'efuel' ? 'E-Fuel: Highway Fuel Dispatch' : 'E-Charge: Mobile EV Fleet'}
                  </h3>
                  <div className="flex items-center gap-2">
                    <ArchitectureDrawer data={activeLogistics} triggerText="Specs" accentColor="amber" />
                    {logisticsMode === 'efuel' && (
                      <LiveDemoModal
                        url="/efuel-demo.html"
                        title="E-Fuel Logistics Simulator"
                        triggerText="Sandbox"
                        themeColor="amber"
                      />
                    )}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {logisticsMode === 'efuel'
                    ? 'Emergency fuel replenishment platform with client-side Haversine spatial resolution, PESO safety compliance, and out-of-band PIN verification.'
                    : 'Serverless EV charging logistics system matching stranded electric vehicles with mobile DC fast-charging battery vans using per-kWh pricing.'}
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2 text-[11px] text-amber-300">
                    <span>📍 {logisticsMode === 'efuel' ? 'Sub-ms Haversine Geohash clustering' : 'Dynamic per-kW metering'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>🔐 Out-of-band 4-digit PIN verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>⚡ Stateless Azure Functions + Cosmos DB</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {(logisticsMode === 'efuel'
                  ? ['React 18', 'Azure Functions', 'Cosmos DB', 'Haversine', 'PESO Act']
                  : ['EV Fleet', 'Azure Static Apps', 'Key Vault', 'Zero-Trust', 'UPI']
                ).map(t => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-mono text-amber-300 bg-amber-950/50 rounded border border-amber-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-6">
            <Lock className="w-4 h-4" /> // 03. Experience & Engineering Record
          </div>

          <div className="relative border-l border-slate-800 ml-3 space-y-8">
            <div className="relative pl-7">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
              <div className="text-xs font-mono text-teal-400">DEC 2021 — DEC 2022</div>
              <h3 className="text-lg font-bold text-slate-100 mt-1">
                Software Engineer · Persistent Systems Ltd.
              </h3>
              <div className="text-xs font-mono text-slate-500">Hinjewadi, Pune, India</div>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400 list-disc list-inside leading-relaxed">
                <li>Engineered high-throughput backend APIs utilizing Spring Boot and automated Postman test suites.</li>
                <li>Designed NoSQL schemas and tuned cluster queries for distributed transaction performance.</li>
                <li>Managed CI/CD deployment pipelines using Maven and streamlined team Git workflows in Agile sprints.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Java', 'Spring Boot', 'REST APIs', 'NoSQL', 'Maven', 'Git'].map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs font-mono bg-slate-800/80 text-slate-300 rounded border border-slate-700/50">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-6">
            <Cpu className="w-4 h-4" /> // 04. Technical Capabilities
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Backend</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Core Java</li>
                <li>Spring Boot</li>
                <li>Node.js / Express</li>
                <li>REST Microservices</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Cloud & DB</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Microsoft Azure</li>
                <li>Azure Functions</li>
                <li>Cosmos DB NoSQL</li>
                <li>PostgreSQL / MongoDB</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Frontend</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Next.js 15 (App)</li>
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/40 transition">
              <span className="text-teal-300 font-semibold block mb-3">Security & DevOps</span>
              <ul className="space-y-1.5 text-slate-400">
                <li>Wireshark / Nmap</li>
                <li>Metasploit</li>
                <li>Docker / Kubernetes</li>
                <li>Git / CI/CD Actions</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-slate-800/80 py-12 px-6 text-center text-xs font-mono text-slate-500">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4">
          <div>© {new Date().getFullYear()} Shantanu Dey · High-Performance Edge & Cloud Architecture</div>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="https://github.com/SHAN-DE101" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shantanu-dey-7724571b2/" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition">
              LinkedIn
            </a>
            <a href="mailto:deyshantanu101@gmail.com" className="hover:text-teal-300 transition">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
