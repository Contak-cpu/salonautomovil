import React, { useState, useMemo, useEffect } from 'react';
import { USED_CARS, BRANDS, FUEL_TYPES, TRANSMISSIONS, LOCATIONS } from '../../constants/usedCarsData';
import type { UsedCar } from '../../constants/usedCarsData';
import { convertToARS } from '../../utils/currency';
import FilterSidebar from './FilterSidebar';
import VehicleGrid from './VehicleGrid';
import SearchBar from './SearchBar';
import CompareModal from './CompareModal';
import VehicleDetailModal from '../VehicleDetailModal';

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

interface UsedCarsSectionProps {
  onShowVehicleDetail?: (vehicle: any, isNew: boolean) => void;
}

const UsedCarsSection: React.FC<UsedCarsSectionProps> = ({ onShowVehicleDetail }) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    brands: [],
    models: [],
    versions: [],
    priceRange: [0, 100000000], // Aumentado para incluir vehículos en USD convertidos a ARS
    yearRange: [2000, 2024],
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
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedCar, setSelectedCar] = useState<UsedCar | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites_usados');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Guardar favoritos en localStorage
  useEffect(() => {
    localStorage.setItem('favorites_usados', JSON.stringify(favorites));
  }, [favorites]);

  // Filtrar vehículos
  const filteredCars = useMemo(() => {
    let filtered = USED_CARS.filter(car => {
      // Filtro de favoritos
      if (showOnlyFavorites && !favorites.includes(car.id)) {
        return false;
      }

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

      // Filtro por rango de precios - convertir USD a ARS para comparación
      const carPriceARS = convertToARS(car.price, car.priceCurrency);
      if (carPriceARS < filters.priceRange[0] || carPriceARS > filters.priceRange[1]) {
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
          // Convertir a ARS para comparación correcta
          aValue = convertToARS(a.price, a.priceCurrency);
          bValue = convertToARS(b.price, b.priceCurrency);
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
  }, [filters, favorites, showOnlyFavorites]);

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
      priceRange: [0, 60000000],
      yearRange: [2000, 2024],
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

  const handleShowDetails = (car: UsedCar) => {
    if (onShowVehicleDetail) {
      onShowVehicleDetail(car, false);
    } else {
      setSelectedCar(car);
      setShowDetailModal(true);
    }
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    
    // Contar filtros de arrays
    if (filters.brands.length > 0) count += filters.brands.length;
    if (filters.models.length > 0) count += filters.models.length;
    if (filters.versions.length > 0) count += filters.versions.length;
    if (filters.fuelTypes.length > 0) count += filters.fuelTypes.length;
    if (filters.transmissions.length > 0) count += filters.transmissions.length;
    if (filters.locations.length > 0) count += filters.locations.length;
    
    // Contar búsqueda
    if (filters.search && filters.search.trim() !== '') count += 1;
    
    // Contar rangos solo si no están en sus valores por defecto
    if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 60000000) count += 1;
    if (filters.yearRange[0] !== 2000 || filters.yearRange[1] !== 2024) count += 1;
    if (filters.mileageRange[0] !== 0 || filters.mileageRange[1] !== 200000) count += 1;
    
    return count;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 -mt-32 pt-32">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/used-cars/bmw530d-main.png"
            alt="Vehículo de fondo"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Que tu próximo usado se sienta como cero
            </h1>
            <p className="text-base md:text-lg text-gray-100 mb-8 font-light leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              Asesoría personalizada, garantía extendida y servicio de posventa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <img 
                        src="/images/banks/bna-logo.png" 
                        alt="Banco Nación Argentina" 
                        className="h-12 w-auto"
                      />
                    </div>
                    <p className="text-gray-100 text-sm text-center">Tasas preferenciales y hasta 100% de financiación</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <img 
                        src="/images/banks/santander-logo.png" 
                        alt="Banco Santander" 
                        className="h-12 w-auto"
                      />
                    </div>
                    <p className="text-gray-100 text-sm text-center">Créditos preaprobados y condiciones especiales</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <img 
                        src="/images/banks/galicia-logo.png" 
                        alt="Galicia" 
                        className="h-12 w-auto"
                      />
                    </div>
                    <p className="text-gray-100 text-sm text-center">Financiación local con beneficios exclusivos</p>
                  </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 lg:flex-shrink-0">
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
          <div className="flex-1 min-w-0">
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
              showOnlyFavorites={showOnlyFavorites}
              onToggleFavorites={setShowOnlyFavorites}
              favoritesCount={favorites.length}
            />

            {/* Vehicle Grid */}
            <VehicleGrid
              cars={filteredCars}
              viewMode={filters.viewMode}
              favorites={favorites}
              selectedCars={selectedCars}
              onToggleFavorite={handleToggleFavorite}
              onToggleCompare={handleToggleCompare}
              onShowDetails={handleShowDetails}
            />

            {/* Compare Button */}
            {selectedCars.length > 0 && (
              <div className="fixed bottom-6 right-6 z-50">
                <button
                  onClick={() => setShowCompareModal(true)}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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

      {/* Detail Modal */}
      <VehicleDetailModal
        vehicle={selectedCar}
        isOpen={showDetailModal}
        onClose={() => {
          setShowDetailModal(false);
          setSelectedCar(null);
        }}
        isNewCar={false}
      />
    </div>
  );
};

export default UsedCarsSection;
