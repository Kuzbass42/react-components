import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './index';
import { CARS } from '../../data';

describe('Car CardList component', () => {
  test('render Car CardList without filter', () => {
    render(<CardList cards={CARS} filter={''} />);

    const carCards = screen.getAllByTestId('car-card').length;
    expect(carCards).toBe(CARS.length);
  });

  test('render Car CardList with filter', () => {
    const filterValue = 'Niva';
    render(<CardList cards={CARS} filter={filterValue} />);

    const carCards = screen.getAllByTestId('car-card').length;
    expect(carCards).toBe(2);
  });
});
