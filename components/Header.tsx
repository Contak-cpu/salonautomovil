import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="text-white hover:text-accent transition-colors duration-300 font-medium tracking-wide">
        {children}
    </a>
);

interface HeaderProps {
    onShowCatalog: (type: '0km' | 'usados' | 'gestoria') => void;
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowCatalog, onGoHome }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    return (
        <header className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-xl sticky top-0 z-50 h-28 flex items-center header-glow shadow-2xl">
            <div className="container mx-auto px-6 w-full">
                {/* Desktop Navigation con Grid */}
                <div className="hidden md:grid grid-cols-5 gap-8 items-center">
                    {/* 0KM */}
                    <div className="flex justify-center">
                        <button onClick={() => handleNavClick('0km')} className="px-6 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">0KM</span>
                        </button>
                    </div>
                    
                    {/* USADOS */}
                    <div className="flex justify-center">
                        <button onClick={() => handleNavClick('usados')} className="px-6 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
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
                        <button onClick={() => handleNavClick('gestoria')} className="px-6 py-3 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider text-lg hover-lift border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                            <span className="relative z-10">GESTORÍA</span>
                        </button>
                    </div>
                    
                    {/* Financiación */}
                    <div className="flex justify-center">
                        <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}>
                            <span className="px-6 py-3 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider text-lg hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                <span className="relative z-10">Financiación</span>
                            </span>
                        </NavLink>
                    </div>
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
                            <nav className="flex flex-col items-center space-y-3 py-8">
                                <button onClick={() => handleNavClick('0km')} className="text-2xl px-10 py-5 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-80 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">0KM</span>
                                </button>
                                <button onClick={() => handleNavClick('usados')} className="text-2xl px-10 py-5 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-80 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">USADOS</span>
                                </button>
                                <button onClick={() => handleNavClick('gestoria')} className="text-2xl px-10 py-5 rounded-enhanced text-white hover:text-accent hover:bg-accent/10 transition-all duration-300 font-bold tracking-wider w-80 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                    <span className="relative z-10">GESTORÍA</span>
                                </button>
                                <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}>
                                    <span className="text-2xl px-10 py-5 rounded-enhanced hover:bg-accent/10 transition-all duration-300 inline-block font-bold tracking-wider w-80 hover:text-accent border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/20">
                                        <span className="relative z-10">Financiación</span>
                                    </span>
                                </NavLink>
                            </nav>
                        </div>
                    )}
        </header>
    );
};

export default Header;