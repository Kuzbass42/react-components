import React from 'react';
import CardList from '../CardList';
import SearchBar from '../SearchBar';
import { CARS } from '../../data';
import { LOCAL_STORAGE_SEARCH_KEY } from '../../constants';

const Main: React.FunctionComponent = () => {
  const [filter, setFilter] = React.useState(localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY) || '');

  const onSetFilter = (filter: string) => setFilter(filter);

  return (
    <>
      <SearchBar filter={filter} onSetFilter={onSetFilter} />
      <CardList filter={filter} cards={CARS} />
    </>
  );
};

export default Main;
