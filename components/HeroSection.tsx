// components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Phone, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Animated background particles
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: i % 3 === 0 ? '#00A8FF' : i % 3 === 1 ? '#00D4FF' : '#E8ECEF'
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 25, 49, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles with lines
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 168, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden bg-navy py-5 md:py-9">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-12"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-br from-navy via-navy/95 to-electric/30" />
      <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-cyan/10" />

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 w-6 h-6 bg-cyan rounded-full blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: -100, rotate: 10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-40 right-20 w-4 h-4 bg-electric rounded-full blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full blur-sm"
      />

      <div className="relative z-10 container-mobile min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-3"
            >
              <Star className="w-4 h-4 text-cyan" fill="currentColor" />
              <span className="font-subheading text-sm">Trusted by Arkansas Families</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-6"
            >
              You've Found Your<span className="text-gradient"> Legal </span> Advocate
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[19px] text-silver leading-relaxed mb-8 max-w-2xl"
            >
              For criminal defense and family law matters, rest easy knowing you have an experienced attorney who will fight for your rights and guide you with compassion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:5016905500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-electric hover:bg-cyan transition-all duration-300 px-8 py-4 rounded-2xl font-subheading font-semibold flex items-center justify-center gap-3 text-white shadow-lg shadow-electric/25"
              >
                <Phone className="w-5 h-5" />
                <span>Get Immediate Help: (501) 690-5500</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl backdrop-blur-sm"
            >
              <p className="text-red-200 text-sm font-subheading text-center">
                ⚡ <strong>Emergency?</strong> We prioritize immediate response for arrests, DHS cases, and urgent family matters. Call now.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Image Container with Glow Effects */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-electric/20 blur-3xl rounded-full scale-110" />

              {/* Middle Glow */}
              <div className="absolute inset-0 bg-cyan/10 blur-2xl rounded-full scale-105" />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-linear-to-br from-electric/20 to-cyan/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl"
              >
                {/* Floating Badges Around Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -top-4 -left-4 bg-navy border border-electric px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="text-electric font-subheading text-sm">⚖️ Criminal Defense</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute -bottom-4 -right-4 bg-navy border border-cyan px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="text-cyan font-subheading text-sm">👨‍👩‍👧‍👦 Family Law</span>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative z-10"
                >
                  <Image
                    src="/hero.png"
                    alt="Anna Holland - Your Trusted Arkansas Defense Attorney"
                    width={500}
                    height={600}
                    className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-electric rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-electric rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}