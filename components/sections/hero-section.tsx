'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('acerca-de');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '64px', // nav offset
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px',
          width: '100%',
        }}
      >
        <div
          className="grid lg:grid-cols-2"
          style={{ gap: '64px', alignItems: 'center' }}
        >
          {/* Left Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              textAlign: 'left',
            }}
            className="text-center lg:text-left"
          >
            {/* Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'rgba(255,255,255,0.72)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: 1.43,
              }}
              className="justify-center lg:justify-start"
            >
              <MapPin style={{ width: '14px', height: '14px', flexShrink: 0 }} />
              <span>{t.hero.location}</span>
            </div>

            {/* Headline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.56,
                  color: 'rgba(255,255,255,0.72)',
                }}
              >
                {t.hero.greeting}
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  fontWeight: 500,
                  lineHeight: 1.0,
                  letterSpacing: '-0.8px',
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {t.hero.name}
              </h1>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 1.56,
                letterSpacing: '-0.09px',
                color: 'rgba(255,255,255,0.72)',
                maxWidth: '480px',
              }}
              className="mx-auto lg:mx-0"
            >
              {t.hero.description}
            </p>

            {/* Quote */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.48)',
                fontStyle: 'italic',
                borderLeft: '2px solid rgba(255,255,255,0.12)',
                paddingLeft: '16px',
                maxWidth: '480px',
              }}
              className="mx-auto lg:mx-0 text-left"
            >
              {t.hero.quote}
            </p>

            {/* CTA */}
            <div
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
              className="justify-center lg:justify-start"
            >
              <button
                onClick={scrollToNext}
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {t.hero.discoverJourney}
                <ChevronDown style={{ width: '16px', height: '16px' }} />
              </button>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            className="justify-center lg:justify-end"
          >
            <div
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                flexShrink: 0,
              }}
              className="w-64 h-64 md:w-80 md:h-80"
            >
              {/* Image container */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.12)',
                  position: 'relative',
                }}
              >
                <Image
                  src="/jose-headshot.jpg"
                  alt="Retrato profesional de José de Jesús Hernández Vázquez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.32)',
          cursor: 'pointer',
          transition: 'color 0.15s ease',
        }}
        onClick={scrollToNext}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.72)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)'; }}
      >
        <ChevronDown style={{ width: '24px', height: '24px' }} />
      </div>
    </section>
  );
};

export default HeroSection;