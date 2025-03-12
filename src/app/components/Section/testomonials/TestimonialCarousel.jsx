'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import './styles.css';
import SectionHeader from '../../shared/SectionHeader';
import { GlowingEffect } from '@/components/ui/glowing-effect';
const testimonials = [
  {
    id: 1,
    content:
      "Sampli has completely transformed how I gather feedback on my products. The ability to send items to samplers and receive detailed video reviews has been invaluable. I've seen a significant increase in customer engagement and sales!",
    author: 'Jessica T.',
  },
  {
    id: 2,
    content:
      'As a small business owner, I was looking for an effective way to showcase my products. With Sampli, I can create campaigns that connect me directly with reviewers. The insights I gain from their feedback help me improve my offerings and reach more customers.',
    author: 'Jessica T.',
  },
  {
    id: 3,
    content:
      'Using Sampli has been a game-changer for my online store. The integration with Shopify is seamless, and I love how easy it is to track product reviews. My sales have increased, and I now have a community of loyal customers who trust my brand.',
    author: 'Jessica T.',
  },
  {
    id: 4,
    content:
      "Sampli has completely transformed how I gather feedback on my products. The ability to send items to samplers and receive detailed video reviews has been invaluable. I've seen a significant increase in customer engagement and sales!",
    author: 'Jessica T.',
  },
  {
    id: 2123,
    content:
      'As a small business owner, I was looking for an effective way to showcase my products. With Sampli, I can create campaigns that connect me directly with reviewers. The insights I gain from their feedback help me improve my offerings and reach more customers.',
    author: 'Jessica T.',
  },
  {
    id: 3123423,
    content:
      'Using Sampli has been a game-changer for my online store. The integration with Shopify is seamless, and I love how easy it is to track product reviews. My sales have increased, and I now have a community of loyal customers who trust my brand.',
    author: 'Jessica T.',
  },
  {
    id: 1122343,
    content:
      "Sampli has completely transformed how I gather feedback on my products. The ability to send items to samplers and receive detailed video reviews has been invaluable. I've seen a significant increase in customer engagement and sales!",
    author: 'Jessica T.',
  },
  {
    id: 2123123213,
    content:
      'As a small business owner, I was looking for an effective way to showcase my products. With Sampli, I can create campaigns that connect me directly with reviewers. The insights I gain from their feedback help me improve my offerings and reach more customers.',
    author: 'Jessica T.',
  },
  {
    id: 2342343,
    content:
      'Using Sampli has been a game-changer for my online store. The integration with Shopify is seamless, and I love how easy it is to track product reviews. My sales have increased, and I now have a community of loyal customers who trust my brand.',
    author: 'Jessica T.',
  },
];

function TestimonialCarousel() {
  return (
    <div className="max-w-[95%] relative">
      <div className="gradient-ellipse"></div>
      <SectionHeader
        tag="Testimonials"
        title="Real Results, Real Stories"
        subTitle={`Hear from our satisfied users about their experiences with Sampli.`}
      />
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={12}
        // slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
        className="w-full swipe !my-0"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card className="w-full p-4 backdrop-blur-2xl bg-transparent transition-shadow duration-300">
            <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.05}
                  />
              <CardContent>
                <p className="text-base  text-gray-700">
                  {testimonial.content.slice(0, 200) || 0}
                </p>
              </CardContent>
              <CardFooter className="mt-4 gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <p className="font-semibold text-gray-900">
                  - {testimonial.author}
                </p>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialCarousel;
