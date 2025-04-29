'use client';

import Image from 'next/image';
import { PiCommandLight } from 'react-icons/pi';
import { FaUsers, FaShieldAlt, FaHeadphonesAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';

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

  return (
    <>
    {/* <Navbar /> */}
    <Navbar/>
      {/* WHO ARE WE */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Who are we?</h2>
            <p className="text-gray-600 mb-6">
              AIFP Personal Risk Limited T/A FG Life (FSP1003239) is a financial advice provider
              licensed by the Financial Market Authority (FMA).
            </p>
            <p className="text-gray-600">
              At FG Life, your adviser becomes your financial partner to help achieve your goals.
            </p>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <Image
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg"
              alt="Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="border rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
              {card.icon}
              <h3 className="text-xl font-bold mb-4 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Our Vision */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              We strive to provide our clients with the highest standards of care, and that starts with delivering high-quality financial advice. Our team of trustworthy and knowledgeable financial advisers is dedicated to providing our clients with the expertise and support they need to make informed decisions about their finances.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our aim is to be known as the epitome of financial advice, setting the highest standards in the industry for client care and helping our clients achieve their financial goals.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              To help our clients meet their immediate financial needs and provide them with the knowledge and resources to achieve long-term financial stability and freedom. By providing comprehensive and tailored financial advice, we aim to enable our clients to make informed decisions about their finances and reach their financial goals.
            </p>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              To offer a comprehensive financial plan that serves as a roadmap for our clients on their journey towards financial independence. We believe in providing a clear and achievable path for our clients to follow, so that they can make informed decisions about their finances and work towards their long-term financial goals. Our financial roadmap serves as a valuable tool for our clients, guiding them towards financial stability and freedom.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide ongoing support and guidance to our clients throughout their financial journey. Our financial advisers serve as trusted partners, working with each client to educate them and provide the resources and information needed to make informed decisions about their finances. We believe in being there for our clients at every step, offering guidance and support to ensure that their journey towards financial stability and independence is as smooth and successful as possible.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">It's a Journey</h2>
            <p className="text-gray-600 mb-6">
              We understand that financial planning is a journey and our financial advisers are here to support and guide you every step of the way. When you engage with one of our advisers, you can expect a personalised and collaborative relationship built on trust and mutual understanding. We will work with you to understand your financial goals and provide the advice, guidance and resources you need to achieve your goals and objectives.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you are facing challenges or celebrating successes, we will be there for you, acting as your financial mentor, sounding board and friend.
            </p>
            <p className="text-gray-600">
              Our goal is to help you make informed financial decisions and pave the pathway towards your financial success and peace of mind.
            </p>
          </div>
  
          {/* Right Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Transparency and Integrity</h2>
            <p className="text-gray-600 mb-6">
              When you appoint us as your financial adviser, it is essential that we work together to establish a relationship based on mutual trust and understanding.
            </p>
            <p className="text-gray-600 mb-6">
              Your financial adviser is committed to acting with integrity and transparency, adhering to the regulations and standards set by the Financial Market Authority. It is equally important for you to be transparent with us about your financial situation and goals in order for us to provide you with tailored financial advice and recommendations that suit your circumstances and needs.
            </p>
            <p className="text-gray-600">
              By establishing a strong foundation of trust and transparency, we can work together to achieve your financial objectives and provide you with the peace of mind that comes with a well-planned financial future.
            </p>
          </div>
          </div>
        </section>

      {/* PARTNERS SCROLLING */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <p className="text-center text-gray-500 mb-6">Trusted by leading organizations</p>
        <div className="overflow-hidden px-4">
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex items-center gap-16"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                {['partner1', 'partner2', 'partner3', 'partner4', 'partner5'].map((partner, idx) => (
                  <div key={idx} className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Partner {idx + 1}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h4 className="text-green-600 text-sm uppercase text-center mb-2">Our Team</h4>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet the Professionals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-64 object-cover rounded-full mb-6 shadow-lg"
              />
              <div className="bg-white border rounded-xl p-4 shadow-md w-full max-w-xs text-center">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.position}</p>
                <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                <button
                  className="text-blue-500 hover:underline mt-4"
                  onClick={() => alert(member.additionalInfo)}
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT US */}
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

      <Footer/>
    </>
  );
}

 
