import tw from 'tailwind-styled-components';

export const BottomNavigationMenu = tw.div`
 flex 
 justify-between 
 flex-col 
 w-full
 md:hidden
 bg-white
 dark:bg-[#16181D]
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  space-x-2
  px-3
  pt-12
  pb-4
  text-2xl
  justify-center
  text-gray-800
`;

export const LinkText = tw.h4`
  text-black
  dark:text-gray-200
  dark:hover:text-blue-600
  hover:text-indigo-600
  cursor-pointer
`;
