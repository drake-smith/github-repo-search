import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';

const { tablet } = media;

interface SearchResultsProps {
  results: Array<any>;
}

const SearchResultsContainer = styled.div`
  width: 100%;
`;

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <SearchResultsContainer>
      {results.map((result, i) => {
        return (
          <div key={i}>
            <h2>suh</h2>
            <p>dude</p>
          </div>
        );
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
