import { useState, useEffect } from 'react';

export const usePromoPopup = (delay: number = 5000) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    console.log('usePromoPopup: Iniciando timer con delay:', delay);
    
    // Para testing, comentamos temporalmente el localStorage
    // const hasShownPopup = localStorage.getItem('promoPopupShown');
    // if (hasShownPopup === 'true') {
    //   setHasShown(true);
    //   return;
    // }

    const timer = setTimeout(() => {
      console.log('usePromoPopup: Timer completado, mostrando popup');
      setShowPopup(true);
      setHasShown(true);
      // Marcar que se mostró el popup en esta sesión
      localStorage.setItem('promoPopupShown', 'true');
    }, delay);

    return () => {
      console.log('usePromoPopup: Limpiando timer');
      clearTimeout(timer);
    };
  }, [delay]);

  const closePopup = () => {
    setShowPopup(false);
  };

  const resetPopup = () => {
    setShowPopup(false);
    setHasShown(false);
    localStorage.removeItem('promoPopupShown');
  };

  return {
    showPopup,
    hasShown,
    closePopup,
    resetPopup
  };
};
