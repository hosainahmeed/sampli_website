import dynamic from 'next/dynamic';

import WorkProcess from '../components/Section/work-process/WorkProcess';
import TestimonialCarousel from '../components/Section/testomonials/TestimonialCarousel';
import Pricing from '../components/Section/pricing/Pricing';
import FrequentlyAskedQuestions from '../components/Section/pricing/Frequently Asked Questions/FrequentlyAskedQuestions';
import RegisterReffer from '../components/Section/RegisterReffer/RegisterReffer';
import Features from '../components/Section/features/Features';
import BrandShowcase from '../components/ui/BrandShowcase';
const LandingPage = dynamic(() => import('../components/Section/LandingPage'), {
  loading: () => <p>Loading...</p>,
});

function Page() {
  return (
    <div className="flex  items-center flex-col area-xl gap-24">
      <div className="heroPatarns">
        <LandingPage />
      </div>
      <BrandShowcase />
      <Features />
      <WorkProcess />
      <TestimonialCarousel />
      <Pricing />
      <FrequentlyAskedQuestions />
      <RegisterReffer />
    </div>
  );
}

export default Page;
