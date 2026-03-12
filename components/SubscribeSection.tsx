import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const SubscribeSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">

        {/* Left Side: Subscribe */}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full md:w-auto">
          <h3 className="text-brand-navy font-semibold text-base md:text-[17px] whitespace-nowrap">
            Subscribe for job alerts
          </h3>
          <div className="relative w-full sm:w-[320px] md:w-90 lg:w-100">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full border border-[#dfd9d2] bg-transparent py-3 pl-4 pr-12 text-[15px] text-brand-navy placeholder:text-[#a59e95] focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors h-12.5 font-medium"
            />
            <button 
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a59e95] hover:text-brand-navy transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRightIcon className="w-5.5 h-5.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Right Side: Social Media */}
        <div className="flex items-center gap-5">
          <span className="text-brand-navy font-semibold text-base md:text-[17px] whitespace-nowrap">
            Follow us
          </span>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9.5 h-9.5 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">
              <FaFacebookF className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="w-9.5 h-9.5 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">
              <FaTwitter className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="w-9.5 h-9.5 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">
              <FaLinkedinIn className="w-4.5 h-4.5" />
            </a>
            <a href="#" className="w-9.5 h-9.5 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-opacity-90 transition-colors duration-200">
              <FaInstagram className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SubscribeSection;
