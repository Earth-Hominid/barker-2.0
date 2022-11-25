import Link from 'next/link';

import {
  XMarkIcon,
  Bars3Icon,
  FireIcon,
  ChatBubbleLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  UsersIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';

import {
  ButtonContainer,
  HamburgerContainer,
  ExtendedContainer,
  ButtonLink,
  SignUpButtonLink,
  OrangeIconWrap,
  BlueIconWrap,
  SkyIconWrap,
  GreenIconWrap,
  IndigoIconWrap,
  LogoutButtonLink,
  CyanIconWrap,
} from './Styles';

const NavigationButtonContainer = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
  signOut,
  session,
  signIn,
}) => {
  return (
    <>
      <ExtendedContainer>
        <ButtonContainer>
          <OrangeIconWrap>
            <FireIcon />
          </OrangeIconWrap>
          <Link href="/create/howl">
            <BlueIconWrap>
              <ChatBubbleBottomCenterTextIcon />
            </BlueIconWrap>
          </Link>
          <Link href="/">
            <IndigoIconWrap>
              <ChatBubbleLeftIcon />
            </IndigoIconWrap>
          </Link>
          <Link href="/subforums/all">
            <SkyIconWrap>
              <BuildingLibraryIcon />
            </SkyIconWrap>
          </Link>
          <Link href="/users">
            <CyanIconWrap>
              <UsersIcon />
            </CyanIconWrap>
          </Link>
        </ButtonContainer>

        {session ? (
          <>
            <LogoutButtonLink onClick={signOut}>Logout</LogoutButtonLink>
            <ButtonLink>
              <Link href="/dashboard">
                <div className="text-xs flex-1">
                  <a>
                    <p className="truncate">{session?.user?.name}</p>
                    <p className="text-gray-400">is awesome!</p>
                  </a>
                </div>
              </Link>
            </ButtonLink>
          </>
        ) : (
          <>
            <ButtonLink>Demo Account</ButtonLink>
            <SignUpButtonLink onClick={signIn}>Sign in</SignUpButtonLink>
          </>
        )}

        <HamburgerContainer>
          {navigationMenuToggle ? (
            <XMarkIcon className="icon" onClick={handleNavigationMenuClick} />
          ) : (
            <Bars3Icon className="icon" onClick={handleNavigationMenuClick} />
          )}
        </HamburgerContainer>
      </ExtendedContainer>
    </>
  );
};

export default NavigationButtonContainer;
