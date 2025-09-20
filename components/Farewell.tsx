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
          {/* Icono decorativo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-accent/20 rounded-full border-2 border-accent/30 backdrop-blur-sm">
              <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </div>

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

          {/* Mensaje de despedida */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Su vehículo perfecto nos espera
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Ya sea que busque un vehículo 0km con las últimas tecnologías o un usado en excelente estado, 
              nuestro equipo de profesionales está listo para ayudarle a encontrar la opción perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 text-accent">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="font-semibold">Calidad Garantizada</span>
              </div>
              <div className="flex items-center gap-3 text-accent">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                <span className="font-semibold">Confianza Total</span>
              </div>
              <div className="flex items-center gap-3 text-accent">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="font-semibold">Satisfacción 100%</span>
              </div>
            </div>
          </div>

          {/* Llamada a la acción */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 font-medium">
              ¿Listo para encontrar su próximo vehículo?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=5493541579927&text=Hola! Me interesa conocer más sobre sus vehículos disponibles."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-enhanced transition-all duration-300 hover-lift shadow-lg hover:shadow-green-500/25"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Contactar por WhatsApp
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-enhanced transition-all duration-300 hover-lift shadow-lg hover:shadow-accent/25">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Ver Catálogo
              </button>
            </div>
          </div>

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
