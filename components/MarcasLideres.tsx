import React from 'react';
import { VEHICLES_0KM } from '../constants';
import { USED_CARS } from '../constants/usedCarsData';

interface MarcasLideresProps {
  onShowCatalog: (type: '0km' | 'usados') => void;
}

const MarcasLideres: React.FC<MarcasLideresProps> = ({ onShowCatalog }) => {
  const handleMarcaClick = () => {
    onShowCatalog('0km');
  };

  const handleUsedCarClick = () => {
    onShowCatalog('usados');
  };

  // Duplicamos los arrays para crear el efecto de loop infinito
  const duplicatedVehicles0km = [...VEHICLES_0KM, ...VEHICLES_0KM];
  const duplicatedVehiclesUsed = [...USED_CARS, ...USED_CARS];

  return (
    <>
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat bg-gray-700"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">NUESTROS VEHÍCULOS 0KM</h2>
        
        {/* Contenedor del deslizador automático */}
        <div className="relative overflow-hidden">
          {/* Fade effects en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10"></div>
          
          {/* Slider container */}
          <div className="relative">
            <div className="flex animate-scroll">
              {duplicatedVehicles0km.map((vehicle, index) => (
                <div
                  key={`${vehicle.id}-${index}`}
                  className="flex-shrink-0 mx-4 group cursor-pointer"
                  style={{ width: '320px' }}
                >
                  <div 
                    className="bg-white p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-accent/50 cursor-pointer shadow-lg hover:shadow-xl"
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{vehicle.make} {vehicle.model}</h3>
                    <p className="text-sm text-gray-600 mb-2">{vehicle.year} • {vehicle.fuel} • {vehicle.transmission}</p>
                    <p className="text-accent font-bold text-xl mb-4">${vehicle.price.toLocaleString()}</p>
                    
                    {/* Botón CTA */}
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 w-full">
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA global */}
        <div className="text-center mt-12">
          <button 
            onClick={handleMarcaClick}
            className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 border border-gray-300"
          >
            Ver todo el catálogo 0km
          </button>
        </div>
      </div>
    </section>

    {/* Sección de Vehículos Usados */}
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat bg-gray-700"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">NUESTROS VEHÍCULOS USADOS</h2>
        
        {/* Contenedor del deslizador automático */}
        <div className="relative overflow-hidden">
          {/* Fade effects en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/80 to-transparent z-10"></div>
          
          {/* Slider container */}
          <div className="relative">
            <div className="flex animate-scroll">
              {duplicatedVehiclesUsed.map((vehicle, index) => (
                <div
                  key={`used-${vehicle.id}-${index}`}
                  className="flex-shrink-0 mx-4 group cursor-pointer"
                  style={{ width: '320px' }}
                >
                  <div 
                    className="bg-white p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-accent/50 cursor-pointer shadow-lg hover:shadow-xl"
                    onClick={handleUsedCarClick}
                  >
                    {/* Imagen del vehículo */}
                    <div className="mb-4">
                      <img 
                        src={vehicle.images[0]} 
                        alt={`${vehicle.make} ${vehicle.model}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Información del vehículo */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{vehicle.make} {vehicle.model}</h3>
                    <p className="text-sm text-gray-600 mb-2">{vehicle.year} • {vehicle.mileage.toLocaleString()} km • {vehicle.fuelType}</p>
                    <p className="text-accent font-bold text-xl mb-4">
                      {vehicle.priceCurrency === 'USD' 
                        ? `$${vehicle.price.toLocaleString()}` 
                        : `$${vehicle.price.toLocaleString()}`
                      }
                    </p>
                    
                    {/* Botón CTA */}
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 w-full">
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA global */}
        <div className="text-center mt-12">
          <button 
            onClick={handleUsedCarClick}
            className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 border border-gray-300"
          >
            Ver todo el catálogo usados
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default MarcasLideres;
