"use client"

import { motion, useScroll, useTransform, animate, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const stats = [
  { value: "349cc", label: "Engine" },
  { value: "36 kmpl", label: "Mileage" },
  { value: "20.2 bhp", label: "Power" },
  { value: "27 Nm", label: "Torque" },
]

function ScrambleDigit({ targetDigit, delay }: { targetDigit: string; delay: number }) {
  const progress = useMotionValue(0);
  const targetNum = parseInt(targetDigit, 10);
  const digits = Array.from({ length: 20 }, (_, i) => ((i * 3 + targetNum) % 10).toString());
  digits.push(targetDigit);

  const charValue = useTransform(progress, (v) => {
    const index = Math.floor(v);
    return digits[index] || targetDigit;
  });

  useEffect(() => {
    const controls = animate(progress, 20, {
      duration: 2, 
      ease: "linear",
      delay: delay
    });
    return controls.stop;
  }, [delay, progress]);

  return <motion.span className="inline text-white drop-shadow-md">{charValue}</motion.span>;
}

function ScrambleChar({ targetChar, delay }: { targetChar: string; delay: number }) {
  const progress = useMotionValue(0);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  
  const seed = targetChar.charCodeAt(0);
  const chars = Array.from({ length: 15 }, (_, i) => alphabet[(seed + i * 7) % alphabet.length]);
  chars.push(targetChar);

  const charValue = useTransform(progress, (v) => {
    const index = Math.floor(v);
    return chars[index] || targetChar;
  });

  useEffect(() => {
    const controls = animate(progress, 15, {
      duration: 1.5,
      ease: "linear",
      delay: delay
    });
    return controls.stop;
  }, [delay, progress]);

  return <motion.span className="inline">{charValue}</motion.span>;
}

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  let charCounter = 0;
  
  return (
    <span className="inline">
      {words.map((word, wordIndex) => {
        const wordNode = (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((char) => {
              const currentDelay = delay + charCounter * 0.02;
              charCounter++;
              return <ScrambleChar key={charCounter} targetChar={char} delay={currentDelay} />;
            })}
          </span>
        );
        charCounter++; // Account for the space in the delay
        return (
          <span key={`wrap-${wordIndex}`}>
            {wordNode}
            {wordIndex < words.length - 1 && " "}
          </span>
        );
      })}
    </span>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image - Girl with Hunter */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/154001244-B4uJ7UgphfEMdJC2OV9qQKN4MxD0ts.webp"
          alt="Royal Enfield Hunter 350 MoonShot White Lifestyle"
          fill
          className="object-cover object-center -scale-x-100 filter grayscale brightness-95"
          priority
        />
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      {/* Animated Purple Glow Accents */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(192,132,252,0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Content Container - Left Aligned */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-xl">
          {/* Hero Text - Left Aligned */}
          <motion.div
            style={{ y: textY }}
            className="text-left"
          >
            <div className="mb-6 flex flex-col items-start font-['Inter',_system-ui,_sans-serif]">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight flex items-center gap-4"
              >
                <span><ScrambleText text="Hunter" delay={0.4} /></span>
                <div className="flex">
                  <ScrambleDigit targetDigit="3" delay={0.5} />
                  <ScrambleDigit targetDigit="5" delay={0.7} />
                  <ScrambleDigit targetDigit="0" delay={0.9} />
                </div>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              <ScrambleText text="Built for the Streets. Express your individuality with the all-new edition featuring exclusive artwork and bold styling." delay={0.6} />
            </motion.div>

            {/* CTA Buttons - Left Aligned */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://www.royalenfield.com/in/en/motorcycles/hunter-350/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-dotted border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                Book Test Drive
              </a>
              <a
                href="#overview"
                className="px-8 py-4 glass rounded-full font-semibold text-foreground hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/20"
              >
                Explore More
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Stats - Below Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-4 text-left hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <p className="text-xl md:text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
