import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

export interface VisaPhoto {
  id: string;
  image: string;
  name: string;
  country: string;
}

const placeholderVisas: VisaPhoto[] = [
  { id: '1', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg', name: 'John Doe', country: 'United States' },
  { id: '2', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', name: 'Jane Smith', country: 'Canada' },
  { id: '3', image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg', name: 'Ali Hasan', country: 'Saudi Arabia' },
  { id: '4', image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg', name: 'Maria Garcia', country: 'United Kingdom' },
  { id: '5', image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg', name: 'David Lee', country: 'Australia' },
];

export default function VisaSlider({ visas = placeholderVisas }: { visas?: VisaPhoto[] }) {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl text-brand-dark font-light" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Visa <span className="italic text-brand-primary">Approvals</span> & Placements
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl text-lg">
              Explore our track record of successful placements and visa approvals worldwide. We turn ambitions into reality.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-3 bg-white rounded-full shadow-sm text-gray-600 hover:text-brand-primary hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronLeftIcon className="w-6 h-6 stroke-2" />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="p-3 bg-white rounded-full shadow-sm text-gray-600 hover:text-brand-primary hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronRightIcon className="w-6 h-6 stroke-2" />
            </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full h-80 md:h-[400px]"
          >
            {visas.map((visa) => (
              <SwiperSlide key={visa.id} className="h-full group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <Image
                    height={600}
                    width={800} 
                    src={visa.image} 
                    alt={`${visa.name} - ${visa.country} Visa`} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-white/30">
                      Approved
                    </div>
                    <h3 className="text-xl font-medium mb-1">{visa.name}</h3>
                    <p className="text-gray-200 text-sm flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-400"></span>
                       Placed in {visa.country}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}