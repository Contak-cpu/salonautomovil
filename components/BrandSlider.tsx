import React from 'react';
import { useNavigate } from 'react-router-dom';

// Mapeo de nombres de logos a marcas reales en los datos de 0km (todas en mayúsculas)
const brandMapping: Record<string, string> = {
  'BMW': 'BMW',
  'Fiat': 'FIAT',
  'Toyota': 'TOYOTA',
  'BAIC': 'BAIC',
  'BYD': 'BYD',
  // Nota: Volkswagen y Chevrolet pueden no tener vehículos 0km disponibles
  // Los logos sin nombre específico (Logo 1-13) no tienen mapeo y navegarán sin filtro
};

interface BrandSliderProps {
  onBrandClick?: (brandName: string) => void;
}

const BrandSlider: React.FC<BrandSliderProps> = ({ onBrandClick }) => {
  const navigate = useNavigate();

  const brands = [
    {
      name: 'BMW',
      image: '/images/brands/bmw-logo-svgrepo-com.png'
    },
    {
      name: 'Fiat',
      image: '/images/brands/fiat-3-logo-svgrepo-com.png'
    },
    {
      name: 'Toyota',
      image: '/images/brands/toyota-1-logo-svgrepo-com-removebg-preview.png'
    },
    {
      name: 'Volkswagen',
      image: '/images/brands/volkswagen-svgrepo-com.png'
    },
    {
      name: 'Chevrolet',
      image: '/images/brands/chevrolet-logo.png'
    },
    {
      name: 'BAIC',
      image: '/images/brands/baic-logo.png'
    },
    {
      name: 'Logo 1',
      image: '/images/brands/1.png'
    },
    {
      name: 'Logo 2',
      image: '/images/brands/2.png'
    },
    {
      name: 'Logo 3',
      image: '/images/brands/3.png'
    },
    {
      name: 'Logo 4',
      image: '/images/brands/4.png'
    },
    {
      name: 'Logo 5',
      image: '/images/brands/5.png'
    },
    {
      name: 'Logo 6',
      image: '/images/brands/6.png'
    },
    {
      name: 'Logo 7',
      image: '/images/brands/7.png'
    },
    {
      name: 'Logo 8',
      image: '/images/brands/8.png'
    },
    {
      name: 'Logo 9',
      image: '/images/brands/9.png'
    },
    {
      name: 'Logo 10',
      image: '/images/brands/10.png'
    },
    {
      name: 'Logo 11',
      image: '/images/brands/11.png'
    },
    {
      name: 'Logo 12',
      image: '/images/brands/12.png'
    },
    {
      name: 'Logo 13',
      image: '/images/brands/13.png'
    },
    {
      name: 'BYD',
      image: '/images/brands/byd-logo.png'
    }
  ];

  // Triplicamos el array para crear un loop infinito continuo sin cortes
  const duplicatedBrands = [...brands, ...brands, ...brands];

  const handleBrandClick = (brandName: string) => {
    const mappedBrand = brandMapping[brandName];
    if (mappedBrand) {
      // Guardar la marca seleccionada en localStorage para que NewCarsSection la lea
      localStorage.setItem('selectedBrand_0km', mappedBrand);
      // Navegar a la sección 0km
      navigate('/0km');
      // Llamar callback si existe
      if (onBrandClick) {
        onBrandClick(mappedBrand);
      }
    } else {
      // Si no hay mapeo, simplemente navegar a 0km sin filtro
      navigate('/0km');
    }
  };

  return (
    <div className="relative py-12 bg-gray-dark overflow-hidden">
      {/* Fade effects en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-dark to-transparent z-10"></div>
      
      {/* Slider container */}
      <div className="relative">
        <div className="flex animate-scroll-infinite" style={{ width: 'fit-content' }}>
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-3 md:mx-8 lg:mx-12 flex items-center justify-center group cursor-pointer"
              style={{ width: '200px', height: '120px' }}
              onClick={() => handleBrandClick(brand.name)}
            >
              <div className={`flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${brand.name === 'Toyota' || brand.name === 'BYD' || brand.name === 'BAIC' ? 'w-[200px] h-[120px] md:w-[300px] md:h-[180px] lg:w-[560px] lg:h-[320px]' : 'w-24 h-20 md:w-32 md:h-28 lg:w-48 lg:h-40'}`}>
                <img
                  src={brand.image}
                  alt={`Logo de ${brand.name}`}
                  className={`object-contain ${brand.name === 'Toyota' || brand.name === 'BYD' || brand.name === 'BAIC' ? 'w-[200px] h-[120px] md:w-[300px] md:h-[180px] lg:w-[560px] lg:h-[320px]' : 'w-24 h-20 md:w-32 md:h-28 lg:w-48 lg:h-40'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
