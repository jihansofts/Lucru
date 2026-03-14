import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import LaunchCard, { LaunchCardProps } from './LaunchCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ResponsiveLaunchGridProps {
  titleNode: React.ReactNode;
  description: string;
  items: LaunchCardProps[];
}

export default function ResponsiveLaunchGrid({ titleNode, description, items }: ResponsiveLaunchGridProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-10 md:mb-16 max-w-3xl px-6 md:px-0 flex flex-col md:flex-row md:items-end justify-between" data-aos="fade-up">
        <div>
          <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            {titleNode}
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Desktop Grid Layout (Hidden on Mobile) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 px-6 md:px-0">
        {items.map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
            <LaunchCard {...item} />
          </div>
        ))}
      </div>

      {/* Mobile Swiper Layout (Hidden on Desktop) */}
      <div className="md:hidden w-full relative pl-6 pb-16">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-full overflow-visible! relative"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="h-auto pb-4">
              <div className="h-full relative">
                <LaunchCard {...item} />
              </div>
            </SwiperSlide>
          ))}
          
          {/* Mobile Navigation Arrows (Sides) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 right-0 md:right-0 z-40 flex justify-between pointer-events-none">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-[#989b9c] hover:text-brand-primary transition-colors cursor-pointer bg-white/50 rounded-full p-1 shadow-sm pointer-events-auto -ml-3"
            >
              <ChevronLeftIcon className="w-8 h-8 stroke-2" />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="text-[#989b9c] hover:text-brand-primary transition-colors cursor-pointer bg-white/50 rounded-full p-1 shadow-sm pointer-events-auto mr-1"
            >
              <ChevronRightIcon className="w-8 h-8 stroke-2" />
            </button>
          </div>
        </Swiper>
        
        {/* Mobile Square Pagination (Bottom Center) */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-30">
            {items.map((_, dotIndex) => (
                <div
                    key={dotIndex}
                    onClick={() => swiperRef.current?.slideTo(dotIndex)}
                    className={`w-2 h-2 transition-all duration-300 cursor-pointer ${dotIndex === activeIndex ? 'bg-brand-dark scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
