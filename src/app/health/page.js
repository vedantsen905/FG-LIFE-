'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HealthInsurance() {
  const benefits = [
    'doctor visits', 
    'hospital stays', 
    'diagnostic tests', 
    'surgery'
  ];

  const risks = [
    {
      title: 'Out-of-pocket medical expenses',
      desc: 'Paying the full cost of medical services—like doctor visits, hospital stays, and prescriptions—can quickly become overwhelming.',
      img: '/images/medical-expenses.jpg',
    },
    {
      title: 'Delayed care',
      desc: 'People without insurance may delay treatment, which often leads to worsened conditions and higher long-term costs.',
      img: '/images/delayed-care.jpg',
    },
    {
      title: 'Reduced access to care',
      desc: 'Lack of insurance may limit your access to timely and adequate medical care.',
      img: '/images/reduced-access.jpg',
    },
    {
      title: 'Financial hardship',
      desc: 'Unexpected medical bills can result in debt and financial instability, especially for the uninsured.',
      img: '/images/financial-hardship.jpg',
    },
    {
      title: 'Lack of preventive care',
      desc: 'Uninsured individuals often skip check-ups and screenings, leading to preventable issues escalating.',
      img: '/images/lack-preventive.jpg',
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Health Insurance</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage for medical expenses including doctor visits, hospital stays, diagnostic tests, 
            surgery and some overseas treatments.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-12 md:px-12 lg:px-24 max-w-screen-xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {benefits.map((tag) => (
                <span
                  key={tag}
                  className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Health Insurance Matters</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The availability and cost of health insurance can vary depending on factors such as age, health status,
                and desired coverage level.
              </p>
              <p>
                It's wise to review available options and consult a financial adviser to determine the best health
                insurance plan for your needs and budget.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/health-insurance.png"
              alt="Health Insurance Illustration"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Cost of Not Having Insurance */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-screen-xl mx-auto bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Cost of Not Having Health Insurance</h2>
            <div className="space-y-4 text-gray-600 mb-6">
              <p>
                Without health insurance, you may face long wait times in public healthcare systems and potentially
                substantial medical bills.
              </p>
              <p>
                You might be fully responsible for paying all medical costs out of pocket, resulting in financial strain
                or debt.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {benefits.map((tag) => (
                <span
                  key={tag}
                  className="bg-red-100 text-red-800 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
          >
            <Image
              src="/images/health-insurance-warning.png"
              alt="Health Insurance Warning"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-screen-xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            The risks of not having health insurance may include:
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {risks.slice(0, 3).map((risk, i) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row rounded-xl bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                    <Image
                      src={risk.img}
                      alt={risk.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{risk.title}</h3>
                    <p className="text-gray-600">{risk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Enjoying the read?</h3>
                <p className="mb-4">Reach out for personalized insurance advice.</p>
                <button className="bg-white text-teal-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                  Contact Us
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Interactive decision support system</h4>
                <button className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition">
                  Get Started <span className="text-xl">→</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Additional Risks */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-screen-xl mx-auto bg-gray-50">
        <div className="space-y-6">
          {risks.slice(3).map((risk, i) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row rounded-xl bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                <Image
                  src={risk.img}
                  alt={risk.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{risk.title}</h3>
                <p className="text-gray-600">{risk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600">
            In conclusion, not having health insurance can result in substantial financial and health risks. Insurance
            provides peace of mind and ensures access to timely and affordable medical care for you and your loved ones.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}