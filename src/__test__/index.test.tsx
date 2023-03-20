import { screen } from '@testing-library/react';
import Home from '../pages/index';
import { renderWithProviders } from '../store/utils/test-utils';
import data from '../__mocks__/launchData.json';

test('fetches & display launch data on load', async () => {
  renderWithProviders(<Home />);

  expect(screen.getByTestId('logo')).toBeInTheDocument();
  expect(data.docs.length).toEqual(10);
});
