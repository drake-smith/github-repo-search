import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import SearchFilters from '../SearchFilters';

const { tablet } = media;

interface HomePageProps {
  searchTerm: string;
  handleSearchTermChange: (searchTerm: string) => void;
  handleSearchSubmit: () => void;
  sortBy: string;
  handleSortByChange: (sortBy: string) => void;
  language: string;
  handleLanguageChange: (language: string) => void;
  isLoading: boolean;
  hasError: boolean;
  searchResults: any[];
  hasNoResults: boolean;
  handleSelectSearchResult: (index: number) => void;
}

const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  ${tablet`
    align-items: center;
    justify-content: center;
  `}
`;

const Text = styled.p`
  margin-top: 1rem;
`;

const HomePage = ({
  searchTerm,
  handleSearchTermChange,
  handleSearchSubmit,
  sortBy,
  handleSortByChange,
  language,
  handleLanguageChange,
  isLoading,
  hasError,
  searchResults,
  hasNoResults,
  handleSelectSearchResult,
}: HomePageProps) => {
  return (
    <ContentContainer>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchTermChange={handleSearchTermChange}
        isDisabled={isLoading || searchTerm === ''}
      />
      {hasError && (
        <Text>
          There was an error fetching the search results. Please try again.
        </Text>
      )}
      {hasNoResults && (
        <Text>The search returned no results. Please try again.</Text>
      )}
      {searchResults.length > 0 && (
        <SearchFilters
          language={language}
          handleLanguageChange={handleLanguageChange}
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
        />
      )}
      {isLoading ? (
        <Text>Fetching results...</Text>
      ) : (
        <SearchResults
          results={searchResults}
          handleSelectSearchResult={handleSelectSearchResult}
        />
      )}
    </ContentContainer>
  );
};

export default HomePage;
