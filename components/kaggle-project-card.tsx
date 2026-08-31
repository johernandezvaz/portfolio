"use client"

import { ExternalLink, Eye, Calendar } from "lucide-react"
import { KaggleProject } from "@/lib/kaggle-projects"

interface KaggleProjectCardProps {
  project: KaggleProject
  onOpenNotebook: (project: KaggleProject) => void
}

export default function KaggleProjectCard({ project, onOpenNotebook }: KaggleProjectCardProps) {
  return (
    <div
      className="card-dark"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.2s ease',
      }}
    >

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px',
          marginBottom: '16px',
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
          {project.title}
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: 'rgba(255,255,255,0.48)',
            fontSize: '12px',
            fontWeight: 400,
            whiteSpace: 'nowrap',
            backgroundColor: 'rgba(255,255,255,0.06)',
            padding: '4px 10px',
            borderRadius: '9999px',
            flexShrink: 0,
          }}
        >
          <Calendar style={{ width: '11px', height: '11px' }} />
          <span>{project.date}</span>
        </div>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.43,
          color: 'rgba(255,255,255,0.72)',
          marginBottom: '24px',
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginBottom: '24px',
        }}
      >
        {project.tags.map((tag, i) => (
          <span key={i} className="badge-tag-dark">
            {tag}
          </span>
        ))}
      </div>


      <div
        style={{
          display: 'flex',
          gap: '8px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          marginTop: 'auto',
        }}
      >
        <button
          className="btn-primary"
          style={{
            flex: 1,
            fontSize: '14px',
            height: '40px',
            padding: '8px 16px',
          }}
          onClick={() => onOpenNotebook(project)}
        >
          <Eye style={{ width: '14px', height: '14px', marginRight: '6px' }} />
          Ver notebook
        </button>
        <a
          href={project.kaggleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-dark"
          style={{
            flex: 1,
            fontSize: '14px',
            height: '40px',
            padding: '8px 16px',
          }}
        >
          <ExternalLink style={{ width: '14px', height: '14px', marginRight: '6px' }} />
          Kaggle
        </a>
      </div>
    </div>
  )
}
