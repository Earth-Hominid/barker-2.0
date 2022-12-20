import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
 w-full
 flex
 flex-col
 relative
 bg-stone-200
 dark:bg-[#1a1a1a]
 min-h-screen
 py-20
`;

export const TextContainer = tw.div`
  m-10
  sm:mx-12
  sm:mt-8
  md:mx-20
  md:mt-8
  lg:mx-40
`;

export const HeadingText = tw.h1`
  text-3xl
  md:text-4xl
  lg:text-6xl
  font-extrabold
  leading-tight
  font-tinos
  text-gray-900
  dark:text-gray-200
  tracking-wide
  text-center
`;

export const SubheadingText = tw.h2`
  text-gray-600
  dark:text-gray-200
  font-montserrat
  leading-relaxed
  tracking-wide
  md:mt-10
  lg:mt-12
  my-5
  text-left
  text-lg
`;
