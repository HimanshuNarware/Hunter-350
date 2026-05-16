"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/himanshu_narware0/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/Engineer_freakk", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/himanshunarware/", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-black/20">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover invert"
                  >
                    <source src="/icon/Piston%20(2).mp4" type="video/mp4" />
                  </video>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Royal Enfield</p>
                  <p className="text-muted-foreground text-sm">Since 1901</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The oldest global motorcycle brand in continuous production, 
                crafting premium motorcycles for pure riding experiences.
              </p>
            </motion.div>
          </div>

          {/* Social Links Moved Here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-3 flex items-center justify-end gap-6"
          >
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Royal Enfield. All rights reserved.
          </p>


        </motion.div>
      </div>
    </footer>
  )
}
