export interface UsedCar {
  id: string;
  make: string;
  model: string;
  version: string;
  year: number;
  mileage: number;
  price: number;
  priceCurrency: 'ARS' | 'USD';
  fuelType: 'Nafta' | 'Diésel' | 'Híbrido' | 'Eléctrico';
  transmission: 'Manual' | 'Automática' | 'CVT';
  engine: string;
  color: string;
  images: string[];
  features: string[];
  location: string;
  isWarranty: boolean;
  isInspected: boolean;
  isFinancing: boolean;
  description: string;
  seller: {
    name: string;
    phone: string;
    whatsapp: string;
  };
  createdAt: string;
  isFavorite?: boolean;
}

export const USED_CARS: UsedCar[] = [
  {
    id: 'used-001',
    make: 'Toyota',
    model: 'Corolla',
    version: '1.8 XEI CVT',
    year: 2021,
    mileage: 45000,
    price: 18500000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'CVT',
    engine: '1.8L 4 Cilindros',
    color: 'Blanco',
    images: ['/images/used-cars/toyota-corolla-2021-1.jpg', '/images/used-cars/toyota-corolla-2021-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Hidráulica', 'ABS', 'Airbags', 'Bluetooth', 'Cámara de Retroceso'],
    location: 'Córdoba Capital',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Excelente estado general, único dueño, mantenimiento al día en concesionario oficial.',
    seller: {
      name: 'Carlos Mendoza',
      phone: '+54 9 351 123-4567',
      whatsapp: '5493511234567'
    },
    createdAt: '2024-01-15'
  },
  {
    id: 'used-002',
    make: 'Volkswagen',
    model: 'Golf',
    version: '1.4 TSI Comfortline',
    year: 2019,
    mileage: 62000,
    price: 15200000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '1.4L Turbo',
    color: 'Gris Plata',
    images: ['/images/used-cars/vw-golf-2019-1.jpg', '/images/used-cars/vw-golf-2019-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'ESP', 'Airbags', 'Radio CD'],
    location: 'Villa Carlos Paz',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Vehiculo en muy buen estado, historial de mantenimiento completo.',
    seller: {
      name: 'María González',
      phone: '+54 9 3543 987-654',
      whatsapp: '5493543987654'
    },
    createdAt: '2024-01-20'
  },
  {
    id: 'used-003',
    make: 'Ford',
    model: 'Focus',
    version: '2.0 SE Plus',
    year: 2020,
    mileage: 38000,
    price: 16800000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Automática',
    engine: '2.0L 4 Cilindros',
    color: 'Azul Marino',
    images: ['/images/used-cars/ford-focus-2020-1.jpg', '/images/used-cars/ford-focus-2020-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth', 'Sensores de Estacionamiento'],
    location: 'Córdoba Capital',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Auto en excelente estado, poco uso, mantenimiento en concesionario oficial.',
    seller: {
      name: 'Roberto Silva',
      phone: '+54 9 351 555-1234',
      whatsapp: '5493515551234'
    },
    createdAt: '2024-01-25'
  },
  {
    id: 'used-004',
    make: 'Chevrolet',
    model: 'Onix',
    version: '1.0 LTZ',
    year: 2022,
    mileage: 25000,
    price: 14200000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '1.0L 3 Cilindros',
    color: 'Rojo',
    images: ['/images/used-cars/chevrolet-onix-2022-1.jpg', '/images/used-cars/chevrolet-onix-2022-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth', 'Cámara de Retroceso'],
    location: 'Río Cuarto',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Semi nuevo, único dueño, excelente opción para ciudad.',
    seller: {
      name: 'Ana López',
      phone: '+54 9 358 456-7890',
      whatsapp: '5493584567890'
    },
    createdAt: '2024-02-01'
  },
  {
    id: 'used-005',
    make: 'Peugeot',
    model: '208',
    version: '1.6 Allure',
    year: 2021,
    mileage: 41000,
    price: 15800000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Automática',
    engine: '1.6L 4 Cilindros',
    color: 'Negro',
    images: ['/images/used-cars/peugeot-208-2021-1.jpg', '/images/used-cars/peugeot-208-2021-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'ESP', 'Airbags', 'Bluetooth', 'Sensores de Estacionamiento'],
    location: 'Córdoba Capital',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Auto en muy buen estado, equipamiento completo, ideal para familia.',
    seller: {
      name: 'Diego Fernández',
      phone: '+54 9 351 789-0123',
      whatsapp: '5493517890123'
    },
    createdAt: '2024-02-05'
  },
  {
    id: 'used-006',
    make: 'Renault',
    model: 'Logan',
    version: '1.6 Expression',
    year: 2020,
    mileage: 55000,
    price: 12800000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '1.6L 4 Cilindros',
    color: 'Blanco',
    images: ['/images/used-cars/renault-logan-2020-1.jpg', '/images/used-cars/renault-logan-2020-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Radio CD'],
    location: 'Villa María',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Vehiculo confiable, bajo costo de mantenimiento, ideal para trabajo.',
    seller: {
      name: 'Laura Martínez',
      phone: '+54 9 353 234-5678',
      whatsapp: '5493532345678'
    },
    createdAt: '2024-02-10'
  },
  {
    id: 'used-007',
    make: 'Fiat',
    model: 'Cronos',
    version: '1.3 Drive',
    year: 2022,
    mileage: 32000,
    price: 13800000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '1.3L 4 Cilindros',
    color: 'Gris',
    images: ['/images/used-cars/fiat-cronos-2022-1.jpg', '/images/used-cars/fiat-cronos-2022-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth', 'Cámara de Retroceso'],
    location: 'Córdoba Capital',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Auto moderno, equipamiento completo, excelente relación precio-calidad.',
    seller: {
      name: 'Pablo Rodríguez',
      phone: '+54 9 351 345-6789',
      whatsapp: '5493513456789'
    },
    createdAt: '2024-02-15'
  },
  {
    id: 'used-008',
    make: 'Nissan',
    model: 'Versa',
    version: '1.6 Advance',
    year: 2021,
    mileage: 48000,
    price: 16200000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'CVT',
    engine: '1.6L 4 Cilindros',
    color: 'Plata',
    images: ['/images/used-cars/nissan-versa-2021-1.jpg', '/images/used-cars/nissan-versa-2021-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'ESP', 'Airbags', 'Bluetooth', 'Sensores de Estacionamiento'],
    location: 'San Francisco',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Vehiculo en excelente estado, transmisión CVT, muy cómodo para viajes.',
    seller: {
      name: 'Claudia Herrera',
      phone: '+54 9 3564 456-7890',
      whatsapp: '54935644567890'
    },
    createdAt: '2024-02-20'
  },
  {
    id: 'used-009',
    make: 'Honda',
    model: 'Civic',
    version: '2.0 EXL',
    year: 2020,
    mileage: 35000,
    price: 22500000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'CVT',
    engine: '2.0L 4 Cilindros',
    color: 'Azul',
    images: ['/images/used-cars/honda-civic-2020-1.jpg', '/images/used-cars/honda-civic-2020-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'ESP', 'Airbags', 'Bluetooth', 'Cámara de Retroceso', 'Sensores de Estacionamiento'],
    location: 'Córdoba Capital',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Auto premium en excelente estado, equipamiento de lujo, único dueño.',
    seller: {
      name: 'Miguel Torres',
      phone: '+54 9 351 567-8901',
      whatsapp: '5493515678901'
    },
    createdAt: '2024-02-25'
  },
  {
    id: 'used-010',
    make: 'Hyundai',
    model: 'HB20',
    version: '1.0 Vision',
    year: 2022,
    mileage: 28000,
    price: 13500000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '1.0L 3 Cilindros',
    color: 'Blanco',
    images: ['/images/used-cars/hyundai-hb20-2022-1.jpg', '/images/used-cars/hyundai-hb20-2022-2.jpg'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth', 'Cámara de Retroceso'],
    location: 'Córdoba Capital',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Auto moderno, poco uso, ideal para ciudad, garantía extendida disponible.',
    seller: {
      name: 'Sandra Jiménez',
      phone: '+54 9 351 678-9012',
      whatsapp: '5493516789012'
    },
    createdAt: '2024-03-01'
  }
];

export const BRANDS = [
  'Toyota', 'Volkswagen', 'Ford', 'Chevrolet', 'Peugeot', 
  'Renault', 'Fiat', 'Nissan', 'Honda', 'Hyundai'
];

export const FUEL_TYPES = ['Nafta', 'Diésel', 'Híbrido', 'Eléctrico'];
export const TRANSMISSIONS = ['Manual', 'Automática', 'CVT'];
export const LOCATIONS = ['Córdoba Capital', 'Villa Carlos Paz', 'Río Cuarto', 'Villa María', 'San Francisco'];
