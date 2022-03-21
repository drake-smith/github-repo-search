import React from 'react';
import styled from 'styled-components';
import { SORT_BY } from '../shared/constants';

interface SearchFiltersProps {
  sortBy: string;
  handleSortByChange: (sortBy: string) => void;
}

const SearchFiltersContainer = styled.div`
  width: 800px;
`;

const RadioButtonContainer = styled.div``;

const RadioButton = styled.input``;

const RadioLabel = styled.label`
  margin-left: 0.5rem;
`;

const SearchFilters = ({ sortBy, handleSortByChange }: SearchFiltersProps) => {
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
    </SearchFiltersContainer>
  );
};

export default SearchFilters;
