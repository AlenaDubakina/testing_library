import axios from 'axios';
import Users from './Users';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('Users Test', () => {
  let resp;
  beforeAll(() => {
    resp = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('Users testing', async () => {
    axios.get.mockReturnValue(resp);
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
  test('Users test', async () => {
    axios.get.mockReturnValue(resp);
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId('user-item');
    fireEvent.click(users[0]);
    screen.debug();
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});
