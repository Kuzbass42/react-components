import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import AddCard from './index';

describe('AddCard component', () => {
  test('should render empty card list', () => {
    render(<AddCard />);

    const noCards = screen.getByText('There is no any card yet');
    expect(noCards).toBeInTheDocument();
  });

  test('render validation errors if form is empty', async () => {
    const user = userEvent.setup();
    render(<AddCard />);

    const submitButton = screen.getByText('SUBMIT');
    await user.click(submitButton);

    const brandError = screen.getByText('Brand field is mandatory');
    expect(brandError).toBeInTheDocument();

    const modelError = screen.getByText('Model field is mandatory');
    expect(modelError).toBeInTheDocument();
  });

  test('should submit form and create a card', async () => {
    const user = userEvent.setup();
    render(<AddCard />);

    const brandInput = screen.getByTestId('brand-input');
    await user.type(brandInput, 'brand');

    const modelInput = screen.getByTestId('model-input');
    await user.type(modelInput, 'model');

    const submitButton = screen.getByText('SUBMIT');
    await user.click(submitButton);

    const card = screen.getByTestId('car-card');

    expect(brandInput).toHaveValue('');
    expect(modelInput).toHaveValue('');
    expect(card).toBeInTheDocument();
  });
});
