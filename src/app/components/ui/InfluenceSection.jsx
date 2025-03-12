import Image from 'next/image';
import React from 'react';
import InfluenceImage from '../../Assets/sample-Image/InfluenceImage.svg';
function InfluenceSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 p-6 md:p-12  rounded-2xl shadow-lg">
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-[#2E78E9] font-extrabold text-3xl md:text-4xl leading-tight">
          Level Up Your Influence
        </h1>
        <p className="text-gray-700 text-sm md:text-lg">
          Transform your honest opinions into a steady stream of rewards. Our
          reviewers aren't just testing products – they're building their own
          micro-empires.
        </p>
        <ul className="list-disc list-inside text-gray-800 text-lg space-y-2 md:text-xl">
          <li>
            <span className="font-semibold text-sm md:text-base">
              Earn $20-$100 per thoughtful review
            </span>
          </li>
          <li>
            <span className="font-semibold text-sm md:text-base">
              Unlock performance bonuses
            </span>
          </li>
          <li>
            <span className="font-semibold text-sm md:text-base">
              Join exclusive reviewer events
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center h-64 ellipse-shadow ">
        <Image
          src={InfluenceImage}
          width={1000}
          height={1000}
          alt="Reviews Rewards"
          className="w-full object-contain h-full"
        />
      </div>
    </div>
  );
}

export default InfluenceSection;
