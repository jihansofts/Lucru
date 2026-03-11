import React from 'react';
import Link from 'next/link';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';

function HoverDropdown({ label, items }: { label: string; items: string[] }) {
    return (
        <div className="relative group flex items-center h-full cursor-pointer">
            <div className="inline-flex items-center justify-center gap-x-1 text-xs font-semibold bg-[#002538] text-[#E3D6BF] transition-colors h-full px-1">
                {label}
                <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
            </div>
            
            {/* Top active border indicator (shown on hover) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5ec4d6] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Invisible bridge to prevent hover loss when moving mouse down */}
            <div className="absolute top-full left-0 w-full h-2" />
            
            <div className="absolute top-full left-0 z-50 w-48 bg-[#f4f4f4] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 flex flex-col">
                    {items.map((item, index) => (
                        <div key={item} className="px-6 relative">
                            <a
                                href="#"
                                className="block py-4 text-[13px] font-semibold text-[#002538] hover:text-[#5ec4d6] transition-colors"
                            >
                                {item}
                            </a>
                            {/* Separator line between items, hiding it on the last item */}
                            {index < items.length - 1 && (
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-gray-300" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function TopHeader() {
    return (
        <div className="w-full items-center justify-between text-xs font-semibold h-13 sticky top-0 z-50 hidden md:flex bg-[#002538] text-[#E3D6BF]">
            <div className='flex w-full h-full container mx-auto'>
                {/* Left empty space or logo placeholder, based on screenshot it's empty on the left */}
                <div className="flex-1"></div>

                {/* Navigation Links */}
                <nav className="flex items-center space-x-6 px-6 h-full">
                    <HoverDropdown label="E-Services" items={['Service 1', 'Service 2']} />
                    <HoverDropdown label="Media Centre" items={['News', 'Press Releases']} />
                    <Link href="#" className="relative group flex items-center h-full cursor-pointer">
                        <div className="inline-flex items-center justify-center gap-x-1 text-xs font-semibold bg-[#002538] text-[#E3D6BF] transition-colors h-full px-1">
                            Dubai Holding Communities
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5ec4d6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Link href="#" className="relative group flex items-center h-full cursor-pointer">
                        <div className="inline-flex items-center justify-center gap-x-1 text-xs font-semibold bg-[#002538] text-[#E3D6BF] transition-colors h-full px-1">
                            Land Enquiry
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5ec4d6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Link href="#" className="relative group flex items-center h-full cursor-pointer">
                        <div className="inline-flex items-center justify-center gap-x-1 text-xs font-semibold bg-[#002538] text-[#E3D6BF] transition-colors h-full px-1">
                            Contact Us
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5ec4d6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                </nav>

                {/* Phone Number Section */}
                <div className="flex h-full items-center px-6 shrink-0 gap-2" style={{ backgroundColor: '#e2dbc8', color: '#002538' }}>
                    <PhoneIcon className="h-5 w-5" />
                    <span className="font-semibold text-base whitespace-nowrap">800 LUCRU</span>
                </div>
            </div>
        </div>
    );
}
