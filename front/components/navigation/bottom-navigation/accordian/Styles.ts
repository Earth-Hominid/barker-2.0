import tw from 'tailwind-styled-components';

export const AccordianContainer = tw.div`
  mx-1
  border-solid
  border-t-[0.1rem]
  border-[#e2e8f0]
  dark:border-black 
  py-[0.5rem]
`;

export const AccordianSummary = tw.summary`
  flex
  items-center
  h-[2rem]
  cursor-pointer
  list-none
  ml-4
  mr-2
  text-color-[#475569]
`;

export const SummaryTitle = tw.h2`
  text-zinc-600
   dark:text-stone-400
  font-regular
  flex
  flex-1
`;

export const AccordianContentContainer = tw.div`
  my-[0.5rem]
  ml-[1.5rem]
  break-words
  cursor-pointer
  `;

export const AccordianText = tw.p`
  p-2
  text-sm
  text-gray-600
  dark:text-[#EADEB9]
  tracking-normal
  leading-6
  hover:bg-yellow-100
  dark:hover:bg-stone-900
  rounded-md
`;

export const IconHolder = tw.div`
  h-6
  w-6 
  p-1
  text-gray-600
  dark:text-stone-400
  hover:bg-stone-200 
  rounded-3xl
  dark:hover:bg-stone-700
`;
