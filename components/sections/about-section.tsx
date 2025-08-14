'use client';

import { Globe, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';

const AboutSection = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Globe,
      title: t.about.highlights.international.title,
      description: t.about.highlights.international.description,
    },
    {
      icon: BookOpen,
      title: t.about.highlights.technical.title,
      description: t.about.highlights.technical.description,
    },
    {
      icon: Users,
      title: t.about.highlights.professional.title,
      description: t.about.highlights.professional.description,
    },
    {
      icon: Target,
      title: t.about.highlights.innovation.title,
      description: t.about.highlights.innovation.description,
    },
  ];

  return (
    <section id="acerca-de" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title={t.about.title}
            subtitle={t.about.subtitle}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.paragraph1}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {t.about.paragraph2}
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {t.about.paragraph3}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {t.about.tags.map((tag) => (
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
              {t.about.quote}
            </blockquote>
            <cite className="block mt-4 text-sm font-medium text-[#C5A880]">
              {t.about.quoteAuthor}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;