"use client"


import { motion } from "framer-motion"
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { language } = useLanguage()

  const content = {
    es: {
      title: "Ingeniero en Tecnologías y Servicios de Telecomunicación",
      description: "Especializado en soluciones innovadoras para la conectividad y el análisis de datos. Mi misión es transformar retos técnicos en oportunidades mediante tecnología de vanguardia.",
      buttonText: "Últimos Proyectos"
    },
    en: {
      title: "Telecommunications Technology and Services Engineer",
      description: "Specialized in innovative solutions for connectivity and data analysis. My mission is to transform technical challenges into opportunities through cutting-edge technology.",
      buttonText: "Latest Projects"
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mx-auto mb-8 text-white"
          >
            {content[language].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-200 text-center mx-auto mb-8 max-w-2xl"
          >
            {content[language].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
          </motion.div>
        </div>
      </div>
    </div>
  )
}

