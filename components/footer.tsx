import { Frame } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-code-bg py-12 px-4 border-t border-code-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Frame className="w-6 h-6 text-code-green" />
              <span className="text-code-green">
                Manish<span className="text-code-yellow">.</span>dev
              </span>
            </Link>
            <p className="text-muted-foreground">
              <span className="text-code-comment">// Creating innovative mobile experiences</span>
              <br />
              <span className="text-code-comment">// with cutting-edge Android technologies</span>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-code-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-code-blue">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> Android App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> App Maintenance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> Performance Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-code-green transition-colors">
                  <span className="text-code-purple">&gt;</span> Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-code-border mt-8 pt-8 text-center text-muted-foreground">
          <p className="text-code-comment">/* © {new Date().getFullYear()} Manish Oraon. All rights reserved. */</p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-code-comment">// Designed with </span>
            <span className="text-code-red">♥</span>
            <span className="text-code-comment"> by Manish Oraon</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
