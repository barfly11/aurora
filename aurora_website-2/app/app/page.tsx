"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/components/ui/section-title';
import StatCard from '@/components/ui/stat-card';
import { 
  Globe, 
  Users, 
  Calendar, 
  BarChart3, 
  Recycle, 
  Leaf, 
  ChevronRight,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-primary-blue text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/premium-photo/aerial-view-massive-drilling-rig-towering-openpit-mine-showcasing-industrial-scale-mineral-extraction-operations_127746-14675.jpg?w=1380"
            alt="Mining Operations"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-custom relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Transforming Global Mineral Resources
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Through sustainable practices, innovative solutions, and strategic partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="btn btn-outline">
                Learn About Us
              </Link>
              <Link href="/contact" className="btn bg-white text-primary-blue hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <ChevronRight size={30} className="text-white rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Global Mineral Trading & Processing"
            subtitle="Aurora Resources DMCC is a mineral trading and processing company with operations spanning across 5+ countries worldwide."
            centered
            highlight="Global"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              title="Years of Experience"
              value={20}
              suffix="+"
              icon={<Calendar size={36} />}
            />
            <StatCard
              title="Countries of Operation"
              value={15}
              suffix="+"
              icon={<Globe size={36} />}
            />
            <StatCard
              title="Industry Professionals"
              value={50}
              suffix="+"
              icon={<Users size={36} />}
            />
            <StatCard
              title="Growth in Demand by 2030"
              value={46}
              suffix="%"
              icon={<BarChart3 size={36} />}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-primary-blue dark:text-white mb-4">Our Global Presence</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Established in 2016 and formally incorporated in Dubai DMCC Free Zone in 2017, Aurora Resources has rapidly expanded its operations across multiple continents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-1 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-primary-blue dark:text-white">Middle East:</strong> Dubai HQ and processing facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-1 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-primary-blue dark:text-white">Africa:</strong> Zambia, Zimbabwe, Kenya, South Africa
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-1 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-primary-blue dark:text-white">South America:</strong> Colombia, Brazil (mining projects)
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-1 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-primary-blue dark:text-white">Global Markets:</strong> Trading in Europe, Asia & North America
                  </span>
                </li>
              </ul>
              <Link href="/about" className="btn btn-primary mt-6 inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://thumbs.dreamstime.com/z/global-business-concept-illustrated-glowing-gold-world-map-detailed-continents-countries-highlighted-illuminated-suggests-348461226.jpg"
                alt="Global Operations Map"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Core Business Areas"
            subtitle="Our operations span across three key business segments, delivering comprehensive solutions in the global minerals industry."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Mineral Trading</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Strategic sourcing and global distribution of minerals across international markets, leveraging our extensive network and industry expertise.
              </p>
              <Link href="/portfolio" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                Explore Trading Operations <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Processing</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Advanced mineral processing facilities utilizing proprietary technologies to maximize resource recovery and minimize environmental impact.
              </p>
              <Link href="/portfolio" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                Discover Processing Capabilities <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Global Projects</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Development and management of strategic mineral projects worldwide, focusing on sustainable practices and long-term value creation.
              </p>
              <Link href="/track-record" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                View Our Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://empoweringpumps.com/wp-content/uploads/2020/02/Photo-courtesy-of-Tom-Fish-from-pexels.com_.png"
                alt="Sustainable Mining Operations"
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
              <h3 className="text-2xl font-bold text-primary-blue dark:text-white mb-4">Our Commitment to Sustainability</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Aurora Resources, we're committed to responsible resource management and sustainable practices across all our operations.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-2 rounded-full mr-3 mt-1">
                    <Leaf className="h-5 w-5 text-primary-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Environmental Stewardship</h4>
                    <p className="text-gray-700 dark:text-gray-300">65% CO₂ emissions reduction target for 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-2 rounded-full mr-3 mt-1">
                    <Recycle className="h-5 w-5 text-primary-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Circular Economy</h4>
                    <p className="text-gray-700 dark:text-gray-300">80% circular economy implementation goal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-5 w-5 text-primary-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Community Development</h4>
                    <p className="text-gray-700 dark:text-gray-300">75% community development program implementation</p>
                  </div>
                </div>
              </div>
              
              <Link href="/sustainability" className="btn btn-primary inline-flex items-center">
                Explore Our ESG Initiatives <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://thumbs.dreamstime.com/z/female-executive-putting-her-ideas-meeting-conference-room-group-business-people-having-meeting-board-room-group-107950516.jpg"
            alt="Business Partnership"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Partner with Aurora Resources
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Discover how our expertise in mineral trading, processing, and global projects can drive value for your business.
            </p>
            <Link href="/contact" className="btn bg-white text-primary-blue hover:bg-gray-100">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}