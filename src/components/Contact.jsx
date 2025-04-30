// src/components/ContactSection.jsx
'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection({
  title = 'Get in Touch',
  description = 'Have questions or need assistance? Our team is here to help you navigate your insurance options.',
  phone = {
    number: '0800 344 700',
    hours: 'Monday to Friday, 8:30am - 5:00pm',
  },
  email = {
    address: 'info@fglife.co.nz',
    responseTime: 'We typically respond within 12 hours',
  },
  address = {
    location: '430 Ulster Street, Beerescourt, Hamilton 3200, New Zealand',
    note: 'By appointment only',
  },
  mapEmbedSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6724603907956!2d175.2666254752794!3d-37.770297571981554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d19164c4450e1%3A0xbbe999f60ef74949!2s430%20Ulster%20Street%2C%20Beerescourt%2C%20Hamilton%203200%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1714306241083!5m2!1sen!2snz',
}) {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
          
          <div className="space-y-6">
            <ContactItem
              icon={<Phone className="w-5 h-5" />}
              bgColor="bg-teal-100"
              textColor="text-teal-600"
              title="Call Us"
              line1={phone.number}
              line2={phone.hours}
            />
            <ContactItem
              icon={<Mail className="w-5 h-5" />}
              bgColor="bg-blue-100"
              textColor="text-blue-600"
              title="Email Us"
              line1={email.address}
              line2={email.responseTime}
            />
            <ContactItem
              icon={<MapPin className="w-5 h-5" />}
              bgColor="bg-purple-100"
              textColor="text-purple-600"
              title="Visit Us"
              line1={address.location}
              line2={address.note}
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={mapEmbedSrc}
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
              <InputField id="firstName" label="First Name" placeholder="Your first name" />
              <InputField id="lastName" label="Last Name" placeholder="Your last name" />
            </div>
            <InputField id="email" label="Email" placeholder="your.email@example.com" type="email" />
            <InputField id="phone" label="Phone" placeholder="+64 00 000 0000" type="tel" />
            <TextAreaField id="message" label="Message" placeholder="How can we help you?" rows={4} />
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
  );
}

// Reusable Contact Info Item component
function ContactItem({ icon, bgColor, textColor, title, line1, line2 }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`${bgColor} p-3 rounded-full ${textColor}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600">{line1}</p>
        <p className="text-gray-500 text-sm">{line2}</p>
      </div>
    </div>
  );
}

// Reusable Input Field
function InputField({ id, label, placeholder, type = 'text' }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        id={id}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
        placeholder={placeholder}
      />
    </div>
  );
}

// Reusable Textarea Field
function TextAreaField({ id, label, placeholder, rows = 4 }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        id={id}
        rows={rows}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
