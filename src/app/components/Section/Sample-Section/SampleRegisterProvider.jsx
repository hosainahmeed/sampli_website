import { Button } from 'antd';
import React from 'react';

function SampleRegisterProvider() {
  return (
    <div className="bg-[#313C4D] relative mb-12 rounded-2xl w-full p-6 md:p-12 lg:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h1>
        <p className="tracking-wide max-w-md md:max-w-lg text-sm md:text-base leading-relaxed">
          Sign up today to access exclusive premium offers and earn money by
          sharing your reviews. Join our community and start making an impact
          with your insights!
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <Button
          className="px-6 py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          type="primary"
        >
          Get Started Now
        </Button>
      </div>
    </div>
  );
}

export default SampleRegisterProvider;
