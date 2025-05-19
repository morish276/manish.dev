"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Layout, Smartphone, Zap, GitBranch, Server, Shield } from "lucide-react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      icon: <Smartphone className="h-10 w-10 text-code-green" />,
      title: "Android SDK",
      description: "Expert in Android SDK, UI components, and platform APIs",
    },
    {
      icon: <Code className="h-10 w-10 text-code-green" />,
      title: "Kotlin & Java",
      description: "Proficient in Kotlin and Java programming languages",
    },
    {
      icon: <Layout className="h-10 w-10 text-code-green" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
    },
    {
      icon: <Database className="h-10 w-10 text-code-green" />,
      title: "Room & SQLite",
      description: "Local database management and persistence",
    },
    {
      icon: <Zap className="h-10 w-10 text-code-green" />,
      title: "Jetpack Compose",
      description: "Modern UI toolkit for Android development",
    },
    {
      icon: <GitBranch className="h-10 w-10 text-code-green" />,
      title: "Git & CI/CD",
      description: "Version control and automated deployment",
    },
    {
      icon: <Server className="h-10 w-10 text-code-green" />,
      title: "RESTful APIs",
      description: "Integration with backend services and APIs",
    },
    {
      icon: <Shield className="h-10 w-10 text-code-green" />,
      title: "App Security",
      description: "Implementing secure authentication and data protection",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            <span className="text-code-purple">function</span> <span className="text-code-blue">mySkills</span>() {"{"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            <span className="text-code-comment">// I specialize in Android development with a focus on creating</span>
            <br />
            <span className="text-code-comment">// performant, beautiful, and user-friendly mobile applications</span>
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="code-window p-6"
            >
              <div className="mb-4 text-code-green">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-code-blue">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-code-purple">{"}"}</p>
        </div>
      </div>
    </section>
  )
}
