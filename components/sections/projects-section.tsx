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
      title: "SigmundFiles - Plateforme de Gestion Médicale",
      description: "Plateforme innovante de gestion des dossiers médicaux axée sur la psychologie, utilisant l'intelligence artificielle pour numériser les notes cliniques et analyser les modèles linguistiques.",
      image: "https://images.pexels.com/photos/5912319/pexels-photo-5912319.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "Django", "PostgreSQL", "NLP"],
      category: "Intelligence Artificielle",
      period: "Juin 2024 - Présent",
      highlights: [
        "IA pour l'analyse de notes cliniques",
        "Interface intuitive pour psychologues",
        "Amélioration de la précision diagnostique"
      ],
      links: {
        demo: "https://www.kaggle.com/maikua/code",
        github: "https://github.com/johernandezvaz"
      }
    },
    {
      title: "Lumier - Système de Détection Intelligente",
      description: "Système innovant de détection de présence humaine par traitement d'image, optimisant la consommation d'énergie en allumant et éteignant les lumières uniquement lorsque nécessaire.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "IoT", "Computer Vision"],
      category: "IoT & Systèmes Embarqués",
      period: "Janvier 2024 - Mai 2024",
      highlights: [
        "Réduction significative de la consommation énergétique",
        "Détection en temps réel par vision par ordinateur",
        "Applications extensibles aux systèmes de climatisation"
      ],
      links: {
        demo: "#",
        github: "https://github.com/johernandezvaz"
      }
    },
    {
      title: "Plateforme Web pour Cabinet Comptable",
      description: "Site web complet pour une société de comptabilité permettant de simplifier l'accès des clients à l'information et de faciliter la communication avec l'entreprise.",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      category: "Développement Web",
      period: "Février 2023 - Août 2023",
      highlights: [
        "Interface client conviviale",
        "Gestion sécurisée des données",
        "Communication optimisée entreprise-client"
      ],
      links: {
        demo: "#",
        github: "https://github.com/johernandezvaz"
      }
    },
    {
      title: "Site Web pour Laboratoire d'Essais Mécaniques",
      description: "Plateforme web pour un laboratoire d'essais mécaniques améliorant l'accès des clients à l'information et simplifiant la communication pour les demandes de renseignements.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Développement Web",
      period: "Août 2021 - Août 2022",
      highlights: [
        "Interface responsive et moderne",
        "Système de demandes en ligne",
        "Amélioration de la communication client"
      ],
      links: {
        demo: "#",
        github: "https://github.com/johernandezvaz"
      }
    }
  ];

  return (
    <section id="projets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Mes Projets"
            subtitle="Découvrez mes réalisations techniques et mes contributions à l'innovation"
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
                      <span>Points clés</span>
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
                    <h4 className="font-semibold text-foreground mb-3">Technologies utilisées</h4>
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
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Découvrez plus de projets sur mes plateformes de développement
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