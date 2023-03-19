import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Main from './index';
import { CARS } from '../../data';
import { SEARCH_BAR_PLACEHOLDER } from '../../constants';

describe('About component', () => {
  test('render About', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const searchBar = screen.getByPlaceholderText(SEARCH_BAR_PLACEHOLDER);
    expect(searchBar).toBeInTheDocument();
    const carCards = screen.getAllByTestId('car-card').length;
    expect(carCards).toBe(CARS.length);
  });
});
