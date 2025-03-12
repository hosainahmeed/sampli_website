import React from 'react';

function Card({ item }) {
  
  return (
    <div
      className={` p-8 rounded-3xl bg-gradient-to-tr ${item?.gradient_color} shadow-sm  bg-white`}
    >
      <div className="flex-start-start flex-col gap-4">
        <h1 className="text-[#FD8240] font-semibold capitalize text-3xl">{item?.icon}</h1>
        <h1 className="text-xl text-[#FD8240] font-semibold capitalize">{item?.title}</h1>
        <p className="text-base text-[var(--text-gray-100)]">{item?.text}</p>
      </div>
    </div>
  );
}

export default Card;
