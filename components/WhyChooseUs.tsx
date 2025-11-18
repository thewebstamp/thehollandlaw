// components/WhyChooseUs.tsx
'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Clock, Zap, Star, Scale, Users } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Personalized Attention",
      description: "Small practice means big attention. We ensure every client feels heard, valued, and personally cared for throughout their case."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Approach",
      description: "We understand these are deeply personal matters. We fight with both legal expertise and genuine empathy for your situation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Trust",
      description: "Born and raised in Arkansas, we're deeply connected to our local communities and understand the courts you'll be facing."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Always Available",
      description: "We make ourselves available to our clients, keeping you updated and informed every step of the way. Your calls matter to us."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Creative Legal Strategies",
      description: "We draft innovative legal arguments using the law as it's written to achieve the best possible outcomes for your unique situation."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Years of combined experience as paralegals, legislative staff, and attorneys since 2014. We know how to get results."
    }
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-linear-to-br from-[#0A1931] to-[#00A8FF] relative overflow-hidden">

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
          className="absolute top-1/4 -left-20 w-64 h-64 border border-[#00A8FF]/20 rounded-full"
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
          className="absolute bottom-1/4 -right-20 w-48 h-48 border border-[#00D4FF]/20 rounded-full"
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
            className={`absolute w-2 h-2 bg-[#00A8FF] rounded-full ${i === 0 ? 'top-1/3 left-1/4' :
                i === 1 ? 'bottom-1/3 right-1/3' :
                  'top-1/2 left-1/2'
              }`}
          />
        ))}
      </div>

      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-cyan/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-white/20 rounded-full" />
      </div>

      <div className="container-mobile relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-6">
            The Holland Law <span className="text-transparent bg-linear-to-r from-[#00D4FF] to-[#00A8FF] bg-clip-text">Difference</span>
          </h2>
          <p className="text-xl text-silver font-body max-w-3xl mx-auto">
            We're not your standard law practice. We're exceptional, fiercely loyal to our clients,
            and dedicated to providing top-notch legal services you can actually afford.
          </p>
        </motion.div>

        {/* Features Grid - Simplified */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-cyan mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-silver font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Small Practice Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <Scale className="w-16 h-16 text-cyan mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-6">
              Small Practice, <span className="text-cyan">Big Results</span>
            </h3>
            <p className="text-silver font-body leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
              We intentionally keep our practice small to provide personalized service while keeping costs affordable.
              You get direct access to your attorney and a team that truly cares about your situation.
            </p>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
              <p className="text-white font-subheading font-semibold text-lg">
                Experience the difference that personalized attention makes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-silver font-body mb-6 max-w-2xl mx-auto">
            Ready to experience legal representation that puts you first?
          </p>
          <motion.a
            href="tel:5016905500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-[#00A8FF] hover:bg-[#00D4FF] hover:text-white font-subheading font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-white/25 text-lg"
          >
            Call Now: (501) 690-5500
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}