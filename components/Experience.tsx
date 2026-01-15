import React from 'react';
import { TuiBox } from './TuiComponents';
import { ChevronRight, Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: "FINANCE INTERNSHIP",
    company: "BB ADVISORY",
    period: "Sept 2025 - Nov 2025",
    details: [
      "Gained hands-on experience in financial research, trading analytics, and market microstructure analysis.",
      "Explored tools and frameworks including Python, Excel, and quantitative modeling techniques for equities and derivatives.",
      "Built foundational knowledge in risk management, portfolio evaluation, and automated data workflows."
    ]
  },
  {
    role: "FINANCE RESEARCH ANALYST INTERN",
    company: "SAVVY MERIT",
    period: "Aug 2025 - Sept 2025",
    details: [
      "Engineered high-quality financial research workflows and data-driven models in Python/Excel, processing 10K+ datapoints for faster, accurate portfolio insights.",
      "Analyzed multi-sector equities using DCF and relative multiples, improving research precision by ~20–25% and supporting risk–return assessments.",
      "Produced enterprise-grade research decks adopted by management, enhancing decision clarity and reducing review time ~30%."
    ]
  },
  {
    role: "FOUNDER / CFO",
    company: "17 - A HEDGE FUND (Self Founded)",
    period: "2023 - Present",
    details: [
      "Built a quantitative research pipeline processing 250K+ market datapoints with 40+ predictive trading models.",
      "Developed a 24/7 automated execution system with ms-level latency and robust failover.",
      "Implemented risk models and scalable infrastructure, reducing downside exposure by 22%+",
      "Scaled infrastructure to multi-six-figure AUM readiness using AWS, Docker, and high-integrity data flows."
    ]
  }
];
export const Experience: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto py-8 px-6">
      <div className="flex items-center gap-6 mb-16">
        <div className="w-12 h-12 bg-nemesis-panel border border-nemesis-accent/30 rounded flex items-center justify-center shadow-[0_0_20px_rgba(129,140,248,0.15)]">
           <Briefcase className="text-nemesis-accent" size={20} />
        </div>
        <div>
            <h2 className="text-3xl font-display font-black text-white tracking-tight">
            SERVICE_LOG
            </h2>
            <div className="text-nemesis-dim text-[11px] font-mono tracking-widest uppercase mt-1">Classified History</div>
        </div>
      </div>

      <div className="space-y-12 relative">
  
        <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-nemesis-accent/50 via-nemesis-panel to-transparent hidden md:block"></div>

        {EXPERIENCE.map((exp, i) => (
           <div key={i} className="relative md:pl-24 group">
            
              <div className="absolute left-[19px] top-8 w-3 h-3 rounded-full bg-nemesis-bg border-2 border-nemesis-accent hidden md:block z-10 group-hover:scale-125 group-hover:bg-nemesis-accent transition-all duration-300 shadow-[0_0_10px_currentColor]"></div>
              
              <TuiBox 
                 borderColor="border-white/5" 
                 className="transition-all duration-300 group-hover:border-nemesis-accent/40"
              >
                 <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-nemesis-accent transition-colors">
                         {exp.role}
                      </h3>
                      <div className="text-nemesis-dim font-bold tracking-widest text-xs uppercase mt-1">
                          @{exp.company}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 px-4 py-1.5 bg-nemesis-accent/10 border border-nemesis-accent/20 text-[10px] font-mono text-nemesis-accent font-bold rounded-full">
                       {exp.period}
                    </div>
                 </div>
                 
                 <div className="pl-0">
                    <ul className="space-y-4">
                        {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-nemesis-text/80 text-sm flex items-start gap-3 leading-relaxed group-hover:text-white transition-colors">
                            <ChevronRight size={14} className="mt-1 text-nemesis-accent flex-shrink-0" /> 
                            {detail}
                        </li>
                        ))}
                    </ul>
                 </div>
              </TuiBox>
           </div>
        ))}
      </div>
    </section>
  );
};