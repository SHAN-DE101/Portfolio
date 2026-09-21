"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Clock,
  Sparkles,
  Terminal,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Check,
  Command,
  Search,
  X,
  Code2,
  Shield,
  Cloud,
  Layers,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import TechMarquee from "@/components/Marquee";
import SpotlightCard from "@/components/SpotlightCard";
import TerminalModal from "@/components/TerminalModal";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Home() {
  const [time, setTime] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "k" && (e.metaKey || e.ctrlKey)) ||
        (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName))
      ) {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "`" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
        setTerminalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("deyshantanu101@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "Serverless Payment Gateway",
      tagline:
        "High-reliability backend system with Azure Functions, handling transactional integrity, secure tokens, and low-latency REST endpoints.",
      stack: ["Java", "Spring Boot", "Azure Cloud", "REST APIs", "Maven"],
      metrics: "Sub-100ms • Zero data loss",
      link: "https://github.com/SHAN-DE101",
    },
    {
      title: "Financial Transaction & Management System",
      tagline:
        "Engineered transactional services with NoSQL persistence layer, automated Postman validation suites, and rigorous data consistency models.",
      stack: ["Spring Boot", "NoSQL", "Postman", "REST APIs", "Git"],
      metrics: "Automated test coverage",
      link: "https://github.com/SHAN-DE101",
    },
    {
      title: "Real-Time Object Detection Engine",
      tagline:
        "Computer vision image and live video classification pipeline utilizing AdaBoost algorithm and HAAR Cascade models for ultra-fast inference.",
      stack: ["Python", "OpenCV", "AdaBoost", "HAAR Cascades"],
      metrics: "Live video stream processing",
      link: "https://github.com/SHAN-DE101",
    },
  ];

  const marqueeSkills = [
    "Core Java",
    "Spring Boot",
    "REST APIs",
    "Python",
    "Azure Cloud",
    "NoSQL / MongoDB",
    "PostgreSQL",
    "Microservices",
    "Docker",
    "Kubernetes",
    "Postman",
    "Maven",
    "Git",
    "Wireshark / Nmap",
    "System Design",
  ];

  const commandItems = [
    { label: "Launch Interactive Terminal (`~`)", action: () => { setCmdOpen(false); setTerminalOpen(true); }, icon: Terminal, hint: "` key" },
    { label: "Copy Email Address", action: copyEmail, icon: Mail, hint: "deyshantanu101@gmail.com" },
    { label: "View GitHub Profile", action: () => window.open("https://github.com/SHAN-DE101", "_blank"), icon: GithubIcon, hint: "SHAN-DE101" },
    { label: "View LinkedIn", action: () => window.open("https://www.linkedin.com/in/shantanu-dey-7724571b2/", "_blank"), icon: LinkedinIcon, hint: "Connect" },
    { label: "Jump to Projects", action: () => { window.location.href = "#projects"; setCmdOpen(false); }, icon: Sparkles, hint: "#projects" },
    { label: "Jump to Experience", action: () => { window.location.href = "#experience"; setCmdOpen(false); }, icon: Briefcase, hint: "#experience" },
  ];

  const filteredCommands = commandItems.filter(
    (c) =>
      c.label.toLowerCase().includes(searchFilter.toLowerCase()) ||
      c.hint.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black font-sans relative">
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40 z-0" />

      {/* Floating Pill Nav */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-6 px-6 py-2.5 rounded-full border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl shadow-2xl text-xs font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <button
            onClick={() => setTerminalOpen(true)}
            className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CLI</span>
          </button>
          <a
            href="https://github.com/SHAN-DE101"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-200 hover:bg-white hover:text-black transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-32 space-y-24">
        {/* Hero Section */}
        <section id="about" className="space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for SDE / Backend Roles</span>
            <span className="text-zinc-500">•</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Clock className="w-3 h-3" />
              {time ? `${time} IST` : "Kolkata, IN"}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Shantanu Dey. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
                Software &amp; Systems Engineer.
              </span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Software Engineer with industry experience at <span className="text-white font-medium">Persistent Systems</span>. 
              Specializing in <span className="text-zinc-200">Java, Spring Boot, REST APIs, and Azure Cloud</span> with an academic focus on 
              <span className="text-zinc-200"> M.Tech Information &amp; Cyber Security</span>. Passionate about resilient distributed systems, 
              scalable databases, and secure architecture.
            </p>
          </div>

          {/* Social / Contact Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
              <span>{copied ? "Email Copied!" : "deyshantanu101@gmail.com"}</span>
            </button>
            <button
              onClick={() => setTerminalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Interactive CLI</span>
            </button>
            <a
              href="https://github.com/SHAN-DE101"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:border-zinc-700 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shantanu-dey-7724571b2/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:border-zinc-700 hover:text-white transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Impact Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40">
              <span className="block text-xl font-bold text-white">1+ Year</span>
              <span className="text-[11px] text-zinc-500">Persistent Systems SDE</span>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40">
              <span className="block text-xl font-bold text-emerald-400">AZ-900</span>
              <span className="text-[11px] text-zinc-500">Azure Certified</span>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40">
              <span className="block text-xl font-bold text-white">M.Tech</span>
              <span className="text-[11px] text-zinc-500">Cyber Security Focus</span>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-800/80 bg-zinc-950/40">
              <span className="block text-xl font-bold text-indigo-400">REST APIs</span>
              <span className="text-[11px] text-zinc-500">Postman Automated</span>
            </div>
          </div>
        </section>

        {/* Experience Section with Spotlight */}
        <section id="experience" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              Experience
            </h2>
            <span className="text-xs text-zinc-500 font-mono">1 Year Industry</span>
          </div>

          <SpotlightCard className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  Software Engineer
                </h3>
                <p className="text-sm text-zinc-400">
                  <span className="text-white font-medium">Persistent Systems Ltd.</span> • Hinjewadi, Pune
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500">12/2021 — 12/2022</span>
            </div>
            <ul className="space-y-2.5 text-sm text-zinc-400 list-disc list-inside leading-relaxed">
              <li>Designed, built, and validated robust backend REST APIs using <span className="text-zinc-200">Spring Boot</span> and Postman.</li>
              <li>Configured and integrated <span className="text-zinc-200">NoSQL database</span> storage pipelines, managing dependency builds via Maven.</li>
              <li>Engineered clean code in Agile sprints, ensuring seamless version control and code reviews with Git.</li>
              <li>Supported debugging, profiling, and testing to enhance backend throughput and reliability.</li>
            </ul>
          </SpotlightCard>
        </section>

        {/* Featured Projects with Spotlight */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Featured Projects
            </h2>
            <span className="text-xs text-zinc-500 font-mono">03 Projects</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <SpotlightCard>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                        <h3 className="text-lg font-semibold text-white hover:text-emerald-400 transition-colors">
                          {p.title}
                        </h3>
                        <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {p.metrics}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">{p.tagline}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all shrink-0 ml-4"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Marquee */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-400" />
            Skills &amp; Technologies
          </h2>
          <TechMarquee items={marqueeSkills} />

          {/* Categorized Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <SpotlightCard className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200 text-sm font-semibold">
                <Code2 className="w-4 h-4 text-emerald-400" />
                Backend &amp; Languages
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Core Java, Spring Boot, Hibernate, Python, RESTful APIs, Node.js, Microservices, OOP, Concurrency.
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200 text-sm font-semibold">
                <Cloud className="w-4 h-4 text-blue-400" />
                Cloud &amp; Databases
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Microsoft Azure (AZ-900), PostgreSQL, MongoDB, NoSQL, MySQL, Docker, Kubernetes, CI/CD, Maven, Linux.
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200 text-sm font-semibold">
                <Shield className="w-4 h-4 text-purple-400" />
                Security &amp; Testing
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Postman, JUnit, Wireshark, Nmap, Metasploit, Secure Coding, Agile &amp; Scrum Methodologies.
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SpotlightCard className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              Education
            </h3>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-zinc-800 pl-3">
                <p className="text-white font-medium">M.Tech in Information &amp; Cyber Security</p>
                <p className="text-xs text-zinc-400">MAKAUT, Kolkata • 2024 — 2026</p>
              </div>
              <div className="border-l-2 border-zinc-800 pl-3">
                <p className="text-white font-medium">B.Tech in Information Technology</p>
                <p className="text-xs text-zinc-400">Techno India Group (BIT), MAKAUT • 2016 — 2020</p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              Certifications &amp; Training
            </h3>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-zinc-800 pl-3">
                <p className="text-white font-medium">Microsoft Certified: Azure Fundamentals (AZ-900)</p>
                <p className="text-xs text-zinc-400">Microsoft • Issued May 2022</p>
              </div>
              <div className="border-l-2 border-zinc-800 pl-3">
                <p className="text-white font-medium">Basic Cyber Security Practices</p>
                <p className="text-xs text-zinc-400">CDAC Kolkata • Issued May 2021</p>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Shantanu Dey. Built with Next.js &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/SHAN-DE101" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/shantanu-dey-7724571b2/" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>

      {/* Floating Bottom Quick Action Trigger */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setTerminalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl shadow-2xl text-xs text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all group cursor-pointer"
          title="Toggle Shell Terminal"
        >
          <Terminal className="w-3.5 h-3.5" />
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">`</kbd>
        </button>
        <button
          onClick={() => setCmdOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl shadow-2xl text-xs text-zinc-400 hover:border-zinc-600 hover:text-white transition-all group cursor-pointer"
        >
          <Command className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">/</kbd>
        </button>
      </div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {cmdOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800/80">
                <Search className="w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none"
                />
                <button
                  onClick={() => setCmdOpen(false)}
                  className="p-1 rounded-lg text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2 max-h-72 overflow-y-auto space-y-1">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, i) => {
                    const Icon = cmd.icon;
                    return (
                      <button
                        key={i}
                        onClick={cmd.action}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-zinc-900 text-left text-sm text-zinc-300 hover:text-white transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                          <span>{cmd.label}</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400">{cmd.hint}</span>
                      </button>
                    );
                  })
                ) : (
                  <p className="p-4 text-center text-xs text-zinc-500">No matching commands found.</p>
                )}
              </div>

              <div className="px-4 py-2 bg-zinc-900/40 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Navigation &amp; Actions</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terminal Shell Modal */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
