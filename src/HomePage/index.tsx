import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import SearchFilters from '../SearchFilters';

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
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
        isDisabled={isLoading}
      />
      {hasError && (
        <p>There was an error fetching the search results. Please try again.</p>
      )}
      {hasNoResults && <p>The search returned no results. Please try again.</p>}
      {searchResults.length > 0 && (
        <SearchFilters
          language={language}
          handleLanguageChange={handleLanguageChange}
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
        />
      )}
      {isLoading ? (
        <p>Fetching results...</p>
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
