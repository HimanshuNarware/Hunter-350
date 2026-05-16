"use client"

import { motion } from "framer-motion"

const specs = [
  "349cc Engine",
  "20.2 BHP Power",
  "27 Nm Torque",
  "36 KMPL Mileage",
  "5-Speed Gearbox",
  "Dual Channel ABS",
  "Front Disc Brake",
  "Rear Disc Brake",
  "Telescopic Fork",
  "Twin Shock Absorbers",
  "13L Fuel Tank",
  "LED Tail Lamp",
]

export function SpecsMarquee() {
  return (
    <section className="relative py-16 overflow-hidden bg-card/50">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/50 to-transparent z-10" />

        {/* First Marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 pr-12"
        >
          {[...specs, ...specs].map((spec, index) => (
            <div
              key={index}
              className="flex items-center gap-4 whitespace-nowrap"
            >
              <span className="text-2xl md:text-3xl font-bold text-foreground/80">
                {spec}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
