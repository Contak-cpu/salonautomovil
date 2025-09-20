import React, { useState, useMemo } from 'react';
import { USED_CARS, BRANDS, FUEL_TYPES, TRANSMISSIONS, LOCATIONS } from '../../constants/usedCarsData';
import type { UsedCar } from '../../constants/usedCarsData';
import FilterSidebar from './FilterSidebar';
import VehicleGrid from './VehicleGrid';
import SearchBar from './SearchBar';
import CompareModal from './CompareModal';

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

const UsedCarsSection: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    brands: [],
    models: [],
    versions: [],
    priceRange: [0, 50000000],
    yearRange: [2015, 2024],
    mileageRange: [0, 200000],
    fuelTypes: [],
    transmissions: [],
    locations: [],
    sortBy: 'price',
    sortOrder: 'asc',
    viewMode: 'grid'
  });

  const [selectedCars, setSelectedCars] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Filtrar vehículos
  const filteredCars = useMemo(() => {
    let filtered = USED_CARS.filter(car => {
      // Búsqueda por texto
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const searchableText = `${car.make} ${car.model} ${car.version} ${car.year}`.toLowerCase();
        if (!searchableText.includes(searchTerm)) return false;
      }

      // Filtro por marcas
      if (filters.brands.length > 0 && !filters.brands.includes(car.make)) {
        return false;
      }

      // Filtro por modelos
      if (filters.models.length > 0 && !filters.models.includes(car.model)) {
        return false;
      }

      // Filtro por versiones
      if (filters.versions.length > 0 && !filters.versions.includes(car.version)) {
        return false;
      }

      // Filtro por rango de precios
      if (car.price < filters.priceRange[0] || car.price > filters.priceRange[1]) {
        return false;
      }

      // Filtro por rango de años
      if (car.year < filters.yearRange[0] || car.year > filters.yearRange[1]) {
        return false;
      }

      // Filtro por rango de kilómetros
      if (car.mileage < filters.mileageRange[0] || car.mileage > filters.mileageRange[1]) {
        return false;
      }

      // Filtro por tipo de combustible
      if (filters.fuelTypes.length > 0 && !filters.fuelTypes.includes(car.fuelType)) {
        return false;
      }

      // Filtro por transmisión
      if (filters.transmissions.length > 0 && !filters.transmissions.includes(car.transmission)) {
        return false;
      }

      // Filtro por ubicación
      if (filters.locations.length > 0 && !filters.locations.includes(car.location)) {
        return false;
      }

      return true;
    });

    // Ordenar
    filtered.sort((a, b) => {
      let aValue: number | string;
      let bValue: number | string;

      switch (filters.sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'year':
          aValue = a.year;
          bValue = b.year;
          break;
        case 'mileage':
          aValue = a.mileage;
          bValue = b.mileage;
          break;
        case 'brand':
          aValue = a.make;
          bValue = b.make;
          break;
        default:
          aValue = a.price;
          bValue = b.price;
      }

      if (filters.sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [filters]);

  // Obtener modelos únicos por marca seleccionada
  const availableModels = useMemo(() => {
    const selectedBrands = filters.brands.length > 0 ? filters.brands : BRANDS;
    const models = new Set<string>();
    
    USED_CARS.forEach(car => {
      if (selectedBrands.includes(car.make)) {
        models.add(car.model);
      }
    });
    
    return Array.from(models).sort();
  }, [filters.brands]);

  // Obtener versiones únicas por marca y modelo seleccionados
  const availableVersions = useMemo(() => {
    const selectedBrands = filters.brands.length > 0 ? filters.brands : BRANDS;
    const selectedModels = filters.models.length > 0 ? filters.models : availableModels;
    const versions = new Set<string>();
    
    USED_CARS.forEach(car => {
      if (selectedBrands.includes(car.make) && selectedModels.includes(car.model)) {
        versions.add(car.version);
      }
    });
    
    return Array.from(versions).sort();
  }, [filters.brands, filters.models, availableModels]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      brands: [],
      models: [],
      versions: [],
      priceRange: [0, 50000000],
      yearRange: [2015, 2024],
      mileageRange: [0, 200000],
      fuelTypes: [],
      transmissions: [],
      locations: [],
      sortBy: 'price',
      sortOrder: 'asc',
      viewMode: 'grid'
    });
  };

  const handleToggleFavorite = (carId: string) => {
    setFavorites(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const handleToggleCompare = (carId: string) => {
    setSelectedCars(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const activeFiltersCount = Object.values(filters).reduce((count, value) => {
    if (Array.isArray(value)) {
      return count + value.length;
    }
    if (typeof value === 'string' && value !== '') {
      return count + 1;
    }
    if (Array.isArray(value) && value.length > 0) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Que tu próximo usado se sienta como cero
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Asesoría personalizada, garantía extendida y servicio de posventa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold mb-2">Garantía Extendida</h3>
                <p className="text-blue-100 text-sm">Hasta 2 años de garantía</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold mb-2">Financiación 100%</h3>
                <p className="text-blue-100 text-sm">Hasta el valor total del vehículo</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="text-lg font-semibold mb-2">Entrega Rápida</h3>
                <p className="text-blue-100 text-sm">Entrega en 48 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              availableModels={availableModels}
              availableVersions={availableVersions}
              brands={BRANDS}
              fuelTypes={FUEL_TYPES}
              transmissions={TRANSMISSIONS}
              locations={LOCATIONS}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Controls */}
            <SearchBar
              search={filters.search}
              onSearchChange={(search) => handleFilterChange({ search })}
              sortBy={filters.sortBy}
              sortOrder={filters.sortOrder}
              viewMode={filters.viewMode}
              onSortChange={(sortBy, sortOrder) => handleFilterChange({ sortBy, sortOrder })}
              onViewModeChange={(viewMode) => handleFilterChange({ viewMode })}
              resultsCount={filteredCars.length}
              activeFiltersCount={activeFiltersCount}
              onClearFilters={handleClearFilters}
            />

            {/* Vehicle Grid */}
            <VehicleGrid
              cars={filteredCars}
              viewMode={filters.viewMode}
              favorites={favorites}
              selectedCars={selectedCars}
              onToggleFavorite={handleToggleFavorite}
              onToggleCompare={handleToggleCompare}
            />

            {/* Compare Button */}
            {selectedCars.length > 0 && (
              <div className="fixed bottom-6 right-6 z-50">
                <button
                  onClick={() => setShowCompareModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 3H7v2h2V3zm0 4H7v2h2V7zm0 4H7v2h2v-2zm0 4H7v2h2v-2zm4-12h-2v2h2V3zm0 4h-2v2h2V7zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                  Comparar ({selectedCars.length})
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Compare Modal */}
      {showCompareModal && (
        <CompareModal
          cars={USED_CARS.filter(car => selectedCars.includes(car.id))}
          onClose={() => setShowCompareModal(false)}
          onRemoveCar={(carId) => handleToggleCompare(carId)}
        />
      )}
    </div>
  );
};

export default UsedCarsSection;
