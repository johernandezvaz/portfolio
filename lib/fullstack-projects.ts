export interface FullStackProject {
  id: string;
  title: string;
  shortDescription: {
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
  technologies: string[];
}

export const fullstackProjects: FullStackProject[] = [
  {
    id: "docklog",
    title: "DockLog",
    shortDescription: {
      es: "Sistema digital para gestión y registro de muelles de carga en almacenes en tiempo real.",
      en: "Real-time digital truck dock management and activity tracking system for warehouses.",
      fr: "Système numérique de gestion et suivi en temps réel des quais de chargement."
    },
    url: "https://docklog.onrender.com/",
    status: {
      es: "Live on Render",
      en: "Live on Render",
      fr: "Live on Render"
    },
    technologies: ["Django 6", "PostgreSQL", "Vanilla JS", "Render"]
  }
];
