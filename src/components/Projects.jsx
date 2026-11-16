import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowUpRight, Github } from 'lucide-react';
import { DATA } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Published <span className="text-primary italic">Systems</span>
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              Every system displayed here is a live repository on GitHub, reflecting my commit history in VAPT research and modern development.
            </p>
          </div>
          
          <div className="flex items-center gap-2 p-1 bg-white/5 rounded-2xl border border-white/5">
             <a href={DATA.personal.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 text-white hover:bg-white/10 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" className="w-4 h-4 invert" />
                View all on GitHub
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full premium-blur p-10 rounded-[2.5rem] border-white/5 group-hover:border-primary/20 transition-all duration-500 flex flex-col">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      {project.tags.includes('VAPT') || project.tags.includes('Security') ? <Shield size={32} /> : 
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" className="w-8 h-8 invert opacity-40 group-hover:opacity-100 transition-opacity" />
                      }
                    </div>
                    <div className="h-12 w-12 rounded-full border border-white/5 flex items-center justify-center text-slate-700 group-hover:text-primary group-hover:border-primary/30 transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors pr-8 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/5 rounded-lg text-[9px] text-slate-500 font-black uppercase tracking-wider border border-white/5 group-hover:border-primary/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
