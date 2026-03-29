import Head from "next/head";
import NewLaunchesHero from "@/components/NewLaunchesHero";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";
import JobCard, { JobData } from "@/components/JobCard";
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';

// 10 dummy data items
const dummyJobs: JobData[] = [
  {
    id: 1,
    industry: "Construction",
    nationality: "Any Nationality",
    date: "Nov 12, 2025",
    title: "Electrician",
    location: "Romania",
    employmentType: "Full-time",
    experience: "1-2 Years experience",
    vacancies: 5,
    description: "Installs and maintains electrical wiring and systems safely. Ensure compliance with building codes.",
    salary: "€700–€900",
    shift: "Day Shift",
    gender: "Male",
    category: "Trade & Labor Jobs",
    requirements: "Need to sit Interview"
  },
  {
    id: 2,
    industry: "Healthcare",
    nationality: "Philippines, India",
    date: "Dec 01, 2025",
    title: "Registered Nurse",
    location: "Saudi Arabia",
    employmentType: "Full-time",
    experience: "3+ Years experience",
    vacancies: 20,
    description: "Provide high-quality patient care in intensive care units. Requires valid nursing license.",
    salary: "$2,000–$3,500",
    shift: "Rotating Shifts",
    gender: "Female",
    category: "Medical & Health",
    requirements: "Prometric Exam, Dataflow"
  },
  {
    id: 3,
    industry: "IT Services",
    nationality: "Any Nationality",
    date: "Jan 15, 2026",
    title: "Software Engineer",
    location: "UAE",
    employmentType: "Remote / Full-time",
    experience: "5+ Years experience",
    vacancies: 3,
    description: "Develop scalable web applications using React and Node.js. Lead a team of junior developers.",
    salary: "AED 15,000–AED 20,000",
    shift: "Day Shift",
    gender: "Any",
    category: "Technology",
    requirements: "Technical Assessment, Coding Interview"
  },
  {
    id: 4,
    industry: "Hospitality",
    nationality: "Any Nationality",
    date: "Oct 20, 2025",
    title: "Executive Chef",
    location: "Bahrain",
    employmentType: "Full-time",
    experience: "5-7 Years experience",
    vacancies: 1,
    description: "Manage kitchen operations, develop menus, and ensure food quality in a 5-star hotel.",
    salary: "BHD 1,000–BHD 1,500",
    shift: "Flexible",
    gender: "Any",
    category: "Food & Beverage",
    requirements: "Tasting Test, Portfolio"
  },
  {
    id: 5,
    industry: "Logistics",
    nationality: "Any Nationality",
    date: "Sep 30, 2025",
    title: "Heavy Truck Driver",
    location: "Kuwait",
    employmentType: "Full-time",
    experience: "2+ Years experience",
    vacancies: 15,
    description: "Drive heavy haul trucks across borders. Must possess GCC valid heavy driving license.",
    salary: "KWD 300–KWD 450",
    shift: "Night Shift",
    gender: "Male",
    category: "Transportation",
    requirements: "Driving Test, Medical Fitness"
  },
  {
    id: 6,
    industry: "Facilities Management",
    nationality: "Any Nationality",
    date: "Dec 10, 2025",
    title: "HVAC Technician",
    location: "Qatar",
    employmentType: "Full-time",
    experience: "2-4 Years experience",
    vacancies: 8,
    description: "Repair and maintain heating, ventilation, and air conditioning systems in commercial buildings.",
    salary: "QAR 2,500–QAR 3,500",
    shift: "Day Shift",
    gender: "Male",
    category: "Maintenance",
    requirements: "Trade Test, Interview"
  },
  {
    id: 7,
    industry: "Oil & Gas",
    nationality: "Any Nationality",
    date: "Feb 05, 2026",
    title: "Skilled 6G Welder",
    location: "Oman",
    employmentType: "Contract",
    experience: "3+ Years experience",
    vacancies: 10,
    description: "Perform 6G welding on pipelines and offshore rigs. Must be certified and highly skilled.",
    salary: "OMR 400–OMR 600",
    shift: "Day Shift",
    gender: "Male",
    category: "Trade & Labor Jobs",
    requirements: "Welding Test, Certification check"
  },
  {
    id: 8,
    industry: "Finance",
    nationality: "Any Nationality",
    date: "Mar 01, 2026",
    title: "Financial Analyst",
    location: "United Kingdom",
    employmentType: "Full-time",
    experience: "3-5 Years experience",
    vacancies: 2,
    description: "Analyze financial data, prepare reports, and assist in strategic financial planning.",
    salary: "£45,000–£60,000",
    shift: "Day Shift",
    gender: "Any",
    category: "Finance & Accounting",
    requirements: "Panel Interview, Case Study"
  },
  {
    id: 9,
    industry: "Construction",
    nationality: "Any Nationality",
    date: "Nov 25, 2025",
    title: "Civil Engineer",
    location: "Saudi Arabia",
    employmentType: "Full-time",
    experience: "5+ Years experience",
    vacancies: 4,
    description: "Oversee large-scale construction projects and ensure safety and structural integrity.",
    salary: "SAR 8,000–SAR 12,000",
    shift: "Day Shift",
    gender: "Any",
    category: "Engineering",
    requirements: "Engineering Degree, Interview"
  },
  {
    id: 10,
    industry: "Retail",
    nationality: "Any Nationality",
    date: "Oct 15, 2025",
    title: "Store Manager",
    location: "UAE",
    employmentType: "Full-time",
    experience: "4+ Years experience",
    vacancies: 5,
    description: "Manage daily store operations, drive sales targets, and handle customer service excellence.",
    salary: "AED 6,000–AED 9,000",
    shift: "Rotating Shifts",
    gender: "Any",
    category: "Sales & Retail",
    requirements: "Interview, Background Check"
  }
];

export default function FindJobs() {
  const [jobs, setJobs] = useState<JobData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Axios API call fetching data
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // TODO: Replace with real API URL later
        // const response = await axios.get('/api/v1/jobs');
        // setJobs(response.data);
        
        // Simulating API call delay with dummy data
        setTimeout(() => {
          setJobs(dummyJobs);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Head>
        <title>Featured Jobs - Lucru</title>
        <meta name="description" content="Discover Lucru's newest overseas job openings and career opportunities." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <NewLaunchesHero />

        {/* Jobs Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Featured <span className="italic">Jobs</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our handpicked selection of top-tier international career opportunities, inviting you to take the next big step in your professional journey.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-dark"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <div key={job.id} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                  <JobCard {...job} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* App Section */}
        <div data-aos="fade-up">
            <MobileAppSection />
        </div>

        {/* Subscribe Section */}
        <div data-aos="fade-up">
            <SubscribeSection />
        </div>
      </main>
    </>
  );
}
