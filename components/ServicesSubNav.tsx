import Link from 'next/link';

export default function ServicesSubNav() {
    return (
        <section className="bg-[#005a6e] py-6 md:py-8 border-b-4 border-[#006A80] sticky top-0 md:static z-20 shadow-md">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <nav className="flex flex-col md:flex-row md:items-center">
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest mr-8 mb-4 md:mb-0 hidden md:block">
                        Area<br />Of Ops
                    </span>

                    <ul className="flex overflow-x-auto pb-2 md:pb-0 gap-8 md:gap-10 text-white text-sm font-semibold tracking-wide whitespace-nowrap scrollbar-hide">
                        <li>
                            <Link href="/our-services" className="hover:text-[#b4e7ed] hover:-translate-y-1 transition-all flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#006A80]"></div>
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-services/overseas-recruitment" className="hover:text-[#b4e7ed] hover:-translate-y-1 transition-all">
                                Recruitment
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-services/specialized-headhunting" className="hover:text-[#b4e7ed] hover:-translate-y-1 transition-all">
                                Headhunting
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-services/visa-processing" className="hover:text-[#b4e7ed] hover:-translate-y-1 transition-all">
                                Visas & Emigration
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-services/pre-departure-orientation" className="hover:text-[#b4e7ed] hover:-translate-y-1 transition-all">
                                Pre-Departure
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-services/document-attestation" className="hover:text-[#b4e7ed] hover:-translate-y-1 transition-all">
                                Attestation
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
