"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Award, Lightbulb, Laptop, Rocket } from "lucide-react"

export function ProfessionalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const achievements = [
    {
      icon: <BookOpen className="h-8 w-8 text-code-green" />,
      title: "Academic Excellence",
      description: "Consistently maintained top academic performance in Computer Science coursework",
      badges: ["Data Structures", "Algorithms", "Mobile Development"],
    },
    {
      icon: <Code className="h-8 w-8 text-code-green" />,
      title: "Technical Projects",
      description: "Developed multiple Android applications as part of coursework and personal projects",
      badges: ["Android SDK", "Kotlin", "Java"],
    },
    {
      icon: <Award className="h-8 w-8 text-code-green" />,
      title: "Certifications",
      description: "Completed specialized courses in Android development and mobile UI/UX design",
      badges: ["Android Development", "UI/UX Design", "Mobile Architecture"],
    },
  ]

  const goals = [
    {
      icon: <Lightbulb className="h-8 w-8 text-code-yellow" />,
      title: "Continuous Learning",
      description: "Committed to staying updated with the latest Android development technologies and best practices",
    },
    {
      icon: <Laptop className="h-8 w-8 text-code-yellow" />,
      title: "Portfolio Growth",
      description: "Actively building a diverse portfolio of Android applications to showcase technical skills",
    },
    {
      icon: <Rocket className="h-8 w-8 text-code-yellow" />,
      title: "Career Aspiration",
      description: "Aiming to become a professional Android developer creating impactful mobile experiences",
    },
  ]

  return (
    <section id="professional" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            <span className="text-code-keyword">interface</span>{" "}
            <span className="text-code-blue">ProfessionalProfile</span> {"{"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            <span className="text-code-comment">
              /* While I'm at the beginning of my professional journey, I'm building a strong foundation through
              education, projects, and continuous learning. */
            </span>
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <div>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
              <span className="text-code-purple">@Override</span>
              <br />
              <span className="text-code-blue">achievements</span>() {"{"}
            </motion.h3>

            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full bg-code-bg border-code-border hover:border-code-green/50 transition-all">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{item.icon}</div>
                      <CardTitle className="text-code-blue">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-code-green/10 text-code-green border-code-green/20"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-4">
              <p className="text-code-purple">{"}"}</p>
            </div>
          </div>

          <div>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center">
              <span className="text-code-purple">@Future</span>
              <br />
              <span className="text-code-blue">goals</span>() {"{"}
            </motion.h3>

            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {goals.map((item, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Card className="h-full bg-code-bg border-code-border hover:border-code-yellow/50 transition-all">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{item.icon}</div>
                      <CardTitle className="text-code-blue">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-4">
              <p className="text-code-purple">{"}"}</p>
            </div>
          </div>

          <motion.div variants={itemVariants} className="code-window p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4 text-code-blue">
                readyToCollaborate<span className="text-code-purple">()</span>
              </h3>
              <p className="text-muted-foreground mb-0">
                <span className="text-code-comment">
                  // As a Computer Science student with a passion for Android development,
                </span>
                <br />
                <span className="text-code-comment">
                  // I'm eager to apply my skills and knowledge to real-world projects.
                </span>
                <br />
                <span className="text-code-comment">
                  // I'm open to internships, collaborative projects, and learning opportunities
                </span>
                <br />
                <span className="text-code-comment">// that will help me grow as a developer.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-code-purple">{"}"}</p>
        </div>
      </div>
    </section>
  )
}
