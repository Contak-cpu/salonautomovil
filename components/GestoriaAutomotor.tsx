import React from 'react';

const GestoriaAutomotor: React.FC = () => {
  const services = [
    {
      title: "Gestoría Integral",
      description: "Trámites completos para automóviles, camiones, utilitarios y maquinaria agrícola",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.20.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
        </svg>
      )
    },
    {
      title: "Documentación Automotor",
      description: "Resolución de problemas documentales con respaldo profesional completo",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      )
    },
    {
      title: "Transferencias y Motos",
      description: "Transferencias, altas, bajas y duplicados para motos y motovehículos",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-2.18c-.42 0-.8.26-.94.66L15.4 9H13l-1-2H9v2h2l1 2h2.6l-.6 1.5A3.99 3.99 0 0 0 10 12c-2.21 0-4 1.79-4 4H4a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2h4.34A3.99 3.99 0 0 1 18 11h1a2 2 0 0 0 0-4zm-2 8a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 15zM7 15a2 2 0 1 0 .001 3.999A2 2 0 0 0 7 15z"/>
        </svg>
      )
    },
    {
      title: "Importación de Vehículos",
      description: "Importamos automóviles y motocicletas desde cualquier parte del mundo",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z"/>
        </svg>
      )
    },
    {
      title: "Trámites y Papeles de Motovehículos",
      description: "Transferencias, altas, bajas, duplicados y toda la documentación necesaria para motos y motovehículos",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-2.18c-.42 0-.8.26-.94.66L15.4 9H13l-1-2H9v2h2l1 2h2.6l-.6 1.5A3.99 3.99 0 0 0 10 12c-2.21 0-4 1.79-4 4H4a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2h4.34A3.99 3.99 0 0 1 18 11h1a2 2 0 0 0 0-4zm-2 8a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 15zM7 15a2 2 0 1 0 .001 3.999A2 2 0 0 0 7 15z"/>
        </svg>
      )
    },
    {
      title: "Herederos y Donantes",
      description: "Solucionamos casos complejos de herencias y donaciones vehiculares",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4C18.209,4 20,5.791 20,8C20,10.209 18.209,12 16,12C13.791,12 12,10.209 12,8C12,5.791 13.791,4 16,4M16,14C19.314,14 22,16.686 22,20V22H10V20C10,16.686 12.686,14 16,14M8,12C10.209,12 12,10.209 12,8C12,5.791 10.209,4 8,4C5.791,4 4,5.791 4,8C4,10.209 5.791,12 8,12M8,14C4.686,14 2,16.686 2,20V22H10V20C10,18.45 10.45,16.997 11.26,15.74C10.04,14.62 9.07,14 8,14Z"/>
        </svg>
      )
    },
    {
      title: "Cobertura Nacional",
      description: "Red de gestores matriculados en todas las provincias del país",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 2H15L16 3V4H17L18 5V7H17V8H16V9H15V10H13V11H15V12H16V13H17V14H18V16H17V17H16V18H15V19H14V20H13V21H11V22H10V21H9V20H8V19H7V18H6V17H5V16H6V14H7V13H8V12H9V11H11V10H9V9H8V8H7V7H8V5H9L10 4V3L9 2Z"/>
        </svg>
      )
    },
    {
      title: "Conectividad Online",
      description: "Sistema digital conectado con registros automotor de todo el país",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21L15.6,17.42C14.62,16.44 13.35,15.88 12,15.88C10.65,15.88 9.38,16.44 8.4,17.42L12,21M12,3C7.95,3 4.68,4.92 2.61,7.77L4.03,9.19C5.79,6.94 8.71,5.54 12,5.54C15.29,5.54 18.21,6.94 19.97,9.19L21.39,7.77C19.32,4.92 16.05,3 12,3M12,9C9.3,9 6.81,10.14 5.07,12.07L6.5,13.5C7.84,12.03 9.85,11.12 12,11.12C14.15,11.12 16.16,12.03 17.5,13.5L18.93,12.07C17.19,10.14 14.7,9 12,9Z"/>
        </svg>
      )
    },
    {
      title: "Matrícula Náutica",
      description: "Trámites especializados para embarcaciones y registro náutico",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.5,19L6.5,17L10.5,19L14.5,17L18.5,19L22.5,17V15L18.5,17L14.5,15L10.5,17L6.5,15L2.5,17V19M15,12V8H17L19,10V12H15M2,12V10L4,8H6V12H2M21,6V4H3V6H21M7,12V8H8L9.5,10L11,8H12V12H7Z"/>
        </svg>
      )
    }
  ];

  const advantages = [
    { title: "46 años de experiencia", description: "Trayectoria sólida en el rubro automotor" },
    { title: "Profesionales matriculados", description: "Equipo idóneo y certificado" },
    { title: "Seriedad y rapidez", description: "Procesos eficientes y confiables" },
    { title: "Menor costo", description: "Tarifas competitivas del mercado" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-wide">
            GESTORÍA AUTOMOTOR
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-accent font-bold mb-4">
              Más de 46 años de experiencia y trayectoria
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ofrecemos el mejor servicio de gestoría integral con profesionales matriculados 
              e idóneos para resolver todos tus trámites automotores con seriedad, rapidez y al menor costo.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-accent/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                <div className="text-accent">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 mb-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandataria */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Mandataria</h3>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Mónica Pacher</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                    </svg>
                    <span className="text-gray-800 font-semibold">Cel/WhatsApp: 3541-624627</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                    </svg>
                    <span className="text-gray-800 font-semibold">monica@salondelautomovil.com.ar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Confía tus trámites en manos profesionales
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contamos con conectividad online en la mayoría de los registros del automotor para brindarte 
            una pronta resolución de tu trámite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5493541624627&text=Hola%2C%20necesito%20información%20sobre%20servicios%20de%20gestoría%20automotor."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <a
              href="tel:+5493541624627"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700 shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GestoriaAutomotor;
