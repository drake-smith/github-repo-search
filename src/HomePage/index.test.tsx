// @ts-ignore
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '.';


describe('<HomePage />', () => {
  const handleSearchTermChange = jest.fn();
  const handleSearchSubmit = jest.fn();
  const handleSortByChange = jest.fn();
  const handleLanguageChange = jest.fn();
  const handleSelectSearchResult = jest.fn();

  test('It renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          {/* @ts-ignore */}
          <HomePage
            searchTerm={''}
            handleSearchTermChange={handleSearchTermChange}
            handleSearchSubmit={handleSearchSubmit}
            sortBy={''}
            handleSortByChange={handleSortByChange}
            language={'javascript'}
            handleLanguageChange={handleLanguageChange}
            isLoading={false}
            hasError={false}
            searchResults={[]}
            hasNoResults={false}
            handleSelectSearchResult={handleSelectSearchResult}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('isLoading UI renders', () => {
    render(
      <MemoryRouter>
        {/* @ts-ignore */}
        <HomePage
          searchTerm={''}
          handleSearchTermChange={handleSearchTermChange}
          handleSearchSubmit={handleSearchSubmit}
          sortBy={''}
          handleSortByChange={handleSortByChange}
          language={'javascript'}
          handleLanguageChange={handleLanguageChange}
          isLoading={true}
          hasError={false}
          searchResults={[]}
          hasNoResults={false}
          handleSelectSearchResult={handleSelectSearchResult}
        />
      </MemoryRouter>
    );

    expect(screen.findByText('Fetching results...')).toBeTruthy();
  });
});
