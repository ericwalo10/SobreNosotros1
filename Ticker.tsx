import React from 'react';

const KEYWORDS = [
  "CRYPTO", "DEFI", "TRADING", "ANÁLISIS TÉCNICO", "FUTUROS", "BLOCKCHAIN", 
  "LIBERTAD FINANCIERA", "BITCOIN", "ETHEREUM", "WEB3", "INVERSIONES", 
  "GESTIÓN DE RIESGO", "ESTRATEGIA", "MERCADOS"
];

export const Ticker: React.FC = () => {
  return (
    <div className="bg-finanflix-orange py-3 overflow-hidden whitespace-nowrap relative z-20 border-y border-orange-600">
      <div className="inline-block animate-marquee">
        {[...KEYWORDS, ...KEYWORDS, ...KEYWORDS, ...KEYWORDS].map((word, index) => (
          <span key={index} className="text-white font-condensed font-bold text-lg mx-8 tracking-widest uppercase">
            {word}
          </span>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-finanflix-orange to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-finanflix-orange to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};