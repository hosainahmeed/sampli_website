import React from 'react';
import Icon from '../../Assets/icons/sampli.svg';
import Image from 'next/image';

function LogoIcon() {
  return (
    <div className='h-8 my-3'>
      <Image  className='w-fit h-full' src={Icon} alt="sampli" width={100} height={100} />
    </div>
  );
}

export default LogoIcon;
