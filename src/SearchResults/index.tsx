import React from 'react';
import styled from 'styled-components';
import SearchResult from '../SearchResult';
/*
 * For purpose of this project and time, allow any type here to define the API response object,
 * which contains more data than we need.
 */
interface SearchResultsProps {
  // @ts-ignore
  results: Array<any>;
  handleSelectSearchResult: (index: number) => void;
}

const SearchResultsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  max-width: 800px;
  width: 100%;
`;

const SearchResults = ({
  results,
  handleSelectSearchResult,
}: SearchResultsProps) => {
  return (
    <SearchResultsContainer>
      {results.map((result, i) => (
        <SearchResult
          key={result.id}
          index={i}
          handleSelectSearchResult={handleSelectSearchResult}
          id={result.id}
          name={result.name}
          login={result.owner.login}
          description={result.description}
          stargazers_count={result.stargazers_count}
          language={result.language}
        />
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
