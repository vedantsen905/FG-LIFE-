'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { DollarSign, Smile, Users, PlusSquare, CheckCircle } from 'lucide-react';
import TrustedPartners from '@/components/TrustedPartners';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const images = ['/carousel1.png', '/carousel2.png', '/carousel3.png'];

export default function Overview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-green-50 to-blue-50">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left mt-10 lg:mt-0">
          <p className="text-green-600 mb-2 uppercase text-sm tracking-wider">Insurance</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Insurance <span className="text-teal-500 underline decoration-green-200">made simple</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Provide financial security and peace of mind for you and your family in case of unexpected events.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book a call
          </motion.button>
        </div>

        {/* Right Carousel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl mt-10 lg:mt-0"
        >
          <Image
            src={images[index]}
            alt="Insurance Banner"
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
        </motion.div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-green-600 font-medium uppercase text-sm tracking-wider mb-2 inline-block">
            Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Here are some reasons that you might consider having insurance:
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-12 text-lg">
            Ultimately, the decision to have insurance depends on your circumstances and the level of financial risk you are willing to take on.
            It is recommended to consult with a financial adviser to determine which types of insurance are best suited to your needs.
            <br /><br />
            We help you fulfill your best potential through an engaging lifestyle experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                Icon: DollarSign,
                title: 'Financial protection',
                desc: 'Provides financial protection in the event of unexpected events such as accidents, illnesses or death.'
              },
              {
                Icon: Smile,
                title: 'Peace of mind',
                desc: 'Gives policyholders peace of mind knowing they\'re protected during unexpected life events.'
              },
              {
                Icon: Users,
                title: 'Provision for dependents',
                desc: 'Life insurance ensures your dependents\' financial needs are met after your death.'
              },
              {
                Icon: PlusSquare,
                title: 'At the time of disabilities',
                desc: 'Disability insurance supports those unable to work due to injury or illness.'
              }
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-teal-500 w-8 h-8" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Do I Need Insurance Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-600 uppercase text-sm font-medium tracking-wider mb-2 inline-block">
            Insurance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Do I need Insurance?
          </h2>
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm">
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether or not you need insurance depends on your personal circumstances and the risks you face.
              <br /><br />
              However, insurance can provide financial protection and peace of mind in the event of unexpected events.
              <br /><br />
              It can also help you manage the costs associated with these events and avoid financial hardship.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Advice Process Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Insurance Advice Process
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We follow a compliant advice process which focuses on your needs and objectives and
              building a long-term relationship so we can be part of your journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Understanding you',
                'Underwriting',
                'Ongoing Service',
                'Advice Preparation',
                'Review'
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <Image
                src="/images/primary.png"
                alt="Main Circle"
                fill
                className="rounded-full object-cover shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/images/top-right.png"
                alt="Top Right"
                fill
                className="rounded-full object-cover shadow-lg border-4 border-white"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-28 h-28 md:w-36 md:h-36 translate-x-1/3 translate-y-1/3"
            >
              <Image
                src="/images/bottom-right.png"
                alt="Bottom Right"
                fill
                className="rounded-full object-cover shadow-lg border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <TrustedPartners />
       
      <Footer />
    </main>
  );
}

