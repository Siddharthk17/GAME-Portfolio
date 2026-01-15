import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TuiBox, TuiButton, GlitchText } from './TuiComponents';
import { Shield, Zap, Target } from 'lucide-react';

export const Hero: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-6 lg:px-8 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <motion.div variants={itemVariants} className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-nemesis-accent/30 rounded-full bg-nemesis-accent/5">
               <span className="w-2 h-2 rounded-full bg-nemesis-accent animate-pulse"></span>
               <span className="text-nemesis-accent text-[11px] tracking-[0.2em] font-display uppercase font-bold">System Online</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tight text-white leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nemesis-accent to-white filter drop-shadow-[0_0_20px_rgba(129,140,248,0.4)]">nemesis 0</span>
              <br />
              <span className="text-4xl md:text-5xl text-nemesis-dim font-bold tracking-normal opacity-70">QUANT & DEVELOPER</span>
            </h1>
            
            <p className="text-nemesis-dim text-lg md:text-xl max-w-xl font-light leading-relaxed border-l-2 border-nemesis-accent/50 pl-6">
              Engineering <span className="text-white font-medium">Robust Digital Architectures</span> With Precision And Purpose. 
              <br/>
              Driven By Curiosity To Learn Everything I Can.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <TuiButton onClick={() => onNavigate('projects')} className="w-48">
                Projects
              </TuiButton>
              <TuiButton variant="ghost" onClick={() => onNavigate('contact')} className="w-48">
                Connect
              </TuiButton>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
               {[
                 { label: 'STATUS', val: 'ONLINE' },
                 { label: 'LOCATION', val: 'EARTH' },
                 { label: 'UPTIME', val: '99.98%' },
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-[10px] text-nemesis-accent font-mono tracking-widest mb-1 opacity-80">{stat.label}</div>
                    <div className="text-white font-display font-bold text-2xl tracking-widest">{stat.val}</div>
                 </div>
               ))}
            </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-5 relative">
          <TuiBox title="OPERATOR_STATUS" borderColor="border-nemesis-accent" className="bg-nemesis-panel/80 backdrop-blur-2xl">
             <div className="space-y-8">
                
                <div className="flex items-center gap-6 border-b border-white/5 pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-nemesis-accent to-nemesis-bg rounded-lg border border-white/10 flex items-center justify-center shadow-lg">
                      <Target className="text-white w-8 h-8" />
                  </div>
                  <div>
                      <div className="text-white font-display font-bold text-2xl tracking-wide flex items-center gap-3">
                        nemesis-0
                        <span className="text-[9px] px-2 py-0.5 bg-nemesis-accent text-white font-bold rounded-full tracking-widest">PRO</span>
                      </div>
                      <div className="text-nemesis-dim text-xs font-mono mt-1">CLASS: NEMESIS_ENGINEER</div>
                  </div>
                </div>

                <div className="space-y-5">
                   {[
                     { label: 'Full Stack', val: 89 },
                     { label: 'Python', val: 92 },
                     { label: 'AI/ML', val: 95 }
                   ].map((stat, i) => (
                     <div key={i}>
                        <div className="flex justify-between mb-2 text-xs font-bold tracking-wider uppercase text-nemesis-dim">
                           <span>{stat.label}</span>
                           <span className="text-nemesis-accent">{stat.val}%</span>
                        </div>
                        <div className="h-2 w-full bg-nemesis-bg rounded-full overflow-hidden border border-white/5">
                           <motion.div 
                              initial={{width: 0}} 
                              animate={{width: `${stat.val}%`}} 
                              transition={{delay: 0.5 + (i * 0.2), duration: 1.5, ease: "easeOut"}} 
                              className={`h-full bg-nemesis-accent relative shadow-[0_0_10px_currentColor]`}
                           />
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-2 flex justify-between items-center text-[10px] font-mono uppercase text-nemesis-dim">
                   <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      AVAILABLE FOR HIRE
                   </div>
                   <div className="text-nemesis-accent font-bold tracking-widest">REGION: GLOBAL</div>
                </div>
             </div>
          </TuiBox>
        </motion.div>
      </div>
    </motion.section>
  );
};