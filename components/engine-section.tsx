"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Zap, Gauge, Wind, Heart } from "lucide-react"

const engineSpecs = [
  {
    icon: Zap,
    value: "349cc",
    label: "Displacement",
    description: "J-series single cylinder",
  },
  {
    icon: Gauge,
    value: "20.2 bhp",
    label: "Max Power",
    description: "@ 6100 RPM",
  },
  {
    icon: Wind,
    value: "27 Nm",
    label: "Max Torque",
    description: "@ 4000 RPM",
  },
  {
    icon: Heart,
    value: "5-Speed",
    label: "Transmission",
    description: "Constant mesh gearbox",
  },
]

export function EngineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageX = useTransform(scrollYProgress, [0, 0.5], [200, 0])
  const textX = useTransform(scrollYProgress, [0, 0.5], [-200, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const rotateEngine = useTransform(scrollYProgress, [0, 1], [10, -10])

  return (
    <section
      id="engine"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card via-background to-background" />
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-border/20"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            style={{ x: textX, opacity }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4"
            >
              Powertrain
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              The Heart of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Performance
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              The J-series 349cc engine delivers a perfect balance of power and 
              refinement. With smooth torque delivery across the rev range, every 
              twist of the throttle feels controlled and confident.
            </motion.p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-6">
              {engineSpecs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl p-5 group hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <spec.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        {spec.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {spec.label}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            style={{ x: imageX, opacity }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              style={{ rotate: rotateEngine }}
              className="relative"
            >
              {/* Glowing backdrop */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 60%)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Main Engine Image */}
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69dca6a41ace4-ThNHSuZa9NXSAiGBXntwijq03ZBOqX.avif"
                  alt="Royal Enfield Hunter 350 Engine"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 border border-primary/30"
              >
                <p className="text-primary font-bold text-lg">349cc</p>
                <p className="text-muted-foreground text-xs">J-Series</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
