import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/media';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import SearchFilters from '../SearchFilters';

const { tablet, desktop } = media;

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
    <>
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
        <>
          <SearchFilters
            language={language}
            handleLanguageChange={handleLanguageChange}
            sortBy={sortBy}
            handleSortByChange={handleSortByChange}
          />
          <SearchResults
            results={searchResults}
            handleSelectSearchResult={handleSelectSearchResult}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
