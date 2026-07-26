import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldAlert, Wrench, Award, CheckCircle2, Star, ExternalLink, FileText } from 'lucide-react';
import { DATA } from '../data';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Technical <span className="text-primary italic">Skillset</span>
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl">
            My specialized toolset—honed through rigorous study and practical application across cybersecurity and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cybersecurity Skills */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                  <ShieldAlert size={28} />
               </div>
               <h3 className="text-2xl font-bold text-white">Cybersecurity</h3>
            </div>
            {DATA.skills.cybersecurity.map((skill) => (
              <motion.div key={skill.name} variants={item} className="p-4 premium-blur flex items-center gap-4 hover:border-primary/50 transition-all cursor-default group border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center p-2 shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(var(--color-primary),0.1)]">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100" />
                </div>
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-secondary/10 rounded-2xl text-secondary border border-secondary/20">
                  <Wrench size={28} />
               </div>
               <h3 className="text-2xl font-bold text-white">Security Tools</h3>
            </div>
            {DATA.skills.tools.map((skill) => (
              <motion.div key={skill.name} variants={item} className="p-4 premium-blur flex items-center gap-4 hover:border-secondary/50 transition-all cursor-default group border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center p-2 shrink-0 group-hover:scale-110 group-hover:bg-secondary/20 transition-all shadow-[0_0_15px_rgba(var(--secondary),0.1)]">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100" />
                </div>
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Development */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-accent/10 rounded-2xl text-accent border border-accent/20">
                  <Code2 size={28} />
               </div>
               <h3 className="text-2xl font-bold text-white">Development</h3>
            </div>
            {DATA.skills.development.map((skill) => (
              <motion.div key={skill.name} variants={item} className="p-4 premium-blur flex items-center gap-4 hover:border-accent/50 transition-all cursor-default group border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center p-2 shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all shadow-[0_0_15px_rgba(var(--accent),0.1)]">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100" />
                </div>
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Featured Certifications */}
        {DATA.certifications.filter(c => c.achievement).length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 mb-20"
          >
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
              <Award className="text-primary" size={32} />
              Featured Credentials
            </h3>
            <div className="grid grid-cols-1 gap-8">
              {DATA.certifications.filter(c => c.achievement).map((cert, index) => (
                <div key={index} className="p-8 md:p-10 premium-blur border-white/10 hover:border-primary/40 transition-all rounded-[2.5rem] group relative overflow-hidden bg-gradient-to-br from-primary/[0.07] via-white/[0.02] to-transparent shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity pointer-events-none transform translate-x-8 -translate-y-8">
                    <Award size={200} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20 shadow-[0_0_15px_rgba(var(--color-primary),0.1)]">
                          {cert.provider}
                        </span>
                        {cert.completed && (
                          <span className="px-3.5 py-1.5 bg-white/5 text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                            Completed: {cert.completed}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                          <CheckCircle2 size={14} /> Verified
                        </span>
                      </div>
                      <h4 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{cert.title}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">{cert.achievement}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        {cert.link && (
                           <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-slate-900 font-bold rounded-xl hover:bg-primary/90 hover:scale-105 transition-all text-sm shadow-[0_0_20px_rgba(var(--color-primary),0.3)]">
                             <span>Verify Credential</span>
                             <ExternalLink size={16} />
                           </a>
                        )}
                        {cert.image && (
                           <a href={cert.image.startsWith('http') ? cert.image : `/${cert.image}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 hover:scale-105 transition-all text-sm border border-white/10">
                             <span>View Certificate</span>
                             <FileText size={16} />
                           </a>
                        )}
                      </div>
                    </div>

                    <div className="w-full lg:w-5/12 lg:border-l border-white/5 lg:pl-10 flex flex-col justify-between">
                      {cert.badgeImage && (
                        <div className="mb-6 flex flex-col items-start">
                          <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">Official Badge</p>
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group/badge relative inline-flex items-center gap-4 p-3 pr-5 rounded-2xl bg-white/[0.03] hover:bg-primary/10 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-primary/20"
                            title="Click to view & verify Credly badge"
                          >
                            <div className="w-20 h-20 rounded-xl bg-slate-950/80 p-1 flex items-center justify-center border border-white/10 shrink-0">
                              <img 
                                src={cert.badgeImage} 
                                alt={`${cert.title} Credly Badge`} 
                                className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(14,165,233,0.4)] group-hover/badge:scale-110 group-hover/badge:rotate-3 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-black text-white group-hover/badge:text-primary transition-colors flex items-center gap-1.5">
                                Credly Digital Badge
                                <ExternalLink size={13} />
                              </span>
                              <span className="text-[11px] text-slate-400 font-medium mt-0.5">Click to verify credential</span>
                            </div>
                          </a>
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Key Highlights</p>
                        <div className="flex flex-wrap gap-2.5">
                          {cert.topics?.map((topic, i) => (
                            <span key={i} className="px-3.5 py-1.5 bg-white/[0.03] hover:bg-primary/10 border border-white/10 hover:border-primary/30 text-slate-300 hover:text-white text-xs font-medium rounded-xl transition-all cursor-default flex items-center gap-2 shadow-sm">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                               {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications & Achievements */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 ${DATA.certifications.filter(c => c.achievement).length > 0 ? '' : 'mt-40'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
              <Award className="text-primary" size={32} />
              Professional Certs
            </h3>
            <div className="space-y-4">
              {DATA.certifications.filter(c => !c.achievement).map((cert, index) => (
                  <div key={index} className="px-6 py-5 premium-blur border-white/5 hover:border-primary/30 transition-all rounded-2xl flex items-start justify-between group gap-4">
                     <div className="flex-1">
                        <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-2 leading-relaxed">{cert.provider}</p>
                        <h4 className="font-semibold text-white group-hover:text-primary/90 transition-colors leading-snug text-sm sm:text-base">{cert.title}</h4>
                     </div>
                     <div className="shrink-0 mt-1">
                        <Star size={20} className="text-slate-700 group-hover:text-primary transition-colors" />
                     </div>
                  </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
              <Star className="text-secondary" size={32} />
              Key Milestones
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {DATA.achievements.map((ach, index) => (
                <div key={index} className="p-8 md:p-10 premium-blur border-white/5 border-l-4 border-l-secondary rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
                   <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <Star size={120} />
                   </div>
                   <h4 className="text-2xl font-black text-white mb-3">{ach.title}</h4>
                   <p className="text-lg text-slate-500 font-light leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
