import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-purple-gradient w-full py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide border-b border-purple-800/20 text-white">
        Accede a <span className="font-bold">30 días de prueba</span> y comienza tu formación hoy mismo.
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <img 
                src="https://i.ibb.co/60qgXy2/Sin-t-tulo-2.png" 
                alt="Finanflix" 
                className="h-6 md:h-8 w-auto object-contain" 
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 border rounded px-2 py-1 cursor-pointer hover:bg-stone-50 transition-colors">
                <img src="https://flagcdn.com/w20/ar.png" alt="Argentina" className="w-5 h-auto rounded-sm" />
                <svg className="w-3 h-3 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              
              <button className="hidden md:block bg-stone-900 hover:bg-finanflix-orange text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                Iniciar Sesión
              </button>

              <button className="text-stone-800 hover:text-finanflix-orange transition-colors">
                <span className="sr-only">Menu</span>
                <Menu size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};