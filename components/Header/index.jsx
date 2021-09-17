import React from 'react';
import Image from 'next/image';

import { HeaderItem } from '../HeaderItem';
import { navigationData } from '../../devData/navigation';

export const Header = () => {
  return (
    <header>
      <div>
        {navigationData.map((item, index) => {
          return <HeaderItem key={index} title={item.title} Icon={item.icon} />;
        })}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="logo hulu pic"
        width={200}
        height={100}
      />
    </header>
  );
};
