import React from 'react';
import { Reveal } from './Reveal';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-[#050505] overflow-hidden text-white min-h-[90vh] flex items-center">
      
      {/* Background Image/Collage */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2200&auto=format&fit=crop" 
          alt="Crypto Background" 
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-finanflix-purple rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-finanflix-orange rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-finanflix-orange animate-pulse"></span>
              <h2 className="text-finanflix-orange font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                La plataforma #1 de Latinoamérica
              </h2>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-condensed text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 uppercase text-white font-bold tracking-tighter drop-shadow-2xl">
              Aprende <br/>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
              >
                Crypto
              </motion.span> <br/>
              <span className="text-finanflix-orange inline-block transform hover:scale-105 transition-transform duration-300 origin-left">Como Nunca</span> <br/>
              Antes
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl font-light text-stone-300 max-w-xl leading-relaxed mb-10 border-l-4 border-finanflix-orange pl-6 backdrop-blur-sm bg-black/10 py-2">
              Domina Bitcoin, DeFi y el Trading Institucional. Deja de apostar y empieza a invertir con una estrategia profesional probada por más de 50.000 alumnos.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group bg-finanflix-orange text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(255,75,31,0.3)]"
              >
                <span className="relative z-10">Comenzar tu mes de prueba</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </motion.button>
              
              <div className="flex items-center gap-2 text-sm text-stone-400">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Inscripciones abiertas hoy
              </div>
            </div>
          </Reveal>

          {/* Social Proof / Logos */}
          <Reveal delay={0.4} className="mt-20 border-t border-white/5 pt-8 backdrop-blur-sm">
            <p className="text-xs text-stone-500 uppercase tracking-widest mb-4">Presentes en medios internacionales:</p>
            <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <h3 className="text-xl font-condensed font-bold text-white hover:text-finanflix-orange cursor-default transition-colors">Fidelity</h3>
              <h3 className="text-xl font-condensed font-bold text-white hover:text-finanflix-orange cursor-default transition-colors">Forbes</h3>
              <h3 className="text-xl font-condensed font-bold text-white hover:text-finanflix-orange cursor-default transition-colors">Bloomberg</h3>
              <h3 className="text-xl font-condensed font-bold text-white hover:text-finanflix-orange cursor-default transition-colors">CoinDesk</h3>
            </div>
          </Reveal>
        </div>
      </div>

       {/* WhatsApp Button */}
       <motion.div 
         initial={{ scale: 0 }}
         animate={{ scale: 1 }}
         transition={{ delay: 1, type: "spring" }}
         className="fixed bottom-8 right-8 z-50"
       >
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] cursor-pointer hover:bg-[#20b858] transition-all hover:scale-110 group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 group-hover:animate-bounce">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c.93.509 1.693.803 2.808.803 3.182 0 5.768-2.586 5.768-5.766.001-3.18-2.585-5.766-5.766-5.766zm0 10.332c-.896 0-1.745-.251-2.493-.68l-.179-.104-1.625.427.433-1.58-.117-.188a4.536 4.536 0 0 1-.696-2.441c0-2.502 2.034-4.536 4.538-4.536 2.504 0 4.538 2.034 4.538 4.536 0 2.502-2.034 4.536-4.538 4.536z"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};