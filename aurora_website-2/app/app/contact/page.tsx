"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send,
  Building,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info@aurora-resources.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/originals/35/32/e2/3532e25d480f82e5925a22b8ad284870.jpg"
            alt="Aurora Resources Headquarters"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with Aurora Resources to explore partnership opportunities and learn more about our global operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Get In Touch</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Whether you're interested in partnership opportunities, career prospects, or simply want to learn more about Aurora Resources, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-3 rounded-full mr-4">
                    <Building className="h-6 w-6 text-primary-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-1">Global Headquarters</h3>
                    <p className="text-gray-700 dark:text-gray-300">JLT, Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-1">Phone</h3>
                    <a href="tel:+971527580098" className="text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-blue-400 transition-colors">
                      +971 52758 0098
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-1">Email</h3>
                    <a href="mailto:info@aurora-resources.com" className="text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-blue-400 transition-colors">
                      info@aurora-resources.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-primary-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-1">Website</h3>
                    <a href="https://www.aurora-resources.com" className="text-gray-700 dark:text-gray-300 hover:text-primary-blue dark:hover:text-blue-400 transition-colors">
                      www.aurora-resources.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary-blue dark:text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-primary flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-12 text-center">Regional Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://thumbs.dreamstime.com/b/modern-buildings-dubai-marina-city-skyline-skyscrapers-uae-174610580.jpg"
                  alt="Dubai Headquarters"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Dubai, UAE</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Global Headquarters<br />
                JLT, Dubai, UAE
              </p>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                <a 
                  href="https://maps.google.com/?q=JLT+Dubai+UAE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-blue dark:text-blue-400 hover:underline"
                >
                  View on Map
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://www.wbho.co.za/wp-content/uploads/2021/03/Konkola-Copper-Zambia-hero-1024x576.jpg"
                  alt="Zambia Office"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Kitwe, Zambia</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources DMCC Limited<br />
                Kalulushi Rd, Kitwe, Zambia
              </p>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                <a 
                  href="https://maps.google.com/?q=Kalulushi+Rd+Kitwe+Zambia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-blue dark:text-blue-400 hover:underline"
                >
                  View on Map
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://c8.alamy.com/comp/R2JDW6/a-sunset-is-seen-over-the-harare-city-skyline-in-zimbabwe-R2JDW6.jpg"
                  alt="Zimbabwe Office"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Harare, Zimbabwe</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources Zimbabwe<br />
                Harare, Zimbabwe
              </p>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                <a 
                  href="https://maps.google.com/?q=Harare+Zimbabwe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-blue dark:text-blue-400 hover:underline"
                >
                  View on Map
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://img.freepik.com/premium-photo/global-business-partnership-handshake-modern-industrial-setting_296012-11097.jpg"
                alt="Partnership Opportunities"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Partnership Opportunities</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources is always seeking strategic partnerships that align with our vision of sustainable mineral resource development and responsible business practices.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Whether you're interested in mineral trading, processing technology, or sustainable mining projects, we invite you to connect with our team to explore potential collaboration opportunities.
              </p>
              <Link href="/opportunities" className="btn btn-primary inline-flex items-center">
                Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}