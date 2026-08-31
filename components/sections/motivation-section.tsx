'use client';

import { Target, BookOpen, Users, Lightbulb, Heart } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';

const MotivationSection = () => {
  const { t } = useLanguage();

  const motivations = [
    {
      icon: Target,
      title: t.motivation.motivations.innovation.title,
      description: t.motivation.motivations.innovation.description,
    },
    {
      icon: BookOpen,
      title: t.motivation.motivations.learning.title,
      description: t.motivation.motivations.learning.description,
    },
    {
      icon: Users,
      title: t.motivation.motivations.collaboration.title,
      description: t.motivation.motivations.collaboration.description,
    },
    {
      icon: Lightbulb,
      title: t.motivation.motivations.sustainability.title,
      description: t.motivation.motivations.sustainability.description,
    },
  ];

  const expertiseAreas = [
    {
      title: t.motivation.expertiseAreas.iot.title,
      description: t.motivation.expertiseAreas.iot.description,
    },
    {
      title: t.motivation.expertiseAreas.ai.title,
      description: t.motivation.expertiseAreas.ai.description,
    },
    {
      title: t.motivation.expertiseAreas.fullstack.title,
      description: t.motivation.expertiseAreas.fullstack.description,
    },
  ];

  return (
    <section
      id="objetivo"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '88px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle
          title={t.motivation.title}
          subtitle={t.motivation.subtitle}
          mode="dark"
        />

        <div
          className="grid lg:grid-cols-3"
          style={{ gap: '16px', marginBottom: '16px' }}
        >
          {/* Main Vision Card */}
          <div
            className="lg:col-span-2"
            style={{
              backgroundColor: '#16181a',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {/* One brand stamp of cobalt violet per viewport */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#494fdf',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Heart style={{ width: '18px', height: '18px', color: '#ffffff' }} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.33,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {t.motivation.visionTitle}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                t.motivation.paragraph1,
                t.motivation.paragraph2,
                t.motivation.paragraph3,
                t.motivation.paragraph4,
                t.motivation.paragraph5,
              ].map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: '0.24px',
                    color: 'rgba(255,255,255,0.72)',
                    margin: 0,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Motivation Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {motivations.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#16181a',
                  borderRadius: '20px',
                  padding: '20px 24px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  flex: '1',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <item.icon style={{ width: '16px', height: '16px', color: '#ffffff' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#ffffff',
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: 1.43,
                      color: 'rgba(255,255,255,0.72)',
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div
          style={{
            backgroundColor: '#16181a',
            borderRadius: '20px',
            padding: '40px 32px',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '24px',
              fontWeight: 500,
              lineHeight: 1.33,
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            {t.motivation.expertiseTitle}
          </h3>
          <div
            className="grid md:grid-cols-3"
            style={{ gap: '32px' }}
          >
            {expertiseAreas.map((interest, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  paddingTop: index > 0 ? undefined : undefined,
                  borderLeft: index > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  paddingLeft: index > 0 ? '32px' : 0,
                }}
                className={index > 0 ? 'border-left-dark' : ''}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {interest.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: 1.43,
                    color: 'rgba(255,255,255,0.72)',
                    margin: 0,
                  }}
                >
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;