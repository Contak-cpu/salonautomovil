import React, { useState, useCallback, useEffect } from 'react';

const testimonials = [
    {
        name: 'Ana Pérez',
        comment: '¡Excelente atención! Compré mi primer 0km y el proceso fue súper rápido y transparente. ¡Muy recomendables!',
        photo: 'https://picsum.photos/id/237/100/100'
    },
    {
        name: 'Carlos García',
        comment: 'La financiación que me ofrecieron fue la mejor del mercado. Entregué mi usado y salí manejando un auto increíble.',
        photo: 'https://picsum.photos/id/238/100/100'
    },
    {
        name: 'Laura Martinez',
        comment: 'Confié en ellos para la compra de un usado y no me arrepiento. El auto está impecable y la garantía me da mucha seguridad.',
        photo: 'https://picsum.photos/id/239/100/100'
    },
    {
        name: 'Juan Rodríguez',
        comment: 'El equipo de postventa es genial. Tuvieron una respuesta rápida a todas mis consultas. ¡Un servicio de primera!',
        photo: 'https://picsum.photos/id/240/100/100'
    }
];

const ChevronLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
);

const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
);

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section 
            className="py-20 relative bg-cover bg-center bg-no-repeat bg-gray-800"
        style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')"
        }}
        >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl font-bold text-white mb-12">LA OPINIÓN DE NUESTROS CLIENTES</h2>
                <div className="relative max-w-2xl mx-auto">
                    <div className="overflow-hidden rounded-lg">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-shrink-0 w-full">
                                    <div className="bg-gray-dark p-8">
                                        <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent object-cover" />
                                        <p className="text-gray-light italic">"{testimonial.comment}"</p>
                                        <h4 className="mt-4 font-bold text-white">- {testimonial.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gray-dark p-2 rounded-full hover:bg-opacity-80 text-accent transition-all">
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gray-dark p-2 rounded-full hover:bg-opacity-80 text-accent transition-all">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;