import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '.';

describe('<SearchBar />', () => {
  const handleSearch = jest.fn();

  test('It renders correctly', () => {
    const tree = renderer
      .create(
        <SearchBar
          searchTerm={''}
          handleSearchSubmit={handleSearch}
          handleSearchTermChange={handleSearch}
          isDisabled={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('handleSearch is called correctly', () => {
    render(
      <SearchBar
        searchTerm={''}
        handleSearchSubmit={handleSearch}
        handleSearchTermChange={handleSearch}
        isDisabled={false}
      />
    );
    const buttonElem = screen.getByText('Search');
    fireEvent.click(buttonElem);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  test('Input field value should update correctly', () => {
    render(
      <SearchBar
        searchTerm={''}
        handleSearchSubmit={handleSearch}
        handleSearchTermChange={handleSearch}
        isDisabled={false}
      />
    );
    const searchField = screen.getByLabelText('Search for GitHub repositories');
    fireEvent.change(searchField, { target: { value: 'hello' } });
    expect(handleSearch).toHaveBeenCalled();
  });
});
