import React from 'react';

const ServiceIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const services = [
    {
        title: 'Financiamos tu 0km al 100%',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
        title: 'Autos de calidad garantizada',
        iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01'
    },
    {
        title: 'Asesoramiento 100% personalizado',
        iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    },
    {
        title: 'Contamos con gestoría registral en todo el país',
        iconPath: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
    },
    {
        title: 'Entrega inmediata en todos nuestros 0km',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    }
];

const Services: React.FC = () => {
    return (
        <section 
            className="py-16 relative bg-cover bg-center bg-no-repeat bg-gray-700"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop')"
            }}
        >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-2xl font-bold text-center text-white mb-10">¿POR QUÉ ELEGIRNOS?</h2>
                
                {/* Layout en triángulo boca abajo */}
                <div className="flex flex-col items-center space-y-6">
                    {/* Fila superior - 3 elementos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.slice(0, 3).map((service, index) => (
                            <div key={index} className="bg-gray-dark/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/50">
                                <div className="flex justify-center mb-4">
                                    <ServiceIcon path={service.iconPath} />
                                </div>
                                <h3 className="text-sm font-bold text-white leading-tight">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                    
                    {/* Fila inferior - 2 elementos centrados */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                        {services.slice(3, 5).map((service, index) => (
                            <div key={index + 3} className="bg-gray-dark/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/50">
                                <div className="flex justify-center mb-4">
                                    <ServiceIcon path={service.iconPath} />
                                </div>
                                <h3 className="text-sm font-bold text-white leading-tight">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;