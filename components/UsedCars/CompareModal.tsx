import React from 'react';
import type { UsedCar } from '../../constants/usedCarsData';

interface CompareModalProps {
  cars: UsedCar[];
  onClose: () => void;
  onRemoveCar: (carId: string) => void;
}

const CompareModal: React.FC<CompareModalProps> = ({ cars, onClose, onRemoveCar }) => {
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

  if (cars.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Comparar Vehículos ({cars.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
              {cars.map((car) => (
                <div key={car.id} className="relative">
                  <button
                    onClick={() => onRemoveCar(car.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors duration-200 z-10"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="text-center">
                    <img
                      src={car.images[0] || '/images/placeholder-car.jpg'}
                      alt={`${car.make} ${car.model}`}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {car.make} {car.model}
                    </h3>
                    <p className="text-gray-600 text-xs">{car.version}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="border-t border-gray-200">
              <table className="w-full">
                <tbody>
                  {/* Precio */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Precio</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {formatPrice(car.price, car.priceCurrency)}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Año */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Año</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center text-gray-700">
                        {car.year}
                      </td>
                    ))}
                  </tr>

                  {/* Kilómetros */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Kilómetros</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center text-gray-700">
                        {car.mileage.toLocaleString()} km
                      </td>
                    ))}
                  </tr>

                  {/* Motor */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Motor</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center text-gray-700">
                        {car.engine}
                      </td>
                    ))}
                  </tr>

                  {/* Combustible */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Combustible</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center text-gray-700">
                        {car.fuelType}
                      </td>
                    ))}
                  </tr>

                  {/* Transmisión */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Transmisión</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center text-gray-700">
                        {car.transmission}
                      </td>
                    ))}
                  </tr>

                  {/* Color */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Color</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center text-gray-700">
                        {car.color}
                      </td>
                    ))}
                  </tr>

                  {/* Ubicación */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Ubicación</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center text-gray-700">
                        {car.location}
                      </td>
                    ))}
                  </tr>

                  {/* Garantía */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Garantía</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center">
                        {car.isWarranty ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                            Sí
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                            No
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Inspeccionado */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Inspeccionado</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center">
                        {car.isInspected ? (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                            Sí
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                            No
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Características */}
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Características</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {car.features.slice(0, 3).map((feature, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                          {car.features.length > 3 && (
                            <span className="text-gray-500 text-xs">+{car.features.length - 3} más</span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Acciones */}
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">Acciones</td>
                    {cars.map((car) => (
                      <td key={car.id} className="px-6 py-4 text-center">
                        <a
                          href={`https://api.whatsapp.com/send?phone=${car.seller.whatsapp}&text=Hola! Me interesa el ${car.make} ${car.model} ${car.version} ${car.year}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          WhatsApp
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600">
            Comparando {cars.length} vehículo{cars.length !== 1 ? 's' : ''}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
