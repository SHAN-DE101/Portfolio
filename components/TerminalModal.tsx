'use client';

import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export default function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init',
      output: (
        <div className="text-slate-400 space-y-1">
          <p className="text-teal-400">Shantanu Dey OS v2.5.0-cloud (x86_64-apple-darwin)</p>
          <p>Type <span className="text-amber-300 font-bold">&apos;help&apos;</span> to view available commands, or <span className="text-amber-300 font-bold">&apos;projects&apos;</span> to query system architectures.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener (CMD+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <p><span className="text-teal-400 font-bold">about</span> - Brief background & academic credentials</p>
            <p><span className="text-teal-400 font-bold">projects</span> - Flagship architectures (AI Gateway, E-Fuel, E-Charge)</p>
            <p><span className="text-teal-400 font-bold">curl gateway</span> - Ping AI Token Gateway edge simulator</p>
            <p><span className="text-teal-400 font-bold">skills</span> - Dump core backend and security stack</p>
            <p><span className="text-teal-400 font-bold">contact</span> - Display email and LinkedIn links</p>
            <p><span className="text-teal-400 font-bold">clear</span> - Clear terminal buffer</p>
            <p><span className="text-teal-400 font-bold">exit</span> - Close terminal window</p>
          </div>
        );
        break;

      case 'about':
        response = (
          <p className="text-slate-300">
            Software Engineer with enterprise backend experience at Persistent Systems Ltd. 
            Pursuing M.Tech in Cybersecurity at MAKAUT. Certified in Microsoft Azure Fundamentals (AZ-900).
          </p>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-slate-300">
            <p>1. <span className="text-teal-400 font-bold">AI Token Gateway</span>: Edge reverse proxy with sliding-window rate limiting & zero data retention.</p>
            <p>2. <span className="text-amber-400 font-bold">E-Fuel</span>: Real-time highway fuel logistics with client-side Haversine & PESO compliance gate.</p>
            <p>3. <span className="text-emerald-400 font-bold">E-Charge</span>: Mobile EV fast-charging fleet with dynamic per-kW algorithmic billing.</p>
          </div>
        );
        break;

      case 'curl gateway':
        response = (
          <div className="text-xs space-y-1 font-mono text-emerald-400 bg-slate-950 p-2.5 rounded border border-slate-800">
            <p>HTTP/2 200 OK</p>
            <p>x-edge-region: iad1</p>
            <p>x-rate-limit-remaining: 9942/10000 TPM</p>
            <p>x-latency: 3.42ms</p>
            <p className="text-slate-400">{`{"status":"HEALTHY","upstream":"openai","routing":"virtual_key_0x8f2"}`}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-slate-300 font-mono text-xs">
            <p><span className="text-teal-300">Backend:</span> Core Java, Spring Boot, Node.js, REST Microservices</p>
            <p><span className="text-teal-300">Cloud/DB:</span> Microsoft Azure, Azure Functions, Cosmos DB, PostgreSQL</p>
            <p><span className="text-teal-300">Security:</span> Wireshark, Metasploit, Nmap, Zero-Retention Logging</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-slate-300 space-y-1">
            <p>Email: <a href="mailto:deyshantanu101@gmail.com" className="text-teal-300 underline">deyshantanu101@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/shantanu-dey-7724571b2/" target="_blank" rel="noreferrer" className="text-teal-300 underline">linkedin.com/in/shantanu-dey-7724571b2</a></p>
            <p>GitHub: <a href="https://github.com/SHAN-DE101" target="_blank" rel="noreferrer" className="text-teal-300 underline">github.com/SHAN-DE101</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        setIsOpen(false);
        setInput('');
        return;

      default:
        response = (
          <p className="text-rose-400">
            zsh: command not found: {cmd}. Type &apos;help&apos; for list of valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  return (
    <>
      {/* Trigger Button in Navbar */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 hover:border-teal-500/40 text-[11px] font-mono text-slate-300 transition"
      >
        <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
        <span>CLI Shell</span>
        <kbd className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700">⌘K</kbd>
      </button>

      {/* Terminal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs">
            {/* Header Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-400 text-[11px]">shantanu@edge-node-iad1:~ (zsh)</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 max-h-[380px] overflow-y-auto space-y-4">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-teal-400">❯</span>
                    <span className="text-slate-200 font-semibold">{item.command}</span>
                  </div>
                  <div className="pl-4 leading-relaxed">{item.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-t border-slate-800">
              <span className="text-teal-400 font-bold">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. 'help', 'projects', 'curl gateway')..."
                className="flex-1 bg-transparent text-slate-200 focus:outline-none placeholder-slate-600 font-mono text-xs"
              />
              <button type="submit" className="text-slate-500 hover:text-teal-400 transition">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
