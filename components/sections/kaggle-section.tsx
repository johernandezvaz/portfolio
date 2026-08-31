"use client"

import { useState } from "react"
import SectionTitle from "@/components/ui/section-title"
import { kaggleProjects, KaggleProject } from "@/lib/kaggle-projects"
import KaggleProjectCard from "@/components/kaggle-project-card"
import NotebookModal from "@/components/notebook-modal"
import { Database } from "lucide-react"

export default function KaggleSection() {
  const [selectedProject, setSelectedProject] = useState<KaggleProject | null>(null)

  return (
    <section
      id="kaggle-notebooks"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '88px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}
          >
            <Database style={{ width: '22px', height: '22px', color: '#ffffff' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              lineHeight: 1.21,
              letterSpacing: '-0.48px',
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            Proyectos de ML / DL
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.56,
              letterSpacing: '-0.09px',
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Explora mis notebooks de Kaggle ejecutables directamente en el navegador. Análisis de datos, Machine Learning y Deep Learning.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {kaggleProjects.map((project) => (
            <KaggleProjectCard
              key={project.id}
              project={project}
              onOpenNotebook={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <NotebookModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        notebookFile={selectedProject?.notebookFile || ""}
      />
    </section>
  )
}
