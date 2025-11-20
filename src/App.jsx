import React from 'react'

export default function App() {
  return (
    <>
      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.me/5562991117329"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white font-bold text-xl px-10 py-6 rounded-full float-btn shadow-2xl glow"
      >
        WhatsApp
      </a>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <h1 className="text-5xl md:text-7xl font-black mb-6 glow text-[#00ff6a]">
          Automatize seu atendimento no WhatsApp<br/>e venda 24h no piloto automático
        </h1>
        <p className="text-xl md:text-3xl mb-8 text-gray-300 max-w-4xl">
          Respostas 24h • Recuperação de carrinho • Agendamento • Cobrança Pix automática<br/>
          Tudo funcionando enquanto você dorme
        </p>
        <div className="text-4xl md:text-6xl font-black text-red-500 mb-10 animate-pulse glow">
          APENAS 2 VAGAS RESTANTES ESTA SEMANA
        </div>
        <a
          href="https://wa.me/5562991117329"
          target="_blank"
          className="bg-[#25D366] hover:bg-[#20b357] text-white text-2xl md:text-3xl font-bold px-16 py-8 rounded-full shadow-2xl hover:scale-110 transition-all"
        >
          QUERO UMA DAS 2 VAGAS AGORA
        </a>
      </section>

      {/* Vídeo com SOM ligado */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <iframe
            className="w-full aspect-video rounded-2xl shadow-2xl"
            src="https://www.youtube.com/embed/fxby-3oz-qY?autoplay=1&rel=0&modestbranding=1"
            title="Vídeo de apresentação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  )
}
