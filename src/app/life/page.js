'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const benefits = [
  {
    title: 'Financial security for loved ones',
    desc: 'Life insurance provides a financial safety net for your loved ones in the event of your death. The death benefit can be used to cover expenses such as funeral costs, outstanding debts and other financial obligations.',
    image: '/images/benefit1.jpg',
  },
  {
    title: 'Estate planning',
    desc: 'Life insurance can be used as part of an estate plan to help ensure that your assets are distributed according to your wishes.',
    image: '/images/benefit2.jpg',
  },
  {
    title: 'Business protection',
    desc: 'Life insurance can be used to provide financial protection for a business in the event of the death of a key employee or owner.',
    image: '/images/benefit3.jpg',
  },
  {
    title: 'Income replacement',
    desc: 'Life insurance can help replace your income in the event of your death, supporting your dependents financially.',
    image: '/images/benefit4.jpg',
  },
  {
    title: "Legacy Building",
    desc: "Life insurance can also be used to build a legacy for your beneficiaries by providing a death benefit that can be used to support their future needs.",
    image: "/images/benefit4.jpg"
  }
];

export default function LifeInsurancePage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-24 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Life Insurance Protection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Financial security for your loved ones when they need it most
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-medium uppercase tracking-wider text-sm">
              Life Insurance
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
              Peace of Mind for Your Family's Future
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Life insurance is a type of insurance policy that provides financial protection to your designated beneficiaries in the event of your death.
              </p>
              <p>
                Policies typically provide coverage for accidental death and illnesses. Some policies may also offer additional benefits, such as terminal illness coverage and accidental death and dismemberment coverage.
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
              src="/images/life-insurance.png"
              alt="Life Insurance Illustration"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Why Life Insurance Section */}
      <section className="bg-gray-50 px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why You Need Life Insurance
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                It is important to carefully consider your needs and budget when choosing a life insurance policy, as coverage and costs can vary depending on the type of policy, your age and health, and other factors.
              </p>
              <p>
                It is recommended that you speak with a financial adviser to help determine the right life insurance policy that suits your needs.
              </p>
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
              src="/images/why-life-insurance.png"
              alt="Why Life Insurance Matters"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Benefits of Life Insurance
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row rounded-xl bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
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
                <h3 className="text-xl font-semibold mb-3">Like What You're Reading?</h3>
                <p className="mb-5">Get personalized life insurance advice from our experts.</p>
                <button className="bg-white text-teal-600 px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition">
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
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Help Deciding?</h4>
                <p className="text-gray-600 mb-4">Our interactive tool can help you choose the right coverage.</p>
                <button className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition">
                  Get Started <span className="text-xl">→</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}