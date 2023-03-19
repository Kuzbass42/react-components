import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './index';

describe('About component', () => {
  test('render About', () => {
    render(<About />);

    const aboutUs = screen.getByText(/about us/i);
    expect(aboutUs).toBeInTheDocument();
  });
});
