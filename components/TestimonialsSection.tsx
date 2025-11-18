// components/TestimonialsSection.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, Heart, Users, Scale, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function TestimonialsSection() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<number[]>([])

  const toggleTestimonial = (index: number) => {
    if (expandedTestimonials.includes(index)) {
      setExpandedTestimonials(expandedTestimonials.filter(i => i !== index))
    } else {
      setExpandedTestimonials([...expandedTestimonials, index])
    }
  }

  const isExpanded = (index: number) => expandedTestimonials.includes(index)

  const getTruncatedText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  const testimonials = [
    {
      name: "Amber Bingham",
      date: "August 20, 2023",
      content: "I filed for divorce in May and got it in August. It was my first divorce and I had no clue what I was doing. Beth and Anna made it easy and painless. When I called or texted them they always responded within 24 hours and kept me in the loop about what was going on. Highly recommend using Anna!",
      response: "Thank you so much! ❤️",
      type: "family"
    },
    {
      name: "Kathaleen Cockrum", 
      date: "June 3, 2022",
      content: "Anna Holland and Beth Pope are two of my favorite people. Since 2018, I've been a client of Holland Law. My life took some unexpected turns, but with them at my side, my family is now safe and happy. I'm not sure what we would have done if Anna hadn't represented us in our cases. Holland Law is a gift from God.",
      response: "Thank you so much! ❤️",
      type: "family"
    },
    {
      name: "Grant Overholser",
      date: "June 19, 2021", 
      content: "My children's biological mother passed away, I met my current wife and after a couple years she told me she wanted to adopt them. Anna made that happen and gave us the greatest gift ever. The process was effortless and she was amazing.",
      response: "Thank you so much! ❤️",
      type: "family"
    },
    {
      name: "Amanda Campos",
      date: "November 8, 2021",
      content: "The ladies were so nice and very thorough explaining each step and communicating with me from start to finish. The process felt seamless and overall they made it feel like a really simple process.",
      response: "Thank you so much! 🥰",
      type: "family"
    },
    {
      name: "Michael Johnston",
      date: "November 28, 2017",
      content: "Anna Holland is extremely intelligent and knows her way around a courtroom. I have heard too many good things to list. I know if I ever need an attorney, for Family Court or God forbid Criminal, Holland Law would be my first choice.",
      response: "Thank you so much! ❤️",
      type: "criminal"
    },
    {
      name: "Mary Margaret Taylor",
      date: "June 16, 2015",
      content: "Anna is awesome. She worked really hard on my custody case. She's very kind and compassionate. My babies are coming to stay with me for two weeks in June, two weeks in July, and two weeks in August. All thanks to Anna!!!!",
      response: "Thank you so much! ❤️",
      type: "family"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-navy relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-electric rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-cyan rounded-full"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 w-12 h-12 bg-electric/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-cyan/20 rounded-full"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 opacity-10"
      >
        <Quote className="w-24 h-24 text-cyan" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-20 opacity-10"
      >
        <Heart className="w-20 h-20 text-electric" />
      </motion.div>

      <div className="container-mobile relative z-10">
        {/* Header with Anna's Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-electric/20 rounded-2xl flex items-center justify-center">
              <Heart className="text-electric" size={24} />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-semibold text-white">
              Client <span className="text-gradient">Love</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-silver font-body mb-6">
              "Nothing brings me more joy than helping families find peace and protecting their futures. 
              Reading these kind words from clients reminds me why I became an attorney."
            </p>
            <div className="text-electric font-subheading font-semibold text-lg">
              - Anna Holland, J.D.
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 cursor-pointer group"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-electric mb-4 opacity-60" />

              {/* Content with Expand/Collapse */}
              <div className="mb-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={isExpanded(index) ? 'expanded' : 'collapsed'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-silver font-body leading-relaxed"
                  >
                    {isExpanded(index) 
                      ? `"${testimonial.content}"`
                      : `"${getTruncatedText(testimonial.content)}"`
                    }
                  </motion.p>
                </AnimatePresence>

                {/* Show More/Less Button - Only show if content is long enough */}
                {testimonial.content.length > 120 && (
                  <motion.button
                    onClick={() => toggleTestimonial(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 text-electric hover:text-cyan transition-colors duration-300 mt-3 text-sm font-subheading"
                  >
                    {isExpanded(index) ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <span>Show More</span>
                        <ChevronDown size={16} />
                      </>
                    )}
                  </motion.button>
                )}
              </div>

              {/* Author & Date */}
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-subheading font-semibold">{testimonial.name}</span>
                  <div className={`w-3 h-3 rounded-full ${testimonial.type === 'family' ? 'bg-cyan' : 'bg-electric'}`}></div>
                </div>
                <div className="text-silver text-sm font-body">{testimonial.date}</div>
                
                {/* Response from Anna */}
                {testimonial.response && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-3 p-3 bg-electric/10 rounded-2xl border border-electric/20"
                  >
                    <div className="text-cyan text-sm font-body">
                      <strong>Holland Law:</strong> {testimonial.response}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-silver font-body mb-6 max-w-2xl mx-auto">
            Ready to experience the Holland Law difference for yourself?
          </p>
          <motion.a
            href="tel:5016905500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-electric hover:bg-cyan text-white font-subheading font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-electric/25"
          >
            Join Our Family of Happy Clients
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}