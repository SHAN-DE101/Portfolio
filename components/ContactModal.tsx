"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, Check, Sparkles } from "lucide-react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill a mailto link directly so it's 100% functional with zero third-party backend keys
    const subject = encodeURIComponent(`Inquiry from ${name} via Portfolio`);
    const body = encodeURIComponent(`Hi Shantanu,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:deyshantanu101@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl space-y-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Get in Touch</h3>
              <p className="text-xs text-zinc-400">Direct transmission to Shantanu Dey</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {sent ? (
          <div className="py-8 flex flex-col items-center justify-center space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-white">Opening your mail client...</p>
            <p className="text-xs text-zinc-500">Thank you for reaching out!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block text-zinc-400 mb-1 font-mono">YOUR NAME</label>
              <input
                type="text"
                required
                placeholder="e.g., Alex Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 transition-colors"
              />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1 font-mono">YOUR EMAIL</label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 transition-colors"
              />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1 font-mono">MESSAGE / INQUIRY</label>
              <textarea
                required
                rows={3}
                placeholder="Hey Shantanu, I saw your work on payment gateways and wanted to discuss an opportunity..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/80 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Direct Email</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
