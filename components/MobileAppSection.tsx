import Image from 'next/image';
import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';

const MobileAppSection = () => {
  return (
    <section className="relative w-full bg-[#f4efe8] bg-[url('/mobile-app-new.png')] bg-size-[1000px] bg-position-[right_-270px_bottom_0px] md:bg-contain md:bg-bottom-right bg-no-repeat overflow-hidden pt-12 pb-9 md:py-8 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-10 lg:pr-20 z-20 flex flex-col items-start md:items-start text-left md:text-left">
          <h2 className="text-[44px] leading-tight md:text-5xl lg:text-6xl text-brand-navy font-serif mb-4 md:mb-4">
            <span className="italic">Lucru</span> Jobs App
          </h2>

          <p className="hidden md:block text-brand-navy text-sm md:text-base lg:text-lg mb-4 md:mb-6 font-medium leading-relaxed">
            Designed for ease and elegance, the Lucru Jobs App puts international career opportunities at your fingertips, anytime, anywhere. From discovering new openings to direct employer interactions, it&apos;s your passport to global success.
          </p>

          <ul className="md:block hidden mb-5 md:mb-6 space-y-2 text-left">
            {[
              "Browse daily updated job listings",
              "Apply with a single tap",
              "Track your application status",
              "Schedule interviews with employers"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-brand-navy font-medium text-xs sm:text-sm md:text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-navy mr-2 md:mr-3 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-4 md:mb-4">
            <h3 className="text-[#006A80] md:text-brand-navy font-semibold text-xl md:text-lg">Download Lucru Jobs App</h3>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-3 w-50 sm:w-auto">
            {/* App Store Button */}
            <a href="#" className="flex items-center gap-3 bg-white border border-gray-300 rounded-xl px-3 py-2 hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto overflow-hidden">
              <FaApple className="text-4xl md:text-3xl text-black shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] md:text-[10px] text-gray-500 leading-none mb-1 md:mb-1">Download on the</span>
                <span className="text-lg md:text-sm font-semibold text-black leading-none">App Store</span>
              </div>
            </a>

            {/* Google Play Button */}
            <a href="#" className="flex items-center gap-3 bg-white border border-gray-300 rounded-xl px-3 py-2 hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto overflow-hidden">
              <FaGooglePlay className="text-[28px] md:text-2xl text-black shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] md:text-[10px] text-gray-500 leading-none mb-1 md:mb-1">GET IT ON</span>
                <span className="text-lg md:text-sm font-semibold text-black leading-none">Google Play</span>
              </div>
            </a>

            {/* AppGallery Button */}
            <a href="#" className="flex items-center gap-3 bg-white border border-gray-300 rounded-xl px-3 py-2 hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto overflow-hidden">
              <SiHuawei className="text-[32px] md:text-2xl text-[#cf0a2c] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] md:text-[10px] text-gray-500 leading-none mb-1 md:mb-1">EXPLORE IT ON</span>
                <span className="text-lg md:text-sm font-semibold text-black leading-none">AppGallery</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Content / Image Area */}
        <div className="hidden md:flex w-full md:w-1/2 relative justify-end items-center md:min-h-75 lg:min-h-87">
          <div className="relative w-full flex items-center justify-end">
            {/* The image is now set as the section background */}
          </div>

          {/* QR Code Block */}
          <div className="hidden lg:flex absolute right-0 xl:right-10 top-1/2 -translate-y-1/2 bg-white p-3 flex-col items-center shadow-lg border border-gray-100 z-30 w-35">
            <div className="bg-brand-navy text-white text-[10px] font-bold py-2 px-3 w-full text-center mb-3 tracking-wider">
              DOWNLOAD APP
            </div>
            <p className="text-[9px] text-[#00cbd6] font-semibold mb-2 text-center uppercase tracking-wider">
              SCAN THE QR CODE
            </p>
            <div className="w-25 h-25 relative">
              {/* Dummy QR code image */}
              <Image
                height={300}
                width={300}
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com"
                alt="Download App QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileAppSection;
