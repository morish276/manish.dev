"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Android Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="code-window w-64 h-64 mx-auto mb-8"
        >
          <div className="code-window-header">
            <div className="code-window-circle bg-code-red"></div>
            <div className="code-window-circle bg-code-yellow"></div>
            <div className="code-window-circle bg-code-green"></div>
            <div className="ml-2 text-xs text-code-comment">terminal</div>
          </div>
          <div className="code-window-content flex flex-col justify-center items-center h-[calc(100%-32px)]">
            <div className="text-center">
              <div className="text-code-comment mb-2">// Hello World</div>
              <div className="text-code-keyword">
                const <span className="text-code-variable">developer</span> = {`{`}
              </div>
              <div className="pl-4 text-code-variable">
                name: <span className="text-code-string">"Manish Oraon"</span>,
              </div>
              <div className="pl-4 text-code-variable">
                role: <span className="text-code-string">"{text}"</span>
                <span className="typing-cursor"></span>
              </div>
              <div className="text-code-keyword">{`}`};</div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-code-green">Manish</span>
          <span className="text-code-yellow">.</span>
          <span className="text-code-blue">Oraon</span>
          <span className="text-code-purple">()</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="text-code-comment">// BTech in Computer Science and Engineering</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="#projects">
            <Button size="lg" className="bg-code-green hover:bg-code-green/90 text-background">
              <span className="text-code-bg">view</span>
              <span className="text-code-bg">.projects()</span>
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="border-code-purple text-code-purple hover:bg-code-purple/20">
              <span>contact</span>
              <span>.me()</span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Link href="#about">
            <ArrowDown className="h-8 w-8 text-code-green" />
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
    </section>
  )
}
