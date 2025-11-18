// components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
}

export default function HeroSec({ title, subtitle, description }: HeroSectionProps) {
  const pathname = usePathname()

  // Get specific content based on the current page
  const getPageSpecificContent = () => {
    switch (pathname) {
      case '/about':
        return {
          backgroundText: 'About Our Firm',
          icon: '🏛️'
        }
      case '/practice-areas':
        return {
          backgroundText: 'Legal Services',
          icon: '⚖️'
        }
      case '/contact':
        return {
          backgroundText: 'Get In Touch',
          icon: '📞'
        }
      default:
        return {
          backgroundText: 'Holland Law',
          icon: '⚖️'
        }
    }
  }

  const pageContent = getPageSpecificContent()

  return (
    <section className="py-25 relative min-h-[60vh] flex items-center justify-center bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00A8FF 1px, transparent 1px), linear-gradient(90deg, #00A8FF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity }
          }}
          className="absolute top-1/4 -left-20 w-64 h-64 border border-electric/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity }
          }}
          className="absolute bottom-1/4 -right-20 w-48 h-48 border border-cyan/20 rounded-full"
        />
        
        {/* Floating Dots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 2
            }}
            className={`absolute w-2 h-2 bg-electric rounded-full ${
              i === 0 ? 'top-1/3 left-1/4' :
              i === 1 ? 'bottom-1/3 right-1/3' :
              'top-1/2 left-1/2'
            }`}
          />
        ))}
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-white font-heading text-8xl md:text-9xl font-bold whitespace-nowrap"
        >
          {pageContent.backgroundText}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-mobile relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-5xl lg:text-6xl mb-6"
          >
            {pageContent.icon}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6"
          >
            {title}
            {subtitle && (
              <span className="block text-gradient mt-2">{subtitle}</span>
            )}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-silver font-body max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 bg-linear-to-r from-[#00A8FF] to-[#00D4FF] mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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