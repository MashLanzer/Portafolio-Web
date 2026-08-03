# Portafolio — Mash

Portafolio personal de **Mash** — desarrollo web y herramientas internas para negocios pequeños en Tampa, FL.

Reescrito desde cero con tecnologías modernas, unificando el contenido real del portafolio anterior (`legacy/portafolio-mash.html`) con la estructura y animaciones de un template de desarrollador (`legacy/programmer_portfolio_static`).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- Fuentes: Bricolage Grotesque · Public Sans · JetBrains Mono

## Características

- 🌐 **Bilingüe ES / EN** con toggle (detecta idioma del navegador, guarda preferencia)
- ⚡ Pantalla de carga, hero con tarjeta de código, contadores animados
- 🗂️ 5 proyectos reales con enlaces en vivo + GitHub
- 🎨 Identidad visual editorial (navy `#131A3A` · naranja fuego `#FF5C35` · papel)
- 📨 Formulario de contacto tipo `mailto` (sin backend)
- 📱 Totalmente responsive + accesible (focus visible, reduced-motion)
- 🚀 100% estático → deploy trivial en Vercel

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

```
app/                 layout, página, estilos globales
components/          Nav, Hero, Stats, Projects, Services, Stack, Process, Contact, Footer…
lib/content.ts      contenido bilingüe (fuente de verdad única)
lib/lang.tsx        proveedor de idioma (ES/EN)
legacy/             versiones anteriores (referencia)
```

## Editar contenido

Todo el texto, proyectos, servicios y datos de contacto viven en [`lib/content.ts`](lib/content.ts).
Los datos de contacto están en la constante `CONTACT`.
