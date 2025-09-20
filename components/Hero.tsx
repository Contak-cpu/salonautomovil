import React from 'react';

interface HeroProps {
  onShowCatalog: (type: '0km' | 'usados') => void;
}

const Hero: React.FC<HeroProps> = ({ onShowCatalog }) => {
  return (
    <section className="h-[calc(100vh-80px)] flex flex-col md:flex-row">
      <div 
        className="relative w-full h-1/2 md:h-full group overflow-hidden"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-center items-center text-center p-4">
          <div className="transform transition-transform duration-300 group-hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">AUTOS 0KM</h2>
            <p className="mt-4 text-sm md:text-base text-gray-light max-w-md drop-shadow-md">La última tecnología y el confort que buscás, directo de fábrica.</p>
            <button onClick={() => onShowCatalog('0km')} className="mt-8 bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110">
              Ver 0km
            </button>
          </div>
        </div>
      </div>
      <div 
        className="relative w-full h-1/2 md:h-full group overflow-hidden"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1964&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-center items-center text-center p-4">
          <div className="transform transition-transform duration-300 group-hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">AUTOS USADOS</h2>
            <p className="mt-4 text-sm md:text-base text-gray-light max-w-md drop-shadow-md">Selección premium de vehículos usados con garantía y confianza.</p>
            <button onClick={() => onShowCatalog('usados')} className="mt-8 bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110">
              Ver Usados
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;