import React from 'react';
import Button from './ui/Button';
import Text from './ui/Text';

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
            <Text variant="heading1" as="h2">
                ENTREGA TU USADO Y FINANCIA EL RESTO
            </Text>
            <Text variant="bodyLarge" className="mt-4 text-white">
                Con nuestro programa de canje, valoramos tu vehículo actual al mejor precio del mercado para que puedas acceder a tu próximo auto de la forma más conveniente.
            </Text>
            <Button variant="whatsapp" className="mt-8">
                Consultar con un asesor
            </Button>
        </div>
    </section>
  );
};

export default FinancingBanner;