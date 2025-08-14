'use client';

import { Target, BookOpen, Users, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';

const MotivationSection = () => {
  const { t } = useLanguage();
  
  const motivations = [
    {
      icon: Target,
      title: t.motivation.motivations.innovation.title,
      description: t.motivation.motivations.innovation.description,
    },
    {
      icon: BookOpen,
      title: t.motivation.motivations.learning.title,
      description: t.motivation.motivations.learning.description,
    },
    {
      icon: Users,
      title: t.motivation.motivations.collaboration.title,
      description: t.motivation.motivations.collaboration.description,
    },
    {
      icon: Lightbulb,
      title: t.motivation.motivations.sustainability.title,
      description: t.motivation.motivations.sustainability.description,
    },
  ];

  return (
    <section id="objetivo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title={t.motivation.title}
            subtitle={t.motivation.subtitle}
          />

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Motivation Letter */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl font-playfair">
                    <Heart className="w-6 h-6 text-[#C5A880]" />
                    <span>{t.motivation.visionTitle}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.motivation.paragraph1}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {t.motivation.paragraph2}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {t.motivation.paragraph3}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {t.motivation.paragraph4}
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    {t.motivation.paragraph5}
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
                {t.motivation.expertiseTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  {
                    title: t.motivation.expertiseAreas.iot.title,
                    description: t.motivation.expertiseAreas.iot.description
                  },
                  {
                    title: t.motivation.expertiseAreas.ai.title,
                    description: t.motivation.expertiseAreas.ai.description
                  },
                  {
                    title: t.motivation.expertiseAreas.fullstack.title,
                    description: t.motivation.expertiseAreas.fullstack.description
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