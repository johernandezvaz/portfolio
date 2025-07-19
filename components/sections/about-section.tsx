'use client';

import { Globe, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';

const AboutSection = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'Experiencia Internacional',
      description: 'Experiencia multicultural con dominio del español, francés e inglés',
    },
    {
      icon: BookOpen,
      title: 'Formación Técnica',
      description: 'Ingeniería en sistemas informáticos con especialización en sistemas embebidos',
    },
    {
      icon: Users,
      title: 'Experiencia Profesional',
      description: 'Desarrollador Full Stack con experiencia en tecnologías web modernas',
    },
    {
      icon: Target,
      title: 'Innovación IoT',
      description: 'Apasionado por el Internet de las Cosas y la inteligencia artificial',
    },
  ];

  return (
    <section id="acerca-de" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Acerca de mí"
            subtitle="Descubre mi perfil, mis habilidades y mis aspiraciones tecnológicas"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Originario de <strong>México</strong>, soy un ingeniero en sistemas informáticos 
                  apasionado por el desarrollo web, móvil y el Internet de las Cosas (IoT). Mi trayectoria 
                  me ha permitido desarrollar una sólida experiencia en tecnologías modernas y un enfoque 
                  innovador hacia los desafíos tecnológicos contemporáneos.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Dominando el <strong>español</strong> (lengua materna), el <strong>francés</strong> (B2) 
                  y el <strong>inglés</strong> (B2), me intereso particularmente en el desarrollo web 
                  y móvil, IoT, sistemas embebidos e inteligencia artificial. Mi curiosidad 
                  me impulsa a explorar nuevas tecnologías y crear aplicaciones innovadoras.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Mi objetivo es contribuir a proyectos que empujen los límites de la tecnología, 
                  combinando mis habilidades técnicas con una visión creativa para desarrollar 
                  soluciones que tengan un impacto positivo en la sociedad.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['IoT', 'Desarrollo Web', 'Inteligencia Artificial', 'Innovación'].map((tag) => (
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
              "Creo firmemente que la tecnología debe servir a la humanidad y que la innovación 
              nace de la curiosidad y la perseverancia."
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