import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  dark:bg-stone-800
  bg-white
  w-full
`;

export const InsideContainer = tw.div`
  flex
  flex-row
  items-center
  py-1
  pr-2
  md:px-0
  top-0
  justify-between 
  max-w-7xl 
  mx-auto
`;

export const IconContainer = tw.div`
  flex
  flex-row
  flex-1
  w-full
  items-center
  text-lg
  space-x-3
  md:space-x-2
  lg:space-x-5
  justify-end
  md:pr-5
  dark:text-slate-300
  text-gray-800
`;

export const RelativeContainer = tw.div`
  relative
  group
`;

export const AbsoluteContainer = tw.div`
  hidden
  group-hover:flex
  blur-sm
  absolute
  rounded-full
  -inset-0.5
  dark:bg-stone-500
  bg-stone-600
  opacity-90
  group-hover:opacity-100
  transition
  group-hover:duration-300
  duration-500
`;

export const AbsoluteRectangle = tw.div`
  hidden
  group-hover:flex
  blur-sm
  absolute
  rounded-md
  -inset-0.5
  dark:bg-stone-500
  bg-stone-600
  opacity-90
  group-hover:opacity-100
  transition
  group-hover:duration-300
  duration-500
`;

export const IconLink = tw.a`
  text-stone-600 
  dark:text-stone-400
  dark:hover:text-[#EADEB9]
  w-5
  h-5
  md:h-6
  md:w-6
`;

export const IconHolder = tw.div`
  text-stone-600 
  dark:text-stone-400
  dark:hover:text-[#EADEB9]
  w-5
  h-5
  md:w-6
  md:h-6
`;

export const StyledButton = tw.button`
  relative  
  group
dark:bg-stone-900
dark:hover:border-stone-500
dark:hover:text-[#EADEB9]
bg-stone-200
  rounded-full
  p-2
  flex
  items-center
  justify-center
  border
  border-transparent
hover:border-stone-500
hover:text-stone-500
  transition-all
  duration-300
  ease-linear
  shadow-lg
`;

export const StyledTextButton = tw.button`
  hidden
  relative  
  group
  text-stone-600 
  dark:text-stone-400
  dark:hover:text-[#EADEB9]
dark:bg-stone-900
dark:hover:border-stone-500
bg-stone-200
  rounded-md
  p-2
  md:flex
  items-center
  justify-center
  border
  border-transparent
hover:border-stone-500
hover:text-stone-500
  transition-all
  duration-300
  ease-linear
  shadow-lg
  text-sm
   whitespace-nowrap
  `;

export const HeaderSpan = tw.span`
  absolute 
  group-hover:scale-100
  w-auto 
  p-2 
  m-2 
  min-w-max 
  top-12
  rounded-md
  shadow-md 
  text-slate-200 
  bg-stone-700 
  dark:bg-[#23272F]
  text-xs 
  font-bold 
  transition-all 
  duration-150 
  scale-0 
  origin-bottom
`;

export const ButtonContainer = tw.div`
items-center space-x-2 mx-5 hidden md:inline-flex
`;

export const HamburgerContainer = tw.div`
 md:hidden
`;

export const LoginButtonLink = tw.button`
  hidden md:inline-flex
  border-2
  whitespace-nowrap
  bg-[#EADEB9]
  text-[#605649]
  dark:hover:text-[#EADEB9]
  hover:border-[#605649]
  border-[#EADEB9]
  dark:hover:border-[#EADEB9]
  dark:hover:bg-transparent
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:bg-transparent
  hover:border-2
  transition
  duration-300
  ease-in-out
  text-sm
  font-semibold
`;

export const LogoutButtonLink = tw.button`
  hidden md:inline-flex
  whitespace-nowrap
  border-2
  text-white
  bg-rose-500
  border-rose-500
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-rose-600
  hover:bg-rose-50
  hover:border-2
  transition
  duration-300
  ease-in-out
  text-sm
`;

export const ButtonLink = tw.button`
whitespace-nowrap
flex-1
  text-stone-700
  hover:text-indigo-600
  hidden 
  md:inline-flex 
  hover:bg-transparent
  px-2 
  py-1 
  rounded-lg
  cursor-pointer
  hover:border-indigo-600
  border-transparent
  border-2
  hover:border-2
  duration-300
  transition
  ease-in-out
  text-sm
`;
