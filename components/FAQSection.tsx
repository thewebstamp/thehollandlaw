// components/FAQSection.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, Scale, Users, Shield, Phone, Clock, Star, Heart } from 'lucide-react'

export default function FAQSection() {
  const [openCategory, setOpenCategory] = useState<string | null>('criminal')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['criminal-1', 'family-1']))

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = {
    criminal: {
      icon: Shield,
      title: "Criminal Law Questions",
      questions: [
        {
          id: "criminal-1",
          question: "What should I do if I'm arrested?",
          answer: "Remain calm and exercise your right to remain silent. Don't discuss your case with anyone except your attorney. Contact us immediately at (501) 690-5500. We can help arrange bail, protect your rights, and guide you through the entire process."
        },
        {
          id: "criminal-2",
          question: "Do I really need a lawyer for a traffic ticket?",
          answer: "While you can handle some minor traffic tickets yourself, having an attorney can often get charges reduced or dismissed, prevent points on your license, and save you money on insurance premiums. We've helped countless clients achieve better outcomes than they could on their own."
        },
        {
          id: "criminal-3",
          question: "What's the difference between a misdemeanor and felony?",
          answer: "Misdemeanors are less serious crimes with maximum penalties of up to one year in jail, while felonies are more serious offenses with potential prison sentences exceeding one year. The classification significantly impacts your future, so having experienced representation is crucial."
        },
        {
          id: "criminal-4",
          question: "Can you help with DWI/DUI charges?",
          answer: "Absolutely. We provide aggressive DWI/DUI defense, challenging evidence, negotiating with prosecutors, and fighting to protect your driving privileges. Early intervention is key, as there are strict deadlines for license suspension hearings."
        },
        {
          id: "criminal-5",
          question: "What happens during probation revocation?",
          answer: "If you're accused of violating probation, you have the right to a hearing. We'll review the allegations, challenge the evidence, and present your side to help you avoid jail time and get back on track with your probation terms."
        }
      ]
    },
    family: {
      icon: Users,
      title: "Family Law Questions",
      questions: [
        {
          id: "family-1",
          question: "How long does a divorce take in Arkansas?",
          answer: "Arkansas requires a 30-day waiting period after filing before a divorce can be finalized. However, contested divorces or those with complex issues can take several months to over a year. We work efficiently to resolve your case as quickly as possible while protecting your interests."
        },
        {
          id: "family-2",
          question: "How is child custody determined?",
          answer: "Arkansas courts prioritize the best interests of the child, considering factors like each parent's ability to provide care, the child's relationships with family members, and the child's adjustment to home and school. As a divorced mother myself, I understand how personal and emotional custody matters can be."
        },
        {
          id: "family-3",
          question: "What is divorce mediation and is it right for me?",
          answer: "Mediation is a collaborative process where a neutral third party helps divorcing couples reach agreements outside of court. It's often faster, less expensive, and less adversarial. I'm trained in mediation and can help determine if it's the right approach for your situation."
        },
        {
          id: "family-4",
          question: "How is child support calculated?",
          answer: "Arkansas uses specific guidelines based on both parents' incomes, number of children, custody arrangements, and certain expenses like healthcare and childcare. We'll help ensure the calculation is fair and accurate based on your circumstances."
        },
        {
          id: "family-5",
          question: "Can I modify child custody or support orders?",
          answer: "Yes, if there's been a material change in circumstances (job loss, relocation, changes in the child's needs), you can petition the court to modify existing orders. We'll help you demonstrate why modification is in the child's best interests."
        }
      ]
    },
    general: {
      icon: Scale,
      title: "General Practice Questions",
      questions: [
        {
          id: "general-1",
          question: "How much do your services cost?",
          answer: "We offer transparent, affordable pricing. Criminal cases are typically handled with flat fees or hourly rates, while family law matters are usually hourly. During your consultation, we'll provide a clear estimate and discuss payment options. We believe quality legal representation should be accessible."
        },
        {
          id: "general-2",
          question: "Do you offer free consultations?",
          answer: "Yes, we offer complimentary initial consultations to discuss your situation, answer your questions, and determine how we can help you. This gives you the opportunity to meet us and feel comfortable before making any commitments."
        },
        {
          id: "general-3",
          question: "What counties do you serve?",
          answer: "We primarily practice in Pulaski, White, Lonoke, Faulkner, and Saline Counties, but we're licensed statewide and travel throughout Arkansas to represent our clients. We have extensive experience with local courts and procedures in these areas."
        },
        {
          id: "general-4",
          question: "How quickly can you help with an emergency situation?",
          answer: "For urgent matters like arrests, emergency custody situations, or protective orders, we prioritize immediate response. Call us 24/7 at (501) 690-5500 for emergency legal assistance. We understand that timing is critical in these situations."
        },
        {
          id: "general-5",
          question: "What makes Holland Law different from other firms?",
          answer: "We're a small, intentionally personal practice. You'll work directly with me, Anna Holland, and my paralegal Beth - not passed off to junior associates. We combine 20+ years of legal experience with genuine compassion and understanding of what you're going through."
        }
      ]
    }
  }

  return (
    <section id="faq" className="py-20 bg-linear-to-br from-silver/20 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#00A8FF 1px, transparent 1px), linear-gradient(90deg, #00A8FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Background Elements */}
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
      </div>

      <div className="container-mobile relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-semibold text-navy mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-charcoal font-body max-w-3xl mx-auto">
            Get answers to common legal questions. Can't find what you're looking for? 
            We're always here to provide personalized answers.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.entries(faqData).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={key}
                  onClick={() => toggleCategory(key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-subheading font-semibold transition-all duration-300 ${
                    openCategory === key
                      ? 'bg-electric text-white shadow-lg shadow-electric/25'
                      : 'bg-white text-charcoal hover:bg-silver/50 shadow-lg border border-silver/50'
                  }`}
                >
                  <IconComponent size={20} />
                  {category.title}
                </motion.button>
              )
            })}
          </motion.div>

          {/* FAQ Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(faqData).map(([key, category]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`lg:block ${openCategory !== key ? 'hidden' : 'block'}`}
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-silver/50 overflow-hidden">
                  {/* Category Header */}
                  <div className="bg-linear-to-r from-[#0A1931] to-[#00A8FF] p-6 text-white">
                    <div className="flex items-center gap-3">
                      <category.icon size={24} />
                      <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-2">
                    {category.questions.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-silver/30 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full text-left p-6 hover:bg-silver/20 transition-colors duration-300 flex items-start justify-between gap-4"
                        >
                          <span className="font-subheading font-semibold text-charcoal text-lg flex-1">
                            {item.question}
                          </span>
                          <motion.div
                            animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="shrink-0 text-electric"
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {openItems.has(item.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <p className="text-charcoal font-body leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}