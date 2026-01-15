import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Terminal, Crosshair, List, Cpu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const SECTIONS = [
  { id: 'hero', label: 'OVERVIEW', icon: <Activity size={18}/> },
  { id: 'about', label: 'IDENTITY', icon: <Cpu size={18}/> },
  { id: 'projects', label: 'PROJECTS', icon: <Crosshair size={18}/> },
  { id: 'experience', label: 'LOGS', icon: <List size={18}/> },
  { id: 'terminal', label: 'nemesis_OS', icon: <Terminal size={18}/> },
];

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onNavigate }) => {
  return (
    <div className="min-h-screen bg-nemesis-bg text-nemesis-text relative selection:bg-nemesis-accent selection:text-white overflow-hidden">
      
      <div className="fixed inset-0 bg-[size:40px_40px] bg-grid-nemesis opacity-[0.03] pointer-events-none z-0"></div>
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-nemesis-accent to-transparent z-50 opacity-50"></div>

      <header className="fixed top-0 w-full h-24 z-40 bg-nemesis-bg/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 lg:px-12 pointer-events-auto transition-all duration-500">
         <div className="flex items-center gap-4 group cursor-pointer" onClick={() => onNavigate('hero')}>
            <div className="w-12 h-12 bg-nemesis-accent/10 border border-nemesis-accent/50 flex items-center justify-center rounded clip-beveled group-hover:bg-nemesis-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(129,140,248,0.1)]">
                <span className="font-display font-black text-nemesis-accent text-2xl italic group-hover:text-white">N</span>
            </div>
            <div className="flex flex-col justify-center">
               <span className="font-display font-black text-3xl text-white tracking-[0.1em] leading-none">nemesis</span>
               <span className="font-mono text-[9px] text-nemesis-dim tracking-[0.3em] uppercase mt-1">System v2.0</span>
            </div>
         </div>

         <nav className="hidden md:flex items-center gap-2">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`
                  relative px-6 py-2.5 font-display font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 clip-button border
                  ${activeSection === section.id 
                    ? 'bg-nemesis-accent text-white border-nemesis-accent shadow-[0_0_15px_rgba(129,140,248,0.3)]' 
                    : 'bg-nemesis-surface/50 text-nemesis-dim border-white/5 hover:bg-nemesis-surface hover:text-white hover:border-white/20'
                  }
                `}
              >
                {section.label}
              </button>
            ))}
         </nav>
      </header>

      <main className="pt-32 pb-24 relative z-10 min-h-screen flex flex-col">
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="md:hidden fixed bottom-6 left-6 right-6 bg-nemesis-panel/90 border border-nemesis-accent/20 p-2 rounded-2xl flex justify-between z-50 shadow-2xl backdrop-blur-xl">
          {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`p-3 rounded-xl flex items-center justify-center flex-1 transition-all duration-300 ${activeSection === section.id ? 'text-white bg-nemesis-accent shadow-lg scale-110' : 'text-nemesis-dim'}`}
              >
                {section.icon}
              </button>
            ))}
      </div>
    </div>
  );
};