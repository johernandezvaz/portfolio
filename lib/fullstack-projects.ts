export interface FullStackProject {
  id: string;
  title: string;
  tagline: {
    es: string;
    en: string;
    fr: string;
  };
  description: {
    es: string;
    en: string;
    fr: string;
  };
  url: string;
  githubUrl?: string;
  status: {
    es: string;
    en: string;
    fr: string;
  };
  techStack: {
    layer: {
      es: string;
      en: string;
      fr: string;
    };
    technology: string;
    category: 'backend' | 'frontend' | 'database' | 'devops' | 'architecture';
  }[];
  features: {
    es: string;
    en: string;
    fr: string;
  }[];
  badge: string;
}

export const fullstackProjects: FullStackProject[] = [
  {
    id: "docklog",
    title: "DockLog",
    tagline: {
      es: "Sistema ágil de gestión y registro de muelles de carga para pequeños almacenes.",
      en: "A simple and efficient truck dock management system for small warehouses.",
      fr: "Système simple et efficace de gestion des quais de chargement pour petits entrepôts."
    },
    description: {
      es: "DockLog reemplaza las notas de papel en el almacén con un sistema digital en tiempo real. Permite a los supervisores registrar la entrada y salida de camiones, asignar muelles disponibles al instante, calcular automáticamente el tiempo de permanencia con un reloj de duración en vivo y auditar el historial de actividad de forma organizada y paginada.",
      en: "DockLog replaces clipboards and paper logs on the warehouse floor with a real-time digital system. It allows shift supervisors to record truck arrivals and departures, assign free docks instantly, track dwell times automatically with a live elapsed-time clock, and audit paginated activity history seamlessly.",
      fr: "DockLog remplace les blocs-notes papier dans l'entrepôt par un système numérique en temps réel. Il permet aux superviseurs d'enregistrer les arrivées et départs de camions, d'affecter les quais disponibles, de calculer automatiquement la durée d'occupation avec une horloge en direct et de consulter l'historique paginé des activités."
    },
    url: "https://docklog.onrender.com/",
    status: {
      es: "En Producción (Render)",
      en: "Live on Render",
      fr: "En Production (Render)"
    },
    badge: "Django 6 • PostgreSQL • Vanilla JS",
    techStack: [
      {
        layer: { es: "Backend", en: "Backend", fr: "Backend" },
        technology: "Django 6 (Python)",
        category: "backend"
      },
      {
        layer: { es: "Base de Datos", en: "Database", fr: "Base de données" },
        technology: "PostgreSQL (Prod) / SQLite (Dev)",
        category: "database"
      },
      {
        layer: { es: "Frontend", en: "Frontend", fr: "Frontend" },
        technology: "HTML5 + Vanilla CSS + Vanilla JS",
        category: "frontend"
      },
      {
        layer: { es: "Despliegue & Contenedores", en: "Deployment & Containers", fr: "Déploiement & Conteneurs" },
        technology: "Render (Docker / Compose planned)",
        category: "devops"
      }
    ],
    features: [
      {
        es: "Check-In / Check-Out de camiones con registro automático de marcas de tiempo",
        en: "Truck Check-In / Check-Out with automatic timestamps",
        fr: "Check-In / Check-Out des camions avec horodatage automatique"
      },
      {
        es: "Asignación dinámica de muelles filtrando únicamente los muelles libres",
        en: "Dynamic dock assignment showing only available bays",
        fr: "Attribution dynamique des quais affichant uniquement les quais disponibles"
      },
      {
        es: "Cálculo y seguimiento automático del tiempo de permanencia (Dwell Time)",
        en: "Automatic dwell time tracking for occupied loading bays",
        fr: "Suivi automatique du temps d'occupation (Dwell Time)"
      },
      {
        es: "Reloj de duración en vivo y en tiempo real (Vanilla JS, sin librerías)",
        en: "Live elapsed-time duration clock running in real time (Vanilla JS)",
        fr: "Horloge de durée en temps réel en direct (Vanilla JS sans librairies)"
      },
      {
        es: "Historial de actividad paginado y panel administrativo completo en Django",
        en: "Paginated activity log and full-featured Django admin panel",
        fr: "Journal d'activité paginé et panneau d'administration Django complet"
      }
    ]
  }
];
