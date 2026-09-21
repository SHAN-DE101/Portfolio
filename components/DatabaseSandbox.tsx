"use client";

import { useState } from "react";
import { Database, Play, Check, Server, Terminal as TermIcon } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { sound } from "@/lib/sounds";

export default function DatabaseSandbox({ onNotify }: { onNotify?: (msg: string) => void }) {
  const [selectedQuery, setSelectedQuery] = useState<"INDEX" | "JWT" | "AGGREGATE">("INDEX");
  const [executing, setExecuting] = useState(false);
  const [executionTime, setExecutionTime] = useState<number>(0.84);

  const queryPresets = {
    INDEX: {
      title: "Index Scan on Payment Ledger",
      sql: `EXPLAIN ANALYZE\nSELECT tx_id, amount, status FROM transactions\nWHERE user_uuid = 'e8b2-48f1'\nORDER BY created_at DESC LIMIT 5;`,
      plan: `-> Index Scan using idx_tx_user_created on transactions (cost=0.28..8.45 rows=5)\n   Index Cond: (user_uuid = 'e8b2-48f1'::uuid)\n   Buffers: shared hit=4\nExecution Time: 0.84 ms`,
      type: "B-Tree Compound Index",
    },
    JWT: {
      title: "Zero-Trust Token Validation",
      sql: `POST /api/v1/auth/introspect HTTP/1.1\nHost: edge.shantanu.dev\nAuthorization: Bearer eyJhbGciOiJSUzI1NiIsIn...\nContent-Type: application/json`,
      plan: `HTTP/1.1 200 OK\nX-Security-Audit: Passed\nSignature-Verification: RSA-256 Validated\nRoles: [ROLE_ENGINEER, ROLE_ADMIN]\nLatency: 1.12 ms`,
      type: "Cryptographic Edge Inspection",
    },
    AGGREGATE: {
      title: "NoSQL Real-Time Partition Query",
      sql: `db.audit_logs.aggregate([\n  { $match: { event: "PAYMENT_SETTLED" } },\n  { $group: { _id: "$currency", total: { $sum: "$amount" } } }\n]);`,
      plan: `{\n  "cursor": { "firstBatch": [ { "_id": "INR", "total": 1425800.00 } ] },\n  "ok": 1,\n  "operationTime": "Timestamp(1726058000, 1)"\n}`,
      type: "Sharded Aggregation Pipeline",
    },
  };

  const handleRun = () => {
    sound.playClick();
    setExecuting(true);
    setTimeout(() => {
      setExecutionTime(Number((Math.random() * 0.4 + 0.5).toFixed(2)));
      setExecuting(false);
      sound.playSuccess();
      onNotify?.("Query executed successfully across edge database pool");
    }, 350);
  };

  const current = queryPresets[selectedQuery];

  return (
    <SpotlightCard className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-semibold text-white font-mono">
            Database &amp; Pipeline Sandbox
          </h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {current.type}
          </span>
        </div>

        <button
          onClick={handleRun}
          disabled={executing}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-mono font-medium transition-all active:scale-95 disabled:opacity-50 cursor-pointer shadow-sm"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>{executing ? "Optimizing..." : "Execute Query"}</span>
        </button>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-1.5">
        {(["INDEX", "JWT", "AGGREGATE"] as const).map((key) => (
          <button
            key={key}
            onClick={() => {
              sound.playClick();
              setSelectedQuery(key);
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              selectedQuery === key
                ? "bg-zinc-800 text-emerald-300 border border-emerald-500/30"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
            }`}
          >
            {queryPresets[key].title}
          </button>
        ))}
      </div>

      {/* Query Code & Execution Plan Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono text-zinc-500">QUERY PAYLOAD</span>
          <pre className="p-3 rounded-xl border border-zinc-800/80 bg-black/60 text-[11px] font-mono text-zinc-300 h-32 overflow-y-auto leading-relaxed">
            <code>{current.sql}</code>
          </pre>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-zinc-500">QUERY PLAN &amp; TELEMETRY</span>
            <span className="text-emerald-400">Time: {executionTime}ms</span>
          </div>
          <pre className="p-3 rounded-xl border border-zinc-800/80 bg-black/80 text-[11px] font-mono text-emerald-400/90 h-32 overflow-y-auto leading-relaxed">
            <code>{current.plan}</code>
          </pre>
        </div>
      </div>
    </SpotlightCard>
  );
}
