import React from 'react';
import CardList from '../CardList';
import { CARS } from '../../mockedData';
class Main extends React.PureComponent {
  render() {
    return <CardList cards={CARS} />;
  }
}

export default Main;
