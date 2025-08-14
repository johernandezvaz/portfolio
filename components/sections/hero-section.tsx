'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('acerca-de');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{t.hero.location}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
                  {t.hero.greeting}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#C5A880]">
                    {t.hero.name}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  {t.hero.description}
                </p>

                <p className="text-lg text-muted-foreground italic">
                  {t.hero.quote}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/cv_es_johernandez.pdf';
                    link.download = 'CV_Jose_Hernandez_Vazquez.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  {t.hero.downloadCV}
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToNext}>
                  {t.hero.discoverJourney}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <Image
                      src="/jose-headshot.jpg"
                      alt="Retrato profesional de José de Jesús Hernández Vázquez"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-[#C5A880] text-white p-3 rounded-full shadow-lg animate-bounce">
                  <span className="text-sm font-semibold">💻</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#0A192F] text-white p-3 rounded-full shadow-lg animate-bounce delay-1000">
                  <span className="text-sm font-semibold">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;