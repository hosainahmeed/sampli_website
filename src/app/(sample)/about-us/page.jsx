import RegisterReffer from '@/app/components/Section/RegisterReffer/RegisterReffer';
import ContactUs from '@/app/components/Section/Sample-Section/conditionsSections/ContactUs';
import PageHeader from '@/app/components/shared/PageHeader';
import React from 'react';

function page() {
  return (
    <div>
      <PageHeader title={'About Us'} subTitle={'We’ll love to hear from you'} />
      <div className='area-xl'>
        <ContactUs />
        <RegisterReffer />
      </div>
    </div>
  );
}

export default page;
