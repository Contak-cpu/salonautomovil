// Utilidad para conversión de monedas
export const USD_TO_ARS_RATE = 1450; // 1 USD = 1450 ARS

/**
 * Convierte un precio a ARS para comparación
 */
export const convertToARS = (price: number, currency: 'ARS' | 'USD'): number => {
  if (currency === 'USD') {
    return price * USD_TO_ARS_RATE;
  }
  return price;
};

/**
 * Formatea un precio según su moneda
 */
export const formatPrice = (price: number, currency: 'ARS' | 'USD'): string => {
  if (price === 0) {
    return 'Consultar';
  }
  if (currency === 'USD') {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  }
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

