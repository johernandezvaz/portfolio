'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
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
      alert('¡Mensaje enviado exitosamente! Te responderé a la brevedad.');
      
      // Limpiar formulario
      setFormData({
        nom: '',
        email: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.');
    } finally {
      setIsLoading(false);
    }
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctame</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No dudes en contactarme para discutir oportunidades de colaboración o proyectos innovadores
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Envíame un mensaje
                </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                          Nombre completo *
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="text"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Dirección de email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu.email@ejemplo.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">
                        Asunto *
                      </label>
                      <input
                        id="sujet"
                        name="sujet"
                        type="text"
                        value={formData.sujet}
                        onChange={handleInputChange}
                        placeholder="El asunto de tu mensaje"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tu mensaje detallado..."
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
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Enviar mensaje
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Información de contacto</h3>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plataformas profesionales</h3>
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
                    Conectemos para intercambiar ideas sobre nuestros intereses tecnológicos 
                    y explorar oportunidades de colaboración.
                  </p>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Disponibilidad
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Actualmente estoy disponible para proyectos de desarrollo, 
                    colaboraciones técnicas y discusiones sobre innovación 
                    tecnológica.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Zona horaria:</strong> CST (UTC-6)
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