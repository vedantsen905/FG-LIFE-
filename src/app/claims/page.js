'use client';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function ClaimsProcessSection() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Fixed Glassmorphism Navbar */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-white/80 shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 space-y-20"
        >
          {/* Hero Section */}
          <motion.section 
            variants={fadeIn}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-800 px-4 py-2 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                <span className="text-sm font-medium">Claims Process</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Seamless <span className="text-teal-600">Claim Experience</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At FG Life, we transform the daunting claims process into a smooth journey with our end-to-end assistance and dedicated claims management.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                  Personal Guidance
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                  Fast Processing
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                  24/7 Support
                </span>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]"
            >
              <img 
                src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/ClaimProcess1.jpeg" 
                alt="Claims Process" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/10"></div>
            </motion.div>
          </motion.section>

          {/* Process Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <motion.section 
              variants={fadeIn}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 md:p-10 lg:p-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl">
                      1
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Claim Notification</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Initiate your claim with a simple call or email to our dedicated claims manager who will guide you through every step.
                  </p>
                  
                  <div className="pt-4">
                    <div className="inline-flex flex-col sm:flex-row gap-3 bg-gray-50 rounded-xl p-5">
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500">Claims Manager</span>
                        <p className="font-medium">Atika Dogra</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500">Direct Contact</span>
                        <p className="font-medium">+64 272 51796 6</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-gray-500">Email</span>
                        <p className="font-medium">atika@fglife.co.nz</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative min-h-[300px] lg:min-h-full"
                >
                  <img 
                    src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/MakeClaim.jpeg" 
                    alt="Claim Notification" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </motion.div>
              </div>
            </motion.section>

            {/* Step 2 */}
            <motion.section 
              variants={fadeIn}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative min-h-[300px] lg:min-h-full order-last lg:order-first"
                >
                  <img 
                    src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/FileClaim.jpeg" 
                    alt="Claim Form Completion" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </motion.div>
                
                <div className="p-8 md:p-10 lg:p-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl">
                      2
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Form Completion</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Receive a customized claim form with clear instructions. Our team is available to assist with any questions during completion.
                  </p>
                  
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Step-by-step guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Personalized support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Quick response time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Step 3 */}
            <motion.section 
              variants={fadeIn}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 md:p-10 lg:p-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl">
                      3
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Document Submission</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our team ensures secure and efficient submission of all documents to your insurance provider with complete transparency.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900">Secure Upload</h4>
                      <p className="text-sm text-gray-500 mt-1">Encrypted digital submission</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900">Tracking</h4>
                      <p className="text-sm text-gray-500 mt-1">Real-time status updates</p>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative min-h-[300px] lg:min-h-full"
                >
                  <img 
                    src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/ClaimSettlement.jpeg" 
                    alt="Document Submission" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </motion.div>
              </div>
            </motion.section>

            {/* Step 4 */}
            <motion.section 
              variants={fadeIn}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative min-h-[300px] lg:min-h-full order-last lg:order-first"
                >
                  <img 
                    src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/ClaimSettlement.jpeg" 
                    alt="Additional Support" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </motion.div>
                
                <div className="p-8 md:p-10 lg:p-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl">
                      4
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ongoing Support</h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Continuous assistance throughout your claim journey with proactive communication and expert advocacy.
                  </p>
                  
                  <div className="pt-4">
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                      <h4 className="font-bold text-teal-800">Our Promise</h4>
                      <p className="text-teal-700 mt-2">
                        We'll be with you from start to finish, providing continuity, expertise, and advocating on your behalf.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* CTA Section */}
          <motion.section 
            variants={fadeIn}
            className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-10 md:p-12 lg:p-14 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Claim?</h2>
                <p className="text-teal-100 text-lg mb-6">
                  Contact our claims team today for personalized assistance and peace of mind.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-md transition-colors">
                    Call Now
                  </button>
                  <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-colors">
                    Email Us
                  </button>
                </div>
              </div>
              
              <div className="relative min-h-[250px] hidden lg:block">
                <div className="absolute inset-0 bg-[url('https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/ClaimProcess1.jpeg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-8">
                    <svg className="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white">
        <Footer />
      </footer>
    </div>
  );
}