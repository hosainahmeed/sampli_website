import React from 'react';

function PageHeader({ title, subTitle }) {
  return (
    <div className="bg-[#4176FC0D] relative px-2 overflow-hidden">
      <div className="area-xl   py-16 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-semibold  md:text-left mb-4">
          {title}
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl  md:text-left">
          {subTitle}
        </h2>
      </div>

      <div className="gradient-ellipse-v2  w-full h-full z-[-1]"></div>
    </div>
  );
}

export default PageHeader;
