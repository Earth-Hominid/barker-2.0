import Link from 'next/link';
import { motion } from 'framer-motion';
import { BottomNavigationMenu, ActionButtonHolder, LinkText } from './Styles';

function BottomNavigation({
  toggleNavigationButton,
}: {
  toggleNavigationButton: Function;
}) {
  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <Link href="#projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleNavigationButton()}
          >
            <LinkText>My Work</LinkText>
          </motion.button>
        </Link>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <Link href="#contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleNavigationButton()}
          >
            <LinkText> Contact</LinkText>
          </motion.button>
        </Link>
      </ActionButtonHolder>
    </BottomNavigationMenu>
  );
}

export default BottomNavigation;
