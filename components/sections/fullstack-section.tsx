"use client";

import { useState } from "react";
import {
  ExternalLink,
  Layers,
  Server,
  Database,
  Layout,
  Cloud,
  CheckCircle2,
  Clock,
  Truck,
  ArrowUpRight
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { fullstackProjects } from "@/lib/fullstack-projects";

export default function FullStackSection() {
  const { language } = useLanguage();
  const lang = (language || 'es') as 'es' | 'en' | 'fr';

  const sectionHeaders = {
    es: {
      badge: "Desarrollo End-to-End",
      title: "Full Stack Projects",
      subtitle: "Aplicaciones web completas diseñadas y desplegadas con arquitecturas backend robustas, bases de datos relacionales e interfaces interactivas.",
      techStackTitle: "Tecnologías & Arquitectura",
      featuresTitle: "Características Principales",
      liveDemo: "Abrir Aplicación",
      statusLive: "En Producción",
    },
    en: {
      badge: "End-to-End Development",
      title: "Full Stack Projects",
      subtitle: "Complete web applications built and deployed with solid backend architectures, relational databases, and interactive user interfaces.",
      techStackTitle: "Tech Stack & Architecture",
      featuresTitle: "Core Features",
      liveDemo: "Open Application",
      statusLive: "Live in Production",
    },
    fr: {
      badge: "Développement End-to-End",
      title: "Projets Full Stack",
      subtitle: "Applications web complètes conçues et déployées avec des architectures backend robustes, des bases de données relationnelles et des interfaces interactives.",
      techStackTitle: "Technologies & Architecture",
      featuresTitle: "Fonctionnalités Clés",
      liveDemo: "Ouvrir l'application",
      statusLive: "En Production",
    },
  };

  const header = sectionHeaders[lang] || sectionHeaders.es;

  const getTechIcon = (category: string) => {
    switch (category) {
      case 'backend':
        return <Server style={{ width: '16px', height: '16px', color: '#0070d1' }} />;
      case 'database':
        return <Database style={{ width: '16px', height: '16px', color: '#00a87e' }} />;
      case 'frontend':
        return <Layout style={{ width: '16px', height: '16px', color: '#e61e49' }} />;
      case 'devops':
        return <Cloud style={{ width: '16px', height: '16px', color: '#ec7e00' }} />;
      default:
        return <Layers style={{ width: '16px', height: '16px', color: '#494fdf' }} />;
    }
  };

  return (
    <section
      id="fullstack-projects"
      style={{
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        padding: '88px 24px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >

      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(0, 112, 209, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 112, 209, 0.12)',
              border: '1px solid rgba(0, 112, 209, 0.3)',
              marginBottom: '16px',
            }}
          >
            <Layers style={{ width: '14px', height: '14px', color: '#38a5ff' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color: '#60b5ff',
              }}
            >
              {header.badge}
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.48px',
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            {header.title}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.56,
              letterSpacing: '-0.09px',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '650px',
              margin: '0 auto',
            }}
          >
            {header.subtitle}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {fullstackProjects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: '#141416',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: 'clamp(24px, 4vw, 40px)',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '36px',
                  alignItems: 'start',
                }}
              >

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(0, 168, 126, 0.12)',
                        border: '1px solid rgba(0, 168, 126, 0.3)',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#00d49d',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: '#00d49d',
                          boxShadow: '0 0 8px #00d49d',
                        }}

                      />
                      {project.status[lang] || project.status.es}
                    </div>

                    <span
                      style={{
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(28px, 3vw, 36px)',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <Truck style={{ width: '30px', height: '30px', color: '#0070d1' }} />
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#38a5ff',
                        lineHeight: 1.4,
                      }}
                    >
                      {project.tagline[lang] || project.tagline.es}
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.76)',
                      margin: 0,
                    }}
                  >
                    {project.description[lang] || project.description.es}
                  </p>

                  {/* Core Features */}
                  <div style={{ marginTop: '8px' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '12px',
                      }}
                    >
                      {header.featuresTitle}
                    </h4>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      {project.features.map((feat, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            fontFamily: 'var(--font-body)',
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.4,
                          }}
                        >
                          <CheckCircle2
                            style={{
                              width: '16px',
                              height: '16px',
                              color: '#00a87e',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          />
                          <span>{feat[lang] || feat.es}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div style={{ paddingTop: '12px' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: '#0070d1',
                        color: '#ffffff',
                        padding: '12px 24px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '15px',
                        boxShadow: '0 4px 14px rgba(0, 112, 209, 0.4)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#005bb0';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#0070d1';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      <span>{header.liveDemo}</span>
                      <ExternalLink style={{ width: '16px', height: '16px' }} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Tech Stack Cards & Architectural Breakdown */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#ffffff',
                        letterSpacing: '0.2px',
                        margin: 0,
                      }}
                    >
                      {header.techStackTitle}
                    </h4>
                    <span
                      style={{
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      Architecture & Stack
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: '12px',
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.06)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {getTechIcon(tech.category)}
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: 'rgba(255, 255, 255, 0.45)',
                                fontWeight: 600,
                              }}
                            >
                              {tech.layer[lang] || tech.layer.es}
                            </div>
                            <div
                              style={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#ffffff',
                              }}
                            >
                              {tech.technology}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick URL Preview Card */}
                  <div
                    style={{
                      marginTop: '8px',
                      padding: '16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 112, 209, 0.08)',
                      border: '1px dashed rgba(0, 112, 209, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      <div style={{ fontSize: '11px', color: '#60b5ff', fontWeight: 600 }}>URL DE PRODUCCIÓN</div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '13px',
                          color: '#ffffff',
                          textDecoration: 'underline',
                          fontFamily: 'monospace',
                        }}
                      >
                        {project.url}
                      </a>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(0, 112, 209, 0.2)',
                        color: '#60b5ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      aria-label="Visit link"
                    >
                      <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
