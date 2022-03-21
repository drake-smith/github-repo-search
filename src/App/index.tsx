import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

const { tablet, desktop } = media;

const GITHUB_URL = 'https://api.github.com/search/repositories';

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1.5rem;

  ${tablet`
    padding: 2rem;
  `}

  ${desktop`
    padding: 3rem;
  `};
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  background-color: #ed1c24;
  color: #ffffff;
  display: inline-block;
  padding: 0.5rem 1rem;

  ${tablet`
    font-size: 3rem;
    padding: 0.5rem 1.5rem;
  `}

  ${desktop`
    font-size: 4rem;
  `};
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasNoResults, setHasNoResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async (
    searchTerm: string,
    sortBy?: string,
    language?: string
  ) => {
    setIsLoading(true);
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const response = await fetch(`${GITHUB_URL}?q=${encodedSearchTerm}`);
    if (!response.ok) {
      console.error(
        `Error fetching search results. Error code: ${response.status} ${response.statusText}`
      );
      setHasError(true);
      searchResults.length > 0 && setSearchResults([]);
    } else {
      const json = await response.json();
      if (json.items.length > 0) {
        hasError && setHasError(false);
        hasNoResults && setHasNoResults(false);
        setSearchResults(json.items);
      } else {
        setHasNoResults(true);
        setSearchResults([]);
      }
    }
    setIsLoading(false);
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Title>GitHub Repo Finder</Title>
        <SearchBar handleSearch={fetchSearchResults} isDisabled={isLoading} />
        {hasError && (
          <p>
            There was an error fetching the search results. Please try again.
          </p>
        )}
        {hasNoResults && (
          <p>The search returned no results. Please try again.</p>
        )}
        {searchResults.length > 0 && <SearchResults results={searchResults} />}
      </ContentContainer>
    </PageContainer>
  );
};

export default App;
