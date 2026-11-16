import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Share2, MessageSquare, Terminal, ChevronRight } from 'lucide-react';
import { DATA } from '../data';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
              My <span className="text-primary italic">Journey</span> & <br />Perspective
            </h2>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-light">
              {DATA.personal.summary}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/5 group-hover:border-primary/30 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white font-medium">{DATA.personal.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/5 group-hover:border-secondary/30 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-white font-medium">{DATA.personal.email}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
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
                  className="p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/20 rounded-2xl transition-all group overflow-hidden"
                  title={social.name}
                >
                  <img src={social.logo} alt={social.name} className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="premium-blur p-8 rounded-[2.5rem] border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="h-8 w-[2px] bg-primary" />
                Core Philosophy
              </h3>
              
              <p className="text-slate-400 leading-relaxed font-light mb-8 italic">
                "In my view, security isn't just about building walls; it's about understanding the cracks and reinforcing the foundation from the very first line of code."
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all flex items-center justify-between group/item">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">01</div>
                    <span className="text-white font-semibold">Security Auditing (VAPT)</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-600 group-hover/item:text-primary transition-colors" />
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all flex items-center justify-between group/item">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-bold">02</div>
                    <span className="text-white font-semibold">Responsive Frontend Design</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-600 group-hover/item:text-secondary transition-colors" />
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/20 transition-all flex items-center justify-between group/item">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold">03</div>
                    <span className="text-white font-semibold">Defensive Full-Stack Logic</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-600 group-hover/item:text-accent transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
