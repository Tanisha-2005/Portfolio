import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { DATA } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Professional <span className="text-primary italic">Protocol</span>
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl">
            My journey through various internships, where I've applied cybersecurity principles and development logic to real-world challenges.
          </p>
        </div>

        <div className="space-y-8">
          {DATA.internships.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-blur p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold tracking-widest rounded-full border border-primary/20 uppercase">
                      {job.type}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                      <Calendar size={14} />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-3">
                      {job.role}
                      <Briefcase className="text-slate-700 hidden sm:block" size={24} />
                    </h3>
                    <p className="text-xl text-secondary font-medium tracking-tight">{job.company}</p>
                  </div>

                  <p className="text-slate-400 leading-relaxed font-light max-w-3xl">
                    {job.description}
                  </p>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-6 lg:min-w-[200px]">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} className="text-primary/50" />
                    <span>{job.location}</span>
                  </div>
                  
                  <div className="w-full lg:w-auto h-12 px-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-primary/30 transition-all">
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Verified Role</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-32">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-6">
              Academic <span className="text-secondary italic">Foundation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-blur p-8 rounded-[2rem] border-white/5 hover:border-secondary/20 transition-all group flex flex-col h-full"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary border border-white/5 group-hover:border-secondary/30 transition-all">
                    <Calendar size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{edu.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-4">{edu.school}</p>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                    Official Record • Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
