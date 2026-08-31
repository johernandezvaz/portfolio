'use client';

import { Globe, BookOpen, Users, Target } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Globe,
      title: t.about.highlights.international.title,
      description: t.about.highlights.international.description,
    },
    {
      icon: BookOpen,
      title: t.about.highlights.technical.title,
      description: t.about.highlights.technical.description,
    },
    {
      icon: Users,
      title: t.about.highlights.professional.title,
      description: t.about.highlights.professional.description,
    },
    {
      icon: Target,
      title: t.about.highlights.innovation.title,
      description: t.about.highlights.innovation.description,
    },
  ];

  return (
    <section
      id="acerca-de"
      style={{
        backgroundColor: '#ffffff',
        color: '#191c1f',
        padding: '88px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle
          title={t.about.title}
          subtitle={t.about.subtitle}
          mode="light"
        />

        <div
          className="grid lg:grid-cols-2"
          style={{ gap: '64px', alignItems: 'start' }}
        >
          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.56,
                  letterSpacing: '-0.09px',
                  color: '#505a63',
                }}
              >
                {t.about.paragraph1}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.56,
                  letterSpacing: '-0.09px',
                  color: '#505a63',
                }}
              >
                {t.about.paragraph2}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.56,
                  letterSpacing: '-0.09px',
                  color: '#505a63',
                }}
              >
                {t.about.paragraph3}
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {t.about.tags.map((tag) => (
                <span key={tag} className="badge-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              style={{
                borderLeft: '2px solid #e2e2e7',
                paddingLeft: '24px',
                margin: 0,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.56,
                  color: '#505a63',
                  fontStyle: 'italic',
                  marginBottom: '8px',
                }}
              >
                {t.about.quote}
              </p>
              <cite
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.24px',
                  color: '#191c1f',
                  fontStyle: 'normal',
                }}
              >
                {t.about.quoteAuthor}
              </cite>
            </blockquote>
          </div>

          {/* Highlights Grid */}
          <div
            className="grid sm:grid-cols-2"
            style={{ gap: '16px' }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-light"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'border-color 0.2s ease',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#191c1f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <item.icon
                    style={{ width: '20px', height: '20px', color: '#ffffff' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '16px',
                      fontWeight: 600,
                      lineHeight: 1.5,
                      letterSpacing: '0.16px',
                      color: '#191c1f',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1.43,
                      color: '#505a63',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;