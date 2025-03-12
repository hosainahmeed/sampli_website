import React from 'react';
import Image from 'next/image';
import heroImage from '../../../../public/hero.png';
import { Spotlight } from '@/components/ui/Spotlight';
import { Button } from '@/components/ui/button';

function LandingPage() {
  return (
    <div className=" px-2 pt-12 md:pt-28 ellipse-shadow flex items-center justify-center flex-col gap-6">
      <div className="area-md text-center">
        <h1 className="text-2xl text-big-black mb-6 font-bold leading-none">
          Turn Product Reviews into <span>Powerful Sales Drivers</span>
        </h1>
        <p className="text-xs mt-2 md:text-xl">
          Connect with genuine reviewers, get authentic video reviews, and boost
          your sales through trusted user-generated content.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <Button className="bg-[#2E78E9] hover:bg-[#2E78E9] px-[14px] py-[24px] md:text-[18px]">
          Launch your campaign
        </Button>
        <small className="text-xs md:text-base mt-3">
           No credit card required
        </small>
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 !opacity-50 md:-top-20"
        fill="blue"
      />

      <div className="px-2 relative  h-[500px] md:h-[586px] overflow-hidden p-2 border-b-transparent border-b-0 rounded-bl-none rounded-br-none md:border-[1px] border-white rounded-3xl">
        <div className="absolute bottom-0 w-full h-2/4 md:h-1/4 bg-gradient-to-t to-transparent via-white/90 from-[#F8F8F8] left-0"></div>

        <Image
          placeholder="blur"
          className="h-full rounded-3xl object-contain md:object-cover object-top"
          src={heroImage}
          loading='lazy'
          // blurDataURL={heroImage}
          width={1000}
          height={586}
          alt="sampli"
        />
      </div>
    </div>
  );
}

export default LandingPage;
