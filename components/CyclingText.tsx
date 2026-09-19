'use client';

import { useState, useEffect } from 'react';

const ROLES = [
  'Backend Architecture',
  'Edge API Gateways',
  'Distributed Serverless Systems',
  'High-Assurance Cyber Security',
];

export default function CyclingText() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROLES.length);
        setFade(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block font-mono text-teal-300 font-bold transition-all duration-300 transform ${
        fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
      }`}
    >
      {ROLES[index]}
    </span>
  );
}
