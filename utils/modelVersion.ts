/**
 * Separa el modelo base de la versión para vehículos 0km
 * Ejemplo: "208 ALLURE PACK 1.0L AT MY26" -> modelo: "208", versión: "ALLURE PACK 1.0L AT MY26"
 */
export const separateModelAndVersion = (fullModel: string): { model: string; version: string } => {
  // Buscar el primer espacio o número seguido de letras
  // Generalmente el modelo base es un número o nombre corto (208, CRONOS, etc.)
  const parts = fullModel.trim().split(/\s+/);
  
  if (parts.length === 0) {
    return { model: fullModel, version: '' };
  }
  
  // Si el primer elemento es un número (como "208"), ese es el modelo
  if (/^\d+/.test(parts[0])) {
    return {
      model: parts[0],
      version: parts.slice(1).join(' ') || parts[0]
    };
  }
  
  // Si el primer elemento es un nombre conocido corto (como "CRONOS", "TIGGO")
  // y tiene más de 10 caracteres en el total, separar
  if (parts[0].length <= 10 && parts.length > 1) {
    return {
      model: parts[0],
      version: parts.slice(1).join(' ')
    };
  }
  
  // Si no se puede separar claramente, usar todo como modelo
  return {
    model: fullModel,
    version: ''
  };
};

