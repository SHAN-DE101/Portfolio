'use client';

import { useState } from 'react';
import SpotlightCursor from '@/components/SpotlightCursor';
import NavMenu from '@/components/NavMenu';
import LiveDemoModal from '@/components/LiveDemoModal';
import MotionCard from '@/components/MotionCard';
import ArchitectureDrawer from '@/components/ArchitectureDrawer';
import ContactModal from '@/components/ContactModal';
import { 
  FileDown, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Layers,
  BatteryCharging,
  Fuel
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
    { step: 'Sliding Window Rate Limiter', desc: 'Calculates instantaneous TPM (Tokens Per Minute) and RPM across a dynamic 60s sliding window.' },
    { step: 'Budget Check', desc: 'Enforces hard monthly caps ($10,000 baseline) before initiating upstream dispatch.' },
    { step: 'Zero-Retention Audit', desc: 'Captures latency, token usage, and status metadata while prompt and completion text are discarded from memory.' },
  ],
  securityHighlights: [
    'Virtual key obfuscation isolates tenant clients from upstream OpenAI/Anthropic API keys.',
    'Cryptographic headers verify edge-to-origin payload authenticity.',
    'Zero-payload-retention policy prevents PII and LLM hallucinations from leaking into persistent logs.',
  ],
  techChoices: [
    { title: 'Edge Runtime over Containerized Proxies', rationale: 'Sub-4ms routing overhead with instant global distribution and zero cold-start penalties.' },
    { title: 'In-Memory Sliding Window over Fixed Window', rationale: 'Eliminates edge-boundary traffic bursting and evenly distributes high-concurrency requests.' },
  ],
};

const LOGISTICS_SPECS = {
  efuel: {
    title: 'E-Fuel: Highway Fuel Logistics',
    badge: 'PETROLEUM ACT & GEOHASH ENGINE',
    tagline: 'High-availability emergency replenishment platform with cryptographic and legal compliance gates.',
    pipeline: [
      { step: 'Client Haversine Resolution', desc: 'Evaluates geodesic distance and Geohash cells on the client device to query only nearby fuel depots.' },
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
      { title: 'Azure Serverless Architecture', rationale: 'Guarantees zero idle infrastructure cost during low-demand highway hours while scaling instantaneously.' },
    ],
  },
  echarge: {
    title: 'E-Charge: Mobile EV Charging Fleet',
    badge: 'ON-DEMAND EV LOGISTICS',
    tagline: 'Dynamic mobile charging van dispatch with per-kWh algorithmic billing and cold-start pre-warming.',
    pipeline: [
      { step: 'Vehicle Model & Port Resolution', desc: 'Identifies EV model, charging protocol (CCS2, Type 2, GB/T), and target kWh requirement.' },
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
      { title: 'Per-kW Dynamic Metering over Flat Fee', rationale: 'Fair, transparent billing proportional to highway range required to reach next grid station.' },
      { title: 'Edge Single Page Application (SPA)', rationale: 'Compiles lightweight React bundles to minimize Time-to-First-Byte in weak highway cellular areas.' },
    ],
  },
};

export default function Home() {
  const [logisticsMode, setLogisticsMode] = useState<'efuel' | 'echarge'>('efuel');
  const activeLogistics = LOGISTICS_SPECS[logisticsMode];

  return (
    <div className="relative bg-[#0b1120] text-slate-300 selection:bg-teal-300 selection:text-slate-900 min-h-screen">
      <SpotlightCursor />

      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">

          {/* ================= LEFT PANE ================= */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
                Shantanu Dey
              </h1>
              <h2 className="mt-3 text-lg font-medium text-teal-400 sm:text-xl font-mono">
                Software Engineer · Cloud & Security
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                Architecting resilient backend pipelines, edge API gateways, and serverless distributed systems 
                grounded in rigorous cybersecurity practices and high-assurance networking.
              </p>

              <NavMenu />
            </div>

            {/* Social & Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 mt-8 lg:mt-0">
              <a 
                href="https://github.com/SHAN-DE101" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-teal-300 transition p-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shantanu-dey-7724571b2/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-teal-300 transition p-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <ContactModal />

              <a
                href="/ShantanuDey_Resume.pdf"
                download
                className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
              >
                <FileDown className="w-3.5 h-3.5" /> Resume
              </a>
            </div>
          </header>

          {/* ================= RIGHT PANE ================= */}
          <main className="pt-24 lg:w-[55%] lg:py-24 space-y-24">

            {/* ABOUT */}
            <section id="about" className="scroll-mt-16">
              <p className="text-sm leading-relaxed text-slate-400">
                With a strong foundation in enterprise Java, Spring Boot, and cloud services from my tenure at{' '}
                <span className="text-slate-200 font-medium">Persistent Systems</span>, my work centers on high-throughput backend infrastructure 
                and low-latency edge computing. Currently pursuing an{' '}
                <span className="text-slate-200 font-medium">M.Tech in Information Security / Cyber Security</span> at MAKAUT, 
                I focus on architecting distributed platforms that pair cryptographic guarantees and privacy-first pipelines 
                with sub-millisecond execution.
              </p>
            </section>

            {/* FLAGSHIP PROJECTS */}
            <section id="flagships" className="scroll-mt-16 space-y-12">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400">
                <Zap className="w-4 h-4" /> Featured Systems Architecture
              </div>

              {/* PROJECT 1: AI TOKEN GATEWAY */}
              <MotionCard className="rounded-2xl border border-teal-500/20 bg-slate-900/60 p-6 transition-all hover:border-teal-400/40 hover:bg-slate-900/90 shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-teal-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> EDGE REVERSE PROXY
                  </span>
                  <div className="flex items-center gap-2">
                    <ArchitectureDrawer data={GATEWAY_SPECS} triggerText="Architecture Sheet" accentColor="teal" />
                    <LiveDemoModal
                      url="https://ai-token-gateway.vercel.app/dashboard"
                      title="AI Token Gateway Console"
                      triggerText="Live Console"
                      themeColor="teal"
                    />
                    <a 
                      href="https://ai-token-gateway.vercel.app/dashboard" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-teal-300 transition p-1"
                      aria-label="Open AI Token Gateway in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100">
                  AI Token Gateway & Virtual Key Router
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  A high-throughput edge reverse proxy designed to enforce token rate limiting, multi-tenant budget metering, 
                  and live execution telemetry across LLM providers.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 font-mono">
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                    <span className="text-teal-300 block mb-1">⚡ Request Pipeline</span>
                    Ingress → Key check → Sliding window rate limiting → Budget → Edge provider.
                  </div>
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                    <span className="text-teal-300 block mb-1">🛡️ Zero-Retention Privacy</span>
                    Metadata-only auditing. Request & completion payloads are never stored on disk.
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {['TypeScript', 'Edge Runtime', 'Sliding Window', 'Virtual Keys', 'Token Telemetry', 'Tailwind CSS'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-mono text-teal-300 bg-teal-950/50 rounded-full border border-teal-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </MotionCard>

              {/* PROJECT 2: E-FUEL / E-CHARGE LOGISTICS ENGINE */}
              <MotionCard className="rounded-2xl border border-amber-500/20 bg-slate-900/60 p-6 transition-all hover:border-amber-400/40 hover:bg-slate-900/90 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-amber-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>ON-DEMAND EMERGENCY LOGISTICS</span>
                  </div>

                  {/* Mode Switcher */}
                  <div className="flex items-center bg-slate-950/80 p-0.5 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('efuel')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition ${
                        logisticsMode === 'efuel' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Fuel className="w-3 h-3" /> E-Fuel
                    </button>
                    <button
                      type="button"
                      onClick={() => setLogisticsMode('echarge')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition ${
                        logisticsMode === 'echarge' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <BatteryCharging className="w-3 h-3" /> E-Charge (EV)
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <h3 className="text-xl font-bold text-slate-100">
                    {logisticsMode === 'efuel' ? 'E-Fuel: On-Demand Highway Fuel Dispatch' : 'E-Charge: Mobile EV Charging Fleet'}
                  </h3>

                  <div className="flex items-center gap-2">
                    <ArchitectureDrawer data={activeLogistics} triggerText="Architecture Sheet" accentColor="amber" />
                    {logisticsMode === 'efuel' ? (
                      <LiveDemoModal
                        url="/efuel-demo.html"
                        title="E-Fuel Logistics & Dispatch Simulator"
                        triggerText="Live Sandbox"
                        themeColor="amber"
                      />
                    ) : (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                        PRD Architecture
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {logisticsMode === 'efuel'
                    ? 'An emergency fuel replenishment platform resolving highway breakdown gaps through real-time geodesic matching, statutory compliance gates, and zero-idle cloud topology.'
                    : 'A serverless EV charging logistics system matching stranded electric vehicles with mobile battery vans using Haversine geodesic routing, kW billing, and cold-start mitigations.'}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 font-mono">
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                    <span className="text-amber-300 block mb-1">
                      {logisticsMode === 'efuel' ? '📍 Algorithmic Sourcing' : '⚡ Dynamic EV Metering'}
                    </span>
                    {logisticsMode === 'efuel'
                      ? 'Client-side Haversine spatial resolution with Geohash clustering to match stations in <1ms.'
                      : 'Per-kW algorithmic pricing + geodesic delivery fee processed via UPI Intent.'}
                  </div>
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                    <span className="text-amber-300 block mb-1">
                      {logisticsMode === 'efuel' ? '🔐 Compliance Gate' : '🛡️ Zero-Trust Handshake'}
                    </span>
                    {logisticsMode === 'efuel'
                      ? '4-digit PIN verification required on-site; PESO container compliance enforcement.'
                      : 'Out-of-band PIN unlocks van charging sequence; function pre-warming masks cold starts.'}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(logisticsMode === 'efuel'
                    ? ['React 18', 'Azure Functions', 'Cosmos DB NoSQL', 'Haversine Formula', 'PESO Safety', 'UPI Intent']
                    : ['EV Logistics', 'Azure Static Apps', 'Azure Key Vault', 'Geohash Radius', 'Managed Identity', 'OWASP Defense']
                  ).map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-mono text-amber-300 bg-amber-950/50 rounded-full border border-amber-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </MotionCard>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="scroll-mt-16">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
                Professional Experience
              </h3>

              <MotionCard className="rounded-xl border border-slate-800/80 p-5 transition-all hover:border-slate-700 hover:bg-slate-800/30">
                <div className="text-xs font-mono text-teal-400 mb-1">DEC 2021 — DEC 2022</div>
                <h4 className="text-base font-semibold text-slate-100">
                  Software Engineer · Persistent Systems Ltd.
                </h4>
                <div className="text-xs font-mono text-slate-400 mb-3">Hinjewadi, Pune, India</div>
                <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                  <li>Developed and validated high-throughput backend APIs utilizing Spring Boot and automated Postman suites.</li>
                  <li>Configured NoSQL database clusters, assisted schema modeling, and tuned query performance.</li>
                  <li>Managed continuous integration pipelines with Maven and streamlined team Git versioning in Agile sprints.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'REST APIs', 'NoSQL', 'Maven', 'Git', 'Agile'].map(s => (
                    <span key={s} className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-300 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </MotionCard>
            </section>

            {/* SUPPORTING PROJECTS */}
            <section id="projects" className="scroll-mt-16 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                Other Engineering Projects
              </h3>

              {/* Payment Gateway */}
              <MotionCard className="rounded-xl border border-slate-800/80 p-5 hover:border-slate-700 hover:bg-slate-800/20 transition">
                <h4 className="text-base font-semibold text-slate-200">Serverless Payment Gateway Integration</h4>
                <p className="mt-2 text-sm text-slate-400 leading-normal">
                  Engineered stateless Azure Function components to handle secure payment workflows, ensure transaction idempotency, 
                  and scale communication across microservices.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Microsoft Azure', 'RESTful APIs', 'Maven', 'Serverless'].map(t => (
                    <span key={t} className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </MotionCard>

              {/* Object Detection */}
              <MotionCard className="rounded-xl border border-slate-800/80 p-5 hover:border-slate-700 hover:bg-slate-800/20 transition">
                <h4 className="text-base font-semibold text-slate-200">Real-Time Object Detection (HAAR Cascade)</h4>
                <p className="mt-2 text-sm text-slate-400 leading-normal">
                  Constructed an image recognition pipeline applying AdaBoost learning algorithms with OpenCV 
                  for frame-by-frame object classification across live camera streams.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python', 'OpenCV', 'AdaBoost', 'Computer Vision'].map(t => (
                    <span key={t} className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </MotionCard>
            </section>

            {/* SKILLS & SECURITY */}
            <section id="skills" className="scroll-mt-16 space-y-8">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">Education & Credentials</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-slate-200">M.Tech in Information Security / Cyber Security</div>
                    <div className="text-teal-400 text-xs font-mono">MAKAUT · 2024 – 2026</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">B.Tech in Information Technology</div>
                    <div className="text-slate-400 text-xs font-mono">Techno India Group (BIT), MAKAUT · 2016 – 2020</div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
                      <ShieldCheck className="w-3.5 h-3.5" /> Microsoft Certified: Azure Fundamentals (AZ-900)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">Core Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Core Java', 'Spring Boot', 'Python', 'TypeScript', 'Node.js', 
                    'REST APIs', 'Docker', 'Kubernetes', 'Azure Cloud', 'Cosmos DB', 
                    'PostgreSQL', 'MongoDB', 'Wireshark', 'Metasploit', 'Nmap', 'Git'
                  ].map(skill => (
                    <span key={skill} className="px-2.5 py-1 text-xs font-mono bg-slate-800/70 text-slate-300 rounded border border-slate-700/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
