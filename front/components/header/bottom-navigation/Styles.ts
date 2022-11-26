import tw from 'tailwind-styled-components';

export const BottomNavigationMenu = tw.div`
 flex 
 justify-between 
 flex-col 
 w-full
 md:hidden
 bg-white
 dark:bg-[#16181D]
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  space-x-2
  px-3
  pt-12
  pb-4
`;

export const ThemeButton = tw.button`
  flex 
  items-center
  text-sm 
  font-semibold 
  text-stone-700 
  border-transparent
  border-2
  py-1 
  px-2 
  hover:bg-stone-100 
  hover:border-2
  hover:border-stone-700
  cursor-pointer
  rounded-md
  duration-150
  transition
  ease-in-out
`;

export const IconWrap = tw.div`
  h-5
  w-5 
  mr-1
`;

export const ButtonLink = tw.button`
  text-stone-700
  hover:text-indigo-600
  hover:bg-indigo-50 
  px-2 
  py-1 
  rounded-3xl
  cursor-pointer
  hover:border-indigo-600
  border-transparent
  border-2
  hover:border-2
  duration-300
  transition
  ease-in-out
`;

export const SignUpButtonLink = tw.button`
  border-2
  text-white
  bg-sky-500
  border-sky-500
  px-4
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

export const CreateSubforumButton = tw.button`
flex
flex-row
items-center
  border-2
  text-white
  bg-blue-500
  border-blue-500
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-blue-500
  hover:bg-blue-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;

export const CreatePostButton = tw.button`
flex
flex-row
items-center
  border-2
  text-white
  bg-indigo-400
  border-indigo-400
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-indigo-500
  hover:bg-indigo-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;
