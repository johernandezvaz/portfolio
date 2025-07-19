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
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
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
      label: 'Téléphone',
      value: '+52 614 397 7741',
      href: 'tel:+526143977741'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Chihuahua, Mexique',
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
      label: 'Kaggle',
      href: 'https://www.kaggle.com/maikua/code',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Contactez-moi"
            subtitle="N'hésitez pas à me contacter pour discuter d'opportunités de collaboration ou de projets innovants"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">
                    Envoyez-moi un message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom complet *</Label>
                        <Input
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Votre nom complet"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Adresse email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sujet">Sujet *</Label>
                      <Input
                        id="sujet"
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleInputChange}
                        placeholder="L'objet de votre message"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Votre message détaillé..."
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
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
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
                  <CardTitle>Informations de contact</CardTitle>
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
                  <CardTitle>Plateformes professionnelles</CardTitle>
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
                    Connectons-nous pour échanger sur nos intérêts technologiques 
                    et explorer des opportunités de collaboration.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-to-r from-[#0A192F]/5 to-[#C5A880]/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Disponibilité
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Je suis actuellement disponible pour des projets de développement, 
                    des collaborations techniques, et des discussions sur l'innovation 
                    technologique.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Fuseau horaire :</strong> CST (UTC-6)
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