"use client"

import { motion } from "framer-motion"
import { 
  Gauge, 
  Shield, 
  Palette, 
  Cpu, 
  Disc, 
  Lightbulb,
  Bike,
  Wrench
} from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Digital-Analog Console",
    description: "A perfect blend of classic styling with modern digital readouts for essential information.",
  },
  {
    icon: Shield,
    title: "Dual Channel ABS",
    description: "Enhanced safety with dual-channel anti-lock braking system for confident stopping.",
  },
  {
    icon: Palette,
    title: "Unique Graphics",
    description: "Exclusive MoonShot artwork featuring cosmic themes and artistic expressions.",
  },
  {
    icon: Cpu,
    title: "Fuel Injection",
    description: "Electronic fuel injection ensures optimal performance and better fuel efficiency.",
  },
  {
    icon: Disc,
    title: "Disc Brakes",
    description: "Front and rear disc brakes provide powerful and progressive braking performance.",
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Modern LED tail lamp with clear lens design for enhanced visibility.",
  },
  {
    icon: Bike,
    title: "Alloy Wheels",
    description: "Stylish alloy wheels reduce unsprung mass for better handling.",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    description: "Designed for hassle-free maintenance with accessible service points.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

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
            Specifications
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Every Detail
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Perfected
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the roar of its engine to the precision of its brakes, every aspect 
            of the Hunter 350 has been engineered for the ultimate riding experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-foreground font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
