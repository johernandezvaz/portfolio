'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import SectionTitle from '@/components/ui/section-title';

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

  const EMAILJS_SERVICE_ID = 'service_a5uqni8';
  const EMAILJS_TEMPLATE_ID = 'template_iv0r0jb';
  const EMAILJS_PUBLIC_KEY = 'OymTMs4wyLL2auEw7';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
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
      setIsSubmitted(true);
      setFormData({ first_name: '', last_name: '', from_email: '', phone: '', service_type: '', message: '' });
    } catch (error) {
      console.error('Error al enviar email:', error);
      alert(t.contact.errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail,   label: t.contact.labels.email,    value: 'johernandezvaz@gmail.com',   href: 'mailto:johernandezvaz@gmail.com' },
    { icon: Phone,  label: t.contact.labels.phone,    value: '+52 614 539 26 67',           href: 'tel:+526145392667' },
    { icon: MapPin, label: t.contact.labels.location, value: 'Chihuahua, México',           href: '#' },
  ];

  const socialLinks = [
    { icon: Github,   label: 'GitHub',   href: 'https://github.com/johernandezvaz' },
    { icon: Mail,     label: 'Email',    href: 'mailto:johernandezvaz@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thisisvazqz/' },
  ];

  const isSpanish = t.contact.fullName.includes('Nombre');

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e2e7',
    borderRadius: '20px',
    padding: '32px',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.24px',
    color: '#191c1f',
    marginBottom: '8px',
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#ffffff',
        color: '#191c1f',
        padding: '88px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          mode="light"
        />

        <div
          className="grid lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {/* Contact Form */}
          <div className="lg:col-span-2" style={cardStyle}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 500,
                lineHeight: 1.33,
                color: '#191c1f',
                marginBottom: '28px',
              }}
            >
              {t.contact.sendMessage}
            </h3>

            {isSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '48px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '9999px',
                    backgroundColor: '#f4f4f4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Send style={{ width: '28px', height: '28px', color: '#494fdf' }} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#191c1f',
                      marginBottom: '8px',
                    }}
                  >
                    {isSpanish ? '¡Recibí tu mensaje con éxito!' : 'Message received successfully!'}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#505a63' }}>
                    {isSpanish ? 'Pronto estaré en contacto contigo.' : 'I will be in touch with you soon.'}
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#494fdf',
                    padding: '4px 0',
                    textDecoration: 'underline',
                  }}
                >
                  {isSpanish ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid md:grid-cols-2" style={{ gap: '16px' }}>
                  <div>
                    <label htmlFor="first_name" style={labelStyle}>
                      {isSpanish ? 'Nombre(s)' : 'First Name'} *
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder={isSpanish ? 'Tu nombre' : 'Your first name'}
                      className="input-design"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" style={labelStyle}>
                      {isSpanish ? 'Apellidos' : 'Last Name'} *
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder={isSpanish ? 'Tus apellidos' : 'Your last name'}
                      className="input-design"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="from_email" style={labelStyle}>
                    {t.contact.email} *
                  </label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    placeholder={t.contact.placeholders.email}
                    className="input-design"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2" style={{ gap: '16px' }}>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>
                      {t.contact.labels.phone} *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+52 123 456 7890"
                      className="input-design"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service_type" style={labelStyle}>
                      {isSpanish ? 'Servicio de interés' : 'Service of interest'} *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        id="service_type"
                        name="service_type"
                        value={formData.service_type}
                        onChange={handleInputChange}
                        className="select-design"
                        required
                      >
                        <option value="">{isSpanish ? 'Selecciona un servicio' : 'Select a service'}</option>
                        <option value="Desarrollo Web (Landing Page)">Desarrollo Web (Landing Page)</option>
                        <option value="Desarrollo App Web (Software a medida)">Desarrollo App Web (Software a medida)</option>
                        <option value="Automatización">Automatización</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>
                    {t.contact.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.placeholders.message}
                    rows={5}
                    className="textarea-design"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-dark"
                  style={{
                    width: '100%',
                    opacity: isLoading ? 0.6 : 1,
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isLoading ? (
                    <span>{t.contact.sending}</span>
                  ) : (
                    <>
                      <Send style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                      {t.contact.send}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Contact Details */}
            <div style={cardStyle}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#191c1f',
                  marginBottom: '20px',
                }}
              >
                {t.contact.contactInfo}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contactInfo.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        backgroundColor: '#191c1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <item.icon style={{ width: '16px', height: '16px', color: '#ffffff' }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#191c1f',
                          margin: 0,
                        }}
                      >
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#505a63',
                          textDecoration: 'none',
                          transition: 'color 0.15s ease',
                        }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#376cd5'; }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#505a63'; }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div style={cardStyle}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#191c1f',
                  marginBottom: '16px',
                }}
              >
                {t.contact.professionalPlatforms}
              </h3>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    aria-label={link.label}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '9999px',
                      border: '1px solid #e2e2e7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#505a63',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#191c1f';
                      el.style.borderColor = '#191c1f';
                      el.style.backgroundColor = '#f4f4f4';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#505a63';
                      el.style.borderColor = '#e2e2e7';
                      el.style.backgroundColor = 'transparent';
                    }}
                  >
                    <link.icon style={{ width: '18px', height: '18px' }} />
                  </a>
                ))}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: '#8d969e',
                  margin: 0,
                }}
              >
                {t.contact.connectText}
              </p>
            </div>

            {/* Availability */}
            <div
              style={{
                backgroundColor: '#f4f4f4',
                borderRadius: '20px',
                padding: '24px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#191c1f',
                  marginBottom: '8px',
                }}
              >
                {t.contact.availability}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: 1.43,
                  color: '#505a63',
                  marginBottom: '8px',
                }}
              >
                {t.contact.availabilityText}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: '#8d969e',
                  margin: 0,
                }}
              >
                <strong style={{ color: '#191c1f' }}>{t.contact.timezone}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;