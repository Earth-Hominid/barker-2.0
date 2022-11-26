import React, { useRef, useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface RefObject<T> {
  readonly current: T | null;
}

import {
  MainContainer,
  InsideContainer,
  IconLink,
  IconContainer,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  TextButton,
  HeaderSpan,
  ButtonLink,
  SignUpButtonLink,
  LoginButtonLink,
  LogoutButtonLink,
  IconHolder,
} from './Styles';

const HamburgerDropdown = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) => {
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
      <RelativeContainer>
        <AbsoluteContainer></AbsoluteContainer>
        <StyledButton onClick={handleNavigationMenuClick} className="md:hidden">
          {navigationMenuToggle ? (
            <IconHolder>
              <XMarkIcon />
            </IconHolder>
          ) : (
            <IconHolder>
              <Bars3Icon />
            </IconHolder>
          )}
        </StyledButton>
      </RelativeContainer>
      <MainContainer ref={dropdownRef}>
        {openMenu ? <DropdownMenu /> : ''}
      </MainContainer>
    </>
  );
};

export default HamburgerDropdown;
