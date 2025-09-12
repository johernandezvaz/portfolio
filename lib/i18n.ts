export type Language = 'es' | 'en' | 'fr';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    education: string;
    projects: string;
    skills: string;
    objectives: string;
    contact: string;
    downloadCV: string;
  };
  
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    quote: string;
    downloadCV: string;
    discoverJourney: string;
    location: string;
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    quote: string;
    quoteAuthor: string;
    highlights: {
      international: {
        title: string;
        description: string;
      };
      technical: {
        title: string;
        description: string;
      };
      professional: {
        title: string;
        description: string;
      };
      innovation: {
        title: string;
        description: string;
      };
    };
    tags: string[];
  };
  
  // Education Section
  education: {
    title: string;
    subtitle: string;
    current: string;
    keyPoints: string;
    stats: {
      yearsOfStudy: string;
      institutions: string;
      languagesMastered: string;
      projectsCompleted: string;
    };
    degrees: {
      engineering: {
        degree: string;
        institution: string;
        description: string;
        achievements: string[];
      };
      license: {
        degree: string;
        institution: string;
        description: string;
        achievements: string[];
      };
      tsu: {
        degree: string;
        institution: string;
        description: string;
        achievements: string[];
      };
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    researchTitle: string;
    researchSubtitle: string;
    viewDemo: string;
    viewCode: string;
    moreProjects: string;
    keyPoints: string;
    technologiesUsed: string;
    categories: {
      ecommerce: string;
      ai: string;
      iot: string;
      web: string;
    };
    list: {
      sapphirus: {
        title: string;
        description: string;
        highlights: string[];
      };
      fajas: {
        title: string;
        description: string;
        highlights: string[];
      };
      kleinnotes: {
        title: string;
        description: string;
        highlights: string[];
      };
      lumier: {
        title: string;
        description: string;
        highlights: string[];
      };
      accounting: {
        title: string;
        description: string;
        highlights: string[];
      };
      laboratory: {
        title: string;
        description: string;
        highlights: string[];
      };
    };
    research: {
      cimav: {
        title: string;
        description: string;
        highlights: string[];
      };
    };
  };
  
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    languages: {
      title: string;
      spanish: string;
      french: string;
      english: string;
      descriptions: {
        spanish: string;
        french: string;
        english: string;
      };
    };
    technical: {
      title: string;
    };
    tools: {
      title: string;
    };
    methodologies: {
      title: string;
      list: {
        iot: {
          name: string;
          description: string;
        };
        projectManagement: {
          name: string;
          description: string;
        };
        optimization: {
          name: string;
          description: string;
        };
        ai: {
          name: string;
          description: string;
        };
      };
    };
    stats: {
      languagesMastered: string;
      technologies: string;
      professionalTools: string;
      yearsExperience: string;
    };
  };
  
  // Motivation Section
  motivation: {
    title: string;
    subtitle: string;
    visionTitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
    motivations: {
      innovation: {
        title: string;
        description: string;
      };
      learning: {
        title: string;
        description: string;
      };
      collaboration: {
        title: string;
        description: string;
      };
      sustainability: {
        title: string;
        description: string;
      };
    };
    expertiseTitle: string;
    expertiseAreas: {
      iot: {
        title: string;
        description: string;
      };
      ai: {
        title: string;
        description: string;
      };
      fullstack: {
        title: string;
        description: string;
      };
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    fullName: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    contactInfo: string;
    professionalPlatforms: string;
    availability: string;
    availabilityText: string;
    timezone: string;
    connectText: string;
    labels: {
      email: string;
      phone: string;
      location: string;
    };
    placeholders: {
      fullName: string;
      email: string;
      subject: string;
      message: string;
    };
    successMessage: string;
    errorMessage: string;
  };
  
  // Footer
  footer: {
    description: string;
    createdWith: string;
    forInnovation: string;
  };
}

export const translations: Record<Language, Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      education: 'Trayectoria',
      projects: 'Proyectos',
      skills: 'Habilidades',
      objectives: 'Objetivo',
      contact: 'Contacto',
      downloadCV: 'CV',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'José de Jesús Hernández Vázquez',
      title: 'Ingeniero en sistemas informáticos especializado en IoT y desarrollo web, apasionado por la innovación tecnológica y la inteligencia artificial.',
      description: 'Ingeniero en sistemas informáticos especializado en IoT y desarrollo web, apasionado por la innovación tecnológica y la inteligencia artificial.',
      quote: '"La tecnología al servicio de la innovación y el progreso humano."',
      downloadCV: 'Descargar mi CV',
      discoverJourney: 'Descubrir mi trayectoria',
      location: 'Estudiante Internacional - México',
    },
    about: {
      title: 'Acerca de mí',
      subtitle: 'Descubre mi perfil, mis habilidades y mis aspiraciones tecnológicas',
      paragraph1: 'Originario de México, soy un ingeniero en sistemas informáticos apasionado por el desarrollo web, móvil y el Internet de las Cosas (IoT). Mi trayectoria me ha permitido desarrollar una sólida experiencia en tecnologías modernas y un enfoque innovador hacia los desafíos tecnológicos contemporáneos.',
      paragraph2: 'Dominando el español (lengua materna), el francés (B2) y el inglés (C1), me intereso particularmente en el desarrollo web y móvil, IoT, sistemas embebidos e inteligencia artificial. Mi curiosidad me impulsa a explorar nuevas tecnologías y crear aplicaciones innovadoras.',
      paragraph3: 'Mi objetivo es contribuir a proyectos que empujen los límites de la tecnología, combinando mis habilidades técnicas con una visión creativa para desarrollar soluciones que tengan un impacto positivo en la sociedad.',
      quote: '"Creo firmemente que la tecnología debe servir a la humanidad y que la innovación nace de la curiosidad y la perseverancia."',
      quoteAuthor: '- José de Jesús Hernández Vázquez',
      highlights: {
        international: {
          title: 'Experiencia Internacional',
          description: 'Experiencia multicultural con dominio del español, francés e inglés',
        },
        technical: {
          title: 'Formación Técnica',
          description: 'Ingeniería en sistemas informáticos con especialización en sistemas embebidos',
        },
        professional: {
          title: 'Experiencia Profesional',
          description: 'Desarrollador Full Stack con experiencia en tecnologías web modernas',
        },
        innovation: {
          title: 'Innovación IoT',
          description: 'Apasionado por el Internet de las Cosas y la inteligencia artificial',
        },
      },
      tags: ['IoT', 'Desarrollo Web', 'Inteligencia Artificial', 'Innovación'],
    },
    education: {
      title: 'Trayectoria Académica',
      subtitle: 'Mi camino hacia la experiencia en ingeniería informática y sistemas embebidos',
      current: 'En curso',
      keyPoints: 'Puntos clave',
      stats: {
        yearsOfStudy: 'Años de estudio',
        institutions: 'Instituciones',
        languagesMastered: 'Idiomas Dominados',
        projectsCompleted: 'Proyectos Realizados',
      },
      degrees: {
        engineering: {
          degree: 'Ingeniería en sistemas informáticos',
          institution: 'Instituto Tecnológico Nacional de México Campus Chihuahua II (ITCHII)',
          description: 'Formación completa en ingeniería informática con especialización en sistemas embebidos e IoT.',
          achievements: [
            'Especialización en sistemas embebidos',
            'Proyectos innovadores en IoT',
            'Formación en inteligencia artificial'
          ],
        },
        license: {
          degree: 'Licencia Profesional SARII',
          institution: 'IUT Saint-Dié-des-Vosges',
          description: 'Formación especializada en sistemas automatizados, redes e informática industrial.',
          achievements: [
            'Experiencia en sistemas automatizados',
            'Dominio de redes industriales',
            'Perfeccionamiento del francés'
          ],
        },
        tsu: {
          degree: 'TSU Mecatrónica',
          institution: 'Universidad Tecnológica de Chihuahua (UTCH)',
          description: 'Formación técnica en mecatrónica, combinando mecánica, electrónica e informática.',
          achievements: [
            'Bases sólidas en mecatrónica',
            'Programación de sistemas embebidos',
            'Integración de sensores y actuadores'
          ],
        },
      },
    },
    projects: {
      title: 'Mis Proyectos',
      subtitle: 'Descubre mis logros técnicos y mis contribuciones a la innovación',
      viewDemo: 'Ver',
      viewCode: 'Código',
      moreProjects: 'Descubre más proyectos en mis plataformas de desarrollo',
      keyPoints: 'Puntos clave',
      technologiesUsed: 'Tecnologías utilizadas',
      categories: {
        ecommerce: 'E-commerce',
        ai: 'Inteligencia Artificial',
        iot: 'IoT y Sistemas Embebidos',
        web: 'Desarrollo Web',
      },
      list: {
        sapphirus: {
          title: 'Sapphirus - Tienda de Ropa Americana',
          description: 'E-commerce moderno enfocado en la venta de ropa americana importada, con una experiencia de usuario optimizada para móviles y pagos seguros mediante Stripe.',
          highlights: [
            'Pasarela de pagos segura con Stripe',
            'Gestión de productos y usuarios con Supabase',
            'Interfaz responsiva y centrada en UX'
          ],
        },
        fajas: {
          title: 'Fajas Colombianas Maydel',
          description: 'Tienda en línea especializada en la venta de fajas colombianas, con enfoque en conversión, velocidad y facilidad de navegación desde dispositivos móviles.',
          highlights: [
            'Diseño moderno enfocado en conversión',
            'Catálogo dinámico gestionado con Supabase',
            'Integración fluida con Stripe para pagos'
          ],
        },
        kleinnotes: {
          title: 'KleinNotes - Plataforma de Gestión Médica',
          description: 'Plataforma innovadora de gestión de expedientes médicos enfocada en psicología, utilizando inteligencia artificial para digitalizar notas clínicas y analizar patrones lingüísticos.',
          highlights: [
            'IA para análisis de notas clínicas',
            'Interfaz intuitiva para psicólogos',
            'Mejora en la precisión diagnóstica'
          ],
        },
        lumier: {
          title: 'Lumier - Sistema de Detección Inteligente',
          description: 'Sistema innovador de detección de presencia humana mediante procesamiento de imágenes, optimizando el consumo energético encendiendo y apagando luces solo cuando es necesario.',
          highlights: [
            'Reducción significativa del consumo energético',
            'Detección en tiempo real por visión computacional',
            'Aplicaciones extensibles a sistemas de climatización'
          ],
        },
        accounting: {
          title: 'Plataforma Web para Despacho Contable',
          description: 'Sitio web completo para una empresa de contabilidad que permite simplificar el acceso de los clientes a la información y facilitar la comunicación con la empresa.',
          highlights: [
            'Interfaz de cliente amigable',
            'Gestión segura de datos',
            'Comunicación optimizada empresa-cliente'
          ],
        },
        laboratory: {
          title: 'Sitio Web para Laboratorio de Ensayos Mecánicos',
          description: 'Plataforma web para un laboratorio de ensayos mecánicos que mejora el acceso de los clientes a la información y simplifica la comunicación para solicitudes de información.',
          highlights: [
            'Interfaz responsiva y moderna',
            'Sistema de solicitudes en línea',
            'Mejora en la comunicación con clientes'
          ],
        },
      },
    },
    skills: {
      title: 'Mis Habilidades',
      subtitle: 'Una visión completa de mis capacidades lingüísticas, técnicas y metodológicas',
      languages: {
        title: 'Idiomas',
        spanish: 'Español',
        french: 'Francés',
        english: 'Inglés',
        descriptions: {
          spanish: 'Lengua materna',
          french: 'Nivel B2 - Uso profesional',
          english: 'Nivel C1 - Comunicación fluida',
        },
      },
      technical: {
        title: 'Habilidades Técnicas',
      },
      tools: {
        title: 'Herramientas y Tecnologías',
      },
      methodologies: {
        title: 'Metodologías',
        list: {
          iot: {
            name: 'Desarrollo IoT',
            description: 'Prototipado de sistemas embebidos, integración de sensores y actuadores',
          },
          projectManagement: {
            name: 'Gestión de Proyectos',
            description: 'Metodologías ágiles, planificación y coordinación de equipos',
          },
          optimization: {
            name: 'Optimización y Rendimiento',
            description: 'Mejora del rendimiento del sistema y optimización de código',
          },
          ai: {
            name: 'Inteligencia Artificial',
            description: 'Machine Learning, Deep Learning y análisis de datos',
          },
        },
      },
      stats: {
        languagesMastered: 'Idiomas Dominados',
        technologies: 'Tecnologías',
        professionalTools: 'Herramientas Profesionales',
        yearsExperience: 'Años de Experiencia',
      },
    },
    motivation: {
      title: 'Mis Objetivos Profesionales',
      subtitle: 'Mi visión para el futuro de la tecnología y mi papel en la innovación',
      visionTitle: 'Mi Visión Tecnológica',
      paragraph1: 'Como ingeniero en sistemas informáticos apasionado por la innovación, me dedico al desarrollo de soluciones tecnológicas que tienen un impacto positivo en la sociedad. Mi experiencia en IoT, inteligencia artificial y desarrollo web me permite crear sistemas integrados que responden a los desafíos contemporáneos.',
      paragraph2: 'Mi trayectoria académica y profesional me ha permitido desarrollar un enfoque holístico de la tecnología, combinando aspectos técnicos con una comprensión profunda de las necesidades del usuario. Me interesan particularmente los sistemas embebidos, la optimización energética y las aplicaciones de IA para el bien social.',
      paragraph3: 'Mis proyectos, como KleinNotes (plataforma médica con IA) y Lumier (sistema de detección inteligente), ilustran mi capacidad para transformar ideas innovadoras en soluciones concretas. Creo firmemente que la tecnología debe ser accesible, sostenible y al servicio de la humanidad.',
      paragraph4: 'Mi objetivo es continuar desarrollando tecnologías que empujen los límites de lo posible, manteniendo un enfoque en el impacto social y ambiental. Deseo contribuir a proyectos que den forma al futuro de nuestra sociedad digital.',
      paragraph5: 'Con mi dominio de varios idiomas y mi experiencia internacional, estoy preparado para enfrentar los desafíos tecnológicos del mañana en un entorno multicultural y colaborativo.',
      motivations: {
        innovation: {
          title: 'Innovación Tecnológica',
          description: 'Contribuir al desarrollo de soluciones IoT e IA que transformen nuestro día a día',
        },
        learning: {
          title: 'Aprendizaje Continuo',
          description: 'Explorar constantemente nuevas tecnologías y metodologías de desarrollo',
        },
        collaboration: {
          title: 'Colaboración Internacional',
          description: 'Trabajar con equipos multiculturales en proyectos de alcance mundial',
        },
        sustainability: {
          title: 'Soluciones Sostenibles',
          description: 'Desarrollar tecnologías respetuosas con el medio ambiente y socialmente responsables',
        },
      },
      expertiseTitle: 'Áreas de Experiencia e Interés',
      expertiseAreas: {
        iot: {
          title: 'Internet de las Cosas (IoT)',
          description: 'Desarrollo de sistemas embebidos y soluciones conectadas',
        },
        ai: {
          title: 'Inteligencia Artificial',
          description: 'Machine Learning, Computer Vision y procesamiento de lenguaje natural',
        },
        fullstack: {
          title: 'Desarrollo Full Stack',
          description: 'Aplicaciones web modernas y arquitecturas escalables',
        },
      },
    },
    contact: {
      title: 'Contáctame',
      subtitle: 'No dudes en contactarme para discutir oportunidades de colaboración o proyectos innovadores',
      sendMessage: 'Envíame un mensaje',
      fullName: 'Nombre completo',
      email: 'Dirección de email',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      contactInfo: 'Información de contacto',
      professionalPlatforms: 'Plataformas profesionales',
      availability: 'Disponibilidad',
      availabilityText: 'Actualmente estoy disponible para proyectos de desarrollo, colaboraciones técnicas y discusiones sobre innovación tecnológica.',
      timezone: 'Zona horaria: CST (UTC-6)',
      connectText: 'Conectemos para intercambiar ideas sobre nuestros intereses tecnológicos y explorar oportunidades de colaboración.',
      labels: {
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
      },
      placeholders: {
        fullName: 'Tu nombre completo',
        email: 'tu.email@ejemplo.com',
        subject: 'El asunto de tu mensaje',
        message: 'Tu mensaje detallado...',
      },
      successMessage: '¡Mensaje enviado exitosamente! Te responderé a la brevedad.',
      errorMessage: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.',
    },
    footer: {
      description: 'Ingeniero en sistemas informáticos apasionado por la innovación tecnológica',
      createdWith: 'Creado con',
      forInnovation: 'para la innovación tecnológica',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      objectives: 'Objectives',
      contact: 'Contact',
      downloadCV: 'CV',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'José de Jesús Hernández Vázquez',
      title: 'Computer systems engineer specialized in IoT and web development, passionate about technological innovation and artificial intelligence.',
      description: 'Computer systems engineer specialized in IoT and web development, passionate about technological innovation and artificial intelligence.',
      quote: '"Technology at the service of innovation and human progress."',
      downloadCV: 'Download my CV',
      discoverJourney: 'Discover my journey',
      location: 'International Student - Mexico',
    },
    about: {
      title: 'About me',
      subtitle: 'Discover my profile, my skills and my technological aspirations',
      paragraph1: 'Originally from Mexico, I am a computer systems engineer passionate about web and mobile development and the Internet of Things (IoT). My journey has allowed me to develop solid experience in modern technologies and an innovative approach to contemporary technological challenges.',
      paragraph2: 'Mastering Spanish (native language), French (B2) and English (C1), I am particularly interested in web and mobile development, IoT, embedded systems and artificial intelligence. My curiosity drives me to explore new technologies and create innovative applications.',
      paragraph3: 'My goal is to contribute to projects that push the boundaries of technology, combining my technical skills with a creative vision to develop solutions that have a positive impact on society.',
      quote: '"I firmly believe that technology should serve humanity and that innovation is born from curiosity and perseverance."',
      quoteAuthor: '- José de Jesús Hernández Vázquez',
      highlights: {
        international: {
          title: 'International Experience',
          description: 'Multicultural experience with mastery of Spanish, French and English',
        },
        technical: {
          title: 'Technical Training',
          description: 'Computer systems engineering with specialization in embedded systems',
        },
        professional: {
          title: 'Professional Experience',
          description: 'Full Stack developer with experience in modern web technologies',
        },
        innovation: {
          title: 'IoT Innovation',
          description: 'Passionate about the Internet of Things and artificial intelligence',
        },
      },
      tags: ['IoT', 'Web Development', 'Artificial Intelligence', 'Innovation'],
    },
    education: {
      title: 'Academic Journey',
      subtitle: 'My path towards expertise in computer engineering and embedded systems',
      current: 'Current',
      keyPoints: 'Key points',
      stats: {
        yearsOfStudy: 'Years of study',
        institutions: 'Institutions',
        languagesMastered: 'Languages Mastered',
        projectsCompleted: 'Projects Completed',
      },
      degrees: {
        engineering: {
          degree: 'Computer Systems Engineering',
          institution: 'National Technological Institute of Mexico Campus Chihuahua II (ITCHII)',
          description: 'Complete training in computer engineering with specialization in embedded systems and IoT.',
          achievements: [
            'Specialization in embedded systems',
            'Innovative IoT projects',
            'Artificial intelligence training'
          ],
        },
        license: {
          degree: 'Professional License SARII',
          institution: 'IUT Saint-Dié-des-Vosges',
          description: 'Specialized training in automated systems, networks and industrial computing.',
          achievements: [
            'Experience in automated systems',
            'Mastery of industrial networks',
            'French language improvement'
          ],
        },
        tsu: {
          degree: 'TSU Mechatronics',
          institution: 'Technological University of Chihuahua (UTCH)',
          description: 'Technical training in mechatronics, combining mechanics, electronics and computing.',
          achievements: [
            'Solid foundations in mechatronics',
            'Embedded systems programming',
            'Sensor and actuator integration'
          ],
        },
      },
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Discover my technical achievements and my contributions to innovation',
      viewDemo: 'View',
      viewCode: 'Code',
      moreProjects: 'Discover more projects on my development platforms',
      keyPoints: 'Key points',
      technologiesUsed: 'Technologies used',
      categories: {
        ecommerce: 'E-commerce',
        ai: 'Artificial Intelligence',
        iot: 'IoT and Embedded Systems',
        web: 'Web Development',
      },
      list: {
        sapphirus: {
          title: 'Sapphirus - American Clothing Store',
          description: 'Modern e-commerce focused on selling imported American clothing, with a mobile-optimized user experience and secure payments through Stripe.',
          highlights: [
            'Secure payment gateway with Stripe',
            'Product and user management with Supabase',
            'Responsive and UX-centered interface'
          ],
        },
        fajas: {
          title: 'Colombian Girdles Maydel',
          description: 'Online store specialized in selling Colombian girdles, with a focus on conversion, speed and ease of navigation from mobile devices.',
          highlights: [
            'Modern design focused on conversion',
            'Dynamic catalog managed with Supabase',
            'Seamless integration with Stripe for payments'
          ],
        },
        kleinnotes: {
          title: 'KleinNotes - Medical Management Platform',
          description: 'Innovative medical records management platform focused on psychology, using artificial intelligence to digitize clinical notes and analyze linguistic patterns.',
          highlights: [
            'AI for clinical notes analysis',
            'Intuitive interface for psychologists',
            'Improvement in diagnostic accuracy'
          ],
        },
        lumier: {
          title: 'Lumier - Intelligent Detection System',
          description: 'Innovative human presence detection system through image processing, optimizing energy consumption by turning lights on and off only when necessary.',
          highlights: [
            'Significant reduction in energy consumption',
            'Real-time detection by computer vision',
            'Extensible applications to climate systems'
          ],
        },
        accounting: {
          title: 'Web Platform for Accounting Firm',
          description: 'Complete website for an accounting company that allows simplifying client access to information and facilitating communication with the company.',
          highlights: [
            'User-friendly client interface',
            'Secure data management',
            'Optimized company-client communication'
          ],
        },
        laboratory: {
          title: 'Website for Mechanical Testing Laboratory',
          description: 'Web platform for a mechanical testing laboratory that improves client access to information and simplifies communication for information requests.',
          highlights: [
            'Responsive and modern interface',
            'Online request system',
            'Improved client communication'
          ],
        },
      },
    },
    skills: {
      title: 'My Skills',
      subtitle: 'A complete overview of my linguistic, technical and methodological capabilities',
      languages: {
        title: 'Languages',
        spanish: 'Spanish',
        french: 'French',
        english: 'English',
        descriptions: {
          spanish: 'Native language',
          french: 'B2 level - Professional use',
          english: 'C1 level - Fluent communication',
        },
      },
      technical: {
        title: 'Technical Skills',
      },
      tools: {
        title: 'Tools and Technologies',
      },
      methodologies: {
        title: 'Methodologies',
        list: {
          iot: {
            name: 'IoT Development',
            description: 'Embedded systems prototyping, sensor and actuator integration',
          },
          projectManagement: {
            name: 'Project Management',
            description: 'Agile methodologies, planning and team coordination',
          },
          optimization: {
            name: 'Optimization and Performance',
            description: 'System performance improvement and code optimization',
          },
          ai: {
            name: 'Artificial Intelligence',
            description: 'Machine Learning, Deep Learning and data analysis',
          },
        },
      },
      stats: {
        languagesMastered: 'Languages Mastered',
        technologies: 'Technologies',
        professionalTools: 'Professional Tools',
        yearsExperience: 'Years of Experience',
      },
    },
    motivation: {
      title: 'My Professional Objectives',
      subtitle: 'My vision for the future of technology and my role in innovation',
      visionTitle: 'My Technological Vision',
      paragraph1: 'As a computer systems engineer passionate about innovation, I dedicate myself to developing technological solutions that have a positive impact on society. My experience in IoT, artificial intelligence and web development allows me to create integrated systems that respond to contemporary challenges.',
      paragraph2: 'My academic and professional journey has allowed me to develop a holistic approach to technology, combining technical aspects with a deep understanding of user needs. I am particularly interested in embedded systems, energy optimization and AI applications for social good.',
      paragraph3: 'My projects, such as KleinNotes (medical platform with AI) and Lumier (intelligent detection system), illustrate my ability to transform innovative ideas into concrete solutions. I firmly believe that technology should be accessible, sustainable and at the service of humanity.',
      paragraph4: 'My goal is to continue developing technologies that push the boundaries of what is possible, maintaining a focus on social and environmental impact. I want to contribute to projects that shape the future of our digital society.',
      paragraph5: 'With my mastery of several languages and my international experience, I am prepared to face tomorrow\'s technological challenges in a multicultural and collaborative environment.',
      motivations: {
        innovation: {
          title: 'Technological Innovation',
          description: 'Contributing to the development of IoT and AI solutions that transform our daily lives',
        },
        learning: {
          title: 'Continuous Learning',
          description: 'Constantly exploring new technologies and development methodologies',
        },
        collaboration: {
          title: 'International Collaboration',
          description: 'Working with multicultural teams on global projects',
        },
        sustainability: {
          title: 'Sustainable Solutions',
          description: 'Developing environmentally friendly and socially responsible technologies',
        },
      },
      expertiseTitle: 'Areas of Expertise and Interest',
      expertiseAreas: {
        iot: {
          title: 'Internet of Things (IoT)',
          description: 'Development of embedded systems and connected solutions',
        },
        ai: {
          title: 'Artificial Intelligence',
          description: 'Machine Learning, Computer Vision and natural language processing',
        },
        fullstack: {
          title: 'Full Stack Development',
          description: 'Modern web applications and scalable architectures',
        },
      },
    },
    contact: {
      title: 'Contact me',
      subtitle: 'Feel free to contact me to discuss collaboration opportunities or innovative projects',
      sendMessage: 'Send me a message',
      fullName: 'Full name',
      email: 'Email address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      contactInfo: 'Contact information',
      professionalPlatforms: 'Professional platforms',
      availability: 'Availability',
      availabilityText: 'I am currently available for development projects, technical collaborations and discussions about technological innovation.',
      timezone: 'Time zone: CST (UTC-6)',
      connectText: 'Let\'s connect to exchange ideas about our technological interests and explore collaboration opportunities.',
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
      placeholders: {
        fullName: 'Your full name',
        email: 'your.email@example.com',
        subject: 'The subject of your message',
        message: 'Your detailed message...',
      },
      successMessage: 'Message sent successfully! I will respond to you shortly.',
      errorMessage: 'There was an error sending the message. Please try again or contact me directly by email.',
    },
    footer: {
      description: 'Computer systems engineer passionate about technological innovation',
      createdWith: 'Created with',
      forInnovation: 'for technological innovation',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      education: 'Parcours',
      projects: 'Projets',
      skills: 'Compétences',
      objectives: 'Objectifs',
      contact: 'Contact',
      downloadCV: 'CV',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'José de Jesús Hernández Vázquez',
      title: 'Ingénieur en systèmes informatiques spécialisé en IoT et développement web, passionné par l\'innovation technologique et l\'intelligence artificielle.',
      description: 'Ingénieur en systèmes informatiques spécialisé en IoT et développement web, passionné par l\'innovation technologique et l\'intelligence artificielle.',
      quote: '"La technologie au service de l\'innovation et du progrès humain."',
      downloadCV: 'Télécharger mon CV',
      discoverJourney: 'Découvrir mon parcours',
      location: 'Étudiant International - Mexique',
    },
    about: {
      title: 'À propos de moi',
      subtitle: 'Découvrez mon profil, mes compétences et mes aspirations technologiques',
      paragraph1: 'Originaire du Mexique, je suis un ingénieur en systèmes informatiques passionné par le développement web, mobile et l\'Internet des Objets (IoT). Mon parcours m\'a permis de développer une solide expérience dans les technologies modernes et une approche innovante des défis technologiques contemporains.',
      paragraph2: 'Maîtrisant l\'espagnol (langue maternelle), le français (B2) et l\'anglais (C1), je m\'intéresse particulièrement au développement web et mobile, IoT, systèmes embarqués et intelligence artificielle. Ma curiosité me pousse à explorer de nouvelles technologies et créer des applications innovantes.',
      paragraph3: 'Mon objectif est de contribuer à des projets qui repoussent les limites de la technologie, en combinant mes compétences techniques avec une vision créative pour développer des solutions ayant un impact positif sur la société.',
      quote: '"Je crois fermement que la technologie doit servir l\'humanité et que l\'innovation naît de la curiosité et de la persévérance."',
      quoteAuthor: '- José de Jesús Hernández Vázquez',
      highlights: {
        international: {
          title: 'Expérience Internationale',
          description: 'Expérience multiculturelle avec maîtrise de l\'espagnol, français et anglais',
        },
        technical: {
          title: 'Formation Technique',
          description: 'Ingénierie en systèmes informatiques avec spécialisation en systèmes embarqués',
        },
        professional: {
          title: 'Expérience Professionnelle',
          description: 'Développeur Full Stack avec expérience en technologies web modernes',
        },
        innovation: {
          title: 'Innovation IoT',
          description: 'Passionné par l\'Internet des Objets et l\'intelligence artificielle',
        },
      },
      tags: ['IoT', 'Développement Web', 'Intelligence Artificielle', 'Innovation'],
    },
    education: {
      title: 'Parcours Académique',
      subtitle: 'Mon chemin vers l\'expertise en ingénierie informatique et systèmes embarqués',
      current: 'En cours',
      keyPoints: 'Points clés',
      stats: {
        yearsOfStudy: 'Années d\'étude',
        institutions: 'Institutions',
        languagesMastered: 'Langues Maîtrisées',
        projectsCompleted: 'Projets Réalisés',
      },
      degrees: {
        engineering: {
          degree: 'Ingénierie en systèmes informatiques',
          institution: 'Institut Technologique National du Mexique Campus Chihuahua II (ITCHII)',
          description: 'Formation complète en ingénierie informatique avec spécialisation en systèmes embarqués et IoT.',
          achievements: [
            'Spécialisation en systèmes embarqués',
            'Projets innovants en IoT',
            'Formation en intelligence artificielle'
          ],
        },
        license: {
          degree: 'Licence Professionnelle SARII',
          institution: 'IUT Saint-Dié-des-Vosges',
          description: 'Formation spécialisée en systèmes automatisés, réseaux et informatique industrielle.',
          achievements: [
            'Expérience en systèmes automatisés',
            'Maîtrise des réseaux industriels',
            'Perfectionnement du français'
          ],
        },
        tsu: {
          degree: 'TSU Mécatronique',
          institution: 'Université Technologique de Chihuahua (UTCH)',
          description: 'Formation technique en mécatronique, combinant mécanique, électronique et informatique.',
          achievements: [
            'Bases solides en mécatronique',
            'Programmation de systèmes embarqués',
            'Intégration de capteurs et actionneurs'
          ],
        },
      },
    },
    projects: {
      title: 'Mes Projets',
      subtitle: 'Découvrez mes réalisations techniques et mes contributions à l\'innovation',
      viewDemo: 'Voir',
      viewCode: 'Code',
      moreProjects: 'Découvrez plus de projets sur mes plateformes de développement',
      keyPoints: 'Points clés',
      technologiesUsed: 'Technologies utilisées',
      categories: {
        ecommerce: 'E-commerce',
        ai: 'Intelligence Artificielle',
        iot: 'IoT et Systèmes Embarqués',
        web: 'Développement Web',
      },
      list: {
        sapphirus: {
          title: 'Sapphirus - Boutique de Vêtements Américains',
          description: 'E-commerce moderne axé sur la vente de vêtements américains importés, avec une expérience utilisateur optimisée pour mobile et des paiements sécurisés via Stripe.',
          highlights: [
            'Passerelle de paiement sécurisée avec Stripe',
            'Gestion des produits et utilisateurs avec Supabase',
            'Interface responsive et centrée sur l\'UX'
          ],
        },
        fajas: {
          title: 'Gaines Colombiennes Maydel',
          description: 'Boutique en ligne spécialisée dans la vente de gaines colombiennes, avec un focus sur la conversion, la vitesse et la facilité de navigation depuis les appareils mobiles.',
          highlights: [
            'Design moderne axé sur la conversion',
            'Catalogue dynamique géré avec Supabase',
            'Intégration fluide avec Stripe pour les paiements'
          ],
        },
        kleinnotes: {
          title: 'KleinNotes - Plateforme de Gestion Médicale',
          description: 'Plateforme innovante de gestion de dossiers médicaux axée sur la psychologie, utilisant l\'intelligence artificielle pour numériser les notes cliniques et analyser les modèles linguistiques.',
          highlights: [
            'IA pour l\'analyse des notes cliniques',
            'Interface intuitive pour les psychologues',
            'Amélioration de la précision diagnostique'
          ],
        },
        lumier: {
          title: 'Lumier - Système de Détection Intelligente',
          description: 'Système innovant de détection de présence humaine par traitement d\'images, optimisant la consommation énergétique en allumant et éteignant les lumières uniquement quand nécessaire.',
          highlights: [
            'Réduction significative de la consommation énergétique',
            'Détection en temps réel par vision par ordinateur',
            'Applications extensibles aux systèmes de climatisation'
          ],
        },
        accounting: {
          title: 'Plateforme Web pour Cabinet Comptable',
          description: 'Site web complet pour une entreprise comptable qui permet de simplifier l\'accès des clients aux informations et faciliter la communication avec l\'entreprise.',
          highlights: [
            'Interface client conviviale',
            'Gestion sécurisée des données',
            'Communication optimisée entreprise-client'
          ],
        },
        laboratory: {
          title: 'Site Web pour Laboratoire d\'Essais Mécaniques',
          description: 'Plateforme web pour un laboratoire d\'essais mécaniques qui améliore l\'accès des clients aux informations et simplifie la communication pour les demandes d\'information.',
          highlights: [
            'Interface responsive et moderne',
            'Système de demandes en ligne',
            'Amélioration de la communication avec les clients'
          ],
        },
      },
    },
    skills: {
      title: 'Mes Compétences',
      subtitle: 'Une vision complète de mes capacités linguistiques, techniques et méthodologiques',
      languages: {
        title: 'Langues',
        spanish: 'Espagnol',
        french: 'Français',
        english: 'Anglais',
        descriptions: {
          spanish: 'Langue maternelle',
          french: 'Niveau B2 - Usage professionnel',
          english: 'Niveau C1 - Communication fluide',
        },
      },
      technical: {
        title: 'Compétences Techniques',
      },
      tools: {
        title: 'Outils et Technologies',
      },
      methodologies: {
        title: 'Méthodologies',
        list: {
          iot: {
            name: 'Développement IoT',
            description: 'Prototypage de systèmes embarqués, intégration de capteurs et actionneurs',
          },
          projectManagement: {
            name: 'Gestion de Projets',
            description: 'Méthodologies agiles, planification et coordination d\'équipes',
          },
          optimization: {
            name: 'Optimisation et Performance',
            description: 'Amélioration des performances système et optimisation de code',
          },
          ai: {
            name: 'Intelligence Artificielle',
            description: 'Machine Learning, Deep Learning et analyse de données',
          },
        },
      },
      stats: {
        languagesMastered: 'Langues Maîtrisées',
        technologies: 'Technologies',
        professionalTools: 'Outils Professionnels',
        yearsExperience: 'Années d\'Expérience',
      },
    },
    motivation: {
      title: 'Mes Objectifs Professionnels',
      subtitle: 'Ma vision pour l\'avenir de la technologie et mon rôle dans l\'innovation',
      visionTitle: 'Ma Vision Technologique',
      paragraph1: 'En tant qu\'ingénieur en systèmes informatiques passionné par l\'innovation, je me consacre au développement de solutions technologiques ayant un impact positif sur la société. Mon expérience en IoT, intelligence artificielle et développement web me permet de créer des systèmes intégrés qui répondent aux défis contemporains.',
      paragraph2: 'Mon parcours académique et professionnel m\'a permis de développer une approche holistique de la technologie, combinant aspects techniques avec une compréhension profonde des besoins utilisateur. Je m\'intéresse particulièrement aux systèmes embarqués, l\'optimisation énergétique et les applications d\'IA pour le bien social.',
      paragraph3: 'Mes projets, comme KleinNotes (plateforme médicale avec IA) et Lumier (système de détection intelligente), illustrent ma capacité à transformer des idées innovantes en solutions concrètes. Je crois fermement que la technologie doit être accessible, durable et au service de l\'humanité.',
      paragraph4: 'Mon objectif est de continuer à développer des technologies qui repoussent les limites du possible, en maintenant un focus sur l\'impact social et environnemental. Je souhaite contribuer à des projets qui façonnent l\'avenir de notre société numérique.',
      paragraph5: 'Avec ma maîtrise de plusieurs langues et mon expérience internationale, je suis préparé à affronter les défis technologiques de demain dans un environnement multiculturel et collaboratif.',
      motivations: {
        innovation: {
          title: 'Innovation Technologique',
          description: 'Contribuer au développement de solutions IoT et IA qui transforment notre quotidien',
        },
        learning: {
          title: 'Apprentissage Continu',
          description: 'Explorer constamment de nouvelles technologies et méthodologies de développement',
        },
        collaboration: {
          title: 'Collaboration Internationale',
          description: 'Travailler avec des équipes multiculturelles sur des projets d\'envergure mondiale',
        },
        sustainability: {
          title: 'Solutions Durables',
          description: 'Développer des technologies respectueuses de l\'environnement et socialement responsables',
        },
      },
      expertiseTitle: 'Domaines d\'Expertise et d\'Intérêt',
      expertiseAreas: {
        iot: {
          title: 'Internet des Objets (IoT)',
          description: 'Développement de systèmes embarqués et solutions connectées',
        },
        ai: {
          title: 'Intelligence Artificielle',
          description: 'Machine Learning, Computer Vision et traitement du langage naturel',
        },
        fullstack: {
          title: 'Développement Full Stack',
          description: 'Applications web modernes et architectures évolutives',
        },
      },
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'N\'hésitez pas à me contacter pour discuter d\'opportunités de collaboration ou de projets innovants',
      sendMessage: 'Envoyez-moi un message',
      fullName: 'Nom complet',
      email: 'Adresse email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      contactInfo: 'Informations de contact',
      professionalPlatforms: 'Plateformes professionnelles',
      availability: 'Disponibilité',
      availabilityText: 'Je suis actuellement disponible pour des projets de développement, des collaborations techniques et des discussions sur l\'innovation technologique.',
      timezone: 'Fuseau horaire : CST (UTC-6)',
      connectText: 'Connectons-nous pour échanger des idées sur nos intérêts technologiques et explorer des opportunités de collaboration.',
      labels: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
      },
      placeholders: {
        fullName: 'Votre nom complet',
        email: 'votre.email@exemple.com',
        subject: 'Le sujet de votre message',
        message: 'Votre message détaillé...',
      },
      successMessage: 'Message envoyé avec succès ! Je vous répondrai sous peu.',
      errorMessage: 'Il y a eu une erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.',
    },
    footer: {
      description: 'Ingénieur en systèmes informatiques passionné par l\'innovation technologique',
      createdWith: 'Créé avec',
      forInnovation: 'pour l\'innovation technologique',
    },
  },
};

export function getTranslation(language: Language): Translation {
  return translations[language] || translations.es;
}