import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const points = [
    {
        title: 'Experiencia en el Mercado',
        description: 'Más de 20 años de trayectoria nos avalan, brindando confianza y el mejor asesoramiento a nuestros clientes.'
    },
    {
        title: 'Garantía en Todos los Vehículos',
        description: 'Tanto 0km como usados, todos nuestros autos cuentan con una garantía para tu total tranquilidad.'
    },
    {
        title: 'Financiación Personalizada',
        description: 'Trabajamos con las principales entidades financieras para ofrecerte el plan que mejor se adapte a vos.'
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-us" className="py-20 bg-gray-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-12">¿POR QUÉ ELEGIRNOS?</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start space-x-6">
                            <CheckIcon className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-white">{point.title}</h3>
                                <p className="text-gray-light mt-1">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;