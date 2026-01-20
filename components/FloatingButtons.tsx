
import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72 1.936 3.864 3.338 6.05 3.339h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FloatingButtons: React.FC = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5521968996088?text=Olá!%20Gostaria%20de%20falar%20com%20um%20contador%20agora."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 animate-bounce-subtle"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppLogo />
        <span className="absolute -top-2 -left-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </a>

      {/* Mobile-only Call Button (Fixed at bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md p-3 border-t border-slate-200 shadow-[0_-5px_15px_-3px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto flex gap-3">
          <a
            href="https://wa.me/5521968996088?text=Olá!%20Vi%20o%20site%20no%20celular%20e%20quero%20tirar%20uma%20dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.5] bg-green-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md"
          >
            <WhatsAppLogo className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+5521968996088"
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-md"
          >
            <Phone className="w-4 h-4" />
            Ligar
          </a>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
        @media (max-width: 1023px) {
          footer { padding-bottom: 80px; }
        }
      `}</style>
    </>
  );
};

export default FloatingButtons;
