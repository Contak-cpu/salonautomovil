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

interface CollapsibleFilterProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  selectedCount: number;
  children: React.ReactNode;
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

// Componente para filtros colapsables
const CollapsibleFilter: React.FC<CollapsibleFilterProps> = ({ 
  title, 
  isOpen, 
  onToggle, 
  selectedCount, 
  children 
}) => {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-900">{title}</span>
          {selectedCount > 0 && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
              {selectedCount}
            </span>
          )}
        </div>
        <svg 
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

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
  
  // Estados para controlar qué secciones están abiertas
  const [openSections, setOpenSections] = useState({
    brands: false,
    models: false,
    versions: false,
    fuelTypes: false,
    transmissions: false,
    locations: false,
    priceRange: true,
    yearRange: false,
    mileageRange: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
      <CollapsibleFilter
        title="Marca"
        isOpen={openSections.brands}
        onToggle={() => toggleSection('brands')}
        selectedCount={filters.brands.length}
      >
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map(brand => (
            <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleArrayFilterChange('brands', brand)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 select-none">{brand}</span>
            </label>
          ))}
        </div>
      </CollapsibleFilter>

      {/* Modelo */}
      <CollapsibleFilter
        title="Modelo"
        isOpen={openSections.models}
        onToggle={() => toggleSection('models')}
        selectedCount={filters.models.length}
      >
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {availableModels.length > 0 ? availableModels.map(model => (
            <label key={model} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.models.includes(model)}
                onChange={() => handleArrayFilterChange('models', model)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 select-none">{model}</span>
            </label>
          )) : (
            <p className="text-sm text-gray-500 italic p-2">Selecciona una marca primero</p>
          )}
        </div>
      </CollapsibleFilter>

      {/* Versión */}
      <CollapsibleFilter
        title="Versión"
        isOpen={openSections.versions}
        onToggle={() => toggleSection('versions')}
        selectedCount={filters.versions.length}
      >
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {availableVersions.length > 0 ? availableVersions.map(version => (
            <label key={version} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.versions.includes(version)}
                onChange={() => handleArrayFilterChange('versions', version)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 select-none">{version}</span>
            </label>
          )) : (
            <p className="text-sm text-gray-500 italic p-2">Selecciona marca y modelo primero</p>
          )}
        </div>
      </CollapsibleFilter>

      {/* Rango de Precio */}
      <CollapsibleFilter
        title="Rango de Precio"
        isOpen={openSections.priceRange}
        onToggle={() => toggleSection('priceRange')}
        selectedCount={0}
      >
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-sm font-medium text-gray-900">
              {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
            </span>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Precio mínimo</label>
              <input
                type="range"
                min="0"
                max="50000000"
                step="500000"
                value={filters.priceRange[0]}
                onInput={(e) => handleRangeChange('priceRange', 0, parseInt((e.target as HTMLInputElement).value))}
                onChange={(e) => handleRangeChange('priceRange', 0, parseInt(e.target.value))}
                onMouseMove={(e) => {
                  if (e.buttons === 1) {
                    handleRangeChange('priceRange', 0, parseInt((e.target as HTMLInputElement).value));
                  }
                }}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Precio máximo</label>
              <input
                type="range"
                min="0"
                max="50000000"
                step="500000"
                value={filters.priceRange[1]}
                onInput={(e) => handleRangeChange('priceRange', 1, parseInt((e.target as HTMLInputElement).value))}
                onChange={(e) => handleRangeChange('priceRange', 1, parseInt(e.target.value))}
                onMouseMove={(e) => {
                  if (e.buttons === 1) {
                    handleRangeChange('priceRange', 1, parseInt((e.target as HTMLInputElement).value));
                  }
                }}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </div>
          </div>
        </div>
      </CollapsibleFilter>

      {/* Año */}
      <CollapsibleFilter
        title="Año"
        isOpen={openSections.yearRange}
        onToggle={() => toggleSection('yearRange')}
        selectedCount={0}
      >
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-sm font-medium text-gray-900">
              {filters.yearRange[0]} - {filters.yearRange[1]}
            </span>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Año mínimo</label>
              <input
                type="range"
                min="2000"
                max="2025"
                step="1"
                value={filters.yearRange[0]}
                onChange={(e) => handleRangeChange('yearRange', 0, parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Año máximo</label>
              <input
                type="range"
                min="2000"
                max="2025"
                step="1"
                value={filters.yearRange[1]}
                onChange={(e) => handleRangeChange('yearRange', 1, parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </div>
          </div>
        </div>
      </CollapsibleFilter>

      {/* Kilómetros */}
      <CollapsibleFilter
        title="Kilómetros"
        isOpen={openSections.mileageRange}
        onToggle={() => toggleSection('mileageRange')}
        selectedCount={0}
      >
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-sm font-medium text-gray-900">
              {filters.mileageRange[0].toLocaleString()} - {filters.mileageRange[1].toLocaleString()} km
            </span>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Kilómetros mínimos</label>
              <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={filters.mileageRange[0]}
                onChange={(e) => handleRangeChange('mileageRange', 0, parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Kilómetros máximos</label>
              <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={filters.mileageRange[1]}
                onChange={(e) => handleRangeChange('mileageRange', 1, parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider-thumb"
              />
            </div>
          </div>
        </div>
      </CollapsibleFilter>

      {/* Combustible */}
      <CollapsibleFilter
        title="Combustible"
        isOpen={openSections.fuelTypes}
        onToggle={() => toggleSection('fuelTypes')}
        selectedCount={filters.fuelTypes.length}
      >
        <div className="space-y-2">
          {fuelTypes.map(fuel => (
            <label key={fuel} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.fuelTypes.includes(fuel)}
                onChange={() => handleArrayFilterChange('fuelTypes', fuel)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 select-none">{fuel}</span>
            </label>
          ))}
        </div>
      </CollapsibleFilter>

      {/* Transmisión */}
      <CollapsibleFilter
        title="Transmisión"
        isOpen={openSections.transmissions}
        onToggle={() => toggleSection('transmissions')}
        selectedCount={filters.transmissions.length}
      >
        <div className="space-y-2">
          {transmissions.map(transmission => (
            <label key={transmission} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.transmissions.includes(transmission)}
                onChange={() => handleArrayFilterChange('transmissions', transmission)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 select-none">{transmission}</span>
            </label>
          ))}
        </div>
      </CollapsibleFilter>

      {/* Ubicación */}
      <CollapsibleFilter
        title="Ubicación"
        isOpen={openSections.locations}
        onToggle={() => toggleSection('locations')}
        selectedCount={filters.locations.length}
      >
        <div className="space-y-2">
          {locations.map(location => (
            <label key={location} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.locations.includes(location)}
                onChange={() => handleArrayFilterChange('locations', location)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 select-none">{location}</span>
            </label>
          ))}
        </div>
      </CollapsibleFilter>
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