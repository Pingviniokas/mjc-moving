// src/components/HeroSlider.tsx
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    title: "Profesionalios transporto bei kraustymo paslaugos",
    subtitle: "Patikimas ir greitas perkraustymas",
    image: "/images/hero/slide-1.jpg",
    buttonText: "Sužinoti Daugiau",
    href: "/perkraustymo-paslaugos"
  },
  // ... other slides
]

export default function HeroSlider() {
  return (
    <section className="bm-grid">
      <div className="bm-grid-row">
        <div className="relative w-full mt-24 px-[var(--bm-grid-margin)]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="w-full h-[600px] rounded-lg overflow-hidden"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1440px) calc(100vw - 96px), calc(100vw - 224px)"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-8">
                      <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                          {slide.title}
                        </h2>
                        <p className="text-lg mb-6 text-gray-200">
                          {slide.subtitle}
                        </p>
                        <a
                          href={slide.href}
                          className="inline-block bg-red-600 text-white px-6 py-2.5 rounded-md text-sm font-medium
                            hover:bg-red-700 transition-colors duration-200"
                        >
                          {slide.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}