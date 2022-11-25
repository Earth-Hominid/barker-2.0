import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  flex 
  flex-row
`;

export const SubContainer = tw.div`
  flex 
  flex-row 
  items-center
  space-x-2
  lg:mx-6
  lg:min-w-[150px]
  relative
  cursor-pointer
  hover:border
  hover:border-stone-400
  border
  border-transparent
  rounded-md
  p-2
`;

export const HomeText = tw.p`
  flex-1
  hidden
  ml-2
  md:inline
  text-stone-600
  dark:text-stone-400
  font-bold
`;

export const LargeIconHolder = tw.div`
text-stone-500
dark:text-stone-400
  w-6 h-6 
  md:h-8
  md:w-8
`;

export const IconHolder = tw.div`
  h-4 
  w-4
  text-stone-500
  dark:text-stone-400
  rounded-3xl
`;

export const MenuContainer = tw.div`
  flex
  flex-col
  dark:bg:-[#0E141B]
  bg-white
  dark:bg-stone-800
  border
  border-zinc-400
  dark:border-zinc-200
  absolute
  max-w-xl
  min-w-[200px]
  top-14
  md:top-16
  rounded-md
  space-y-1
  p-2
  text-[Roboto]
`;

export const MenuHeader = tw.div`
  mt-3
  text-sm
  text-stone-500
  p-1
`;

export const ButtonHolder = tw.div`
  flex 
  flex-row
  text-stone-600
  hover:bg-stone-200
  dark:text-stone-400
  dark:hover:bg-stone-900
  cursor-pointer
  w-full
  rounded-md
  items-center
  p-2
`;

export const LoadingText = tw.p`
  text-gray-400
  font-semibold
  text-xs`;

export const ErrorText = tw.p`
  text-rose-500
  font-semibold
  text-xs`;
