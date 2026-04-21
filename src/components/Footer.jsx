import React from 'react';
import { Shield, Github, Linkedin, MessageSquare, Anchor } from 'lucide-react';
import { DATA } from '../data';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Shield size={22} fill="currentColor" fillOpacity={0.2} />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">Tanisha<span className="text-primary italic">.</span></span>
            </div>
            <p className="text-sm text-slate-500 font-light max-w-xs text-center md:text-left">
              Crafting secure digital frontiers and high-performance experiences with a focus on resilience.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <a href={DATA.personal.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all group">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all" />
              </a>
              <a href={DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/50 hover:bg-white/10 transition-all group">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all" />
              </a>
              <a href={DATA.personal.tryhackme} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/50 hover:bg-white/10 transition-all group">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tryhackme.svg" alt="TryHackMe" className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all" />
              </a>
            </div>
            <p className="text-xs text-slate-600 font-bold tracking-[0.2em] uppercase">
              Stay Secure • Stay Resilient
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white font-bold mb-1 italic">Made with Precision</p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Tanisha Gupta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
