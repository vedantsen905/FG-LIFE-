'use client';

import Image from 'next/image';
import { PiCommandLight } from 'react-icons/pi';
import { FaUsers, FaShieldAlt, FaHeadphonesAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const cards = [
    { icon: <PiCommandLight className="text-green-500 text-4xl mb-4" />, title: 'Expertise', description: `We simplify the complex world of finance by providing clear and easy-to-understand advice and recommendations, empowering clients to make informed decisions.` },
    { icon: <FaUsers className="text-green-500 text-4xl mb-4" />, title: 'Client Philosophy', description: `Financial advice goes beyond maximising returns, it's about creating a simpler, secure financial future.` },
    { icon: <FaShieldAlt className="text-green-500 text-4xl mb-4" />, title: 'Belief', description: `The quality of advice is more important than products. We tailor advice first, then recommend products.` },
    { icon: <FaHeadphonesAlt className="text-green-500 text-4xl mb-4" />, title: 'Comprehensive Services', description: `Focused insurance advice for achieving financial goals and peace of mind.` },
  ];

  const team = [
    { name: 'Vijay Khobchandani', position: 'Founder FG Life', image: '/vijay.png', bio: 'Vijay brings 15+ years of experience in financial planning.', additionalInfo: 'Vijay is passionate about investment education.' },
    { name: 'Amit Talwar', position: 'Founder FG Life', image: '/amit.png', bio: 'Amit specializes in building financial roadmaps.', additionalInfo: 'Amit drives successful client strategies.' },
    { name: 'Atika Dogra', position: 'Claims Manager', image: '/atika.png', bio: 'Atika ensures smooth claims assistance.', additionalInfo: 'She simplifies complex claims processes.' },
    { name: 'Rajesh Kumar', position: 'Senior Financial Planner', image: '/rajesh.png', bio: 'Rajesh crafts personalized strategies.', additionalInfo: 'He focuses on retirement planning.' },
    { name: 'Priya Desai', position: 'Client Relationship Manager', image: '/priya.png', bio: 'Priya excels at client relationships.', additionalInfo: 'She simplifies financial concepts.' },
  ];

  const partners = Array(5).fill(0).map((_, i) => (
    <div key={i} className="h-16 w-40 bg-gray-100 rounded-lg flex items-center justify-center p-4">
      <span className="text-gray-600 font-medium">Partner {i + 1}</span>
    </div>
  ));

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Financial Partners
            </h1>
            <p className="text-lg text-gray-600">
              AIFP Personal Risk Limited T/A FG Life (FSP1003239) is a financial advice provider
              licensed by the Financial Market Authority (FMA).
            </p>
            <p className="text-gray-600">
              At FG Life, your adviser becomes your financial partner to help achieve your goals.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg"
              alt="Financial planning illustration"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">{card.title}</h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4">
              Our Vision
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-500"></span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We strive to provide our clients with the highest standards of care, and that starts with delivering high-quality financial advice. Our team of trustworthy and knowledgeable financial advisers is dedicated to providing our clients with the expertise and support they need to make informed decisions about their finances.
              </p>
              <p>
                Our aim is to be known as the epitome of financial advice, setting the highest standards in the industry for client care and helping our clients achieve their financial goals.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4">
              Our Mission
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                To help our clients meet their immediate financial needs and provide them with the knowledge and resources to achieve long-term financial stability and freedom. By providing comprehensive and tailored financial advice, we aim to enable our clients to make informed decisions about their finances and reach their financial goals.
              </p>
              <p>
                To offer a comprehensive financial plan that serves as a roadmap for our clients on their journey towards financial independence. We believe in providing a clear and achievable path for our clients to follow, so that they can make informed decisions about their finances and work towards their long-term financial goals.
              </p>
              <p>
                To provide ongoing support and guidance to our clients throughout their financial journey. Our financial advisers serve as trusted partners, working with each client to educate them and provide the resources and information needed to make informed decisions about their finances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4">
              It's a Journey
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-500"></span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We understand that financial planning is a journey and our financial advisers are here to support and guide you every step of the way. When you engage with one of our advisers, you can expect a personalised and collaborative relationship built on trust and mutual understanding.
              </p>
              <p>
                Whether you are facing challenges or celebrating successes, we will be there for you, acting as your financial mentor, sounding board and friend.
              </p>
              <p>
                Our goal is to help you make informed financial decisions and pave the pathway towards your financial success and peace of mind.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4">
              Transparency and Integrity
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                When you appoint us as your financial adviser, it is essential that we work together to establish a relationship based on mutual trust and understanding.
              </p>
              <p>
                Your financial adviser is committed to acting with integrity and transparency, adhering to the regulations and standards set by the Financial Market Authority.
              </p>
              <p>
                By establishing a strong foundation of trust and transparency, we can work together to achieve your financial objectives and provide you with the peace of mind that comes with a well-planned financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 mb-8">Trusted by leading organizations</p>
          <div className="relative overflow-hidden py-4">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="flex items-center gap-8"
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-8">
                  {partners}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-green-600 text-sm uppercase font-semibold tracking-wider mb-2 inline-block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Meet the Professionals</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="relative w-40 h-40 mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                  />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md w-full text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <button
                    className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                    onClick={() => alert(member.additionalInfo)}
                  >
                    Know More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              Have questions or need assistance? Our team is here to help you navigate your insurance options.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">0800 344 700</p>
                  <p className="text-gray-500 text-sm">Monday to Friday, 8:30am - 5:00pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">info@fglife.co.nz</p>
                  <p className="text-gray-500 text-sm">We typically respond within 12 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visit Us</h4>
                  <p className="text-gray-600">430 Ulster Street, Beerescourt, Hamilton 3200, New Zealand</p>
                  <p className="text-gray-500 text-sm">By appointment only</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6724603907956!2d175.2666254752794!3d-37.770297571981554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d19164c4450e1%3A0xbbe999f60ef74949!2s430%20Ulster%20Street%2C%20Beerescourt%2C%20Hamilton%203200%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1714306241083!5m2!1sen!2snz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder="+64 00 000 0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}