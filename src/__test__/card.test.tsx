import { screen } from '@testing-library/react';
import Card from '../components/card';
import { ILaunchDto } from '../dto/spaceX.dto';
import { renderWithProviders } from '../store/utils/test-utils';
import data from '../__mocks__/launchData.json';

test('render card component', () => {
  const launchData = data.docs[0] as ILaunchDto;
  renderWithProviders(<Card launch={launchData} />);

  expect(screen.getByTestId('name')).toBeInTheDocument();
  expect(screen.getByTestId('date')).toBeInTheDocument();
  expect(screen.getByTestId('time')).toBeInTheDocument();
  expect(screen.getByTestId('badge')).toBeInTheDocument();
  expect(screen.getByTestId('payloadType')).toBeInTheDocument();
  expect(screen.getByTestId('payloadId')).toBeInTheDocument();
  expect(screen.getByTestId('coreSerial')).toBeInTheDocument();
  expect(screen.getByTestId('success')).toBeInTheDocument();
  expect(screen.getByTestId('name')).toBeInTheDocument();
  expect(screen.getByTestId('name')).toBeInTheDocument();
});
