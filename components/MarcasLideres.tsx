import React, { useState } from 'react';
import { VEHICLES_0KM } from '../constants';

interface MarcasLideresProps {
  onShowCatalog: (type: '0km' | 'usados') => void;
}

const MarcasLideres: React.FC<MarcasLideresProps> = ({ onShowCatalog }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3; // Mostrar 3 tarjetas a la vez
  const totalSlides = Math.ceil(VEHICLES_0KM.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleMarcaClick = () => {
    onShowCatalog('0km');
  };

  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat bg-gray-700"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">NUESTROS VEHÍCULOS 0KM</h2>
        
        {/* Contenedor del deslizador */}
        <div className="relative">
          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-dark/80 hover:bg-gray-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-dark/80 hover:bg-gray-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenedor de las tarjetas */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VEHICLES_0KM.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((vehicle) => (
                      <div 
                        key={vehicle.id}
                        className="bg-gray-dark p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/50 cursor-pointer"
                        onClick={handleMarcaClick}
                      >
                        {/* Imagen del vehículo */}
                        <div className="mb-4">
                          <img 
                            src={vehicle.image} 
                            alt={`${vehicle.make} ${vehicle.model}`}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        
                        {/* Información del vehículo */}
                        <h3 className="text-lg font-bold text-white mb-2">{vehicle.make} {vehicle.model}</h3>
                        <p className="text-sm text-gray-light mb-2">{vehicle.year} • {vehicle.fuel} • {vehicle.transmission}</p>
                        <p className="text-accent font-bold text-xl mb-4">${vehicle.price.toLocaleString()}</p>
                        
                        {/* Botón CTA */}
                        <button className="bg-accent text-black font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 w-full">
                          Ver detalles
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores de slide */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-accent' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        {/* CTA global */}
        <div className="text-center mt-12">
          <button 
            onClick={handleMarcaClick}
            className="bg-accent text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110"
          >
            Ver todo el catálogo 0km
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarcasLideres;
