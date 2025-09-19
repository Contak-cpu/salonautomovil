import React from 'react';

const BrandSlider: React.FC = () => {
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
      name: 'Ford',
      image: '/images/brands/ford-1-logo-svgrepo-com-removebg-preview.png'
    },
    {
      name: 'Toyota',
      image: '/images/brands/toyota-1-logo-svgrepo-com-removebg-preview.png'
    },
    {
      name: 'Volkswagen',
      image: '/images/brands/volkswagen-svgrepo-com.png'
    }
  ];

  // Duplicamos el array para crear el efecto de loop infinito
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="relative py-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Fade effects en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
      
      {/* Slider container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center group cursor-pointer"
              style={{ width: '120px', height: '80px' }}
            >
              <div className="w-20 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={brand.image}
                  alt={`Logo de ${brand.name}`}
                  className="max-w-full max-h-full object-contain"
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
