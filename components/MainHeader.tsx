import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CgMenuGridR } from 'react-icons/cg';
import logo from '@/public/logo.png';

interface DropdownItem {
    label: string;
    href: string;
}

function HeaderDropdown({ label, items, href }: { label: string; items: DropdownItem[]; href?: string }) {
    return (
        <div className="relative group flex items-center h-full cursor-pointer">
            <Link href={href || '#'} className="inline-flex items-center justify-center gap-x-1 text-sm font-bold tracking-tight text-[#5A4125] group-hover:text-brand-dark-border h-full py-4">
                {label}
                <ChevronDownIcon className="h-4 w-4 stroke-2 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
            </Link>

            {/* Invisible bridge to prevent hover loss */}
            <div className="absolute top-full left-0 w-full h-4" />

            {/* Dropdown Container */}
            <div className="absolute top-[calc(100%-8px)] left-0 z-50 w-72 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-6 flex flex-col">
                    {/* Header inside the dropdown */}
                    <h3 className="text-brand-secondary text-[18px] font-bold mb-6">{label}</h3>

                    {/* Items List with left border */}
                    <div className="flex flex-col border-l border-gray-200 ml-1">
                        {items.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="block py-2.5 pl-5 text-[14px] font-medium text-gray-600 hover:text-brand-secondary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileHeaderDropdown({ label, items, defaultOpen = false, onClose }: { label: string; items: DropdownItem[], defaultOpen?: boolean, onClose?: () => void }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-6 py-4 text-sm font-bold transition-colors ${isOpen ? 'bg-[#5A4125] text-[#F2EDE7]' : 'text-[#5A4125] border-b border-[#5A4125]/20 hover:bg-[#5A4125]/5'
                    }`}
            >
                {label}
                <ChevronDownIcon className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-[#F2EDE7]' : ''}`} />
            </button>
            {isOpen && (
                <div className="flex flex-col bg-[#F8F5F1]">
                    {items.map(item => (
                        <Link key={item.label} href={item.href} onClick={onClose} className="flex items-center gap-3 px-8 py-4 border-b border-[#5A4125]/15 group">
                            <ChevronRightIcon className="h-4 w-4 text-brand-dark-border group-hover:translate-x-1 transition-transform" />
                            <span className="text-[#5A4125] text-xs font-bold group-hover:text-brand-dark-border transition-colors">{item.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function MainHeader() {
    const SHOW_FULL_NAV = true;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-40 flex h-16 md:h-18 items-center justify-between px-4 md:px-10 text-[#5A4125] bg-[#F2EDE7] transition-all duration-300">
            {/* Logo */}
            <div className="shrink-0 pt-2 z-50">
                <Link href="/" className="flex items-center" aria-label="Lucru home">
                    <Image
                        src={logo}
                        alt="Lucru"
                        priority
                        className="h-10 md:h-12 w-auto"
                    />
                </Link>
            </div>

            {/* Mobile Menu Button - Shown only on Mobile */}
            <div className="md:hidden flex items-center pt-2 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="text-[#5A4125] hover:text-brand-dark-border focus:outline-none"
                    aria-label="Open menu"
                >
                    <CgMenuGridR className="h-7 w-7" />
                </button>
            </div>

            {/* Desktop Navigation & Icons Container (Right Aligned) */}
            <div className="hidden md:flex items-center space-x-6 h-full">
                {/* Main Navigation (Desktop) */}
                <nav className="flex items-center space-x-6">
                    <Link href="/vacancies" className="font-bold text-sm tracking-tight text-[#5A4125] hover:text-brand-dark-border">
                        Vacancies
                    </Link>
                    {SHOW_FULL_NAV && (
                        <>
                            <HeaderDropdown label="Hire Manpower" href="/hire-manpower" items={[
                                { label: 'Submit Manpower Request', href: '/hire-manpower/submit-manpower-request' },
                                { label: 'Direct Recruitment', href: '/hire-manpower/direct-recruitment' },
                                { label: 'Bulk Deployments', href: '/hire-manpower/bulk-deployments' }
                            ]} />
                            <HeaderDropdown label="Our Services" href="/our-services" items={[
                                { label: 'Overseas Recruitment', href: '/our-services/overseas-recruitment' },
                                { label: 'Specialized Headhunting', href: '/our-services/specialized-headhunting' },
                                { label: 'Visa Processing', href: '/our-services/visa-processing' },
                                { label: 'Pre-Departure Orientation', href: '/our-services/pre-departure-orientation' },
                                { label: 'Document Attestation', href: '/our-services/document-attestation' }
                            ]} />
                        </>
                    )}
                    <Link href="#" className="font-bold text-sm tracking-tight text-[#5A4125] hover:text-brand-dark-border">
                        Internal Careers
                    </Link>
                    <Link href="#" className="font-bold text-sm tracking-tight text-[#5A4125] hover:text-brand-dark-border">
                        Success Stories
                    </Link>
                    <Link href="#" className="font-bold text-sm tracking-tight text-[#5A4125] hover:text-brand-dark-border">
                        Submit Inquiry
                    </Link>
                    <Link href="#" className="font-bold text-sm tracking-tight text-[#5A4125] hover:text-brand-dark-border">
                        Contact Us
                    </Link>
                    {SHOW_FULL_NAV && (
                        <>
                            <Link href="/about-us" className="font-bold text-sm tracking-tight text-[#5A4125] hover:text-brand-dark-border">
                                About Us
                            </Link>
                        </>
                    )}
                </nav>

            </div>

            {/* Mobile Full Screen Menu Drawer */}
            <Transition
                show={isMobileMenuOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="md:hidden fixed inset-0 z-50 bg-[#F2EDE7] overflow-y-auto w-full min-h-screen text-[#5A4125]">
                    {/* Header inside drawer */}
                    <div className="flex items-center justify-between px-6 py-6 border-b border-[#5A4125]/20">
                        <Link href="/" aria-label="Lucru home" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src={logo}
                                alt="Lucru"
                                priority
                                className="h-10 w-auto"
                            />
                        </Link>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[#5A4125] hover:text-brand-dark-border focus:outline-none"
                                aria-label="Close menu"
                            >
                                <XMarkIcon className="h-8 w-8 stroke-1" />
                            </button>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col w-full pb-10">
                        <Link href="/vacancies" className="px-6 py-4 text-[16px] font-bold text-[#5A4125] border-b border-[#5A4125]/20 w-full text-left hover:bg-[#5A4125]/5 hover:text-brand-dark-border transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Vacancies
                        </Link>
                        {SHOW_FULL_NAV && (
                            <>
                                <MobileHeaderDropdown label="Hire Manpower" onClose={() => setIsMobileMenuOpen(false)} items={[
                                    { label: 'Submit Manpower Request', href: '/hire-manpower/submit-manpower-request' },
                                    { label: 'Direct Recruitment', href: '/hire-manpower/direct-recruitment' },
                                    { label: 'Bulk Deployments', href: '/hire-manpower/bulk-deployments' }
                                ]} />
                                <MobileHeaderDropdown
                                    label="Our Services"
                                    defaultOpen={true}
                                    onClose={() => setIsMobileMenuOpen(false)}
                                    items={[
                                        { label: 'Overseas Recruitment', href: '/our-services/overseas-recruitment' },
                                        { label: 'Specialized Headhunting', href: '/our-services/specialized-headhunting' },
                                        { label: 'Visa Processing', href: '/our-services/visa-processing' },
                                        { label: 'Pre-Departure Orientation', href: '/our-services/pre-departure-orientation' },
                                        { label: 'Document Attestation', href: '/our-services/document-attestation' }
                                    ]}
                                />
                            </>
                        )}
                        <Link href="#" className="px-6 py-4 text-[16px] font-bold text-[#5A4125] border-b border-[#5A4125]/20 w-full text-left hover:bg-[#5A4125]/5 hover:text-brand-dark-border transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Internal Careers
                        </Link>
                        <Link href="#" className="px-6 py-4 text-[16px] font-bold text-[#5A4125] border-b border-[#5A4125]/20 w-full text-left hover:bg-[#5A4125]/5 hover:text-brand-dark-border transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Success Stories
                        </Link>
                        <Link href="#" className="px-6 py-4 text-[16px] font-bold text-[#5A4125] border-b border-[#5A4125]/20 w-full text-left hover:bg-[#5A4125]/5 hover:text-brand-dark-border transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Submit Inquiry
                        </Link>
                        <Link href="#" className="px-6 py-4 text-[16px] font-bold text-[#5A4125] border-b border-[#5A4125]/20 w-full text-left hover:bg-[#5A4125]/5 hover:text-brand-dark-border transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact Us
                        </Link>
                        {SHOW_FULL_NAV && (
                            <Link href="/about-us" className="px-6 py-4 text-[16px] font-bold text-[#5A4125] border-b border-[#5A4125]/20 w-full text-left hover:bg-[#5A4125]/5 hover:text-brand-dark-border transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                About Us
                            </Link>
                        )}
                    </div>
                </div>
            </Transition>
        </header>
    );
}
