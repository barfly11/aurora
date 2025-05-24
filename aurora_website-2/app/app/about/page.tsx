"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/section-title';
import StatCard from '@/components/ui/stat-card';
import { 
  Calendar, 
  Globe, 
  Award, 
  Users, 
  ArrowRight,
  CheckCircle,
  Building,
  Briefcase
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://s31833.pcdn.co/wp-content/uploads/2018/10/6900-Layton-Exterior.jpg"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Aurora Resources</h1>
            <p className="text-xl text-gray-200 mb-8">
              Leader in mineral trading and processing with over 20 years of industry experience and operations in more than 5 countries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources DMCC was established in 2016 and formally incorporated in the Dubai DMCC Free Zone in 2017. Built on a foundation of extensive industry experience, we have rapidly expanded our global footprint to become a key player in the mineral resources sector.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our journey began with a vision to transform global mineral resources through sustainable practices, innovative solutions, and strategic partnerships. Today, we operate across multiple continents, delivering value at every stage of the mineral supply chain.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                From 2020 to 2024, we have expanded our operations to include sustainable mining and recycling initiatives, reinforcing our commitment to responsible resource management and environmental stewardship.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://c8.alamy.com/comp/H3E2XM/business-meeting-between-four-professional-executives-in-conference-H3E2XM.jpg"
                alt="Aurora Resources Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Our Global Impact"
            subtitle="Aurora Resources has established a significant presence in the global minerals industry through strategic operations and partnerships."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Founded"
              value={2016}
              icon={<Calendar size={36} />}
              description="Established in Dubai DMCC Free Zone"
            />
            <StatCard
              title="Industry Experience"
              value={20}
              suffix="+"
              icon={<Briefcase size={36} />}
              description="Years of combined expertise"
            />
            <StatCard
              title="Global Presence"
              value={15}
              suffix="+"
              icon={<Globe size={36} />}
              description="Countries with active operations"
            />
            <StatCard
              title="Team Members"
              value={50}
              suffix="+"
              icon={<Users size={36} />}
              description="Industry professionals worldwide"
            />
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Core Business Areas"
            subtitle="Our operations span three key business segments, delivering comprehensive solutions across the mineral resources value chain."
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
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-4">Mineral Trading</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We specialize in strategic sourcing and global distribution of minerals, leveraging our extensive network and industry expertise to connect suppliers with markets worldwide.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Direct relationships with producers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Secure end-to-end logistics management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Global market access and distribution</span>
                </li>
              </ul>
              <Link href="/portfolio" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-4">Processing</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our advanced processing facilities utilize proprietary technologies to maximize resource recovery while minimizing environmental impact across various mineral types.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Patented Directional Gas Pressure System</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Low-energy blasting technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Proprietary beneficiation techniques</span>
                </li>
              </ul>
              <Link href="/portfolio" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-4">Global Projects</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We develop and manage strategic mineral projects worldwide, focusing on sustainable practices and long-term value creation for all stakeholders.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Strategic positioning in key mineral-rich regions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Established local partnerships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Sustainable development focus</span>
                </li>
              </ul>
              <Link href="/track-record" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Our Global Presence"
            subtitle="Aurora Resources operates across multiple continents, with strategic locations in key mineral-rich regions."
            centered
          />
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl mb-12">
            <Image
              src="https://img.freepik.com/premium-vector/colorful-world-map-highlighting-geographical-features-climate-zones-across-continents-emphasizing-landforms-oceanic-patterns-clear-design_507704-48859.jpg"
              alt="Aurora Resources Global Operations"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Middle East</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Dubai headquarters and processing facilities, serving as our global operational hub and strategic gateway to international markets.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Africa</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Operations in Zambia, Zimbabwe, Kenya, and South Africa, focusing on mineral extraction, processing, and trading activities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">South America</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mining projects in Colombia and Brazil, leveraging the region's rich mineral resources through sustainable development practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Global Markets</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Trading operations spanning Europe, Asia, and North America, connecting suppliers with end-users through our global distribution network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-primary-blue dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the global leader in sustainable mineral resource development, creating lasting value for our partners, communities, and the environment through innovative solutions and responsible practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-primary-blue dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To transform global mineral resources through sustainable practices, innovative solutions, and strategic partnerships, delivering exceptional value across the entire mineral supply chain while prioritizing environmental stewardship and community development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://storage.ning.com/topology/rest/1.0/file/get/79498165?profile=RESIZE_400x&width=205"
            alt="Partnership Opportunities"
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
              Join Our Global Network
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Discover partnership opportunities with Aurora Resources and be part of our mission to transform the global minerals industry.
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