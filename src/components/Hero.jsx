import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Cpu, Lock } from 'lucide-react';
import { DATA } from '../data';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for Internships & Projects
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] text-white">
              Defending <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary/50 glow-text-primary">Digital Frontiers.</span> <br />
              Crafting Security.
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
              Hi, I'm <span className="text-white font-semibold">{DATA.personal.name}</span>. 
              I bridge the gap between <span className="text-white italic">development</span> and <span className="text-white italic">security</span>. 
              As a {DATA.personal.degree} student, I build high-performance applications with security at their core.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="group px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-primary transition-all flex items-center gap-2 shadow-lg shadow-white/10">
                Work with me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 px-2">
                {[
                  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg', href: DATA.personal.github },
                  { name: 'LinkedIn', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg', href: DATA.personal.linkedin },
                  { name: 'TryHackMe', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tryhackme.svg', href: DATA.personal.tryhackme }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-xl border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group"
                  >
                    <img 
                      src={social.logo} 
                      alt={social.name} 
                      className="w-6 h-6 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all" 
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-black text-white">6+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Internships</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">15+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Tools</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">2nd</p>
                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">IT Utsav '25</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Real Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square">
              {/* Decorative shapes */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full border-dashed animate-[spin_25s_linear_infinite]" />
              
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden gradient-border bg-slate-900 group">
                <img 
                  src={profileImg} 
                  alt={DATA.personal.name} 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 premium-blur p-5 rounded-2xl border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg leading-none">VAPT Experience</p>
                      <p className="text-xs text-primary/80 mt-1 font-medium tracking-wide uppercase">Cybersecurity graduate</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Lock size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 premium-blur py-3 px-5 rounded-2xl flex items-center gap-3 border-white/10 shadow-2xl"
              >
                <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--secondary)]" />
                <span className="text-xs font-bold text-white tracking-wider">SEC_OP_ACTIVE</span>
              </motion.div>

              <motion.div 
                animate={{ y: [10, 0, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 premium-blur p-4 rounded-2xl flex items-center gap-3 border-white/10 shadow-2xl"
              >
                <Cpu className="text-primary" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
