import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    AcademicCapIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    MegaphoneIcon,
} from '@heroicons/react/24/outline';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';

const curriculum = [
    {
        title: 'Cultural Adaptation',
        desc: 'Navigating local laws, religious customs, and day-to-day etiquette in the host country to prevent cultural shock and conflict.',
        icon: GlobeAltIcon,
    },
    {
        title: 'Occupational Safety',
        desc: 'Rigorous briefings on site safety protocols, emergency procedures, and PPE usage tailored to construction and industrial sites.',
        icon: ShieldCheckIcon,
    },
    {
        title: 'Workplace Ethics',
        desc: 'Understanding contractual rights, grievance handling, and the importance of professional discipline and punctuality.',
        icon: AcademicCapIcon,
    },
    {
        title: 'Basic Communication',
        desc: 'Essential communication skills and common terminology used in host nation worksites to bridge initial language gaps.',
        icon: MegaphoneIcon,
    }
];

export default function PreDepartureOrientation() {
    return (
        <>
            <Head>
                <title>Pre-Departure Orientation - Lucru Manpower</title>
                <meta name="description" content="Mandatory pre-departure training and orientation to ensure candidates are culturally and professionally prepared for overseas deployment." />
            </Head>

            <main className="min-h-screen bg-[#f7f5f2]">
                <ServicesHero
                    title="Pre-Departure"
                    titleAccent="Orientation"
                    subtitle="Equipping your workforce with the cultural and professional knowledge needed for a seamless transition."
                    image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                />

                <ServicesSubNav />

                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative h-[500px]" data-aos="fade-right">
                                <Image
                                    src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg"
                                    alt="Training Session"
                                    fill
                                    className="object-cover rounded-sm shadow-xl"
                                />
                            </div>
                            <div className="order-1 lg:order-2" data-aos="fade-left">
                                <h2 className="text-3xl md:text-5xl font-light text-brand-dark mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Preparation Prevents <span className="font-bold italic text-[#006A80]">Premature Returns</span>
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Moving across borders to work in an unfamiliar environment is daunting. Our mandatory Pre-Departure Orientation (PDO) is a vital step approved by the Bureau of Manpower.
                                </p>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    A well-informed worker is a productive worker. We mitigate the risks of homesickness, cultural violations, and safety breaches by formally educating candidates on exactly what to expect from their new life and employing company.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="text-center mb-16">
                            <h3 className="text-2xl md:text-4xl font-light text-brand-dark mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Our Training Curriculum
                            </h3>
                            <div className="w-16 h-1 bg-[#006A80] mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            {curriculum.map((item, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-6 border-l-2 border-gray-100 pl-6 hover:border-[#006A80] transition-colors" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="bg-[#f7f5f2] w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-[#006A80]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
