import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header component', () => {
  test('render Header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const aboutUs = screen.getByText(/about us/i);
    expect(aboutUs).toBeInTheDocument();

    const addCard = screen.getByText(/add card/i);
    expect(addCard).toBeInTheDocument();

    const home = screen.getByText(/home/i);
    expect(home).toBeInTheDocument();
  });
});
