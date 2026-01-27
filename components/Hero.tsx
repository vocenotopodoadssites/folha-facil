
import React from 'react';
import { CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 pb-28 lg:pt-36 lg:pb-56 overflow-hidden scroll-mt-20 bg-slate-950">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Vivid Blobs (Lava Lamp) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600 opacity-40 mix-blend-screen filter blur-[120px] animate-lava animation-delay-0"></div>
        <div className="absolute top-[10%] right-[-5%] w-[55%] h-[55%] rounded-full bg-indigo-700 opacity-30 mix-blend-screen filter blur-[100px] animate-lava-alt animation-delay-2000"></div>
        
        {/* Sweeping Light Beam Effect */}
        <div className="absolute inset-0 z-1">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-20 animate-sweep-light pointer-events-none"
               style={{
                 background: 'linear-gradient(45deg, transparent 45%, rgba(147, 197, 253, 0.3) 50%, transparent 55%)',
                 backgroundSize: '200% 200%'
               }}>
          </div>
        </div>

        {/* Pulse Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-cyan-600 opacity-20 mix-blend-screen filter blur-[130px] animate-pulse-slow"></div>
        
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-blue-100 px-5 py-2 rounded-full text-sm font-bold mb-10 animate-fade-in shadow-2xl border border-white/20">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="tracking-wide">Especialistas em Cálculos de Rescisão e FGTS</span>
          </div>
          
          <div className="relative mb-12 group">
            <div className="absolute inset-0 bg-slate-950/40 blur-3xl -z-10 rounded-full scale-110"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl px-4">
              Faça uma simulação dos seus <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">direitos trabalhistas em segundos</span>
            </h1>
          </div>
          
          <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/10 mb-12 max-w-2xl mx-auto shadow-2xl">
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-medium">
              Fale diretamente com um contador e tire suas dúvidas por WhatsApp ou ligação. Resolvemos sua burocracia com clareza, agilidade e total segurança.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://w.app/lg6k74"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:shadow-[0_20px_50px_rgba(34,197,94,0.5)] active:scale-95 hover:-translate-y-1"
            >
              <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              Tirar dúvida no WhatsApp
            </a>
            <a 
              href="tel:+5521966095786"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 hover:-translate-y-1 shadow-2xl"
            >
              <PhoneCall className="w-7 h-7" />
              Ligar para um Contador
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6 sm:gap-12">
            {[
              "Atendimento Humanizado",
              "Sigilo Absoluto",
              "Cálculos Precisos"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.8)]"></div>
                <span className="text-white font-bold text-sm md:text-base tracking-wide">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lava {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(100px, -50px) scale(1.2) rotate(120deg); }
          66% { transform: translate(-50px, 100px) scale(0.8) rotate(240deg); }
          100% { transform: translate(0, 0) scale(1) rotate(360deg); }
        }
        @keyframes lava-alt {
          0% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-100px, 80px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1.1); }
        }
        @keyframes sweep-light {
          0% { transform: translate(-20%, -20%) rotate(0deg); }
          100% { transform: translate(20%, 20%) rotate(10deg); }
        }
        .animate-sweep-light {
          animation: sweep-light 8s infinite alternate ease-in-out;
        }
        .animate-lava {
          animation: lava 20s infinite alternate ease-in-out;
        }
        .animate-lava-alt {
          animation: lava-alt 25s infinite alternate ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
