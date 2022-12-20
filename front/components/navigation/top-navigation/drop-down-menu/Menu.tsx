import Link from 'next/link';
import { useState } from 'react';
import ForumFeed from '@/components/forums/forum-feed/ForumFeed';

import {
  ComputerDesktopIcon,
  DocumentPlusIcon,
} from '@heroicons/react/24/outline';

import List from './List';

import { MenuContainer, MenuHeader, ButtonHolder, IconHolder } from './Styles';

const Menu = () => {
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
      <MenuHeader>Active Forums</MenuHeader>
      <ForumFeed />

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
      <List />
      <MenuHeader>barker</MenuHeader>
      <Link href="/about">
        <ButtonHolder>
          <p className="ml-1">About</p>
        </ButtonHolder>
      </Link>
    </MenuContainer>
  );
};

export default Menu;
