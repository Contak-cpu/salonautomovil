import React from 'react';
import { VEHICLES_0KM } from '../constants';
import Button from './ui/Button';
import Text from './ui/Text';
import { separateModelAndVersion } from '../utils/modelVersion';

interface VehicleSliderProps {
  onShowCatalog: (type: '0km' | 'usados' | 'gestoria') => void;
}

const VehicleSlider: React.FC<VehicleSliderProps> = ({ onShowCatalog }) => {
  // Mostrar solo los primeros 8 vehículos para el slider
  const featuredVehicles = VEHICLES_0KM.slice(0, 8);

  // Duplicamos el array para crear el efecto de loop infinito
  const duplicatedVehicles = [...featuredVehicles, ...featuredVehicles];

  const formatPrice = (price: number, currency: 'ARS' | 'USD' = 'ARS') => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-gray-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Text variant="heading2" as="h2">
            Vehículos 0KM Destacados
          </Text>
          <Text variant="bodyMedium" className="max-w-2xl mx-auto text-white">
            Descubrí nuestra selección de vehículos nuevos con las mejores condiciones de financiación
          </Text>
        </div>

        <div className="relative">
          {/* Fade effects en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-dark to-transparent z-10"></div>
          
          {/* Slider container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedVehicles.map((vehicle, index) => (
                <div
                  key={`${vehicle.id}-${index}`}
                  className="flex-shrink-0 mx-3 sm:mx-4 group cursor-pointer w-64 sm:w-72"
                >
                  <div className="bg-gray-900 rounded-enhanced overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex flex-col h-full">
                    {/* Imagen del vehículo */}
                    <div className="relative w-full overflow-hidden aspect-[4/3]">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.make} ${vehicle.model}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-accent text-black px-2 py-1 rounded-full text-xs font-bold">
                        0KM
                      </div>
                    </div>

                    {/* Información del vehículo */}
                    <div className="p-4 flex flex-col flex-1">
                      <Text variant="cardTitle" as="h3">
                        {vehicle.make}{' '}
                        {separateModelAndVersion(vehicle.model).model}
                      </Text>
                      
                      <div className="space-y-2 mt-3 mb-4 min-h-[96px]">
                        <div className="flex items-center justify-between gap-2 text-sm">
                          <Text variant="infoLabel" className="text-white flex-shrink-0">Año:</Text>
                          <Text 
                            variant="infoValue" 
                            className="truncate text-right text-white/90"
                          >
                            {vehicle.year || 'N/A'}
                          </Text>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-sm">
                          <Text variant="infoLabel" className="text-white flex-shrink-0">Combustible:</Text>
                          <Text 
                            variant="infoValue" 
                            className="truncate text-right text-white/90"
                          >
                            {vehicle.fuel || 'N/A'}
                          </Text>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-sm">
                          <Text variant="infoLabel" className="text-white flex-shrink-0">Transmisión:</Text>
                          <Text 
                            variant="infoValue" 
                            className="truncate text-right text-white/90"
                          >
                            {vehicle.transmission || 'N/A'}
                          </Text>
                        </div>
                      </div>

                      <div className="mb-4">
                        <Text variant="priceLabel" className="text-white">Precio</Text>
                        <Text variant="priceValue" className="text-white">
                          {vehicle.price && vehicle.price > 0
                            ? formatPrice(vehicle.price, vehicle.priceCurrency || 'ARS')
                            : 'Consultar'}
                        </Text>
                      </div>

                      <div className="flex gap-2 mt-auto">
                        <Button 
                          variant="primary"
                          size="sm"
                          onClick={() => onShowCatalog('0km')}
                          className="flex-1 text-xs"
                        >
                          Ver Detalles
                        </Button>
                        <a
                          href={`https://api.whatsapp.com/send?phone=5493541579927&text=${encodeURIComponent(`Hola! Me interesa el ${vehicle.make} ${vehicle.model} ${vehicle.year}. ¿Podrías darme más información?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-xs bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón para ver todos */}
        <div className="text-center mt-8">
          <Button 
            variant="outline"
            onClick={() => onShowCatalog('0km')}
            className="px-8"
          >
            Ver Todos los Vehículos 0KM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleSlider;
