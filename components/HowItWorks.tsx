
import React from 'react';
import { MessageSquare, ClipboardCheck, Calculator, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Contato Inicial",
      desc: "Você entra em contato pelo WhatsApp ou ligação explicando sua necessidade."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Análise Especializada",
      desc: "Nosso contador analisa o seu caso e solicita as informações necessárias."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Execução do Cálculo",
      desc: "Realizamos os cálculos com total precisão técnica e jurídica."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Entrega e Explicação",
      desc: "Você recebe os documentos e uma explicação clara sobre cada valor."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Como funciona nosso atendimento</h2>
          <p className="text-slate-600">Processo simples, rápido e totalmente transparente.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-slate-100 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;