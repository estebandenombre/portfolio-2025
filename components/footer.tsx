"use client"
import Link from "next/link"
import { Github, Linkedin, Download } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from "@/components/ui/button"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      builtWith: "Designed and developed by Esteban Ortiz Vicente in Next.js",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      downloadCV: "Download CV"
    },
    es: {
      builtWith: "Diseñado y desarrollado por Esteban Ortiz Vicente en Next.js",
      github: "GitHub",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      downloadCV: "Descargar CV"
    }
  }

  const handleDownloadCV = () => {
    // Replace with the actual path to your CV file
    const cvPath = '/CV-EstebanOrtizVicente.pdf'
    window.open(cvPath, '_blank')
  }

  return (
    <footer className="border-t border-[#212126]/10 bg-[#dde0e4]/50 backdrop-blur supports-[backdrop-filter]:bg-[#dde0e4]/50">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm leading-loose text-[#212126] md:text-left">
          {content[language].builtWith}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadCV}
            className="text-[#212126] hover:text-[#000000] border-[#212126] hover:border-[#000000] hover:bg-[#ffffff]/50"
          >
            <Download className="mr-2 h-4 w-4" />
            {content[language].downloadCV}
          </Button>
          <Link
            href="https://github.com/estebandenombre"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#fcfcfc]/50 p-2 text-[#212126] transition-colors hover:bg-[#ffffff]/50"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">{content[language].github}</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/esteban-ortiz-vicente-228377277/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#fcfcfc]/50 p-2 text-[#212126] transition-colors hover:bg-[#ffffff]/50"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">{content[language].linkedin}</span>
          </Link>

        </div>
      </div>
    </footer>
  )
}

