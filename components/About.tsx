import React from 'react';
import { TuiBox, TuiBadge } from './TuiComponents';
import { MapPin, BatteryCharging, Brain, Laptop, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-4xl font-display font-black text-white tracking-tight">
           GAMER_ID
        </h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
        <span className="text-[10px] text-white font-mono border border-nemesis-accent px-4 py-1.5 bg-nemesis-accent/20 font-bold rounded-full">
            NEMESIS-0
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
                <TuiBox title="VISUAL" className="text-center group p-0 overflow-hidden" noPadding borderColor="border-nemesis-accent/50">
                    <div className="relative w-full aspect-[4/5] bg-nemesis-panel">
                        <img 
                            src="https://api.dicebear.com/9.x/thumbs/svg?seed=Mason" 
                            alt="Avatar" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-nemesis-bg via-transparent to-transparent opacity-80"></div>
                        
                        <div className="absolute bottom-6 left-6 text-left">
                            <div className="text-white font-display font-black text-4xl tracking-tight">NEMESIS</div>
                            <div className="text-nemesis-accent text-xs font-mono uppercase font-bold tracking-widest mt-1">Nemesis Operator</div>
                        </div>
                    </div>
                </TuiBox>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
            >
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-nemesis-surface border border-white/5 p-4 rounded-lg">
                        <div className="text-nemesis-dim text-[10px] uppercase mb-2 flex items-center gap-2 font-bold"><MapPin size={12}/> Sector</div>
                        <div className="text-white font-bold text-sm tracking-widest">India-Pune</div>
                    </div>
                    <div className="bg-nemesis-accent/10 border border-nemesis-accent/30 p-4 rounded-lg">
                        <div className="text-nemesis-accent text-[10px] uppercase mb-2 flex items-center gap-2 font-bold"><BatteryCharging size={12}/> Energy</div>
                        <div className="text-white font-bold text-sm tracking-widest">OPTIMAL</div>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="md:col-span-8 space-y-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
            >
                <TuiBox title="DATA_DUMP" borderColor="border-white/10">
                    <div className="text-nemesis-text font-light text-lg leading-relaxed space-y-6 p-2">
                        <p>
                            <span className="text-nemesis-accent font-bold">DIRECTIVE:</span> Build Systems That Transcend Standard Performance Metrics.
                        </p>
                        <p className="text-nemesis-dim">
                        I go by Sid — NEMESIS, when I’m Building. I don’t Talk Much Unless there’s something Worth saying, and I don’t rush anything worth doing. I like Systems, Patterns, and Quiet Mastery — whether that’s Code, Strategy Games, Chess Positions, a Camera Frame, or the Discipline of Showing Up Every Day to get Stronger. I Move between Worlds: Tech and Real Life, Late-Night Learning and Early-Morning Siscipline, Curiosity and Control. I’m into Everything That Sharpens the Mind or Body — AI, Aerospace, Military Tech, Gaming, Gym, Cooking, Skating — not as Phases, but as Long-Term Skills. I Learn Fast, Observe Quietly, and Build with Intent. No Noise, No Hype — just Progression. If there’s One Thing to Know About Me, it’s this: I’m Not Here To Follow Trends, I’m Here To Become Precise.
                        </p>
                    </div>
                </TuiBox>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <TuiBox title="FULL_STACK" borderColor="border-nemesis-accent">
                    <div className="mb-6 text-nemesis-accent flex justify-center"><Laptop size={32} strokeWidth={1.5}/></div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['React JS', 'Node JS', 'Three JS', 'HTML/CSS', 'JavaScript', 'VITE'].map(skill => (
                            <TuiBadge key={skill} color="bg-nemesis-accent/10 text-nemesis-accent border border-nemesis-accent/20">{skill}</TuiBadge>
                        ))}
                    </div>
                </TuiBox>
                 <TuiBox title="DATA_STACK" borderColor="border-white/10">
                    <div className="mb-6 text-white flex justify-center"><Server size={32} strokeWidth={1.5}/></div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['Python', 'Cloud', 'APIs', 'Docker', 'MongoDB', 'AI/ML'].map(skill => (
                            <TuiBadge key={skill}>{skill}</TuiBadge>
                        ))}
                    </div>
                </TuiBox>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className="p-6 border border-nemesis-accent/20 bg-gradient-to-r from-nemesis-accent/5 to-transparent flex items-start gap-5 rounded-lg">
                     <Brain className="text-nemesis-accent shrink-0 mt-1" />
                     <div>
                        <h4 className="font-display font-bold text-white text-sm uppercase mb-2 tracking-widest">SYSTEM PHILOSOPHY</h4>
                        <p className="text-sm text-nemesis-dim leading-relaxed">
                            "A Jack Of All Trades Is A Master Of None, But Oftentimes Better Than A Master Of One."
                        </p>
                     </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};