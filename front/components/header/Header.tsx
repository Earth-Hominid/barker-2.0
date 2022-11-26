import { useState } from 'react';
import TopNavigation from '../navigation/top-navigation/TopNavigation';
import BottomNavigation from '../navigation/bottom-navigation/BottomNavigation';

interface Props {}

interface DarkModeContextType {
  darkMode: boolean | null;
  handleToggleThemeClick: Function;
}

const Header = ({ handleToggleThemeClick, darkMode }: DarkModeContextType) => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
      setIsOpen(navigationMenuToggle);
    } else {
      setNavigationMenuToggle(true);
      setIsOpen(navigationMenuToggle);
    }
  };

  const handleNavigationMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    toggleNavigationButton();
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <TopNavigation
        handleNavigationMenuClick={handleNavigationMenuClick}
        navigationMenuToggle={navigationMenuToggle}
        handleToggleThemeClick={handleToggleThemeClick}
        darkMode={darkMode!}
      />
      {navigationMenuToggle ? (
        <BottomNavigation toggleNavigationButton={toggleNavigationButton} />
      ) : (
        ''
      )}
    </>
  );
};

export default Header;
