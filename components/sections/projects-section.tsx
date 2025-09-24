"use client"

import { ExternalLink, Github, Calendar, Tag, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

    const otherProjects = [
        {
            title: t.projects.list.sapphirus.title,
            description: t.projects.list.sapphirus.description,
            image: "/sapphirus-logo.png",
            technologies: ["Next.js", "TailwindCSS", "Stripe", "Supabase"],
            category: t.projects.categories.ecommerce,
            period: "Enero 2025 - Marzo 2025",
            highlights: t.projects.list.sapphirus.highlights,
            links: {
                demo: "https://sapphirus.com.mx/",
            },
        },
        {
            title: t.projects.list.fajas.title,
            description: t.projects.list.fajas.description,
            image: "/fajas-maydel-logo.png",
            technologies: ["Next.js", "TailwindCSS", "Stripe", "Supabase"],
            category: t.projects.categories.ecommerce,
            period: "Junio 2025 - Julio 2025",
            highlights: t.projects.list.fajas.highlights,
            links: {
                demo: "https://fajascolombianasmaydel.com.mx/",
            },
        },
        {
            title: t.projects.list.kleinnotes.title,
            description: t.projects.list.kleinnotes.description,
            image: "/klein-notes.jpg",
            technologies: ["Python", "TensorFlow", "Django", "PostgreSQL", "NLP"],
            category: t.projects.categories.ai,
            period: "Junio 2024 - Presente",
            highlights: t.projects.list.kleinnotes.highlights,
            links: {
                github: "https://github.com/maikuamx/kleinnotes",
            },
        },
        {
            title: t.projects.list.lumier.title,
            description: t.projects.list.lumier.description,
            image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Python", "OpenCV", "Raspberry Pi", "IoT", "Computer Vision"],
            category: t.projects.categories.iot,
            period: "Enero 2024 - Mayo 2024",
            highlights: t.projects.list.lumier.highlights,
            links: {
                github: "",
            },
        },
        {
            title: t.projects.list.accounting.title,
            description: t.projects.list.accounting.description,
            image: "/Logo-1.png",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            category: t.projects.categories.web,
            period: "Febrero 2023 - Agosto 2023",
            highlights: t.projects.list.accounting.highlights,
            links: {
                demo: "https://pvacontadores.com.mx/",
            },
        },
        {
            title: t.projects.list.laboratory.title,
            description: t.projects.list.laboratory.description,
            image: "/ASE-CA LAB-02.png",
            technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
            category: t.projects.categories.web,
            period: "Agosto 2021 - Agosto 2022",
            highlights: t.projects.list.laboratory.highlights,
            links: {
                demo: "https://www.asecalab.com.mx/",
            },
        },
    ]

    return (
        <section id="proyectos" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

                    {/* Research Projects Section */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">{t.projects.researchTitle}</h3>
                            <p className="text-muted-foreground">{t.projects.researchSubtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {researchProjects.map((project, index) => (
                                <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute top-4 right-4 z-10">
                                            <Badge className="bg-[#C5A880] text-white flex items-center gap-1 text-sm px-2 py-1">
                                                <Award className="w-3 h-3" />
                                                {t.projects.categories.research}
                                            </Badge>
                                        </div>
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <Badge variant="secondary" className="mb-2">
                                                {project.category}
                                            </Badge>
                                            <h3 className="text-xl font-playfair font-bold text-white">{project.title}</h3>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.period}</span>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                                                <Tag className="w-4 h-4 text-[#C5A880]" />
                                                <span>{t.projects.keyPoints}</span>
                                            </h4>
                                            <ul className="space-y-1">
                                                {project.highlights.map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                                        <div className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-2 flex-shrink-0"></div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">{t.projects.technologiesUsed}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex space-x-3 pt-4">
                                            {project.links.github && (
                                                <Button size="sm" variant="outline" asChild>
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        <span>{t.projects.viewCode}</span>
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Projects in Progress Section */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">{t.projects.inProgressTitle}</h3>
                            <p className="text-muted-foreground">{t.projects.inProgressSubtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {inProgressProjects.map((project, index) => (
                                <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-dashed border-[#C5A880]/50">
                                    <div className="relative h-40 overflow-hidden">
                                        <div className="absolute top-3 right-3 z-10">
                                            <Badge className="bg-orange-500 text-white flex items-center gap-1 text-xs px-2 py-1">
                                                <Clock className="w-3 h-3" />
                                                {project.progress}%
                                            </Badge>
                                        </div>
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <Badge variant="secondary" className="mb-1 text-xs">
                                                {project.category}
                                            </Badge>
                                            <h3 className="text-lg font-playfair font-bold text-white">{project.title}</h3>
                                        </div>
                                    </div>

                                    <CardContent className="p-5 space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">{project.status}</span>
                                                <span className="font-medium text-foreground">{project.progress}%</span>
                                            </div>
                                            <Progress value={project.progress} className="h-2" />
                                        </div>

                                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                                                <TrendingUp className="w-3 h-3 text-[#C5A880]" />
                                                <span className="text-sm">{t.projects.keyPoints}</span>
                                            </h4>
                                            <ul className="space-y-1">
                                                {project.highlights.map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="flex items-start space-x-2 text-xs text-muted-foreground">
                                                        <div className="w-1 h-1 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2 text-sm">{t.projects.technologiesUsed}</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Completed Projects Section */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">{t.projects.moreProjects}</h3>
                            <p className="text-muted-foreground">Proyectos completados y en producción</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {otherProjects.map((project, index) => (
                                <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <Badge variant="secondary" className="mb-2">
                                                {project.category}
                                            </Badge>
                                            <h3 className={`text-xl font-playfair font-bold text-white`}>{project.title}</h3>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 space-y-4">
                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.period}</span>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                                                <Tag className="w-4 h-4 text-[#C5A880]" />
                                                <span>{t.projects.keyPoints}</span>
                                            </h4>
                                            <ul className="space-y-1">
                                                {project.highlights.map((highlight, highlightIndex) => (
                                                    <li key={highlightIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                                        <div className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-2 flex-shrink-0"></div>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">{t.projects.technologiesUsed}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex space-x-3 pt-4">
                                            {project.links.demo && (
                                                <Button size="sm" variant="outline" asChild>
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        <span>{t.projects.viewDemo}</span>
                                                    </a>
                                                </Button>
                                            )}
                                            {project.links.github && (
                                                <Button size="sm" variant="outline" asChild>
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center space-x-2"
                                                    >
                                                        <Github className="w-4 h-4" />
                                                        <span>{t.projects.viewCode}</span>
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-6">{t.projects.moreProjects}</p>
                        <div className="flex justify-center space-x-4">
                            <Button variant="outline" asChild>
                                <a
                                    href="https://github.com/johernandezvaz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a
                                    href="https://www.kaggle.com/maikua/code"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Kaggle</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
