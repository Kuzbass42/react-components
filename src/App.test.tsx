import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('render App', () => {
    render(<App />);

    const aboutUs = screen.getByText(/about us/i);
    expect(aboutUs).toBeInTheDocument();
  });
});
