import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import SearchResults from '.';

describe('<SearchResults />', () => {
  const handleSelectSearchResult = jest.fn();
  const mockObj = [
    {
      id: 1,
      name: 'React',
      owner: {
        login: 'facebook',
      },
      description: 'This is a library.',
      stargazers_count: 100,
      language: 'JavaScript',
    },
    {
      id: 2,
      name: 'Angular',
      owner: {
        login: 'google',
      },
      description: 'This is a library.',
      stargazers_count: 100,
      language: 'JavaScript',
    },
  ];
  test('It renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SearchResults
            results={mockObj}
            handleSelectSearchResult={handleSelectSearchResult}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
