// ---------------------------------------------------------------------------
// Contenido del portafolio — bilingüe (ES / EN)
// Fuente de verdad única: proyectos, oferta, proceso, stack, contacto.
// ---------------------------------------------------------------------------

export type Lang = "es" | "en";

export type Bi = Record<Lang, string>;

export const CONTACT = {
  phone: "813 373 9797",
  phoneHref: "tel:+18133739797",
  email: "brayanibarra0105@gmail.com",
  whatsapp: "https://wa.me/18133739797",
  github: "https://github.com/MashLanzer",
  location: { es: "Tampa, FL", en: "Tampa, FL" } as Bi,
};

// ---------------------------------------------------------------------------
// UI strings
// ---------------------------------------------------------------------------
export const T = {
  nav: {
    projects: { es: "Proyectos", en: "Projects" },
    services: { es: "Qué hago", en: "What I do" },
    stack: { es: "Stack", en: "Stack" },
    process: { es: "Proceso", en: "Process" },
    contact: { es: "Contacto", en: "Contact" },
    cta: { es: "Hablemos", en: "Let's talk" },
    tagline: { es: "DESARROLLO WEB · TAMPA, FL", en: "WEB DEVELOPMENT · TAMPA, FL" },
  },
  hero: {
    eyebrow: {
      es: "Sitios web · Herramientas internas · Apps Android",
      en: "Websites · Internal tools · Android apps",
    },
    titleA: { es: "El papeleo de tu negocio,", en: "Your business paperwork," },
    titleB: { es: "hecho software.", en: "turned into software." },
    lede: {
      es: "Construyo sitios web y herramientas a medida para negocios pequeños: órdenes de servicio, control de gastos, registros de trabajo. Lo que hoy llevas en una libreta o en un Excel que solo tú entiendes.",
      en: "I build websites and custom tools for small businesses: service orders, expense tracking, work records. The things you keep today in a notebook or a spreadsheet only you understand.",
    },
    ctaPrimary: { es: "Pedir una cotización", en: "Request a quote" },
    ctaSecondary: { es: "Ver proyectos", en: "See projects" },
    available: { es: "Disponible para proyectos", en: "Available for projects" },
  },
  stats: {
    title: { es: "En números", en: "By the numbers" },
    items: [
      { value: 5, suffix: "", label: { es: "Proyectos construidos", en: "Projects built" } },
      { value: 4, suffix: "", label: { es: "Aplicaciones en vivo", en: "Live applications" } },
      { value: 2, suffix: "", label: { es: "Plataformas: web + Android", en: "Platforms: web + Android" } },
      { value: 24, suffix: "h", label: { es: "Respuesta el mismo día", en: "Same-day response" } },
    ],
  },
  projects: {
    eyebrow: { es: "Registro de proyectos", en: "Project register" },
    title: { es: "Cosas que ya están construidas.", en: "Things already built." },
    subtitle: {
      es: "Cada fila resuelve un problema real de un negocio pequeño. Ábrelas en vivo.",
      en: "Each one solves a real small-business problem. Open them live.",
    },
    live: { es: "EN VIVO", en: "LIVE" },
    wip: { es: "SIN PUBLICAR", en: "NOT DEPLOYED" },
    openLive: { es: "Abrir en vivo", en: "Open live" },
    code: { es: "Código", en: "Code" },
  },
  services: {
    eyebrow: { es: "Qué hago", en: "What I do" },
    title: { es: "Tres tipos de trabajo.", en: "Three kinds of work." },
    subtitle: {
      es: "Soluciones a la medida de cómo trabajas hoy, no de un software genérico.",
      en: "Solutions tailored to how you work today, not to some generic software.",
    },
  },
  stack: {
    eyebrow: { es: "Herramientas", en: "Tooling" },
    title: { es: "El stack con el que construyo.", en: "The stack I build with." },
    subtitle: {
      es: "Tecnología moderna y probada. La misma base corre en la web y en el teléfono.",
      en: "Modern, proven technology. The same codebase runs on the web and on the phone.",
    },
  },
  process: {
    eyebrow: { es: "Cómo trabajo", en: "How I work" },
    title: { es: "Sin sorpresas en el precio.", en: "No surprises on price." },
    subtitle: {
      es: "Un proceso claro de principio a fin, con precio fijo por escrito.",
      en: "A clear process from start to finish, with a fixed written price.",
    },
  },
  contact: {
    eyebrow: { es: "Contacto", en: "Contact" },
    title: { es: "Cuéntame qué necesitas.", en: "Tell me what you need." },
    subtitle: {
      es: "Respondo el mismo día. Si prefieres, llámame directo y lo hablamos en cinco minutos.",
      en: "I answer the same day. If you'd rather, call me and we'll sort it out in five minutes.",
    },
    formName: { es: "Tu nombre", en: "Your name" },
    formSubject: { es: "Asunto", en: "Subject" },
    formMessage: { es: "Cuéntame sobre tu negocio y qué te está costando tiempo…", en: "Tell me about your business and what's eating your time…" },
    formSend: { es: "Enviar mensaje", en: "Send message" },
    orCall: { es: "o llámame", en: "or call me" },
    writeNow: { es: "Escribir ahora", en: "Write now" },
  },
  footer: {
    rights: { es: "TODOS LOS DERECHOS RESERVADOS", en: "ALL RIGHTS RESERVED" },
    built: { es: "Construido con Next.js + Tailwind", en: "Built with Next.js + Tailwind" },
  },
} as const;

// ---------------------------------------------------------------------------
// Proyectos
// ---------------------------------------------------------------------------
export type Project = {
  id: string;
  index: string;
  emoji: string;
  name: string;
  tagline: Bi;
  description: Bi;
  tags: string[];
  status: "live" | "wip";
  live?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "recibotrack",
    index: "01",
    emoji: "🧾",
    name: "ReciboTrack",
    tagline: {
      es: "Control de gastos con lectura automática de recibos",
      en: "Expense tracking with automatic receipt reading",
    },
    description: {
      es: "Le tomas una foto al recibo y la aplicación extrae sola el comercio, la fecha, el total y los impuestos. Todo queda ordenado por categoría, con la imagen guardada por si Hacienda la pide. Pensado para quien acumula recibos en la guantera y en abril no sabe cuánto gastó.",
      en: "Take a photo of the receipt and the app pulls out the merchant, date, total and tax on its own. Everything gets filed by category, with the image stored in case the IRS asks. Built for anyone who piles receipts in the glovebox and has no idea what they spent come April.",
    },
    tags: ["Next.js 16", "TypeScript", "Firebase", "OCR / Vision", "Tailwind v4"],
    status: "live",
    live: "https://recibotrack.vercel.app",
    github: "https://github.com/MashLanzer/ReciboTrack",
  },
  {
    id: "eiv",
    index: "02",
    emoji: "❄️",
    name: "EIV Solution Air",
    tagline: {
      es: "Órdenes de servicio digitales para una empresa de aire acondicionado",
      en: "Digital service orders for an HVAC company",
    },
    description: {
      es: "El técnico llena la orden desde el teléfono en casa del cliente: equipo, lecturas, trabajo realizado, firma. Se acabó la hoja de papel que se moja en la camioneta y aparece dos semanas después. La oficina ve el registro en el momento en que se cierra el trabajo.",
      en: "The tech fills out the order from his phone at the customer's house: equipment, readings, work performed, signature. No more paper sheet that gets soaked in the truck and turns up two weeks later. The office sees the record the moment the job closes.",
    },
    tags: ["Next.js", "TypeScript", "Vercel", "Mobile first"],
    status: "live",
    live: "https://eiv-solution-air-service-work-recor.vercel.app",
    github: "https://github.com/MashLanzer/EIV-SOLUTION-AIR-SERVICE-WORK-RECORD",
  },
  {
    id: "remesas",
    index: "03",
    emoji: "💸",
    name: "Remesas",
    tagline: {
      es: "Gestión de envíos, comisiones y saldo entre socios · web + APK Android",
      en: "Transfer, commission and partner-balance management · web + Android APK",
    },
    description: {
      es: "Registra cada envío, calcula la comisión y la ganancia según reglas configurables, la reparte entre socios y lleva el saldo de capital adelantado. La misma base corre como sitio web y como aplicación instalable de Android.",
      en: "Logs every transfer, calculates commission and profit from configurable rules, splits it between partners and tracks advanced capital. The same codebase runs as a website and as an installable Android app.",
    },
    tags: ["Next.js 14", "Supabase", "Postgres", "Capacitor", "APK Android"],
    status: "live",
    live: "https://remesas-nu.vercel.app",
    github: "https://github.com/MashLanzer/Remesas",
  },
  {
    id: "jobkeeper",
    index: "04",
    emoji: "🗂️",
    name: "JobKeeper",
    tagline: {
      es: "Registro de trabajos y horas para equipos de campo",
      en: "Job and hours tracking for field teams",
    },
    description: {
      es: "Lleva el registro de los trabajos y las horas del equipo en un solo lugar, accesible desde el teléfono. Reemplaza las notas sueltas y los mensajes por un historial ordenado que la oficina puede consultar cuando lo necesite.",
      en: "Keeps track of the team's jobs and hours in one place, accessible from the phone. Replaces loose notes and scattered messages with an ordered history the office can check whenever it needs to.",
    },
    tags: ["Next.js", "TypeScript", "Vercel"],
    status: "live",
    live: "https://workledger-indol.vercel.app",
    github: "https://github.com/MashLanzer/JobKeeper",
  },
  {
    id: "ensuenos",
    index: "05",
    emoji: "📷",
    name: "Fotografías de Ensueños",
    tagline: {
      es: "Sitio para estudio fotográfico",
      en: "Photography studio site",
    },
    description: {
      es: "Sitio de presentación para un estudio fotográfico: galería, servicios y contacto. Construido con web estándar y pensado para cargar rápido en el móvil.",
      en: "Showcase site for a photography studio: gallery, services and contact. Built with standard web and designed to load fast on mobile.",
    },
    tags: ["HTML", "CSS"],
    status: "wip",
    github: "https://github.com/MashLanzer/fotografias-de-ensuenos",
  },
];

// ---------------------------------------------------------------------------
// Servicios / oferta
// ---------------------------------------------------------------------------
export type Service = {
  key: Bi;
  title: Bi;
  description: Bi;
  bullets: Bi[];
};

export const SERVICES: Service[] = [
  {
    key: { es: "SITIOS WEB", en: "WEBSITES" },
    title: { es: "Que traigan llamadas", en: "That bring in calls" },
    description: {
      es: "Sitio rápido, en móvil primero, con botón de llamar y formulario de cotización que llega a donde tú quieras. No un folleto bonito que nadie ve.",
      en: "Fast, mobile-first, with a call button and a quote form that lands wherever you want it. Not a pretty brochure nobody sees.",
    },
    bullets: [
      { es: "Móvil primero", en: "Mobile first" },
      { es: "Botón de llamar", en: "Call button" },
      { es: "Formulario de cotización", en: "Quote form" },
    ],
  },
  {
    key: { es: "HERRAMIENTAS INTERNAS", en: "INTERNAL TOOLS" },
    title: { es: "Que reemplacen el papel", en: "That replace the paper" },
    description: {
      es: "Órdenes de servicio, control de gastos, registros de trabajo, inventario. Hechas para tu forma de trabajar, no para la de un software genérico.",
      en: "Service orders, expense tracking, work records, inventory. Built around how you actually work, not around some generic software.",
    },
    bullets: [
      { es: "Órdenes de servicio", en: "Service orders" },
      { es: "Control de gastos", en: "Expense tracking" },
      { es: "A tu medida", en: "Tailored to you" },
    ],
  },
  {
    key: { es: "APPS ANDROID", en: "ANDROID APPS" },
    title: { es: "Que vivan en el teléfono", en: "That live on the phone" },
    description: {
      es: "La misma herramienta, instalable en el teléfono del equipo. Sin tiendas de aplicaciones ni licencias mensuales por usuario.",
      en: "The same tool, installable on your team's phones. No app stores, no monthly per-seat licenses.",
    },
    bullets: [
      { es: "Instalable (APK)", en: "Installable (APK)" },
      { es: "Sin tiendas", en: "No app stores" },
      { es: "Sin licencias mensuales", en: "No monthly licenses" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Proceso
// ---------------------------------------------------------------------------
export type Step = { n: string; title: Bi; description: Bi };

export const STEPS: Step[] = [
  {
    n: "01",
    title: { es: "Llamada", en: "Call" },
    description: {
      es: "20 minutos. Me cuentas el negocio y qué te está costando tiempo hoy.",
      en: "20 minutes. You tell me about the business and what's eating your time today.",
    },
  },
  {
    n: "02",
    title: { es: "Propuesta cerrada", en: "Fixed proposal" },
    description: {
      es: "Precio fijo por escrito, con el alcance detallado y la fecha de entrega.",
      en: "Fixed written price, with detailed scope and a delivery date.",
    },
  },
  {
    n: "03",
    title: { es: "Construcción", en: "Build" },
    description: {
      es: "Ves avances reales, no reportes. Dos rondas de cambios incluidas.",
      en: "You see real progress, not status reports. Two rounds of changes included.",
    },
  },
  {
    n: "04",
    title: { es: "Entrega", en: "Handover" },
    description: {
      es: "Publicado, con accesos a tu nombre y 30 días de garantía.",
      en: "Published, with accounts in your name and 30 days of warranty.",
    },
  },
];

// ---------------------------------------------------------------------------
// Stack / tecnologías
// ---------------------------------------------------------------------------
export type TechGroup = { label: Bi; items: string[] };

export const STACK: TechGroup[] = [
  {
    label: { es: "Frontend", en: "Frontend" },
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: { es: "Backend & datos", en: "Backend & data" },
    items: ["Supabase", "Firebase", "PostgreSQL", "OCR / Vision"],
  },
  {
    label: { es: "Móvil", en: "Mobile" },
    items: ["Capacitor", "Android APK", "Mobile first", "PWA"],
  },
  {
    label: { es: "Infraestructura", en: "Infrastructure" },
    items: ["Vercel", "Git / GitHub", "CI/CD", "OTA updates"],
  },
];
