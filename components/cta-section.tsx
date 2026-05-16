"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, MapPin, Phone, Calendar } from "lucide-react"

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="book"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        
        {/* Large gradient orb */}
        <motion.div
          style={{ y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-3xl" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative max-w-5xl mx-auto px-6"
      >
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
                Ready to Ride?
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Experience the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  MoonShot
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Book a test ride at your nearest Royal Enfield dealership and feel 
                the thrill of the Hunter 350.
              </p>
            </motion.div>

            {/* Action Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-4 mb-12"
            >
              <a
                href="https://www.google.com/maps/search/Royal+Enfield+showroom+near+me"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Find Dealer</h3>
                <p className="text-muted-foreground text-sm">
                  Open Google Maps for the nearest Royal Enfield showroom
                </p>
              </a>

              <a
                href="https://www.royalenfield.com/in/en/book-a-test-ride/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Test Ride</h3>
                <p className="text-muted-foreground text-sm">
                  Visit Royal Enfield’s test ride booking page
                </p>
              </a>

              <a
                href="https://www.royalenfield.com/in/en/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Contact Us</h3>
                <p className="text-muted-foreground text-sm">
                  Go to the official Royal Enfield contact page
                </p>
              </a>
            </motion.div>

            {/* Main CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://www.royalenfield.com/in/en/motorcycles/hunter-350/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 bg-transparent border-2 border-dotted border-primary text-white rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
              >
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.royalenfield.com/in/en/motorcycles/hunter-350/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 glass rounded-full font-semibold text-foreground hover:bg-white/10 transition-all duration-300"
              >
                Download Brochure
              </a>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
