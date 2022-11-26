import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuAccordian from './accordian/MenuAccordian';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

import SearchBar from '../searchbar/Searchbar';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  ThemeButton,
  IconWrap,
  NavigationMenu,
  LogoutButtonLink,
  ButtonLink,
  SignUpButtonLink,
  CreateSubforumButton,
  CreatePostButton,
  DashboardButton,
  DemoAccountButton,
} from './Styles';

function BottomNavigation({
  toggleNavigationButton,
}: {
  toggleNavigationButton: Function;
}) {
  const subforumObject = {
    title: 'All howls',
    datapoints: [
      { name: 'Nutrition', id: '1', url: 'subforum/nutrition' },
      { name: 'World News', id: '2', url: 'subforum/worldnews' },
      { name: 'Finance', id: '3', url: 'subforum/finance' },
    ],
  };

  const popularSubforumObject = {
    title: 'Popular howls',
    datapoints: [
      {
        name: 'Programming',
        id: '1',
        url: 'subforum/programming',
      },
      { name: 'CS Careers', id: '1', url: 'subforum/cscareers' },
      { name: 'Programmer Humor', id: '1', url: 'subforum/programmerhumor' },
    ],
  };

  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <SearchBar />
      </ActionButtonHolder>
      <ActionButtonHolder>
        <DemoAccountButton>Demo Account</DemoAccountButton>
        <ButtonLink>Already a member?</ButtonLink>
        <SignUpButtonLink>Login</SignUpButtonLink>
      </ActionButtonHolder>
      <NavigationMenu>
        <MenuAccordian props={subforumObject} />
        <MenuAccordian props={popularSubforumObject} />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
}

export default BottomNavigation;
