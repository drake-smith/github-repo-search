import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchResult from '.';

describe('<SearchResult />', () => {
  const handleSelectSearchResult = jest.fn();

  test('It renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SearchResult
            key={24736}
            index={3}
            handleSelectSearchResult={handleSelectSearchResult}
            id={24736}
            name={'Repository'}
            login={'John Smith'}
            description={'This is a description'}
            stargazers_count={500}
            language={'JavaScript'}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('handleSelectSearchResult is called correctly', () => {
    render(
      <MemoryRouter>
        <SearchResult
          key={24736}
          index={3}
          handleSelectSearchResult={handleSelectSearchResult}
          id={24736}
          name={'Repository'}
          login={'John Smith'}
          description={'This is a description'}
          stargazers_count={500}
          language={'JavaScript'}
        />
      </MemoryRouter>
    );
    const linkElem = screen.getByText('Repository');
    fireEvent.click(linkElem);
    expect(handleSelectSearchResult).toHaveBeenCalledTimes(1);
  });
});
