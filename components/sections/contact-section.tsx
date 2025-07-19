'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from '@/components/ui/section-title';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por tu mensaje. Te responderé a la brevedad.",
      });
      setFormData({
        nom: '',
        email: '',
        sujet: '',
        message: ''
      });
      setIsLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'johernandezvaz@gmail.com',
      href: 'mailto:johernandezvaz@gmail.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 614 397 7741',
      href: 'tel:+526143977741'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Chihuahua, México',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/johernandezvaz',
      color: 'hover:text-gray-900'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:johernandezvaz@gmail.com',
      color: 'hover:text-red-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/thisisvazqz/',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Contáctame"
            subtitle="No dudes en contactarme para discutir oportunidades de colaboración o proyectos innovadores"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">
                    Envíame un mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nombre completo *</Label>
                        <Input
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Dirección de email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu.email@ejemplo.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sujet">Asunto *</Label>
                      <Input
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleInputChange}
                        placeholder="El asunto de tu mensaje"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tu mensaje detallado..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full group"
                    >
                      {isLoading ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-[#C5A880] transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Plataformas profesionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 ${link.color}`}
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="sr-only">{link.label}</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Conectemos para intercambiar ideas sobre nuestros intereses tecnológicos 
                    y explorar oportunidades de colaboración.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-to-r from-[#0A192F]/5 to-[#C5A880]/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Disponibilidad
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Actualmente estoy disponible para proyectos de desarrollo, 
                    colaboraciones técnicas y discusiones sobre innovación 
                    tecnológica.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Zona horaria:</strong> CST (UTC-6)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;