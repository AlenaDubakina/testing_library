import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('Navbar test', () => {
  test('main link', async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link');
    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  test('about link', async () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId('about-link');
    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  test('users link', async () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId('users-link');
    fireEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
