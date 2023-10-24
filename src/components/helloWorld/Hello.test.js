import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hello from './Hello';

describe('Hello component', () => {
  test('renders learn react link', () => {
    render(<Hello />);
    const helloWorldElement = screen.getByText(/hello world!/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(helloWorldElement).toMatchSnapshot();
  });
});

test('HelloWorld Test App', () => {
  render(<Hello />);
  const helloWorldElement = screen.queryByText(/hello2/i);
  expect(helloWorldElement).toBeNull();
});

test('DataElem App Test', async () => {
  render(<Hello />);
  const dataElem = await screen.findByTestId('value-elem');
  expect(dataElem).toBeInTheDocument();
  expect(dataElem).toHaveStyle({ color: 'red' });
});

test('Click event', () => {
  render(<Hello />);
  const btn = screen.queryByTestId('toggle-btn');
  fireEvent.click(btn);
  expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.queryByTestId('toggle-elem')).toBeNull();
  // screen.debug();
});

test('Input event', () => {
  render(<Hello />);
  const input = screen.getByPlaceholderText(/input value.../i);
  expect(screen.queryByTestId('input-value')).toContainHTML('');
  userEvent.type(input, '123123');
  expect(screen.queryByTestId('input-value')).toContainHTML('123123');
});
