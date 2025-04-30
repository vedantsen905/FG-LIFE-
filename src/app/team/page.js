'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Vijay Khobchandani',
    role: 'Founder FG Life',
    image: '/images/vijay.png',
    details: 'Vijay has over 20 years of experience in the financial services industry and co-founded FG Life to provide tailored insurance solutions.'
  },
  {
    name: 'Amit Talwar',
    role: 'Founder FG Life',
    image: '/images/amit.png',
    details: 'Amit specializes in strategic planning and has played a key role in the growth and innovation of FG Life.'
  },
  {
    name: 'Atika Dogra',
    role: 'Claims Manager',
    image: '/images/atika.png',
    details: 'Atika leads the claims department, ensuring smooth and efficient claims processing with a client-first approach.'
  },
  {
    name: 'Riya Sharma',
    role: 'Customer Support Lead',
    image: '/images/riya.png',
    details: 'Riya is responsible for managing client inquiries and providing exceptional support to enhance customer satisfaction.'
  },
  {
    name: 'Karan Mehta',
    role: 'Operations Head',
    image: '/images/karan.png',
    details: 'Karan oversees the operational functions of FG Life, ensuring seamless internal processes and service delivery.'
  }
];

export default function TeamSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Trust the <span className="text-teal-600">professionals</span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-20 bg-teal-500 mx-auto mt-4"
            />
          </motion.h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 text-center">
                  {/* Profile Image Container */}
                  <div className="relative mx-auto w-32 h-32 rounded-full border-4 border-teal-100 mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{member.role}</p>

                  {/* Expand Button */}
                  <motion.button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center justify-center mx-auto text-gray-600 hover:text-teal-600 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-1 font-medium">
                      {expandedIndex === index ? 'Show less' : 'Know more'}
                    </span>
                    <motion.span
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </motion.button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                          {member.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}