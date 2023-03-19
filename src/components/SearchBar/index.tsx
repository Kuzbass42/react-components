import React from 'react';
import { LOCAL_STORAGE_SEARCH_KEY, SEARCH_BAR_PLACEHOLDER } from '../../constants';

import './searchBar.css';

interface SearchBarProps {
  onSetFilter: (search: string) => void;
}
interface SearchBarState {
  search: string;
}
class SearchBar extends React.PureComponent<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      search: localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY) || '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { onSetFilter } = this.props;

    onSetFilter(event.target.value);
    this.setState({ search: event.target.value });
  }

  componentWillUnmount() {
    const { search } = this.state;
    localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, search);
  }
  render() {
    const { search } = this.state;

    return (
      <input
        className="search-bar"
        value={search}
        onChange={this.onChange}
        placeholder={SEARCH_BAR_PLACEHOLDER}
      />
    );
  }
}

export default SearchBar;
