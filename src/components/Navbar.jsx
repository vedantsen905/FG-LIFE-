'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  

  // Initialize dark mode from localStorage and handle scroll effect
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Handle scroll effect only on home page
    if (isHomePage) {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true); // Always show colored navbar on other pages
    }
  }, [isHomePage]);

  // Toggle dark mode and persist to localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Determine navbar background
  const getNavbarBackground = () => {
    if (isHomePage && !scrolled) return 'bg-white';
    return darkMode ? 'bg-gray-900' : 'bg-teal-600';
  };

  // Determine text colors
  const getTextColor = () => {
    if (isHomePage && !scrolled) return 'text-gray-900';
    return darkMode ? 'text-white' : 'text-white';
  };

  // Determine hover colors
  const getHoverColor = () => {
    if (isHomePage && !scrolled) return 'hover:text-teal-600';
    return darkMode ? 'hover:text-gray-300' : 'hover:text-teal-100';
  };

  return (
    <nav className={`${getNavbarBackground()} ${getTextColor()} shadow-sm fixed top-0 left-0 w-full z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo with Company Image */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://fg-life-assets.s3.ap-southeast-2.amazonaws.com/logo-svg/SVG/Asset24.svg"
              alt="FG Life Logo"
              width={110}
              height={110}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${getTextColor()} ${getHoverColor()} transition-colors`}
          >
            Home
          </Link>
          
          {/* Insurance Dropdown */}
          <div className="relative group">
            <button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${getTextColor()} ${getHoverColor()} transition-colors`}>
              Insurance
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} py-1 hidden group-hover:block z-50 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <Link 
                href="/insurance/life" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Overview
              </Link>
              <Link 
                href="/insurance/life" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Life Insurance
              </Link>
              <Link 
                href="/insurance/health" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Health Insurance
              </Link>
              <Link 
                href="/insurance/trauma" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Trauma Cover
              </Link>
              <Link 
                href="/insurance/life" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Income Protection Insurance
              </Link>
            </div>
          </div>
          
          {/* Information Dropdown */}
          <div className="relative group">
            <button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${getTextColor()} ${getHoverColor()} transition-colors`}>
              Information
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} py-1 hidden group-hover:block z-50 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <Link 
                href="/info/blogs" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                About Us
              </Link>
              <Link 
                href="/info/faq" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                 Public Disclosure
              </Link>
              <Link 
                href="/info/resources" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Understanding Insurance
              </Link>

              <Link 
                href="/info/resources" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/info/resources" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Disclaimer
              </Link>

              <Link 
                href="/info/resources" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Terms & Conditions
              </Link>

              <Link 
                href="/info/resources" 
                className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Complaint Process
              </Link>
            </div>
          </div>
          
          <Link 
            href="/team" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${getTextColor()} ${getHoverColor()} transition-colors`}
          >
            Our Team
          </Link>
          <Link 
            href="/claims" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${getTextColor()} ${getHoverColor()} transition-colors`}
          >
            Claims
          </Link>
          <Link 
            href="/contact" 
            className={`px-3 py-2 rounded-md text-sm font-medium ${getTextColor()} ${getHoverColor()} transition-colors`}
          >
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white/20 hover:bg-white/30'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>

          {/* WhatsApp Button */}
          <Link 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-green-700 hover:bg-green-600 text-white' : 'bg-white hover:bg-gray-100 text-teal-600'} transition-colors`}
          >
            <Image 
              src={darkMode ? "/whatsapp-icon-white.png" : "/whatsapp-icon-green.png"} 
              alt="WhatsApp" 
              width={20} 
              height={20} 
              className="w-5 h-5"
            />
            <span>Chat</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white/20 hover:bg-white/30'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full ${getTextColor()} hover:opacity-80`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-teal-600'} shadow-xl transition-all duration-300`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${getTextColor()} ${getHoverColor()}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="relative">
              <button 
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${getTextColor()} ${getHoverColor()} flex justify-between items-center`}
              >
                Insurance
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-1 ml-4 ${darkMode ? 'bg-gray-700' : 'bg-teal-500'} rounded-md`}>
                <Link 
                  href="/insurance/life" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Life Insurance
                </Link>
                <Link 
                  href="/insurance/health" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Health Insurance
                </Link>
                <Link 
                  href="/insurance/health" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Trauma Cover
                </Link>
                <Link 
                  href="/insurance/health" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                   Income Protection Insurance
                </Link>
              
              </div>
            </div>
            
            <div className="relative">
              <button 
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${getTextColor()} ${getHoverColor()} flex justify-between items-center`}
              >
                Information
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mt-1 ml-4 ${darkMode ? 'bg-gray-700' : 'bg-teal-500'} rounded-md`}>
                <Link 
                  href="/info/blogs" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/info/faq" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Public Disclousre
                </Link>
                <Link 
                  href="/info/faq" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                 Understanding Insurance
                </Link>
                <Link 
                  href="/info/faq" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                   Privacy Policy
                </Link>

                <Link 
                  href="/info/faq" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Disclaimer
                </Link>
                <Link 
                  href="/info/faq" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                   Terms & Conditions
                </Link>
                <Link 
                  href="/info/faq" 
                  className={`block px-3 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-white hover:bg-teal-400'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Complaint Process
                </Link>
              </div>
            </div>
            
            <Link 
              href="/team" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${getTextColor()} ${getHoverColor()}`}
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              href="/claims" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${getTextColor()} ${getHoverColor()}`}
              onClick={() => setIsOpen(false)}
            >
              Claims
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${getTextColor()} ${getHoverColor()}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <Link 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${darkMode ? 'bg-green-700 text-white hover:bg-green-600' : 'bg-white text-teal-600 hover:bg-gray-100'} mt-4`}
              onClick={() => setIsOpen(false)}
            >
              <Image 
                src={darkMode ? "/whatsapp-icon-white.png" : "/whatsapp-icon-green.png"} 
                alt="WhatsApp" 
                width={20} 
                height={20} 
                className="w-5 h-5"
              />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}