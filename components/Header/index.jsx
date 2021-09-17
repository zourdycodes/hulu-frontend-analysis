import React from 'react';
import Image from 'next/image';

import { HeaderItem } from '../HeaderItem';
import { navigationData } from '../../devData/navigation';

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
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
