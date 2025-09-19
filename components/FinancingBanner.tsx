import React from 'react';

const FinancingBanner: React.FC = () => {
  return (
    <section 
        id="financing" 
        className="py-20 relative bg-cover bg-center bg-no-repeat bg-gray-900"
        style={{ 
            backgroundImage: "url('https://img.cronista.com/files/image/725/725872/65819bc98cab0_360_202!.webp?s=c4397bdede64b626d31be05c5ee3aba9&d=1758070320&oe=jpg')"
        }}
    >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-extrabold text-white">ENTREGA TU USADO Y FINANCIA EL RESTO</h2>
            <p className="mt-4 text-xl text-gray-light max-w-3xl mx-auto">
                Con nuestro programa de canje, valoramos tu vehículo actual al mejor precio del mercado para que puedas acceder a tu próximo auto de la forma más conveniente.
            </p>
            <button className="mt-8 bg-[#25D366] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110">
                Consultar con un asesor
            </button>
        </div>
    </section>
  );
};

export default FinancingBanner;