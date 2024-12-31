"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Network, GitBranch, Cloud, Brain, Code, Cpu, ChevronDown, ChevronUp } from 'lucide-react'
import { CertificateModal } from './certificate-modal'
import { useLanguage } from '@/contexts/LanguageContext'

export function Skills() {
  const { language } = useLanguage()
  const [selectedCertificate, setSelectedCertificate] = useState<{ name: string; url: string } | null>(null)
  const [expandedSkills, setExpandedSkills] = useState<string[]>([])

  const skills = {
    es: [
      {
        title: "Redes y Administración de Bases de Datos",
        icon: Network,
        color: "from-[#f8f9fa] to-[#ffffff]",
        skills: [
          "Diseño y gestión de redes escalables, con un enfoque en alta disponibilidad y rendimiento.",
          "Administración avanzada de clústeres MySQL, optimización de bases de datos y resolución de problemas críticos."
        ],
        certifications: [
          { name: "CCNA", description: "Garantiza conocimientos en redes, configuración de routers y switches.", pdf: "/certificates/CCNA.pdf" },
          { name: "LPIC-1", description: "Gestión avanzada de sistemas Linux, esenciales para la administración de redes y servidores.", pdf: "/certificates/LPIC-1.pdf" }
        ]
      },
      {
        title: "Desarrollador Full-Stack",
        icon: Code,
        color: "from-[#ffffff] to-[#f8f9fa]",
        skills: [
          "Desarrollo de aplicaciones web escalables con Next.js y bases de datos no relacionales como MongoDB.",
          "Integración de APIs RESTful y GraphQL, optimizando la comunicación entre frontend y backend.",
          "Despliegue de aplicaciones en plataformas cloud como Vercel y Heroku, asegurando prácticas de desarrollo seguro.",
          "Diseño de interfaces responsivas con Tailwind CSS."
        ],
        certifications: [
          { name: "SCRUM Foundation", description: "Gestión ágil de proyectos de desarrollo.", pdf: "/certificates/SCRUM_Foundation.pdf" },
          { name: "LPIC-1", description: "Configuración de servidores y despliegue en entornos Linux.", pdf: "/certificates/LPIC-1.pdf" }
        ]
      },
      {
        title: "Gestión de Proyectos y Metodologías Ágiles",
        icon: GitBranch,
        color: "from-[#f8f9fa] to-[#ffffff]",
        skills: [
          "Planificación y ejecución de proyectos internacionales, asegurando una comunicación efectiva en equipos multiculturales.",
          "Implementación de metodologías ágiles para mejorar la eficiencia y adaptabilidad de los equipos."
        ],
        certifications: [
          { name: "PRINCE2 Foundation", description: "Gestión estructurada de proyectos desde la planificación hasta la finalización.", pdf: "/certificates/PRINCE2_Foundation.pdf" },
          { name: "SCRUM Foundation", description: "Metodología ágil para mejorar la colaboración y entrega de proyectos.", pdf: "/certificates/SCRUM_Foundation.pdf" }
        ]
      },
      {
        title: "Infraestructura Cloud y Sistemas Escalables",
        icon: Cloud,
        color: "from-[#ffffff] to-[#f8f9fa]",
        skills: [
          "Diseño e implementación de soluciones en la nube para optimizar recursos y garantizar escalabilidad.",
          "Integración de sistemas con múltiples tecnologías para crear infraestructuras cohesivas."
        ],
        certifications: [
          { name: "ITIL Foundation", description: "Mejora de procesos de TI mediante un enfoque centrado en la entrega de valor y la eficiencia operativa.", pdf: "/certificates/ITIL_Foundation.pdf" }
        ]
      },
      {
        title: "Inteligencia Artificial y Aprendizaje Automático",
        icon: Brain,
        color: "from-[#ffffff] to-[#f8f9fa]",
        skills: [
          "Desarrollo de soluciones de aprendizaje automático aplicadas a telecomunicaciones y multimedia.",
          "Implementación de modelos predictivos y análisis de datos con Python y Google Colab.",
          "Uso de librerías como scikit-learn, TensorFlow y Keras para diseño y entrenamiento de modelos."
        ],
        certifications: [
          { name: "Google AI: Machine Learning Crash Course", description: "Validación de conocimientos en aprendizaje automático y TensorFlow.", pdf: "/certificates/Google_AI_Crash_Course.pdf" }
        ]
      },
      {
        title: "Sistemas Embebidos y Telemetría",
        icon: Cpu,
        color: "from-[#f8f9fa] to-[#ffffff]",
        skills: [
          "Diseño y programación de microcontroladores para integrar sensores y adquirir datos en tiempo real.",
          "Implementación de sistemas de telemetría para monitoreo remoto y control de dispositivos.",
          "Configuración de protocolos como I2C, SPI y UART para comunicación eficiente.",
          "Desarrollo de sistemas embebidos aplicados a telecomunicaciones y monitoreo industrial.",
          "Análisis de datos de sensores para optimizar rendimiento y eficiencia."
        ],
        certifications: [
          { name: "Introduction to Embedded Systems Software and Development Environments", description: "Curso gratuito ofrecido por la Universidad de Colorado Boulder que cubre los fundamentos de sistemas embebidos y herramientas de desarrollo.", pdf: "/certificates/Embedded_Systems_Coursera.pdf" }
        ]
      }
    ],
    en: [
      {
        title: "Networks and Database Administration",
        icon: Network,
        color: "from-[#f8f9fa] to-[#ffffff]",
        skills: [
          "Design and management of scalable networks, focusing on high availability and performance.",
          "Advanced administration of MySQL clusters, database optimization, and critical problem-solving."
        ],
        certifications: [
          { name: "CCNA", description: "Ensures knowledge in networking, router and switch configuration.", pdf: "/certificates/CCNA.pdf" },
          { name: "LPIC-1", description: "Advanced management of Linux systems, essential for network and server administration.", pdf: "/certificates/LPIC-1.pdf" }
        ]
      },
      {
        title: "Full-Stack Developer",
        icon: Code,
        color: "from-[#ffffff] to-[#f8f9fa]",
        skills: [
          "Development of scalable web applications with Next.js and non-relational databases like MongoDB.",
          "Integration of RESTful and GraphQL APIs, optimizing communication between frontend and backend.",
          "Deployment of applications on cloud platforms such as Vercel and Heroku, ensuring secure development practices.",
          "Design of responsive interfaces with Tailwind CSS."
        ],
        certifications: [
          { name: "SCRUM Foundation", description: "Agile management of development projects.", pdf: "/certificates/SCRUM_Foundation.pdf" },
          { name: "LPIC-1", description: "Server configuration and deployment in Linux environments.", pdf: "/certificates/LPIC-1.pdf" }
        ]
      },
      {
        title: "Project Management and Agile Methodologies",
        icon: GitBranch,
        color: "from-[#f8f9fa] to-[#ffffff]",
        skills: [
          "Planning and execution of international projects, ensuring effective communication in multicultural teams.",
          "Implementation of agile methodologies to improve team efficiency and adaptability."
        ],
        certifications: [
          { name: "PRINCE2 Foundation", description: "Structured project management from planning to completion.", pdf: "/certificates/PRINCE2_Foundation.pdf" },
          { name: "SCRUM Foundation", description: "Agile methodology to improve collaboration and project delivery.", pdf: "/certificates/SCRUM_Foundation.pdf" }
        ]
      },
      {
        title: "Cloud Infrastructure and Scalable Systems",
        icon: Cloud,
        color: "from-[#ffffff] to-[#f8f9fa]",
        skills: [
          "Design and implementation of cloud solutions to optimize resources and ensure scalability.",
          "Integration of systems with multiple technologies to create cohesive infrastructures."
        ],
        certifications: [
          { name: "ITIL Foundation", description: "Improvement of IT processes through a focus on value delivery and operational efficiency.", pdf: "/certificates/ITIL_Foundation.pdf" }
        ]
      },
      {
        title: "Artificial Intelligence and Machine Learning",
        icon: Brain,
        color: "from-[#ffffff] to-[#f8f9fa]",
        skills: [
          "Development of machine learning solutions applied to telecommunications and multimedia.",
          "Implementation of predictive models and data analysis using Python and Google Colab.",
          "Use of libraries such as scikit-learn, TensorFlow, and Keras for model design and training."
        ],
        certifications: [
          { name: "Google AI: Machine Learning Crash Course", description: "Validation of knowledge in machine learning and TensorFlow.", pdf: "/certificates/Google_AI_Crash_Course.pdf" }
        ]
      },
      {
        title: "Embedded Systems and Telemetry",
        icon: Cpu,
        color: "from-[#f8f9fa] to-[#ffffff]",
        skills: [
          "Design and programming of microcontrollers to integrate sensors and acquire real-time data.",
          "Implementation of telemetry systems for remote monitoring and device control.",
          "Configuration of protocols such as I2C, SPI, and UART for efficient communication.",
          "Development of embedded systems applied to telecommunications and industrial monitoring.",
          "Analysis of sensor data to optimize performance and efficiency."
        ],
        certifications: [
          { name: "Introduction to Embedded Systems Software and Development Environments", description: "Free course offered by the University of Colorado Boulder covering the fundamentals of embedded systems and development tools.", pdf: "/certificates/Embedded_Systems_Coursera.pdf" }
        ]
      }
    ]
  }

  const toggleSkillExpansion = (title: string) => {
    setExpandedSkills(prev =>
      prev.includes(title) ? prev.filter(skill => skill !== title) : [...prev, title]
    )
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] dark:from-[#1a1d1f] dark:to-[#2a2d2f]">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#343a40] to-[#495057] dark:from-[#f8f9fa] dark:to-[#ced4da]">
            {language === 'es' ? 'Mis Habilidades' : 'My Skills'}
          </h2>
          <p className="text-lg text-[#495057] dark:text-[#adb5bd] max-w-3xl mx-auto">
            {language === 'es'
              ? 'Mi experiencia y certificaciones respaldan un conjunto de habilidades técnicas avanzadas en telecomunicaciones, desarrollo full-stack, análisis de datos y gestión de proyectos.'
              : 'My experience and certifications support a set of advanced technical skills in telecommunications, full-stack development, data analysis, and project management.'}
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center w-full max-w-7xl">
          {skills[language].map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#ffffff]/30 dark:bg-[#2a2d2f]/30 border-0 overflow-hidden h-full shadow-lg backdrop-blur-sm group hover:bg-[#f8f9fa]/50 dark:hover:bg-[#343a40]/50 transition-all duration-300">
                <CardHeader className={`bg-gradient-to-r ${skill.color} dark:from-[#343a40] dark:to-[#495057] p-6 group-hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-center gap-4">
                    <skill.icon className="h-8 w-8 text-[#495057] dark:text-[#ced4da]" />
                    <CardTitle className="text-xl font-bold text-[#343a40] dark:text-[#f8f9fa]">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-[#343a40] dark:text-[#f8f9fa] mb-2">
                    {language === 'es' ? 'Habilidades:' : 'Skills:'}
                  </h4>
                  <ul className="list-disc list-inside mb-4">
                    {skill.skills.slice(0, 2).map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[#495057] dark:text-[#adb5bd] mb-2">{item}</li>
                    ))}
                  </ul>
                  <AnimatePresence>
                    {expandedSkills.includes(skill.title) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="list-disc list-inside mb-4">
                          {skill.skills.slice(2).map((item, itemIndex) => (
                            <li key={itemIndex + 2} className="text-[#495057] dark:text-[#adb5bd] mb-2">{item}</li>
                          ))}
                        </ul>
                        <h4 className="font-semibold text-[#343a40] dark:text-[#f8f9fa] mb-2">
                          {language === 'es' ? 'Certificaciones Relacionadas:' : 'Related Certifications:'}
                        </h4>
                        <div className="space-y-2">
                          {skill.certifications.map((cert, certIndex) => (
                            <div key={certIndex} className="flex flex-col">
                              <Badge
                                variant="secondary"
                                className="self-start mb-1 cursor-pointer hover:bg-[#e9ecef] dark:hover:bg-[#495057] transition-colors"
                                onClick={() => setSelectedCertificate({ name: cert.name, url: cert.pdf })}
                              >
                                {cert.name}
                              </Badge>
                              <p className="text-sm text-[#6c757d] dark:text-[#adb5bd]">{cert.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 w-full justify-between"
                    onClick={() => toggleSkillExpansion(skill.title)}
                  >
                    {expandedSkills.includes(skill.title)
                      ? (language === 'es' ? 'Mostrar menos' : 'Show less')
                      : (language === 'es' ? 'Mostrar más' : 'Show more')
                    }
                    {expandedSkills.includes(skill.title) ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          certificateName={selectedCertificate.name}
          certificateUrl={selectedCertificate.url}
        />
      )}
    </section>
  )
}

