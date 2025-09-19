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
        <header className="bg-black/90 backdrop-blur-lg sticky top-0 z-50 h-20 flex items-center header-glow border-b border-white/10">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" onClick={handleHomeClick} className="flex items-center hover-lift group">
                        <img 
                            src="/images/logo/logo.png" 
                            alt="Salón del Automóvil" 
                            className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <button onClick={() => handleNavClick('0km')} className="px-4 py-2 rounded-enhanced text-gray-light hover:text-white hover:bg-white/10 transition-all duration-300 font-medium tracking-wide hover-lift">0KM</button>
                    <button onClick={() => handleNavClick('usados')} className="px-4 py-2 rounded-enhanced text-gray-light hover:text-white hover:bg-white/10 transition-all duration-300 font-medium tracking-wide hover-lift">USADOS</button>
                    <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}><span className="px-4 py-2 rounded-enhanced hover:bg-white/10 transition-all duration-300 inline-block">Financiación</span></NavLink>
                    <NavLink href="#footer" onClick={(e) => handleScrollLink(e, 'footer')}><span className="px-4 py-2 rounded-enhanced hover:bg-white/10 transition-all duration-300 inline-block">Contacto</span></NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-lg shadow-xl border-t border-white/10">
                    <nav className="flex flex-col items-center space-y-4 py-8">
                        <button onClick={() => handleNavClick('0km')} className="text-lg px-6 py-3 rounded-enhanced text-gray-light hover:text-white hover:bg-white/10 transition-all duration-300 font-medium tracking-wide w-48">0KM</button>
                        <button onClick={() => handleNavClick('usados')} className="text-lg px-6 py-3 rounded-enhanced text-gray-light hover:text-white hover:bg-white/10 transition-all duration-300 font-medium tracking-wide w-48">USADOS</button>
                        <NavLink href="#financing" onClick={(e) => handleScrollLink(e, 'financing')}><span className="text-lg px-6 py-3 rounded-enhanced hover:bg-white/10 transition-all duration-300 inline-block w-48">Financiación</span></NavLink>
                        <NavLink href="#footer" onClick={(e) => handleScrollLink(e, 'footer')}><span className="text-lg px-6 py-3 rounded-enhanced hover:bg-white/10 transition-all duration-300 inline-block w-48">Contacto</span></NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;