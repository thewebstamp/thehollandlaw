// components/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Heart, Scale, Star, Award, Users } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const education = [
    { degree: 'Juris Doctorate', school: 'UALR Bowen School of Law' },
    { degree: 'Bachelors in Organizational Business Management', school: '' },
    { degree: 'Accounting', school: '' },
    { degree: 'Legal Secretarial', school: '' },
    { degree: 'Office Technology', school: '' }
  ]

  const counties = [
    'Pulaski', 'White', 'Lonoke',
    'Faulkner', 'Saline', 'Cleburne'
  ]

  const stats = [
    { number: '200+', label: 'Clients Helped', icon: Users },
    { number: '24/7', label: 'Availability', icon: Heart },
    { number: '20+', label: 'Years Experience', icon: Award },
    { number: 'Statewide', label: 'Arkansas Practice', icon: MapPin },
  ]

  return (
    <section id="about" className="py-20 bg-linear-to-br from-[#E8ECEF]/30 to-white relative overflow-hidden">
      {/* Simplified background pattern */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `linear-gradient(#00A8FF 1px, transparent 1px), linear-gradient(90deg, #00A8FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-mobile relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-navy mb-6">
            Meet <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-xl text-charcoal font-body max-w-3xl mx-auto">
            The passionate professionals dedicated to serving your legal needs with compassion and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Founder Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-linear-to-br from-[#00A8FF] to-[#00D4FF] rounded-3xl opacity-20 group-hover:opacity-30 transition-all duration-500 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-silver/50">
                <Image
                  src="/anna.jpg"
                  alt="Anna Holland - Founding Attorney"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-4 -right-4 bg-navy text-white px-6 py-3 rounded-2xl shadow-lg border border-electric/30"
                >
                  <div className="flex items-center gap-2">
                    <Award className="text-cyan" size={20} />
                    <span className="font-subheading font-semibold">Since 2001</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border border-silver/50"
                >
                  <stat.icon className="w-8 h-8 text-electric mx-auto mb-2" />
                  <div className="text-2xl font-heading text-navy mb-1">{stat.number}</div>
                  <div className="text-charcoal font-subheading text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Areas - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-linear-to-br from-[#0A1931] to-[#00A8FF] rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cyan/20 p-3 rounded-2xl">
                  <MapPin className="text-cyan" size={28} />
                </div>
                <h4 className="text-2xl font-heading font-semibold">Serving All of Arkansas</h4>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {counties.map((county, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-cyan rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-silver group-hover:text-white transition-colors duration-300 font-medium">
                      {county}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-center"
              >
                <p className="text-silver text-sm">
                  Plus surrounding areas & statewide representation
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Story & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* My Story - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-silver/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-electric/20 p-3 rounded-2xl">
                  <Heart className="text-electric" size={24} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-navy">
                  My Journey to Justice
                </h3>
              </div>

              <div className="space-y-4 text-charcoal font-body leading-relaxed">
                <p>
                  I began my legal journey in 2001 as a paralegal, where I discovered my passion for
                  helping people navigate the complexities of the legal system. Clients trusted and
                  confided in me, and my mentor saw something special in my approach.
                </p>
                <p>
                  As the first lawyer in my family, I didn't pursue this career for prestige or wealth.
                  I became an attorney because I genuinely love the law and believe in using it as a
                  tool for justice and positive change in our community.
                </p>
                <div className="bg-silver/30 rounded-xl p-4 border-l-4 border-electric">
                  <p className="text-navy font-subheading font-semibold italic">
                    "I believe in people, justice, and in second chances. Every client deserves
                    compassionate representation and a fierce defender."
                  </p>
                </div>
                <p>
                  Now, as a divorced mother myself, I bring unique understanding and empathy to family
                  law cases. I know firsthand how personal and emotional these matters can be.
                </p>
              </div>
            </motion.div>

            {/* Full Width Justice Image - Separate from story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full"
            >
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-silver/50 overflow-hidden">
                <Image
                  src="/justice.jpg"
                  alt="Symbol of justice and legal excellence"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover shadow-lg"
                />
              </div>
            </motion.div>

            {/* Education & Personal Commitment - Better grid for large screens */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Education - Simplified */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-2xl border border-silver/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-electric/20 p-2 rounded-xl">
                    <GraduationCap className="text-electric" size={24} />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-navy">
                    Education & Qualifications
                  </h4>
                </div>

                <ul className="space-y-4">
                  {education.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-2 h-2 bg-electric rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                      <div>
                        <span className="text-charcoal font-body font-medium">{item.degree}</span>
                        {item.school && (
                          <span className="text-electric font-subheading text-sm block mt-1">{item.school}</span>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Personal Commitment - Simplified */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-linear-to-br from-[#0A1931] to-[#00A8FF] rounded-3xl p-6 text-white shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan/20 p-2 rounded-xl">
                    <Star className="text-cyan" size={24} />
                  </div>
                  <h4 className="text-xl font-heading font-semibold">
                    My Promise to You
                  </h4>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "Compassionate, non-judgmental representation",
                    "Available when you need answers",
                    "Connections to rehabilitation resources",
                    "Fight for your family's best interests",
                    "Treat you with dignity and respect"
                  ].map((promise, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-cyan rounded-full" />
                      <span className="text-silver text-[15px]">{promise}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <p className="text-white text-sm text-center italic">
                    "I'll be more than your attorney - I'll be your advocate and confidant."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Team Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-semibold text-navy text-center mb-12">
            The <span className="text-gradient">Dream Team</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Anna */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-silver/50 text-center"
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-linear-to-br from-[#00A8FF] to-[#00D4FF] rounded-full opacity-20"></div>
                  <Image
                    src="/Anna.jpg"
                    alt="Anna Holland - Founding Attorney"
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white relative z-10 shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-semibold text-navy mb-2">Anna Holland, J.D.</h4>
                  <p className="text-electric font-subheading font-semibold">Founding Attorney</p>
                </div>
              </div>
              <p className="text-charcoal font-body leading-relaxed">
                With over 20 years in the legal field, from paralegal to attorney,
                I bring comprehensive understanding and passionate advocacy to every case.
                I'm here to be your fierce defender and compassionate guide.
              </p>
            </motion.div>

            {/* Beth */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-silver/50 text-center"
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-linear-to-br from-[#00D4FF] to-[#00A8FF] rounded-full opacity-20"></div>
                  <Image
                    src="/Beth.jpg"
                    alt="Beth Pope - Paralegal"
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white relative z-10 shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-heading font-semibold text-navy mb-2">Beth Pope</h4>
                  <p className="text-cyan font-subheading font-semibold">Paralegal</p>
                </div>
              </div>
              <p className="text-charcoal font-body leading-relaxed">
                The most kind and helpful paralegal a law firm could ask for. All our clients love Beth,
                and she's super helpful in each and every case. She ensures every client feels heard
                and supported throughout their legal journey.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="tel:5016905500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-electric hover:bg-cyan text-white font-subheading font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-electric/25"
          >
            Meet Us In Person - Schedule Your Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}