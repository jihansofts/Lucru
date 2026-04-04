import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import JobCard, { JobData } from './JobCard';
import ApplyModal from './ApplyModal';

import 'swiper/css';
import 'swiper/css/navigation';

const newLaunchesData: JobData[] = [
  {
    id: 1,
    title: "Registered Nurses",
    location: "Saudi Arabia",
    industry: "Healthcare",
    nationality: "Any",
    date: "12 Oct 2023",
    employmentType: "Full Time",
    experience: "2-5 Years",
    vacancies: 50,
    description: "Approved employer placements ready. Full visa assistance provided.",
    salary: "Negotiable",
    shift: "Rotational",
    gender: "Any",
    category: "Medical",
    requirements: "BSc Nursing, Prometric passed"
  },
  {
    id: 2,
    title: "Civil Engineers",
    location: "UAE",
    industry: "Construction",
    nationality: "Any",
    date: "15 Oct 2023",
    employmentType: "Full Time",
    experience: "5+ Years",
    vacancies: 20,
    description: "Ready visa for qualified site engineers. We handle your documentation securely.",
    salary: "Competitive",
    shift: "Day Shift",
    gender: "Male",
    category: "Engineering",
    requirements: "B.E Civil, GCC experience preferred"
  },
  {
    id: 3,
    title: "Skilled Welders",
    location: "Qatar",
    industry: "Oil & Gas",
    nationality: "Any",
    date: "18 Oct 2023",
    employmentType: "Contract",
    experience: "3+ Years",
    vacancies: 100,
    description: "Direct interviews with top employers. Comprehensive flight & ticketing support.",
    salary: "Based on interview",
    shift: "Rotational",
    gender: "Male",
    category: "Technical",
    requirements: "6G, TIG, MIG qualifications"
  },
  {
    id: 4,
    title: "Hospitality Staff",
    location: "Kuwait",
    industry: "Hospitality",
    nationality: "Any",
    date: "20 Oct 2023",
    employmentType: "Full Time",
    experience: "1-3 Years",
    vacancies: 150,
    description: "5-star hotels hiring and pre-approved visas available for immediate processing.",
    salary: "Standard",
    shift: "Shift Basis",
    gender: "Any",
    category: "F&B",
    requirements: "Fluent English, relevant degree"
  }
];

export default function OurNewLaunches() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobData | null>(null);

  const handleApplyClick = (job: JobData) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="md:pl-10 overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 pr-14 ps-6 md:ps-0">
          <div className="text-3xl md:text-3xl text-center md:text-left w-full md:w-auto text-brand-dark font-light tracking-tight" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            <span className="italic">Latest</span> Vacancies
          </div>

          <div className="flex items-center justify-center w-full md:w-auto md:justify-end gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="text-gray-400 hover:text-brand-primary transition-colors cursor-pointer"
              >
                <ChevronLeftIcon className="w-8 h-8 stroke-1" />
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="text-gray-400 hover:text-brand-primary transition-colors cursor-pointer"
              >
                <ChevronRightIcon className="w-8 h-8 stroke-1" />
              </button>
            </div>
            <div className="scale-90 origin-center md:scale-100">
              <Link href="/vacancies" className="border border-brand-dark text-brand-dark px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">
                VIEW ALL VACANCIES
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3.2 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full pl-6 md:pl-0 pb-10"
          >
            {newLaunchesData.map((job) => (
              <SwiperSlide key={job.id} className="h-auto pb-4">
                <JobCard {...job} onApply={() => handleApplyClick(job)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ApplyModal isOpen={isModalOpen} closeModal={closeModal} job={selectedJob} />
    </section>
  );
}
