"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/section-title';
import StatCard from '@/components/ui/stat-card';
import { 
  Leaf, 
  Recycle, 
  Users, 
  CheckCircle,
  ArrowRight,
  Shield,
  BarChart3,
  Globe
} from 'lucide-react';

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://empoweringpumps.com/wp-content/uploads/2020/02/Photo-courtesy-of-Tom-Fish-from-pexels.com_.png"
            alt="Sustainability Initiatives"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Sustainability & ESG</h1>
            <p className="text-xl text-gray-200 mb-8">
              Aurora Resources is committed to responsible resource management and sustainable practices across all our operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ESG Priorities */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our ESG Priorities for 2024"
            subtitle="Aurora Resources has established ambitious sustainability targets across our environmental, social, and governance practices."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="CO₂ Emissions Reduction"
              value={65}
              suffix="%"
              icon={<Leaf size={36} />}
              description="Target reduction across operations"
            />
            <StatCard
              title="Circular Economy Implementation"
              value={80}
              suffix="%"
              icon={<Recycle size={36} />}
              description="Resource recovery and reuse"
            />
            <StatCard
              title="Responsible Sourcing Verification"
              value={90}
              suffix="%"
              icon={<Shield size={36} />}
              description="Supply chain verification"
            />
            <StatCard
              title="Community Development Programs"
              value={75}
              suffix="%"
              icon={<Users size={36} />}
              description="Implementation across operations"
            />
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Environmental Stewardship</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources is committed to minimizing our environmental footprint through innovative technologies, efficient resource use, and responsible waste management.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Water Conservation</h4>
                    <p className="text-gray-700 dark:text-gray-300">Implementing closed-loop water systems in our processing facilities to minimize water consumption and prevent contamination.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Energy Efficiency</h4>
                    <p className="text-gray-700 dark:text-gray-300">Utilizing energy-efficient technologies and renewable energy sources to reduce our carbon footprint across operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Land Rehabilitation</h4>
                    <p className="text-gray-700 dark:text-gray-300">Comprehensive land rehabilitation programs to restore ecosystems and biodiversity in areas affected by mining operations.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn btn-primary inline-flex items-center">
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
                src="https://www.visualcapitalist.com/wp-content/uploads/2020/09/IGFMining-Environmental-Management.png"
                alt="Environmental Initiatives"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-2"
            >
              <Image
                src="https://www.crowdfunder.co.uk/uploads/projects/266830.jpg?1497545952"
                alt="Social Responsibility"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:order-1"
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Social Responsibility</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We believe in creating positive social impact in the communities where we operate through employment opportunities, education, and infrastructure development.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Local Employment</h4>
                    <p className="text-gray-700 dark:text-gray-300">Prioritizing local hiring and skills development to create sustainable employment opportunities in host communities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Education Initiatives</h4>
                    <p className="text-gray-700 dark:text-gray-300">Supporting educational programs and vocational training to build capacity and empower local communities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Health & Safety</h4>
                    <p className="text-gray-700 dark:text-gray-300">Implementing rigorous health and safety standards to protect our employees, contractors, and communities.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn btn-primary inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Governance & Compliance"
            subtitle="Aurora Resources maintains the highest standards of corporate governance and regulatory compliance across all our operations."
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
                <Shield className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Ethical Business Practices</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We adhere to the highest ethical standards in all our business dealings, with zero tolerance for corruption, bribery, or unethical conduct.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive Code of Conduct</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Regular ethics training for all employees</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Whistleblower protection program</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Transparent Reporting</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We are committed to transparent reporting of our financial, environmental, and social performance to all stakeholders.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Annual sustainability reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Independent auditing of performance metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Stakeholder engagement programs</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We ensure strict compliance with all applicable laws, regulations, and industry standards across our global operations.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive compliance framework</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Regular compliance audits and reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Engagement with regulatory authorities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Circular Economy Leadership</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources is pioneering circular economy solutions in the minerals industry, focusing on resource recovery, waste reduction, and sustainable product lifecycles.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">E-Waste Recycling</h4>
                    <p className="text-gray-700 dark:text-gray-300">Our pioneering e-waste recycling facility in the Middle East recovers valuable metals from electronic waste, reducing landfill and conserving natural resources.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Copper Cable Recovery</h4>
                    <p className="text-gray-700 dark:text-gray-300">Our copper cable recovery operation transforms waste cables into valuable resources, supporting the circular economy while reducing environmental impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Process Waste Reduction</h4>
                    <p className="text-gray-700 dark:text-gray-300">Our processing facilities implement innovative technologies to minimize waste generation and maximize resource recovery across operations.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/portfolio" className="btn btn-primary inline-flex items-center">
                Explore Our Recycling Operations <ArrowRight className="ml-2 h-4 w-4" />
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
                src="https://img.freepik.com/premium-photo/electronic-waste-collection-center-subsequent-recycling-circular-economy_761147-74.jpg"
                alt="Circular Economy"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.mdpi.com/sustainability/sustainability-08-00658/article_deploy/html/images/sustainability-08-00658-g001.png"
            alt="Sustainability Partnership"
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
              Partner in Sustainable Development
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join Aurora Resources in our commitment to responsible resource management and sustainable development across the global minerals industry.
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