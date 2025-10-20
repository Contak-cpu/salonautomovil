// Sistema centralizado de tipografía
export const Typography = {
  // Títulos principales
  heading1: {
    className: 'text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg',
    description: 'Título principal de sección (Hero)'
  },
  
  heading2: {
    className: 'text-3xl md:text-4xl font-bold text-white mb-4',
    description: 'Título secundario de sección'
  },
  
  heading3: {
    className: 'text-2xl font-bold text-center text-white mb-10',
    description: 'Título terciario de sección'
  },
  
  heading4: {
    className: 'text-xl font-bold text-white',
    description: 'Título de tarjeta o elemento'
  },
  
  // Textos descriptivos
  bodyLarge: {
    className: 'text-xl text-white max-w-3xl mx-auto',
    description: 'Texto descriptivo grande (banners)'
  },
  
  bodyMedium: {
    className: 'text-lg text-white max-w-md drop-shadow-md',
    description: 'Texto descriptivo medio (Hero)'
  },
  
  bodySmall: {
    className: 'text-white mt-1',
    description: 'Texto descriptivo pequeño (WhyChooseUs)'
  },
  
  // Textos de información
  infoLabel: {
    className: 'text-white text-sm',
    description: 'Etiqueta de información (Año, Combustible, etc.)'
  },
  
  infoValue: {
    className: 'text-white font-semibold',
    description: 'Valor de información'
  },
  
  // Textos de precio
  priceLabel: {
    className: 'text-white text-xs mb-1',
    description: 'Etiqueta de precio'
  },
  
  priceValue: {
    className: 'text-xl font-bold text-accent',
    description: 'Valor de precio'
  },
  
  // Textos de tarjetas
  cardTitle: {
    className: 'text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors',
    description: 'Título de tarjeta de vehículo'
  },
  
  cardDescription: {
    className: 'text-sm font-bold text-white leading-tight',
    description: 'Descripción de tarjeta de servicio'
  },
  
  // Textos de botones
  buttonText: {
    className: 'font-bold',
    description: 'Texto de botón'
  }
} as const;

// Tipos para TypeScript
export type TypographyKey = keyof typeof Typography;

// Función helper para obtener clases de tipografía
export const getTypographyClass = (key: TypographyKey): string => {
  return Typography[key].className;
};

// Función helper para obtener descripción de tipografía
export const getTypographyDescription = (key: TypographyKey): string => {
  return Typography[key].description;
};
