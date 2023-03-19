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
  });
});
