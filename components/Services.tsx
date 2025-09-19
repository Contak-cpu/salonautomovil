import React from 'react';

const ServiceIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const services = [
    {
        title: 'Venta de 0km',
        description: 'Modelos nuevos con la última tecnología y garantía oficial de fábrica.',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
        title: 'Venta de Usados',
        description: 'Vehículos seleccionados y peritados para asegurar la máxima calidad y confianza.',
        iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01'
    },
    {
        title: 'Financiación a Medida',
        description: 'Planes de financiación flexibles, adaptados a tus posibilidades y necesidades.',
        iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
        title: 'Garantía Extendida',
        description: 'Protección adicional para tu vehículo, cubriendo reparaciones inesperadas.',
        iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
    }
];

const Services: React.FC = () => {
    return (
        <section 
            className="py-20 relative bg-cover bg-center bg-no-repeat bg-gray-700"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop')"
            }}
        >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl font-bold text-center text-white mb-12">NUESTROS SERVICIOS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-dark/80 backdrop-blur-sm p-8 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/50">
                            <div className="flex justify-center mb-4">
                                <ServiceIcon path={service.iconPath} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-light">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;