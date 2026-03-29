import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const subNavItems = [
    { label: 'Overview', href: '/hire-manpower' },
    { label: 'Direct Recruitment', href: '/hire-manpower/direct-recruitment' },
    { label: 'Bulk Deployments', href: '/hire-manpower/bulk-deployments' },
];

export default function HireTalentSubNav() {
    const router = useRouter();

    return (
        <nav className="w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
                <div className="flex items-center overflow-x-auto scrollbar-hide -mb-px">
                    {subNavItems.map((item) => {
                        const isActive = router.pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`whitespace-nowrap px-5 py-4 text-sm font-bold tracking-tight transition-colors border-b-2 ${
                                    isActive
                                        ? 'text-[#006A80] border-[#006A80]'
                                        : 'text-gray-500 border-transparent hover:text-brand-dark hover:border-gray-300'
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
