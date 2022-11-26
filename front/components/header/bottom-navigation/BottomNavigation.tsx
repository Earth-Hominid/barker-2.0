import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuAccordian from './accordian/MenuAccordian';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

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
      <ActionButtonHolder></ActionButtonHolder>
    </BottomNavigationMenu>
  );
}

export default BottomNavigation;
