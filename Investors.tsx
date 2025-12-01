import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './Reveal';
import { Quote, Star } from 'lucide-react';

export const Investors: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <Reveal>
           <h3 className="font-condensed text-4xl md:text-5xl uppercase font-bold text-stone-900 mb-4">Opiniones Reales</h3>
           <p className="text-finanflix-purple font-bold tracking-widest uppercase mb-8">De nuestros estudiantes</p>
        </Reveal>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee gap-8 w-max px-4 hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
             <div 
               key={`${testimonial.id}-${index}`} 
               className="w-[350px] md:w-[450px] bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-finanflix-purple/30 transition-all duration-300 flex-shrink-0 group cursor-grab active:cursor-grabbing"
             >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-finanflix-orange text-finanflix-orange" />)}
                  </div>
                  <Quote size={24} className="text-finanflix-purple/20 group-hover:text-finanflix-purple transition-colors" />
                </div>
                
                <p className="text-lg text-stone-700 leading-relaxed italic mb-8 min-h-[100px]">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-finanflix-purple">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-condensed font-bold text-stone-900 uppercase tracking-wider text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-stone-400">Verificado</p>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};