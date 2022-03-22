import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';

const { tablet } = media;

interface SearchBarProps {
  searchTerm: string;
  handleSearchTermChange: (searchTerm: string) => void;
  handleSearchSubmit: () => void;
  isDisabled: boolean;
}

const SearchBarForm = styled.form`
  margin-top: 1rem;

  ${tablet`
    margin-top: 2rem;
  `}
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  border: 1px solid #202020;

  ${tablet`
    padding: 1rem;
    width: 350px;
  `}

  &:focus, &:hover {
    outline: 2px solid #58bab9;
    outline-offset: -2px;
  }
`;

const SearchButton = styled.input<{ disabled: boolean }>`
  margin-top: 0.5rem;
  color: #fff;
  width: 150px;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#a9a9a9' : '#468080')};
  border: ${({ disabled }) =>
    disabled ? '1px solid #a9a9a9' : '1px solid #468080'};

  &:focus,
  &:hover:enabled,
  &:active:enabled {
    outline: 2px solid #58bab9;
    background-color: #58bab9;
    outline-offset: -2px;
  }

  ${tablet`
    padding: 1rem;
    margin-top: 1rem;
  `}
`;

const SearchBar = ({
  searchTerm,
  handleSearchTermChange,
  handleSearchSubmit,
  isDisabled,
}: SearchBarProps) => {
  return (
    <SearchBarForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchSubmit();
      }}
    >
      <SearchInput
        type="search"
        value={searchTerm}
        onChange={(e) => handleSearchTermChange(e.target.value)}
        placeholder="Search for GitHub repositories"
      />
      <SearchButton type="submit" value="Search" disabled={isDisabled} />
    </SearchBarForm>
  );
};

export default SearchBar;
