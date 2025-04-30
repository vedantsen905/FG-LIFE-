'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant, slideIn } from '@/utils/motion';

export default function ComplaintPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.1)}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
        >
          {/* Hero Section */}
          <motion.div 
            variants={textVariant(0.5)}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complaint Process</h1>
            <motion.div 
              variants={fadeIn('up', 'spring', 0.7, 1)}
              className="h-1 w-20 bg-teal-500 mx-auto mb-8 rounded-full"
            ></motion.div>
          </motion.div>

          {/* Complaint Process */}
          <motion.div
            variants={fadeIn('up', 'spring', 0.5, 1)}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                We're committed to delivering services that meet your expectations. We acknowledge that all clients have the right to express dissatisfaction and to have their complaints heard in a fair and prompt manner.
              </p>
              <p className="mb-8 text-gray-700">
                If however, we have let you down, we want to hear about it. Complaints may be received verbally either in person or by telephone, or in written and email form.
              </p>

              <div className="space-y-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">What Constitutes a Complaint</h2>
                  <p className="text-gray-700">
                    A complaint is an expression of dissatisfaction communicated by a client who has received financial advice about a product or service through us and there is a request to remedy the situation.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">What to Expect When You Make a Complaint</h2>
                  <p className="text-gray-700">
                    We are committed to dealing with complaints efficiently and positively. When a complaint is received, we will listen to you with patience and understanding and promise to be courteous.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">How to Make a Complaint</h2>
                  <p className="mb-4 text-gray-700">
                    Each complaint, regardless of the way it was received, will be recorded and retained in our Complaints Register.
                  </p>
                  <p className="mb-6 text-gray-700">
                    A quick chat to your advisor or one of our staff either telephonically or in person. This is often enough to sort out your concern.
                  </p>
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-teal-50 border-l-4 border-teal-500 p-4 hover:bg-teal-100 transition-colors"
                  >
                    <p className="font-bold text-lg text-teal-700">Call us on: 0800 344 700</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Us + Step 1 */}
          <motion.div
            variants={slideIn('right', 'spring', 0.2, 1)}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <MapPin className="text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Visit us at:</span> 430 Ulster Street Beerescourt Hamilton 3200
                </p>
              </motion.div>

              <p className="text-gray-700">
                Alternatively, You can send an email or letter. A representative will endeavour to reach out to you within 24 hours of receiving a written complaint.
              </p>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <Mail className="text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Send an email to:</span> complaints@fglife.co.nz
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <MapPin className="text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Send a letter to:</span> PO Box 21017 Rototuna Hamilton 3256
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
              <motion.div
                variants={fadeIn('right', 'spring', 0.5, 1)}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">STEP 1: IDENTIFY THE ISSUES</h3>
                <p className="mb-4 text-gray-700">
                  We will go through a process to identify the exact issues you as the client have raised. We will work with you to identify why you believe it is an issue and the impact of the issue on yourself or your business.
                </p>
                <p className="text-gray-700">
                  Should your complaint be against the insurance provider, we will instruct you of your right to submit a complaint directly to them and provide the relevant contact information.
                </p>
              </motion.div>
              <motion.img 
                variants={fadeIn('left', 'spring', 0.5, 1)}
                src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/complain1_new.jpeg" 
                alt="Identify Issues" 
                className="rounded-lg w-full h-80 object-cover shadow-md hover:shadow-xl transition-shadow duration-300" 
              />
            </div>
          </motion.div>

          {/* Step 2 & 3 */}
          <div className="space-y-12">
            <motion.div
              variants={slideIn('left', 'spring', 0.3, 1)}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/complaint2_new.jpeg" 
                  alt="Senior Manager" 
                  className="rounded-lg w-full h-80 object-cover shadow-md" 
                />
                <motion.div
                  variants={fadeIn('left', 'spring', 0.5, 1)}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">STEP 2: SENIOR MANAGER INVOLVEMENT</h3>
                  <p className="text-gray-700">
                    If we can't resolve the issue together, you'll be referred to a senior manager who will aim to investigate and resolve your complaint within two working weeks.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={slideIn('right', 'spring', 0.4, 1)}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  variants={fadeIn('right', 'spring', 0.5, 1)}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">STEP 3: INDEPENDENT DISPUTE RESOLUTION</h3>
                  <p className="text-gray-700">
                    If after working with a senior manager we still haven't been able to resolve the issue, you will be directed to escalate your case to our independent dispute resolution provider.
                  </p>
                </motion.div>
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/complaint2_new.jpeg" 
                  alt="Dispute Resolution" 
                  className="rounded-lg w-full h-80 object-cover shadow-md" 
                />
              </div>
            </motion.div>
          </div>

          {/* FDRS Escalation Section */}
          <motion.div
            variants={fadeIn('up', 'spring', 0.5, 1)}
            className="bg-white rounded-2xl shadow-md p-8 mt-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Escalation to Financial Dispute Resolution Service (FDRS)</h2>
              <motion.div 
                variants={fadeIn('up', 'spring', 0.7, 1)}
                className="h-1 w-20 bg-teal-500 mx-auto mb-6 rounded-full"
              ></motion.div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                If we cannot resolve the issue to your satisfaction, we will refer it to our external independent dispute resolution service, the Financial Dispute Resolution Service (FDRS).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Address Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-teal-600 w-5 h-5" />
                  <h3 className="text-lg font-semibold text-gray-900">POST</h3>
                </div>
                <p className="text-gray-700">
                  Freepost 231075 <br />
                  PO Box 2272 <br />
                  Wellington 6140
                </p>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="text-teal-600 w-5 h-5" />
                  <h3 className="text-lg font-semibold text-gray-900">Call</h3>
                </div>
                <p className="text-gray-700">0508 337 337</p>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-teal-600 w-5 h-5" />
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                </div>
                <p className="text-gray-700 break-words">enquiries@fdrs.org.nz</p>
              </motion.div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-teal-50 mt-10 p-6 rounded-xl text-gray-700 border border-teal-100 text-center max-w-3xl mx-auto hover:bg-teal-100 transition-colors"
            >
              Our team will provide you with all necessary contact details and assist with referring your case to the FDRS if required.
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}