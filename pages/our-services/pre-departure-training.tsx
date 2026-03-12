import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import StaffingCTA from '@/components/StaffingCTA';
import MobileAppSection from '@/components/MobileAppSection';
import SubscribeSection from '@/components/SubscribeSection';
import {
    AcademicCapIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
    LanguageIcon,
    HeartIcon,
    WrenchScrewdriverIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

const modules = [
    { icon: GlobeAltIcon, title: 'Cultural Orientation', desc: 'Destination-specific cultural norms, workplace etiquette, and communication styles.' },
    { icon: ShieldCheckIcon, title: 'Workplace Safety (HSE)', desc: 'PPE usage, hazard identification, emergency procedures, and safety protocols.' },
    { icon: LanguageIcon, title: 'Language & Communication', desc: 'Basic English and Arabic language training for workplace communication.' },
    { icon: AcademicCapIcon, title: 'Rights & Responsibilities', desc: 'Labour law awareness, employment contracts, leave entitlements, and grievance mechanisms.' },
    { icon: HeartIcon, title: 'Health & Wellness', desc: 'Physical and mental health awareness, stress management, and accessing healthcare abroad.' },
    { icon: WrenchScrewdriverIcon, title: 'Technical Skills Refresh', desc: 'Role-specific technical refreshers and practical assessments for job-readiness.' },
];

const outcomes = [
    { value: '40%', label: 'Faster Onboarding' },
    { value: '65%', label: 'Fewer Workplace Incidents' },
    { value: '90%', label: 'Candidate Satisfaction' },
    { value: '3 Days', label: 'Standard Training Duration' },
];

const curriculum = [
    { day: 'Day 1', title: 'Orientation & Culture', topics: ['Welcome & programme overview', 'Destination country briefing', 'Cultural dos and don\'ts', 'Workplace etiquette', 'Communication essentials'] },
    { day: 'Day 2', title: 'Safety & Compliance', topics: ['HSE fundamentals', 'PPE training & drills', 'Emergency response protocols', 'Labour law & contracts', 'Rights and grievance channels'] },
    { day: 'Day 3', title: 'Skills & Readiness', topics: ['Technical skills assessment', 'Language workshop', 'Health & wellness session', 'Travel logistics briefing', 'Certificate issuance'] },
];

const relatedServices = [
    { title: 'Manpower Provision', href: '/our-services/manpower-provision', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' },
    { title: 'Visa & Immigration', href: '/our-services/visa-immigration', image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg' },
    { title: 'Executive Search', href: '/our-services/executive-search', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' },
];

export default function PreDepartureTraining() {
    return (
        <>
            <Head>
                <title>Pre-Departure Training - Lucru</title>
                <meta name="description" content="Comprehensive pre-departure training ensuring candidates are culturally prepared, safety-certified, and job-ready." />
            </Head>
            <main className="min-h-screen bg-white">
                <ServicesHero
                    title="Pre-Departure"
                    titleAccent="Training"
                    subtitle="Ensuring every candidate arrives prepared, confident, and ready to perform."
                    image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Our Services', href: '/our-services' },
                        { label: 'Pre-Departure Training' },
                    ]}
                />
                <ServicesSubNav />

                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                            <div className="lg:w-5/12" data-aos="fade-up">
                                <h2 className="text-4xl md:text-5xl text-[#002538] font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>Prepared From <span className="italic font-bold">Day One</span></h2>
                                <h3 className="text-lg text-[#006A80] font-semibold mb-6">Train. Certify. Deploy.</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">Our pre-departure training programme equips workers with cultural awareness, safety knowledge, and practical skills they need to succeed abroad. Conducted at certified training centres and tailored to destination, industry, and role.</p>
                                <Link href="/hire-talent/submit-staffing-request" className="inline-block border border-[#002538] text-[#002538] px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#002538] hover:text-white transition-colors">LEARN MORE</Link>
                            </div>
                            <div className="lg:w-7/12">
                                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">TRAINING MODULES</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {modules.map((item, i) => (
                                        <div key={i} className="border border-gray-200 rounded-sm p-6 flex flex-col items-center text-center hover:border-[#006A80] hover:shadow-md transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 80}>
                                            <item.icon className="w-10 h-10 text-[#006A80] mb-4 stroke-1 group-hover:scale-110 transition-transform duration-300" />
                                            <h5 className="text-[#002538] font-bold text-sm mb-2">{item.title}</h5>
                                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-[#002538]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10" data-aos="fade-up">
                            {outcomes.map((m, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl md:text-5xl font-light text-[#5ec4d6] mb-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{m.value}</div>
                                    <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Full-Width Image Showcase */}
                <section className="relative w-full h-80 md:h-112 overflow-hidden" data-aos="fade-up">
                    <Image
                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                        alt="Training session"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#002538]/90 via-[#002538]/50 to-transparent" />
                    <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="max-w-lg">
                            <h3 className="text-3xl md:text-4xl text-white font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Building <span className="italic font-bold">Confidence</span>
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Our training centres are equipped with industry-standard facilities, simulation environments, and experienced trainers who prepare candidates for real-world challenges abroad.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-28 bg-[#f7f5f2]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-[#002538] font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>Sample <span className="italic font-bold">Curriculum</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {curriculum.map((day, i) => (
                                <div key={i} className="bg-white border border-gray-200 hover:border-[#006A80] hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="bg-[#002538] px-6 py-4">
                                        <span className="text-[#5ec4d6] text-xs font-bold tracking-widest uppercase">{day.day}</span>
                                        <h4 className="text-white font-bold text-lg mt-1">{day.title}</h4>
                                    </div>
                                    <ul className="p-6 space-y-3">
                                        {day.topics.map((topic, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#006A80] mt-1.5 shrink-0" />
                                                <span className="text-gray-600 text-sm">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Services */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <p className="text-xs font-bold tracking-[0.25em] text-[#5ec4d6] uppercase mb-4">EXPLORE MORE</p>
                            <h2 className="text-4xl md:text-5xl text-[#002538] font-light" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Related <span className="italic font-bold">Services</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedServices.map((item, i) => (
                                <Link key={i} href={item.href} className="group block" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="relative w-full aspect-video overflow-hidden mb-4">
                                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[#002538] font-bold text-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.title}</h4>
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
