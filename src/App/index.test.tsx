import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from '.';

// Mock fetch object
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: [
          {
            id: 1,
            name: 'React',
          },
          {
            id: 2,
            name: 'Angular',
          },
        ],
      }),
  })
) as jest.Mock;

describe('<App />', () => {
  test('<App /> renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
