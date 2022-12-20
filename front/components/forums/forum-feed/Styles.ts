import tw from 'tailwind-styled-components';

export const ButtonHolder = tw.div`
  flex 
  flex-row
  text-stone-600
  hover:bg-[#EADEB9]
  hover:text-[#605649]
  dark:text-stone-400
  dark:hover:bg-stone-900
  cursor-pointer
  w-full
  rounded-md
  items-center
  p-2
`;
