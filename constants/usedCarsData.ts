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
    make: 'Peugeot',
    model: '208',
    version: 'Feline Tiptronic 1.6L',
    year: 2023,
    mileage: 57000,
    price: 25900000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Automática',
    engine: '1.6L 4 Cilindros',
    color: 'Blanco Perlado',
    images: ['/images/used-cars/208.1.png', '/images/used-cars/208.2.png', '/images/used-cars/208.3.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth', 'Cámara de Retroceso', 'Pantalla Grande'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Sedán 5 puertas con caja automática, 57.000 km, color blanco perlado, línea nueva pantalla grande.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-002',
    make: 'Fiat',
    model: 'Toro',
    version: 'Freedom 1.8L Nafta/GNC',
    year: 2019,
    mileage: 79000,
    price: 24900000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Automática',
    engine: '1.8L 4 Cilindros',
    color: 'Blanco',
    images: ['/images/used-cars/toro1.png', '/images/used-cars/toro2.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'GNC 5° Generación', 'Cubiertas Nuevas', 'Tubo 16 metros'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: '4x2 AT6 con accesorios, cubiertas nuevas, tubo 16 metros 3", único dueño, color blanco.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-003',
    make: 'Citroën',
    model: 'DS3',
    version: 'Puretech 110 AT6 SO CHIC',
    year: 2018,
    mileage: 73000,
    price: 17900000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Automática',
    engine: '1.6L 4 Cilindros',
    color: 'Blanco Perlado',
    images: ['/images/used-cars/ds3.1.png', '/images/used-cars/ds3.2.png', '/images/used-cars/ds3.4.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth', 'Cámara de Retroceso'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Sedán 3 puertas, color blanco perlado, único dueño, impecable estado.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-004',
    make: 'Mercedes-Benz',
    model: 'A200',
    version: 'Urban',
    year: 2017,
    mileage: 42747,
    price: 26500,
    priceCurrency: 'USD',
    fuelType: 'Nafta',
    transmission: 'Automática',
    engine: '2.0L 4 Cilindros',
    color: 'Gris Claro',
    images: ['/images/used-cars/a200.1.png', '/images/used-cars/a200.2.png', '/images/used-cars/a200.3.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'ESP', 'Airbags', 'Bluetooth', 'Cámara de Retroceso'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Sedán 5 puertas, caja automática, único dueño, impecable, color gris claro.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-005',
    make: 'Citroën',
    model: 'C4',
    version: 'SX 5 Puertas 2.0L 16v MT',
    year: 2011,
    mileage: 96000,
    price: 11900000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '2.0L 16v 4 Cilindros',
    color: 'Blanco',
    images: ['/images/used-cars/c3.1.png', '/images/used-cars/c3.2.png', '/images/used-cars/c3.3.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Impecable, único dueño, exterior blanco.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-007',
    make: 'Fiat',
    model: 'Cronos',
    version: '1.6L',
    year: 2022,
    mileage: 35000,
    price: 19500000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '1.6L 4 Cilindros',
    color: 'Blanco',
    images: ['/images/used-cars/cronos1.png', '/images/used-cars/cronos2.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Bluetooth'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Sedán compacto con diseño italiano y tecnología moderna.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-009',
    make: 'Kia',
    model: 'Sportage',
    version: 'EX 2.0 A/T 4X4 CRDI',
    year: 2019,
    mileage: 30000,
    price: 42000,
    priceCurrency: 'USD',
    fuelType: 'Diésel',
    transmission: 'Automática',
    engine: '2.0L 4 Cilindros',
    color: 'Gris',
    images: ['/images/used-cars/kia1.png', '/images/used-cars/kia2.png', '/images/used-cars/kia3.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'ESP', 'Airbags', '4X4', 'Todo Terreno'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Todo terreno diesel, impecable, nuevo, único dueño sin detalles, color gris.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-010',
    make: 'Renault',
    model: 'Laguna',
    version: '1.9 DCI Privilege',
    year: 2003,
    mileage: 0,
    price: 12500000,
    priceCurrency: 'ARS',
    fuelType: 'Diésel',
    transmission: 'Manual',
    engine: '1.9L DCI 4 Cilindros',
    color: 'Verde Agua',
    images: ['/images/used-cars/laguna1.png', '/images/used-cars/laguna2.png', '/images/used-cars/laguna3.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'Airbags', 'Diesel'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Sedán 5 puertas, impecable - único, exterior verde agua.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-011',
    make: 'Suzuki',
    model: 'Maruti Gypsy',
    version: 'GLS',
    year: 1994,
    mileage: 89000,
    price: 19900000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Manual',
    engine: '1.0L 4 Cilindros',
    color: 'Rojo',
    images: ['/images/used-cars/maruti1.png', '/images/used-cars/maruti2.png', '/images/used-cars/maruti3.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', '4X4', 'Canvas Top'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Motor 1.0L 4X4, canvas top, caja manual, único en el país, digno de ver, todo 0 km, impecable 100%, color rojo.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  },
  {
    id: 'used-012',
    make: 'Audi',
    model: 'Q5',
    version: '2.0 TFSI 211CV S-Tronic Quattro',
    year: 2013,
    mileage: 130000,
    price: 25900000,
    priceCurrency: 'ARS',
    fuelType: 'Nafta',
    transmission: 'Automática',
    engine: '2.0L 4 Cilindros',
    color: 'Blanco',
    images: ['/images/used-cars/q5.1.png', '/images/used-cars/q5.2.png', '/images/used-cars/q5.3.png'],
    features: ['Aire Acondicionado', 'Dirección Asistida', 'ABS', 'ESP', 'Airbags', 'Quattro', 'Cámara de Retroceso'],
    location: 'Villa Carlos Paz, Córdoba',
    isWarranty: true,
    isInspected: true,
    isFinancing: true,
    description: 'Único dueño, 130.000 kmts, exterior blanco, color gris plata.',
    seller: {
      name: 'Salón del Automóvil',
      phone: '+54 9 3541 579-927',
      whatsapp: '5493541579927'
    },
    createdAt: '2024-09-01'
  }
];

export const BRANDS = [
  'Peugeot', 'Fiat', 'Citroën', 'Mercedes-Benz', 'Renault', 
  'Kia', 'Suzuki', 'Audi', 'Volkswagen', 'Ford'
];

export const FUEL_TYPES = ['Nafta', 'Diésel', 'Híbrido', 'Eléctrico'];
export const TRANSMISSIONS = ['Manual', 'Automática', 'CVT'];
export const LOCATIONS = ['Villa Carlos Paz, Córdoba'];
