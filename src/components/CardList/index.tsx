import React from 'react';
import Card from '../Card';
import { Car } from '../../models';

import './cardList.css';

interface CardListProps {
  cards: Car[];
}
class CardList extends React.PureComponent<CardListProps> {
  render() {
    const { cards } = this.props;

    return (
      <div className="card-list">
        {cards.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    );
  }
}

export default CardList;
