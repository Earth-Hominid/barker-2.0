import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
  p-10
  text-xl
  min-h-screen
  bg-stone-200
  dark:bg-[#1a1a1a]
  text-rose-600
  dark:text-rose-300
`;

export const MainText = tw.h1`
  text-stone-800
  dark:text-rose-300
  font-bold
`;

export const ParagraphText = tw.p`
  text-stone-500
  dark:text-stone-400
  mb-2
`;

export const LinkText = tw.p`
  font-bold
  underline
  cursor-pointer
  text-stone-600
  hover:text-blue-500
  dark:text-stone-400
  dark:hover:text-blue-300
`;

export const IconHolder = tw.div`
  h-6 
  w-6
`;
