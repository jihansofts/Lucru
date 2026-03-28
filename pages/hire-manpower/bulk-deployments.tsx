import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HireTalentSubNav from "@/components/HireTalentSubNav";
import StaffingCTA from "@/components/StaffingCTA";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";
import LPattern from "@/components/LPattern";
import {
  BoltIcon,
  ArrowPathIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  { icon: BoltIcon, title: "Rapid Scaling", desc: "Scale your workforce up or down within weeks, not months" },
  { icon: ArrowPathIcon, title: "Flexible Contracts", desc: "3 months to 3 years — fully customisable engagement terms" },
  { icon: CurrencyDollarIcon, title: "Cost Effective", desc: "No long-term commitments; pay only for the duration you need" },
  { icon: ScaleIcon, title: "Risk Mitigation", desc: "We handle all employment liabilities, insurance, and compliance" },
  { icon: WrenchScrewdriverIcon, title: "Project-Ready", desc: "Pre-screened professionals ready to start immediately on arrival" },
  { icon: ShieldCheckIcon, title: "Full Support", desc: "Ongoing HR management, payroll, and performance monitoring" },
];

const industries = [
  {
    title: "Oil & Gas",
    desc: "Certified welders, pipe fitters, riggers, HSE officers, and process engineers for onshore and offshore operations.",
    image: "https://images.pexels.com/photos/5961982/pexels-photo-5961982.jpeg",
    positions: "500+",
  },
  {
    title: "Construction & Infrastructure",
    desc: "Site engineers, quantity surveyors, crane operators, steel fixers, and project coordinators for mega developments.",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    positions: "1,200+",
  },
  {
    title: "Healthcare",
    desc: "Nurses, lab technicians, physiotherapists, pharmacists, and healthcare assistants for hospitals and clinics.",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
    positions: "800+",
  },
  {
    title: "Hospitality",
    desc: "Chefs, F&B managers, housekeeping staff, concierge, and event coordinators for luxury hotels and resorts.",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    positions: "650+",
  },
  {
    title: "Facility Management",
    desc: "HVAC technicians, electricians, plumbers, cleaning supervisors, and maintenance managers for commercial properties.",
    image: "https://images.pexels.com/photos/8853499/pexels-photo-8853499.jpeg",
    positions: "400+",
  },
  {
    title: "Logistics & Transport",
    desc: "Heavy vehicle drivers, warehouse staff, fleet managers, and supply chain coordinators for distribution networks.",
    image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
    positions: "350+",
  },
];

export default function ContractStaffing() {
  return (
    <>
      <Head>
        <title>Contract Staffing - Lucru</title>
        <meta name="description" content="Scale your workforce on demand with Lucru's contract staffing solutions. Fully compliant, project-ready professionals deployed in 2-4 weeks." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Contract staffing"
              fill sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <LPattern />
          <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Contract <span className="font-bold italic">Staffing</span>
            </h1>
            <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
              Flexible workforce solutions that scale with your projects.
            </p>
          </div>
        </div>

        <HireTalentSubNav />

        {/* Overview Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-5/12" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  Scale On <span className="italic font-bold">Demand</span>
                </h2>
                <h3 className="text-lg text-[#006A80] font-semibold mb-6">
                  Workforce Flexibility, Zero Hassle
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Whether you&apos;re ramping up for a new project, covering seasonal peaks, or managing a long-term contract, our contract staffing service delivers pre-vetted professionals who are ready to start on day one.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                  We manage the full employment lifecycle — from sourcing and visa processing to payroll and performance management — so you can focus on what matters most: your project success.
                </p>
                <Link
                  href="/hire-manpower/submit-manpower-request"
                  className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors"
                >
                  GET STARTED
                </Link>
              </div>

              {/* Benefits Grid */}
              <div className="lg:w-7/12">
                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">
                  KEY BENEFITS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-sm p-6 flex flex-col items-center text-center hover:border-[#006A80] hover:shadow-md transition-all duration-300 group"
                      data-aos="fade-up"
                      data-aos-delay={index * 80}
                    >
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

        {/* Industries Served */}
        <section className="py-20 md:py-28 bg-[#f7f5f2]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Industries <span className="italic font-bold">We Serve</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
                Our contract staffing solutions span across all major sectors, with specialized recruitment teams for each industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((item, index) => (
                <div
                  key={index}
                  className="bg-white group cursor-pointer border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-[#006A80] text-white text-xs font-bold px-3 py-1.5 tracking-wider">
                      {item.positions} placed
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-brand-dark font-bold mb-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Numbered Steps */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                How Contract <span className="italic font-bold">Staffing Works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Define Scope", desc: "Share your project scope, workforce numbers, skill requirements, and deployment timeline." },
                { step: "02", title: "Talent Matching", desc: "We match professionals from our ready-to-deploy pool using AI-powered filtering and expert review." },
                { step: "03", title: "Rapid Deployment", desc: "Complete mobilisation in 2-4 weeks including documentation, compliance, and travel logistics." },
                { step: "04", title: "Managed Service", desc: "Ongoing payroll, HR management, performance monitoring, and contract renewals handled by us." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-[#f7f5f2] p-8 border border-gray-200 hover:border-[#006A80] hover:shadow-lg transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-5xl font-bold text-gray-200 group-hover:text-[#006A80]/20 transition-colors mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                    {item.step}
                  </div>
                  <h4 className="text-brand-dark font-bold text-base mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div data-aos="fade-up">
          <StaffingCTA />
        </div>
        <div data-aos="fade-up">
          <MobileAppSection />
        </div>
        <div data-aos="fade-up">
          <SubscribeSection />
        </div>
      </main>
    </>
  );
}
