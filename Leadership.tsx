import React from 'react';
import { PROGRAMS } from '../constants';
import { Reveal } from './Reveal';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Leadership: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-finanflix-purple/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-4 sticky top-24">
             <Reveal>
               <h3 className="font-condensed text-5xl uppercase font-bold mb-6 text-white leading-none">
                 Programas <span className="text-finanflix-orange block">Premium</span>
               </h3>
               <div className="w-12 h-1 bg-gradient-to-r from-finanflix-orange to-finanflix-purple mb-6"></div>
               <p className="text-stone-400 text-lg leading-relaxed mb-8">
                 Estos programas permiten desarrollar habilidades reales para analizar proyectos, interpretar gráficos, comprender tendencias y tomar decisiones financieras informadas.
               </p>
               <button className="text-white border-b border-finanflix-orange pb-1 hover:text-finanflix-orange transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2 group">
                 Ver todos los cursos
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </Reveal>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-4">
              {PROGRAMS.map((program, index) => (
                <Reveal key={program.id} delay={index * 0.1}>
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-finanflix-orange/50 hover:shadow-[0_0_30px_rgba(255,75,31,0.1)] relative overflow-hidden cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-finanflix-orange to-finanflix-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-black/40 rounded-full group-hover:bg-finanflix-orange/20 transition-colors">
                        <CheckCircle className="text-stone-500 group-hover:text-finanflix-orange transition-colors" size={20} />
                      </div>
                      <div>
                        <h4 className="font-condensed text-2xl font-bold mb-2 uppercase tracking-wide text-white group-hover:text-finanflix-orange transition-colors">
                          {program.title}
                        </h4>
                        <p className="text-stone-400 font-light text-lg group-hover:text-stone-200 transition-colors">
                          {program.description}
                        </p>
                      </div>
                      <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 hidden sm:block">
                         <ArrowRight className="text-finanflix-orange" />
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};