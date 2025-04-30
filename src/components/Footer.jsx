'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/logo-svg/SVG/Asset24.svg"
              alt="FG Life Logo"
              width={160}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400">
              Providing innovative insurance solutions to protect what matters most in your life.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/overview" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/claims" className="hover:text-white transition">Claims</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/life" className="hover:text-white transition">Life Insurance</Link></li>
              <li><Link href="/health" className="hover:text-white transition">Health Insurance</Link></li>
              <li><Link href="/trauma" className="hover:text-white transition">Trauma Insurance</Link></li>
              <li><Link href="/income" className="hover:text-white transition">Income Protection</Link></li>
              
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms&conditions" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
              <li><Link href="/complaint" className="hover:text-white transition">Complaints</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mb-8 text-sm text-gray-400 border-t border-gray-800 pt-8">
          <h4 className="text-white font-semibold mb-4">Important information and disclaimer</h4>
          <p className="mb-4">
            Any advice on this publication is of a general nature only and has not been tailored to your specific circumstances...
          </p>
          <p className="mb-4">
            In some cases, the information has been provided to us by third parties...
          </p>
          <p className="mb-4">
            Neither FG Life nor its responsible persons or employees give any warranty of accuracy...
          </p>
          <p className="mb-4">
            When you visit or interact with our sites, services or tools...
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} FG Life. All rights reserved. TechQuay BI.
          </p>

          <div className="flex space-x-6">
            {/* Social Icons */}
            {[
              { label: 'Facebook', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'LinkedIn', href: '#' }
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="text-gray-400 hover:text-white transition">
                <span className="sr-only">{item.label}</span>
                {/* Replace with actual icons or import from react-icons if needed */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
