# Don Vicente - Sitio Web Corporativo

Sitio web institucional para **Don Vicente**, empresa de servicios integrales en Melinka, Región de Aysén, Chile.

## 🚀 Stack Tecnológico

- **Astro 5.11.0** - Framework estático moderno
- **Tailwind CSS 3.3.5** - Utilidades CSS
- **TypeScript** - Tipado estricto
- **PostCSS** - Procesamiento CSS

## 📁 Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos
│   ├── icons/          # Iconos de servicios
│   └── clientes/       # Logos de clientes
├── src/
│   ├── components/     # Componentes Astro reutilizables
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouts base
│   │   └── BaseLayout.astro
│   ├── pages/          # Páginas del sitio (routing automático)
│   │   ├── index.astro      # Inicio
│   │   ├── servicios.astro  # Servicios
│   │   ├── nosotros.astro   # Sobre nosotros
│   │   ├── clientes.astro   # Clientes
│   │   ├── contacto.astro   # Contacto
│   │   └── faq.astro        # Preguntas frecuentes
│   └── styles/         # Estilos globales
│       └── global.css
└── package.json
```

## 🎨 Paleta de Colores

- **Primary**: `#002a5c` (Azul institucional)
- **Secondary**: `#d71920` (Rojo acento)
- **Light**: `#f5f5f5` (Gris claro)
- **Dark**: `#1f1f1f` (Negro texto)
- **Base**: `#ffffff` (Blanco)

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                            |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`      |
| `npm run build`           | Construye el sitio para producción en `./dist/`          |
| `npm run preview`         | Vista previa del build localmente     |

## ✅ Correcciones Aplicadas

### Configuración
- ✅ Eliminados archivos duplicados (`.cjs`)
- ✅ Unificada configuración de Tailwind y PostCSS
- ✅ Agregado color `dv-base` a la paleta

### SEO y Accesibilidad
- ✅ Títulos dinámicos por página
- ✅ Meta descripciones únicas
- ✅ Atributos ARIA en navegación
- ✅ `aria-label` y `aria-expanded` en menú móvil

### Código
- ✅ Imports consistentes de `BaseLayout`
- ✅ Eliminado padding redundante (`pt-40`)
- ✅ Consolidadas animaciones CSS duplicadas
- ✅ Agregada clase `.section-title` faltante
- ✅ Reemplazadas imágenes SVG con emojis placeholder

## 📝 Pendiente (Antes de Producción)

- [ ] Reemplazar información de contacto con datos reales
- [ ] Agregar logos reales de clientes
- [ ] Crear/agregar iconos SVG personalizados
- [ ] Actualizar coordenadas del mapa de Google Maps
- [ ] Completar contenido de página "Nosotros"
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar Google Analytics (opcional)
- [ ] Configurar dominio y hosting

## 🌐 Páginas

1. **Inicio** (`/`) - Hero, servicios destacados, beneficios
2. **Servicios** (`/servicios`) - Detalle completo de servicios
3. **Nosotros** (`/nosotros`) - Historia y valores de la empresa
4. **Clientes** (`/clientes`) - Portfolio de clientes
5. **Contacto** (`/contacto`) - Información de contacto + mapa
6. **FAQ** (`/faq`) - Preguntas frecuentes

---
