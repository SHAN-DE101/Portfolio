"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function SkillRadar() {
  const skills = [
    { label: "Distributed Systems & REST", level: 92, tag: "Java / Spring" },
    { label: "Cloud & Microservices", level: 88, tag: "Azure (AZ-900)" },
    { label: "Application & Network Security", level: 90, tag: "M.Tech Cyber" },
    { label: "NoSQL & Database Architecture", level: 86, tag: "Mongo / Postgres" },
    { label: "Automated Testing & CI/CD", level: 89, tag: "Postman / Git" },
  ];

  return (
    <SpotlightCard className="space-y-4">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-semibold text-white font-mono">
            System Competency Matrix
          </h3>
        </div>
        <span className="text-[10px] font-mono text-zinc-500">AUDITED METRICS</span>
      </div>

      <div className="space-y-3 pt-1">
        {skills.map((s, idx) => (
          <div key={s.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-200 font-medium">{s.label}</span>
              <span className="text-[10px] font-mono text-emerald-400">{s.tag}</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/80">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}
