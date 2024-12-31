"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contact() {
  const { language } = useLanguage()

  const content = {
    es: {
      title: "Contacto",
      description: "¿Quieres trabajar conmigo o saber más sobre mis proyectos? ¡Escríbeme y construyamos el futuro juntos!",
      email: "Correo Electrónico",
      phone: "Teléfono",
    },
    en: {
      title: "Contact",
      description: "Want to work with me or know more about my projects? Write to me and let's build the future together!",
      email: "Email",
      phone: "Phone",
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#fcfcfc] to-[#dde0e4] dark:from-[#1a1d1f] dark:to-[#2a2d2f]">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#212126] to-[#000000] dark:from-[#f8f9fa] dark:to-[#ced4da]">{content[language].title}</h2>
          <p className="text-lg text-[#212126] dark:text-[#adb5bd] max-w-2xl mx-auto">
            {content[language].description}
          </p>
        </motion.div>

        <div className="flex flex-col items-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 w-full"
          >
            <Card className="bg-[#ffffff]/30 dark:bg-[#2a2d2f]/30 border-0 backdrop-blur-sm hover:bg-[#fcfcfc]/50 dark:hover:bg-[#343a40]/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#212126] dark:text-[#f8f9fa]">
                  <Mail className="h-6 w-6 text-[#000000] dark:text-[#ced4da]" />
                  {content[language].email}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#212126] dark:text-[#adb5bd]">ortizvicenteesteban@gmail.com</p>
              </CardContent>
            </Card>
            <Card className="bg-[#ffffff]/30 dark:bg-[#2a2d2f]/30 border-0 backdrop-blur-sm hover:bg-[#fcfcfc]/50 dark:hover:bg-[#343a40]/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#212126] dark:text-[#f8f9fa]">
                  <Phone className="h-6 w-6 text-[#000000] dark:text-[#ced4da]" />
                  {content[language].phone}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#212126] dark:text-[#adb5bd]">+34 672 187 203</p>
              </CardContent>
            </Card>
            <Card className="bg-[#ffffff]/30 dark:bg-[#2a2d2f]/30 border-0 backdrop-blur-sm hover:bg-[#fcfcfc]/50 dark:hover:bg-[#343a40]/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#212126] dark:text-[#f8f9fa]">
                  <Linkedin className="h-6 w-6 text-[#000000] dark:text-[#ced4da]" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://www.linkedin.com/in/esteban-ortiz-vicente-228377277/" target="_blank" rel="noopener noreferrer" className="text-[#212126] dark:text-[#adb5bd] hover:underline">
                  Esteban Ortiz Vicente
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

