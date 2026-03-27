import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import LPattern from './LPattern';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';

const slidesData = [
    {
        id: 1,
        title: "Access Elite",
        subtitle: "Talent",
        description: "Connect with pre-vetted professionals across healthcare, engineering, IT, and more — sourced globally, deployed swiftly.",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        link: "/hire-talent/submit-staffing-request"
    },
    {
        id: 2,
        title: "Permanent",
        subtitle: "Placement",
        description: "Build lasting teams with our rigorous candidate matching — from executive search to specialist technical roles.",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        link: "/hire-talent/permanent-placement"
    },
    {
        id: 3,
        title: "Contract",
        subtitle: "Staffing",
        description: "Scale your workforce on demand with flexible contract professionals, fully compliant and project-ready.",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        link: "/hire-talent/contract-staffing"
    }
];

export default function HireTalentHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

    return (
        <div className="relative w-full h-[70vh] md:h-dvh overflow-hidden bg-gray-900">
            <Swiper
                modules={[EffectFade, Autoplay, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full absolute inset-0 z-0"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                height={700}
                                width={1200}
                                src={slide.image}
                                alt={`${slide.title} ${slide.subtitle}`}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

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

            <LPattern />

            <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white pointer-events-none max-w-2xl">
                {slidesData.map((data, i) => {
                    const isActive = i === activeIndex;
                    if (!isActive) return null;

                    return (
                        <div key={i} className="animate-slide-up-hero pointer-events-auto">
                            <h1 className="text-4xl md:text-6xl font-light mb-2 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                {data.title} <span className="font-bold">{data.subtitle}</span>
                            </h1>
                            <p className="text-sm md:text-lg mb-8 drop-shadow-md text-gray-200">
                                {data.description}
                            </p>
                            
                            <Link 
                                href={data.link}
                                className="inline-block border border-white text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
