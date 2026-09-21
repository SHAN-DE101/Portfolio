"use client";

import { ArrowLeft, Printer, Download, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans p-6 sm:p-12 selection:bg-white selection:text-black">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Navigation Bar (Hidden during Print) */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 print:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-zinc-200 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Printable Resume Document */}
        <article className="space-y-8 print:text-black">
          {/* Header */}
          <header className="space-y-2 border-b border-zinc-800/80 pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
              Shantanu Dey
            </h1>
            <p className="text-sm font-mono text-emerald-400 print:text-gray-700">
              Software Engineer • Backend, Cloud &amp; Cyber Security
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-zinc-400 print:text-gray-600 pt-1">
              <span>deyshantanu101@gmail.com</span>
              <span>•</span>
              <span>github.com/SHAN-DE101</span>
              <span>•</span>
              <span>linkedin.com/in/shantanu-dey-7724571b2</span>
              <span>•</span>
              <span>Kolkata / Pune, India</span>
            </div>
          </header>

          {/* Summary */}
          <section className="space-y-2">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 print:text-gray-900">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-gray-800 leading-relaxed">
              Software Engineer with 1+ year of professional enterprise experience at <strong>Persistent Systems Ltd.</strong> specializing in Java, Spring Boot, RESTful APIs, and Azure Cloud. Currently pursuing an <strong>M.Tech in Information &amp; Cyber Security</strong> at MAKAUT. Proficient in building low-latency microservices, automating test coverage via Postman, and securing distributed backend infrastructures.
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 print:text-gray-900">
              Work Experience
            </h2>
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <span className="font-semibold text-white print:text-black">Software Engineer — Persistent Systems Ltd.</span>
                <span className="text-xs font-mono text-zinc-500 print:text-gray-600">12/2021 — 12/2022 | Pune, India</span>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-400 print:text-gray-700 space-y-1 pt-1">
                <li>Designed, tested, and validated high-throughput RESTful API microservices using Spring Boot.</li>
                <li>Constructed automated API regression validation suites using Postman and Newman.</li>
                <li>Integrated NoSQL database pipelines with strict consistency and managed builds using Maven.</li>
                <li>Collaborated within Agile/Scrum sprints, maintaining rigorous Git code reviews and version tracking.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 print:text-gray-900">
              Education
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-white print:text-black">M.Tech in Information &amp; Cyber Security</p>
                  <p className="text-xs text-zinc-400 print:text-gray-600">Maulana Abul Kalam Azad University of Technology (MAKAUT)</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 print:text-gray-600">2024 — 2026</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-white print:text-black">B.Tech in Information Technology</p>
                  <p className="text-xs text-zinc-400 print:text-gray-600">Techno India Group (BIT), MAKAUT</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 print:text-gray-600">2016 — 2020</span>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-2">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-400 print:text-gray-900">
              Technical Competencies
            </h2>
            <div className="text-xs font-mono text-zinc-300 print:text-gray-800 space-y-1">
              <p><span className="text-zinc-500 print:text-gray-600">Languages &amp; Backend:</span> Core Java, Spring Boot, REST APIs, Python, Hibernate, Node.js</p>
              <p><span className="text-zinc-500 print:text-gray-600">Cloud &amp; Databases:</span> Microsoft Azure (AZ-900), PostgreSQL, MongoDB, NoSQL, Docker, Maven</p>
              <p><span className="text-zinc-500 print:text-gray-600">Security &amp; Tooling:</span> Wireshark, Nmap, Metasploit, Postman, Git, Linux, CI/CD Pipelines</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
