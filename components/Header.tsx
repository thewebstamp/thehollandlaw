// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Scale } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isMobileMenuOpen])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    
    // If we're already on the target page, scroll to top
    if (pathname === href) {
      window.scrollTo(0, 0)
    }
    // Otherwise, the route change will trigger the useEffect above
  }

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-navy shadow-lg'
      }`}>
        <div className="container-mobile">
          <div className="flex items-center justify-between py-4">
            {/* Logo with Link */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/" 
                className="flex items-center gap-3 group"
                onClick={() => handleNavigation('/')}
              >
                <Scale className={`w-8 h-8 transition-colors duration-300 ${
                  isScrolled ? 'text-electric group-hover:text-cyan' : 'text-white group-hover:text-cyan'
                }`} />
                <span className={`text-2xl font-heading transition-colors duration-300 ${
                  isScrolled ? 'text-navy group-hover:text-electric' : 'text-white group-hover:text-cyan'
                }`}>
                  Holland Law
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-subheading font-semibold transition-all duration-300 relative py-2 px-1 ${
                    isScrolled 
                      ? isActive(item.href) 
                        ? 'text-electric font-semibold' 
                        : 'text-charcoal hover:text-electric'
                      : isActive(item.href)
                        ? 'text-cyan font-semibold'
                        : 'text-white hover:text-cyan'
                  }`}
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <a
                href="tel:5016905500"
                className="bg-electric hover:bg-cyan transition-all duration-300 px-6 py-3 rounded-full font-subheading font-medium flex items-center gap-2 text-white shadow-lg shadow-electric/25"
              >
                <Phone size={18} />
                (501) 690-5500
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'bg-electric text-white hover:bg-cyan' 
                  : 'bg-electric text-white hover:bg-cyan'
              }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Solid Navy Background */}
            <div className="absolute inset-0 bg-navy" />
            
            {/* Menu Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative h-full w-full flex items-center justify-center mt-9"
            >
              <div className="text-center px-8 w-full max-w-sm">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-4 mb-12">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={`text-xl font-subheading font-semibold transition-all duration-300 py-4 block relative ${
                          isActive(item.href)
                            ? 'text-cyan'
                            : 'text-white hover:text-electric'
                        }`}
                      >
                        {item.name}
                        {isActive(item.href) && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="absolute left-1/2 bottom-2 w-2 h-2 bg-cyan rounded-full -translate-x-1/2"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-6"
                >
                  {/* Phone Button */}
                  <a
                    href="tel:5016905500"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-electric hover:bg-cyan transition-all duration-300 px-8 py-4 rounded-2xl font-subheading font-semibold flex items-center gap-3 text-white justify-center text-lg shadow-lg shadow-electric/25"
                  >
                    <Phone size={24} />
                    Call (501) 690-5500
                  </a>

                  {/* Additional Contact Info */}
                  <div className="text-silver font-body space-y-2">
                    <p>Available 24/7 for emergencies</p>
                    <p>anna@thehollandlaw.com</p>
                    <p>Sherwood, Arkansas</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Breathing Phone Button for Mobile */}
      <motion.a
        href="tel:5016905500"
        className="fixed bottom-6 left-6 z-40 md:hidden bg-electric text-white p-4 rounded-2xl shadow-2xl shadow-electric/50 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          boxShadow: [
            "0 20px 25px -5px rgba(0, 168, 255, 0.5)",
            "0 25px 50px -12px rgba(0, 168, 255, 0.7)",
            "0 20px 25px -5px rgba(0, 168, 255, 0.5)"
          ]
        }}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: "#00D4FF"
        }}
        whileTap={{ scale: 0.9 }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 17 },
          opacity: { duration: 0.6 },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Breathing Animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <Phone size={28} />
          
          {/* Pulsing Ring Effect */}
          <motion.div
            className="absolute inset-0 border-2 border-electric rounded-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
        
        {/* Phone Number Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 bg-navy text-white px-3 py-2 rounded-xl whitespace-nowrap text-sm font-subheading font-semibold shadow-lg border border-electric/30"
        >
          Call (501) 690-5500
          {/* Tooltip Arrow */}
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-navy" />
        </motion.div>
      </motion.a>
    </>
  )
}