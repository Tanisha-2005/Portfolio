import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldAlert, Wrench, Award, CheckCircle2, Star } from 'lucide-react';
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
            Technical <span className="text-primary italic">Arsenal</span>
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
              <motion.div key={skill} variants={item} className="p-4 premium-blur flex items-center gap-4 hover:border-primary/50 transition-all cursor-default group border-white/5">
                <CheckCircle2 className="text-primary group-hover:scale-125 transition-transform" size={20} />
                <span className="font-medium text-slate-300">{skill}</span>
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
              <motion.div key={skill} variants={item} className="p-4 premium-blur flex items-center gap-4 hover:border-secondary/50 transition-all cursor-default group border-white/5">
                <CheckCircle2 className="text-secondary group-hover:scale-125 transition-transform" size={20} />
                <span className="font-medium text-slate-300">{skill}</span>
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
              <motion.div key={skill} variants={item} className="p-4 premium-blur flex items-center gap-4 hover:border-accent/50 transition-all cursor-default group border-white/5">
                <CheckCircle2 className="text-accent group-hover:scale-125 transition-transform" size={20} />
                <span className="font-medium text-slate-300">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
              <Award className="text-primary" size={32} />
              Professional Certs
            </h3>
            <div className="space-y-4">
              {DATA.certifications.map((cert, index) => (
                <div key={index} className="px-6 py-5 premium-blur border-white/5 hover:border-primary/30 transition-all rounded-2xl flex items-center justify-between group">
                   <div>
                      <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{cert.provider}</p>
                      <h4 className="font-semibold text-white group-hover:text-primary/90 transition-colors">{cert.title}</h4>
                   </div>
                   <Star size={18} className="text-slate-700 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
              <Star className="text-secondary" size={32} />
              Key Milestones
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {DATA.achievements.map((ach, index) => (
                <div key={index} className="p-10 premium-blur border-white/5 border-l-4 border-l-secondary rounded-[2.5rem] relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <Star size={120} />
                   </div>
                   <h4 className="text-2xl font-black text-white mb-3">{ach.title}</h4>
                   <p className="text-lg text-slate-500 font-light leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
