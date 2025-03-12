import PageHeader from '@/app/components/shared/PageHeader';
import React from 'react';

function page() {
  return (
    <div>
      <PageHeader
        title={'Cookies Policy'}
        subTitle={'Last updated:04/05/2022'}
      />
      <div className="area-xl"></div>
    </div>
  );
}

export default page;
