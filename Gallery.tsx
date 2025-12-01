import React from 'react';
import { Reveal } from './Reveal';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=600&auto=format&fit=crop", // Chart
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop", // Meeting
  "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=600&auto=format&fit=crop" // Crypto visualization
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <Reveal>
            <h2 className="font-condensed text-4xl md:text-5xl font-bold uppercase text-stone-900 mb-6">
              Resultados que observan <br/><span className="text-finanflix-orange">los alumnos</span>
            </h2>
            <div className="space-y-3">
               <p className="font-medium text-stone-900">Finanflix no promete resultados garantizados. Lo que se observa en la comunidad es:</p>
               <ul className="text-stone-600 space-y-2">
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-finanflix-purple rounded-full"></span>Más educación financiera</li>
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-finanflix-purple rounded-full"></span>Mejor gestión del riesgo</li>
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-finanflix-purple rounded-full"></span>Hábitos más responsables con el dinero</li>
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-finanflix-purple rounded-full"></span>Mayor seguridad al invertir</li>
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-finanflix-purple rounded-full"></span>Una visión de inversión de largo plazo</li>
               </ul>
            </div>
          </Reveal>
          
          <Reveal delay={0.2} className="hidden md:block">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-finanflix-orange">
              <p className="text-stone-700 italic text-lg">
                "Los estudiantes aprenden a tomar decisiones informadas y a construir criterio propio."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {GALLERY_IMAGES.map((src, index) => (
          <Reveal key={index} delay={index * 0.15} yOffset={100} duration={0.8}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-finanflix-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};