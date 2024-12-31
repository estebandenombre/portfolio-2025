"use client"


import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

import { GraduationCap, Briefcase, Globe, Award, Star, Heart, type LucideIcon } from 'lucide-react'

import { useLanguage } from '@/contexts/LanguageContext'


interface TimelineItem {
  title: string;
  description: string;
  date: string;
  logo: string;
  achievements?: string[];
  details?: string;
  tags?: React.ReactNode;
}

interface TimelineSection {
  id: string;
  icon: LucideIcon;
  title: string;
  items: TimelineItem[];
}

type Timeline = {
  [key: string]: TimelineSection[];
};

const timeline: Timeline = {
  es: [
    {
      id: "education",
      icon: GraduationCap,
      title: "Educación",
      items: [
        {
          title: "Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación",
          description: "Universidad Politécnica de Valencia",
          achievements: [
            "Mención de Alto Rendimiento Académico",
            "TFG: Sistema de Localización Híbrido (Calificación 10/10)"
          ],
          date: "2018 - 2022",
          logo: "/placeholder.svg?height=100&width=100"
        },
        {
          title: "Programa Erasmus",
          description: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), Alemania",
          details: "Especialización en Ingeniería Computacional y Multimedia",
          achievements: [
            "FAU clasificada en el Top 50 mundial en Ingeniería de Telecomunicaciones (Shanghai Subject Ranking 2024)",
            "Reconocida como una de las 10 mejores universidades en Alemania en 17 disciplinas, incluida Telecomunicaciones"
          ],
          date: "2021",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "experience",
      icon: Briefcase,
      title: "Experiencia Profesional",
      items: [
        {
          title: "Inelcom - Soporte Avanzado/Gestión de Cambios",
          description: "Implementación de soluciones de ciberseguridad y gestión de redes complejas",
          details: "Reducción del tiempo de inactividad en un 20% y garantía de conectividad del 99.9%",
          date: "Actualidad",
          logo: "/placeholder.svg?height=100&width=100"
        },
        {
          title: "Telefónica",
          description: "Diseño y gestión de clúster MySQL, implementación de medidas de seguridad",
          details: "Mejora del 30% en la escalabilidad y optimización de procesos internos",
          date: "Jul 2023 – Oct 2023",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "languages",
      icon: Globe,
      title: "Idiomas y Experiencia Internacional",
      items: [
        {
          title: "Idiomas",
          description: "Inglés (C1), Francés (A2), Alemán (A2)",
          details: "Experiencia profesional en entornos multiculturales",
          date: "Continuo",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "certifications",
      icon: Award,
      title: "Certificaciones",
      items: [
        {
          title: "Certificaciones Profesionales",
          description: "ITIL Foundation, LPIC-1, ISO 20000 Lead Auditor, SCRUM Foundation, PRINCE2 Foundation, CCNA",
          details: "Validación de conocimientos en gestión de IT, sistemas Linux, metodologías ágiles y redes",
          date: "2020 - 2023",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "travel-volunteer",
      icon: Heart,
      title: "Voluntariado",
      items: [
        {
          title: "Conservación Ambiental en la Selva Negra",
          description: "Selva Negra (Schwarzwald), Baden-Württemberg, Alemania",
          details: "Participación en la reforestación y mantenimiento de senderos en uno de los bosques más emblemáticos de Europa.",
          date: "Verano 2022",
          logo: "/placeholder.svg?height=100&width=100",
          achievements: [
            "Monitoreo de especies de fauna y flora locales, con enfoque en especies en peligro de extinción",
            "Colaboración en actividades de sensibilización ambiental y promoción del ecoturismo sostenible",
            "Aprendizaje práctico sobre técnicas de conservación forestal y gestión de áreas protegidas",
            "Organizado por BUND y asociaciones locales de desarrollo sostenible"
          ]
        }
      ]
    }
  ],
  en: [
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      items: [
        {
          title: "Degree in Telecommunications Technologies and Services Engineering",
          description: "Polytechnic University of Valencia",
          achievements: [
            "High Academic Performance Distinction",
            "Final Degree Project: Hybrid Location System (Perfect score of 10/10)"
          ],
          date: "2018 - 2022",
          logo: "/placeholder.svg?height=100&width=100"
        },
        {
          title: "Erasmus Program",
          description: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), Germany",
          details: "Specialization in Computational Engineering and Multimedia",
          achievements: [
            "FAU ranked in the Top 50 worldwide in Telecommunications Engineering (Shanghai Subject Ranking 2024)",
            "Recognized as one of the top 10 universities in Germany in 17 disciplines, including Telecommunications"
          ],
          date: "2021",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "experience",
      icon: Briefcase,
      title: "Professional Experience",
      items: [
        {
          title: "Inelcom - Advanced Support/Change Management",
          description: "Implementation of cybersecurity solutions and management of complex networks",
          details: "20% reduction in downtime and 99.9% connectivity guarantee",
          date: "Present",
          logo: "/placeholder.svg?height=100&width=100"
        },
        {
          title: "Telefónica",
          description: "Design and management of MySQL cluster, implementation of security measures",
          details: "30% improvement in scalability and optimization of internal processes",
          date: "Jul 2023 – Oct 2023",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "languages",
      icon: Globe,
      title: "Languages and International Experience",
      items: [
        {
          title: "Languages",
          description: "English (C1), French (A2), German (A2)",
          details: "Professional experience in multicultural environments",
          date: "Ongoing",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "certifications",
      icon: Award,
      title: "Certifications",
      items: [
        {
          title: "Professional Certifications",
          description: "ITIL Foundation, LPIC-1, ISO 20000 Lead Auditor, SCRUM Foundation, PRINCE2 Foundation, CCNA",
          details: "Validation of knowledge in IT management, Linux systems, agile methodologies, and networks",
          date: "2020 - 2023",
          logo: "/placeholder.svg?height=100&width=100"
        }
      ]
    },
    {
      id: "travel-volunteer",
      icon: Heart,
      title: "Volunteer Work",
      items: [
        {
          title: "Environmental Conservation in the Black Forest",
          description: "Black Forest (Schwarzwald), Baden-Württemberg, Germany",
          details: "Participation in reforestation and trail maintenance in one of Europe's most iconic forests.",
          date: "Summer 2022",
          logo: "/placeholder.svg?height=100&width=100",
          achievements: [
            "Monitoring of local fauna and flora species, focusing on endangered species",
            "Collaboration in environmental awareness activities and promotion of sustainable ecotourism",
            "Practical learning on forest conservation techniques and protected area management",
            "Organized by BUND and local sustainable development associations"
          ]
        }
      ]
    }
  ]
}

export function AboutMe() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] dark:from-[#1a1d1f] dark:to-[#2a2d2f]">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#343a40] to-[#495057] dark:from-[#f8f9fa] dark:to-[#ced4da]">
            {language === 'es' ? 'Sobre Mí' : 'About Me'}
          </h2>
          <p className="text-lg text-[#495057] dark:text-[#adb5bd] max-w-2xl mx-auto">
            {language === 'es'
              ? 'Un vistazo a mi trayectoria académica y profesional en ingeniería de telecomunicaciones.'
              : 'A glimpse into my academic and professional journey in telecommunications engineering.'}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 w-0.5 h-full bg-gradient-to-b from-[#343a40] to-[#495057] dark:from-[#f8f9fa] dark:to-[#ced4da] transform -translate-x-1/2 hidden sm:block sm:shadow-md"></div>

          {timeline[language].map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 sm:mb-16 flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
            >
              <div className="sm:w-[calc(50%-2rem)] flex justify-center items-start">
                <div className="hidden sm:block absolute left-1/2 w-4 h-4 bg-[#343a40] dark:bg-[#f8f9fa] rounded-full transform -translate-x-1/2 shadow-md"></div>
                <Card className="w-full bg-[#ffffff]/30 dark:bg-[#2a2d2f]/30 border-0 overflow-hidden shadow-lg backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#343a40] dark:bg-[#f8f9fa] rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                        <section.icon className="h-4 w-4 sm:h-6 sm:w-6 text-[#f8f9fa] dark:text-[#343a40]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#343a40] dark:text-[#f8f9fa]">{section.title}</h3>
                    </div>
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="mb-4">
                        <h4 className="font-semibold text-[#495057] dark:text-[#ced4da] text-sm sm:text-base">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-[#6c757d] dark:text-[#adb5bd]">{item.description}</p>
                        <p className="text-xs text-[#6c757d] dark:text-[#adb5bd] mt-1">{item.date}</p>
                        {item.achievements && (
                          <div className="mt-2">
                            {item.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-center text-xs sm:text-sm text-[#495057] dark:text-[#ced4da] mt-1">
                                {section.id === "travel-volunteer" ? (
                                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-red-500 flex-shrink-0" />
                                ) : achievement.includes("FAU") || achievement.includes("Top 50") || achievement.includes("10 mejores") ? (
                                  <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-yellow-500 flex-shrink-0" />
                                ) : (
                                  <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-yellow-500 flex-shrink-0" />
                                )}
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {item.details && <p className="text-xs sm:text-sm text-[#6c757d] dark:text-[#adb5bd] mt-2">{item.details}</p>}
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.tags}
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="hidden sm:block sm:w-16"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

