import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

export interface CardData {
  id: string | number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string;
  status: string;
}

interface PropertyCarouselProps {
  titleNode: React.ReactNode;
  headerActionNode?: React.ReactNode;
  cards: CardData[];
  hoverBgColorClassName?: string;
  navigationPosition?: 'sides' | 'header';
  heightClassName?: string;
}

export default function PropertyCarousel({
  titleNode,
  headerActionNode,
  cards,
  hoverBgColorClassName = 'bg-[#001c29]/95',
  navigationPosition = 'sides',
  heightClassName = 'h-125 md:h-162',
}: PropertyCarouselProps) {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="md:pl-10 overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 pr-14 ps-6 md:ps-0">
          <div className="text-2xl md:text-3xl text-brand-dark font-light" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            {titleNode}
          </div>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {navigationPosition === 'header' && (
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
            )}
            {headerActionNode}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className={`w-full ${heightClassName} pl-0! transition-opacity duration-300`}
            key={cards.map(c => c.id).join('-')} // Force Swiper to re-render when cards change
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="h-full">
                <div className="relative w-full h-full group/card overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <Image
                    height={500}
                    width={800} 
                    src={card.image} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  
                  {/* Default State: Center Logo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover/card:opacity-0 z-10">
                    <div className="text-center text-white drop-shadow-md">
                      <div className="mx-auto w-12 h-12 mb-3 border border-white/50 rounded-full flex items-center justify-center">
                        {/* Placeholder Icon */}
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      </div>
                      <h3 className="text-2xl font-light tracking-[0.2em] uppercase">{card.title}</h3>
                      <p className="text-xs tracking-[0.3em] uppercase mt-1 opacity-80">{card.subtitle}</p>
                    </div>
                  </div>

                  {/* Hover State: Bottom Up Overlay */}
                  <div className={`absolute inset-0 ${hoverBgColorClassName} translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center p-8 text-center z-20`}>
                    {/* Hover Logo */}
                    <div className="absolute top-16 text-center text-white">
                        <div className="mx-auto w-12 h-12 mb-3 border border-white/50 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <h3 className="text-xl font-light tracking-[0.2em] uppercase">{card.title}</h3>
                        <p className="text-[10px] tracking-[0.3em] uppercase mt-1 text-[#e2dbc8]">{card.subtitle}</p>
                    </div>

                    <p className="text-sm text-white/90 leading-relaxed max-w-sm mt-8">
                      {card.description}
                    </p>
                    
                    <a href={card.link} className="absolute bottom-16 inline-flex border border-[#e2dbc8] text-[#e2dbc8] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#e2dbc8] hover:text-[#001c29] transition-colors">
                      VIEW DETAILS
                    </a>
                  </div>
                  
                  {/* Default State: Bottom Text Overlay (Optional based on design) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent transition-opacity duration-500 group-hover/card:opacity-0 z-10 flex flex-col justify-end min-h-[50%]">
                      <h4 className="text-white text-lg font-bold">{card.title} {card.subtitle}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows (Sides) */}
          {navigationPosition === 'sides' && (
            <>
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute cursor-pointer top-1/2 -left-1 -translate-y-1/2 z-30 text-white drop-shadow-md"
              >
                <ChevronLeftIcon className="w-12 h-12" />
              </button>
              
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute cursor-pointer top-1/2 -right-1 -translate-y-1/2 z-30 text-white drop-shadow-md"
              >
                <ChevronRightIcon className="w-12 h-12" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
