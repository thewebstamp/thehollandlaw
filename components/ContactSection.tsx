// components/ContactSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Facebook, Clock, Star, Heart, Scale } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-linear-to-br from-[#E8ECEF]/30 to-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-7"
        style={{
          backgroundImage: `linear-gradient(#00A8FF 1px, transparent 1px), linear-gradient(90deg, #00A8FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border-2 border-electric rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-electric rounded-full"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 left-32 opacity-10"
      >
        <Scale className="w-20 h-20 text-electric" />
      </motion.div>

      <div className="container-mobile relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-navy mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-charcoal font-body max-w-2xl mx-auto">
            Ready to discuss your case? We're here to help you navigate the legal process
            with compassion and expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:5016905500"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-silver/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-3 bg-electric rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-charcoal font-body">Phone</p>
                    <p className="text-navy font-subheading font-semibold text-xl">(501) 690-5500</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="ml-auto text-electric"
                  >
                    <Star size={20} fill="currentColor" />
                  </motion.div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-silver/50">
                  <div className="p-3 bg-cyan rounded-xl">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-charcoal font-body">Address</p>
                    <p className="text-navy font-subheading font-semibold text-lg">
                      2120 East Kiehl Ave<br />
                      Sherwood, AR 72120
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:anna@thehollandlaw.com"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-silver/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-3 bg-navy rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-charcoal font-body">Email</p>
                    <p className="text-navy font-subheading font-semibold text-lg">anna @thehollandlaw.com</p>
                  </div>
                </a>

                <a
                  href="https://web.facebook.com/thehollandlaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-silver/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-3 bg-electric rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Facebook className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-charcoal font-body">Follow Us</p>
                    <p className="text-navy font-subheading font-semibold text-lg">Facebook</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-linear-to-br from-[#0A1931] to-[#00A8FF] text-white p-6 rounded-2xl"
            >
              <h4 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-cyan" size={24} />
                Service Areas
              </h4>
              <p className="text-silver font-body mb-4">
                Proudly serving clients throughout Arkansas with primary practice in:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Pulaski County', 'White County', 'Lonoke County', 'Faulkner County', 'Saline County', 'Cleburne County'].map((county, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-cyan rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-silver text-sm group-hover:text-white transition-colors duration-300">{county}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Real Google Map */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-lg border border-silver/50 overflow-hidden"
            >
              <div className="h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.234567890123!2d-92.22456789012345!3d34.83456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2a4f123456789%3A0xabcdef1234567890!2s2120%20East%20Kiehl%20Ave%2C%20Sherwood%2C%20AR%2072120!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Holland Law Office Location"
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 bg-silver/30 border-t border-silver/50">
                <div className="flex items-center gap-2 text-charcoal font-body">
                  <MapPin className="text-electric" size={16} />
                  <span>2120 East Kiehl Ave, Sherwood, AR 72120</span>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-linear-to-br from-[#1A1A1A] to-[#0A1931] text-white p-6 rounded-2xl text-center relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <Heart className="absolute top-2 right-4 w-12 h-12 text-electric" />
                <Phone className="absolute bottom-2 left-4 w-10 h-10 text-cyan" />
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-heading font-semibold mb-3 text-electric">
                  🚨 Need Immediate Assistance?
                </h4>
                <p className="text-silver font-body mb-4">
                  For urgent legal matters like arrests, DHS cases, or emergency family matters,
                  we prioritize immediate response to ensure your rights are protected.
                </p>
                <motion.a
                  href="tel:5016905500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-electric hover:bg-cyan transition-all duration-300 px-6 py-3 rounded-xl font-subheading font-semibold shadow-lg shadow-electric/25"
                >
                  📞 Emergency Call: (501) 690-5500
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}