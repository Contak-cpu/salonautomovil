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

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
  isNewCar?: boolean;
}

const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({ 
  vehicle, 
  isOpen, 
  onClose, 
  isNewCar = false 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle || !isOpen) return null;

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

  const getFuelIcon = (fuel: string) => {
    switch (fuel.toLowerCase()) {
      case 'diesel':
      case 'diésel':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
      case 'nafta':
      case 'gasolina':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold mb-1">
                  {vehicle.make} {vehicle.model}
                  {vehicle.version && ` ${vehicle.version}`}
                </h2>
                <p className="text-sm text-gray-300">{vehicle.year}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {isNewCar ? '0KM' : 'USADO'}
                  </div>
                  {vehicle.isWarranty && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Garantía
                    </div>
                  )}
                  {vehicle.isInspected && (
                    <div className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold">
                      Inspeccionado
                    </div>
                  )}
                  {vehicle.isFinancing && (
                    <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                      Financiación
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors p-1"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6 max-h-[calc(85vh-120px)] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={vehicle.images[currentImageIndex] || '/images/placeholder-car.jpg'}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  {vehicle.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition-all shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition-all shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                {vehicle.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto justify-center">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
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
              <div className="space-y-6">
                {/* Price */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {formatPrice(vehicle.price, vehicle.priceCurrency)}
                  </div>
                  <p className="text-gray-600">
                    {isNewCar ? 'Precio de lista' : 'Precio de venta'}
                  </p>
                </div>

                {/* Basic Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 font-medium">Año</p>
                      <p className="text-lg font-bold text-gray-900">{vehicle.year}</p>
                    </div>
                    {vehicle.mileage && (
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 font-medium">Kilómetros</p>
                        <p className="text-lg font-bold text-gray-900">{vehicle.mileage.toLocaleString()} km</p>
                      </div>
                    )}
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 font-medium">Combustible</p>
                      <p className="text-lg font-bold text-gray-900">{vehicle.fuelType}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 font-medium">Transmisión</p>
                      <p className="text-lg font-bold text-gray-900">{vehicle.transmission}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {isNewCar 
                      ? `Vehículo ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.version || ''} en perfecto estado. ${vehicle.fuelType}, ${vehicle.transmission}. Ideal para ${isNewCar ? 'disfrutar de la última tecnología y garantía completa' : 'quienes buscan calidad y confiabilidad'}.`
                      : `Vehículo ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.version || ''} en excelente estado. ${vehicle.fuelType}, ${vehicle.transmission}. ${vehicle.mileage ? `Con ${vehicle.mileage.toLocaleString()} km` : ''}. Ideal para quienes buscan calidad y confiabilidad.`
                    }
                  </p>
                </div>

                {/* WhatsApp Button */}
                <div className="text-center pt-4">
                  <a
                    href={`https://api.whatsapp.com/send?phone=${vehicle.seller?.whatsapp || '5493541579927'}&text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VehicleDetailModal;