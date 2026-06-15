'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const ContactSection = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    from_email: '',
    phone: '',
    service_type: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Configuración de EmailJS - Reemplaza con tus credenciales
  const EMAILJS_SERVICE_ID = 'service_a5uqni8'
  const EMAILJS_TEMPLATE_ID = 'template_iv0r0jb'
  const EMAILJS_PUBLIC_KEY = 'OymTMs4wyLL2auEw7'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          first_name: formData.first_name,
          last_name: formData.last_name,
          from_email: formData.from_email,
          phone: formData.phone,
          service_type: formData.service_type,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email enviado exitosamente:', result.text);

      // Mostrar mensaje de éxito dinámico
      setIsSubmitted(true);

      // Limpiar formulario
      setFormData({
        first_name: '',
        last_name: '',
        from_email: '',
        phone: '',
        service_type: '',
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
      value: '+52 614 539 26 67',
      href: 'tel:+526145392667'
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
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Send className="w-10 h-10 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-gray-900">
                        {t.contact.fullName.includes('Nombre') ? '¡Recibí tu mensaje con éxito!' : 'Message received successfully!'}
                      </h4>
                      <p className="text-gray-600">
                        {t.contact.fullName.includes('Nombre') ? 'Pronto estaré en contacto contigo.' : 'I will be in touch with you soon.'}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary hover:underline font-medium"
                    >
                      {t.contact.fullName.includes('Nombre') ? 'Enviar otro mensaje' : 'Send another message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                          {t.contact.fullName.includes('Nombre') ? 'Nombre(s)' : 'First Name'} *
                        </label>
                        <input
                          id="first_name"
                          name="first_name"
                          type="text"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          placeholder={t.contact.fullName.includes('Nombre') ? 'Tu nombre' : 'Your first name'}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                          {t.contact.fullName.includes('Nombre') ? 'Apellidos' : 'Last Name'} *
                        </label>
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          value={formData.last_name}
                          onChange={handleInputChange}
                          placeholder={t.contact.fullName.includes('Nombre') ? 'Tus apellidos' : 'Your last name'}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-700">
                        {t.contact.email} *
                      </label>
                      <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        placeholder={t.contact.placeholders.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          {t.contact.labels.phone} *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+52 123 456 7890"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service_type" className="block text-sm font-medium text-gray-700">
                          {t.contact.fullName.includes('Nombre') ? 'Servicio de interés' : 'Service of interest'} *
                        </label>
                        <select
                          id="service_type"
                          name="service_type"
                          value={formData.service_type}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
                          required
                        >
                          <option value="">{t.contact.fullName.includes('Nombre') ? 'Selecciona un servicio' : 'Select a service'}</option>
                          <option value="Desarrollo Web (Landing Page)">Desarrollo Web (Landing Page)</option>
                          <option value="Desarrollo App Web (Software a medida)">Desarrollo App Web (Software a medida)</option>
                          <option value="Automatización">Automatización</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>
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
                )}
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