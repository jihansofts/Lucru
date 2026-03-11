import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/navigation';

const slidesData = [
  {
    id: 1,
    main: {
      id: 'main-1',
      title: "Inspiring the best of living",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
      videoUrl: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
    },
    topRight: {
      id: 'tr-1',
      title: "Celebrate life's special moments",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      videoUrl: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
    },
    bottomRight: {
      id: 'br-1',
      title: "Curated experiences just for you",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      videoUrl: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
    }
  },
  
];

const PlayButtonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 text-white font-thin transition-transform scale-100 group-hover:scale-110">
     <polygon points="8,5 20,12 8,19" />
  </svg>
);

export default function LucruWayOfLife() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePlayToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveVideo(activeVideo === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="md:px-20 px-4 md:pl-20 mb-8 md:mb-8 flex flex-col md:flex-row md:items-center justify-between mx-auto max-w-425">
        <h2 className="text-3xl md:text-3xl text-center md:text-left w-full md:w-auto text-[#002538] font-light tracking-tight" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
          Your <span className="italic">Career</span> Journey
        </h2>
        {/* Navigation Arrows */}
        <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-gray-400 hover:text-[#5ec4d6] transition-colors cursor-pointer"
          >
            <ChevronLeftIcon className="w-10 h-10 stroke-1" />
          </button>
          
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="text-gray-400 hover:text-[#5ec4d6] transition-colors cursor-pointer"
          >
            <ChevronRightIcon className="w-10 h-10 stroke-1" />
          </button>
        </div>
      </div>

      <div className="relative group/carousel max-w-425 md:pr-20 mx-auto bg-white overflow-hidden">

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: .9 },
            1024: { slidesPerView: .9 },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full h-150 md:h-162 pl-0!"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row w-full h-full">
                
                {/* Main Left Half */}
                <div 
                  className="w-full md:w-1/2 h-full relative overflow-hidden group cursor-pointer"
                  onClick={(e) => handlePlayToggle(slide.main.id, e)}
                >
                  {activeVideo === slide.main.id ? (
                    <video src={slide.main.videoUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <Image src={slide.main.image} alt={slide.main.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-linear-to-t from-[#002538]/80 via-[#002538]/20 to-transparent" />
                      <div className="absolute bottom-12 left-12 max-w-[70%] z-10">
                        <h3 className="text-white text-[28px] md:text-3xl font-extrabold font-sans tracking-wide leading-tight">
                          {slide.main.title}
                        </h3>
                      </div>
                      <div className="absolute bottom-12 right-12 z-20">
                         <PlayButtonIcon />
                      </div>
                    </>
                  )}
                </div>

                {/* Right Half Container (Hidden on Mobile) */}
                <div className="hidden md:flex w-full md:w-1/2 h-full flex-col md:pl-1">
                  
                  {/* Top Right */}
                  <div className="w-full h-1/2 relative bg-[#e2dbc8] overflow-hidden group cursor-pointer" onClick={(e) => handlePlayToggle(slide.topRight.id, e)}>
                    {/* Text Sliding Panel (Left) */}
                    <div className={`absolute top-0 w-1/2 h-full flex flex-col justify-end p-8 md:p-12 transition-all duration-700 ease-in-out z-10 ${activeVideo === slide.topRight.id ? 'left-[-50%] opacity-0' : 'left-0 opacity-100'}`}>
                      <h3 className="text-[#002538] text-[20px] md:text-2xl font-bold font-sans pr-6">
                        {slide.topRight.title}
                      </h3>
                    </div>

                    {/* Image/Video Sliding Panel (Right) */}
                    <div className={`absolute top-0 right-0 h-full transition-all duration-700 ease-in-out z-20 ${activeVideo === slide.topRight.id ? 'w-full' : 'w-1/2'}`}>
                      {activeVideo === slide.topRight.id ? (
                        <video src={slide.topRight.videoUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full relative">
                          <Image src={slide.topRight.image} alt="Thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                          <div className="absolute bottom-6 right-6 z-20">
                            <PlayButtonIcon />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Right */}
                  <div className="w-full h-1/2 relative bg-[#e2dbc8] mt-1 overflow-hidden group cursor-pointer" onClick={(e) => handlePlayToggle(slide.bottomRight.id, e)}>
                    {/* Image/Video Sliding Panel (Left) */}
                    <div className={`absolute top-0 left-0 h-full transition-all duration-700 ease-in-out z-20 ${activeVideo === slide.bottomRight.id ? 'w-full' : 'w-1/2'}`}>
                      {activeVideo === slide.bottomRight.id ? (
                        <video src={slide.bottomRight.videoUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full relative">
                          <Image src={slide.bottomRight.image} alt="Thumbnail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                          <div className="absolute bottom-6 right-6 z-20">
                            <PlayButtonIcon />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Text Sliding Panel (Right) */}
                    <div className={`absolute top-0 w-1/2 h-full flex flex-col justify-end p-8 md:p-12 transition-all duration-700 ease-in-out z-10 ${activeVideo === slide.bottomRight.id ? 'right-[-50%] opacity-0' : 'right-0 opacity-100'}`}>
                      <h3 className="text-[#002538] text-[20px] md:text-2xl font-bold font-sans pr-6">
                        {slide.bottomRight.title}
                      </h3>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
