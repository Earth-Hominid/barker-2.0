import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  dark:bg-[#16181D]
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

export const LogoText = tw.h3`
  font-montserrat
  font-bold
  dark:text-slate-300
  text-gray-800
  leading-loose
  text-2xl
  md:text-3xl
  ml-2
`;

export const LinkText = tw.h3`
  hover:text-indigo-600
  dark:hover:text-blue-400
  cursor-pointer
  text-lg
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
  rounded-lg
  -inset-0.5
  dark:bg-blue-500
  bg-indigo-600
  opacity-90
  group-hover:opacity-100
  transition
  group-hover:duration-300
  duration-500
`;

export const StyledButton = tw.button`
  relative  
  group
dark:bg-[#23272F]
dark:hover:border-blue-500
dark:hover:text-blue-500
bg-gray-200
  rounded-2xl
  py-1
  px-3
  mx-auto
  hover:rounded-lg
  flex
  items-center
  justify-center
  border
  border-transparent
hover:border-indigo-500
hover:text-indigo-500
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
  bg-gray-900 
  dark:bg-[#23272F]
  text-xs 
  font-bold 
  transition-all 
  duration-150 
  scale-0 
  origin-bottom
`;
