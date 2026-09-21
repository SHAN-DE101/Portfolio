"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Server,
  Layers,
  Terminal,
  Award,
  GraduationCap,
  Briefcase,
  Copy,
  Check,
} from "lucide-react";

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
  const [copied, setCopied] = useState<boolean>(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText("deyshantanu101@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "Serverless Payment Gateway",
      tagline:
        "Engineered serverless payment processing modules on Microsoft Azure ensuring secure transaction workflows and high resilience.",
      stack: ["Java", "Spring Boot", "Azure Functions", "REST APIs", "Maven"],
      highlight: "Cloud & Fintech",
      link: "https://github.com/SHAN-DE101",
    },
    {
      title: "Secure Financial Transaction Engine",
      tagline:
        "High-performance transactional backend with custom validation pipelines, NoSQL persistence, and rigorous API test suites.",
      stack: ["Java", "Spring Boot", "NoSQL", "Postman", "JUnit"],
      highlight: "Banking & APIs",
      link: "https://github.com/SHAN-DE101",
    },
    {
      title: "HAAR Cascade Object Detection",
      tagline:
        "Real-time computer vision classifier built using Python, OpenCV, and AdaBoost algorithms for live stream image processing.",
      stack: ["Python", "OpenCV", "AdaBoost", "NumPy"],
      highlight: "Computer Vision",
      link: "https://github.com/SHAN-DE101",
    },
    {
      title: "AI Token Gateway",
      tagline:
        "Distributed rate limiter and token proxy with low-latency caching and live observability metrics.",
      stack: ["TypeScript", "Next.js", "Redis", "Vercel Edge"],
      highlight: "Distributed Systems",
      link: "https://ai-token-gateway.vercel.app",
    },
  ];

  const skillCategories = [
    {
      category: "Backend & Systems",
      skills: ["Java", "Spring Boot", "Hibernate", "RESTful APIs", "Python", "Golang", "Microservices", "System Design"],
    },
    {
      category: "Cloud, DevOps & Build",
      skills: ["Azure (AZ-900)", "Docker", "Kubernetes", "Git & GitHub", "Maven", "CI/CD", "Linux", "Jenkins"],
    },
    {
      category: "Databases & Storage",
      skills: ["MongoDB (NoSQL)", "PostgreSQL", "MySQL", "Oracle DB", "Query Optimization", "Database Indexing"],
    },
    {
      category: "Cybersecurity & Pentesting",
      skills: ["Wireshark", "Metasploit", "Nmap", "Tcpdump", "John the Ripper", "Nessus", "Secure Coding", "API Testing"],
    },
  ];

  const marqueeSkillsRow1 = [
    "Java",
    "Spring Boot",
    "Azure Cloud",
    "Microservices",
    "RESTful APIs",
    "MongoDB",
    "Docker",
    "Python",
    "PostgreSQL",
  ];

  const marqueeSkillsRow2 = [
    "Cyber Security",
    "Kubernetes",
    "Wireshark",
    "Metasploit",
    "Maven",
    "System Design",
    "Nmap",
    "Linux Kernel/Bash",
    "Next.js",
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black font-sans relative">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-40 z-0" />

      {/* Sticky Pill Header */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-4 sm:gap-6 px-5 py-2.5 rounded-full border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl shadow-2xl text-xs font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Arsenal
          </a>
          <a
            href="https://github.com/SHAN-DE101"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-200 hover:bg-white hover:text-black transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-28 space-y-28">
        {/* Hero Section */}
        <section id="about" className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Software Engineer Roles</span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1 text-zinc-400">
              <Clock className="w-3 h-3" />
              {time ? `${time} IST` : "Kolkata, IN"}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Shantanu Dey. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
                Software Engineer &amp; Systems Builder.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Specialized in backend architecture, scalable REST APIs, and Azure cloud solutions. 
              Currently pursuing <span className="text-zinc-200 font-medium">M.Tech in Cyber Security</span> with hands-on experience building resilient microservices in Java, Spring Boot, and NoSQL.
            </p>
          </div>

          {/* Social / Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all shadow-md"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
            <a
              href="mailto:deyshantanu101@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:border-zinc-700 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
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
            <a
              href="https://github.com/SHAN-DE101"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:border-zinc-700 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* Dynamic Infinite Marquees */}
        <section className="space-y-3 -mx-6 sm:mx-0">
          <div className="overflow-hidden py-1 mask-gradient">
            <div className="animate-marquee-left gap-3">
              {[...marqueeSkillsRow1, ...marqueeSkillsRow1, ...marqueeSkillsRow1].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800/80 bg-zinc-950/70 text-zinc-300 text-xs sm:text-sm font-medium hover:border-zinc-600 hover:text-white transition-all shadow-sm shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden py-1 mask-gradient">
            <div className="animate-marquee-right gap-3">
              {[...marqueeSkillsRow2, ...marqueeSkillsRow2, ...marqueeSkillsRow2].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800/80 bg-zinc-950/70 text-zinc-300 text-xs sm:text-sm font-medium hover:border-zinc-600 hover:text-white transition-all shadow-sm shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works / Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-400" />
              Featured Projects
            </h2>
            <span className="text-xs text-zinc-500 font-mono">2022 — 2026</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {p.title}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono">
                        {p.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">{p.tagline}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education Bento */}
        <section id="experience" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            Experience &amp; Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Work Experience */}
            <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>12/2021 — 12/2022</span>
                <span className="text-emerald-400">Pune, India</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Software Engineer</h3>
                <p className="text-xs text-zinc-400">Persistent Systems Ltd.</p>
              </div>
              <ul className="text-xs text-zinc-400 space-y-2 leading-relaxed list-disc list-inside">
                <li>Engineered backend microservice APIs using Spring Boot and validated with Postman.</li>
                <li>Assisted in NoSQL database configuration, indexing, and automated Maven build pipelines.</li>
                <li>Collaborated within Agile/Scrum sprints, managing code with Git version control.</li>
              </ul>
            </div>

            {/* Certifications & Training */}
            <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 space-y-4">
              <div className="flex items-center gap-2 text-white text-sm font-semibold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certifications &amp; Training</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
                  <span className="text-xs text-zinc-500 font-mono">Microsoft Certified</span>
                  <h4 className="text-sm font-medium text-zinc-200">Azure Fundamentals (AZ-900)</h4>
                  <p className="text-xs text-zinc-400">Issued May 2022</p>
                </div>
                <div className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
                  <span className="text-xs text-zinc-500 font-mono">CDAC Kolkata</span>
                  <h4 className="text-sm font-medium text-zinc-200">Basic Cyber Security Practices</h4>
                  <p className="text-xs text-zinc-400">Issued May 2021</p>
                </div>
              </div>
            </div>

            {/* Education 1: M.Tech */}
            <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>2024 — 2026</span>
                <span className="text-indigo-400">Pursuing</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-semibold text-white">M.Tech Information &amp; Cyber Security</h3>
              </div>
              <p className="text-xs text-zinc-400">
                Maulana Abul Kalam Azad University of Technology (MAKAUT), Kolkata
              </p>
            </div>

            {/* Education 2: B.Tech */}
            <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>2016 — 2020</span>
                <span className="text-zinc-400">Graduated</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-semibold text-white">B.Tech Information Technology</h3>
              </div>
              <p className="text-xs text-zinc-400">
                Techno India Group (BIT), MAKAUT, Kolkata
              </p>
            </div>
          </div>
        </section>

        {/* Technical Arsenal / Categorized Skills */}
        <section id="skills" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              Technical Arsenal
            </h2>
            <span className="text-xs text-zinc-500 font-mono">Core Competencies</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/50 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-zinc-400" />
                  <h3 className="text-sm font-semibold text-zinc-200">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© {new Date().getFullYear()} Shantanu Dey. Engineered with Next.js &amp; Tailwind.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SHAN-DE101"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/shantanu-dey-7724571b2/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:deyshantanu101@gmail.com"
              className="hover:text-zinc-300 transition-colors"
            >
              deyshantanu101@gmail.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
