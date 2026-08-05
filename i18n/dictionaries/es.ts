import type { Dictionary } from "./en";

const es: Dictionary = {
  meta: {
    title: "Mike Balderas — Estudiante de Ingeniería de Software",
    description:
      "Portafolio de Miguel Angel Balderas — estudiante de Ingeniería de Software con experiencia full-stack en desarrollo web y mantenimiento de sistemas en producción.",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    label: "Estudiante de Ingeniería de Software",
    available: "Disponible para trabajar",
    eyebrow: "Full Stack · Web · Producto",
    body: "Estudiante de Ingeniería de Software con experiencia construyendo aplicaciones web full-stack y manteniendo sistemas en entornos productivos.",
    contact: "Contáctame",
    resume: "CV",
  },
  home: {
    about: "Sobre mí",
    selectedWork: "Trabajo seleccionado",
    seeAll: "Ver todos →",
  },
  aboutSnapshot: {
    body: "Busco incorporarme a un equipo donde pueda aportar mis habilidades técnicas, seguir creciendo profesionalmente y contribuir a objetivos reales de producto—desde interfaces claras hasta sistemas confiables en producción.",
    more: "Más sobre mí →",
    focus: [
      {
        title: "Diseño",
        body: "Interfaces centradas en el usuario, con navegación clara y decisiones de UX/UI intencionales.",
      },
      {
        title: "Producto",
        body: "Definir propuesta de valor, flujos principales y los modelos que hacen funcionar un producto.",
      },
      {
        title: "Código",
        body: "Desarrollo web full-stack, integración con APIs y sistemas que se mantienen sanos en producción.",
      },
    ],
  },
  aboutPage: {
    title: "Sobre mí",
    heading: "Hola — soy Miguel Angel Balderas",
    body: "Estudiante de Ingeniería de Software con experiencia en desarrollo web full-stack y mantenimiento de sistemas en entornos productivos. Construyo interfaces claras y centradas en el usuario, integro APIs y me importa entregar software que se mantenga confiable cuando ya está en producción.",
    howIWork: "Cómo trabajo",
    experience: "Experiencia",
    steps: [
      {
        step: "01",
        title: "Descubrimiento",
        body: "Entender el problema, a las personas y las restricciones antes de dibujar una sola pantalla.",
      },
      {
        step: "02",
        title: "Diseño",
        body: "Dar forma a la jerarquía, los flujos y el tono visual para que el producto se sienta intencional.",
      },
      {
        step: "03",
        title: "Construcción",
        body: "Entregar bases full-stack sólidas con el mismo cuidado por usabilidad, integración y listo para producción.",
      },
    ],
  },
  experience: {
    work: "Trabajo",
    education: "Educación",
    items: [
      {
        id: 1,
        title: "Soporte Técnico y Desarrollo Web",
        company: "DHISA Distribuidora de Herramientas Industriales — Querétaro",
        duration: "Sep 2022 — Nov 2025",
        description:
          "Mantuve y actualicé el sitio web corporativo garantizando disponibilidad y correcto funcionamiento. Administré cuentas de correo empresarial y brindé soporte técnico a colaboradores, resolviendo incidencias de sistemas y equipos.",
        skills: ["Web", "Soporte", "Correo", "IT Ops"],
        type: "work",
      },
      {
        id: 2,
        title: "Ingeniería de Software",
        company: "Universidad Autónoma de Querétaro — Facultad de Informática",
        duration: "Jul 2022 — Actualidad",
        description:
          "Ingeniería de Software (9° semestre), con enfoque en metodologías de desarrollo, algoritmos y diseño de sistemas.",
        skills: ["TypeScript", "Python", "Java", "SQL"],
        type: "education",
      },
    ],
  },
  projectsPage: {
    title: "Proyectos",
    heading: "Trabajo seleccionado: sistemas en producción y productos en desarrollo.",
    body: "Interfaces, APIs y flujos de producto alrededor de problemas reales—más algunas apps aún en desarrollo.",
  },
  projectDetail: {
    allProjects: "Todos los proyectos",
    highlights: "Highlights",
    techStack: "Stack tecnológico",
    github: "GitHub",
    liveDemo: "Sitio en vivo",
    privateRepo: "Proyecto privado — el repo no es público.",
    inDevelopment: "En desarrollo",
    previous: "Anterior",
    next: "Siguiente",
    notFound: "Proyecto no encontrado",
  },
  footer: {
    follow: "Sígueme",
    thanks: "Gracias por pasar — Miguel Angel Balderas",
  },
  products: {
    title: "Productos",
    comingSoon: "Próximamente.",
  },
  projects: {
    medly: {
      designation: "Sistema para consultas médicas",
      quote:
        "Medly es un sistema para consultas médicas. Desarrollé la interfaz completa con diseño centrado en el usuario y buenas prácticas de UX/UI para una navegación clara e intuitiva; integré el frontend con servicios REST y participé en la API y la lógica de negocio.",
      role: "Frontend y colaboración en API",
      highlights: [
        "Frontend completo con diseño centrado en el usuario y navegación clara",
        "Integración REST para un flujo de datos consistente entre cliente y servidor",
        "Colaboración en endpoints y lógica de negocio del sistema",
      ],
    },
    plannify: {
      designation: "Planificador escolar",
      quote:
        "Plannify es un planificador escolar. Diseñé el modelo de negocio y los flujos principales de uso, desarrollé el frontend y su integración con la API, y participé en el modelado de la base de datos con las entidades y relaciones necesarias.",
      role: "Diseño de producto y desarrollo full-stack",
      highlights: [
        "Propuesta de valor del producto y flujos principales de la aplicación",
        "Desarrollo del frontend e integración fluida con la API",
        "Modelado de entidades y relaciones para soportar la lógica del sistema",
      ],
    },
    denest: {
      designation: "Sistema de estimación de densidad",
      quote:
        "Denest es un sistema de estimación de densidad. Construí la totalidad del frontend priorizando claridad visual y desempeño, y configuré las reglas de CI/CD para automatizar el despliegue y reducir errores en producción.",
      role: "Frontend y CI/CD",
      highlights: [
        "Frontend completo con claridad visual y buen desempeño de interfaz",
        "Reglas de CI/CD para automatizar el proceso de despliegue",
        "Menos errores en producción con un pipeline de release más confiable",
      ],
    },
    fixcore: {
      designation: "La plataforma para talleres de reparación que escala contigo",
      quote:
        "FixCore ayuda a talleres a gestionar órdenes, inventario, pagos y técnicos desde un panel moderno—para electrónica, automotriz, relojes y más.",
      role: "Diseño de producto y desarrollo full-stack",
      highlights: [
        "Flujo completo de órdenes de reparación, del ingreso a la entrega",
        "App móvil para que técnicos actualicen trabajos en el taller",
        "Inventario con alertas, pagos, roles multi-usuario y reportes en vivo",
      ],
    },
    aaf: {
      designation: "El archivo de su historia de amor",
      quote:
        "Always and Forever es una app móvil en desarrollo para que las parejas preserven y revivan recuerdos compartidos—de lo cotidiano a los hitos.",
      role: "Diseño UI/UX y desarrollo mobile",
      highlights: [],
    },
    finance: {
      designation: "La forma simple de administrar tu dinero",
      quote:
        "Finance es una app móvil en desarrollo para llevar ingresos, gastos y pagos de tarjetas en un solo lugar—con fechas claras y una gestión más simple.",
      role: "Diseño de producto y desarrollo mobile",
      highlights: [],
    },
  },
};

export default es;
