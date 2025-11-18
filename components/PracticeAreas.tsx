// components/PracticeAreas.tsx
'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Scale, ArrowRight, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PracticeAreas() {
  const criminalLawServices = [
    'Felony & Misdemeanor Defense',
    'DWI/DUI & Traffic Violations',
    'Probation & Parole Revocation',
    'Bail Bonding Assistance',
    'Failure to Appear/Comply'
  ]

  const familyLawServices = [
    'Divorce & Legal Separation',
    'Child Custody & Visitation',
    'Child Support & Spousal Support',
    'DHS Cases & Paternity',
    'Guardianship & Adoption'
  ]

  return (
    <section id="practice-areas" className="py-20 bg-linear-to-br from-gray-200 to-gray-100 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-7"
        style={{
          backgroundImage: `linear-gradient(#00A8FF 1px, transparent 1px), linear-gradient(90deg, #00A8FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-32 h-32 border-2 border-electric rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-cyan rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-electric rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-cyan rounded-full"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 opacity-10"
      >
        <Scale className="w-24 h-24 text-electric" />
      </motion.div>

      <div className="container-mobile relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-navy mb-6">
            Our Legal <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-charcoal font-body max-w-2xl mx-auto">
            Compassionate legal guidance when you need it most
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Criminal Law Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-transparent lg:bg-white md:rounded-3xl md:shadow-2xl md:border md:border-silver/50 overflow-hidden group"
          >
            {/* Image with Overlay Subheading - Full width on mobile */}
            <div className="relative h-64 -mx-4 md:mx-0 md:rounded-t-3xl overflow-hidden">
              <Image
                src="/criminal.jpg"
                alt="Criminal Defense Law"
                width={800}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Enhanced Dark Overlay for text visibility */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Subheading Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-electric/20 backdrop-blur-sm rounded-xl border border-electric/30">
                    <Shield className="text-electric" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold">Criminal Defense</h3>
                </div>
              </div>
            </div>

            {/* Content - No borders on mobile */}
            <div className="px-0 py-6 md:p-8">
              <p className="text-charcoal text-[16.5px] leading-relaxed mb-6 font-body">
                I've seen how overwhelming the legal system can be. Whether it's your first traffic ticket
                or serious felony charges, I'll walk you through every step and fight to protect your rights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {criminalLawServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2 group/item"
                  >
                    <div className="w-2 h-2 bg-electric rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="text-[15.5px] font-semibold text-charcoal font-body group-hover/item:text-electric transition-colors duration-300">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Visible CTA */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-electric hover:bg-cyan text-white font-subheading font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-electric/25"
                >
                  <Shield size={20} />
                  Get Criminal Defense Help
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Family Law Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-transparent lg:bg-white md:rounded-3xl md:shadow-2xl md:border md:border-silver/50 overflow-hidden group"
          >
            {/* Image with Overlay Subheading - Full width on mobile */}
            <div className="relative h-64 -mx-4 md:mx-0 md:rounded-t-3xl overflow-hidden">
              <Image
                src="/family.jpg"
                alt="Family Law Services"
                width={800}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Enhanced Dark Overlay for text visibility */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Subheading Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-cyan/20 backdrop-blur-sm rounded-xl border border-cyan/30">
                    <Users className="text-cyan" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold">Family Law</h3>
                </div>
              </div>
            </div>

            {/* Content - No borders on mobile */}
            <div className="px-0 py-6 md:p-8">
              <p className="text-charcoal text-[16.5px] leading-relaxed mb-6 font-body">
                As a divorced mother myself, I understand how personal and emotional family legal matters can be.
                I'll be your compassionate guide through divorce, custody, and other family challenges.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {familyLawServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2 group/item"
                  >
                    <div className="w-2 h-2 bg-cyan rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="text-[15.5px] font-semibold text-charcoal font-body group-hover/item:text-cyan transition-colors duration-300">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-cyan hover:bg-electric text-white font-subheading font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-cyan/25"
                >
                  <Users size={20} />
                  Get Family Law Help
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Enhanced CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-linear-to-r from-[#0A1931] to-[#00A8FF] rounded-3xl py-8 px-4 md:p-12 text-center text-white relative overflow-hidden"
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(#00A8FF 1px, transparent 1px), linear-gradient(90deg, #00A8FF 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          {/* Enhanced Decorative Frame Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#E8ECEF] rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#E8ECEF] rounded-br-3xl"></div>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <Scale className="absolute top-4 left-10 w-20 h-20" />
            <Star className="absolute bottom-4 right-10 w-20 h-20" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-6">
              <Scale className="w-12 h-12 text-cyan" />
              <h3 className="text-2xl md:text-4xl font-heading font-semibold">
                Ready for Legal Help?
              </h3>
            </div>

            <p className="text-xl font-body max-w-2xl mx-auto mb-8 leading-relaxed">
              Don't face legal challenges alone. I'm here to provide the compassionate representation you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:5016905500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#00A8FF] hover:bg-[#00D4FF] hover:text-white px-8 py-4 md:py-6 rounded-xl font-subheading font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg text-[16px] min-w-[200px] justify-center"
              >
                Call (501) 690-5500
              </motion.a>
            </div>

            <p className="text-silver mt-6 font-body">
              Available 24/7 for emergency legal matters
            </p>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
        >
          {[
            { icon: Users, label: 'Family Focused', color: 'cyan' },
            { icon: Scale, label: 'Justice Driven', color: 'cyan' },
            { icon: Shield, label: 'Aggressive Defense', color: 'electric' },
            { icon: Star, label: 'Client Recommended', color: 'electric' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-silver/50"
            >
              <item.icon className={`w-8 h-8 text-${item.color} mx-auto mb-2`} />
              <p className="text-charcoal font-subheading text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}