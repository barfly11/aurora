"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/section-title';
import ProjectCard from '@/components/ui/project-card';
import StatCard from '@/components/ui/stat-card';
import { 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Award
} from 'lucide-react';

const featuredProjects = [
  {
    title: "Port Extension Project",
    description: "Delivered 600,000 metric tons of materials for a major port extension project, completing the work 30% ahead of schedule through strategic logistics management.",
    imageSrc: "https://c8.alamy.com/comp/2K7R42W/cranes-loading-shipping-containers-in-the-port-of-vancouver-vancouver-british-columbia-canada-2K7R42W.jpg",
    stats: [
      { label: "Metric Tons Delivered", value: "600K" },
      { label: "Ahead of Schedule", value: "30%" }
    ]
  },
  {
    title: "Gold Mining Enhancement",
    description: "Implemented proprietary processing technologies at a gold mining operation, resulting in an 83% increase in production efficiency and 100% precious metal output improvement.",
    imageSrc: "https://image.made-in-china.com/2f0j00qwhlVbWsfHoY/Placer-Gold-Mining-Machinery-Gold-Concentrator-Mining-Processing-Flow-Chart.jpg",
    stats: [
      { label: "Production Increase", value: "83%" },
      { label: "Precious Metal Output", value: "100%" }
    ]
  },
  {
    title: "E-Waste Recycling Facility",
    description: "Established the first comprehensive e-waste recycling facility in the Middle East region, achieving 100% recovery of precious group metals through innovative processing methods.",
    imageSrc: "https://thumbs.dreamstime.com/b/e-waste-recycling-facility-workers-sorting-dismantling-various-types-electronic-equipment-e-waste-recycling-facility-274109041.jpg",
    stats: [
      { label: "Regional Ranking", value: "1st" },
      { label: "PGM Recovery", value: "100%" }
    ]
  },
  {
    title: "Copper Cable Recovery",
    description: "Developed a large-scale copper cable recovery operation with an annual target of over 100,000 metric tons and a 10-year scale-up timeline for sustainable growth.",
    imageSrc: "https://www.amshredder.com/wp-content/uploads/2022/04/Cable-Wire-Recycling-Machine.jpg",
    stats: [
      { label: "Annual Target", value: "100K+ MT" },
      { label: "Scale-up Timeline", value: "10 Years" }
    ]
  },
  {
    title: "Zambia Warehouse Facility",
    description: "Established a 1,500m² warehouse facility in Zambia with 5,000 MT storage capacity, creating a strategic hub for mineral trading operations in the region.",
    imageSrc: "https://image.shutterstock.com/z/stock-photo-big-warehouse-on-storage-of-the-packed-mineral-water-269641619.jpg",
    stats: [
      { label: "Facility Size", value: "1,500m²" },
      { label: "Storage Capacity", value: "5,000 MT" }
    ]
  }
];

export default function TrackRecordPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/premium-photo/massive-openpit-mine-with-heavy-machinery-workers_825767-35399.jpg"
            alt="Aurora Resources Projects"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Track Record</h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore Aurora Resources' portfolio of successful projects and achievements across the global minerals industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Performance Metrics"
            subtitle="Aurora Resources has consistently delivered exceptional results across our global operations."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Project Completion Rate"
              value={98}
              suffix="%"
              icon={<Clock size={36} />}
              description="On-time project delivery"
            />
            <StatCard
              title="Efficiency Improvement"
              value={83}
              suffix="%"
              icon={<TrendingUp size={36} />}
              description="Average processing efficiency gain"
            />
            <StatCard
              title="Resource Recovery"
              value={95}
              suffix="%"
              icon={<BarChart3 size={36} />}
              description="Average mineral recovery rate"
            />
            <StatCard
              title="Client Satisfaction"
              value={100}
              suffix="%"
              icon={<Award size={36} />}
              description="Client retention rate"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Featured Projects"
            subtitle="Explore our portfolio of successful projects that showcase our expertise and capabilities."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                stats={project.stats}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proprietary Technologies */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Proprietary Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aurora Resources has developed and implemented several proprietary technologies that enhance mineral processing efficiency while reducing environmental impact.
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-2">Directional Gas Pressure System (2010)</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our patented gas pressure system optimizes mineral extraction processes, reducing energy consumption by up to 40% while improving recovery rates.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-2">Low-Energy Blasting Technology</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Innovative blasting techniques that minimize environmental impact while maximizing resource extraction efficiency in mining operations.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-primary-blue">
                  <h3 className="text-lg font-semibold text-primary-blue dark:text-white mb-2">Proprietary Beneficiation Techniques</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Advanced mineral separation and enhancement methods that improve product quality while reducing waste and environmental footprint.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://www.mineralprocessing.co.za/wp-content/uploads/2023/04/Process-Simulation-2-scaled.jpg"
                alt="Proprietary Processing Technology"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Our Strategic Advantages"
            subtitle="Aurora Resources leverages key strategic advantages to deliver exceptional results across our global operations."
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
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-4">Established Local Partnerships</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our network of trusted local partners across key regions enables efficient operations, regulatory compliance, and community engagement.
              </p>
              <div className="mt-4 bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-lg">
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  "Aurora's partnership approach has been instrumental in our successful expansion across multiple African markets."
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
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-4">Secure Supply Chain</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our end-to-end logistics management ensures secure and efficient movement of materials across global supply chains, minimizing disruptions and delays.
              </p>
              <div className="mt-4 bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-lg">
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  "The Port Extension Project's 30% ahead-of-schedule completion demonstrates our supply chain excellence."
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
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-4">Processing Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our proprietary processing technologies and technical expertise enable superior resource recovery, product quality, and operational efficiency.
              </p>
              <div className="mt-4 bg-primary-blue/10 dark:bg-primary-blue/20 p-4 rounded-lg">
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  "The 83% production increase at our gold mining operation showcases our processing innovation capabilities."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}