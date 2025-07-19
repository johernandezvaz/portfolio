'use client';

import { Target, BookOpen, Users, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';

const MotivationSection = () => {
  const motivations = [
    {
      icon: Target,
      title: 'Innovation Technologique',
      description: 'Contribuer au développement de solutions IoT et d\'IA qui transforment notre quotidien',
    },
    {
      icon: BookOpen,
      title: 'Apprentissage Continu',
      description: 'Explorer constamment de nouvelles technologies et méthodologies de développement',
    },
    {
      icon: Users,
      title: 'Collaboration Internationale',
      description: 'Travailler avec des équipes multiculturelles sur des projets d\'envergure mondiale',
    },
    {
      icon: Lightbulb,
      title: 'Solutions Durables',
      description: 'Développer des technologies respectueuses de l\'environnement et socialement responsables',
    },
  ];

  return (
    <section id="objectif" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Mes Objectifs Professionnels"
            subtitle="Ma vision pour l'avenir de la technologie et mon rôle dans l'innovation"
          />

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Motivation Letter */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl font-playfair">
                    <Heart className="w-6 h-6 text-[#C5A880]" />
                    <span>Ma Vision Technologique</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    En tant qu'ingénieur en systèmes informatiques passionné par l'innovation, 
                    je me consacre au développement de solutions technologiques qui ont un impact 
                    positif sur la société. Mon expertise en <strong>IoT</strong>, <strong>intelligence 
                    artificielle</strong> et <strong>développement web</strong> me permet de créer 
                    des systèmes intégrés qui répondent aux défis contemporains.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Mon parcours académique et professionnel m'a permis de développer une approche 
                    holistique de la technologie, combinant les aspects techniques avec une 
                    compréhension profonde des besoins utilisateurs. Je m'intéresse particulièrement 
                    aux <strong>systèmes embarqués</strong>, à l'<strong>optimisation énergétique</strong> 
                    et aux <strong>applications d'IA pour le bien social</strong>.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Mes projets, comme <strong>SigmundFiles</strong> (plateforme médicale avec IA) 
                    et <strong>Lumier</strong> (système de détection intelligente), illustrent ma 
                    capacité à transformer des idées innovantes en solutions concrètes. Je crois 
                    fermement que la technologie doit être accessible, durable et au service de 
                    l'humanité.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Mon objectif est de continuer à développer des technologies qui repoussent 
                    les limites du possible, tout en maintenant un focus sur l'impact social 
                    et environnemental. Je souhaite contribuer à des projets qui façonnent 
                    l'avenir de notre société numérique.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Avec ma maîtrise de plusieurs langues et mon expérience internationale, 
                    je suis prêt à relever les défis technologiques de demain dans un 
                    environnement multiculturel et collaboratif.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Motivation Points */}
            <div className="space-y-6">
              {motivations.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <Card className="bg-gradient-to-r from-[#0A192F]/5 to-[#C5A880]/5">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-playfair">
                Domaines d'Expertise et d'Intérêt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  {
                    title: 'Internet des Objets (IoT)',
                    description: 'Développement de systèmes embarqués et solutions connectées'
                  },
                  {
                    title: 'Intelligence Artificielle',
                    description: 'Machine Learning, Computer Vision et traitement du langage naturel'
                  },
                  {
                    title: 'Développement Full Stack',
                    description: 'Applications web modernes et architectures scalables'
                  }
                ].map((interest, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-foreground">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;