import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const GlobalCTA = () => {
  return (
    <section className="relative w-full bg-brand-dark py-16 md:py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-serif mb-4 md:mb-6">
              Ready to take the <span className="italic text-brand-primary">Next Step?</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Whether you are looking for top-tier talent to drive your business forward or seeking your next great career opportunity, our team of experts is here to guide you every step of the way. Let's make it happen.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto flex items-center justify-center bg-brand-primary text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-brand-primary/90 transition-colors"
            >
              Get in Touch
              <ArrowRightIcon className="w-4 h-4 ml-2 stroke-2" />
            </Link>
            <Link 
              href="/vacancies" 
              className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              View Vacancies
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;
