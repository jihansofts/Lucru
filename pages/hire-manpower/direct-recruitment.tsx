import Head from "next/head";
import Image from "next/image";
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
  { icon: CheckBadgeIcon, title: "Rigorous Trade Testing", desc: "Advanced technical and hands-on skill evaluations before any candidate is shortlisted." },
  { icon: ShieldCheckIcon, title: "Medical & Background", desc: "Comprehensive GAMCA/Wafid medical checks paired with police clearances." },
  { icon: AcademicCapIcon, title: "Specialist Sourcing", desc: "Recruiters dedicated specifically to locating white-collar and specialized blue-collar trades." },
  { icon: GlobeAltIcon, title: "South Asian Focus", desc: "Exclusive deep-market access to professionals from Bangladesh, India, Nepal and Sri Lanka." },
  { icon: UserGroupIcon, title: "Interview Facilitation", desc: "We provide high-tech venues for your delegates to interview and select candidates comfortably." },
  { icon: ClipboardDocumentCheckIcon, title: "Visa & Emigration", desc: "Complete handling of embassy stamping, BMET/Protector regulations, and air ticketing." },
];

const processSteps = [
  {
    step: "01",
    title: "Demand & Documentation",
    desc: "You provide a Power of Attorney and Demand Letter. We authenticate them with the relevant embassy to legally initiate the recruitment quota.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    step: "02",
    title: "Sourcing & Pre-screening",
    desc: "We advertise the roles and mobilize our local networks. High-volume applicants are aggressively filtered down to those actually matching your stringent criteria.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
  },
  {
    step: "03",
    title: "Client Interviews & Selection",
    desc: "We host your HR team at our facilities, or arrange virtual interviews. You have the final say on every single selection made from the pre-screened pool.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    step: "04",
    title: "Deployment & Onboarding",
    desc: "We shepherd selected candidates through their medical exams, visa stamping, and local government emigration approvals prior to flying them right to your site.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
];

const successCards = [
  {
    title: "Healthcare Provider",
    location: "Saudi Arabia",
    stat: "120+ Nurses",
    desc: "Deployed 120+ registered nurses across 8 hospitals in Riyadh within 6 weeks, successfully handling Prometric and Dataflow requirements.",
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
    desc: "Precise candidate sourcing of hospitality professionals for 3 five-star properties opening in Doha, from chefs to front-of-house.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  },
];

export default function DirectRecruitment() {
  return (
    <>
      <Head>
        <title>Direct Recruitment - Lucru</title>
        <meta name="description" content="Secure reliable South Asian manpower. We source, screen, process, and deploy top-tier professionals seamlessly for your international operations." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Direct Recruitment"
              fill sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <LPattern />
          <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Direct <span className="font-bold italic">Recruitment</span>
            </h1>
            <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
              Your gateway to dedicated, hardworking talent from South Asia.
            </p>
          </div>
        </div>

        <HireTalentSubNav />

        {/* Overview Section - Two Column */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-5/12" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  Source Reliable <span className="italic font-bold">Talent</span>
                </h2>
                <h3 className="text-lg text-[#006A80] font-semibold mb-6">
                  Hire With Confidence
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Our direct recruitment service is fully tailored towards connecting overseas employers with competent workers from South Asia. Every candidate undergoes rigorous multi-stage vetting — trade assessments, background verification, medical checks, and visa processing compliance — saving you enormous administrative efforts.
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  Whether you need highly certified engineers or seasoned heavy-duty mechanics, we make sure they land at your site ready to immediately contribute.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="lg:w-7/12">
                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">
                  THE LUCRU STANDARD
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 p-6 flex flex-col hover:border-[#006A80] hover:shadow-md transition-all duration-300 group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <item.icon className="w-8 h-8 text-[#006A80] mb-4 stroke-1 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="text-brand-dark font-bold text-sm mb-2">{item.title}</h5>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section with Images */}
        <section className="py-20 md:py-28 bg-[#f7f5f2]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                End-to-End <span className="italic font-bold">Execution</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                From identifying raw talent to handing them their plane tickets, we manage the entire overseas employment lifecycle so you don&apos;t have to.
              </p>
            </div>

            <div className="space-y-20 md:space-y-32">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20`}>
                  <div className="w-full md:w-1/2 relative aspect-4/3 md:aspect-square" data-aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover rounded-sm shadow-xl"
                    />
                    <div className="absolute -bottom-8 -right-8 text-8xl font-bold text-white drop-shadow-xl" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      {step.step}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2" data-aos="fade-up">
                    <div className="text-[#006A80] font-bold text-xl mb-4">{step.step}</div>
                    <h3 className="text-3xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.desc}
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
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12" data-aos="fade-up">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  Proven <span className="italic font-bold">Success</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We have proudly constructed international workforces for world-class organizations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successCards.map((card, index) => (
                <div key={index} className="bg-[#f7f5f2] group" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="relative w-full aspect-16/9 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-brand-dark font-bold text-lg">{card.title}</h4>
                        <p className="text-[#006A80] text-sm font-medium">{card.location}</p>
                      </div>
                      <span className="bg-white border border-gray-200 text-xs font-bold px-3 py-1 text-gray-600">
                        {card.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
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
