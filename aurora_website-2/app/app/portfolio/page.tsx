"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/section-title';
import ProjectCard from '@/components/ui/project-card';
import { 
  Recycle, 
  Cable, 
  Truck, 
  Factory,
  Users,
  ArrowRight
} from 'lucide-react';

const portfolioProjects = [
  {
    title: "E-Waste Recycling",
    description: "Pioneer in Middle East e-waste recycling with 100% PGM recovery through innovative processing methods, establishing the region's first comprehensive e-waste recycling facility.",
    imageSrc: "https://as1.ftcdn.net/v2/jpg/05/92/78/82/1000_F_592788237_Fy9iz4koS0Cu4Qw5Yd5atgSKipaxCHWO.jpg",
    stats: [
      { label: "Regional Ranking", value: "1st" },
      { label: "PGM Recovery", value: "100%" }
    ],
    link: "/portfolio/e-waste"
  },
  {
    title: "Copper Cable Recovery",
    description: "Large-scale copper cable recovery operation with an annual target of over 100,000 metric tons and a 10-year scale-up timeline for sustainable growth.",
    imageSrc: "http://www.copperwirerecyclingmachinery.com/uploads/userup/20220303/20220303143649.jpg",
    stats: [
      { label: "Annual Target", value: "100K+ MT" },
      { label: "Scale-up Timeline", value: "10 Years" }
    ],
    link: "/portfolio/copper-cable"
  },
  {
    title: "Copper Trade - Zambia",
    description: "Strategic copper trading operations in Zambia, leveraging our 1,500m² warehouse facility with 5,000 MT storage capacity to create a regional mineral trading hub.",
    imageSrc: "https://www.hongjitop.com/wp-content/uploads/2022/10/27823b24f8-1.jpg",
    stats: [
      { label: "Facility Size", value: "1,500m²" },
      { label: "Storage Capacity", value: "5,000 MT" }
    ],
    link: "/portfolio/zambia-copper"
  },
  {
    title: "Zimbabwe Mineral Processing",
    description: "Advanced mineral processing operations in Zimbabwe, focusing on sustainable practices and community development while maximizing resource recovery.",
    imageSrc: "https://bullszimbabwe.com/wp-content/uploads/2020/09/Ten-mines-that-Zimbabwe-should-urgently-lithium.jpg",
    stats: [
      { label: "Recovery Rate", value: "95%" },
      { label: "Local Employment", value: "100+" }
    ],
    link: "/portfolio/zimbabwe-processing"
  }
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://thumbs.dreamstime.com/z/extraction-processing-facility-modern-equipment-used-to-extract-valuable-minerals-earth-extraction-274114633.jpg"
            alt="Aurora Resources Portfolio"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Current Portfolio</h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore Aurora Resources' diverse portfolio of mineral trading, processing, and recycling operations across global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Current Operations"
            subtitle="Aurora Resources maintains a diverse portfolio of operations across the mineral resources value chain, from recycling to trading and processing."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="stat-card"
            >
              <div className="flex justify-center mb-4">
                <Recycle className="h-10 w-10 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white text-center mb-2">E-Waste Recycling</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Pioneer in Middle East e-waste recycling with innovative processing methods
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stat-card"
            >
              <div className="flex justify-center mb-4">
                <Cable className="h-10 w-10 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white text-center mb-2">Copper Cable Recovery</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Large-scale copper cable recovery with sustainable growth plan
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="stat-card"
            >
              <div className="flex justify-center mb-4">
                <Truck className="h-10 w-10 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white text-center mb-2">Copper Trade - Zambia</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Strategic copper trading operations with regional warehouse hub
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="stat-card"
            >
              <div className="flex justify-center mb-4">
                <Factory className="h-10 w-10 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white text-center mb-2">Zimbabwe Processing</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Advanced mineral processing with community development focus
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Portfolio Strategy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources maintains a balanced portfolio of operations across the mineral resources value chain, strategically positioned to capitalize on emerging market opportunities while maintaining a strong commitment to sustainability.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our portfolio strategy focuses on three key pillars:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">1</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-primary-blue dark:text-white">Circular Economy:</strong> Pioneering recycling operations that recover valuable resources from waste streams
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">2</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-primary-blue dark:text-white">Strategic Trading:</strong> Establishing regional hubs in mineral-rich areas to optimize supply chain efficiency
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">3</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-primary-blue dark:text-white">Processing Innovation:</strong> Implementing proprietary technologies to maximize resource recovery and minimize environmental impact
                  </span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://thumbs.dreamstime.com/z/business-team-analyzing-income-charts-graphs-modern-laptop-computers-analysis-strategic-thinking-startup-group-meeting-304671526.jpg"
                alt="Portfolio Strategy"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Featured Portfolio Projects"
            subtitle="Explore our current operations across recycling, trading, and processing sectors."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                stats={project.stats}
                link={project.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
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
                src="https://empoweringpumps.com/wp-content/uploads/2020/02/Photo-courtesy-of-Tom-Fish-from-pexels.com_.png"
                alt="Sustainable Operations"
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
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Sustainability at the Core</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Across our portfolio, sustainability is integrated into every aspect of our operations. From pioneering e-waste recycling in the Middle East to implementing water conservation measures in our processing facilities, we're committed to responsible resource management.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our portfolio projects incorporate:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary-blue/10 dark:bg-primary-blue/20 p-2 rounded-full mr-3 mt-1">
                    <Recycle className="h-5 w-5 text-primary-blue dark:text-blue-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Circular Economy Principles</h4>
                    <p className="text-gray-700 dark:text-gray-300">Recovering valuable resources from waste streams</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue/10 dark:bg-primary-blue/20 p-2 rounded-full mr-3 mt-1">
                    <Factory className="h-5 w-5 text-primary-blue dark:text-blue-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Energy-Efficient Technologies</h4>
                    <p className="text-gray-700 dark:text-gray-300">Minimizing carbon footprint across operations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue/10 dark:bg-primary-blue/20 p-2 rounded-full mr-3 mt-1">
                    <Users className="h-5 w-5 text-primary-blue dark:text-blue-400" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-primary-blue dark:text-white">Community Development</h4>
                    <p className="text-gray-700 dark:text-gray-300">Creating local employment and development opportunities</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}