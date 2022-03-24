import React from 'react';
import styled from 'styled-components';
import { LANGUAGES, SORT_BY } from '../shared/constants';

interface SearchFiltersProps {
  sortBy: string;
  handleSortByChange: (sortBy: string) => void;
  language: string;
  handleLanguageChange: (language: string) => void;
  isDisabled: boolean;
}

const SearchFiltersContainer = styled.div`
  margin-top: 1rem;
`;

const SortByLabel = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-style: italic;
`;

const InputsContainer = styled.div`
  background: #f7f7f9;
  padding: 1rem;
  display: flex;
  border-radius: 10px;
`;

const RadioLabel = styled.label`
  margin-left: 0.5rem;
`;

const LanguageContainer = styled.div`
  padding-left: 2rem;
`;

const LanguageSelect = styled.select`
  display: block;
`;

const SearchFilters = ({
  sortBy,
  handleSortByChange,
  language,
  handleLanguageChange,
  isDisabled,
}: SearchFiltersProps) => {
  const languageSelects: Array<JSX.Element> = [];
  languageSelects.push(
    <option key={'none'} value={''} data-testid={'language-option'}>
      None
    </option>
  );
  for (const key in LANGUAGES) {
    languageSelects.push(
      <option key={key} value={key} data-testid={'language-option'}>
        {LANGUAGES[key]}
      </option>
    );
  }
  return (
    <SearchFiltersContainer>
      <SortByLabel>Sort by:</SortByLabel>
      <InputsContainer>
        <div>
          <div>
            <input
              type="radio"
              id="default"
              data-testid="default"
              name="Best match"
              value="best match"
              checked={sortBy === SORT_BY.default}
              onChange={() => handleSortByChange(SORT_BY.default)}
              disabled={isDisabled}
            />
            <RadioLabel htmlFor="default">Best match</RadioLabel>
          </div>
          <div>
            <input
              type="radio"
              id="stars"
              data-testid="stars"
              name="Total Stars"
              value="stars"
              checked={sortBy === SORT_BY.stars}
              onChange={() => handleSortByChange(SORT_BY.stars)}
              disabled={isDisabled}
            />
            <RadioLabel htmlFor="stars">Total stars</RadioLabel>
          </div>
        </div>
        <LanguageContainer>
          <label htmlFor="language-select">Language</label>
          <LanguageSelect
            data-testid="language-select"
            value={language}
            id="language-select"
            onChange={(e) => handleLanguageChange(e.target.value)}
            disabled={isDisabled}
          >
            {languageSelects}
          </LanguageSelect>
        </LanguageContainer>
      </InputsContainer>
    </SearchFiltersContainer>
  );
};

export default SearchFilters;
