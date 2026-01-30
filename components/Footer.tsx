
import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://i.imgur.com/jguw2kS.png" 
                alt="Folha Fácil Logo" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <span className="font-bold text-xl text-slate-800 tracking-tight block">Folha Fácil</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Departamento Pessoal</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Sua tranquilidade é nossa prioridade. Oferecemos gestão completa de departamento pessoal com foco em resultados reais e suporte humanizado. Especialistas em cálculos trabalhistas para pequenas e médias empresas.
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <Shield className="w-4 h-4" />
              <span>Dados 100% Protegidos</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-8">
            <div>
              <h4 className="font-bold text-slate-800 mb-6">Contato Direto</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <a href="tel:+5521966095786" className="hover:text-blue-600 font-medium">(21)96609-5786</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-lg">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <a href="https://wa.me/5521966095786?text=Gostaria%20de%20fazer%20uma%20consulta" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 font-medium">Falar no WhatsApp</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>contato@folhafacil.com.br</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Rio de Janeiro, RJ - Atendimento Online para todo o Brasil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Folha Fácil - Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-slate-400 max-w-md text-center md:text-right">
            Aviso de Confidencialidade: Todas as informações fornecidas durante o atendimento são tratadas com sigilo absoluto conforme a LGPD (Lei Geral de Proteção de Dados).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
