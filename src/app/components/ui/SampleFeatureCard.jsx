import Image from 'next/image';
import React from 'react';

function SampleFeatureCard(item) {
  console.log(item?.index);
  return (
    <div
      className={`${
        item?.spacing
          ? 'relative h-full'
          : 'relative h-full shadow-lg overflow-hidden flex md:border-none border-2 rounded-3xl items-start justify-between flex-col'
      }`}
    >
      <div className="gradient-ellipse z-[-1]"></div>
      {item?.image && (
        <Image
          src={item?.image}
          width={1200}
          height={1200}
          className={item?.style}
          alt="sampli"
        />
      )}
      <div className="p-6  justify-end h-full items-start flex flex-col">
        <h1 className="text-[#FD8240] text-2xl md:text-3xl font-semibold">
          {item?.title}
        </h1>
        <h1 className="text-base leading-7 tracking-wider text-[var(--text-gray-100)]">
          {item?.description}
        </h1>
      </div>
    </div>
  );
}

export default SampleFeatureCard;
