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
    <section id="kaggle-notebooks" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-12 h-12 bg-[#C5A880]/10 rounded-full flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-[#C5A880]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4 text-foreground">Proyectos de ML / DL</h2>
            <p className="text-muted-foreground text-center max-w-2xl text-lg">
              Explora mis notebooks de Kaggle ejecutables directamente en el navegador. Análisis de datos, Machine Learning y Deep Learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kaggleProjects.map((project) => (
              <KaggleProjectCard
                key={project.id}
                project={project}
                onOpenNotebook={setSelectedProject}
              />
            ))}
          </div>
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
