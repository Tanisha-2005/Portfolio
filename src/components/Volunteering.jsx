import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Users, Shield, Cpu, Layers, ZoomIn, X } from 'lucide-react';
import { DATA } from '../data';
import summitImg from '../assets/future-crime-summit-2026.jpg';

const Volunteering = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!DATA.volunteering || DATA.volunteering.length === 0) {
    return null;
  }

  const icons = [Cpu, Layers, Shield];

  return (
    <section id="volunteering" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Community & Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Cybersecurity <span className="text-primary italic">Summits & Volunteering</span>
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-3xl">
            Active engagement in national cybersecurity conferences, industry operations, and session coordination.
          </p>
        </div>

        <div className="space-y-12">
          {DATA.volunteering.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="premium-blur p-8 md:p-12 rounded-[2.5rem] border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden shadow-2xl group"
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Content Column (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold tracking-wider rounded-full border border-primary/20 uppercase shadow-[0_0_15px_rgba(var(--color-primary),0.15)]">
                        {event.category}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-medium bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                        <Calendar size={13} className="text-primary" />
                        <span>{event.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-medium bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                        <MapPin size={13} className="text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Title & Role */}
                    <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors tracking-tight">
                      {event.title}
                    </h3>
                    <p className="text-lg text-secondary font-semibold mb-6 flex items-center gap-2">
                      <span>{event.role}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-sm font-normal">Bharat Mandapam</span>
                    </p>

                    <p className="text-slate-300 leading-relaxed font-light mb-8 text-base">
                      {event.summary}
                    </p>

                    {/* Contributions List */}
                    <div className="space-y-4">
                      {event.contributions.map((item, cIndex) => {
                        const IconComponent = icons[cIndex % icons.length];
                        return (
                          <div
                            key={cIndex}
                            className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all hover:bg-white/[0.05] group/item"
                          >
                            <div className="flex items-center gap-3 mb-1.5">
                              <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover/item:scale-110 transition-transform">
                                <IconComponent size={16} />
                              </div>
                              <h4 className="text-sm font-bold text-white group-hover/item:text-primary transition-colors leading-snug">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-xs text-slate-400 font-light leading-relaxed pl-11">
                              {item.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Photo Column (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div 
                    onClick={() => setIsModalOpen(true)}
                    className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 group/img cursor-pointer shadow-2xl bg-slate-950/60 hover:border-primary/50 transition-all duration-500"
                  >
                    {/* Glowing corner effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

                    <img
                      src={summitImg}
                      alt={event.title}
                      className="w-full h-80 sm:h-96 object-cover object-center group-hover/img:scale-105 transition-transform duration-700 block"
                    />

                    {/* Overlay badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3.5 py-1.5 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider rounded-xl border border-white/20 uppercase flex items-center gap-1.5 shadow-lg">
                        <Users size={13} className="text-primary" />
                        Organizing Team & Volunteers
                      </span>
                    </div>

                    {/* Click to expand prompt */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <div className="px-3.5 py-2 bg-slate-950/85 backdrop-blur-md rounded-xl border border-white/15 text-xs text-white font-medium flex items-center gap-2 group-hover/img:bg-primary group-hover/img:text-slate-950 transition-colors shadow-lg">
                        <ZoomIn size={15} />
                        <span>View Photo</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 text-center mt-4 italic max-w-md font-light">
                    "{event.imageCaption}"
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-900/90 border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-950/80 text-white hover:text-primary hover:bg-slate-900 border border-white/10 transition-all shadow-xl"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="p-2 sm:p-4">
                <img
                  src={summitImg}
                  alt="Future Crime Summit 2026"
                  className="w-full max-h-[75vh] object-contain rounded-2xl block"
                />
              </div>

              <div className="p-6 bg-slate-950/80 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    Future Crime Summit 2026
                    <span className="text-xs text-primary font-normal bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      Bharat Mandapam
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Volunteering and organizing team (6–7 August 2026)
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Volunteering;
