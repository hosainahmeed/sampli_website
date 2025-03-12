import React from 'react';
import sampleBannerImage from '../../../Assets/sample-Image/freature1.svg';
import Image from 'next/image';
import { Button } from 'antd';

function SampleBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-2 pt-12  gap-10 md:gap-16">
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start gap-6 text-left">
        <h1 className="text-3xl sm:text-4xl text-center md:text-start md:text-5xl font-semibold leading-tight">
          Get Paid to Review Products You Love
        </h1>
        <p className="text-base text-center md:text-start sm:text-lg text-gray-600">
          Join Sampli and become part of an exclusive community of product
          reviewers. Receive free products, create engaging video reviews, and
          earn money while sharing your authentic experiences.
        </p>
        <Button type="primary" className="px-6  py-6 text-lg w-fit md:w-auto">
          Start Earning Today
        </Button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <Image
          className="max-w-full h-auto object-cover"
          src={sampleBannerImage}
          width={1200}
          height={1200}
          alt="sampli"
          priority
        />
      </div>
    </div>
  );
}

export default SampleBanner;
