'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const ContactSection = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Configuración de EmailJS - Reemplaza con tus credenciales
  const EMAILJS_SERVICE_ID = 'service_dlnqh42'
  const EMAILJS_TEMPLATE_ID = 'template_g1hnfsj'
  const EMAILJS_PUBLIC_KEY = 'Q-_MQuQwXVq6AgeBy'

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

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nom,
          from_email: formData.email,
          subject: formData.sujet,
          message: formData.message,
          to_name: 'José Hernández', // Tu nombre
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', result.text);
      
      // Mostrar mensaje de éxito
      alert(t.contact.successMessage);
      
      // Limpiar formulario
      setFormData({
        nom: '',
        email: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar email:', error);
      alert(t.contact.errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: 'johernandezvaz@gmail.com',
      href: 'mailto:johernandezvaz@gmail.com'
    },
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: '+52 614 397 7741',
      href: 'tel:+526143977741'
    },
    {
      icon: MapPin,
      label: t.contact.labels.location,
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.contact.sendMessage}
                </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                          {t.contact.fullName} *
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder={t.contact.placeholders.fullName}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          {t.contact.email} *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t.contact.placeholders.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">
                        {t.contact.subject} *
                      </label>
                      <input
                        id="sujet"
                        name="sujet"
                        type="text"
                        value={formData.sujet}
                        onChange={handleInputChange}
                        placeholder={t.contact.placeholders.subject}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        {t.contact.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t.contact.placeholders.message}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-br from-[#0A192F] to-[#C5A880] text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center group"
                    >
                      {isLoading ? (
                        <span>{t.contact.sending}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          {t.contact.send}
                        </>
                      )}
                    </button>
                  </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.contactInfo}</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.professionalPlatforms}</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 ${link.color}`}
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="sr-only">{link.label}</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {t.contact.connectText}
                  </p>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {t.contact.availability}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t.contact.availabilityText}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>{t.contact.timezone}</strong>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;