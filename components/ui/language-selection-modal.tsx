'use client';

import { useState, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useLanguage } from '@/hooks/use-language';
import { Language } from '@/lib/i18n';

const languages = [
  { 
    code: 'es' as Language, 
    name: 'Español', 
    flag: '🇪🇸',
    description: 'Continuar en español'
  },
  { 
    code: 'en' as Language, 
    name: 'English', 
    flag: '🇺🇸',
    description: 'Continue in English'
  },
  { 
    code: 'fr' as Language, 
    name: 'Français', 
    flag: '🇫🇷',
    description: 'Continuer en français'
  },
];

export function LanguageSelectionModal() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('es');

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem('portfolio-language-selected');
    
    if (!hasSelectedLanguage) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLanguageSelect = (langCode: Language) => {
    setSelectedLanguage(langCode);
  };

  const handleConfirm = () => {
    setLanguage(selectedLanguage);
    localStorage.setItem('portfolio-language-selected', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" hideCloseButton>
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-full flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <DialogTitle className="text-2xl font-playfair">
            Selecciona tu idioma / Choose your language / Choisissez votre langue
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Select your preferred language to continue
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 mt-6">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between hover:shadow-md ${
                selectedLanguage === lang.code
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{lang.flag}</span>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{lang.name}</div>
                  <div className="text-sm text-muted-foreground">{lang.description}</div>
                </div>
              </div>
              {selectedLanguage === lang.code && (
                <Check className="w-5 h-5 text-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Button 
            onClick={handleConfirm}
            className="w-full bg-gradient-to-r from-[#0A192F] to-[#C5A880] hover:opacity-90"
            size="lg"
          >
            Continuar / Continue / Continuer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
</parameter>
</invoke>

<invoke name="str_replace_editor">
<parameter name="command">str_replace</parameter>
<parameter name="path">components/ui/dialog.tsx</parameter>
<parameter name="old_str">const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));</parameter>
<parameter name="new_str">const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    hideCloseButton?: boolean;
  }
>(({ className, children, hideCloseButton = false, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}
    >
      {children}
      {!hideCloseButton && (
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
));</parameter>
</invoke>

<invoke name="str_replace_editor">
<parameter name="command">str_replace</parameter>
<parameter name="path">app/page.tsx</parameter>
<parameter name="old_str">import { useEffect, useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import EducationSection from '@/components/sections/education-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import MotivationSection from '@/components/sections/motivation-section';
import ContactSection from '@/components/sections/contact-section';</parameter>
<parameter name="new_str">import { useEffect, useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import EducationSection from '@/components/sections/education-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import MotivationSection from '@/components/sections/motivation-section';
import ContactSection from '@/components/sections/contact-section';
import { LanguageSelectionModal } from '@/components/ui/language-selection-modal';</parameter>
</invoke>

<invoke name="str_replace_editor">
<parameter name="command">str_replace</parameter>
<parameter name="path">app/page.tsx</parameter>
<parameter name="old_str">  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <MotivationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );</parameter>
<parameter name="new_str">  return (
    <div className="min-h-screen bg-background">
      <LanguageSelectionModal />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <MotivationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );</parameter>
</invoke>