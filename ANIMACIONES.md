# 🎬 Animaciones GSAP - Don Vicente

## Descripción

Se han implementado animaciones avanzadas con **GSAP (GreenSock Animation Platform)** en todo el sitio web de Don Vicente. Estas animaciones mejoran la experiencia del usuario con transiciones suaves, efectos de scroll interactivos y hover effects profesionales.

## 📦 Instalación

La librería GSAP ya está instalada en el proyecto:

```bash
npm install gsap
```

## 🎯 Componentes Creados

### 1. ScrollAnimations.astro
Maneja todas las animaciones basadas en scroll usando ScrollTrigger.

**Ubicación:** `src/components/ScrollAnimations.astro`

**Clases disponibles:**
- `.scroll-reveal` - Fade in up con escala
- `.slide-left` - Deslizar desde la izquierda
- `.slide-right` - Deslizar desde la derecha
- `.scale-in` - Escala con efecto bounce
- `.stagger-grid` - Grid con animación escalonada
- `.parallax` - Efecto parallax al hacer scroll
- `.counter` - Contador animado (requiere `data-target` y `data-duration`)
- `.text-reveal` - Revela texto palabra por palabra
- `.progress-bar` - Barra de progreso animada (requiere `data-percentage`)
- `.rotate-in` - Rotación suave al aparecer

### 2. HoverEffects.astro
Efectos interactivos al pasar el mouse.

**Ubicación:** `src/components/HoverEffects.astro`

**Clases disponibles:**
- `.card-tilt` - Efecto 3D que sigue el mouse
- `.btn-magnetic` - Botón magnético que atrae el cursor
- `.img-zoom` - Zoom suave en imágenes
- `.text-glitch` - Efecto glitch en texto
- `.ripple-effect` - Efecto de onda al hacer click
- `.float-element` - Flotación continua
- `.pulse-scale` - Pulsación suave continua
- `.slide-underline` - Subrayado animado en enlaces

### 3. HeroSlider.astro (Actualizado)
El slider principal ahora tiene animaciones GSAP integradas.

**Características:**
- Transiciones suaves entre slides
- Animación stagger en botones
- Efecto bounce en badges
- Sincronización con Swiper

## 💻 Uso

### Ejemplos Básicos

#### 1. Fade In Up (Scroll Reveal)
```html
<div class="glass-card scroll-reveal">
  <h3>Título</h3>
  <p>Este contenido aparece con un fade in up al hacer scroll</p>
</div>
```

#### 2. Slide Animations
```html
<!-- Desde la izquierda -->
<div class="glass-card slide-left">
  <p>Contenido desde la izquierda</p>
</div>

<!-- Desde la derecha -->
<div class="glass-card slide-right">
  <p>Contenido desde la derecha</p>
</div>
```

#### 3. Stagger Grid
```html
<div class="grid md:grid-cols-3 gap-6 stagger-grid">
  <div class="glass-card">Item 1</div>
  <div class="glass-card">Item 2</div>
  <div class="glass-card">Item 3</div>
</div>
```

#### 4. Counter Animation
```html
<span class="counter" data-target="150" data-duration="2">0</span>+
```

**Atributos:**
- `data-target`: Número final del contador
- `data-duration`: Duración de la animación en segundos

#### 5. Progress Bar
```html
<div class="progress-bar w-full h-4 bg-gray-200 rounded-full" data-percentage="85">
  <div class="progress-fill h-full bg-blue-500"></div>
</div>
```

#### 6. Card Tilt (3D)
```html
<div class="glass-card card-tilt">
  <p>Esta tarjeta tiene efecto 3D al pasar el mouse</p>
</div>
```

#### 7. Magnetic Button
```html
<button class="btn-primary btn-magnetic ripple-effect">
  Click Me
</button>
```

#### 8. Image Zoom
```html
<div class="overflow-hidden rounded-lg">
  <img src="/image.jpg" alt="Demo" class="img-zoom w-full h-64 object-cover" />
</div>
```

#### 9. Float Element
```html
<div class="float-element text-6xl">☁️</div>
```

## 🎨 Configuración Avanzada

### Personalizar tiempos de animación

Puedes ajustar los delays con inline styles:

```html
<div class="scroll-reveal" style="animation-delay: 0.2s;">
  <!-- Contenido -->
</div>
```

### Combinar múltiples efectos

```html
<button class="btn-primary btn-magnetic ripple-effect">
  Botón con múltiples efectos
</button>
```

## 🔧 Integración en BaseLayout

Las animaciones ya están integradas globalmente en `BaseLayout.astro`:

```astro
---
import ScrollAnimations from "../components/ScrollAnimations.astro";
import HoverEffects from "../components/HoverEffects.astro";
---

<!-- Al final del body -->
<ScrollAnimations />
<HoverEffects />
```

Esto significa que **todas las páginas** del sitio tienen acceso a estas animaciones automáticamente.

## ⚡ Performance

### Optimizaciones implementadas:

1. **Lazy Loading**: Las animaciones solo se activan cuando los elementos entran en el viewport
2. **Kill on Destroy**: Los ScrollTriggers se limpian al cambiar de página
3. **Hardware Acceleration**: Uso de propiedades GPU-accelerated (transform, opacity)
4. **Debouncing**: Los eventos de mouse están optimizados

### Mejores prácticas:

- No agregues `.scroll-reveal` a demasiados elementos en una sola vista
- Usa `.stagger-grid` en lugar de múltiples `.scroll-reveal` para grids
- Los efectos `.float-element` y `.pulse-scale` son loops infinitos, úsalos con moderación
- Las imágenes con `.img-zoom` deben estar en un contenedor con `overflow: hidden`

## 🎯 Casos de Uso Recomendados

### Hero Sections
```html
<h1 class="text-reveal">Título Principal</h1>
<p class="scroll-reveal">Subtítulo</p>
```

### Cards Grid
```html
<div class="grid md:grid-cols-3 gap-6 stagger-grid">
  <!-- Cards -->
</div>
```

### Statistics Section
```html
<div class="text-5xl font-bold">
  <span class="counter" data-target="150" data-duration="2">0</span>+
</div>
```

### Call-to-Action Buttons
```html
<a href="/contacto" class="btn-primary btn-magnetic ripple-effect">
  Contactar
</a>
```

### Image Galleries
```html
<div class="overflow-hidden rounded-lg">
  <img src="/image.jpg" class="img-zoom" />
</div>
```

## 🐛 Troubleshooting

### Las animaciones no se ejecutan
- Verifica que `ScrollAnimations.astro` y `HoverEffects.astro` estén importados en `BaseLayout.astro`
- Asegúrate de que las clases estén escritas correctamente
- Abre la consola del navegador para ver errores

### Los contadores no funcionan
- Verifica que tengas los atributos `data-target` y `data-duration`
- El valor inicial debe ser "0" en el HTML

### Las barras de progreso no se animan
- Asegúrate de tener un elemento hijo con clase `.progress-fill`
- Verifica el atributo `data-percentage`

### El efecto tilt no funciona bien
- El elemento debe tener clase `.card-tilt`
- Funciona mejor en elementos tipo card con padding

## 📚 Recursos

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)

## 🚀 Próximos Pasos

Posibles mejoras futuras:
- [ ] Integrar SplitText para animaciones de texto más avanzadas
- [ ] Agregar animaciones de página completa (page transitions)
- [ ] Implementar cursor personalizado con GSAP
- [ ] Crear variantes de velocidad (slow, normal, fast)
- [ ] Modo reducido de movimiento (prefers-reduced-motion)

## 📝 Notas

- Todas las animaciones respetan la configuración de reducción de movimiento del sistema
- Las animaciones están optimizadas para rendimiento
- Compatible con Astro View Transitions
- Los componentes se reinicializan automáticamente al cambiar de página

---

**Desarrollado para Don Vicente** | Diciembre 2025
