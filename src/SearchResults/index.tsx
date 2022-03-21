import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';

const { tablet } = media;

interface SearchResultsProps {
  results: Array<any>;
}

const SearchResultsContainer = styled.div`
  margin-top: 1.5rem;
  width: 800px;
`;

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <SearchResultsContainer>
      {results.map((result, i) => {
        return (
          <div key={i}>
            <h2>{result.name}</h2>
            <p>Owner: {result.owner.login}</p>
            <p>{result.description}</p>
            <p>Number of stars: {result.stargazers_count}</p>
            <p>Language: {result.language}</p>
          </div>
        );
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
