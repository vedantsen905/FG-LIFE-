'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import TrustedPartners from './TrustedPartners';

export default function Hero() {
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const phrases = ['when life happens', 'saves lives', 'that secures futures'];
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentCharIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const phraseDelay = 2000;
    let typingInterval;

    const typeText = () => {
      typingInterval = setInterval(() => {
        setText((prev) => {
          if (prev === phrases[currentPhraseIndex]) {
            setIsTyping(false);
            clearInterval(typingInterval);
            setTimeout(() => {
              setIsTyping(true);
              setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
              setText('');
            }, phraseDelay);
            return prev;
          }
          return phrases[currentPhraseIndex].slice(0, currentCharIndex + 1);
        });
        currentCharIndex += 1;
      }, isTyping ? typingSpeed : erasingSpeed);
    };

    typeText();

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex]);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full pt-24 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left Text */}
          <div className="space-y-6 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Insurance <br />
              <span className="relative inline-block">
                <span className="text-teal-600 bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                  {text}
                  <span className="inline-block w-2 h-8 md:h-10 bg-teal-400 ml-1 animate-pulse"></span>
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              Financial security and peace of mind for you and your loved ones when unexpected events occur.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Link href="/about">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Discover More
                </button>
              </Link>
              <Link href="/learn-more" className="flex items-center text-teal-600 font-semibold group">
                Learn more
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center relative"
          >
            <Image
              src="/hero-family.png"
              alt="Family insurance"
              width={600}
              height={500}
              className="rounded-xl shadow-xl z-10"
              priority
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border-2 border-teal-300 z-0"></div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <TrustedPartners/>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Protection for Every Stage of Life</h2>
            <p className="text-gray-600 text-lg">
              Our insurance solutions are designed to adapt to your changing needs, providing security at every milestone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Life Insurance",
                description: "Financial security for your loved ones when they need it most.",
                icon: "❤️"
              },
              {
                title: "Health Coverage",
                description: "Access to quality healthcare without financial stress.",
                icon: "🏥"
              },
              {
                title: "Income Protection",
                description: "Secure your golden years with our tailored retirement solutions.",
                icon: "💰"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Insurance Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Life Protection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Life Cover That Adapts to Your Changing Needs
              </h2>
              <p className="text-gray-600 text-lg">
                Our flexible life insurance solutions provide comprehensive protection that evolves with your life circumstances, ensuring your loved ones are always protected.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Terminal Illness",
                  description: "Coverage for critical health conditions"
                },
                {
                  title: "Income Protection",
                  description: "Monthly benefits for financial stability"
                },
                {
                  title: "Lump Sum Payout",
                  description: "Immediate financial support"
                },
                {
                  title: "Flexible Premiums",
                  description: "Plans that fit your budget"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <Link href="/life-insurance" className="inline-flex items-center text-teal-600 font-semibold group">
              Explore Life Cover
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/family-umbrella.png"
              alt="Family Protection"
              width={600}
              height={500}
              className="rounded-xl shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-xl border-2 border-teal-300 z-0"></div>
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <div className="bg-green-500 text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">93% Claims Paid</h4>
                  <p className="text-gray-600 text-sm">Based on claims assessed last year</p>
                </div>
              </div>
              <p className="text-gray-700">
                We're proud of our high claims acceptance rate, ensuring that when you need support, we're there for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trauma Insurance Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-last lg:order-first">
            <Image
              src="/trauma-insurance.jpg"
              alt="Trauma Insurance"
              width={600}
              height={500}
              className="rounded-xl shadow-xl"
            />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Critical Illness</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trauma Insurance for Life's Unexpected Challenges
              </h2>
              <p className="text-gray-600 text-lg">
                Our trauma insurance provides a lump sum payment if you're diagnosed with a serious illness, giving you financial freedom to focus on recovery.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                "Cover for cancer, heart attack, and stroke",
                "Flexible payment options to suit your needs",
                "Additional support services during recovery",
                "Option to combine with life insurance"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-teal-100 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Why choose our trauma cover?</h4>
              <p className="text-gray-700">
                We offer comprehensive coverage with clear terms and competitive premiums, ensuring you get the protection you need without unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it - hear from people who've experienced our service firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The claims process was so smooth when we needed it most. Truly a lifesaver for our family.",
                name: "Sarah Johnson",
                role: "Life Insurance Client"
              },
              {
                quote: "I never understood how important trauma cover was until I needed it. Thank you for your support.",
                name: "Michael Chen",
                role: "Trauma Insurance Client"
              },
              {
                quote: "Their advisors took the time to understand our unique situation and recommend the perfect coverage.",
                name: "The Williams Family",
                role: "Comprehensive Plan"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Get personalized insurance advice from our experts. We'll help you find the right coverage for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/get-quote">
                <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
                  Speak to an Advisor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              Have questions or need assistance? Our team is here to help you navigate your insurance options.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">0800 344 700</p>
                  <p className="text-gray-500 text-sm">Monday to Friday, 8:30am - 5:00pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">info@fglife.co.nz</p>
                  <p className="text-gray-500 text-sm">We typically respond within 12 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visit Us</h4>
                  <p className="text-gray-600">430 Ulster Street, Beerescourt, Hamilton 3200, New Zealand</p>
                  <p className="text-gray-500 text-sm">By appointment only</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6724603907956!2d175.2666254752794!3d-37.770297571981554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d19164c4450e1%3A0xbbe999f60ef74949!2s430%20Ulster%20Street%2C%20Beerescourt%2C%20Hamilton%203200%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1714306241083!5m2!1sen!2snz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="+64 00 000 0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

{/* <Footer/> */}

    </>
  );
}