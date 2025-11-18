// components/QuoteSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Quote, Scale, Heart } from 'lucide-react'
import Image from 'next/image'

export default function QuoteSection() {
    return (
        <section className="py-16 md:py-20 bg-linear-to-br from-silver/50 to-white/80 relative overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 border-2 border-electric rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-16 right-4 md:right-20 w-12 h-12 md:w-16 md:h-16 border-2 border-cyan rounded-full"
                />
            </div>

            <div className="container-mobile relative z-10">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
                    {/* Anna's Quote - Mobile Optimized */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-silver/50 flex-1"
                    >
                        <div className="text-center md:text-left">
                            <Quote className="w-8 h-8 md:w-10 md:h-10 text-electric mx-auto md:mx-0 mb-4 md:mb-6" />
                            <blockquote className="text-xl md:text-2xl font-heading text-navy leading-relaxed mb-6 md:mb-8 text-center md:text-left">
                                "I understand that you are coming to me with real and serious situations that have
                                significant legal repercussions, as well as personal ones. I don't just see cases -
                                I see people who need help, understanding, and a fierce defender."
                            </blockquote>

                            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-4 bg-silver/30 rounded-2xl justify-center md:justify-start">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative shrink-0"
                                >
                                    <div className="absolute inset-0 bg-linear-to-br from-electric to-cyan rounded-full blur-sm opacity-50" />
                                    <Image
                                        src="/Anna.jpg"
                                        alt="Anna Holland - Founding Attorney"
                                        width={60}
                                        height={60}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white relative z-10 shadow-lg"
                                        priority
                                    />
                                </motion.div>
                                <div className="text-center sm:text-left">
                                    <p className="font-subheading font-semibold text-charcoal text-lg md:text-xl mb-1">Anna Holland, J.D.</p>
                                    <p className="text-electric font-body mb-2">Founding Attorney</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Scripture - Stylish Frame Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-navy rounded-3xl p-6 md:p-8 shadow-2xl border border-electric/30 flex-1 relative overflow-hidden"
                    >
                        {/* Enhanced Background with Subtle Pattern */}
                        <div className="absolute inset-0 bg-navy">
                            {/* Subtle grid pattern */}
                            <div
                                className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `linear-gradient(#00A8FF 1px, transparent 1px), linear-gradient(90deg, #00A8FF 1px, transparent 1px)`,
                                    backgroundSize: '50px 50px'
                                }}
                            />
                            {/* Gradient overlays for depth */}
                            <div className="absolute inset-0 bg-linear-to-br from-electric/10 via-transparent to-cyan/10" />
                        </div>

                        {/* Enhanced Decorative Frame Elements */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan rounded-tl-3xl"></div>
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan rounded-tr-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-electric rounded-bl-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-electric rounded-br-3xl"></div>

                        {/* Corner Accents */}
                        <div className="absolute top-4 left-4 w-3 h-3 bg-cyan rounded-full"></div>
                        <div className="absolute top-4 right-4 w-3 h-3 bg-cyan rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-3 h-3 bg-electric rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-3 h-3 bg-electric rounded-full"></div>

                        {/* Enhanced Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-6 right-8 opacity-30"
                        >
                            <Scale className="w-10 h-10 text-cyan" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-6 left-8 opacity-30"
                        >
                            <Heart className="w-10 h-10 text-electric" />
                        </motion.div>

                        {/* Content with Better Contrast */}
                        <div className="relative z-10 text-center h-full flex flex-col justify-center items-center min-h-[300px] md:min-h-[350px]">
                            <div className="text-cyan font-subheading text-lg md:text-xl mb-4 md:mb-6">
                                Our Foundation
                            </div>

                            <div className="text-2xl md:text-3xl lg:text-4xl font-heading leading-tight mb-4 md:mb-6 text-white">
                                Learn to do good; <span className="text-gradient">seek justice</span>
                            </div>

                            <div className="text-lg md:text-xl text-silver font-body leading-relaxed mb-6 md:mb-8 max-w-md">
                                Rebuke the oppressor,<br />
                                <span className="text-cyan/90">defend the fatherless,</span><br />
                                <span className="text-electric/90">plead for the widow.</span>
                            </div>

                            <div className="flex items-center gap-4 pt-4 md:pt-6 border-t border-electric/40">
                                <span className="text-electric font-subheading font-semibold text-lg">Isaiah 1:17</span>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-8 h-8 md:w-10 md:h-10 bg-cyan/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan/50"
                                >
                                    <span className="text-cyan text-sm md:text-base">✝</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Additional Floating Elements */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan rounded-full"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                            className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-electric rounded-full"
                        />
                    </motion.div>
                </div>

                {/* Trust Indicators - Mobile Optimized */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mt-12 md:mt-16"
                >
                    {[
                        { number: "20+", label: "Years Experience" },
                        { number: "200+", label: "Clients Helped" },
                        { number: "Statewide", label: "Practice" },
                        { number: "24/7", label: "Availability" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-silver/50"
                        >
                            <div className="text-2xl md:text-3xl font-heading text-electric mb-1 md:mb-2">{stat.number}</div>
                            <div className="text-charcoal font-subheading text-xs md:text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}