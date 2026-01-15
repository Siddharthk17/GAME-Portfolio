import React from 'react';
import { motion } from 'framer-motion';
import { TuiBox, TuiBadge, GlitchText } from './TuiComponents';
import { Github, ExternalLink, Play, Lock } from 'lucide-react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'STATISTICAL TRADING MODELS',
    description: 'A suite of 40+ microstructure trading models powered by decade-long high-frequency BTC data, built for real predictive edge.',
    tags: ['Python', 'Data Anlysis', 'Visualization'],
    stats: { commits: 432, stars: 128, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=1'
  },
  {
    id: '2',
    title: 'MULTI EXCHANGE ARBITRAGE SYSTEM',
    description: 'Real-time funding arbitrage engine processing 120+ req/sec across 17 exchanges with sub-20ms detection latency.',
    tags: ['Python', 'REST APIs', 'Telegram Bot'],
    stats: { commits: 89, stars: 56, status: 'DEV' },
    image: 'https://picsum.photos/400/200?random=2'
  },
  {
    id: '3',
    title: 'NEURAL NETWORK GAMING',
    description: 'A self-learning neural network that plays and masters a custom-built game, improving autonomously through reinforcement learning.',
    tags: ['Neural Networks', 'React', 'Game Mechanics'],
    stats: { commits: 1205, stars: 890, status: 'ARCHIVED' },
    image: 'https://picsum.photos/400/200?random=3'
  },
  {
    id: '4',
    title: 'ESPORTS ANALYTICS',
    description: 'Full-stack esports analytics platform combining Python-driven data pipelines with a React frontend for interactive performance insights.',
    tags: ['React', 'Python', 'Data Analysis & ML'],
    stats: { commits: 210, stars: 45, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=4'
  },
  {
    id: '5',
    title: 'MULTI MODEL AI/ML TRADING BOT',
    description: 'AI-driven trading engine powered by multiple ML models—linear/logistic regression, neural networks, gradient boosting, random forests, and XGBoost—to generate high-confidence market signals.',
    tags: ['Neural Networks', 'ML', 'Data Science'],
    stats: { commits: 210, stars: 45, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=5'
  },
  {
    id: '6',
    title: 'OTHER PROJECTS',
    description: 'I always try to Build something Fun and something Unique and it must be Cool so here are some other Cool Projects that i Built.',
    tags: ['GAMES', 'WIKIPEDIA SPEEDRUN', 'FRAUD DETECTION'],
    stats: { commits: 210, stars: 45, status: 'LIVE' },
    image: 'https://picsum.photos/400/200?random=6'
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-6">
        <div>
           <div className="text-nemesis-accent text-[11px] font-display font-bold tracking-[0.3em] mb-3 uppercase">Portfolio / Works</div>
           <h2 className="text-4xl md:text-5xl font-display font-black text-white">
             DEPLOYED_<span className="text-nemesis-accent">UNITS</span>
           </h2>
        </div>
        <div className="hidden md:flex items-center gap-3 text-nemesis-dim text-xs font-mono bg-nemesis-panel px-4 py-2 rounded-full border border-white/5">
           <span className="w-2 h-2 rounded-full bg-nemesis-accent animate-pulse"></span>
           SYNCED TO REPO
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="h-full"
          >
            <TuiBox 
              title={`UNIT_${project.id.padStart(3, '0')}`} 
              className="h-full flex flex-col group hover:border-nemesis-accent/50 transition-all duration-500"
            >
               <div className="relative mb-8 h-64 w-full overflow-hidden rounded-sm group-hover:shadow-[0_0_30px_rgba(129,140,248,0.2)] transition-shadow duration-500">
                  <div className="absolute inset-0 bg-nemesis-bg/40 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-nemesis-bg via-transparent to-transparent z-20"></div>
                  
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  
                  <div className="absolute top-4 right-4 z-30">
                     {project.stats.status === 'LIVE' && <span className="bg-nemesis-accent text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded shadow-lg">Live</span>}
                     {project.stats.status === 'DEV' && <span className="bg-amber-500 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded shadow-lg">Dev</span>}
                     {project.stats.status === 'ARCHIVED' && <span className="bg-nemesis-dim text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded shadow-lg flex items-center gap-1"><Lock size={10}/> Locked</span>}
                  </div>
               </div>

               <div className="flex justify-between items-start mb-4">
                 <h3 className="text-3xl font-display font-black text-white group-hover:text-nemesis-accent transition-colors tracking-tight"><GlitchText text={project.title} /></h3>
               </div>

               <p className="text-nemesis-dim text-sm mb-8 flex-grow font-light leading-relaxed">
                 {project.description}
               </p>

               <div className="flex flex-wrap gap-2 mb-8">
                 {project.tags.map(tag => (
                   <TuiBadge key={tag}>{tag}</TuiBadge>
                 ))}
               </div>

               <div className="mt-auto border-t border-white/5 pt-6 flex justify-between items-center text-xs text-nemesis-dim font-mono">
                 <div className="flex gap-6">
                   <span className="flex items-center gap-2"><span className="text-nemesis-accent">★</span> {project.stats.stars}</span>
                   <span className="opacity-50">v1.0.{project.stats.commits}</span>
                 </div>
                 <div className="flex gap-2">
                   <button className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded"><Github size={18}/></button>
                   <button className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded"><ExternalLink size={18}/></button>
                 </div>
               </div>
            </TuiBox>
          </motion.div>
        ))}
      </div>
    </section>
  );
};