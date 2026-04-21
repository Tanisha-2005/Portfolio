import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Cpu, Lock } from 'lucide-react';
import { DATA } from '../data';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden cyber-grid">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 ambient-glow rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 ambient-glow rounded-full !bg-secondary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center lg:items-start pt-10">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 space-y-10"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-black tracking-[0.2em] uppercase">
                <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]" />
                Available for Strategy & Security
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-black mb-8 leading-[0.85] text-white tracking-tighter">
              Secure<span className="text-primary italic">.</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white glow-text-primary">Reliable.</span> <br />
              Resilient<span className="text-secondary italic">.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-light">
              I'm <span className="text-white font-bold">{DATA.personal.name}</span>. 
              I design <span className="text-white italic">resilient architectures</span> and 
              perform <span className="text-white italic">precision security research</span> to protect modern digital frontiers.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
              <button className="group relative px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-primary transition-all duration-500 overflow-hidden shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Initiate Collaboration
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>

              <div className="flex items-center gap-6">
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
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all group scale-100 hover:scale-110 active:scale-95"
                  >
                    <img 
                      src={social.logo} 
                      alt={social.name} 
                      className="w-7 h-7 brightness-0 invert opacity-60 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0" 
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-12 border-t border-white/10 grid grid-cols-3 gap-12">
              {[
                { val: '6+', label: 'Internships' },
                { val: '15+', label: 'Security Tools' },
                { val: '2nd', label: 'IT Utsav \'25' }
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                  <p className="text-4xl font-black text-white group-hover:text-primary transition-colors">{stat.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Real Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-4 relative lg:ml-auto"
          >
            <div className="relative aspect-[4/5] md:aspect-square">
              {/* Complex decorative elements */}
              <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/5 rounded-full border-dashed animate-[spin_40s_linear_infinite]" />
              
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden border-2 border-white/10 bg-slate-950 group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img 
                  src={profileImg} 
                  alt={DATA.personal.name} 
                  className="w-full h-full object-cover grayscale-[30%] brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Floating "Scanning" effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent h-1 w-full animate-[scan_3s_ease-in-out_infinite]" />

                {/* Overlay Card */}
                <div className="absolute bottom-8 left-8 right-8 premium-blur p-6 rounded-[2.5rem] border-white/20 shadow-2xl scale-100 group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-xl leading-none tracking-tight">Lead Strategist</p>
                      <p className="text-[10px] text-primary mt-2 font-black tracking-[0.3em] uppercase">Security Research</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-white text-slate-950 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Lock size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 premium-blur py-5 px-8 rounded-[2.5rem] flex items-center gap-4 border-white/20 shadow-2xl z-20"
              >
                <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_15px_var(--secondary)] animate-pulse" />
                <span className="text-[10px] font-black text-white tracking-[0.4em] uppercase">ACTIVE</span>
              </motion.div>

              <motion.div 
                animate={{ y: [15, 0, 15], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-8 premium-blur p-6 rounded-[2.5rem] flex items-center gap-3 border-white/20 shadow-2xl z-20 cursor-help group/cpu"
              >
                <Cpu className="text-primary group-hover/cpu:scale-125 transition-transform duration-500" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
