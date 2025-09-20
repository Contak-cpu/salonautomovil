import React from 'react';
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
  const formatPrice = (price: number) => {
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

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-gray-900 hover:text-gray-700 font-medium"
        >
          Limpiar todo
        </button>
      </div>

      <div className="space-y-6">
        {/* Marca */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Marca</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.map(brand => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleArrayFilterChange('brands', brand)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="ml-2 text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Modelo */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Modelo</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableModels.map(model => (
              <label key={model} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.models.includes(model)}
                  onChange={() => handleArrayFilterChange('models', model)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="ml-2 text-sm text-gray-700">{model}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Versión */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Versión</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableVersions.map(version => (
              <label key={version} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.versions.includes(version)}
                  onChange={() => handleArrayFilterChange('versions', version)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="ml-2 text-sm text-gray-700">{version}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rango de Precios */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
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
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            Año: {filters.yearRange[0]} - {filters.yearRange[1]}
          </h4>
          <div className="space-y-2">
            <input
              type="range"
              min="2015"
              max="2024"
              step="1"
              value={filters.yearRange[0]}
              onChange={(e) => handleRangeChange('yearRange', 0, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="2015"
              max="2024"
              step="1"
              value={filters.yearRange[1]}
              onChange={(e) => handleRangeChange('yearRange', 1, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Kilómetros */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            Kilómetros: {filters.mileageRange[0].toLocaleString()} - {filters.mileageRange[1].toLocaleString()}
          </h4>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={filters.mileageRange[0]}
              onChange={(e) => handleRangeChange('mileageRange', 0, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={filters.mileageRange[1]}
              onChange={(e) => handleRangeChange('mileageRange', 1, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Tipo de Combustible */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Combustible</h4>
          <div className="space-y-2">
            {fuelTypes.map(fuel => (
              <label key={fuel} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.fuelTypes.includes(fuel)}
                  onChange={() => handleArrayFilterChange('fuelTypes', fuel)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="ml-2 text-sm text-gray-700">{fuel}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Transmisión */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Transmisión</h4>
          <div className="space-y-2">
            {transmissions.map(transmission => (
              <label key={transmission} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.transmissions.includes(transmission)}
                  onChange={() => handleArrayFilterChange('transmissions', transmission)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="ml-2 text-sm text-gray-700">{transmission}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ubicación */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Ubicación</h4>
          <div className="space-y-2">
            {locations.map(location => (
              <label key={location} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.locations.includes(location)}
                  onChange={() => handleArrayFilterChange('locations', location)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="ml-2 text-sm text-gray-700">{location}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
