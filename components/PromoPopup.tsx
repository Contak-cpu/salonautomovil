import React, { useState, useEffect } from 'react';
import type { Vehicle } from '../types';

interface PromoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle;
}

const PromoPopup: React.FC<PromoPopupProps> = ({ isOpen, onClose, vehicle }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos en segundos
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
    const message = `¡HOLA! Vi la oferta especial de la ${vehicle.make} ${vehicle.model} ${vehicle.year} por ${formatPrice(vehicle.price, vehicle.priceCurrency)}. ¡Quiero aprovechar esta oferta limitada! ¿Está disponible?`;
    return encodeURIComponent(message);
  };

  if (!isOpen || !isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-enhanced max-w-2xl w-full relative overflow-hidden border-4 border-red-500 shadow-2xl">
        {/* Elementos decorativos de urgencia */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 animate-pulse"></div>
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
          🔥 OFERTA LIMITADA
        </div>
        
        {/* Contenido principal */}
        <div className="p-8">
          {/* Header con urgencia */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-white mb-2 animate-pulse">
              ⚡ ¡OFERTA ESPECIAL! ⚡
            </h2>
            <p className="text-xl text-yellow-300 font-semibold">
              {vehicle.make} {vehicle.model} {vehicle.year}
            </p>
            <p className="text-lg text-white/90">
              ¡Al mejor precio del país!
            </p>
          </div>

          {/* Timer de urgencia */}
          <div className="bg-black/50 rounded-lg p-4 mb-6 text-center">
            <p className="text-yellow-300 font-bold text-lg mb-2">⏰ ¡OFERTA EXPIRA EN!</p>
            <div className="text-4xl font-mono font-bold text-red-400 animate-pulse">
              {formatTime(timeLeft)}
            </div>
            <p className="text-white/80 text-sm mt-2">
              ¡No pierdas esta oportunidad única!
            </p>
          </div>

          {/* Imagen del vehículo */}
          <div className="relative mb-6 rounded-lg overflow-hidden">
            <img
              src={vehicle.image}
              alt={`${vehicle.make} ${vehicle.model}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              NUEVO 2025
            </div>
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold text-red-400">
                {formatPrice(vehicle.price, vehicle.priceCurrency)}
              </div>
              <div className="text-sm text-yellow-300 line-through">
                Precio regular: {formatPrice(vehicle.price * 1.15, vehicle.priceCurrency)}
              </div>
            </div>
          </div>

          {/* Beneficios y urgencia */}
          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <h3 className="text-white font-bold text-lg mb-3">🎯 ¿Por qué esta oferta es única?</h3>
            <ul className="text-white/90 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Precio especial solo por tiempo limitado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Garantía oficial de fábrica
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Financiación preferencial disponible
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Entrega inmediata
              </li>
            </ul>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://api.whatsapp.com/send?phone=5493541579927&text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-enhanced text-center flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              ¡QUIERO LA OFERTA AHORA!
            </a>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-enhanced transition-all duration-300"
            >
              Cerrar
            </button>
          </div>

          {/* Texto de urgencia final */}
          <div className="text-center mt-4">
            <p className="text-yellow-300 text-sm font-bold">
              ⚠️ Solo quedan 2 unidades disponibles - ¡Actúa rápido!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
