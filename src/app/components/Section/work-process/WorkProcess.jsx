import React from 'react';
import SectionHeader from '../../shared/SectionHeader';
import Card from '../../ui/Card';
import { AiOutlineTag } from 'react-icons/ai';
import { CiDeliveryTruck } from 'react-icons/ci';
import { SiAwsorganizations } from 'react-icons/si';
function WorkProcess() {
  const datas = [
    {
      text: `Launch your campaign by defining your target audience and setting specific parameters to ensure you reach the right people.`,
      title: 'Create Campaign',
      icon: <AiOutlineTag />,
      gradient_color: 'bg-gradient-to-tr from-[#fff] via-[#fff] to-[red]/20 ',
    },
    {
      text: `Send your products to verified reviewers, and keep track of the shipment status to ensure timely delivery.`,
      title: 'Ship Products',
      icon: <CiDeliveryTruck />,
      gradient_color:
        ' bg-gradient-to-tr from-[#fff] via-[#fff] to-[#7AFA16]/20 ',
    },
    {
      text: `Receive comprehensive video reviews and actionable feedback, empowering you to make informed decisions.`,
      title: 'Gather Insights',
      icon: <SiAwsorganizations />,
      gradient_color: ' bg-gradient-to-tr from-[#fff] via-[#fff] to-[blue]/20 ',
    },
  ];
  return (
    <div>
      <SectionHeader
        tag="MADE FOR YOU"
        title="How Sampli Works"
        subTitle="Experience a seamless journey from campaign creation to insight gathering with Sampli!"
      />

      <div className="px-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {datas.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default WorkProcess;
