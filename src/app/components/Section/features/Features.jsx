import React from 'react';
import FeaturesCard from '../../ui/FeaturesCard';
import img1 from '../../../Assets/featuresImage/img1.svg';
import img2 from '../../../Assets/featuresImage/img2.svg';
import img3 from '../../../Assets/featuresImage/img3.svg';
import img4 from '../../../Assets/featuresImage/img4.svg';
import SectionHeader from '../../shared/SectionHeader';

const featuresData = [
  {
    image: img1,
    title: 'Targeted Campaigns',
    description: 'Precision targeting for your ideal customer demographic',
  },
  {
    image: img2,
    title: 'Verified Reviewers',
    description: 'Authentic feedback from a curated network of product testers',
  },
  {
    image: img3,
    title: 'E-commerce Integration',
    description:
      'Seamless Shopify and marketplace integrations to expand your reach',
  },
  {
    image: img4,
    title: 'Advanced Analytics',
    description:
      'Deep insights into product performance, sentiment, and customer feedback',
  },
];

function Features() {
  return (
    <div className="px-2 flex items-center flex-col justify-center area-xl">
      <SectionHeader
        title="Powerful Features Built for Business"
        subTitle={`Sampli provides a comprehensive suite of tools to help you understand your product's true market potential.`}
        tag="Made for you"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {featuresData.map((item, idx) => (
          <FeaturesCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Features;
