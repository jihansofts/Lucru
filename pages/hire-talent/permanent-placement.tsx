import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HireTalentSubNav from "@/components/HireTalentSubNav";
import StaffingCTA from "@/components/StaffingCTA";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";
import LPattern from "@/components/LPattern";
import {
  CheckBadgeIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  { icon: CheckBadgeIcon, title: "Multi-Stage Vetting", desc: "Rigorous background checks, credential verification, and skill assessment" },
  { icon: ShieldCheckIcon, title: "Quality Guarantee", desc: "Free replacement within 90 days if a placement doesn't meet expectations" },
  { icon: AcademicCapIcon, title: "Specialist Recruiters", desc: "Industry-specific talent acquisition experts who understand your needs" },
  { icon: GlobeAltIcon, title: "Global Talent Pool", desc: "Access pre-screened candidates from 30+ countries worldwide" },
  { icon: UserGroupIcon, title: "Cultural Fit", desc: "We assess personality, work ethic, and cultural alignment beyond just skills" },
  { icon: ClipboardDocumentCheckIcon, title: "Full Compliance", desc: "End-to-end visa, immigration, and employment law compliance management" },
];

const processSteps = [
  {
    step: "01",
    title: "Requirements Analysis",
    desc: "Our specialist recruiters conduct an in-depth consultation to understand your role specifications, company culture, growth plans, and candidate success criteria.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    step: "02",
    title: "Global Talent Search",
    desc: "Leveraging our database of 50,000+ pre-screened professionals and active sourcing across 30+ countries, we identify your ideal candidates through multi-channel recruitment.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
  },
  {
    step: "03",
    title: "Assessment & Shortlisting",
    desc: "Candidates undergo technical evaluations, trade tests, reference checks, and behavioural interviews. You receive a curated shortlist of top-tier matches with full profiles.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    step: "04",
    title: "Placement & Onboarding",
    desc: "We manage the entire deployment lifecycle — offer negotiation, visa processing, medical clearance, travel logistics, and pre-departure orientation for a seamless start.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
];

const successCards = [
  {
    title: "Healthcare Provider",
    location: "Saudi Arabia",
    stat: "120+ Nurses",
    desc: "Deployed 120+ registered nurses across 8 hospitals in Riyadh within 6 weeks, with 97% first-year retention.",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
  },
  {
    title: "Construction Firm",
    location: "UAE",
    stat: "85 Engineers",
    desc: "Placed 85 civil and MEP engineers for mega-infrastructure projects across Dubai and Abu Dhabi over 12 months.",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
  },
  {
    title: "Luxury Hotel Group",
    location: "Qatar",
    stat: "200+ Staff",
    desc: "Mass recruitment of hospitality professionals for 3 five-star properties opening in Doha, from chefs to front-of-house.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  },
];

export default function PermanentPlacement() {
  return (
    <>
      <Head>
        <title>Permanent Placement - Lucru</title>
        <meta name="description" content="Build lasting teams with Lucru's permanent placement services. Rigorous vetting, global sourcing, and guaranteed quality for every hire." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Permanent placement"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <LPattern />
          <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Permanent <span className="font-bold italic">Placement</span>
            </h1>
            <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
              The right hire transforms your business. We find them.
            </p>
          </div>
        </div>

        <HireTalentSubNav />

        {/* Overview Section - Two Column */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-5/12" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl text-[#002538] font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  Build Lasting <span className="italic font-bold">Teams</span>
                </h2>
                <h3 className="text-lg text-[#006A80] font-semibold mb-6">
                  Hire With Confidence
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Our permanent placement service connects you with exceptional professionals who become integral members of your organisation. Every candidate undergoes rigorous multi-stage vetting — technical assessments, background verification, reference checks, and cultural fit evaluation — so you can hire with absolute confidence.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                  From individual executive searches to large-scale recruitment campaigns, Lucru delivers candidates who don&apos;t just fill positions — they elevate your business.
                </p>
                <Link
                  href="/hire-talent/submit-staffing-request"
                  className="inline-block border border-[#002538] text-[#002538] px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#002538] hover:text-white transition-colors"
                >
                  REQUEST TALENT
                </Link>
              </div>

              {/* Benefits Grid */}
              <div className="lg:w-7/12">
                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">
                  OUR GUARANTEES
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
                      <h5 className="text-[#002538] font-bold text-sm mb-2">{item.title}</h5>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-28 bg-[#f7f5f2]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl text-[#002538] font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                How It <span className="italic font-bold">Works</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
                Our proven 4-step process ensures you get the right permanent hire — every time.
              </p>
            </div>

            <div className="space-y-12">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                  data-aos="fade-up"
                >
                  <div className="md:w-1/2 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[280px] md:h-[320px]"
                    />
                    <div className="absolute top-4 left-4 bg-[#002538] text-white text-2xl font-bold px-4 py-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      {item.step}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl md:text-3xl text-[#002538] font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl text-[#002538] font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Success <span className="italic font-bold">Stories</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
                Real results from real partnerships. See how Lucru has transformed the workforce of leading organisations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successCards.map((card, index) => (
                <div
                  key={index}
                  className="group cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#006A80] text-white text-xs font-bold px-3 py-1.5 tracking-wider">
                      {card.stat}
                    </div>
                  </div>
                  <div className="px-2 pb-4">
                    <h3 className="text-xl text-[#002538] font-light mb-1" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      {card.title} <span className="font-bold">{card.location}</span>
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
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
