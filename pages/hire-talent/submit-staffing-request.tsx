import Head from "next/head";
import Image from "next/image";
import HireTalentSubNav from "@/components/HireTalentSubNav";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";
import LPattern from "@/components/LPattern";
import React, { useState } from "react";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  ClockIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const industries = [
  "Healthcare & Medical",
  "Engineering & Construction",
  "Oil & Gas",
  "Hospitality & Catering",
  "IT & Technology",
  "Logistics & Transport",
  "Finance & Banking",
  "Manufacturing",
  "Education",
  "Other",
];

const highlights = [
  {
    icon: ClockIcon,
    title: "2-4 Weeks",
    desc: "Average time from request to deployment",
  },
  {
    icon: UserGroupIcon,
    title: "50,000+",
    desc: "Pre-screened candidates in our database",
  },
  {
    icon: MapPinIcon,
    title: "30+ Countries",
    desc: "Global sourcing network across continents",
  },
  {
    icon: BriefcaseIcon,
    title: "98% Retention",
    desc: "First-year employee retention rate",
  },
];

export default function SubmitStaffingRequest() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    positionsNeeded: "",
    jobTitle: "",
    deploymentCountry: "",
    staffingType: "permanent",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you! Your staffing request has been submitted. Our team will contact you within 24 hours."
    );
  };

  return (
    <>
      <Head>
        <title>Submit Staffing Request - Lucru</title>
        <meta
          name="description"
          content="Submit your staffing requirements to Lucru. We'll match you with pre-vetted talent from our global network within days."
        />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
              alt="Submit staffing request"
              fill sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <LPattern />
          <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
            <h1
              className="text-4xl md:text-6xl font-light mb-3 drop-shadow-lg"
              style={{ fontFamily: "var(--font-playfair-display), serif" }}
            >
              Submit <span className="font-bold italic">Staffing Request</span>
            </h1>
            <p className="text-sm md:text-lg drop-shadow-md text-gray-200">
              Tell us what you need — we&apos;ll deliver the talent.
            </p>
          </div>
        </div>

        <HireTalentSubNav />

        {/* Highlights Strip */}
        <section className="bg-brand-dark py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-white"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <item.icon className="w-8 h-8 text-brand-primary stroke-1 shrink-0" />
                <div>
                  <div className="font-bold text-lg">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Form */}
              <div className="lg:w-7/12" data-aos="fade-up">
                <h2
                  className="text-3xl md:text-4xl text-brand-dark font-light mb-4"
                  style={{ fontFamily: "var(--font-playfair-display), serif" }}
                >
                  Your <span className="italic font-bold">Requirements</span>
                </h2>
                <p className="text-gray-600 text-sm mb-10 leading-relaxed">
                  Fill out the form below and our team will get back to you
                  within 24 hours with a tailored recruitment plan.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Company Name
                      </label>
                      <div className="relative">
                        <BuildingOfficeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Contact Person
                      </label>
                      <div className="relative">
                        <UserGroupIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          className="w-full border border-gray-300 py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors"
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Email
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-gray-300 py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Phone
                      </label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-300 py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors"
                          placeholder="+971 XX XXX XXXX"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Industry
                      </label>
                      <div className="relative">
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full border border-gray-300 py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors appearance-none bg-white"
                          required
                        >
                          <option value="">Select industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Job Title / Role
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors"
                        placeholder="e.g. Registered Nurse, Site Engineer"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Positions Needed
                      </label>
                      <input
                        type="number"
                        name="positionsNeeded"
                        value={formData.positionsNeeded}
                        onChange={handleChange}
                        className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors"
                        placeholder="e.g. 5"
                        min="1"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Deployment Country
                      </label>
                      <input
                        type="text"
                        name="deploymentCountry"
                        value={formData.deploymentCountry}
                        onChange={handleChange}
                        className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors"
                        placeholder="e.g. UAE, Saudi Arabia"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                        Staffing Type
                      </label>
                      <div className="relative">
                        <select
                          name="staffingType"
                          value={formData.staffingType}
                          onChange={handleChange}
                          className="w-full border border-gray-300 py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors appearance-none bg-white"
                        >
                          <option value="permanent">
                            Permanent Placement
                          </option>
                          <option value="contract">Contract Staffing</option>
                          <option value="both">Both</option>
                        </select>
                        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark mb-2 tracking-wider uppercase">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-gray-300 py-3 px-4 text-sm focus:outline-none focus:border-[#006A80] focus:ring-1 focus:ring-[#006A80] transition-colors resize-none"
                      placeholder="Tell us more about your requirements, preferred qualifications, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-brand-dark text-white px-12 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#006A80] transition-colors"
                  >
                    SUBMIT REQUEST
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="lg:w-5/12" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-[#f7f5f2] p-8 md:p-10 sticky top-48">
                  <h3
                    className="text-2xl text-brand-dark font-light mb-2"
                    style={{
                      fontFamily: "var(--font-playfair-display), serif",
                    }}
                  >
                    Why <span className="italic font-bold">Lucru?</span>
                  </h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Trusted by 500+ employers across the GCC, Europe, and
                    beyond.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "End-to-End Service",
                        desc: "From sourcing to visa processing to deployment — we handle it all.",
                      },
                      {
                        title: "Quality Guarantee",
                        desc: "Free replacement within 3 months if a placement doesn't work out.",
                      },
                      {
                        title: "Compliance First",
                        desc: "Fully licensed and compliant with international labor regulations.",
                      },
                      {
                        title: "24/7 Support",
                        desc: "Dedicated account manager available around the clock.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start border-b border-gray-200 pb-5 last:border-0"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#006A80]/10 flex items-center justify-center shrink-0">
                          <span className="text-[#006A80] text-xs font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-brand-dark font-bold text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Need help?</p>
                    <a
                      href="tel:800LUCRU"
                      className="text-[#006A80] font-bold text-lg hover:underline"
                    >
                      800 LUCRU
                    </a>
                    <p className="text-xs text-gray-400 mt-1">
                      Available Sunday – Thursday, 8AM – 6PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
