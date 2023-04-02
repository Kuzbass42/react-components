import React from 'react';
import Card from '../Card';
import { Car } from '../../models';
import { searchString } from '../../utils';

import './cardList.css';

interface CardListProps {
  cards: Car[];
  filter?: string;
}
const CardList: React.FunctionComponent<CardListProps> = ({ cards, filter = '' }) => {
  return (
    <div className="card-list">
      {!cards || (cards.length === 0 && <span className="no-card">There is no any card yet</span>)}
      {cards
        .filter(({ model, brand }) => {
          return searchString(model, filter) || searchString(brand, filter);
        })
        .map((car) => (
          <Card key={car.id} car={car} />
        ))}
    </div>
  );
};

export default CardList;
