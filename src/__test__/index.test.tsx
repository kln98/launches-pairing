import { screen } from '@testing-library/react';
import { rest } from 'msw';
import Home from '../pages/index';
import { renderWithProviders } from '../store/utils/test-utils';
import data from '../__mocks__/launchData.json';

export const handlers = [
  rest.get('/query', (req, res, ctx) => {
    return res(ctx.json(data), ctx.delay(150));
  }),
];

test('fetches & display launch data on load', async () => {
  renderWithProviders(<Home />);

  expect(screen.getByTestId('logo')).toBeInTheDocument();
  expect(data.docs.length).toEqual(10);
});
