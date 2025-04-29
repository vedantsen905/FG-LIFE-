'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const benefits = [
  {
    title: 'Financial support',
    desc: "In the event of a serious illness, trauma cover provides a lump sum payment that can help cover the cost of treatment and recovery, as well as provide financial stability during a time of uncertainty.",
    image: '/images/benefit1.jpg',
  },
  {
    title: 'Access to quality care',
    desc: "With the financial support provided by trauma cover, you can access quality medical care and treatment that you may not have been able to afford otherwise.",
    image: '/images/benefit2.jpg',
  },
  {
    title: 'Flexibility',
    desc: "You can use the payout to cover any expenses you choose, whether it be medical bills or day-to-day living expenses.",
    image: '/images/benefit3.jpg',
  },
  {
    title: 'Early intervention',
    desc: "In some cases, a lump sum payment can allow you to seek early intervention and treatment that may not otherwise be possible.",
    image: '/images/benefit4.jpg',
  },
  {
    title: "Choice of treatment options",
    desc: "Having trauma cover allows you to make your own choices about the medical treatment, rather than being limited by your ability to pay for it.",
    image: "/images/benefit4.jpg",
  },
  {
    title: "Maintaining standard of living",
    desc: "The lump sum payment from trauma cover can help you maintain your standard of living and meet your financial obligations while you are unable to work.",
    image: "/images/benefit4.jpg",
  },
  {
    title: "Peace of mind",
    desc: "Knowing that you are financially protected in the event of a serious illness can provide peace of mind for you and your family.",
    image: "/images/benefit4.jpg",
  },
];

export default function InsuranceIntro() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-24 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Income & Mortgage Protection
          </h1>
          <p className="text-xl text-gray-600">
            Financial security when you're unable to work due to illness or injury
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-600 text-lg max-w-5xl mx-auto">
            Income protection and mortgage protection are types of insurance that provide financial protection in the event you are unable to work or earn an income.
            The purpose is to help you maintain your standard of living and meet financial obligations like mortgage payments when you can't work due to a covered event.
          </p>
        </motion.div>

        {/* First Section with Keyboard Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-teal-600 font-medium uppercase tracking-wider text-sm">
              Income Protection
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
              Financial Safety Net
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Income/mortgage protection insurance can be a valuable tool for managing financial risks and ensuring stability during difficult times.
              </p>
              <p>
                It's particularly important for those with dependents or financial obligations they couldn't meet if unable to work.
              </p>
              <p>
                Carefully consider your needs and budget when choosing a plan, as coverage and costs vary by policy type, age, health, and other factors.
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
              src="/images/insurance-keyboard.png"
              alt="Insurance Protection"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Second Section with Family Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who Needs Income Protection?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                People with financial obligations like mortgages or debts need this insurance to maintain their standard of living if unable to work due to illness or injury.
              </p>
              <p>
                Those in physically demanding jobs or with pre-existing conditions may particularly benefit from income/mortgage protection.
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
              src="/images/family-dog-shelter.png"
              alt="Family Protection"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Benefits of Protection Insurance
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
                <h3 className="text-xl font-semibold mb-3">Need Protection Coverage?</h3>
                <p className="mb-5">Get personalized insurance advice from our experts.</p>
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
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Unsure About Coverage?</h4>
                <p className="text-gray-600 mb-4">Our interactive tool helps you choose the right protection.</p>
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