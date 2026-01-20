
import React from 'react';
import { HeartHandshake, Smartphone, Search, Zap, ShieldCheck } from 'lucide-react';

const ValueProps: React.FC = () => {
  const props = [
    {
      icon: <HeartHandshake className="w-10 h-10" />,
      title: "Atendimento Humanizado",
      desc: "Tratamos cada caso como único. Aqui você não é apenas um número."
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "WhatsApp e Telefone",
      desc: "Contador sempre disponível para tirar suas dúvidas rápidas."
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Linguagem Simples",
      desc: "Explicamos a lei trabalhista sem complicações ou juridiquês."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Respostas Rápidas",
      desc: "Sabemos que o seu tempo é dinheiro. Respondemos com agilidade."
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Segurança e Sigilo",
      desc: "Seus dados e de seus funcionários protegidos com total confidencialidade."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Por que escolher nosso Departamento Pessoal?</h2>
          <p className="text-slate-600">Mais do que apenas cálculos, entregamos tranquilidade para o empregador.</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {props.map((p, i) => (
            <div key={i} className="text-center group">
              <div className="mb-6 mx-auto bg-slate-50 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="font-bold text-slate-800 mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;