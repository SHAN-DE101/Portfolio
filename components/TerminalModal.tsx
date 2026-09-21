"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, X } from "lucide-react";

export interface TerminalModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function TerminalModal({ isOpen = false, onClose = () => {} }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: "welcome",
      output:
        "Welcome to Shantanu's shell (v1.0.4-cloud).\nType 'help' to view available commands.",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    switch (cmd) {
      case "help":
        response =
          "Available commands:\n  whoami    - Quick engineer overview\n  skills    - List core backend & cloud tech\n  exp       - Experience history\n  contact   - Get email & LinkedIn\n  clear     - Wipe terminal screen";
        break;
      case "whoami":
        response =
          "Shantanu Dey — Software Engineer (Java, Spring Boot, REST, Azure, Cyber Security).\nCurrently pursuing M.Tech in Cyber Security at MAKAUT.";
        break;
      case "skills":
        response =
          "Backend: Java, Spring Boot, Hibernate, Python, Node.js\nCloud & DB: Azure, PostgreSQL, MongoDB, Docker, Maven\nSecurity: Wireshark, Nmap, Metasploit, Secure API Design";
        break;
      case "exp":
        response =
          "Persistent Systems Ltd. (12/2021 — 12/2022)\nRole: Software Engineer\nLocation: Pune, India\nFocus: Spring Boot APIs, Postman validation, NoSQL integration";
        break;
      case "contact":
        response =
          "Email: deyshantanu101@gmail.com\nLinkedIn: linkedin.com/in/shantanu-dey-7724571b2\nGitHub: github.com/SHAN-DE101";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl overflow-hidden font-mono text-xs text-zinc-300">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-zinc-400 font-sans text-xs flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              shantanu@system:~
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-80 overflow-y-auto space-y-3 selection:bg-emerald-500/30 selection:text-emerald-300">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400">
                <span>➜</span>
                <span className="text-zinc-500">~</span>
                <span className="text-white">{item.command}</span>
              </div>
              <pre className="whitespace-pre-wrap text-zinc-400 pl-4 border-l border-zinc-800">
                {item.output}
              </pre>
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex items-center gap-2 text-emerald-400 pt-1">
            <span>➜</span>
            <span className="text-zinc-500">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-white focus:outline-none caret-emerald-400"
              autoFocus
              placeholder="type 'help'..."
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
