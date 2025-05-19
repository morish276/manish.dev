"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="code-window h-[400px] relative overflow-hidden">
              <div className="code-window-header">
                <div className="code-window-circle bg-code-red"></div>
                <div className="code-window-circle bg-code-yellow"></div>
                <div className="code-window-circle bg-code-green"></div>
                <div className="ml-2 text-xs text-code-comment">about.jsx</div>
              </div>
              <div className="relative h-[calc(100%-32px)]">
                <Image
                  src="/images/profile.png"
                  alt="Manish Oraon"
                  width={500}
                  height={400}
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-code-bg/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 font-mono text-sm">
                  <div className="text-code-comment">// Profile Image</div>
                  <div className="text-code-keyword">
                    import <span className="text-code-variable">Developer</span> from{" "}
                    <span className="text-code-string">'@/manish-oraon'</span>;
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-code-yellow text-code-bg p-4 rounded-lg shadow-lg">
              <p className="font-bold">Aspiring Developer</p>
            </div>
          </motion.div>

          <div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 relative">
              <span className="text-code-green">&lt;</span>
              About Me
              <span className="text-code-green">/&gt;</span>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-code-green"></span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground">
              <p>
                <span className="text-code-purple">class</span> <span className="text-code-blue">ManishOraon</span>{" "}
                {`{`}
              </p>
              <p className="pl-4">
                I'm a passionate Android developer with a strong foundation in Computer Science and Engineering. I
                specialize in creating beautiful, functional, and user-friendly mobile applications using Java and
                Kotlin.
              </p>
              <p className="pl-4">
                Currently pursuing my BTech in Computer Science and Engineering, I'm dedicated to applying theoretical
                knowledge to practical projects. I'm constantly learning and adapting to new technologies to stay at the
                forefront of mobile development.
              </p>
              <p>{`}`}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-6">
              <div className="code-window p-3">
                <h3 className="font-bold text-lg text-code-blue">Education</h3>
                <p className="text-muted-foreground">BTech in Computer Science and Engineering</p>
              </div>
              <div className="code-window p-3">
                <h3 className="font-bold text-lg text-code-blue">Location</h3>
                <p className="text-muted-foreground">West Bengal, India</p>
              </div>
              <div className="code-window p-3">
                <h3 className="font-bold text-lg text-code-blue">Languages</h3>
                <p className="text-muted-foreground">Kotlin, Java</p>
              </div>
              <div className="code-window p-3">
                <h3 className="font-bold text-lg text-code-blue">Interests</h3>
                <p className="text-muted-foreground">Mobile Development, UI/UX Design</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
