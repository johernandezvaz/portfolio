'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('a-propos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <section
      id="accueil"
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
                  <span>Étudiant International - Mexique</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
                  Bonjour, je suis
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0A192F] to-[#C5A880]">
                    José de Jesús Hernández Vázquez
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Ingénieur en systèmes informatiques spécialisé en IoT et développement web, 
                  passionné par l'innovation technologique et l'intelligence artificielle.
                </p>

                <p className="text-lg text-muted-foreground italic">
                  "La technologie au service de l'innovation et du progrès humain."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Télécharger mon CV
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToNext}>
                  Découvrir mon parcours
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
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Portrait professionnel de José de Jesús Hernández Vázquez"
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