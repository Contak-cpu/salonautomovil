import React from 'react';

const ConstructionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Fondo con partículas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Icono de construcción */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <svg 
              className="w-12 h-12 text-white animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
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

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Página en Construcción
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Estamos trabajando para brindarte la mejor experiencia
        </p>

        {/* Mensaje de tranquilidad */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
          <p className="text-lg text-gray-200 leading-relaxed">
            Nuestro equipo está trabajando arduamente para crear algo increíble. 
            <br />
            <span className="text-blue-300 font-medium">Pronto estaremos de vuelta con novedades.</span>
          </p>
        </div>

        {/* Barra de progreso animada */}
        <div className="mb-8">
          <div className="w-full bg-white/10 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '99%'}}></div>
          </div>
          <p className="text-sm text-gray-400">Progreso: 99%</p>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
          <a
            href="https://api.whatsapp.com/send?phone=5493541579927&text=Hola%2C%20estoy%20interesado%20en%20los%20servicios%20de%20Sal%C3%B3n%20del%20Autom%C3%B3vil."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>+54 3541 579927</span>
          </a>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Villa Carlos Paz, Córdoba, Argentina</span>
          </div>
        </div>

        {/* Firma de desarrolladores */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold">
                <span className="text-gray-300">Desarrollado con</span>
                <svg className="w-8 h-8 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">por</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-slate-600 to-gray-600 rounded-lg blur-lg opacity-30"></div>
              <div className="relative bg-gradient-to-r from-blue-400 via-slate-400 to-gray-400 bg-clip-text text-transparent">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider">
                  ROKA
                </h2>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400 font-medium">Desarrollo Web Profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default ConstructionPage;
