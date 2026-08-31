'use client';

import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';

const EducationSection = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t.education.degrees.engineering.degree,
      institution: t.education.degrees.engineering.institution,
      location: 'Chihuahua, México',
      period: 'Enero 2022 - Junio 2026',
      description: t.education.degrees.engineering.description,
      achievements: t.education.degrees.engineering.achievements,
      status: 'completed',
    },
    {
      degree: t.education.degrees.license.degree,
      institution: t.education.degrees.license.institution,
      location: 'Francia',
      period: 'Septiembre 2020 - Junio 2021',
      description: t.education.degrees.license.description,
      achievements: t.education.degrees.license.achievements,
      status: 'completed',
    },
    {
      degree: t.education.degrees.tsu.degree,
      institution: t.education.degrees.tsu.institution,
      location: 'Chihuahua, México',
      period: 'Septiembre 2018 - Agosto 2020',
      description: t.education.degrees.tsu.description,
      achievements: t.education.degrees.tsu.achievements,
      status: 'completed',
    },
  ];

  const stats = [
    { label: t.education.stats.yearsOfStudy, value: '6+' },
    { label: t.education.stats.institutions, value: '3' },
    { label: t.education.stats.languagesMastered, value: '3' },
    { label: t.education.stats.projectsCompleted, value: '20+' },
  ];

  return (
    <section
      id="trayectoria"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '88px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle
          title={t.education.title}
          subtitle={t.education.subtitle}
          mode="dark"
        />

        <div style={{ position: 'relative' }}>
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: 'rgba(255,255,255,0.12)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {education.map((item, index) => (
              <div
                key={index}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}
              >

                <div
                  className="hidden md:flex"
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    flexShrink: 0,
                    marginRight: '48px',
                    marginTop: '32px',
                  }}
                >
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '9999px',
                      backgroundColor: '#494fdf',
                      border: '2px solid #000000',
                      boxShadow: '0 0 0 3px rgba(73,79,223,0.24)',
                      marginLeft: '14px',
                    }}
                  />
                </div>

                <div
                  className="card-dark w-full"
                  style={{
                    flex: 1,
                  }}
                >
                  <div
                    className="grid lg:grid-cols-3"
                    style={{ gap: '32px' }}
                  >
                    <div
                      style={{
                        gridColumn: 'span 2',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '20px',
                          fontWeight: 500,
                          lineHeight: 1.4,
                          color: '#ffffff',
                          margin: 0,
                        }}
                      >
                        {item.degree}
                      </h3>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '16px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'rgba(255,255,255,0.72)',
                            fontSize: '14px',
                            fontWeight: 400,
                          }}
                        >
                          <GraduationCap style={{ width: '14px', height: '14px' }} />
                          <span>{item.institution}</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'rgba(255,255,255,0.72)',
                            fontSize: '14px',
                            fontWeight: 400,
                          }}
                        >
                          <MapPin style={{ width: '14px', height: '14px' }} />
                          <span>{item.location}</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'rgba(255,255,255,0.48)',
                            fontSize: '13px',
                            fontWeight: 400,
                          }}
                        >
                          <Calendar style={{ width: '13px', height: '13px' }} />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <p
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
                        {item.description}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <h4
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontFamily: 'var(--font-display)',
                          fontSize: '14px',
                          fontWeight: 600,
                          letterSpacing: '0.24px',
                          color: '#ffffff',
                          margin: 0,
                        }}
                      >
                        <Award style={{ width: '14px', height: '14px', color: '#494fdf' }} />
                        {t.education.keyPoints}
                      </h4>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              fontWeight: 400,
                              lineHeight: 1.43,
                              color: 'rgba(255,255,255,0.72)',
                            }}
                          >
                            <div
                              style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '9999px',
                                backgroundColor: '#494fdf',
                                marginTop: '6px',
                                flexShrink: 0,
                              }}
                            />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: '32px',
            marginTop: '80px',
            paddingTop: '80px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.4px',
                  color: '#ffffff',
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: 1.43,
                  color: 'rgba(255,255,255,0.72)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;