import SpotlightCursor from '@/components/SpotlightCursor';
import NavMenu from '@/components/NavMenu';
import LiveDemoModal from '@/components/LiveDemoModal';
import MotionCard from '@/components/MotionCard';
import { 
  Mail, 
  FileDown, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Layers
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

export default function Home() {
  return (
    <div className="relative bg-[#0b1120] text-slate-300 selection:bg-teal-300 selection:text-slate-900 min-h-screen">
      <SpotlightCursor />

      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">

          {/* ================= LEFT PANE (Sticky Sidebar) ================= */}
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
            <div className="flex items-center gap-5 mt-8 lg:mt-0">
              <a 
                href="https://github.com/SHAN-DE101" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-teal-300 transition"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/shantanu-dey-7724571b2/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-teal-300 transition"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="mailto:deyshantanu101@gmail.com" 
                className="text-slate-400 hover:text-teal-300 transition"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/ShantanuDey_Resume.pdf"
                download
                className="flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full border border-teal-500/30 text-teal-300 hover:bg-teal-500/10 transition"
              >
                <FileDown className="w-3.5 h-3.5" /> Resume
              </a>
            </div>
          </header>

          {/* ================= RIGHT PANE (Scrollable Feed) ================= */}
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
                  <div className="flex items-center gap-3">
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
                      className="text-slate-400 hover:text-teal-300 transition"
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

              {/* PROJECT 2: E-FUEL */}
              <MotionCard className="rounded-2xl border border-amber-500/20 bg-slate-900/60 p-6 transition-all hover:border-amber-400/40 hover:bg-slate-900/90 shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> LOGISTICS & SPATIAL ENGINE
                  </span>
                  <div className="flex items-center gap-3">
                    <LiveDemoModal
                      url="/efuel-demo.html"
                      title="E-Fuel Logistics & Dispatch Simulator"
                      triggerText="Live Sandbox"
                      themeColor="amber"
                    />
                    <a 
                      href="/efuel-demo.html" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-amber-300 transition"
                      aria-label="Open E-Fuel in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100">
                  E-Fuel: On-Demand Highway Fuel Dispatch
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  An emergency fuel replenishment platform resolving highway breakdown gaps through real-time geodesic 
                  matching, statutory compliance gates, and zero-idle cloud topology.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 font-mono">
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                    <span className="text-amber-300 block mb-1">📍 Algorithmic Matching</span>
                    Client-side Haversine spatial resolution with Geohash clustering to match stations in &lt;1ms.
                  </div>
                  <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                    <span className="text-amber-300 block mb-1">🔐 Out-of-Band Handshake</span>
                    4-digit PIN verification required on-site; PESO container compliance enforcement.
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {['React 18', 'Azure Functions', 'Cosmos DB NoSQL', 'Haversine Formula', 'PESO Safety', 'UPI Intent'].map(tag => (
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
