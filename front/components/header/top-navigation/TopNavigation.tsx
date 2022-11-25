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
  IconLink,
  IconHolder,
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
          <IconContainer className="md:hidden">
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton>
                <IconLink href="#">
                  <BuildingLibraryIcon />
                </IconLink>
                <HeaderSpan>All Barks</HeaderSpan>
              </StyledButton>
            </RelativeContainer>
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton>
                <IconLink href="#">
                  <ChatBubbleBottomCenterTextIcon />
                </IconLink>
                <HeaderSpan>Create Bark</HeaderSpan>
              </StyledButton>
            </RelativeContainer>
            <RelativeContainer>
              <AbsoluteContainer></AbsoluteContainer>
              <StyledButton onClick={handleToggleThemeClick}>
                {darkMode ? (
                  <>
                    <IconHolder>
                      <MoonIcon />
                    </IconHolder>

                    <HeaderSpan>Light Mode</HeaderSpan>
                  </>
                ) : (
                  <>
                    <IconHolder>
                      <SunIcon />
                    </IconHolder>

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
          </IconContainer>
        </motion.div>
      </InsideContainer>
    </MainContainer>
  );
}

export default TopNavigation;
