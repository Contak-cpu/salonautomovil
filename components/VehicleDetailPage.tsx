import React, { useState } from 'react';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  version?: string;
  year: number;
  mileage?: number;
  price: number;
  priceCurrency: string;
  fuelType: string;
  transmission: string;
  engine?: string;
  color?: string;
  images: string[];
  features?: string[];
  location: string;
  isWarranty?: boolean;
  isInspected?: boolean;
  isFinancing?: boolean;
  description?: string;
  seller?: {
    name: string;
    phone: string;
    whatsapp: string;
  };
  createdAt?: string;
  kms?: number;
  fuel?: string;
}

interface VehicleDetailPageProps {
  vehicle: Vehicle | null;
  isNewCar?: boolean;
  onBack: () => void;
}

const VehicleDetailPage: React.FC<VehicleDetailPageProps> = ({ 
  vehicle, 
  isNewCar = false,
  onBack 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle) return null;

  const formatPrice = (price: number, currency: string) => {
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
    const vehicleType = isNewCar ? '0km' : 'usado';
    const message = `Hola! Me interesa el ${vehicle.make} ${vehicle.model} ${vehicle.version || ''} ${vehicle.year} ${vehicleType} por ${formatPrice(vehicle.price, vehicle.priceCurrency)}. ¿Podrías darme más información?`;
    return encodeURIComponent(message);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 -mt-28 pt-28">
      {/* Header Section - Responsive */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 md:py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={vehicle.images[0] || '/images/placeholder-car.jpg'}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              {vehicle.make} {vehicle.model} {vehicle.version || ''}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-100 mb-6 md:mb-8 font-light leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              {isNewCar ? 'Vehículo 0km de última generación' : 'Vehículo usado en excelente estado'}
            </p>
            
            {/* Botón de regreso */}
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-medium text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al catálogo
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 md:space-y-6">
            <div className="relative">
              <img
                src={vehicle.images[currentImageIndex] || '/images/placeholder-car.jpg'}
                alt={`${vehicle.make} ${vehicle.model}`}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
              />
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-2 md:p-3 rounded-full hover:bg-opacity-100 transition-all shadow-lg"
                  >
                    <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-2 md:p-3 rounded-full hover:bg-opacity-100 transition-all shadow-lg"
                  >
                    <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {vehicle.images.length > 1 && (
              <div className="flex gap-2 md:gap-3 overflow-x-auto justify-center">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-16 lg:w-24 lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-blue-500 shadow-md' : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${vehicle.make} ${vehicle.model} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Details */}
          <div className="space-y-6 md:space-y-8">
            {/* Price */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {formatPrice(vehicle.price, vehicle.priceCurrency)}
              </div>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                {isNewCar ? 'Precio de lista' : 'Precio de venta'}
              </p>
            </div>

            {/* Basic Info */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Información del Vehículo</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Año</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">{vehicle.year}</p>
                </div>
                {vehicle.mileage && (
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-xs md:text-sm text-gray-500 font-medium">Kilómetros</p>
                    <p className="text-lg md:text-xl font-bold text-gray-900">{vehicle.mileage.toLocaleString()} km</p>
                  </div>
                )}
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Combustible</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">{vehicle.fuelType}</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">Transmisión</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">{vehicle.transmission}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Descripción</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg text-center">
                {isNewCar 
                  ? `Vehículo ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.version || ''} en perfecto estado. ${vehicle.fuelType}, ${vehicle.transmission}. Ideal para disfrutar de la última tecnología y garantía completa.`
                  : `Vehículo ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.version || ''} en excelente estado. ${vehicle.fuelType}, ${vehicle.transmission}. ${vehicle.mileage ? `Con ${vehicle.mileage.toLocaleString()} km` : ''}. Ideal para quienes buscan calidad y confiabilidad.`
                }
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
              <a
                href={`https://api.whatsapp.com/send?phone=${vehicle.seller?.whatsapp || '5493541579927'}&text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 font-bold text-base md:text-lg lg:text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailPage;
