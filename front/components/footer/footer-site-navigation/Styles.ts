import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  w-full
  bg-stone-300
  dark:bg-[#0E141B]
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
  text-stone-700
  cursor-pointer
  min-w-[200px]
`;

export const LinkText = tw.h4`
  text-base
  font-opensans
  font-semibold
  tracking-wide
`;
