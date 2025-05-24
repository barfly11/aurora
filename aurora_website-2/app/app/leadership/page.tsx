"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/section-title';
import TeamCard from '@/components/ui/team-card';
import { Users, Award, Briefcase } from 'lucide-react';

const leadershipTeam = [
  {
    name: "Phil Routledge",
    position: "CEO and Founder",
    imageSrc: "https://www.headshotsnyc.com/wp-content/uploads/Business-Man-in-Three-Piece-Suit-Headshot.jpg",
    description: "With over 20 years of experience in the minerals industry, Phil founded Aurora Resources in 2016 with a vision to transform global mineral resources through sustainable practices."
  },
  {
    name: "Richie Scott",
    position: "Co-founder and Director",
    imageSrc: "https://images.squarespace-cdn.com/content/v1/5a75e6c7d0e6280619be93cd/1984e0b5-46a5-42a2-baf3-8d6077dc7fa0/Professional+headshot+photography+for+men+Houston+TX.jpg",
    description: "Richie brings extensive expertise in global mineral trading and strategic partnerships, helping to establish Aurora's international presence since its inception."
  },
  {
    name: "Chris King",
    position: "Director",
    imageSrc: "https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1",
    description: "Chris oversees operational excellence across Aurora's global projects, with particular focus on sustainable mining practices and technological innovation."
  },
  {
    name: "Alykhan Esmail",
    position: "CFO, Partner",
    imageSrc: "https://images.squarespace-cdn.com/content/v1/5a75e6c7d0e6280619be93cd/1984e0b5-46a5-42a2-baf3-8d6077dc7fa0/Professional+headshot+photography+for+men+Houston+TX.jpg",
    description: "Alykhan leads Aurora's financial strategy, ensuring sustainable growth and value creation for all stakeholders through prudent financial management."
  },
  {
    name: "Victor Baburin",
    position: "Director for Business Development, Partner",
    imageSrc: "https://www.headshotsnyc.com/wp-content/uploads/Business-Man-in-Three-Piece-Suit-Headshot.jpg",
    description: "Victor spearheads Aurora's expansion into new markets and development of strategic opportunities across the global minerals sector."
  }
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-blue text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/qmraJpx/videoblocks-group-of-business-professionals-meeting-around-table-in-modern-office_rk1lzykgr_thumbnail-1080_01.png"
            alt="Leadership Team"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Leadership</h1>
            <p className="text-xl text-gray-200 mb-8">
              Meet the experienced team driving Aurora Resources' global vision and strategic growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Executive Leadership"
            subtitle="Our leadership team brings decades of industry experience and a shared commitment to sustainable mineral resource development."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <TeamCard
                key={leader.name}
                name={leader.name}
                position={leader.position}
                imageSrc={leader.imageSrc}
                description={leader.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Capabilities */}
      <section className="section bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Our Team Capabilities"
            subtitle="Aurora Resources' leadership brings together diverse expertise to drive innovation and excellence across our global operations."
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
                <Briefcase className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Industry Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our leadership team brings over 20 years of combined experience in mineral trading, processing, and project development across global markets.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Strategic mineral sourcing</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Processing technology innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Global market analysis</span>
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
                <Users className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Global Network</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our team has cultivated an extensive network of industry relationships across 15+ countries, enabling strategic partnerships and market access.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Local partnerships in key regions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Government and regulatory relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Industry association leadership</span>
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
                <Award className="h-8 w-8 text-primary-blue dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-primary-blue dark:text-white mb-3">Innovation Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our leadership drives continuous innovation in sustainable mining practices, processing technologies, and circular economy solutions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Patented processing technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">E-waste recycling leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-blue text-white text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Sustainable mining solutions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
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
                src="https://www.amsj.com.au/wp-content/uploads/2019/05/Safety-discussions.jpeg"
                alt="Leadership in Action"
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
              <h2 className="text-3xl font-bold text-primary-blue dark:text-white mb-6">Our Leadership Philosophy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Aurora Resources, our leadership approach is guided by a commitment to sustainable development, ethical business practices, and long-term value creation for all stakeholders.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We believe in leading by example, fostering a culture of innovation, and maintaining the highest standards of corporate governance and environmental stewardship across all our operations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our team's diverse expertise and shared vision enable us to navigate complex global challenges while identifying strategic opportunities that align with our commitment to responsible resource management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}