import React from 'react';

const GestoriaAutomotor: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Icono de construcción */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-accent" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                />
              </svg>
            </div>
          </div>

          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wider">
            GESTORÍA AUTOMOTOR
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-accent font-bold mb-8">
            Próximamente
          </p>

          {/* Mensaje de construcción */}
          <div className="bg-gray-dark/50 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-accent/30">
            <div className="flex items-center justify-center mb-4">
              <svg 
                className="w-8 h-8 text-accent mr-3" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h3 className="text-2xl font-bold text-white">En Construcción</h3>
            </div>
            <p className="text-gray-light text-lg leading-relaxed">
              Estamos trabajando en una sección completa de gestoría automotor para brindarte 
              todos los servicios de trámites vehiculares que necesites. Pronto podrás realizar 
              transferencias, renovaciones y más trámites de forma online.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="mt-8">
            <a
              href="https://api.whatsapp.com/send?phone=5493541579927&text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20gestoría%20automotor."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30"
            >
              <svg 
                className="w-6 h-6 mr-3" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GestoriaAutomotor;
