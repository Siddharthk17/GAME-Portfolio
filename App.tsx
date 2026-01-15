import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { GeminiTerminal } from './components/GeminiTerminal';
import { About } from './components/About';
import { TuiBox } from './components/TuiComponents';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero onNavigate={setActiveSection} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'terminal':
        return <GeminiTerminal />;
      case 'contact':
        return (
          <div className="max-w-3xl mx-auto py-20 px-6 text-center">
             <TuiBox borderColor="border-nemesis-accent" className="bg-nemesis-panel/50 backdrop-blur-xl shadow-2xl">
                <h2 className="text-5xl font-display font-black text-white mb-6 tracking-tight">
                  ESTABLISH_<span className="text-nemesis-accent">LINK</span>
                </h2>
                <p className="mb-12 text-lg text-nemesis-dim font-light max-w-lg mx-auto leading-relaxed">
                    Ready to initiate collaboration? Open a secure channel.
                </p>
                <div className="space-y-4 font-mono text-lg text-left max-w-lg mx-auto">
                    {[
                      { label: 'EMAIL', val: 'sidddharthkakade7777@gmail.com', link: 'mailto:sidddharthkakade7777@gmail.com' },
                      { label: 'LINKEDIN', val: 'Siddharth-Kakade', link: 'www.linkedin.com/in/siddharth-kakade-489601302' },
                      { label: 'GITHUB', val: 'https://github.com/Siddharthk17', link: 'https://github.com/Siddharthk17' },
                    ].map((item) => (
                      <a key={item.label} href={item.link} className="block bg-nemesis-surface border border-white/5 p-6 hover:border-nemesis-accent hover:bg-nemesis-accent/5 transition-all duration-300 group flex justify-between items-center rounded-lg">
                          <span className="text-nemesis-dim text-xs tracking-widest group-hover:text-nemesis-accent transition-colors font-bold">{item.label}</span>
                          <span className="text-white group-hover:text-white">{item.val}</span>
                      </a>
                    ))}
                </div>
                <div className="mt-12 text-nemesis-dim text-[10px] tracking-[0.5em] uppercase opacity-30">
                    /// END TRANSMISSION ///
                </div>
             </TuiBox>
          </div>
        );
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div 
      style={{ 
        width: '125%',       
        height: '125%',      
        transform: 'scale(0.8)', 
        transformOrigin: 'top left', 
        position: 'absolute',
        top: 0,
        left: 0,
        overflowX: 'hidden'
      }}
    >
      <Layout activeSection={activeSection} onNavigate={setActiveSection}>
        {renderSection()}
      </Layout>
    </div>
  );
}