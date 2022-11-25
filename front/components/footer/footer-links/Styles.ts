import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  bg-stone-300
  dark:bg-[#0E141B]
  w-full
  border-t
  border-zinc-600
`;

export const InsideContainer = tw.div`
  p-5
  space-y-6
`;

export const SmallText = tw.p`
  text-xs
  text-stone-700
  text-center
`;

export const IconContainer = tw.div`
  flex 
  items-center 
  justify-center
`;

export const IconHolder = tw.div`
  relative
  group
  pb-5
  text-stone-800
`;

export const HeaderSpan = tw.span`
  absolute 
  group-hover:scale-100
  w-auto 
  p-2 
  m-2 
  min-w-max 
  bottom-3
  left-10
  md:bottom-4
  rounded-md
  shadow-md 
  text-slate-200 
  bg-stone-800 
  text-xs 
  font-bold 
  transition-all 
  duration-300 
  scale-0 
  origin-left
`;
