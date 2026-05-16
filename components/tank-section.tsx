"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const tankFeatures = [
  "Muscular Tank Design",
  "Premium Paint Finish",
  "Artistic Graphics",
  "Retro-Modern Styling",
]

export function TankSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2])

  return (
    <section
      id="design"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Animated Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Iconic Design
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            The Fuel Tank
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A canvas of expression. The MoonShot edition features unique artistic 
            graphics that tell a story of cosmic exploration and urban freedom.
          </p>
        </motion.div>

        {/* Tank Image with Effects */}
        <motion.div
          style={{ y: imageY, scale, rotate, opacity }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/royal-enfield-hunter-350-moonshot-macro-HC4JDELIaMVolFCJUIV8rmoJT4Oo4g.webp"
              alt="Royal Enfield Hunter 350 MoonShot Fuel Tank Detail"
              width={1200}
              height={800}
              className="w-full h-auto object-cover filter grayscale brightness-105 contrast-[1.2] -scale-x-100"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {tankFeatures.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-6 text-center group hover:bg-primary/10 transition-all duration-300"
            >
              <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300" />
              <p className="text-foreground font-medium">{feature}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      </div>
    </section>
  )
}
