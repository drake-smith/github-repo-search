import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchFilters from '.';

describe('<SearchFilters />', () => {
  const handleLanguageChange = jest.fn();
  const handleSortByChange = jest.fn();

  test('It renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SearchFilters
            language={''}
            handleLanguageChange={handleLanguageChange}
            sortBy={''}
            handleSortByChange={handleSortByChange}
            isDisabled={false}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('handler functions are called correctly', () => {
    render(
      <MemoryRouter>
        <SearchFilters
          language={''}
          handleLanguageChange={handleLanguageChange}
          sortBy={''}
          handleSortByChange={handleSortByChange}
          isDisabled={false}
        />
      </MemoryRouter>
    );

    const dropdown = screen.getByTestId('language-select') as HTMLSelectElement;
    expect(dropdown.value).toBe('');
    fireEvent.change(dropdown, { target: { value: 'javascript' } });
    expect(handleLanguageChange).toHaveBeenCalledTimes(1);

    const defaultRadio = screen.getByTestId('default') as HTMLInputElement;
    expect(defaultRadio.checked).toBeTruthy();

    const clickedOnRadio = screen.getByTestId('stars') as HTMLInputElement;
    fireEvent.click(clickedOnRadio);

    expect(handleSortByChange).toHaveBeenCalledTimes(1);
  });
});
