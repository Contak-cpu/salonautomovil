import React, { useState } from 'react';
import type { Vehicle } from '../types';
import VehicleCard from './VehicleCard';
import VehicleDetailModal from './VehicleDetailModal';

interface CatalogProps {
  title: string;
  vehicles: Vehicle[];
  onBack: () => void;
}

const Catalog: React.FC<CatalogProps> = ({ title, vehicles, onBack }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  const getCategoryIcon = (title: string) => {
    if (title.includes('0km') || title.includes('0KM')) {
      return (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  };

  const getCategoryDescription = (title: string) => {
    if (title.includes('0km') || title.includes('0KM')) {
      return 'Vehículos completamente nuevos, con garantía oficial y las últimas tecnologías';
    }
    return 'Vehículos usados seleccionados, revisados y garantizados para tu tranquilidad';
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section Mejorado */}
        <div className="section-bg rounded-enhanced p-8 mb-8 relative overflow-hidden category-header">
          {/* Elemento decorativo de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-enhanced">
                {getCategoryIcon(title)}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white text-enhanced mb-2">{title}</h1>
                <p className="text-gray-light text-lg">{getCategoryDescription(title)}</p>
              </div>
            </div>
            <button onClick={onBack} className="button-secondary text-white font-bold py-3 px-6 rounded-enhanced hover-lift flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al Inicio
            </button>
          </div>
        </div>

        {/* Vehicles Section Mejorado */}
        <div className="section-bg rounded-enhanced p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-white rounded-full"></div>
              <h2 className="text-2xl font-bold text-white text-enhanced">Vehículos Disponibles</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-light text-sm bg-black/30 px-4 py-2 rounded-full border border-white/10">
                {vehicles.length} vehículo{vehicles.length !== 1 ? 's' : ''} disponible{vehicles.length !== 1 ? 's' : ''}
              </span>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.id} className="relative vehicle-connector fade-in-up">
                <VehicleCard vehicle={vehicle} onViewDetails={handleViewDetails} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalles */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Catalog;