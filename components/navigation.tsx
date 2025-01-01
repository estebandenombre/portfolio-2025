"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Menu, X, Download } from 'lucide-react'
import { useTheme } from "next-themes"
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSelector } from './language-selector'

export function Navigation() {
  const { setTheme, theme } = useTheme()
  const { language } = useLanguage()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: language === 'es' ? "Sobre Mí" : "About Me" },
    { href: "#projects", label: language === 'es' ? "Proyectos" : "Projects" },
    { href: "#skills", label: language === 'es' ? "Habilidades" : "Skills" },
    { href: "#contact", label: language === 'es' ? "Contacto" : "Contact" },
  ]

  const handleDownloadCV = () => {
    // Replace with the actual path to your CV file
    const cvPath = '/CV-EstebanOrtizVicente.pdf'
    window.open(cvPath, '_blank')
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#f8f9fa]/90 dark:bg-[#212529]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-[#343a40] dark:text-[#f8f9fa] hover:text-[#212529] dark:hover:text-[#e9ecef] transition-colors">
            Esteban Ortiz Vicente
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#495057] dark:text-[#ced4da] hover:text-[#212529] dark:hover:text-[#f8f9fa] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="text-[#495057] dark:text-[#ced4da] hover:text-[#212529] dark:hover:text-[#f8f9fa] border-[#495057] dark:border-[#ced4da] hover:bg-[#e9ecef] dark:hover:bg-[#343a40]"
            >
              <Download className="mr-2 h-4 w-4" />
              {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </Button>
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-[#495057] dark:text-[#ced4da] hover:text-[#212529] dark:hover:text-[#f8f9fa] hover:bg-[#e9ecef] dark:hover:bg-[#343a40]"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">
                {language === 'es' ? "Cambiar tema" : "Toggle theme"}
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2 text-[#495057] dark:text-[#ced4da] hover:text-[#212529] dark:hover:text-[#f8f9fa] hover:bg-[#e9ecef] dark:hover:bg-[#343a40]"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">
                {language === 'es' ? "Abrir menú" : "Open menu"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f8f9fa] dark:bg-[#212529] shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#495057] dark:text-[#ced4da] hover:text-[#212529] dark:hover:text-[#f8f9fa] hover:bg-[#e9ecef] dark:hover:bg-[#343a40] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadCV}
                className="w-full text-left text-[#495057] dark:text-[#ced4da] hover:text-[#212529] dark:hover:text-[#f8f9fa] border-[#495057] dark:border-[#ced4da] hover:bg-[#e9ecef] dark:hover:bg-[#343a40] px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                <Download className="mr-2 h-4 w-4 inline" />
                {language === 'es' ? 'Descargar CV' : 'Download CV'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light")
                  setIsMobileMenuOpen(false)
                }}
                className="w-full text-left text-[#495057] dark:text-[#ced4da] hover:text-[#212529] dark:hover:text-[#f8f9fa] hover:bg-[#e9ecef] dark:hover:bg-[#343a40] px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {language === 'es' ? "Cambiar tema" : "Toggle theme"}
                <SunIcon className="h-5 w-5 ml-2 inline-block rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="h-5 w-5 ml-2 inline-block absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

