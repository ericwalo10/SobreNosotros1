import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { Reveal } from './Reveal';
import { motion } from 'framer-motion';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <Reveal className="mb-20 text-center">
          <h2 className="font-condensed text-4xl md:text-6xl text-stone-900 uppercase font-bold leading-tight">
            Por qué Finanflix es líder en <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-finanflix-orange to-finanflix-purple">Argentina</span>
          </h2>
          <p className="text-stone-500 mt-6 max-w-2xl mx-auto text-lg">
            Este modelo convierte a Finanflix en una de las principales referencias del país para aprender a invertir e interpretar los mercados con responsabilidad.
          </p>
        </Reveal>

        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-0 w-[2px] bg-stone-100 hidden md:block">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="w-full bg-gradient-to-b from-finanflix-orange to-finanflix-purple"
             />
          </div>

          <div className="space-y-12">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={item.id} className="relative flex flex-col md:flex-row gap-8 group">
                
                {/* Number Circle (Left Side) */}
                <div className="flex-shrink-0 md:w-14 flex flex-col items-center z-10">
                   <Reveal delay={0.1}>
                    <div className="w-14 h-14 rounded-full bg-white text-stone-900 flex items-center justify-center font-condensed text-xl font-bold border-4 border-stone-100 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-finanflix-orange group-hover:text-white group-hover:border-finanflix-orange/30">
                        {index + 1}
                    </div>
                   </Reveal>
                </div>

                {/* Content Card (Right Side) */}
                <div className="flex-grow pt-2">
                  <Reveal delay={0.2} width="100%">
                    <div className="bg-stone-50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent group-hover:border-stone-200 group-hover:-translate-y-2">
                      <h3 className="font-condensed text-2xl font-bold text-stone-900 mb-2 uppercase group-hover:text-finanflix-purple transition-colors">{item.title}</h3>
                      <p className="text-stone-600 font-light leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};