import { motion } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';

import Logo from '../logo/Logo';
import DropdownContainer from './drop-down-menu/DropdownContainer';

import {
  MainContainer,
  InsideContainer,
  LogoText,
  LinkText,
  IconContainer,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  HeaderSpan,
} from './Styles';

function TopNavigation({
  handleNavigationMenuClick,
  navigationMenuToggle,
  handleToggleThemeClick,
  darkMode,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
  handleToggleThemeClick: Function;
  darkMode: boolean;
}) {
  return (
    <MainContainer>
      <InsideContainer>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <Logo />
          <DropdownContainer />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <IconContainer>
            <a href="#projects">
              <LinkText className="hidden md:flex">My Work</LinkText>
            </a>
            <a href="#contact">
              <LinkText className="hidden md:flex">Get in touch</LinkText>
            </a>
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton onClick={handleToggleThemeClick}>
                {darkMode ? (
                  <>
                    <MoonIcon className="h-7 w-7" />
                    <HeaderSpan>Light Mode</HeaderSpan>
                  </>
                ) : (
                  <>
                    <SunIcon className="h-7 w-7" />
                    <HeaderSpan>Dark Mode</HeaderSpan>
                  </>
                )}
              </StyledButton>
            </RelativeContainer>
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton
                onClick={handleNavigationMenuClick}
                className="md:hidden"
              >
                {navigationMenuToggle ? (
                  <XMarkIcon className="h-7 w-7" />
                ) : (
                  <Bars3Icon className="h-7 w-7" />
                )}
              </StyledButton>
            </RelativeContainer>
          </IconContainer>
        </motion.div>
      </InsideContainer>
    </MainContainer>
  );
}

export default TopNavigation;
