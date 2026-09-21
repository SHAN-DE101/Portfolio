"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[120] flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/40 bg-zinc-950/90 text-zinc-200 text-xs font-mono shadow-[0_0_25px_rgba(16,185,129,0.25)] backdrop-blur-xl pointer-events-none"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
