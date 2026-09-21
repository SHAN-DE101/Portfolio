"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Volume2, VolumeX } from "lucide-react";
import { sound } from "@/lib/sounds";

export default function TelemetryWidget() {
  const [showTop, setShowTop] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [ping, setPing] = useState(24);

  useEffect(() => {
    setSoundOn(sound.enabled);
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(() => setPing(Math.floor(22 + Math.random() * 8)), 4000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundOn(newState);
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl text-[11px] font-mono text-zinc-400 shadow-xl">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-zinc-500">EDGE:</span>
        <span className="text-zinc-200">bom1</span>
        <span className="text-zinc-600">•</span>
        <span className="text-emerald-400">{ping}ms</span>
      </div>

      <button
        onClick={toggleSound}
        className="p-2 rounded-full border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-xl cursor-pointer"
        title={soundOn ? "Mute sound fx" : "Enable sound fx"}
      >
        {soundOn ? (
          <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
        )}
      </button>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-xl cursor-pointer"
          title="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
