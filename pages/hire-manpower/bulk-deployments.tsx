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
  { icon: BoltIcon, title: "Rapid Scaling", desc: "Deploy hundreds of skilled workers to your sites in a matter of weeks." },
  { icon: ArrowPathIcon, title: "End-to-End Logistics", desc: "We manage medicals, bulk visa stamping, protective clearances, and flights." },
  { icon: CurrencyDollarIcon, title: "Cost Effective", desc: "Economies of scale applied to mass recruitment campaigns reduce overall hiring costs." },
  { icon: ScaleIcon, title: "Risk Mitigation", desc: "Stringent background checks and comprehensive trade tests minimize deployment failure." },
  { icon: WrenchScrewdriverIcon, title: "Project-Ready", desc: "Workers arrive fully briefed, compliant, and ready to mobilize on site." },
  { icon: ShieldCheckIcon, title: "Dedicated Coordinators", desc: "Account managers assigned specifically to handle your large-scale workforce volumes." },
];

const industries = [
  {
    title: "Construction & Infrastructure",
    desc: "Masons, steel fixers, carpenters, scaffolders, electricians, and heavy equipment operators.",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    positions: "1,200+",
  },
  {
    title: "Oil & Gas",
    desc: "Certified 6G welders, pipe fabricators, riggers, and mechanical fitters for massive turnaround projects.",
    image: "https://images.pexels.com/photos/5961982/pexels-photo-5961982.jpeg",
    positions: "500+",
  },
  {
    title: "Facility Management",
    desc: "Cleaners, HVAC technicians, plumbers, and security personnel for mega-structures and communities.",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
    positions: "800+",
  },
  {
    title: "Hospitality & Catering",
    desc: "Kitchen stewards, waitstaff, bellboys, and housekeeping teams for newly launched luxury hotels.",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    positions: "650+",
  },
  {
    title: "Manufacturing & Warehousing",
    desc: "Assembly line workers, forklift operators, packers, and logisticians for massive supply chains.",
    image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
    positions: "350+",
  },
];

export default function BulkDeployments() {
  return (
    <>
      <Head>
        <title>Bulk Deployments - Lucru</title>
        <meta name="description" content="Scale your workforce efficiently with our bulk deployment solutions from South Asia. Fully compliant, mass-recruited professionals." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Bulk Deployments"
              fill sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <LPattern />
          <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Bulk <span className="font-bold italic">Deployments</span>
            </h1>
            <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
              Executing mass recruitment campaigns with precision and speed.
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
                  Mass Mobilization, Zero Hassle
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Whether you&apos;re breaking ground on a massive infrastructure project or launching a chain of retail stores, finding hundreds of capable workers simultaneously is a massive logistical challenge. We solve this by structuring dedicated mass recruitment campaigns directly at the source.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                  We handle the full employment lifecycle — organizing mega interview drives, arranging vast trade-testing facilities, managing bulk medical applications, and coordinating chartered flights. You just provide the demand; we supply the workforce.
                </p>
                <a
                  href="#"
                  className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors"
                >
                  START A CAMPAIGN
                </a>
              </div>

              {/* Benefits Grid */}
              <div className="lg:w-7/12">
                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">
                  KEY ADVANTAGES
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
                Trades <span className="italic font-bold">We Supply</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
                We draw from deep candidate pools across South Asia to fulfill bulk quotas for trade and labor-intensive sectors.
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
                      {item.positions} Placed Annually
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
                Campaign <span className="italic font-bold">Roadmap</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Demand Allocation", desc: "Share your worker categories, quotas, salaries, and employment terms. We file demand letters for attestation." },
                { step: "02", title: "Trade Test Drives", desc: "We rent out massive testing grounds where hundreds of hopefuls are evaluated simultaneously by your delegates." },
                { step: "03", title: "Bulk Processing", desc: "Our massive operations team concurrently handles passports, medical centers, visas, and BMET clearances." },
                { step: "04", title: "Mass Mobilization", desc: "Pre-departure briefings followed by coordinated group travel, often utilizing chartered passenger aircrafts." },
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
