import React from 'react';
import VehicleCard from './VehicleCard';
import type { UsedCar } from '../../constants/usedCarsData';

interface VehicleGridProps {
  cars: UsedCar[];
  viewMode: 'grid' | 'list';
  favorites: string[];
  selectedCars: string[];
  onToggleFavorite: (carId: string) => void;
  onToggleCompare: (carId: string) => void;
  onShowDetails: (car: UsedCar) => void;
}

const VehicleGrid: React.FC<VehicleGridProps> = ({
  cars,
  viewMode,
  favorites,
  selectedCars,
  onToggleFavorite,
  onToggleCompare,
  onShowDetails
}) => {
  if (cars.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron vehículos</h3>
        <p className="text-gray-500">Intenta ajustar los filtros para ver más resultados</p>
      </div>
    );
  }

  const gridClasses = viewMode === 'grid' 
    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
    : 'space-y-4';

  return (
    <div className={gridClasses}>
      {cars.map(car => (
        <VehicleCard
          key={car.id}
          car={car}
          viewMode={viewMode}
          isFavorite={favorites.includes(car.id)}
          isSelected={selectedCars.includes(car.id)}
          onToggleFavorite={onToggleFavorite}
          onToggleCompare={onToggleCompare}
          onShowDetails={onShowDetails}
        />
      ))}
    </div>
  );
};

export default VehicleGrid;
