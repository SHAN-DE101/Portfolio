'use client';
import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'flagships', label: 'Featured Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Other Work' },
  { id: 'skills', label: 'Skills & Security' },
];

export default function NavMenu() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="hidden lg:block mt-12 mb-8" aria-label="Table of contents">
      <ul className="space-y-4 font-mono text-xs uppercase tracking-widest">
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`group flex items-center py-1 transition-all ${
                  isActive ? 'text-teal-300 translate-x-2' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                <span
                  className={`mr-4 h-px transition-all duration-300 ${
                    isActive ? 'w-16 bg-teal-300' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300'
                  }`}
                />
                <span>{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
