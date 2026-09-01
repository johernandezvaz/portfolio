"use client";

import { ExternalLink, Layers, Truck } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { fullstackProjects } from "@/lib/fullstack-projects";

export default function FullStackSection() {
  const { language } = useLanguage();
  const lang = (language || "es") as "es" | "en" | "fr";

  const sectionHeaders = {
    es: {
      badge: "Desarrollo End-to-End",
      title: "Full Stack Projects",
      subtitle: "Aplicaciones web completas con arquitecturas backend robustas, bases de datos y despliegue en producción.",
      openApp: "Abrir aplicación",
    },
    en: {
      badge: "End-to-End Development",
      title: "Full Stack Projects",
      subtitle: "Complete web applications with robust backend architectures, databases, and production deployments.",
      openApp: "Open application",
    },
    fr: {
      badge: "Développement End-to-End",
      title: "Projets Full Stack",
      subtitle: "Applications web complètes avec architectures backend robustes, bases de données et déploiements en production.",
      openApp: "Ouvrir l'application",
    },
  };

  const header = sectionHeaders[lang] || sectionHeaders.es;

  return (
    <section
      id="fullstack-projects"
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "88px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(0, 112, 209, 0.12)",
              border: "1px solid rgba(0, 112, 209, 0.3)",
              marginBottom: "16px",
            }}
          >
            <Layers style={{ width: "14px", height: "14px", color: "#38a5ff" }} />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#60b5ff",
              }}
            >
              {header.badge}
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.48px",
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            {header.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(255, 255, 255, 0.72)",
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            {header.subtitle}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "20px" }}
        >
          {fullstackProjects.map((project) => (
            <div
              key={project.id}
              className="card-dark"
              style={{
                backgroundColor: "#111215",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 112, 209, 0.5)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Card Header: Icon + Title + Status */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(0, 112, 209, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38a5ff",
                      flexShrink: 0,
                    }}
                  >
                    <Truck style={{ width: "18px", height: "18px" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "3px 8px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(0, 168, 126, 0.12)",
                    border: "1px solid rgba(0, 168, 126, 0.25)",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#00d49d",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#00d49d",
                      boxShadow: "0 0 6px #00d49d",
                    }}
                  />
                  {project.status[lang] || project.status.es}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "rgba(255, 255, 255, 0.72)",
                  margin: 0,
                  flex: 1,
                }}
              >
                {project.shortDescription[lang] || project.shortDescription.es}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "rgba(255, 255, 255, 0.75)",
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      padding: "2px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                style={{
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  marginTop: "auto",
                }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    height: "38px",
                    fontSize: "13px",
                    fontWeight: 600,
                    borderRadius: "8px",
                    backgroundColor: "#0070d1",
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "background-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#005bb0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0070d1";
                  }}
                >
                  <span>{header.openApp}</span>
                  <ExternalLink style={{ width: "14px", height: "14px" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
