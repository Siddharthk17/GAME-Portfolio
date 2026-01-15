import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface BoxProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  noPadding?: boolean;
  borderColor?: string;
  flashing?: boolean;
  variant?: 'default' | 'alert';
}

export const TuiBox: React.FC<BoxProps> = ({ 
  children, 
  title, 
  className = "", 
  noPadding = false,
  borderColor = "border-nemesis-accent",
  flashing = false,
  variant = "default"
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className={`relative bg-nemesis-panel border ${borderColor} clip-beveled shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(129,140,248,0.15)]`}>
        
        <div className="h-12 bg-nemesis-surface border-b border-nemesis-accent/10 flex items-center justify-between px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
            
            <div className="flex items-center gap-3 relative z-10">
                <div className={`w-2 h-2 rounded-full bg-nemesis-accent ${flashing ? 'animate-pulse' : ''} shadow-[0_0_10px_currentColor]`}></div>
                <span className="font-display font-bold text-lg tracking-[0.2em] text-white uppercase">{title || 'MODULE'}</span>
            </div>
            
            <div className="flex items-center gap-1 opacity-50">
                <div className="w-1 h-1 bg-nemesis-accent rounded-full"></div>
                <div className="w-12 h-[1px] bg-nemesis-accent"></div>
                <div className="w-1 h-1 bg-nemesis-accent rounded-full"></div>
            </div>
        </div>

        <div className={`${noPadding ? '' : 'p-8'} bg-nemesis-panel/50 backdrop-blur-sm relative z-10`}>
            {children}
        </div>

        <div className="absolute top-0 right-0 p-2 pointer-events-none">
             <div className="w-4 h-4 border-t-2 border-r-2 border-nemesis-accent opacity-50"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-2 pointer-events-none">
             <div className="w-4 h-4 border-b-2 border-l-2 border-nemesis-accent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: ReactNode;
    variant?: 'primary' | 'ghost' | 'alert';
}

export const TuiButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = "",
  ...props 
}) => {
  const isPrimary = variant === 'primary';
  const isAlert = variant === 'alert';

  let baseClass = "";
  if (isPrimary) {
      baseClass = "bg-nemesis-accent text-white hover:bg-white hover:text-nemesis-bg shadow-[0_0_15px_rgba(129,140,248,0.3)]";
  } else if (isAlert) {
      baseClass = "bg-red-500 text-white hover:bg-red-400 border border-red-500";
  } else {
      baseClass = "border border-nemesis-accent/30 text-nemesis-text hover:border-nemesis-accent hover:text-white bg-transparent hover:bg-nemesis-accent/10";
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative px-8 py-4 font-display font-bold text-sm tracking-[0.2em] uppercase 
        clip-button transition-all duration-300 outline-none flex items-center justify-center gap-3
        ${baseClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const TuiBadge: React.FC<{ children: React.ReactNode, color?: string }> = ({ children, color }) => {
  return (
    <span className={`
      inline-flex items-center px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider 
      clip-tag transition-colors duration-300
      ${color ? color : 'bg-nemesis-surface border border-nemesis-dim/30 text-nemesis-dim hover:text-white hover:border-nemesis-accent/50'}
    `}>
      {children}
    </span>
  );
};

export const GlitchText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="relative inline-block group hover:animate-glitch cursor-default transition-colors duration-300">
      {text}
    </span>
  );
};