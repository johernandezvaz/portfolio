"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface NotebookModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  notebookFile: string
}

export default function NotebookModal({ isOpen, onClose, title, notebookFile }: NotebookModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative flex flex-col w-full h-full max-w-7xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        style={{ backgroundColor: '#16181a' }}
        onClick={e => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: 1.4,
              color: '#ffffff',
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              marginRight: '16px',
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.12)',
              backgroundColor: 'transparent',
              color: 'rgba(255,255,255,0.72)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = 'rgba(255,255,255,0.08)';
              el.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = 'transparent';
              el.style.color = 'rgba(255,255,255,0.72)';
            }}
            aria-label="Cerrar modal"
          >
            <X style={{ width: '18px', height: '18px' }} />
          </button>
        </div>
        <div className="flex-1 w-full bg-white relative">
          <iframe 
            src={`/notebooks/${notebookFile}`}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  )
}
