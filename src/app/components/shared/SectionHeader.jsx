import React from 'react';

function SectionHeader({
  tag,
  title = 'Powerful Features Built for Business',
  subTitle = "Sampli provides a comprehensive suite of tools to help you understand your product's true market potential.",
}) {
  return (
    <div className="area-sm flex-center-center mb-6 text-center flex-col gap-4">
      {tag && (
        <h6 className=" uppercase text-base tracking-widest text-[var(--bg-blue-btn)]">
          {tag}
        </h6>
      )}
      {title && <h1 className="capitalize text-4xl font-semibold">{title}</h1>}
      {subTitle && (
        <p className="text-[18px] text-[var(--text-gray-100)]">{subTitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
