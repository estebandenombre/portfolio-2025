"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useLanguage } from '@/contexts/LanguageContext'
import { X } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  details?: string[];
  url: string;
  documentationUrl?: string;
}

const openInNewTab = (url: string | undefined) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

export function Projects() {
  const { language } = useLanguage()
  const [isWebAppOpen, setIsWebAppOpen] = useState(false)

  const projects: { [key: string]: Project[] } = {
    es: [
      {
        title: "Dashboard para Huerto Inteligente",
        description: "Diseñé e implementé un sistema de monitorización inteligente para un huerto, integrando sensores IoT y un dashboard interactivo. El sistema recopila datos en tiempo real sobre temperatura, humedad del suelo y niveles de luz, permitiendo ajustes automáticos y optimización del riego.",
        image: "/garden.jpg",
        tags: ["Next.js", "Node.js", "MongoDB", "IoT", "MQTT"],
        color: "from-[#f8f9fa] to-[#ffffff]",
        details: [
          "Frontend: Next.js para el desarrollo del dashboard interactivo.",
          "Backend: Node.js y Express para la gestión de datos.",
          "Base de Datos: MongoDB para el almacenamiento de datos históricos.",
          "Hardware: Microcontroladores ESP32 conectados a sensores de humedad, temperatura y luz.",
          "Protocolo: MQTT para la transmisión de datos en tiempo real.",
          "Incremento del 30% en la eficiencia del riego.",
          "Visualización intuitiva para el análisis y gestión del huerto."
        ],
        url: "https://kzmgzz7j1plmplk6e4au.lite.vusercontent.net/dashboard" // Example URL
      },
      {
        title: "Acelerador FPGA para Algoritmos de Redes Neuronales",
        description: "Diseñé y verifiqué un acelerador basado en FPGA para optimizar algoritmos de redes neuronales utilizando técnicas avanzadas de hardware. El proyecto incluyó la implementación de unidades de procesamiento específicas para operaciones en punto flotante y funciones no lineales, como la tangente hiperbólica.",
        image: "/fpga.jpg",
        tags: ["FPGA", "VHDL", "Verilog", "C/C++", "Redes Neuronales"],
        color: "from-[#ffffff] to-[#f8f9fa]",
        details: [
          "Hardware: FPGA Cyclone V con soporte para periféricos personalizados.",
          "Lenguajes: VHDL y Verilog para la descripción y simulación de hardware.",
          "Herramientas: Intel Quartus II para diseño y compilación, y ModelSim para simulación y validación.",
          "Software: C/C++ para la integración con aplicaciones de alto nivel.",
          "Aceleración de algoritmos en un 50% en comparación con implementaciones tradicionales en CPU.",
          "Reducción significativa del uso de recursos de hardware mediante optimización de diseño."
        ],
        url: "https://example.com" // Example URL
      },
      {
        title: "Optimización de Clúster MySQL",
        description: "Diseñé un sistema de bases de datos con alta disponibilidad, incrementando la fiabilidad de los datos en entornos críticos en un 35% y mejorando el tiempo de respuesta en un 25%.",
        image: "/server.jpg",
        tags: ["MySQL", "Alta Disponibilidad", "Optimización de Rendimiento"],
        color: "from-[#f8f9fa] to-[#ffffff]",
        url: "https://example.com" // Example URL
      },
      {
        title: "Sistema de Localización Híbrido",
        description: "Desarrollé una innovadora solución de localización de activos combinando tecnologías Bluetooth y mioty, logrando una precisión de localización del 95% en entornos industriales complejos.",
        image: "/location.jpg",
        tags: ["Bluetooth", "mioty", "Seguimiento de Activos", "Raspberry Pi Pico", "Transceptor SX1280"],
        color: "from-[#ffffff] to-[#f8f9fa]",
        details: [
          "Utilicé un microcontrolador Raspberry Pi Pico para el procesamiento central",
          "Implementé comunicación de largo alcance con el transceptor SX1280 de Semtech",
          "Integré tecnología Bluetooth para localización de corto alcance",
          "Desarrollé algoritmos de fusión de datos para combinar información de múltiples sensores",
          "Logré una precisión de localización del 95% en entornos industriales complejos",
          "Optimicé el consumo de energía para una larga duración de la batería"
        ],
        url: "https://app-thesis.vercel.app/", // Example URL
        documentationUrl: "https://riunet.upv.es/handle/10251/211586"
      },
    ],
    en: [
      {
        title: "Smart Garden Dashboard",
        description: "Designed and implemented an intelligent monitoring system for a garden, integrating IoT sensors and an interactive dashboard. The system collects real-time data on temperature, soil moisture, and light levels, allowing for automatic adjustments and irrigation optimization.",
        image: "/garden.jpg",
        tags: ["Next.js", "Node.js", "MongoDB", "IoT", "MQTT"],
        color: "from-[#f8f9fa] to-[#ffffff]",
        details: [
          "Frontend: Next.js for interactive dashboard development.",
          "Backend: Node.js and Express for data management.",
          "Database: MongoDB for historical data storage.",
          "Hardware: ESP32 microcontrollers connected to humidity, temperature, and light sensors.",
          "Protocol: MQTT for real-time data transmission.",
          "30% increase in irrigation efficiency.",
          "Intuitive visualization for garden analysis and management."
        ],
        url: "https://kzmgzz7j1plmplk6e4au.lite.vusercontent.net/dashboard" // Example URL
      },
      {
        title: "FPGA Accelerator for Neural Network Algorithms",
        description: "Designed and verified an FPGA-based accelerator to optimize neural network algorithms using advanced hardware techniques. The project included the implementation of specific processing units for floating-point operations and non-linear functions, such as hyperbolic tangent.",
        image: "/fpga.jpg",
        tags: ["FPGA", "VHDL", "Verilog", "C/C++", "Neural Networks"],
        color: "from-[#ffffff] to-[#f8f9fa]",
        details: [
          "Hardware: Cyclone V FPGA with support for custom peripherals.",
          "Languages: VHDL and Verilog for hardware description and simulation.",
          "Tools: Intel Quartus II for design and compilation, and ModelSim for simulation and validation.",
          "Software: C/C++ for integration with high-level applications.",
          "50% acceleration of algorithms compared to traditional CPU implementations.",
          "Significant reduction in hardware resource usage through design optimization."
        ],
        url: "https://example.com" // Example URL
      },
      {
        title: "MySQL Cluster Optimization",
        description: "Designed a high-availability database system, increasing data reliability in critical environments by 35% and improving response time by 25%.",
        image: "/server.jpg",
        tags: ["MySQL", "High Availability", "Performance Optimization"],
        color: "from-[#f8f9fa] to-[#ffffff]",
        url: "https://example.com" // Example URL
      },
      {
        title: "Hybrid Localization System",
        description: "Developed an innovative asset localization solution combining Bluetooth and mioty technologies, achieving 95% localization accuracy in complex industrial environments.",
        image: "/location.jpg",
        tags: ["Bluetooth", "mioty", "Asset Tracking", "Raspberry Pi Pico", "Transceptor SX1280"],
        color: "from-[#ffffff] to-[#f8f9fa]",
        details: [
          "I used a Raspberry Pi Pico microcontroller for central processing",
          "Implemented long-range communication with the Semtech SX1280 transceiver",
          "Integrated Bluetooth technology for short-range localization",
          "Developed data fusion algorithms to combine information from multiple sensors",
          "Achieved 95% localization accuracy in complex industrial environments",
          "Optimized power consumption for long battery life"
        ],
        url: "https://app-thesis.vercel.app/", // Example URL
        documentationUrl: "https://riunet.upv.es/handle/10251/211586"
      },
    ]
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#e9ecef] to-[#f8f9fa] dark:from-[#2a2d2f] dark:to-[#1a1d1f]">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#343a40] to-[#495057] dark:from-[#f8f9fa] dark:to-[#ced4da]">
            {language === 'es'
              ? 'Proyectos que han marcado la diferencia en telecomunicaciones e ingeniería de sistemas'
              : 'Projects that have made a difference in telecommunications and systems engineering'}
          </h2>
          <p className="text-lg text-[#495057] dark:text-[#adb5bd] max-w-2xl mx-auto">
            {language === 'es'
              ? 'Explora algunos de mis proyectos más impactantes y sus resultados medibles en el campo de la ingeniería de telecomunicaciones.'
              : 'Explore some of my most impactful projects and their measurable results in the field of telecommunications engineering.'}
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
          {projects[language].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#ffffff]/30 dark:bg-[#2a2d2f]/30 border-0 overflow-hidden h-full shadow-lg backdrop-blur-sm group hover:bg-[#f8f9fa]/50 dark:hover:bg-[#343a40]/50 transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} dark:from-[#343a40] dark:to-[#495057] opacity-75`}></div>
                    <CardTitle className="absolute bottom-4 left-4 text-2xl font-bold text-[#343a40] dark:text-[#f8f9fa]">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-[#495057] dark:text-[#adb5bd] mb-4 group-hover:text-[#343a40] dark:group-hover:text-[#f8f9fa] transition-all duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className={`bg-gradient-to-r ${project.color} dark:from-[#343a40] dark:to-[#495057] text-[#495057] dark:text-[#adb5bd]`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {index === 0 && (
                    <Button
                      onClick={() => setIsWebAppOpen(true)}
                      className="bg-transparent text-[#343a40] hover:bg-[#e9ecef] dark:text-[#f8f9fa] dark:hover:bg-[#495057] border border-[#343a40] dark:border-[#f8f9fa] px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      {language === 'es' ? 'Ver Proyecto' : 'View Project'}
                    </Button>
                  )}
                  {index === 3 && (
                    <div className="flex space-x-4 mt-4">
                      <Button
                        onClick={() => openInNewTab(project.url)}
                        className="bg-transparent text-[#343a40] hover:bg-[#e9ecef] dark:text-[#f8f9fa] dark:hover:bg-[#495057] border border-[#343a40] dark:border-[#f8f9fa] px-4 py-2 rounded-md transition-colors duration-300"
                      >
                        {language === 'es' ? 'Ver Proyecto' : 'View Project'}
                      </Button>
                      {project.documentationUrl && (
                        <Button
                          onClick={() => openInNewTab(project.documentationUrl!)}
                          className="bg-transparent text-[#343a40] hover:bg-[#e9ecef] dark:text-[#f8f9fa] dark:hover:bg-[#495057] border border-[#343a40] dark:border-[#f8f9fa] px-4 py-2 rounded-md transition-colors duration-300"
                        >
                          {language === 'es' ? 'Ver Documentación' : 'View Documentation'}
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isWebAppOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white dark:bg-gray-800 w-full h-full sm:w-4/5 sm:h-4/5 rounded-lg overflow-hidden relative">
              <Button
                onClick={() => setIsWebAppOpen(false)}
                className="absolute top-4 right-4 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </Button>
              <iframe
                src={projects[language][0].url}
                className="w-full h-full"
                title={projects[language][0].title}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

