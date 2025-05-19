"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronRight, ChevronLeft, Star, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeProject, setActiveProject] = useState(0)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = [
    {
      title: "FitTrack Pro",
      description:
        "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Kotlin", "MVVM", "Room", "Retrofit"],
      stars: 48,
      link: "#",
      github: "#",
    },
    {
      title: "ShopSmart",
      description:
        "E-commerce application with product catalog, cart management, payment integration, and order tracking.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Kotlin", "Jetpack Compose", "Firebase"],
      stars: 36,
      link: "#",
      github: "#",
    },
    {
      title: "WeatherNow",
      description: "Real-time weather forecasting app with location-based updates, alerts, and interactive maps.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Java", "Retrofit", "Google Maps API"],
      stars: 29,
      link: "#",
      github: "#",
    },
    {
      title: "TaskMaster",
      description: "Productivity app with task management, reminders, and collaboration features for teams.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Kotlin", "Room", "WorkManager"],
      stars: 42,
      link: "#",
      github: "#",
    },
    {
      title: "NoteTaker",
      description: "Simple note-taking app with cloud sync and rich text formatting.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Kotlin", "Firebase", "Material Design"],
      stars: 27,
      link: "#",
      github: "#",
    },
    {
      title: "MusicPlayer",
      description: "Custom music player with playlist management and audio visualization.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Java", "ExoPlayer", "MediaStore"],
      stars: 33,
      link: "#",
      github: "#",
    },
    {
      title: "RecipeBook",
      description: "Recipe collection app with search, filtering, and meal planning features.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Kotlin", "Room", "Retrofit"],
      stars: 19,
      link: "#",
      github: "#",
    },
    {
      title: "BudgetTracker",
      description: "Personal finance app for tracking expenses and income with visualization.",
      image: "/placeholder.svg?height=600&width=300",
      tags: ["Kotlin", "MPAndroidChart", "Room"],
      stars: 31,
      link: "#",
      github: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const slideVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const toggleAllProjects = () => {
    setShowAllProjects(!showAllProjects)
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            <span className="text-code-keyword">export default</span> <span className="text-code-blue">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            <span className="text-code-comment">// Here are some of my recent Android development projects</span>
            <br />
            <span className="text-code-comment">// Each project showcases different skills and technologies</span>
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="code-window h-[600px] relative overflow-hidden">
            <div className="code-window-header">
              <div className="code-window-circle bg-code-red"></div>
              <div className="code-window-circle bg-code-yellow"></div>
              <div className="code-window-circle bg-code-green"></div>
              <div className="ml-2 text-xs text-code-comment">project-preview.jsx</div>
            </div>
            <div className="relative h-[calc(100%-32px)]">
              <Image
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].title}
                width={300}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-code-bg/80 via-code-bg/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-2 mb-2">
                  {projects[activeProject].tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-code-green/20 text-code-green hover:bg-code-green/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{projects[activeProject].title}</h3>
                <p className="text-muted-foreground mb-4">{projects[activeProject].description}</p>
                <div className="flex gap-3">
                  <Button size="sm" variant="default" className="bg-code-green hover:bg-code-green/90 text-code-bg">
                    <ExternalLink className="h-4 w-4 mr-2" /> View Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-code-purple border-code-purple hover:bg-code-purple/10"
                  >
                    <Github className="h-4 w-4 mr-2" /> Source Code
                  </Button>
                </div>
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={prevProject}
                  className="rounded-full bg-code-bg/30 hover:bg-code-bg/50 text-foreground"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={nextProject}
                  className="rounded-full bg-code-bg/30 hover:bg-code-bg/50 text-foreground"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-code-blue">const projects = [</h3>

            {projects.slice(0, 4).map((project, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all code-window ${activeProject === index ? "border-code-green" : ""}`}
                onClick={() => setActiveProject(index)}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-lg text-code-blue">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-code-yellow fill-code-yellow" />
                    <span className="text-sm text-muted-foreground">{project.stars}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-code-border text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs border-code-border text-muted-foreground">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}

            <h3 className="text-2xl font-bold text-code-blue">];</h3>

            <Button
              variant="outline"
              className="w-full border-code-purple text-code-purple hover:bg-code-purple/10"
              onClick={toggleAllProjects}
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* All Projects Slide */}
      <AnimatePresence>
        {showAllProjects && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-full md:w-2/3 lg:w-1/2 bg-code-bg border-l border-code-border overflow-y-auto"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-code-bg border-b border-code-border">
                <h2 className="text-xl font-bold">
                  <span className="text-code-keyword">const</span> <span className="text-code-blue">allProjects</span>{" "}
                  <span className="text-code-purple">=</span> [...]
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleAllProjects}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <Card key={index} className="code-window">
                      <div className="relative h-40">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-code-bg/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="font-bold text-foreground">{project.title}</h3>
                        </div>
                      </div>
                      <CardHeader className="p-3 pb-0">
                        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="p-3 flex justify-between items-center">
                        <div className="flex gap-2">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-xs border-code-green/30 text-code-green"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-code-yellow fill-code-yellow" />
                          <span className="text-xs text-muted-foreground">{project.stars}</span>
                        </div>
                      </CardFooter>
                      <div className="px-3 pb-3 flex gap-2">
                        <Button
                          size="sm"
                          variant="default"
                          className="w-1/2 bg-code-green hover:bg-code-green/90 text-code-bg"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" /> Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-1/2 text-code-purple border-code-purple hover:bg-code-purple/10"
                        >
                          <Github className="h-3 w-3 mr-1" /> Code
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
