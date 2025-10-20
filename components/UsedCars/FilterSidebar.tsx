import React, { useState } from 'react';
import type { UsedCar } from '../../constants/usedCarsData';

interface FilterState {
  search: string;
  brands: string[];
  models: string[];
  versions: string[];
  priceRange: [number, number];
  yearRange: [number, number];
  mileageRange: [number, number];
  fuelTypes: string[];
  transmissions: string[];
  locations: string[];
  sortBy: 'price' | 'year' | 'mileage' | 'brand';
  sortOrder: 'asc' | 'desc';
  viewMode: 'grid' | 'list';
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onClearFilters: () => void;
  availableModels: string[];
  availableVersions: string[];
  brands: string[];
  fuelTypes: string[];
  transmissions: string[];
  locations: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  availableModels,
  availableVersions,
  brands,
  fuelTypes,
  transmissions,
  locations
}) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const formatPrice = (price: number) => {
    if (price === 0) {
      return 'Consultar';
    }
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleArrayFilterChange = (key: keyof FilterState, value: string) => {
    const currentArray = filters[key] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    onFilterChange({ [key]: newArray });
  };

  const handleRangeChange = (key: keyof FilterState, index: number, value: number) => {
    const currentRange = filters[key] as [number, number];
    const newRange: [number, number] = [...currentRange];
    newRange[index] = value;
    onFilterChange({ [key]: newRange });
  };

  const FilterContent = () => (
    <div className="space-y-4">
      {/* Marca */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Marca</h4>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleArrayFilterChange('brands', brand)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Modelo */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Modelo</h4>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {availableModels.map(model => (
            <label key={model} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.models.includes(model)}
                onChange={() => handleArrayFilterChange('models', model)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{model}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Versión */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Versión</h4>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {availableVersions.map(version => (
            <label key={version} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.versions.includes(version)}
                onChange={() => handleArrayFilterChange('versions', version)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{version}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rango de Precio */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Precio: {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
        </h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="50000000"
            step="500000"
            value={filters.priceRange[0]}
            onChange={(e) => handleRangeChange('priceRange', 0, parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="50000000"
            step="500000"
            value={filters.priceRange[1]}
            onChange={(e) => handleRangeChange('priceRange', 1, parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Año */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Año: {filters.yearRange[0]} - {filters.yearRange[1]}
        </h4>
        <div className="space-y-2">
          <input
            type="range"
            min="2000"
            max="2024"
            step="1"
            value={filters.yearRange[0]}
            onChange={(e) => handleRangeChange('yearRange', 0, parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="2000"
            max="2024"
            step="1"
            value={filters.yearRange[1]}
            onChange={(e) => handleRangeChange('yearRange', 1, parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Combustible */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Combustible</h4>
        <div className="space-y-1">
          {fuelTypes.map(fuel => (
            <label key={fuel} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.fuelTypes.includes(fuel)}
                onChange={() => handleArrayFilterChange('fuelTypes', fuel)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{fuel}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Transmisión */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Transmisión</h4>
        <div className="space-y-1">
          {transmissions.map(transmission => (
            <label key={transmission} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.transmissions.includes(transmission)}
                onChange={() => handleArrayFilterChange('transmissions', transmission)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{transmission}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ubicación */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Ubicación</h4>
        <div className="space-y-1">
          {locations.map(location => (
            <label key={location} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.locations.includes(location)}
                onChange={() => handleArrayFilterChange('locations', location)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{location}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <span className="font-medium text-gray-900">Filtros</span>
          <svg 
            className={`w-5 h-5 transform transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Mobile Filters (Collapsible) */}
      {isMobileFiltersOpen && (
        <div className="lg:hidden mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Filtros</h3>
            <button
              onClick={onClearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Limpiar todo
            </button>
          </div>
          <FilterContent />
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden lg:block w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-32">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
            <button
              onClick={onClearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Limpiar todo
            </button>
          </div>
          <FilterContent />
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;