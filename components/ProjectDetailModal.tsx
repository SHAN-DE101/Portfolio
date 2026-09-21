"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Cpu, ArrowRight, Layers } from "lucide-react";
import { sound } from "@/lib/sounds";

export interface ProjectDetail {
  title: string;
  category: string;
  tagline: string;
  problem: string;
  architecture: string[];
  metrics: string[];
  stack: string[];
  github: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-7 shadow-2xl space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto font-sans"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-zinc-800/80 pb-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Problem Statement */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            Engineering Problem &amp; Scope
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800/60">
            {project.problem}
          </p>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            Architectural Blueprint
          </h4>
          <ul className="space-y-2 text-xs text-zinc-300">
            {project.architecture.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-mono text-[11px] pt-0.5">0{idx + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Metrics */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Validated Production Metrics
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-xs font-mono text-zinc-300 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
          <span className="text-[11px] font-mono text-zinc-500">Source: GitHub Verified</span>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all cursor-pointer shadow-md"
          >
            <span>View Source Code</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
