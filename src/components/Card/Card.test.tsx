import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';
import { CARS } from '../../data';

const car = CARS[0];

describe('Car Card component', () => {
  test('render Car Card', () => {
    render(<Card car={car} />);

    const carName = screen.getByText(`${car.brand} ${car.model}`);
    const carPrice = screen.getByText(car.price);
    const carProduction = screen.getByText(car.production);
    expect(carName).toBeInTheDocument();
    expect(carPrice).toBeInTheDocument();
    expect(carProduction).toBeInTheDocument();
  });
});
