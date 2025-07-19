'use client';

import { Target, BookOpen, Users, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';

const MotivationSection = () => {
  const motivations = [
    {
      icon: Target,
      title: 'Innovación Tecnológica',
      description: 'Contribuir al desarrollo de soluciones IoT e IA que transformen nuestro día a día',
    },
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      description: 'Explorar constantemente nuevas tecnologías y metodologías de desarrollo',
    },
    {
      icon: Users,
      title: 'Colaboración Internacional',
      description: 'Trabajar con equipos multiculturales en proyectos de alcance mundial',
    },
    {
      icon: Lightbulb,
      title: 'Soluciones Sostenibles',
      description: 'Desarrollar tecnologías respetuosas con el medio ambiente y socialmente responsables',
    },
  ];

  return (
    <section id="objetivo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Mis Objetivos Profesionales"
            subtitle="Mi visión para el futuro de la tecnología y mi papel en la innovación"
          />

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Motivation Letter */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl font-playfair">
                    <Heart className="w-6 h-6 text-[#C5A880]" />
                    <span>Mi Visión Tecnológica</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Como ingeniero en sistemas informáticos apasionado por la innovación, 
                    me dedico al desarrollo de soluciones tecnológicas que tienen un impacto 
                    positivo en la sociedad. Mi experiencia en <strong>IoT</strong>, <strong>inteligencia 
                    artificial</strong> y <strong>desarrollo web</strong> me permite crear 
                    sistemas integrados que responden a los desafíos contemporáneos.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Mi trayectoria académica y profesional me ha permitido desarrollar un enfoque 
                    holístico de la tecnología, combinando aspectos técnicos con una 
                    comprensión profunda de las necesidades del usuario. Me interesan particularmente 
                    los <strong>sistemas embebidos</strong>, la <strong>optimización energética</strong> 
                    y las <strong>aplicaciones de IA para el bien social</strong>.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Mis proyectos, como <strong>SigmundFiles</strong> (plataforma médica con IA) 
                    y <strong>Lumier</strong> (sistema de detección inteligente), ilustran mi 
                    capacidad para transformar ideas innovadoras en soluciones concretas. Creo 
                    firmemente que la tecnología debe ser accesible, sostenible y al servicio de 
                    la humanidad.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Mi objetivo es continuar desarrollando tecnologías que empujen 
                    los límites de lo posible, manteniendo un enfoque en el impacto social 
                    y ambiental. Deseo contribuir a proyectos que den forma 
                    al futuro de nuestra sociedad digital.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Con mi dominio de varios idiomas y mi experiencia internacional, 
                    estoy preparado para enfrentar los desafíos tecnológicos del mañana en un 
                    entorno multicultural y colaborativo.
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
                Áreas de Experiencia e Interés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  {
                    title: 'Internet de las Cosas (IoT)',
                    description: 'Desarrollo de sistemas embebidos y soluciones conectadas'
                  },
                  {
                    title: 'Inteligencia Artificial',
                    description: 'Machine Learning, Computer Vision y procesamiento de lenguaje natural'
                  },
                  {
                    title: 'Desarrollo Full Stack',
                    description: 'Aplicaciones web modernas y arquitecturas escalables'
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