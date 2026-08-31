'use client';

import { Github, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/johernandezvaz',
      icon: Github,
    },
    {
      label: 'Email',
      href: 'mailto:johernandezvaz@gmail.com',
      icon: Mail,
    },
    {
      label: 'Kaggle',
      href: 'https://www.kaggle.com/maikua/code',
      icon: ExternalLink,
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#000000',
        color: 'rgba(255,255,255,0.72)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '48px',
          }}
          className="md:flex-row md:items-start md:justify-between"
        >
          <div>
            <p
              style={{
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.24px',
                marginBottom: '8px',
              }}
            >
              José de Jesús Hernández Vázquez
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: 1.43,
                color: 'rgba(255,255,255,0.72)',
                maxWidth: '320px',
              }}
            >
              {t.footer.description}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.72)',
                  transition: 'color 0.15s ease, border-color 0.15s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#ffffff';
                  el.style.borderColor = 'rgba(255,255,255,0.4)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = 'rgba(255,255,255,0.72)';
                  el.style.borderColor = 'rgba(255,255,255,0.12)';
                }}
              >
                <link.icon style={{ width: '16px', height: '16px' }} />
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            © {currentYear} José de Jesús Hernández Vázquez. {t.footer.createdWith}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.40)',
            }}
          >
            {t.footer.forInnovation}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;