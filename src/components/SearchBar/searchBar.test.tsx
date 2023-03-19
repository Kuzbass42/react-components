import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './index';
import { SEARCH_BAR_PLACEHOLDER } from '../../constants';

const onSetFilter = vi.fn();

describe('SearchBar component', () => {
  test('render SearchBar', () => {
    render(<SearchBar onSetFilter={onSetFilter} />);

    const searchBar = screen.getByPlaceholderText(SEARCH_BAR_PLACEHOLDER);
    expect(searchBar).toBeInTheDocument();
  });
});
