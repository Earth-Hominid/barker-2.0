import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';

const LightLogo = require('@/public/logo-light.png');
const DarkLogo = require('@/public/logo-dark.png');

import { ImageContainer } from './Styles';

const Logo = () => {
  const { darkMode } = useContext(DarkContext);
  return (
    <>
      <Link href={'/'}>
        <ImageContainer>
          <Image src={LightLogo} alt="barker logo" priority={true} />
        </ImageContainer>
      </Link>
    </>
  );
};

export default Logo;
