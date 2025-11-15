import React, { useState } from 'react';
import type { UsedCar } from '../../constants/usedCarsData';

interface VehicleCardProps {
  car: UsedCar;
  viewMode: 'grid' | 'list';
  isFavorite: boolean;
  isSelected: boolean;
  isOpportunity?: boolean;
  onToggleFavorite: (carId: string) => void;
  onToggleCompare: (carId: string) => void;
  onShowDetails: (car: UsedCar) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  car,
  viewMode,
  isFavorite,
  isSelected,
  isOpportunity = false,
  onToggleFavorite,
  onToggleCompare,
  onShowDetails
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number, currency: string) => {
    if (price === 0) {
      return 'Consultar';
    }
    if (currency === 'USD') {
      return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      }).format(price);
    }
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    const message = `Hola! Me interesa el ${car.make} ${car.model} ${car.version} ${car.year} por ${formatPrice(car.price, car.priceCurrency)}. ¿Podrías darme más información?`;
    return encodeURIComponent(message);
  };

  const handleImageNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const handleImagePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-80 h-48 md:h-auto relative">
            <img
              src={car.images[currentImageIndex] || '/images/placeholder-car.jpg'}
              alt={`${car.make} ${car.model}`}
              className="w-full h-full object-cover"
              style={car.make === 'Suzuki' && car.model === 'Maruti Gypsy' ? { objectPosition: 'center 30%' } : undefined}
            />
            {car.images.length > 1 && (
              <>
                <button
                  onClick={handleImagePrev}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleImageNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            <div className="absolute top-2 left-2 flex gap-2">
              {isOpportunity && (
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Oportunidad
                </span>
              )}
              {car.isWarranty && (
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Garantía
                </span>
              )}
              {car.isInspected && (
                <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Inspeccionado
                </span>
              )}
            </div>
            <button
              onClick={() => onToggleFavorite(car.id)}
              className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
            >
              <svg
                className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                fill={isFavorite ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {car.make} {car.model}
                </h3>
                <p className="text-gray-600 mb-2">{car.version}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{car.year}</span>
                  <span>{car.mileage.toLocaleString()} km</span>
                  <span>{car.fuelType}</span>
                  <span>{car.transmission}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {formatPrice(car.price, car.priceCurrency)}
                </div>
                <p className="text-sm text-gray-500">{car.location}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onShowDetails(car)}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  Más Información
                </button>
                <a
                  href={`https://api.whatsapp.com/send?phone=${car.seller.whatsapp}&text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={() => onShowDetails(car)}
    >
      {/* Image Section */}
      <div className="relative h-48">
        <img
          src={car.images[currentImageIndex] || '/images/placeholder-car.jpg'}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover"
          style={car.make === 'Suzuki' && car.model === 'Maruti Gypsy' ? { objectPosition: 'center 30%' } : undefined}
        />
        {car.images.length > 1 && (
          <>
            <button
              onClick={handleImagePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleImageNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        <div className="absolute top-2 left-2 flex gap-2">
          {isOpportunity && (
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Oportunidad
            </span>
          )}
          {car.isWarranty && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Garantía
            </span>
          )}
          {car.isInspected && (
            <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Inspeccionado
            </span>
          )}
        </div>
        <button
          onClick={() => onToggleFavorite(car.id)}
          className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
        >
          <svg
            className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {car.make} {car.model}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{car.version}</p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{car.year}</span>
            <span>{car.mileage.toLocaleString()} km</span>
            <span>{car.fuelType}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold text-blue-600">
            {formatPrice(car.price, car.priceCurrency)}
          </div>
          <div className="text-xs text-gray-500">{car.location}</div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShowDetails(car);
            }}
            className="px-3 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            Más Información
          </button>
          <a
            href={`https://api.whatsapp.com/send?phone=${car.seller.whatsapp}&text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
