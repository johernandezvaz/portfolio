'use client';

import { Globe, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';

const AboutSection = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'Expertise Internationale',
      description: 'Expérience multiculturelle avec maîtrise de l\'espagnol, français et anglais',
    },
    {
      icon: BookOpen,
      title: 'Formation Technique',
      description: 'Ingénierie des systèmes informatiques avec spécialisation en systèmes embarqués',
    },
    {
      icon: Users,
      title: 'Expérience Professionnelle',
      description: 'Développeur Full Stack avec expertise en technologies web modernes',
    },
    {
      icon: Target,
      title: 'Innovation IoT',
      description: 'Passionné par l\'Internet des Objets et l\'intelligence artificielle',
    },
  ];

  return (
    <section id="a-propos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="À propos de moi"
            subtitle="Découvrez mon profil, mes compétences et mes aspirations technologiques"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Originaire du <strong>Mexique</strong>, je suis un ingénieur en systèmes informatiques 
                  passionné par le développement web, mobile et l'Internet des Objets (IoT). Mon parcours 
                  m'a permis de développer une expertise solide en technologies modernes et une approche 
                  innovante des défis technologiques contemporains.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Maîtrisant l'<strong>espagnol</strong> (langue maternelle), le <strong>français</strong> (B2) 
                  et l'<strong>anglais</strong> (B2), je m'intéresse particulièrement au développement web 
                  et mobile, à l'IoT, aux systèmes embarqués et à l'intelligence artificielle. Ma curiosité 
                  me pousse à explorer de nouvelles technologies et à créer des applications innovantes.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Mon objectif est de contribuer à des projets qui repoussent les limites de la technologie, 
                  en combinant mes compétences techniques avec une vision créative pour développer des 
                  solutions qui ont un impact positif sur la société.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['IoT', 'Développement Web', 'Intelligence Artificielle', 'Innovation'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#C5A880]/10 text-[#C5A880] rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-playfair italic text-muted-foreground max-w-4xl mx-auto">
              "Je crois fermement que la technologie doit servir l'humanité et que l'innovation 
              naît de la curiosité et de la persévérance."
            </blockquote>
            <cite className="block mt-4 text-sm font-medium text-[#C5A880]">
              - José de Jesús Hernández Vázquez
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;