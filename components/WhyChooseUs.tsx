import React, { useState, useEffect } from 'react';
import Text from './ui/Text';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <div 
      className={`transform transition-all duration-1000 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative group">
        {/* Efecto de brillo de fondo */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        {/* Tarjeta principal */}
        <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-accent/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-2">
          {/* Icono con efecto de rotación */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative bg-gray-800 p-4 rounded-full group-hover:bg-accent/10 transition-all duration-500 group-hover:rotate-12">
                {icon}
              </div>
            </div>
          </div>
          
          {/* Contenido */}
          <div className="text-center">
            <Text variant="heading4" as="h3" className="mb-4 group-hover:text-accent transition-colors duration-300">
              {title}
            </Text>
            <Text variant="bodySmall" className="text-white group-hover:text-accent transition-colors duration-300">
              {description}
            </Text>
          </div>
          
          {/* Efecto de partículas */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Experiencia Comprobada',
      description: 'Más de 46 años de trayectoria nos avalan, brindando confianza y el mejor asesoramiento a nuestros clientes.',
      delay: 0
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Garantía Total',
      description: 'Tanto 0km como usados, todos nuestros autos cuentan con una garantía para tu total tranquilidad.',
      delay: 200
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Financiación Personalizada',
      description: 'Trabajamos con las principales entidades financieras para ofrecerte el plan que mejor se adapte a vos.',
      delay: 400
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-gray-dark via-gray-900 to-gray-dark relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Título principal con efecto */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg blur-lg"></div>
            <Text variant="heading2" as="h2" className="relative text-white">
              ¿POR QUÉ ELEGIRNOS?
            </Text>
          </div>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Estadísticas destacadas */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '46', label: 'Años de Experiencia' },
            { number: '5000+', label: 'Vehículos Vendidos' },
            { number: '97%', label: 'Clientes Satisfechos' },
            { number: '24/7', label: 'Soporte Disponible' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 group-hover:border-accent/50 transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: 'white' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white group-hover:text-accent transition-colors duration-300" style={{ color: 'white' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-lg border border-gray-700/50 group-hover:border-accent/50 transition-all duration-500">
              <div className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                Descubrí por qué miles de clientes confían en nosotros
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;