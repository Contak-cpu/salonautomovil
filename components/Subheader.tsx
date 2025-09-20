import React from 'react';

const Subheader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wider mb-2 text-shadow-lg">
            BIENVENIDOS AL SALÓN DEL AUTOMÓVIL
          </h1>
          <p className="text-accent text-lg md:text-xl font-bold tracking-wide">
            Tu concesionaria de confianza
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
