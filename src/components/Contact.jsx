import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, GraduationCap, ArrowRight } from 'lucide-react';
import { DATA } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Let's <span className="text-primary italic">Talk</span> Strategy
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
              Whether you're looking for a cybersecurity consultant, a full-stack developer, or a collaborative partner for your next big idea—I'm just a message away.
            </p>

            <div className="space-y-6 mb-16">
              <a href={`mailto:${DATA.personal.email}`} className="flex items-center gap-6 p-8 premium-blur border-white/5 hover:border-primary/30 transition-all rounded-[2rem] group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Send an Email</p>
                  <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">{DATA.personal.email}</p>
                </div>
              </a>
              
              <a href={`tel:${DATA.personal.phone}`} className="flex items-center gap-6 p-8 premium-blur border-white/5 hover:border-secondary/30 transition-all rounded-[2rem] group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Direct Line</p>
                  <p className="text-xl font-bold text-white group-hover:text-secondary transition-colors">{DATA.personal.phone}</p>
                </div>
              </a>
            </div>

            <div className="pt-10 border-t border-white/5">
              <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.2em] mb-8">Academic Foundation</h3>
              <div className="space-y-8">
                {DATA.education.map((edu, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className="mt-1 w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-sm text-slate-500 font-medium">{edu.school} — {edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="premium-blur p-10 md:p-14 rounded-[3rem] border-white/10 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
            
            <h3 className="text-3xl font-black text-white mb-10">Start a Conversation</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/5 focus:border-primary/50 rounded-2xl py-4 px-6 text-white outline-none transition-all placeholder:text-slate-700" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Reach Out At</label>
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/5 focus:border-primary/50 rounded-2xl py-4 px-6 text-white outline-none transition-all placeholder:text-slate-700" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Objective</label>
                <input type="text" placeholder="How can we collaborate?" className="w-full bg-white/5 border border-white/5 focus:border-primary/50 rounded-2xl py-4 px-6 text-white outline-none transition-all placeholder:text-slate-700" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Details</label>
                <textarea rows="4" placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/5 focus:border-primary/50 rounded-2xl py-4 px-6 text-white outline-none transition-all resize-none placeholder:text-slate-700"></textarea>
              </div>
              <button className="group w-full py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-xl overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-3">
                  Transmit Message
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
