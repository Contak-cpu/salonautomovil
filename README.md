<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Salón del Automóvil - Concesionaria Multimarcas

Aplicación web moderna para concesionaria multimarcas desarrollada con React, TypeScript y Vite.

## 🚀 Características

- **Diseño moderno y responsive** con Tailwind CSS
- **Optimizado para SEO** con metadatos dinámicos
- **Configurado para Vercel** con despliegue automático
- **Interfaz intuitiva** para mostrar vehículos y servicios
- **Integración con WhatsApp** para contacto directo

## 🛠️ Tecnologías

- React 19.1.1
- TypeScript
- Vite 6.2.0
- Tailwind CSS
- Vercel (despliegue)

## 📦 Instalación y Ejecución Local

**Prerrequisitos:** Node.js 18+

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno (opcional):**
   ```bash
   # Copia el archivo de ejemplo (no se requieren variables de entorno)
   cp env.example .env.local
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:5173
   ```

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. **Conecta tu repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración de Vite

2. **Configura variables de entorno (no es necesario):**
   - No se requieren variables de entorno para esta aplicación

3. **¡Listo!** Tu aplicación se desplegará automáticamente

### Opción 2: Despliegue Manual

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Hacer build de producción:**
   ```bash
   npm run build
   ```

3. **Desplegar:**
   ```bash
   vercel --prod
   ```

## 📁 Estructura del Proyecto

```
salón-del-automóvil/
├── components/          # Componentes React
│   ├── Catalog.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── ...
├── constants.ts         # Constantes de la aplicación
├── types.ts            # Definiciones de tipos TypeScript
├── metadata.json       # Metadatos para SEO
├── vite.config.ts      # Configuración de Vite
├── vercel.json         # Configuración de Vercel
└── package.json        # Dependencias y scripts
```

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa del build de producción
- `npm run vercel-build` - Build específico para Vercel

## 📝 Notas de Despliegue

- La aplicación está optimizada para Vercel con configuración automática
- Se incluye configuración de chunks para mejor rendimiento
- El archivo `vercel.json` maneja el routing para SPA
- No se requieren variables de entorno para el funcionamiento de la aplicación

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está bajo licencia propietaria.
