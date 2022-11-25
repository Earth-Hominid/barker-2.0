import Link from 'next/link';
import { useState } from 'react';

import {
  ComputerDesktopIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';

import MenuList from './MenuList';

import { MenuContainer, MenuHeader, ButtonHolder, IconHolder } from './Styles';

const DropdownMenu = () => {
  const [user, setUser] = useState(false);

  return (
    <MenuContainer>
      {user ? (
        <>
          <Link href="#">
            <ButtonHolder>
              <IconHolder>
                <DocumentPlusIcon />
              </IconHolder>
              <p className="ml-1">Create a forum</p>
            </ButtonHolder>
          </Link>

          <Link href="">
            <ButtonHolder>
              <IconHolder>
                <ComputerDesktopIcon />
              </IconHolder>
              <p className="ml-1">Your account</p>
            </ButtonHolder>
          </Link>
        </>
      ) : (
        <></>
      )}
      <MenuHeader>Feeds</MenuHeader>
      <Link href="">
        <ButtonHolder>
          <p className="ml-1">Forums</p>
        </ButtonHolder>
      </Link>
      {user ? (
        <>
          <Link href="">
            <ButtonHolder>
              <p className="ml-1">Your Posts</p>
            </ButtonHolder>
          </Link>
        </>
      ) : (
        <></>
      )}
      <MenuList />
      <MenuHeader>barker</MenuHeader>
      <Link href="/about">
        <ButtonHolder>
          <p className="ml-1">About</p>
        </ButtonHolder>
      </Link>
    </MenuContainer>
  );
};

export default DropdownMenu;
