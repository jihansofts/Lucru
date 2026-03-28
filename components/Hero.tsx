import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import LPattern from './LPattern';

import 'swiper/css';
import 'swiper/css/effect-fade';



const slidesData = [
    {
        id: 1,
        surtitle: "Your Trusted Pathway to Work Abroad",
        title: "Expert Guidance for Overseas Careers",
        position: "left",
        videoUrl: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
        link: "/vacancies"
    },
    {
        id: 2,
        surtitle: "Secure Placements & Visa Support",
        title: "We Handle Every Detail for You",
        position: "left",
        videoUrl: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
    },
    {
        id: 3,
        surtitle: "Empowering South Asian Professionals",
        title: "Connecting You to Global Employers",
        position: "right",
        videoUrl: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
        link: "/hire-manpower"
    }
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

    return (
        <div className="relative w-full h-dvh overflow-hidden bg-gray-900">
            <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                speed={1000}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full absolute inset-0 z-0"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {/* Background Video */}
                        <div className="absolute inset-0 w-full h-full">
                            <video
                                src={slide.videoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#FE871C]/10 via-[#FE871C]/20 to-[#FE871C]/10" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* L Pattern Overlay */}
            <LPattern />

            {/* Bottom Navigation Titles */}
            <div className="absolute bottom-0 left-0 right-0 z-20 h-[50%] md:h-2/3 text-white font-bold tracking-wide pointer-events-none">
                <style>{`
                    @keyframes slideUpFade {
                        from { transform: translateY(30px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    .animate-slide-up-fade {
                        animation: slideUpFade 0.6s ease-out forwards;
                    }
                `}</style>
                <div className='flex w-full h-full pointer-events-auto'>
                    {
                        slidesData.map((data, i) => {
                            const isActive = i === activeIndex;

                            return (
                                <div
                                    key={i}
                                    className={`relative flex flex-col justify-end px-4 md:px-10 pb-12 h-full cursor-pointer transition-all duration-700 ease-in-out border-r border-white/10 last:border-r-0 ${
                                        isActive ? 'w-full md:w-1/2 block' : 'w-0 md:w-1/4 hidden md:flex'
                                    } ${
                                        !isActive ? 'bg-linear-to-t from-brand-dark/80 via-brand-dark/20 to-transparent hover:from-brand-dark-border/80' : 'bg-linear-to-t from-black/40 to-transparent'
                                    }`}
                                    onClick={() => swiperInstance?.slideTo(i)}
                                >
                                    {isActive ? (
                                        <div key={`active-${i}`} className="animate-slide-up-fade flex flex-col items-center text-center md:items-start md:text-left">
                                            <p className="text-white/90 text-[10px] md:text-lg uppercase tracking-wider mb-2">{data.title}</p>
                                            <p className='text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-4'>{data.surtitle}</p>
                                            {data.link && (
                                                <a 
                                                    href={data.link}
                                                    className="mt-2 inline-flex items-center justify-center px-6 py-2.5 border border-white text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-colors duration-300 pointer-events-auto"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Explore Opportunities
                                                </a>
                                            )}
                                        </div>
                                    ) : (
                                        <div key={`inactive-${i}`} className="animate-slide-up-fade flex flex-col items-center text-center md:items-start md:text-left">
                                            <p className="text-white text-[10px] md:text-xl uppercase tracking-wider">{data.title}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    }
                </div>

                {/* Pagination indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-30 pointer-events-auto">
                    {slidesData.map((_, dotIndex) => (
                        <div
                            key={dotIndex}
                            onClick={(e) => {
                                e.stopPropagation();
                                swiperInstance?.slideTo(dotIndex);
                            }}
                            className={`w-2 h-2 transition-all duration-300 cursor-pointer ${dotIndex === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                        />
                    ))}
                </div>
            </div>


        </div>
    );
}
