"use client";

import { useEffect, useState } from "react";
import { GitCommit, ExternalLink, Activity } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface CommitInfo {
  message: string;
  repo: string;
  date: string;
  url: string;
}

export default function GithubActivity() {
  const [commits, setCommits] = useState<CommitInfo[]>([
    {
      message: "feat: add tech marquee, telemetry and quick actions",
      repo: "SHAN-DE101/Portfolio",
      date: "Recent",
      url: "https://github.com/SHAN-DE101/Portfolio",
    },
    {
      message: "feat: implement payment gateway backend modules",
      repo: "SHAN-DE101/PaymentGateway-Service",
      date: "Updated",
      url: "https://github.com/SHAN-DE101",
    },
  ]);

  useEffect(() => {
    fetch("https://api.github.com/users/SHAN-DE101/events/public")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const pushEvents = data.filter((e) => e.type === "PushEvent").slice(0, 3);
          if (pushEvents.length > 0) {
            const mapped = pushEvents.map((evt) => {
              const msg =
                evt.payload?.commits?.[0]?.message || "Pushed updates to repository";
              return {
                message: msg,
                repo: evt.repo?.name || "Portfolio",
                date: new Date(evt.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                }),
                url: `https://github.com/${evt.repo?.name}`,
              };
            });
            setCommits(mapped);
          }
        }
      })
      .catch(() => {});
  }, []);

  return (
    <SpotlightCard className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-semibold text-white font-mono">Live GitHub Telemetry</h3>
        </div>
        <a
          href="https://github.com/SHAN-DE101"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <span>@SHAN-DE101</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="space-y-2">
        {commits.map((c, i) => (
          <a
            key={i}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800/40 transition-all text-xs group"
          >
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <GitCommit className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors shrink-0" />
              <div className="truncate">
                <span className="text-zinc-200 group-hover:text-white font-medium truncate block">
                  {c.message}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">{c.repo}</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 shrink-0">{c.date}</span>
          </a>
        ))}
      </div>
    </SpotlightCard>
  );
}
