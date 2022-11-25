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
  space-x-5
  md:space-x-7
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

export const IconLink = tw.a`
  text-stone-600 
  dark:text-stone-400
  w-5
  h-5
`;

export const IconHolder = tw.div`
  text-stone-600 
  dark:text-stone-400
  w-5
  h-5
`;

export const StyledButton = tw.button`
  relative  
  group
dark:bg-stone-900
dark:hover:border-stone-500
dark:hover:text-stone-500
bg-stone-200
  rounded-full
  p-2
  mx-auto
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

export const SignUpButtonLink = tw.button`
  hidden md:inline-flex
  border-2
  text-white
  bg-sky-500
  border-sky-500
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-sky-600
  hover:bg-sky-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;

export const LogoutButtonLink = tw.button`
  hidden md:inline-flex
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
`;

export const ButtonLink = tw.button`
  text-stone-700
  hover:text-indigo-600
  hidden 
  md:inline-flex 
  hover:bg-indigo-50 
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
`;

export const OrangeIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-orange-100
  md:hover:text-orange-600
  rounded-3xl
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const CyanIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-cyan-100
  md:hover:text-cyan-700
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const BlueIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-blue-100
  md:hover:text-blue-600
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const SkyIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-sky-100
  md:hover:text-sky-600
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const IndigoIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-indigo-100
  md:hover:text-indigo-600
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;
export const GreenIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-green-100
  md:hover:text-green-600
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;
