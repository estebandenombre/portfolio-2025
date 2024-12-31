"use client"

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from '@/contexts/LanguageContext'

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certificateName: string
  certificateUrl: string
}

export function CertificateModal({ isOpen, onClose, certificateName, certificateUrl }: CertificateModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const content = {
    es: {
      certificate: "Certificado"
    },
    en: {
      certificate: "Certificate"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] sm:max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{`${content[language].certificate}: ${certificateName}`}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 aspect-[1/1.414] w-full max-h-[60vh]">
          <iframe
            src={`${certificateUrl}#toolbar=0`}
            className="h-full w-full object-contain"
            title={`${certificateName} ${content[language].certificate}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

