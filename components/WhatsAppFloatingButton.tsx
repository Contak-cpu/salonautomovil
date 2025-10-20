import React, { useState, useEffect } from 'react';

const WhatsAppFloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300); // Mostrar después de 300px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para verificar si estamos en horario de atención
  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour + minute / 60;

    // Domingo cerrado
    if (day === 0) return false;

    // Lunes a viernes: 9:30-13:00 y 17:00-20:00
    if (day >= 1 && day <= 5) {
      return (currentTime >= 9.5 && currentTime <= 13) || (currentTime >= 17 && currentTime <= 20);
    }

    // Sábado: 9:30-13:00
    if (day === 6) {
      return currentTime >= 9.5 && currentTime <= 13;
    }

    return false;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5493541579927'; // Número de WhatsApp
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre los vehículos disponibles. ¿Podrían ayudarme?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleButtonClick = () => {
    if (isBusinessHours()) {
      handleWhatsAppClick();
    } else {
      setIsOpen(!isOpen);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón principal */}
      <button
        onClick={handleButtonClick}
        className={`group relative p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 ${
          isBusinessHours() 
            ? 'bg-green-500 hover:bg-green-600 focus:ring-green-300' 
            : 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-300'
        } text-white`}
        aria-label="Contactar por WhatsApp"
      >
        {/* Icono de WhatsApp */}
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>

        {/* Efecto de pulso solo si está en horario */}
        {isBusinessHours() && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        )}
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {isBusinessHours() ? '¡Chateá con nosotros!' : 'Ver horarios de atención'}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Modal de horarios */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-64">
          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-3">Horarios de Atención</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Lunes a Viernes:</span>
                <span>9:30 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Lunes a Viernes:</span>
                <span>17:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sábados:</span>
                <span>9:30 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Domingos:</span>
                <span className="text-red-600">Cerrado</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Enviar WhatsApp
              </button>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Notificación de mensaje solo si está en horario */}
      {isBusinessHours() && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          1
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloatingButton;
