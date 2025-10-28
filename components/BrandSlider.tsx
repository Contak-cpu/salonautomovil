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

  // Duplicamos el array para crear el efecto de loop infinito
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="relative py-12 bg-gray-dark overflow-hidden">
      {/* Fade effects en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-dark to-transparent z-10"></div>
      
      {/* Slider container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-3 md:mx-8 lg:mx-12 flex items-center justify-center group cursor-pointer"
              style={{ width: '200px', height: '120px' }}
            >
              <div className={`flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${brand.name === 'Toyota' ? 'w-[200px] h-[120px] md:w-[300px] md:h-[180px] lg:w-[560px] lg:h-[320px]' : 'w-24 h-20 md:w-32 md:h-28 lg:w-48 lg:h-40'}`}>
                <img
                  src={brand.image}
                  alt={`Logo de ${brand.name}`}
                  className={`object-contain ${brand.name === 'Toyota' ? 'w-[200px] h-[120px] md:w-[300px] md:h-[180px] lg:w-[560px] lg:h-[320px]' : 'w-24 h-20 md:w-32 md:h-28 lg:w-48 lg:h-40'}`}
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
