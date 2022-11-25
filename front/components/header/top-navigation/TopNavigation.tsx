import { motion } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  FireIcon,
  ChatBubbleLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  UsersIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';

import Logo from '../logo/Logo';
import DropdownContainer from './drop-down-menu/DropdownContainer';

import {
  MainContainer,
  InsideContainer,
  LinkText,
  IconContainer,
  RelativeContainer,
  AbsoluteContainer,
  StyledButton,
  HeaderSpan,
  ButtonContainer,
  HamburgerContainer,
  ButtonLink,
  SignUpButtonLink,
  OrangeIconWrap,
  BlueIconWrap,
  SkyIconWrap,
  IndigoIconWrap,
  LogoutButtonLink,
  CyanIconWrap,
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
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton>
                <a href="#">
                  <BuildingLibraryIcon className="h-5 w-5 text-stone-600" />
                </a>
                <HeaderSpan>All Barks</HeaderSpan>
              </StyledButton>
            </RelativeContainer>
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton>
                <a href="#">
                  <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-stone-600" />
                </a>
                <HeaderSpan>Create Bark</HeaderSpan>
              </StyledButton>
            </RelativeContainer>
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton onClick={handleToggleThemeClick}>
                {darkMode ? (
                  <>
                    <MoonIcon className="h-6 w-6 text-stone-600" />
                    <HeaderSpan>Light Mode</HeaderSpan>
                  </>
                ) : (
                  <>
                    <SunIcon className="h-6 w-6 text-stone-600" />
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
                  <XMarkIcon className="h-6 w-6 text-stone-500" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-stone-500" />
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
