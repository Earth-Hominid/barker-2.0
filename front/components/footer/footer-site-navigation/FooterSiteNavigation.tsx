import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BuildingStorefrontIcon,
  MapIcon,
  MapPinIcon,
  ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';

import {
  MainContainer,
  InsideContainer,
  ActionButtonHolder,
  LinkText,
} from './Styles';

const FooterSiteNavigation = () => {
  return (
    <MainContainer>
      <InsideContainer>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="">
            <ActionButtonHolder>
              <BuildingStorefrontIcon className="h-5 w-5" />
              <LinkText>Link 1</LinkText>
            </ActionButtonHolder>
          </a>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ActionButtonHolder>
            <MapPinIcon className="h-5 w-5" />
            <LinkText>Link 2</LinkText>
          </ActionButtonHolder>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ActionButtonHolder>
            <MapIcon className="h-5 w-5" />
            <LinkText>Link 3</LinkText>
          </ActionButtonHolder>
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ActionButtonHolder>
            <ChatBubbleOvalLeftIcon className="h-5 w-5" />
            <LinkText>Link 4</LinkText>
          </ActionButtonHolder>
        </motion.button>
      </InsideContainer>
    </MainContainer>
  );
};

export default FooterSiteNavigation;
