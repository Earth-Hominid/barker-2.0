import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  HiddenButton,
  IconHolder,
  PlaceholderInput,
  SearchForm,
} from './Styles';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/articles/search?term=${term}`);
    setTerm('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <IconHolder>
        <MagnifyingGlassIcon />
      </IconHolder>
      <PlaceholderInput
        type="text"
        value={term}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTerm(e.target.value)
        }
        placeholder="Search Barker"
      />
      <HiddenButton type="submit" hidden />
    </SearchForm>
  );
};

export default SearchBar;
