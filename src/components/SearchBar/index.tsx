import React from 'react';
import { LOCAL_STORAGE_SEARCH_KEY, SEARCH_BAR_PLACEHOLDER } from '../../constants';

import './searchBar.css';

interface SearchBarProps {
  filter: string;
  onSetFilter: (search: string) => void;
}
const SearchBar: React.FunctionComponent<SearchBarProps> = ({ filter, onSetFilter }) => {
  const filterRef = React.useRef(filter);

  React.useEffect(() => {
    filterRef.current = filter;
  }, [filter]);

  React.useEffect(() => {
    return () => localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, filterRef.current || '');
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => onSetFilter(event.target.value);

  return (
    <input
      className="search-bar"
      value={filter}
      onChange={onChange}
      placeholder={SEARCH_BAR_PLACEHOLDER}
    />
  );
};

export default SearchBar;
