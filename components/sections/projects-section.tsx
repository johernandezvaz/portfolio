"use client"

import { ExternalLink, Github, Calendar, Tag, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/ui/section-title"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

const ProjectsSection = () => {
    const { t } = useLanguage()

    const cimavProject = {
        title: t.projects.research.cimav.title,
        description: t.projects.research.cimav.description,
        image: "/cimav-logo.png",
        technologies: ["React", "FastAPI", "FAISS", "GROBID", "NLP", "Python"],
        category: t.projects.researchSubtitle,
        period: "Agosto 2025 - Septiembre 2025",
        highlights: t.projects.research.cimav.highlights,
        links: {
            github: "https://github.com/johernandezvaz/rag-cimav",
        },
    }

    const exampleProjects = [
        {
            title: "SilqApps",
            description: "Landing Page de mi agencia SilqApps",
            category: "Marketing y Desarrollo Web",
            image: "https://res.cloudinary.com/dizorsslw/image/upload/v1774266308/u6wpk55ptnxrhmsmwlwf.png",
            highlights: ["Diseño responsivo", "Marketing Digital", "Optimización SEO"],
            technologies: ["Next.js", "TailwindCSS"],
            links: { demo: "https://silqapps.com/" }
        },
        {
            title: "Lianys Spa",
            description: "Landing Page prospecto para sitio web de spa y belleza",
            category: "Salud y Bienestar",
            image: "https://res.cloudinary.com/dizorsslw/image/upload/v1774265851/vegl8t4ooe3movuxnpmd.png",
            highlights: ["Diseño responsivo", "Integración de agenda", "Optimización SEO"],
            technologies: ["Next.js", "TailwindCSS"],
            links: { demo: "https://lianys.netlify.app/" }
        },
        {
            title: "Clínica Dental Kokoa",
            description: "Landing Page prospecto para sitio web de clínica dental",
            category: "Salud",
            image: "https://res.cloudinary.com/dizorsslw/image/upload/v1774265854/qhtupyk4pom4zdrmqws2.png",
            highlights: ["Catálogo de servicios", "Formulario de contacto", "Diseño moderno"],
            technologies: ["Next.js", "TailwindCSS"],
            links: { demo: "https://clinicadentalkokoa.netlify.app/" }
        },
        {
            title: "Dr. Roberto Guerra",
            description: "Landing Page prospecto para sitio web de dentista pediátrico",
            category: "Salud",
            image: "https://res.cloudinary.com/dizorsslw/image/upload/v1774265853/u8nfyqhyadnnyx9owzzu.png",
            highlights: ["Diseño amigable para niños", "Sección de testimonios", "Integración con WhatsApp"],
            technologies: ["Next.js", "TailwindCSS"],
            links: { demo: "https://drrobertoguerra.netlify.app/" }
        },
        {
            title: "Portafolio Psicóloga",
            description: "Landing Page prospecto para sitio web de psicóloga",
            category: "Portafolio",
            image: "https://res.cloudinary.com/dizorsslw/image/upload/v1774265853/li3ieh8h5c27aqp4ttkv.png",
            highlights: ["Blog de artículos", "Reserva de citas", "Diseño minimalista"],
            technologies: ["Next.js", "TailwindCSS"],
            links: { demo: "https://melissanieto-rediseo.netlify.app/" }
        }
    ]

    const otherProjects = [
        cimavProject,
        {
            title: t.projects.list.sapphirus.title,
            description: t.projects.list.sapphirus.description,
            image: "/sapphirus-logo.png",
            technologies: ["Next.js", "TailwindCSS", "Stripe", "Supabase"],
            category: t.projects.categories.ecommerce,
            period: "Enero 2025 - Marzo 2025",
            highlights: t.projects.list.sapphirus.highlights,
            links: { demo: "https://sapphirus.com.mx/" },
        },
        {
            title: t.projects.list.fajas.title,
            description: t.projects.list.fajas.description,
            image: "/fajas-maydel-logo.png",
            technologies: ["Next.js", "TailwindCSS", "Stripe", "Supabase"],
            category: t.projects.categories.ecommerce,
            period: "Junio 2025 - Julio 2025",
            highlights: t.projects.list.fajas.highlights,
            links: { demo: "https://fajascolombianasmaydel.com.mx/" },
        },
        {
            title: t.projects.list.kleinnotes.title,
            description: t.projects.list.kleinnotes.description,
            image: "/klein-notes.jpg",
            technologies: ["Python", "TensorFlow", "Django", "PostgreSQL", "NLP"],
            category: t.projects.categories.ai,
            period: "Junio 2024 - Presente",
            highlights: t.projects.list.kleinnotes.highlights,
            links: { github: "https://github.com/maikuamx/kleinnotes" },
        },
        {
            title: t.projects.list.lumier.title,
            description: t.projects.list.lumier.description,
            image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Python", "OpenCV", "Raspberry Pi", "IoT", "Computer Vision"],
            category: t.projects.categories.iot,
            period: "Enero 2024 - Mayo 2024",
            highlights: t.projects.list.lumier.highlights,
            links: { github: "" },
        },
        {
            title: t.projects.list.accounting.title,
            description: t.projects.list.accounting.description,
            image: "/Logo-1.png",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            category: t.projects.categories.web,
            period: "Febrero 2023 - Agosto 2023",
            highlights: t.projects.list.accounting.highlights,
            links: { demo: "https://pvacontadores.com.mx/" },
        },
        {
            title: t.projects.list.laboratory.title,
            description: t.projects.list.laboratory.description,
            image: "/ASE-CA LAB-02.png",
            technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
            category: t.projects.categories.web,
            period: "Agosto 2021 - Agosto 2022",
            highlights: t.projects.list.laboratory.highlights,
            links: { demo: "https://www.asecalab.com.mx/" },
        },
    ]

    return (
        <section
            id="proyectos"
            style={{
                backgroundColor: '#ffffff',
                color: '#191c1f',
                padding: '88px 24px',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} mode="light" />

                {/* Example Projects */}
                <div style={{ marginBottom: '80px' }}>
                    <div style={{ marginBottom: '40px' }}>
                        <h3
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '32px',
                                fontWeight: 500,
                                lineHeight: 1.19,
                                letterSpacing: '-0.32px',
                                color: '#191c1f',
                                marginBottom: '8px',
                            }}
                        >
                            {t.projects.examplesTitle}
                        </h3>
                        <p
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: 1.5,
                                color: '#505a63',
                            }}
                        >
                            {t.projects.examplesSubtitle}
                        </p>
                    </div>

                    <div
                        className="grid md:grid-cols-2 lg:grid-cols-3"
                        style={{ gap: '16px' }}
                    >
                        {exampleProjects.map((project, index) => (
                            <div
                                key={index}
                                className="card-light"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    padding: 0,
                                }}
                            >
                                {/* Image */}
                                <div
                                    style={{
                                        position: 'relative',
                                        height: '160px',
                                        overflow: 'hidden',
                                        borderRadius: '20px 20px 0 0',
                                    }}
                                >
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        style={{ transition: 'transform 0.4s ease' }}
                                        onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                                        onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)'; }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '12px',
                                            left: '12px',
                                            right: '12px',
                                        }}
                                    >
                                        <span className="badge-tag" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#191c1f', marginBottom: '4px', display: 'inline-flex' }}>
                                            {project.category}
                                        </span>
                                        <h3
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '18px',
                                                fontWeight: 500,
                                                color: '#ffffff',
                                                margin: 0,
                                                display: 'block',
                                            }}
                                        >
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div
                                    style={{
                                        padding: '24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px',
                                        flex: 1,
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            lineHeight: 1.43,
                                            color: '#505a63',
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <h4
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#191c1f',
                                                margin: 0,
                                            }}
                                        >
                                            <TrendingUp style={{ width: '12px', height: '12px' }} />
                                            {t.projects.keyPoints}
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            {project.highlights.map((highlight, i) => (
                                                <li
                                                    key={i}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '8px',
                                                        fontFamily: 'var(--font-body)',
                                                        fontSize: '13px',
                                                        fontWeight: 400,
                                                        color: '#505a63',
                                                    }}
                                                >
                                                    <div style={{ width: '4px', height: '4px', borderRadius: '9999px', backgroundColor: '#191c1f', marginTop: '5px', flexShrink: 0 }} />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="badge-tag" style={{ fontSize: '12px' }}>{tech}</span>
                                        ))}
                                    </div>

                                    <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #e2e2e7' }}>
                                        {(project.links as any).demo && (
                                            <a
                                                href={(project.links as any).demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-dark"
                                                style={{ width: '100%', fontSize: '14px', height: '40px', padding: '8px 16px' }}
                                            >
                                                <ExternalLink style={{ width: '14px', height: '14px', marginRight: '6px' }} />
                                                {t.projects.viewDemo}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <div>
                    <div style={{ marginBottom: '40px' }}>
                        <h3
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '32px',
                                fontWeight: 500,
                                lineHeight: 1.19,
                                letterSpacing: '-0.32px',
                                color: '#191c1f',
                                marginBottom: '8px',
                            }}
                        >
                            {t.projects.moreProjects}
                        </h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#505a63' }}>
                            Proyectos completados y en producción
                        </p>
                    </div>

                    <div
                        className="grid md:grid-cols-2"
                        style={{ gap: '16px' }}
                    >
                        {otherProjects.map((project, index) => (
                            <div
                                key={index}
                                className="card-light"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    padding: 0,
                                }}
                            >
                                {/* Image */}
                                <div
                                    style={{
                                        position: 'relative',
                                        height: '192px',
                                        overflow: 'hidden',
                                        borderRadius: '20px 20px 0 0',
                                    }}
                                >
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                                        }}
                                    />
                                    <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                                        <span className="badge-tag" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#191c1f', marginBottom: '6px', display: 'inline-flex' }}>
                                            {project.category}
                                        </span>
                                        <h3
                                            style={{
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '20px',
                                                fontWeight: 500,
                                                color: '#ffffff',
                                                margin: 0,
                                                display: 'block',
                                            }}
                                        >
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                                    {(project as any).period && (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                fontFamily: 'var(--font-body)',
                                                fontSize: '13px',
                                                color: '#8d969e',
                                            }}
                                        >
                                            <Calendar style={{ width: '13px', height: '13px' }} />
                                            <span>{(project as any).period}</span>
                                        </div>
                                    )}

                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.43, color: '#505a63', margin: 0 }}>
                                        {project.description}
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <h4
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                fontFamily: 'var(--font-display)',
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: '#191c1f',
                                                margin: 0,
                                            }}
                                        >
                                            <Tag style={{ width: '12px', height: '12px' }} />
                                            {t.projects.keyPoints}
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            {project.highlights.map((highlight, i) => (
                                                <li
                                                    key={i}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '8px',
                                                        fontFamily: 'var(--font-body)',
                                                        fontSize: '13px',
                                                        color: '#505a63',
                                                    }}
                                                >
                                                    <div style={{ width: '4px', height: '4px', borderRadius: '9999px', backgroundColor: '#191c1f', marginTop: '5px', flexShrink: 0 }} />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="badge-tag" style={{ fontSize: '12px' }}>{tech}</span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '8px', paddingTop: '16px', borderTop: '1px solid #e2e2e7', marginTop: 'auto' }}>
                                        {(project.links as any).demo && (
                                            <a
                                                href={(project.links as any).demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-dark"
                                                style={{ fontSize: '14px', height: '40px', padding: '8px 16px' }}
                                            >
                                                <ExternalLink style={{ width: '14px', height: '14px', marginRight: '6px' }} />
                                                {t.projects.viewDemo}
                                            </a>
                                        )}
                                        {(project.links as any).github && (
                                            <a
                                                href={(project.links as any).github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-outline-light"
                                                style={{ fontSize: '14px', height: '40px', padding: '8px 16px' }}
                                            >
                                                <Github style={{ width: '14px', height: '14px', marginRight: '6px' }} />
                                                {t.projects.viewCode}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div style={{ marginTop: '64px', textAlign: 'center' }}>
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '16px',
                            color: '#505a63',
                            marginBottom: '24px',
                        }}
                    >
                        {t.projects.moreProjects}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <a
                            href="https://github.com/johernandezvaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark"
                        >
                            <Github style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                            GitHub
                        </a>
                        <a
                            href="https://www.kaggle.com/maikua/code"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-light"
                        >
                            <ExternalLink style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                            Kaggle
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
