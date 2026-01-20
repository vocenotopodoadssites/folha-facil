
import React from 'react';
import { AlertTriangle, ShieldAlert, Clock, UserX } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: "Medo de errar cálculos",
      description: "A legislação trabalhista é complexa e um pequeno erro pode gerar prejuízos enormes e multas pesadas."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-red-500" />,
      title: "Insegurança em rescisões",
      description: "Dúvidas sobre o que pagar e como homologar corretamente um desligamento sem riscos judiciais."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: "Multas no eSocial e FGTS",
      description: "Prazos apertados e guias incorretas que geram juros desnecessários para o seu negócio."
    },
    {
      icon: <UserX className="w-8 h-8 text-slate-400" />,
      title: "Falta de suporte humanizado",
      description: "Cansado de falar com robôs ou esperar dias por uma resposta técnica que você nem entende."
    }
  ];

  return (
    <section id="problemas" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Você se sente inseguro com a folha de pagamento?</h2>
          <p className="text-lg text-slate-600">Sabemos o quanto é desgastante lidar com burocracias trabalhistas quando tudo o que você quer é focar no seu negócio.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
              <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;