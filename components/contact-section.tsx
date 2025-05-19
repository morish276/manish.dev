"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Linkedin, Github, Twitter, Instagram, MessageSquare } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
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

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            <span className="text-code-keyword">async function</span> <span className="text-code-blue">contactMe</span>
            () {"{"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            <span className="text-code-comment">
              // Have a project in mind or want to discuss potential opportunities?
            </span>
            <br />
            <span className="text-code-comment">// Feel free to reach out to me through any of the channels below</span>
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-code-blue">const contactInfo = {"{"};</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 code-window p-4">
                <div className="bg-code-green/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-code-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-code-blue">
                    email<span className="text-code-purple">:</span>
                  </h4>
                  <Link
                    href="mailto:moraon276@gmail.com"
                    className="text-muted-foreground hover:text-code-green transition-colors"
                  >
                    "moraon276@gmail.com"
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 code-window p-4">
                <div className="bg-code-green/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-code-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-code-blue">
                    telegram<span className="text-code-purple">:</span>
                  </h4>
                  <Link
                    href="https://t.me/Mj7Cv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-code-green transition-colors"
                  >
                    "@Mj7Cv"
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-code-blue">const socialLinks = [...];</h3>
              <div className="flex gap-4">
                <Link href="https://linkedin.com/in/manish-oraon-b86874257" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-code-blue text-code-blue hover:bg-code-blue/10"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://github.com/morish276" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-code-purple text-code-purple hover:bg-code-purple/10"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://x.com/ManishOraon276" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-code-green text-code-green hover:bg-code-green/10"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/manishoraon58/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-code-yellow text-code-yellow hover:bg-code-yellow/10"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-code-blue">
              await sendMessage<span className="text-code-purple">()</span>;
            </h3>

            <form className="space-y-4 code-window p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-code-blue">
                    name<span className="text-code-purple">:</span>
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-code-bg border-code-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-code-blue">
                    email<span className="text-code-purple">:</span>
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-code-bg border-code-border" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-code-blue">
                  subject<span className="text-code-purple">:</span>
                </label>
                <Input id="subject" placeholder="Subject of your message" className="bg-code-bg border-code-border" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-code-blue">
                  message<span className="text-code-purple">:</span>
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} className="bg-code-bg border-code-border" />
              </div>

              <Button className="w-full bg-code-yellow text-code-bg hover:bg-code-yellow/90">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-code-purple">{"}"}</p>
        </div>
      </div>
    </section>
  )
}
