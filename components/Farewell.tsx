import React from 'react';

const Farewell: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/0km/renegade.jpg"
          alt="Vehículo de fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Título principal */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider leading-tight">
            <span className="block">¡GRACIAS</span>
            <span className="block text-accent">POR VISITARNOS!</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Su confianza es nuestro mayor logro. En <span className="text-accent font-semibold">Salón del Automóvil</span>, 
            cada cliente es parte de nuestra familia.
          </p>


          {/* Mensaje final */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-lg italic">
              "En cada vehículo, una historia. En cada cliente, una familia."
            </p>
            <p className="text-accent font-bold text-xl mt-2">
              - Salón del Automóvil
            </p>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Farewell;
