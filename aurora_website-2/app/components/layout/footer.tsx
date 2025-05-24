import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AURORA RESOURCES DMCC</h3>
            <p className="text-gray-300 mb-4">
              Transforming global mineral resources through sustainable practices, innovative solutions, and strategic partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-gray-300 hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-300 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Global Offices</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-300 mt-0.5" />
                <span className="text-gray-300">Global HQ: JLT, Dubai, UAE</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-300 mt-0.5" />
                <span className="text-gray-300">Zambia: Aurora Resources DMCC Limited, Kalulushi Rd, Kitwe</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-300 mt-0.5" />
                <span className="text-gray-300">Zimbabwe: Aurora Resources Zimbabwe, Harare</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <a href="tel:+971527580098" className="text-gray-300 hover:text-white transition-colors">
                  +971 52758 0098
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <a href="mailto:info@aurora-resources.com" className="text-gray-300 hover:text-white transition-colors">
                  info@aurora-resources.com
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-gray-300" />
                <a href="https://www.aurora-resources.com" className="text-gray-300 hover:text-white transition-colors">
                  www.aurora-resources.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aurora Resources DMCC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}