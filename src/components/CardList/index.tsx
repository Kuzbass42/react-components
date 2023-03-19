import React from 'react';
import Card from '../Card';
import { Car } from '../../models';
import { searchString } from '../../utils';

import './cardList.css';

interface CardListProps {
  cards: Car[];
  filter: string;
}
class CardList extends React.PureComponent<CardListProps> {
  render() {
    const { cards, filter } = this.props;

    return (
      <div className="card-list">
        {cards
          .filter(({ model, brand }) => {
            return searchString(model, filter, true) || searchString(brand, filter, true);
          })
          .map((car) => (
            <Card key={car.id} car={car} />
          ))}
      </div>
    );
  }
}

export default CardList;
