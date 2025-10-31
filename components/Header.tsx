import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="text-white hover:text-accent transition-colors duration-300 font-medium tracking-wide">
        {children}
    </a>
);

interface HeaderProps {
    onShowCatalog: (type: '0km' | 'usados' | 'gestoria') => void;
    onGoHome: () => void;
    currentView?: 'home' | '0km' | 'usados' | 'gestoria';
}

const Header: React.FC<HeaderProps> = ({ onShowCatalog, onGoHome, currentView = 'home' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        // En secciones secundarias, siempre mostrar el logo y estar fixed
        if (currentView !== 'home') {
            setShowLogo(true);
            setIsFixed(true);
            return;
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const welcomeHeroHeight = window.innerHeight; // 100vh
            
            // Buscar la sección Hero (segunda sección - banner de 0km y usados)
            const heroSection = document.getElementById('hero-section');
            
            if (heroSection) {
                const heroSectionTop = heroSection.getBoundingClientRect().top + scrollY;
                const heroSectionVisible = heroSection.getBoundingClientRect().top < window.innerHeight;
                
                // Cuando se visualiza la sección Hero, fijar el header y mostrar logo
                if (heroSectionVisible || scrollY >= heroSectionTop - window.innerHeight) {
                    setIsFixed(true);
                    setShowLogo(true);
                } else {
                    // Antes de la sección Hero, header sticky y sin logo
                    setIsFixed(false);
                    setShowLogo(false);
                }
            } else {
                // Fallback: si no encuentra la sección, usar lógica anterior
                const shouldShowLogo = scrollY > welcomeHeroHeight * 0.3;
                setShowLogo(shouldShowLogo);
                setIsFixed(shouldShowLogo);
            }
        };

        // Verificar estado inicial
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentView]);

    const handleNavClick = (type: '0km' | 'usados' | 'gestoria') => {
        setIsMenuOpen(false);
        onShowCatalog(type);
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsMenuOpen(false);
        onGoHome();
    }
    
    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        // Always go home first to ensure the target element is on the page
        onGoHome();
        // Use timeout to allow React to re-render the home page components
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                const headerHeight = 80; // Altura aproximada del header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 150);
    }

    // Determinar la posición del header
    // En home: fixed solo cuando se visualiza la sección Hero, sticky antes
    // En otras secciones: siempre fixed
    const positionClass = (currentView === 'home' && !isFixed) ? 'sticky' : 'fixed';
    
    return (
        <header className={`bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl ${positionClass} top-0 z-50 flex items-center header-glow shadow-2xl transition-all duration-500 ${showLogo ? 'h-44 md:h-32' : 'h-24 md:h-20'} w-full`}>
            <div className="container mx-auto px-6 w-full">
                {showLogo ? (
                    /* Desktop Navigation con Grid - With Logo */
                    <div className="hidden md:grid grid-cols-5 gap-8 items-center">
                        {/* 0KM */}
                        <div className="flex justify-center">
                            <button onClick={() => handleNavClick('0km')} className="px-8 py-4 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-xl hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                <span className="relative z-10">0KM</span>
                            </button>
                        </div>
                        
                        {/* USADOS */}
                        <div className="flex justify-center">
                            <button onClick={() => handleNavClick('usados')} className="px-8 py-4 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-xl hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                <span className="relative z-10">USADOS</span>
                            </button>
                        </div>
                        
                        {/* Logo centrado */}
                        <div className="flex justify-center">
                            <a href="#" onClick={handleHomeClick} className="flex items-center hover-lift group">
                                <img 
                                    src="/images/logo/logo.png" 
                                    alt="Salón del Automóvil" 
                                    className="h-36 w-auto group-hover:scale-110 transition-all duration-500 drop-shadow-lg"
                                />
                            </a>
                        </div>
                        
                        {/* GESTORÍA */}
                        <div className="flex justify-center">
                            <button onClick={() => handleNavClick('gestoria')} className="px-8 py-4 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-xl hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                <span className="relative z-10">GESTORÍA</span>
                            </button>
                        </div>
                        
                        {/* Financiación */}
                        <div className="flex justify-center">
                            <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}>
                                <span className="px-8 py-4 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider text-xl hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">FINANCIACIÓN</span>
                                </span>
                            </NavLink>
                        </div>
                    </div>
                ) : (
                    /* Desktop Navigation - Simplified without Logo */
                    <div className="hidden md:flex justify-center items-center space-x-12">
                        <button onClick={() => handleNavClick('0km')} className="px-8 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">0KM</span>
                        </button>
                        
                        <button onClick={() => handleNavClick('usados')} className="px-8 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">USADOS</span>
                        </button>
                        
                        <button onClick={() => handleNavClick('gestoria')} className="px-8 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">GESTORÍA</span>
                        </button>
                        
                        <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}>
                            <span className="px-8 py-3 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider text-lg hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                <span className="relative z-10">FINANCIACIÓN</span>
                            </span>
                        </NavLink>
                    </div>
                )}

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center justify-between w-full">
                    <div className="flex-1"></div>
                    {showLogo && (
                        <a href="#" onClick={handleHomeClick} className="flex items-center hover-lift group">
                            <img 
                                src="/images/logo/logo.png" 
                                alt="Salón del Automóvil" 
                                className="h-16 w-auto group-hover:scale-110 transition-all duration-500 drop-shadow-2xl"
                            />
                        </a>
                    )}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex-1 flex justify-end text-white focus:outline-none p-2 rounded-lg hover:bg-accent/20 transition-all duration-300">
                        <svg className={`${showLogo ? 'h-10 w-10' : 'h-8 w-8'} transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className={`md:hidden absolute left-0 w-full bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl shadow-2xl border-t-2 border-accent/30 transition-all duration-300 ${showLogo ? 'top-44' : 'top-24'}`}>
                            <nav className="flex flex-col items-center space-y-3 py-8">
                                <button onClick={() => handleNavClick('0km')} className="text-3xl px-12 py-6 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-80 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">0KM</span>
                                </button>
                                <button onClick={() => handleNavClick('usados')} className="text-3xl px-12 py-6 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-80 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">USADOS</span>
                                </button>
                                <button onClick={() => handleNavClick('gestoria')} className="text-3xl px-12 py-6 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-80 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">GESTORÍA</span>
                                </button>
                                <button onClick={(e) => handleScrollLink(e, 'financing')} className="text-3xl px-12 py-6 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-80 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">FINANCIACIÓN</span>
                                </button>
                            </nav>
                        </div>
                    )}
        </header>
    );
};

export default Header;