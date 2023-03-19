import React from 'react';
import CardList from '../CardList';
import SearchBar from '../SearchBar';
import { CARS } from '../../data';
import { LOCAL_STORAGE_SEARCH_KEY } from '../../constants';

interface CardListState {
  search: string;
}

class Main extends React.PureComponent<object, CardListState> {
  constructor(props: object) {
    super(props);

    this.state = {
      search: localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY) || '',
    };

    this.onSetFilter = this.onSetFilter.bind(this);
  }

  onSetFilter(search: string) {
    this.setState({ search });
  }
  render() {
    const { search } = this.state;
    return (
      <>
        <SearchBar onSetFilter={this.onSetFilter} />
        <CardList filter={search} cards={CARS} />
      </>
    );
  }
}

export default Main;
