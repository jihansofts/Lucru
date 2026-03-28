import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import StaffingCTA from '@/components/StaffingCTA';
import MobileAppSection from '@/components/MobileAppSection';
import SubscribeSection from '@/components/SubscribeSection';
import {
    EyeIcon,
    LockClosedIcon,
    UserGroupIcon,
    ChartBarIcon,
    BriefcaseIcon,
    StarIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

const benefits = [
    { icon: EyeIcon, title: 'Confidential Search', desc: 'Discreet, targeted approach protecting your organisation\'s privacy throughout the search' },
    { icon: LockClosedIcon, title: 'Exclusive Access', desc: 'Reach passive candidates not available through traditional job boards or advertising' },
    { icon: UserGroupIcon, title: 'Cultural Fit', desc: 'Deep assessment of leadership style, personality, and organisational alignment' },
    { icon: ChartBarIcon, title: 'Market Intelligence', desc: 'Compensation benchmarking, competitor mapping, and talent landscape analysis' },
    { icon: BriefcaseIcon, title: 'Succession Planning', desc: 'Strategic workforce planning for long-term leadership pipeline development' },
    { icon: StarIcon, title: 'Guaranteed Results', desc: '12-month placement guarantee with complimentary replacement if needed' },
];

const approachSteps = [
    {
        step: '01',
        title: 'Strategic Briefing',
        desc: 'We immerse ourselves in your organisation — understanding your strategy, culture, team dynamics, and the leadership qualities that will drive success in the role.',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    },
    {
        step: '02',
        title: 'Market Mapping',
        desc: 'Our researchers map the talent landscape, identifying potential candidates across industries and geographies. We leverage our network of 50,000+ professionals and industry contacts.',
        image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    },
    {
        step: '03',
        title: 'Candidate Engagement',
        desc: 'We confidentially approach shortlisted candidates, presenting your opportunity with compelling employer branding. Rigorous multi-stage assessments evaluate technical expertise and leadership potential.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    },
    {
        step: '04',
        title: 'Placement & Integration',
        desc: 'We manage the entire offer process — compensation negotiation, contract review, and onboarding support. Post-placement check-ins ensure a smooth integration for the first 12 months.',
        image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    },
];

const metrics = [
    { value: '95%', label: 'Offer Acceptance Rate' },
    { value: '92%', label: '2-Year Retention Rate' },
    { value: '4 Weeks', label: 'Average Time to Shortlist' },
    { value: '500+', label: 'Executive Placements' },
];

const relatedServices = [
    { title: 'Manpower Provision', href: '/our-services/manpower-provision', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' },
    { title: 'Payroll & Compliance', href: '/our-services/payroll-compliance', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg' },
    { title: 'Pre-Departure Training', href: '/our-services/pre-departure-training', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
];

export default function ExecutiveSearch() {
    return (
        <>
            <Head>
                <title>Executive Search - Lucru</title>
                <meta name="description" content="Lucru's executive search service delivers top-tier leadership talent through confidential, targeted headhunting with a 12-month placement guarantee." />
            </Head>
            <main className="min-h-screen bg-white">
                <ServicesHero
                    title="Executive"
                    titleAccent="Search"
                    subtitle="Identifying transformational leaders who drive organisational success."
                    image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Our Services', href: '/our-services' },
                        { label: 'Executive Search' },
                    ]}
                />
                <ServicesSubNav />

                {/* Overview + Benefits */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                            <div className="lg:w-5/12" data-aos="fade-up">
                                <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Find Your Next <span className="italic font-bold">Leader</span>
                                </h2>
                                <h3 className="text-lg text-[#006A80] font-semibold mb-6">Confidential. Targeted. Guaranteed.</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                                    When the stakes are highest, you need a recruitment partner who understands that hiring the right leader can transform an entire organisation. Our executive search division specialises in C-suite, VP, and Director-level placements across all sectors.
                                </p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                                    Through a research-driven methodology and deep industry networks, we identify, assess, and engage exceptional leaders who align with your vision, culture, and strategic objectives.
                                </p>
                                <Link href="/hire-talent/submit-staffing-request" className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">
                                    START A SEARCH
                                </Link>
                            </div>
                            <div className="lg:w-7/12">
                                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">WHY OUR APPROACH WORKS</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {benefits.map((item, i) => (
                                        <div key={i} className="border border-gray-200 rounded-sm p-6 flex flex-col items-center text-center hover:border-[#006A80] hover:shadow-md transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 80}>
                                            <item.icon className="w-10 h-10 text-[#006A80] mb-4 stroke-1 group-hover:scale-110 transition-transform duration-300" />
                                            <h5 className="text-brand-dark font-bold text-sm mb-2">{item.title}</h5>
                                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approach Steps - Alternating */}
                <section className="py-20 md:py-28 bg-[#f7f5f2]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Our <span className="italic font-bold">Approach</span>
                            </h2>
                        </div>
                        <div className="space-y-12">
                            {approachSteps.map((item, i) => (
                                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`} data-aos="fade-up">
                                    <div className="md:w-1/2 relative overflow-hidden">
                                        <Image src={item.image} alt={item.title} width={600} height={400} className="object-cover w-full h-70 md:h-80" />
                                        <div className="absolute top-4 left-4 bg-brand-dark text-white text-2xl font-bold px-4 py-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.step}</div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <h3 className="text-2xl md:text-3xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.title}</h3>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Metrics */}
                <section className="py-16 bg-brand-dark">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10" data-aos="fade-up">
                            {metrics.map((m, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl md:text-5xl font-light text-brand-primary mb-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{m.value}</div>
                                    <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Services */}
                <section className="py-20 md:py-28 bg-[#f7f5f2]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">EXPLORE MORE</p>
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Related <span className="italic font-bold">Services</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedServices.map((item, i) => (
                                <Link key={i} href={item.href} className="group block" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="relative w-full aspect-video overflow-hidden mb-4">
                                        <Image src={item.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-brand-dark font-bold text-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.title}</h4>
                                        <ArrowRightIcon className="w-5 h-5 text-[#006A80] stroke-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <div data-aos="fade-up"><StaffingCTA /></div>
                <div data-aos="fade-up"><MobileAppSection /></div>
                <div data-aos="fade-up"><SubscribeSection /></div>
            </main>
        </>
    );
}
