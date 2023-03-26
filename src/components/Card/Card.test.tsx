import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';
import { CARS } from '../../data';

const car = CARS[0];

describe('Car Card component', () => {
  test('render Car Card', () => {
    render(<Card car={car} />);

    const carName = screen.getByText(`${car.brand} ${car.model}`);
    const carProduction = screen.getByText(car.productionDate);
    expect(carName).toBeInTheDocument();
    expect(carProduction).toBeInTheDocument();
  });
});
