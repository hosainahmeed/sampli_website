import React from 'react';
import SectionHeader from '../../shared/SectionHeader';
import { Button } from '@/components/ui/button';

function Pricing() {
  const pricingData = [
    {
      pricing: 'Image Review: $15 per review',
    },
    {
      pricing: 'Video Review: $30 per review',
    },
    {
      pricing: 'Platform Fee: 15% of total',
    },
  ];

  return (
    <div className="w-full  backdrop-blur-2xl bg-transparent  px-4 md:px-8 lg:px-16">
      <SectionHeader
        tag="Pricing"
        title="Flexible Pay-As-You-Go Pricing"
        subTitle="We believe in complete openness. With Sampli, you'll see:"
      />

      <div className=" flex flex-col bg-gradient-to-tr from-[red]/10 via-[#fff] to-[blue]/10 md:flex-row items-center justify-between border shadow rounded-3xl p-6 md:p-12 gap-6">
        {/* Pricing Breakdown */}
        <div className="flex  flex-col items-start w-full md:w-1/2 space-y-4">
          <h1 className="text-gray-900 text-2xl font-bold">
            Pricing Breakdown
          </h1>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {pricingData.map((item, idx) => (
              <li key={idx} className="ml-2">
                {item?.pricing}
              </li>
            ))}
          </ul>
          <Button className="border-blue-600 mt-4 px-6 py-2 text-blue-600 hover:bg-blue-600 hover:text-white border-2 bg-transparent rounded-lg">
            Get Started
          </Button>
        </div>

        {/* Enterprise Solutions */}
        <div className="backdrop-blur-3xl bg-transparent shadow-lg p-6 md:p-8 rounded-2xl text-center w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Enterprise Solutions
          </h1>
          <p className="text-gray-700 mt-2">
            Need a custom solution for your business?
          </p>
          <Button className="mt-4 px-6 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Contact Us
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            No Monthly Charges • No Contracts • Flexible Pricing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
