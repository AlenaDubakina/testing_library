import { screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import renderWithRedux from '../../tests/helpers/renderWithRedux';

describe('Counter test', () => {
  test('router', async () => {
    renderWithRedux(<Counter />, { counter: { value: 10 } });
    const value = screen.getByTestId('value-title');
    expect(value).toHaveTextContent('10');
    const incrementBtn = screen.getByTestId('increment-btn');
    const decrementBtn = screen.getByTestId('decrement-btn');
    await userEvent.click(incrementBtn);
    expect(value).toHaveTextContent('11');
    await userEvent.click(decrementBtn);
    expect(value).toHaveTextContent('10');
  });
});
