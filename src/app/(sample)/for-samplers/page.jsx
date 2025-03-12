import FrequentlyAskedQuestions from '@/app/components/Section/pricing/Frequently Asked Questions/FrequentlyAskedQuestions';
import SampleBanner from '@/app/components/Section/Sample-Section/SampleBanner';
import SampleFeature from '@/app/components/Section/Sample-Section/SampleFeature';
import SampleRegisterProvider from '@/app/components/Section/Sample-Section/SampleRegisterProvider';
import TestimonialCarousel from '@/app/components/Section/testomonials/TestimonialCarousel';
import BrandShowcase from '@/app/components/ui/BrandShowcase';
import InfluenceSection from '@/app/components/ui/InfluenceSection';
import ReviewsRewards from '@/app/components/ui/ReviewsRewards';
import React from 'react';

function page() {
  return (
    <div className="flex px-2 area-xl items-center justify-center flex-col gap-24">
      <SampleBanner />
      <BrandShowcase />
      <SampleFeature />
      <ReviewsRewards />
      <InfluenceSection />
      <TestimonialCarousel />
      <FrequentlyAskedQuestions />
      <SampleRegisterProvider />
    </div>
  );
}

export default page;
