import React from 'react';

import Image from 'next/image';

export default function StaffingCTA() {
    return (
        <section className="relative w-full h-105 md:h-120 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                    alt="Team collaboration"
                    fill sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/85" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h2
                    className="text-3xl md:text-5xl text-white font-light mb-4"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                    data-aos="fade-up"
                >
                    Ready to Build <span className="italic font-bold">Your Team?</span>
                </h2>
                <p
                    className="text-gray-300 text-sm md:text-lg max-w-xl mb-10 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Whether you need one specialist or an entire workforce, our recruitment experts are ready to deliver. Get in touch today.
                </p>
                <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                    <a
                        // href="tel:800LUCRU"
                        className="inline-block bg-white text-brand-dark px-10 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors"
                    >
                        CALL US NOW
                    </a>
                </div>
            </div>
        </section>
    );
}
