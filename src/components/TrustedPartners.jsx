// components/TrustedPartners.js
'use client';

import { motion } from 'framer-motion';

const partners = ['partner1', 'partner2', 'partner3', 'partner4', 'partner5'];

export default function TrustedPartners() {
  return (
    <div className="mt-16 md:mt-24">
      <p className="text-center text-gray-500 mb-6">Trusted by leading organizations</p>
      <div className="overflow-hidden px-4">
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="flex items-center gap-12 md:gap-16 whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-16">
              {partners.map((_, idx) => (
                <div
                  key={`${i}-${idx}`}
                  className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center shrink-0"
                >
                  <span className="text-gray-500 font-medium">Partner {idx + 1}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
