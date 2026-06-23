"use client"

import { ExternalLink, Eye, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { KaggleProject } from "@/lib/kaggle-projects"

interface KaggleProjectCardProps {
  project: KaggleProject
  onOpenNotebook: (project: KaggleProject) => void
}

export default function KaggleProjectCard({ project, onOpenNotebook }: KaggleProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-dashed border-[#C5A880]/50 flex flex-col h-full bg-card">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-xl font-playfair font-bold text-foreground group-hover:text-[#C5A880] transition-colors">{project.title}</h3>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground whitespace-nowrap bg-muted/50 px-2 py-1 rounded-full border border-border/50">
            <Calendar className="w-3 h-3" />
            <span>{project.date}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs font-normal bg-muted hover:bg-muted/80">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-border">
          <Button 
            className="w-full sm:w-auto flex-1 bg-[#C5A880] hover:bg-[#B39770] text-white" 
            onClick={() => onOpenNotebook(project)}
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver notebook
          </Button>
          <Button variant="outline" className="w-full sm:w-auto flex-1 border-[#C5A880]/30 hover:bg-[#C5A880]/10" asChild>
            <a
              href={project.kaggleUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Kaggle
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
