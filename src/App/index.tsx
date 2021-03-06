import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import { media } from '../shared/media';
import { GITHUB_API_URL, SORT_BY } from '../shared/constants';
import HomePage from '../HomePage';
import DetailPage from '../DetailPage';

const { tablet, desktop } = media;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem;

  ${tablet`
    padding: 2rem;
  `}

  ${desktop`
    padding: 3rem;
  `};
`;

const TitleContainer = styled.div`
  text-align: center;
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
  const [sortBy, setSortBy] = useState(SORT_BY.default);
  const [language, setLanguage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSearchResult, setSelectedSearchResult] = useState(null);

  const fetchSearchResults = async (
    searchTerm: string,
    sortBy: string,
    language: string
  ) => {
    // Reset values
    setIsLoading(true);
    setHasError(false);
    setHasNoResults(false);

    // Encode our params
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const sortByParam =
      sortBy !== SORT_BY.default ? `&sort=${encodeURIComponent(sortBy)}` : '';
    const encodedLanguageParam =
      language !== '' ? `+language:${encodeURIComponent(language)}` : '';

    // Fetch the results asynchronously
    try {
      const response = await fetch(
        `${GITHUB_API_URL}?q=${encodedSearchTerm}${encodedLanguageParam}${sortByParam}`
      );
      /*
       * Fetch only detects network errors. Wrap in try/catch block so we can
       * check for both network errors in the catch block, and HTTP errors in the
       * try block (like a 403, 500) etc.
       */
      if (!response.ok) {
        console.error(
          `Error fetching search results. Error code: ${response.status} ${response.statusText}`
        );
        setHasError(true);
        searchResults.length > 0 && setSearchResults([]);
      } else {
        const json = await response.json();

        if (json.items.length > 0) {
          // Success, store the JSON and update state
          hasError && setHasError(false);
          hasNoResults && setHasNoResults(false);
          setSearchResults(json.items);
        } else {
          // Search came back with zero results
          setHasNoResults(true);
          setSearchResults([]);
        }
      }
    } catch (error) {
      console.error(error);
      setHasError(true);
      searchResults.length > 0 && setSearchResults([]);
    }
    setIsLoading(false);
  };

  const handleSortByChange = (sortBy: string) => {
    setSortBy(sortBy);
    fetchSearchResults(searchTerm, sortBy, language);
  };

  const handleSearchTermChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleSearchSubmit = () => {
    fetchSearchResults(searchTerm, sortBy, language);
  };

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    fetchSearchResults(searchTerm, sortBy, language);
  };

  const handleSelectSearchResult = (index: number) => {
    setSelectedSearchResult(searchResults[index]);
  };

  return (
    <PageContainer>
      <TitleContainer>
        <Link to="/">
          <Title>Supreme Repo Finder</Title>
        </Link>
      </TitleContainer>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              searchTerm={searchTerm}
              handleSearchTermChange={handleSearchTermChange}
              handleSearchSubmit={handleSearchSubmit}
              sortBy={sortBy}
              handleSortByChange={handleSortByChange}
              language={language}
              handleLanguageChange={handleLanguageChange}
              isLoading={isLoading}
              hasError={hasError}
              searchResults={searchResults}
              hasNoResults={hasNoResults}
              handleSelectSearchResult={handleSelectSearchResult}
            />
          }
        />
        <Route
          path=":repoId"
          element={<DetailPage selectedSearchResult={selectedSearchResult} />}
        />
      </Routes>
    </PageContainer>
  );
};

export default App;
