
import React from 'react';
import { Calculator, Home, Palmtree, LogOut, FileText, RefreshCcw, Database, Gavel, FileSignature, Coins } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    { icon: <Calculator />, title: "Folha de Pagamento", desc: "Funcionários, sócios (Pró-labore) e autônomos (RPA)." },
    { icon: <Home />, title: "Empregadas Domésticas", desc: "Gestão completa do eSocial Doméstico e guias DAE." },
    { icon: <Palmtree />, title: "Cálculo de Férias", desc: "Controle de períodos aquisitivos e cálculos de provisão." },
    { icon: <LogOut />, title: "Rescisões Trabalhistas", desc: "Cálculos precisos para evitar multas do artigo 477." },
    { icon: <FileText />, title: "Emissão de Guias", desc: "FGTS, INSS, IRRF e todas as obrigações acessórias." },
    { icon: <RefreshCcw />, title: "Recálculo de FGTS", desc: "Ajuste de guias em atraso e regularização de pendências." },
    { icon: <Database />, title: "Regularização eSocial", desc: "Ajustes na DCTFWeb, GFIP e eventos do eSocial." },
    { icon: <Gavel />, title: "Processos no eSocial", desc: "Registro de decisões judiciais e acordos trabalhistas." },
  ];

  const secondaryServices = [
    { icon: <FileSignature />, title: "Registro de CAEPF", desc: "Para pessoa física com funcionários." },
    { icon: <Coins />, title: "Carnê-Leão", desc: "Apuração mensal de imposto para autônomos." },
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Como podemos ajudar o seu negócio?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos soluções completas de Departamento Pessoal para que você nunca mais se preocupe com cálculos errados ou prazos perdidos.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="text-blue-600 mb-4 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
              Serviços Complementares
            </h4>
            <div className="grid sm:grid-cols-2 gap-8">
              {secondaryServices.map((service, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-blue-500 mt-1">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">{service.title}</h5>
                    <p className="text-slate-500 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;