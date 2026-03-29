import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    MagnifyingGlassIcon,
    IdentificationIcon,
    BriefcaseIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';

const features = [
    {
        icon: MagnifyingGlassIcon,
        title: 'Executive Search',
        desc: 'Identifying senior engineers, project managers, and healthcare administrators.',
    },
    {
        icon: IdentificationIcon,
        title: 'Thorough Vetting',
        desc: 'In-depth background checks, credential verification, and previous employment validation.',
    },
    {
        icon: BriefcaseIcon,
        title: 'Niche Requirements',
        desc: 'Sourcing talent with highly specific technical skills (e.g., specialized welding, IT infrastructure).',
    },
    {
        icon: CheckBadgeIcon,
        title: 'Interview Facilitation',
        desc: 'Hosting secure video conferencing or arranging physical spaces for client delegates.',
    },
];

export default function SpecializedHeadhunting() {
    return (
        <>
            <Head>
                <title>Specialized Headhunting - Lucru Manpower</title>
                <meta name="description" content="Executive search and specialized headhunting services for senior and niche roles." />
            </Head>

            <main className="min-h-screen bg-[#f7f5f2]">
                <ServicesHero
                    title="Specialized"
                    titleAccent="Headhunting"
                    subtitle="Finding the needle in the haystack. Precision recruitment for leadership and highly technical roles."
                    image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                />

                <ServicesSubNav />

                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div data-aos="fade-right">
                                <h2 className="text-3xl md:text-5xl font-light text-brand-dark mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Targeted Search for <span className="font-bold italic text-[#006A80]">Strategic Hires</span>
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    While bulk recruitment relies on volume, headhunting requires surgical precision. Our dedicated headhunting division is strictly focused on identifying and securing top-tier talent who are often not actively looking for jobs.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    From civil engineering directors to specialized medical specialists, we discretely manage the outreach, negotiation, and transition process, ensuring mutual fit and long-term retention.
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center bg-[#006A80] hover:bg-brand-dark text-white px-8 py-4 font-bold tracking-widest uppercase transition-all"
                                >
                                    Speak to a Consultant
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="bg-white p-6 border-t-4 border-[#006A80] shadow-sm hover:shadow-lg transition-all">
                                        <feature.icon className="w-8 h-8 text-[#006A80] mb-4" />
                                        <h4 className="text-lg font-bold text-brand-dark mb-2">{feature.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
