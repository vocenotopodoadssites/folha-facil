
import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">Evite erros e multas trabalhistas hoje mesmo</h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Não deixe para amanhã a segurança do seu negócio. Tire sua dúvida sem compromisso e fale agora com um especialista.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5521968996088?text=Olá!%20Vi%20o%20site%20e%20preciso%20de%20ajuda%20urgente%20com%20meus%20cálculos%20trabalhistas." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-green-900/40 active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
                Fale agora no WhatsApp
              </a>
              <a 
                href="tel:+5521968996088" 
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                <PhoneCall className="w-6 h-6" />
                Ligar para um contador
              </a>
            </div>
            
            <p className="mt-8 text-sm text-slate-500">
              *Atendimento de segunda a sexta, das 08:00 às 18:00.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
