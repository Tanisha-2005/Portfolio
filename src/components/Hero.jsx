import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Cpu, Lock, Code, MonitorSmartphone } from 'lucide-react';
import { DATA } from '../data';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:items-start pt-10">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 z-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for Internships & Projects
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] text-white">
              Secure. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary/50 glow-text-primary">Reliable.</span> <br />
              Resilient.
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light">
              Hi, I'm <span className="text-white font-semibold">{DATA.personal.name}</span>. 
              I bridge the gap between <span className="text-white italic">development</span> and <span className="text-white italic">security</span>. 
              As a {DATA.personal.degree} student, I build high-performance applications with security at their core.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#contact" className="group px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-primary transition-all flex items-center gap-2 shadow-lg shadow-white/10">
                Work with me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
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

              <div className="flex items-center gap-6 md:ml-4 md:pl-8 md:border-l border-white/10">
                 <div>
                   <p className="text-2xl font-black text-white leading-none">6+</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1.5">Internships</p>
                 </div>
                 <div>
                   <p className="text-2xl font-black text-white leading-none">15+</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1.5">Tools</p>
                 </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0 lg:divide-x divide-white/10">
              {[
                { icon: ShieldCheck, title: "VAPT &\nSecurity Auditing" },
                { icon: Code, title: "Frontend\nDevelopment" },
                { icon: MonitorSmartphone, title: "Responsive\nDesign" },
                { icon: Lock, title: "Secure\nSolutions" }
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center px-2 group cursor-default">
                  <feature.icon className="text-primary w-7 h-7 md:w-8 md:h-8 mb-3 drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <p className="text-[12px] md:text-sm font-semibold text-slate-300 whitespace-pre-line leading-relaxed group-hover:text-white transition-colors">{feature.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Real Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 relative lg:ml-auto order-first lg:order-last mb-10 lg:mb-0"
          >
            <div className="relative aspect-square">
              {/* Decorative shapes */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full border-dashed animate-[spin_25s_linear_infinite]" />
              
              <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden border-2 border-white/10 bg-slate-900 group shadow-2xl">
                <img 
                  src={profileImg} 
                  alt={DATA.personal.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 premium-blur p-5 rounded-3xl border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-extrabold text-lg leading-none">Security Analyst</p>
                      <p className="text-[10px] text-primary/90 mt-2 font-black tracking-[0.2em] uppercase">VAPT Specialist</p>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-slate-950 transition-all">
                      <Lock size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 premium-blur py-4 px-6 rounded-[2rem] flex items-center gap-3 border-white/20 shadow-2xl z-20"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_12px_var(--secondary)] animate-pulse" />
                <span className="text-[10px] font-black text-white tracking-[0.3em] uppercase">ACTIVE</span>
              </motion.div>

              <motion.div 
                animate={{ y: [12, 0, 12] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 premium-blur p-5 rounded-[2rem] flex items-center gap-3 border-white/20 shadow-2xl z-20 cursor-help group/cpu"
              >
                <Cpu className="text-primary group-hover/cpu:rotate-90 transition-transform duration-500" size={28} />
              </motion.div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
