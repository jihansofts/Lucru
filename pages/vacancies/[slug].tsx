import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ServicesHero from '@/components/ServicesHero';
import MobileAppSection from '@/components/MobileAppSection';
import { BriefcaseIcon, MapPinIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const jobsData = [
  {
    id: 1,
    title: "Registered Nurses",
    subtitle: "Saudi Arabia",
    description: "Top-tier hospitals in Riyadh are urgently seeking experienced registered nurses with multiple specialties. Unmatched benefits and tax-free salaries.",
    image: "https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg",
    link: "/vacancies/nurses-ksa",
    slug: "nurses-ksa",
    category: "Healthcare",
    salary: "Tax-Free + Allowances",
    type: "Full-Time"
  },
  {
    id: 2,
    title: "Civil Engineers",
    subtitle: "UAE",
    description: "Leading construction firms in Dubai and Abu Dhabi are hiring qualified site engineers, project managers, and QA/QC specialists for mega-projects.",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    link: "/vacancies/civil-uae",
    slug: "civil-uae",
    category: "Construction & Engineering",
    salary: "Competitive per Market Standard",
    type: "Contract/Full-Time"
  },
  {
    id: 3,
    title: "IT Project Managers",
    subtitle: "Qatar",
    description: "Excellent opportunities for senior IT professionals to lead digital transformation projects across government and private sectors in Doha.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    link: "/vacancies/it-qatar",
    slug: "it-qatar",
    category: "Technology",
    salary: "High Basic + Housing",
    type: "Full-Time"
  },
  {
    id: 4,
    title: "Skilled Welders",
    subtitle: "Oman",
    description: "Immediate openings for certified 6G welders and fabricators for major oil and gas infrastructure developments spanning the Sultanate.",
    image: "https://images.pexels.com/photos/3186949/pexels-photo-3186949.jpeg",
    link: "/vacancies/welders-oman",
    slug: "welders-oman",
    category: "Oil & Energy",
    salary: "Base + Overtime + Camp",
    type: "Contract"
  },
  {
    id: 5,
    title: "Hospitality Managers",
    subtitle: "Bahrain",
    description: "5-star luxury resorts are hiring experienced hotel managers, executive chefs, and front-of-house directors to elevate guest experiences.",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    link: "/vacancies/hospitality-bahrain",
    slug: "hospitality-bahrain",
    category: "Hospitality & Tourism",
    salary: "Base + Benefits Package",
    type: "Full-Time"
  },
  {
    id: 6,
    title: "Heavy Duty Drivers",
    subtitle: "Kuwait",
    description: "Leading logistics and transport companies require licensed heavy vehicle drivers for cross-border and regional distribution networks.",
    image: "https://images.pexels.com/photos/5961982/pexels-photo-5961982.jpeg",
    link: "/vacancies/drivers-kuwait",
    slug: "drivers-kuwait",
    category: "Transport & Logistics",
    salary: "Standard + Performance Bonus",
    type: "Full-Time"
  },
  {
    id: 7,
    title: "Financial Analysts",
    subtitle: "UK",
    description: "Tier-2 sponsorship available for qualified financial analysts, auditors, and accountants joining top global firms in London.",
    image: "https://images.pexels.com/photos/7567556/pexels-photo-7567556.jpeg",
    link: "/vacancies/finance-uk",
    slug: "finance-uk",
    category: "Finance",
    salary: "Competitive + Visa Sponsorship",
    type: "Full-Time"
  },
  {
    id: 8,
    title: "HVAC Technicians",
    subtitle: "UAE",
    description: "Facility management companies are extensively hiring certified HVAC technicians and maintenance supervisors for commercial properties.",
    image: "https://images.pexels.com/photos/8853499/pexels-photo-8853499.jpeg",
    link: "/vacancies/hvac-uae",
    slug: "hvac-uae",
    category: "Facilities Management",
    salary: "Market Standard",
    type: "Contract"
  }
];

export default function JobDetails() {
  const router = useRouter();
  const { slug } = router.query;

  // On first render during hydration, query might be empty
  const job = jobsData.find((j) => j.slug === slug);

  if (!job && router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-brand-dark font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-500 mb-6">The position you are looking for does not exist or has been filled.</p>
          <Link href="/vacancies" className="bg-brand-primary text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-secondary transition-colors">
            Back to Vacancies
          </Link>
        </div>
      </div>
    );
  }

  if (!job) {
    return null; // Loading state
  }

  return (
    <>
      <Head>
        <title>{job.title} in {job.subtitle} - Lucru</title>
        <meta name="description" content={job.description} />
      </Head>
      <main className="min-h-screen bg-white">
        <ServicesHero
          title={job.title}
          titleAccent={job.subtitle}
          subtitle={job.category}
          image={job.image}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Vacancies', href: '/vacancies' },
            { label: job.title },
          ]}
        />

        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Job Description */}
                    <div className="lg:w-8/12" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                            Role <span className="italic font-bold">Overview</span>
                        </h2>
                        <div className="w-16 h-1 bg-brand-primary mb-8" />
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {job.description}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We are actively sourcing top-tier candidates who exhibit the determination and skillset required for this demanding yet highly rewarding position. If you are passionate about driving exceptional results and eager to embrace a new global opportunity, this role offers an unparalleled foundation for long-term career growth.
                        </p>

                        <h3 className="text-2xl text-brand-dark font-semibold mt-12 mb-6">Key Responsibilities</h3>
                        <ul className="list-disc list-outside ml-5 text-gray-600 space-y-3 mb-8">
                            <li>Provide exemplary services aligned with global standards and the organization&apos;s strategic vision.</li>
                            <li>Collaborate effectively within multi-cultural teams to achieve optimal project or operational outcomes.</li>
                            <li>Ensure complete adherence to industry-specific safety, compliance, and regulatory protocols.</li>
                            <li>Continuously identify process improvements and proactively adapt to rapidly evolving work environments.</li>
                        </ul>

                    </div>

                    {/* Right Column: Job Meta Card */}
                    <div className="lg:w-4/12" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-zinc-50 border border-zinc-200 p-8 sticky top-32">
                            <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-zinc-200 pb-4">Position Details</h3>
                            
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <MapPinIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Location</p>
                                        <p className="text-brand-dark font-medium">{job.subtitle}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <BriefcaseIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Industry</p>
                                        <p className="text-brand-dark font-medium">{job.category}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <ClockIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Employment Type</p>
                                        <p className="text-brand-dark font-medium">{job.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CurrencyDollarIcon className="w-6 h-6 text-brand-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Compensation</p>
                                        <p className="text-brand-dark font-medium">{job.salary}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-brand-primary text-white py-4 font-bold tracking-widest uppercase hover:bg-brand-secondary transition-colors text-sm">
                                Apply For This Job
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Existing Layout Components */}
        <div data-aos="fade-up">
            <MobileAppSection />
        </div>
        <div data-aos="fade-up">
        </div>
      </main>
    </>
  );
}
