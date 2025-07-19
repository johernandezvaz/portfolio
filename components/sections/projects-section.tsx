'use client';

import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/ui/section-title';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SigmundFiles - Plataforma de Gestión Médica",
      description: "Plataforma innovadora de gestión de expedientes médicos enfocada en psicología, utilizando inteligencia artificial para digitalizar notas clínicas y analizar patrones lingüísticos.",
      image: "https://images.pexels.com/photos/5912319/pexels-photo-5912319.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "Django", "PostgreSQL", "NLP"],
      category: "Inteligencia Artificial",
      period: "Junio 2024 - Presente",
      highlights: [
        "IA para análisis de notas clínicas",
        "Interfaz intuitiva para psicólogos",
        "Mejora en la precisión diagnóstica"
      ],
      links: {
        demo: "https://www.kaggle.com/maikua/code",
        github: "https://github.com/johernandezvaz"
      }
    },
    {
      title: "Lumier - Sistema de Detección Inteligente",
      description: "Sistema innovador de detección de presencia humana mediante procesamiento de imágenes, optimizando el consumo energético encendiendo y apagando luces solo cuando es necesario.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "IoT", "Computer Vision"],
      category: "IoT y Sistemas Embebidos",
      period: "Enero 2024 - Mayo 2024",
      highlights: [
        "Reducción significativa del consumo energético",
        "Detección en tiempo real por visión computacional",
        "Aplicaciones extensibles a sistemas de climatización"
      ],
      links: {
        demo: "#",
        github: "https://github.com/johernandezvaz"
      }
    },
    {
      title: "Plataforma Web para Despacho Contable",
      description: "Sitio web completo para una empresa de contabilidad que permite simplificar el acceso de los clientes a la información y facilitar la comunicación con la empresa.",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      category: "Desarrollo Web",
      period: "Febrero 2023 - Agosto 2023",
      highlights: [
        "Interfaz de cliente amigable",
        "Gestión segura de datos",
        "Comunicación optimizada empresa-cliente"
      ],
      links: {
        demo: "#",
        github: "https://github.com/johernandezvaz"
      }
    },
    {
      title: "Sitio Web para Laboratorio de Ensayos Mecánicos",
      description: "Plataforma web para un laboratorio de ensayos mecánicos que mejora el acceso de los clientes a la información y simplifica la comunicación para solicitudes de información.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Desarrollo Web",
      period: "Agosto 2021 - Agosto 2022",
      highlights: [
        "Interfaz responsiva y moderna",
        "Sistema de solicitudes en línea",
        "Mejora en la comunicación con clientes"
      ],
      links: {
        demo: "#",
        github: "https://github.com/johernandezvaz"
      }
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Mis Proyectos"
            subtitle="Descubre mis logros técnicos y mis contribuciones a la innovación"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-playfair font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-[#C5A880]" />
                      <span>Puntos clave</span>
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tecnologías utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Voir</span>
                        <span>Ver</span>
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                        <span>Código</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Descubre más proyectos en mis plataformas de desarrollo
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/johernandezvaz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.kaggle.com/maikua/code" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Kaggle</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;