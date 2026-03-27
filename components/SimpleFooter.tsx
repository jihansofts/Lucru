import React from 'react';
import Link from 'next/link';

const SimpleFooter = () => {
  return (
    <div className="w-full bg-white py-10 border-t border-gray-100 flex lg:hidden justify-center items-center text-center px-4">
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3 text-[13px] text-[#A5A5A5] font-medium">
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Contact Us</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Whistleblowing</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Terms & Conditions</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Privacy Policy</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:text-[#006A80] transition-colors whitespace-nowrap">Quality Policy</Link>
      </div>
    </div>
  );
};

export default SimpleFooter;
