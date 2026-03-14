import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import StaffingCTA from '@/components/StaffingCTA';
import MobileAppSection from '@/components/MobileAppSection';
import SubscribeSection from '@/components/SubscribeSection';
import {
    DocumentTextIcon,
    IdentificationIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
    ClockIcon,
    CheckCircleIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

const services = [
    { icon: DocumentTextIcon, title: 'Work Permits', desc: 'Processing and renewal of work permits for all GCC and European destinations' },
    { icon: IdentificationIcon, title: 'Employment Visas', desc: 'End-to-end employment visa processing including sponsorship transfers' },
    { icon: GlobeAltIcon, title: 'Immigration Advisory', desc: 'Country-specific immigration guidance and regulatory compliance consulting' },
    { icon: ShieldCheckIcon, title: 'Document Attestation', desc: 'Certificate attestation, legalisation, and embassy authentication services' },
    { icon: ClockIcon, title: 'Status Tracking', desc: 'Real-time application tracking with regular progress updates to employers' },
    { icon: CheckCircleIcon, title: 'Renewal Management', desc: 'Proactive visa renewal tracking to prevent lapses and ensure continuous compliance' },
];

const countries = [
    { name: 'United Arab Emirates', flag: '🇦🇪', processingTime: '2-3 weeks', docs: 'Passport, Education Certificates, Medical, Emirates ID' },
    { name: 'Saudi Arabia', flag: '🇸🇦', processingTime: '3-4 weeks', docs: 'Passport, MOFA Attestation, Medical, PCC' },
    { name: 'Qatar', flag: '🇶🇦', processingTime: '2-3 weeks', docs: 'Passport, Degree Attestation, Medical, QID' },
    { name: 'Kuwait', flag: '🇰🇼', processingTime: '3-5 weeks', docs: 'Passport, Education Certificates, Medical, PCC' },
    { name: 'Oman', flag: '🇴🇲', processingTime: '2-4 weeks', docs: 'Passport, Degree Attestation, Medical Certificate' },
    { name: 'Bahrain', flag: '🇧🇭', processingTime: '1-2 weeks', docs: 'Passport, Education Certificates, Medical, LMRA' },
    { name: 'United Kingdom', flag: '🇬🇧', processingTime: '4-8 weeks', docs: 'Passport, CoS, English Test, TB Certificate, Finances' },
    { name: 'Germany', flag: '🇩🇪', processingTime: '6-12 weeks', docs: 'Passport, Qualification Recognition, Language Certificate' },
];

const processSteps = [
    { num: '01', title: 'Document Collection', desc: 'We compile all required documents from the employer and candidate, verifying completeness and authenticity.' },
    { num: '02', title: 'Application Preparation', desc: 'Our immigration team prepares applications following destination-specific requirements, minimising rejection risk.' },
    { num: '03', title: 'Submission & Tracking', desc: 'Applications are submitted through official channels. We track progress daily and resolve any queries from authorities.' },
    { num: '04', title: 'Approval & Deployment', desc: 'Upon approval, we coordinate medical testing, ticketing, and pre-departure briefing for seamless mobilisation.' },
];

const relatedServices = [
    { title: 'Manpower Provision', href: '/our-services/manpower-provision', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' },
    { title: 'Pre-Departure Training', href: '/our-services/pre-departure-training', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
    { title: 'Payroll & Compliance', href: '/our-services/payroll-compliance', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg' },
];

export default function VisaImmigration() {
    return (
        <>
            <Head>
                <title>Visa & Immigration Assistance - Lucru</title>
                <meta name="description" content="End-to-end visa processing and immigration compliance services for employers deploying international workers." />
            </Head>
            <main className="min-h-screen bg-white">
                <ServicesHero
                    title="Visa &"
                    titleAccent="Immigration"
                    subtitle="Seamless visa processing and immigration compliance across all major destinations."
                    image="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Our Services', href: '/our-services' },
                        { label: 'Visa & Immigration' },
                    ]}
                />
                <ServicesSubNav />

                {/* Overview + Services Grid */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                            <div className="lg:w-5/12" data-aos="fade-up">
                                <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Hassle-Free <span className="italic font-bold">Immigration</span>
                                </h2>
                                <h3 className="text-lg text-[#006A80] font-semibold mb-6">Compliant. Efficient. Transparent.</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                                    Navigating immigration regulations across multiple countries is complex and time-sensitive. Lucru&apos;s dedicated immigration team handles the entire process — from initial document collection to final visa stamping — ensuring full compliance with local labour laws and immigration regulations.
                                </p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                                    With expertise across GCC, European, and Asian immigration frameworks, we minimise processing times and eliminate costly errors.
                                </p>
                                <Link href="/hire-talent/submit-staffing-request" className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">
                                    GET STARTED
                                </Link>
                            </div>
                            <div className="lg:w-7/12">
                                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">OUR SERVICES</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {services.map((item, i) => (
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

                {/* Full-Width Image Showcase */}
                <section className="relative w-full h-80 md:h-112 overflow-hidden" data-aos="fade-up">
                    <Image
                        src="https://images.pexels.com/photos/7567556/pexels-photo-7567556.jpeg"
                        alt="Immigration process"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-dark/90 via-brand-dark/50 to-transparent" />
                    <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="max-w-lg">
                            <h3 className="text-3xl md:text-4xl text-white font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Global <span className="italic font-bold">Reach</span>
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Processing visas and work permits across 30+ countries with a 97% first-time approval rate. Our immigration specialists stay ahead of regulatory changes so you don&apos;t have to.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Countries Table */}
                <section className="py-20 md:py-28 bg-[#f7f5f2]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Countries <span className="italic font-bold">We Cover</span>
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base max-w-2xl">Processing times are approximate and subject to embassy/authority schedules.</p>
                        </div>
                        <div className="overflow-x-auto" data-aos="fade-up">
                            <table className="w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-brand-dark text-white">
                                        <th className="text-left px-6 py-4 text-xs font-bold tracking-wider uppercase">Country</th>
                                        <th className="text-left px-6 py-4 text-xs font-bold tracking-wider uppercase">Processing Time</th>
                                        <th className="text-left px-6 py-4 text-xs font-bold tracking-wider uppercase hidden md:table-cell">Key Documents</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countries.map((c, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="text-2xl mr-3">{c.flag}</span>
                                                <span className="text-brand-dark font-semibold text-sm">{c.name}</span>
                                            </td>
                                            <td className="px-6 py-4 text-[#006A80] font-bold text-sm">{c.processingTime}</td>
                                            <td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{c.docs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                How It <span className="italic font-bold">Works</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {processSteps.map((item, i) => (
                                <div key={i} className="relative bg-[#f7f5f2] p-8 border border-gray-200 hover:border-[#006A80] hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="text-5xl font-bold text-gray-200 group-hover:text-[#006A80]/20 transition-colors mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.num}</div>
                                    <h4 className="text-brand-dark font-bold text-base mb-3">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
                                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
