import React from 'react';
import { Car } from '../../models';

import './card.css';
interface CardsProps {
  car: Car;
}
class Card extends React.PureComponent<CardsProps> {
  render() {
    const { car } = this.props;
    const { brand, model, productionDate, color, isBooked, paymentType, src } = car;
    return (
      <div className="card" data-testid="car-card">
        <div className="card-thumbnail">
          <img src={src} alt="no image" />
        </div>
        <div className="card-info">
          <h3>{`${brand} ${model}`}</h3>
          <h5>{productionDate}</h5>
          <h5>{color}</h5>
          <h5>{isBooked ? 'Booked' : 'Available'}</h5>
          {isBooked && paymentType && <h5>{paymentType}</h5>}
        </div>
      </div>
    );
  }
}

export default Card;
