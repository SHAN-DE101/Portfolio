"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Clock, Video, CheckCircle2, ArrowRight } from "lucide-react";
import { sound } from "@/lib/sounds";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps) {
  const [topic, setTopic] = useState("SDE / Backend Opportunity");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleBook = () => {
    sound.playSuccess();
    const subject = encodeURIComponent("15-min Discussion: " + topic);
    const body = encodeURIComponent("Hi Shantanu,\n\nI would like to schedule a 15-minute chat regarding: " + topic + ".\n\nPlease let me know your available slots this week.\n\nBest regards,");
    window.location.href = "mailto:deyshantanu101@gmail.com?subject=" + subject + "&body=" + body;
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2500);
  };

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
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Schedule a Quick Chat</h3>
              <p className="text-xs text-zinc-400">15-min Technical or Hiring Discussion</p>
            </div>
          </div>
          <button onClick={() => { sound.playClick(); onClose(); }} className="p-1 rounded-lg text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-8 flex flex-col items-center justify-center space-y-2 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-bounce" />
            <p className="text-sm font-medium text-white">Launching Calendar Transmission...</p>
            <p className="text-xs text-zinc-500">Check your email client to dispatch the invite.</p>
          </div>
        ) : (
          <div className="space-y-4 text-xs">
            <div className="p-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-2">
              <div className="flex items-center justify-between text-zinc-300">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-emerald-400" /> 15 Minutes</span>
                <span className="flex items-center gap-1.5 text-zinc-400"><Video className="w-3.5 h-3.5 text-indigo-400" /> Google Meet / Zoom</span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono">Timezone: Asia/Kolkata (IST) • Flexible across US/EU/APAC</p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-zinc-400 font-mono text-[11px]">SELECT PURPOSE</label>
              {["SDE / Backend Opportunity", "Distributed Systems Architecture", "Cyber Security / Pen-Testing Chat", "General Tech Networking"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => { sound.playClick(); setTopic(item); }}
                  className={"w-full flex items-center justify-between px-3 py-2 rounded-xl border text-left transition-all cursor-pointer " + (topic === item ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300" : "border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-zinc-200")}
                >
                  <span>{item}</span>
                  {topic === item && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
              ))}
            </div>

            <button
              onClick={handleBook}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all active:scale-95 shadow-md cursor-pointer text-xs"
            >
              <span>Confirm & Send Calendar Invite</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
