"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/new3.69L%20ex-showr",
    alt: "Hunter Profile",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/%23royal%20enfield%20%23hunterhunter%20350%20bike%20%23aesthetic.jpeg",
    alt: "Aesthetic Shot",
    span: "lg:col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/royal-enfield-hunter-350-moonshot-white-hero-tdLDoXciSEKlnKSYMcyPTc8c25nOuk.webp",
    alt: "Hunter 350 MoonShot Full View",
    span: "lg:col-span-1",
  },
  {
    src: "/new.jpg",
    alt: "New Hunter View",
    span: "lg:col-span-2",
  },
  {
    src: "/Royal%20Enfield%20Hunter%20350%20Dapper%20White.jpeg",
    alt: "Dapper White Close-up",
    span: "lg:col-span-1",
  },
]

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Every Angle,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              A Masterpiece
            </span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image.src)}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${image.span}`}
            >
              <div className="relative aspect-[4/3] w-full h-full min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-foreground font-medium text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {image.alt}
                  </p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-8"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full glass text-foreground hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full aspect-video"
          >
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
