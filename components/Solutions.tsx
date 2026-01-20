
import React from 'react';
import { CheckCircle, Users, Scale, Zap } from 'lucide-react';

const Solutions: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Atendimento direto com contador",
      desc: "Sem intermediários. Você fala com quem entende do assunto."
    },
    {
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: "Cálculos sempre atualizados",
      desc: "Seguimos rigorosamente as mudanças na lei e convenções coletivas."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Orientação clara e sem termos técnicos",
      desc: "Explicamos tudo de um jeito que você entende de verdade."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Agilidade e Segurança Total",
      desc: "Documentos prontos rapidamente, com garantia de sigilo e precisão."
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Resolvemos tudo para você de forma simples e humana</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Nossa missão é tirar o peso da burocracia trabalhista dos seus ombros. Com suporte especializado, você tem a certeza de que está cumprindo todas as obrigações sem erros.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-white p-2 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-blue-100">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
              alt="Atendimento Humanizado" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg text-slate-900 hidden sm:block">
              <p className="font-bold text-lg text-blue-600">98% de Satisfação</p>
              <p className="text-sm text-slate-500">No atendimento via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
