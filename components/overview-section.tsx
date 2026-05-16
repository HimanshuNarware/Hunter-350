"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const features = [
  {
    title: "Urban Warrior",
    description: "Designed for city streets with aggressive styling and nimble handling.",
  },
  {
    title: "Retro Modern",
    description: "Classic Royal Enfield DNA meets contemporary design language.",
  },
  {
    title: "Performance",
    description: "J-series 349cc engine delivers smooth power for everyday rides.",
  },
]

export function OverviewSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const imageX = useTransform(scrollYProgress, [0, 0.5], [-100, 0])
  const textX = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            style={{ scale: imageScale, x: imageX, opacity }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-border/50 rounded-3xl" />
              <div className="absolute -inset-8 border border-border/20 rounded-3xl" />
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl -z-10" />
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/154001244-B4uJ7UgphfEMdJC2OV9qQKN4MxD0ts.webp"
                alt="Royal Enfield Hunter 350 MoonShot Lifestyle"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            style={{ x: textX, opacity }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4"
              >
                The Machine
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Pure Street
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Presence
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              The Hunter 350 MoonShot is more than a motorcycle—it&apos;s a statement. 
              With its bold artistic tank graphics, aggressive stance, and the 
              unmistakable thump of a Royal Enfield engine, every ride becomes an 
              urban adventure.
            </motion.p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
