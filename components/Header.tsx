import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="text-gray-light hover:text-accent transition-colors duration-300 font-medium tracking-wide">
        {children}
    </a>
);

interface HeaderProps {
    onShowCatalog: (type: '0km' | 'usados') => void;
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowCatalog, onGoHome }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (type: '0km' | 'usados') => {
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
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    return (
        <header className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl sticky top-0 z-50 h-28 flex items-center header-glow shadow-2xl">
            <div className="container mx-auto px-8 flex items-center">
                {/* Logo a la izquierda */}
                <div className="flex-shrink-0">
                    <a href="#" onClick={handleHomeClick} className="flex items-center hover-lift group">
                        <img 
                            src="/images/logo/logo.png" 
                            alt="Salón del Automóvil" 
                            className="h-24 w-auto group-hover:scale-110 transition-all duration-500 drop-shadow-lg"
                        />
                    </a>
                </div>

                {/* Texto centrado */}
                <div className="flex-1 flex justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white tracking-wider">BIENVENIDOS AL SALÓN DEL AUTOMÓVIL</h1>
                        <p className="text-accent text-sm font-medium tracking-wide">Tu concesionaria de confianza</p>
                    </div>
                </div>

                {/* Espacio para las secciones de navegación */}
                <div className="flex-shrink-0 w-0 md:w-auto">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-2">
                    <button onClick={() => handleNavClick('0km')} className="px-6 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                        <span className="relative z-10">0KM</span>
                    </button>
                    <button onClick={() => handleNavClick('usados')} className="px-6 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                        <span className="relative z-10">USADOS</span>
                    </button>
                    <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}>
                        <span className="px-6 py-3 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider text-lg hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">Financiación</span>
                        </span>
                    </NavLink>
                    <NavLink href="#footer" onClick={(e) => handleScrollLink(e, 'footer')}>
                        <span className="px-6 py-3 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider text-lg hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">Contacto</span>
                        </span>
                    </NavLink>
                    </nav>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none p-2 rounded-lg hover:bg-accent/20 transition-all duration-300">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                <div className="md:hidden absolute top-28 left-0 w-full bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl shadow-2xl border-t-2 border-accent/30">
                    <nav className="flex flex-col items-center space-y-2 py-8">
                        <button onClick={() => handleNavClick('0km')} className="text-xl px-8 py-4 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-64 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">0KM</span>
                        </button>
                        <button onClick={() => handleNavClick('usados')} className="text-xl px-8 py-4 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-64 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">USADOS</span>
                        </button>
                        <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}>
                            <span className="text-xl px-8 py-4 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider w-64 hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                <span className="relative z-10">Financiación</span>
                            </span>
                        </NavLink>
                        <NavLink href="#footer" onClick={(e) => handleScrollLink(e, 'footer')}>
                            <span className="text-xl px-8 py-4 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider w-64 hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                <span className="relative z-10">Contacto</span>
                            </span>
                        </NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;