import React from 'react';
import styled from 'styled-components';
import { LANGUAGES, SORT_BY } from '../shared/constants';

interface SearchFiltersProps {
  sortBy: string;
  handleSortByChange: (sortBy: string) => void;
  language: string;
  handleLanguageChange: (language: string) => void;
}

const SearchFiltersContainer = styled.div`
  width: 800px;
`;

const RadioButtonContainer = styled.div``;

const RadioButton = styled.input``;

const RadioLabel = styled.label`
  margin-left: 0.5rem;
`;

const SearchFilters = ({
  sortBy,
  handleSortByChange,
  language,
  handleLanguageChange,
}: SearchFiltersProps) => {
  const languageSelects: Array<JSX.Element> = [];
  languageSelects.push(<option value={''}>None</option>);
  for (const key in LANGUAGES) {
    languageSelects.push(<option value={key}>{LANGUAGES[key]}</option>);
  }
  return (
    <SearchFiltersContainer>
      <p>Sort by:</p>
      <RadioButtonContainer>
        <RadioButton
          type="radio"
          id="default"
          name="Best match"
          value="best match"
          checked={sortBy === SORT_BY.default}
          onChange={() => handleSortByChange(SORT_BY.default)}
        />
        <RadioLabel htmlFor="default">Best match</RadioLabel>
      </RadioButtonContainer>
      <RadioButtonContainer>
        <RadioButton
          type="radio"
          id="stars"
          name="Total Stars"
          value="stars"
          checked={sortBy === SORT_BY.stars}
          onChange={() => handleSortByChange(SORT_BY.stars)}
        />
        <RadioLabel htmlFor="stars">Total Stars</RadioLabel>
      </RadioButtonContainer>
      <label htmlFor="pet-select">Filter by Language</label>

      <select
        value={language}
        id="pet-select"
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languageSelects}
      </select>
    </SearchFiltersContainer>
  );
};

export default SearchFilters;
