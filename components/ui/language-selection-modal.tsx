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
  const timer = setTimeout(() => {
    setIsOpen(true);
  }, 500);

  return () => clearTimeout(timer);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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