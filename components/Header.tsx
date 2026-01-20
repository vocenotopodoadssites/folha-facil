
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Determina se está no topo da página para efeito de transparência
      setIsAtTop(currentScrollY < 20);

      // Lógica para esconder/mostrar ao rolar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rolar para baixo - "sumir"
        setIsVisible(false);
      } else {
        // Rolar para cima ou no topo - aparecer
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isAtTop 
          ? 'bg-transparent py-6' 
          : 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 hover:opacity-80 transition-all">
          <div className={`bg-white p-1.5 rounded-xl shadow-sm border transition-all ${isAtTop ? 'border-white/20 scale-110' : 'border-slate-100 scale-100'}`}>
            <img 
              src="https://i.imgur.com/jguw2kS.png" 
              alt="Folha Fácil Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <span className={`font-bold text-xl tracking-tight leading-tight block transition-colors ${isAtTop ? 'text-white' : 'text-slate-800'}`}>
              Folha Fácil
            </span>
            <p className={`text-[10px] uppercase tracking-widest font-bold leading-none transition-colors ${isAtTop ? 'text-blue-200' : 'text-slate-500'}`}>
              Departamento Pessoal
            </p>
          </div>
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <a 
            href="tel:+5521968996088" 
            className={`flex items-center gap-2 font-bold text-sm transition-all hover:scale-105 ${isAtTop ? 'text-white' : 'text-slate-700 hover:text-blue-600'}`}
          >
            <div className={`p-2 rounded-full transition-colors ${isAtTop ? 'bg-white/10' : 'bg-slate-100'}`}>
              <Phone className="w-4 h-4" />
            </div>
            <span className="hidden md:inline">(21) 96899-6088</span>
          </a>
          <a 
            href="https://wa.me/5521968996088?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20meus%20direitos%20trabalhistas." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all shadow-xl hover:shadow-green-500/40 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden xs:inline">Falar com Consultor</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
