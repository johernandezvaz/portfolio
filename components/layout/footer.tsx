'use client';

import { Github, Mail, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-playfair font-semibold mb-2">
              José de Jesús Hernández Vázquez
            </h3>
            <p className="text-sm text-muted-foreground">
              Ingeniero en sistemas informáticos apasionado por la innovación tecnológica
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="mailto:johernandezvaz@gmail.com"
                className="flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/johernandezvaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.kaggle.com/maikua/code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="sr-only">Kaggle</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
            <span>© {currentYear} José de Jesús Hernández Vázquez. Creado con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>para la innovación tecnológica</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;