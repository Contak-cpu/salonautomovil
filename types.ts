
export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  kms: number;
  fuel: 'Nafta' | 'Diesel' | 'GNC' | 'Eléctrico' | 'Híbrido';
  transmission: 'Manual' | 'Automática' | 'Automática Steptronic 6ª';
  image: string;
  type: '0km' | 'usado';
  description?: string;
  priceCurrency?: 'ARS' | 'USD';
}
