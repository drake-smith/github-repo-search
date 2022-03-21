import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '.';

describe('<SearchBar />', () => {
  const handleSearch = jest.fn();

  test('It renders correctly', () => {
    const tree = renderer
      .create(<SearchBar handleSearch={handleSearch} isDisabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('handleSearch is called correctly', () => {
    render(<SearchBar handleSearch={handleSearch} isDisabled={false} />);
    const buttonElem = screen.getByText('Search');
    fireEvent.click(buttonElem);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
