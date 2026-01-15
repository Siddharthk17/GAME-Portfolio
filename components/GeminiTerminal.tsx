import React, { useState, useEffect, useRef } from 'react';
import { TuiBox } from './TuiComponents';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Trash2, Signal } from 'lucide-react';
import { Chat } from '@google/genai';

export const GeminiTerminal: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      chatSessionRef.current = createChatSession();
      if (chatSessionRef.current) {
        setIsReady(true);
        setMessages([
          {
            role: 'model',
            text: 'NEMESIS_OS v2.4 INITIALIZED.\nSECURE CONNECTION ESTABLISHED.',
            timestamp: new Date()
          }
        ]);
      } else {
        setMessages([{
             role: 'model',
             text: 'ERROR: API KEY INVALID. OFFLINE MODE.',
             timestamp: new Date(),
             isError: true
        }]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      const modelMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: 'SIGNAL INTERRUPTED.',
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section className="max-w-5xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 text-nemesis-accent">
             <div className="relative flex items-center justify-center w-6 h-6">
                <div className="absolute inset-0 bg-nemesis-accent/50 blur-lg rounded-full animate-pulse"></div>
                <Signal className="relative z-10 w-5 h-5" />
             </div>
             <h2 className="text-xl font-display font-black tracking-[0.2em]">NEMESIS_CONSOLE</h2>
          </div>
          <button 
             onClick={() => setMessages([])} 
             className="text-[10px] text-nemesis-dim hover:text-white transition-colors flex items-center gap-2 font-mono uppercase tracking-widest border border-white/10 hover:border-white/30 px-4 py-2 bg-nemesis-panel clip-tag"
          >
             <Trash2 size={12}/> CLEAR
          </button>
      </div>

      <TuiBox noPadding borderColor="border-nemesis-accent/30" className="shadow-2xl">
        <div className="h-[600px] flex flex-col bg-nemesis-bg relative">
          
          <div className="flex-grow overflow-y-auto p-6 md:p-10 space-y-8 font-mono text-sm relative z-0">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-6 relative shadow-lg transition-all duration-300 ${
                    msg.role === 'user' 
                      ? 'bg-nemesis-surface border-l-2 border-white/20 text-white clip-message-user' 
                      : msg.isError 
                        ? 'bg-red-900/10 border-r-2 border-red-500 text-red-500 clip-message-bot'
                        : 'bg-nemesis-accent/5 border-r-2 border-nemesis-accent text-nemesis-text clip-message-bot'
                  }`}
                >
                  <div className="text-[10px] opacity-50 mb-4 uppercase tracking-[0.2em] flex justify-between gap-12 font-bold border-b border-white/5 pb-2">
                     <span>{msg.role === 'user' ? 'USER' : 'nemesis'}</span>
                     <span>{msg.timestamp.toLocaleTimeString([], {hour12: false})}</span>
                  </div>
                  <div className="whitespace-pre-wrap leading-relaxed">
                     {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="px-6 py-3 text-nemesis-accent text-xs flex items-center gap-3 bg-nemesis-accent/5 clip-tag border border-nemesis-accent/20">
                    <span className="w-1.5 h-1.5 bg-nemesis-accent animate-bounce rounded-full"></span> 
                    <span className="w-1.5 h-1.5 bg-nemesis-accent animate-bounce rounded-full delay-100"></span> 
                    <span className="w-1.5 h-1.5 bg-nemesis-accent animate-bounce rounded-full delay-200"></span> 
                    PROCESSING
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/5 p-4 md:p-6 bg-nemesis-panel flex gap-4 relative z-20 items-center">
            <span className="text-nemesis-accent font-bold text-lg animate-pulse">{'>'}</span>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isReady ? "ENTER COMMAND..." : "CONNECTING..."}
              disabled={!isReady || isLoading}
              className="flex-grow bg-transparent text-white placeholder-nemesis-dim outline-none font-mono tracking-wider text-sm h-10"
              autoFocus
            />
            <button 
               onClick={handleSend}
               disabled={!input.trim() || isLoading}
               className="text-nemesis-accent hover:text-white transition-all disabled:opacity-30 p-3 hover:bg-nemesis-accent/10 clip-button"
            >
               <Send size={20} />
            </button>
          </div>
        </div>
      </TuiBox>
    </section>
  );
};