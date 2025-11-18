// components/Footer.tsx
'use client'

import { Scale, Phone, Mail, MapPin, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-mobile">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 justify-center md:justify-start group">
              <Scale className="w-8 h-8 text-electric group-hover:text-cyan transition-colors duration-300" />
              <span className="text-2xl font-heading font-semibold group-hover:text-cyan transition-colors duration-300">
                Holland Law
              </span>
            </Link>
            <p className="text-silver font-body leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
              Providing compassionate, expert legal representation in Criminal Law and Family Law
              throughout Central Arkansas. Justice meets understanding at Holland Law.
            </p>
            <div className="flex items-center gap-2 text-silver text-sm justify-center md:justify-start">
              <MapPin size={16} />
              <span>Sherwood, Arkansas • Serving All of Arkansas</span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-electric">Practice Areas</h4>
            <ul className="space-y-2 text-silver font-body">
              <li>Criminal Defense</li>
              <li>Family Law</li>
              <li>Divorce & Custody</li>
              <li>DWI/DUI Defense</li>
              <li>Probation Matters</li>
              <li>Adoption & Guardianship</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-electric">Contact</h4>
            <div className="space-y-3 text-silver font-body">
              <a href="tel:5016905500" className="flex items-center gap-2 hover:text-cyan transition-colors justify-center md:justify-start">
                <Phone size={16} />
                <span>(501) 690-5500</span>
              </a>
              <a href="mailto:anna@thehollandlaw.com" className="flex items-center gap-2 hover:text-cyan transition-colors justify-center md:justify-start">
                <Mail size={16} />
                <span>anna@thehollandlaw.com</span>
              </a>
              <a
                href="https://web.facebook.com/thehollandlaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan transition-colors justify-center md:justify-start"
              >
                <Facebook size={16} />
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-silver text-sm font-body">
            © {currentYear} Holland Law. All rights reserved.
          </p>
          <p className="text-silver text-sm font-body">
            Learn to do good; seek justice, rebuke the oppressor, defend the fatherless, plead for the widow. - Isaiah 1:17
          </p>
          <p className="text-silver text-sm font-body">
            The Holland Law Firm • Anna Holland, J.D.
          </p>
        </div>
      </div>
    </footer>
  )
}