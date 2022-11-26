import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  w-full
  bg-[#605649]
  dark:bg-stone-800
`;

export const InsideContainer = tw.div`
  flex
  flex-col
  mx-auto
  max-w-xs
  p-5
  space-y-4
  min-w-[350px]
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  space-x-2
  py-2
  text-2xl
  items-center
  justify-center
  text-[#EADEB9]
  cursor-pointer
  min-w-[200px]
`;

export const LinkText = tw.h4`
  text-base
  font-opensans
  font-semibold
  tracking-wide
`;
