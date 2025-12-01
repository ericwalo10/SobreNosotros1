import React from 'react';
import { Reveal } from './Reveal';

export const Mission: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-condensed text-6xl md:text-7xl text-finanflix-orange opacity-10 mb-[-30px] select-none">
            NOSOTROS
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-condensed text-4xl md:text-5xl leading-tight text-stone-900 mb-10 uppercase font-medium">
            ¿Qué es <span className="text-finanflix-purple">Finanflix</span>?
          </h3>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-finanflix-orange mb-6"></div>
            <p className="text-stone-800 max-w-4xl text-lg md:text-xl font-light leading-relaxed mb-6">
              Finanflix es una institución educativa de formación financiera fundada en Argentina. Enseñamos criptomonedas, trading, DeFi, análisis de mercados y finanzas personales, desde nivel inicial hasta avanzado.
            </p>
            <p className="text-stone-600 max-w-4xl text-lg font-light leading-relaxed">
              Toda la formación se desarrolla 100% online, a través de programas estructurados, clases en vivo y una comunidad activa de estudiantes que recibe acompañamiento continuo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};