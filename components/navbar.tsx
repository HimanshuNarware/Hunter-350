"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export function Navbar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(13, 13, 15, 0)", "rgba(13, 13, 15, 0.8)"]
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  )

  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Design", href: "#design" },
    { name: "Engine", href: "#engine" },
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
  ]

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
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
            <span className="text-foreground font-semibold tracking-tight hidden sm:block">
              Royal Enfield
            </span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://www.royalenfield.com/in/en/motorcycles/hunter-350/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-transparent border-2 border-dotted border-primary text-white rounded-full text-sm font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
