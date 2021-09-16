import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
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
