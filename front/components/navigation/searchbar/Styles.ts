import tw from 'tailwind-styled-components';

export const SearchForm = tw.form`
  flex 
  flex-1
  items-center
  space-x-2
  border
  border-stone-200
  rounded-md
  px-3
  py-1
  bg-[#EADEB9]
`;

export const IconHolder = tw.div`
  h-6
  w-6
  text-[#605649]
`;

export const PlaceholderInput = tw.input`
  text-[#EADEB9]
  flex
  flex-1
  py-1
  px-2
  border-md
  bg-[#EADEB9]
  focus:outline-none 
  focus:border-stone-500 
  focus:ring-1
  focus:rounded-md
  focus:ring-stone-500
  focus:bg-[#605649]
  placeholder-[#605649]
  focus:placeholder-[#EADEB9]
`;

export const HiddenButton = tw.button``;
