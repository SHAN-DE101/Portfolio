'use client';

import { useState, useEffect } from 'react';
import { Terminal, FileDown } from 'lucide-react';
import ContactModal from './ContactModal';
import TerminalModal from './TerminalModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav
        className={`flex items-center gap-2 sm:gap-4 px-4 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? 'bg-slate-950/80 border-slate-700/60 shadow-2xl shadow-teal-500/10'
            : 'bg-slate-900/50 border-slate-800/80'
        }`}
      >
        <a href="#" className="flex items-center gap-2 text-slate-100 font-mono text-xs font-semibold px-2">
          <Terminal className="w-4 h-4 text-teal-400" />
          <span className="tracking-tight">shantanu.dey</span>
        </a>

        <div className="h-4 w-[1px] bg-slate-800" />

        <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
          <a href="#about" className="px-2.5 py-1 rounded-full hover:text-teal-300 hover:bg-slate-800/60 transition">
            // about
          </a>
          <a href="#projects" className="px-2.5 py-1 rounded-full hover:text-teal-300 hover:bg-slate-800/60 transition">
            // projects
          </a>
          <a href="#experience" className="px-2.5 py-1 rounded-full hover:text-teal-300 hover:bg-slate-800/60 transition">
            // work
          </a>
          <a href="#skills" className="px-2.5 py-1 rounded-full hover:text-teal-300 hover:bg-slate-800/60 transition">
            // stack
          </a>
        </div>

        <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

        <div className="flex items-center gap-2">
          <TerminalModal />
          <a
            href="/ShantanuDey_Resume.pdf"
            download
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
          >
            <FileDown className="w-3.5 h-3.5" /> CV
          </a>
          <ContactModal />
        </div>
      </nav>
    </header>
  );
}
