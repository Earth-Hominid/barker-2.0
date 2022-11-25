import React, { useRef, useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

import { HomeModernIcon } from '@heroicons/react/24/outline';

interface RefObject<T> {
  readonly current: T | null;
}

import {
  MainContainer,
  SubContainer,
  HomeText,
  LargeIconHolder,
  IconHolder,
} from './Styles';

const DropdownContainer = () => {
  const dropdownRef = useRef<HTMLInputElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const open = () => setOpenMenu(true);
  const close = () => setOpenMenu(false);

  const handleMenuClick = () => {
    if (openMenu) {
      close();
    } else {
      open();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', toggle);
    return () => {
      document.removeEventListener('mousedown', toggle);
    };
  }, []);

  const toggle = (e: MouseEvent) => {
    const { current } = dropdownRef;
    if (current && !current.contains(e.target as Node)) {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <MainContainer ref={dropdownRef}>
        <SubContainer onClick={handleMenuClick}>
          <LargeIconHolder>
            <HomeModernIcon />
          </LargeIconHolder>
          <HomeText>dog-house</HomeText>
          {openMenu ? (
            <IconHolder>
              <ChevronDownIcon />
            </IconHolder>
          ) : (
            <IconHolder>
              <ChevronRightIcon />
            </IconHolder>
          )}
        </SubContainer>
        {openMenu ? <DropdownMenu /> : ''}
      </MainContainer>
    </>
  );
};

export default DropdownContainer;
