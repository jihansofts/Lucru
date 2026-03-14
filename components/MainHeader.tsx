import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, XMarkIcon, PhoneIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CgMenuGridR } from 'react-icons/cg';
import logo from '@/public/logo.png';

interface DropdownItem {
    label: string;
    href: string;
}

function HeaderDropdown({ label, items, href }: { label: string; items: DropdownItem[]; href?: string }) {
    return (
        <div className="relative group flex items-center h-full cursor-pointer">
            <Link href={href || '#'} className="inline-flex items-center justify-center gap-x-1 text-sm font-bold tracking-tight text-white group-hover:text-gray-200 h-full py-4">
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
                className={`w-full flex items-center justify-between px-6 py-4 text-sm font-bold transition-colors ${isOpen ? 'bg-brand-primary text-white' : 'text-white border-b border-brand-dark-border'
                    }`}
            >
                {label}
                <ChevronDownIcon className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-white' : ''}`} />
            </button>
            {isOpen && (
                <div className="flex flex-col bg-brand-dark">
                    {items.map(item => (
                        <Link key={item.label} href={item.href} onClick={onClose} className="flex items-center gap-3 px-8 py-4 border-b border-brand-dark-border group">
                            <ChevronRightIcon className="h-4 w-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
                            <span className="text-brand-primary text-xs font-bold">{item.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function MainHeader() {
    const SHOW_FULL_NAV = false;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(true);

    useEffect(() => {
        const TOP_HEADER_HEIGHT = 52;

        const updateHeaderOffset = () => {
            if (window.innerWidth < 768) {
                setIsTopHeaderVisible(false);
                return;
            }

            setIsTopHeaderVisible(window.scrollY < TOP_HEADER_HEIGHT);
        };

        updateHeaderOffset();
        window.addEventListener('scroll', updateHeaderOffset, { passive: true });
        window.addEventListener('resize', updateHeaderOffset);

        return () => {
            window.removeEventListener('scroll', updateHeaderOffset);
            window.removeEventListener('resize', updateHeaderOffset);
        };
    }, []);

    return (
        <header className={`fixed inset-x-0 z-40 flex h-16 md:h-18 items-center justify-between px-4 md:px-10 text-white bg-linear-to-b from-brand-dark/80 to-brand-dark/0 transition-all duration-300 ${isTopHeaderVisible ? 'top-0 md:top-13' : 'top-0'}`}>
            {/* Logo */}
            <div className="shrink-0 pt-2 z-50">
                <Link href="/" className="flex items-center" aria-label="Lucru home">
                    <Image
                        src={logo}
                        alt="Lucru"
                        priority
                        className="h-10 md:h-16 w-auto"
                    />
                </Link>
            </div>

            {/* Mobile Menu Button - Shown only on Mobile */}
            <div className="md:hidden flex items-center gap-4 pt-2 z-50">
                <button className="text-white hover:text-gray-200" aria-label="Call us">
                    <PhoneIcon className="h-6 w-6 stroke-1.5" />
                </button>
                <button className="text-white hover:text-gray-200" aria-label="Location">
                    <MapPinIcon className="h-6 w-6 stroke-1.5" />
                </button>
                <button className="text-white hover:text-gray-200" aria-label="Search">
                    <MagnifyingGlassIcon className="h-6 w-6 stroke-1.5" />
                </button>
                <div className="h-6 w-px bg-white/40"></div>
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="text-white hover:text-gray-200 focus:outline-none"
                    aria-label="Open menu"
                >
                    <CgMenuGridR className="h-7 w-7" />
                </button>
            </div>

            {/* Desktop Navigation & Icons Container (Right Aligned) */}
            <div className="hidden md:flex items-center space-x-6 h-full">
                {/* Main Navigation (Desktop) */}
                <nav className="flex items-center space-x-8">
                    <Link href="/find-jobs" className="font-bold text-sm tracking-tight text-white hover:text-gray-200">
                        Find Jobs
                    </Link>
                    {SHOW_FULL_NAV && (
                        <>
                            <HeaderDropdown label="Hire Talent" href="/hire-talent" items={[
                                { label: 'Submit Staffing Request', href: '/hire-talent/submit-staffing-request' },
                                { label: 'Permanent Placement', href: '/hire-talent/permanent-placement' },
                                { label: 'Contract Staffing', href: '/hire-talent/contract-staffing' }
                            ]} />
                            <HeaderDropdown label="Our Services" href="/our-services" items={[
                                { label: 'Manpower Provision', href: '/our-services/manpower-provision' },
                                { label: 'Executive Search', href: '/our-services/executive-search' },
                                { label: 'Visa & Immigration Assistance', href: '/our-services/visa-immigration' },
                                { label: 'Pre-Departure Training', href: '/our-services/pre-departure-training' },
                                { label: 'Payroll & Compliance', href: '/our-services/payroll-compliance' }
                            ]} />
                            <Link href="/about-us" className="font-bold text-sm tracking-tight text-white hover:text-gray-200">
                                About Us
                            </Link>
                        </>
                    )}
                </nav>

                {/* Desktop Icons */}
                <div className="flex items-center gap-6 pl-6 border-l border-white/40">
                    <button className="text-white hover:text-gray-200 flex items-center justify-center">
                        <MapPinIcon className="h-6 w-6 stroke-2" />
                    </button>
                    <button className="text-white hover:text-gray-200 flex items-center justify-center">
                        <MagnifyingGlassIcon className="h-6 w-6 stroke-2" />
                    </button>
                </div>
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
                <div className="md:hidden fixed inset-0 z-50 bg-brand-dark overflow-y-auto w-full min-h-screen">
                    {/* Header inside drawer */}
                    <div className="flex items-center justify-between px-6 py-6 border-b border-brand-dark-border">
                        <Link href="/" aria-label="Lucru home" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src={logo}
                                alt="Lucru"
                                priority
                                className="h-10 w-auto"
                            />
                        </Link>
                        <div className="flex items-center gap-4">
                            <a href="tel:800LUCRU" className="text-white hover:text-brand-primary transition-colors">
                                <PhoneIcon className="h-6 w-6 stroke-1.5" />
                            </a>
                            <button className="text-white hover:text-brand-primary transition-colors">
                                <MapPinIcon className="h-6 w-6 stroke-1.5" />
                            </button>
                            <button className="text-white hover:text-brand-primary transition-colors">
                                <MagnifyingGlassIcon className="h-6 w-6 stroke-1.5" />
                            </button>
                            <div className="h-6 w-px bg-brand-dark-border/40"></div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white hover:text-gray-200 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <XMarkIcon className="h-8 w-8 stroke-1" />
                            </button>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col w-full pb-10">
                        <Link href="/find-jobs" className="px-6 py-4 text-[16px] font-bold text-white border-b border-brand-dark-border w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
                            Find Jobs
                        </Link>
                        {SHOW_FULL_NAV && (
                            <>
                                <MobileHeaderDropdown label="Hire Talent" onClose={() => setIsMobileMenuOpen(false)} items={[
                                    { label: 'Submit Staffing Request', href: '/hire-talent/submit-staffing-request' },
                                    { label: 'Permanent Placement', href: '/hire-talent/permanent-placement' },
                                    { label: 'Contract Staffing', href: '/hire-talent/contract-staffing' }
                                ]} />
                                <MobileHeaderDropdown
                                    label="Our Services"
                                    defaultOpen={true}
                                    onClose={() => setIsMobileMenuOpen(false)}
                                    items={[
                                        { label: 'Manpower Provision', href: '/our-services/manpower-provision' },
                                        { label: 'Executive Search', href: '/our-services/executive-search' },
                                        { label: 'Visa & Immigration Assistance', href: '/our-services/visa-immigration' },
                                        { label: 'Pre-Departure Training', href: '/our-services/pre-departure-training' },
                                        { label: 'Payroll & Compliance', href: '/our-services/payroll-compliance' }
                                    ]}
                                />
                                <Link href="/about-us" className="px-6 py-4 text-[16px] font-bold text-white border-b border-brand-dark-border w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
                                    About Us
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Transition>
        </header>
    );
}
