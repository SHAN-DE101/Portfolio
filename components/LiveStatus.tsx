'use client';

import { useState, useEffect } from 'react';

export default function LiveStatus() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-mono text-slate-300 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span>Available for Engineering Roles</span>
      <span className="text-slate-600">•</span>
      <span className="text-teal-300 font-mono">{time || 'IST (UTC+5:30)'}</span>
    </div>
  );
}
