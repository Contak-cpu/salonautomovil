import { useState, useEffect } from 'react';

export const usePromoPopup = (delay: number = 40000) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró el popup en esta sesión
    const hasShownPopup = localStorage.getItem('promoPopupShown');
    if (hasShownPopup === 'true') {
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowPopup(true);
      setHasShown(true);
      // Marcar que se mostró el popup en esta sesión
      localStorage.setItem('promoPopupShown', 'true');
    }, delay);

    return () => clearTimeout(timer);
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
