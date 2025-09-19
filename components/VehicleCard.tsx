import React from 'react';
import type { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const formatPrice = (price: number, currency?: string) => {
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
    const message = `Hola! Me interesa el ${vehicle.make} ${vehicle.model} ${vehicle.year} por ${formatPrice(vehicle.price, vehicle.priceCurrency)}. ¿Podrían darme más información?`;
    return encodeURIComponent(message);
  };

  const getFuelIcon = (fuel: string) => {
    switch (fuel.toLowerCase()) {
      case 'diesel':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
      case 'nafta':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
    }
  };

  const getTransmissionIcon = (transmission: string) => {
    if (transmission.toLowerCase().includes('automática') || transmission.toLowerCase().includes('automatic')) {
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2zm4-12H3C1.9 1 1 1.9 1 3v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H3V5h18v14z"/>
      </svg>
    );
  };

  return (
    <div className="card-container rounded-enhanced overflow-hidden hover-lift group relative flex flex-col md:flex-row vehicle-card">
      {/* Imagen - Ahora más flexible */}
      <div className="relative md:w-96 w-full md:h-auto h-64 flex-shrink-0 card-image">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} loading="lazy" />
        
        {/* Badges superpuestos */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-bold">
            {vehicle.year}
          </div>
          {vehicle.kms === 0 && (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              NUEVO
            </div>
          )}
        </div>
        
        {/* Badge de precio en la imagen */}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-bold price-badge">
          {formatPrice(vehicle.price, vehicle.priceCurrency)}
        </div>
      </div>
      
      {/* Contenido - Mejor distribuido */}
      <div className="p-6 flex flex-col flex-grow card-content md:min-h-96">
        {/* Header del vehículo */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold text-white text-enhanced">{vehicle.make} {vehicle.model}</h3>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <span className="text-sm text-gray-light">{vehicle.year}</span>
          </div>
          {vehicle.description && (
            <p className="text-sm text-gray-light italic leading-relaxed">{vehicle.description}</p>
          )}
        </div>
        
        {/* Información técnica mejorada */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm mb-8 border-t border-b border-white/20 py-6 bg-black/20 rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center icon-container">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white block text-enhanced">{vehicle.kms === 0 ? '0 km' : `${vehicle.kms.toLocaleString('es-AR')} km`}</span>
            <span className="text-xs text-gray-light">Kilometraje</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center icon-container">
              {getFuelIcon(vehicle.fuel)}
            </div>
            <span className="font-bold text-white block text-enhanced">{vehicle.fuel}</span>
            <span className="text-xs text-gray-light">Combustible</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center icon-container">
              {getTransmissionIcon(vehicle.transmission)}
            </div>
            <span className="font-bold text-white block text-enhanced">{vehicle.transmission}</span>
            <span className="text-xs text-gray-light">Transmisión</span>
          </div>
        </div>
        
        {/* Botones mejorados */}
        <div className="flex gap-4 mt-auto card-buttons">
          <button className="flex-1 button-primary font-bold py-3 px-6 rounded-enhanced flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Ver Detalles
          </button>
          <a
            href={`https://api.whatsapp.com/send?phone=5493541579927&text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 button-whatsapp text-white font-bold py-3 px-6 rounded-enhanced text-center flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;