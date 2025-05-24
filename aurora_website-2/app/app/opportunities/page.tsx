"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/section-title';
import StatCard from '@/components/ui/stat-card';
import { 
  TrendingUp, 
  Map, 
  Battery, 
  ArrowRight,
  CheckCircle,
  Globe,
  Truck,
  Recycle,
  Cable
} from 'lucide-react';

export default function OpportunitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://www.finnovista.com/wp-content/uploads/2021/01/82418.jpg"
            alt="Strategic Opportunities"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Strategic Opportunities</h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover Aurora Resources' strategic growth opportunities across global mineral markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Growth Drivers */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Market Growth Drivers"
            subtitle="The global minerals industry is experiencing significant growth driven by technological advancement and the transition to sustainable energy."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Critical Minerals Demand</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Global demand for critical minerals is projected to increase by 46% by 2030, driven by clean energy technologies and digital transformation.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Aurora is strategically positioned to capitalize on this growth through our operations in key mineral-rich regions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Battery className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">EV Battery Materials</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The graphite market for EV batteries is expected to grow 3X by 2030, creating significant opportunities for sustainable sourcing and processing.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Our processing expertise and African operations position us to be a key player in the EV battery materials supply chain.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Circular Economy</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Growing focus on resource recovery and recycling is creating new opportunities for innovative processing technologies and sustainable practices.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Our pioneering e-waste recycling operations demonstrate our leadership in circular economy solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Our Strategic Advantages</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Aurora Resources is uniquely positioned to capitalize on emerging opportunities in the global minerals industry through our strategic advantages:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Established Local Partnerships</h4>
                    <p className="text-gray-700 dark:text-gray-300">Strong relationships with local stakeholders in key mineral-rich regions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Secure Supply Chain</h4>
                    <p className="text-gray-700 dark:text-gray-300">End-to-end logistics management ensuring reliable material flow</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Processing Expertise</h4>
                    <p className="text-gray-700 dark:text-gray-300">Proprietary technologies that maximize resource recovery</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-blue dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Sustainability Leadership</h4>
                    <p className="text-gray-700 dark:text-gray-300">Pioneer in implementing circular economy solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/D5612AQEyr6cJsLJNEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710675072175?e=2147483647&v=beta&t=GAwQo6VROuod6Rq2_RBxWrH8t3V1xWZ2UhtornNJx18"
                alt="Strategic Advantages"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Opportunities */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Regional Opportunities"
            subtitle="Aurora Resources is pursuing strategic opportunities across key mineral-rich regions."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="card overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="https://mining.onhym.com/sites/mining.onhym.com/files/2_2.jpg"
                  alt="Morocco Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Morocco: Strategic Mineral Resources</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Morocco offers significant opportunities in phosphate and rare earth elements, with established infrastructure and favorable investment climate.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Map className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Rich phosphate deposits</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Strategic location for European markets</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Developed logistics infrastructure</span>
                  </div>
                </div>
                <Link href="/contact" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="https://www.hxjqchina.com/uploads/5c94747d235ab.jpg"
                  alt="Zambia Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Zambia: Copper Trading Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Building on our established presence in Zambia, we're expanding our copper trading operations to capitalize on growing global demand.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Map className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Copper Belt access</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Established local partnerships</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">1,500m² warehouse facility</span>
                  </div>
                </div>
                <Link href="/contact" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="https://www.mining-technology.com/wp-content/uploads/sites/19/2019/06/4802913838_1e85e3e09f_b-e1561729648801.jpg"
                  alt="Tanzania Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Tanzania: Critical Minerals Portfolio</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Tanzania offers significant opportunities in critical minerals essential for clean energy technologies and digital transformation.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Map className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Rich graphite deposits</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Growing investment in mining sector</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-primary-blue dark:text-blue-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">Strategic location for Asian markets</span>
                  </div>
                </div>
                <Link href="/contact" className="text-primary-blue dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Market Growth Metrics"
            subtitle="The global minerals industry is experiencing significant growth driven by technological advancement and the transition to sustainable energy."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Critical Minerals Demand Growth"
              value={46}
              suffix="%"
              description="Projected increase by 2030"
              icon={<TrendingUp size={36} />}
            />
            <StatCard
              title="Graphite Market Growth"
              value={3}
              suffix="X"
              description="Expected growth for EV batteries"
              icon={<Battery size={36} />}
            />
            <StatCard
              title="E-Waste Generation"
              value={50}
              suffix="M tons"
              description="Annual global e-waste by 2025"
              icon={<Recycle size={36} />}
            />
            <StatCard
              title="Copper Demand Increase"
              value={35}
              suffix="%"
              description="Projected growth by 2030"
              icon={<Cable size={36} />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/premium-photo/global-business-partnership-handshake-modern-industrial-setting_127746-14675.jpg"
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
              Explore Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join Aurora Resources in capitalizing on strategic growth opportunities across the global minerals industry.
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