import React from 'react';
import { render, screen } from '@testing-library/react';
import NoMatch from './index';

describe('NoMatch component', () => {
  test('render NoMatch', () => {
    render(<NoMatch />);

    const noMatch = screen.getByText(/404 No Match/i);
    expect(noMatch).toBeInTheDocument();
  });
});
