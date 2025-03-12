import { GlowingEffect } from '@/components/ui/glowing-effect';
import Image from 'next/image';
import React from 'react';

function FeaturesCard(item) {
  console.log(item);

  return (
    <div className="relative h-full shadow-lg flex p-6 md:border-none border-2 rounded-3xl items-start justify-between flex-col">
      <div className="gradient-ellipse z-[-1]"></div>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.05}
      />
      {item?.image && (
        <Image
          src={item?.image}
          width={1200}
          height={1200}
          className="w-full object-contain h-64"
          alt="sampli"
        />
      )}
      <div>
        <h1 className="text-[#2863FA] text-2xl md:text-3xl font-semibold">
          {item?.title}
        </h1>
        <h1 className="text-sm text-[var(--text-gray-100)]">
          {item?.description}
        </h1>
      </div>
    </div>
  );
}

export default FeaturesCard;
