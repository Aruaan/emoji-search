import React from 'react';
import SearchResultsList from './SearchResultsList';

export default {
  title: 'SearchResultsList',
  component: SearchResultsList,
};

const sampleResults = [
  { symbol: '😀', title: 'Grinning Face' },
  { symbol: '💯', title: '100' },
  { symbol: '🔢', title: '1234' },
  { symbol: '😬', title: 'Grimacing' },
  { symbol: '😁', title: 'Grin' },
  { symbol: '😂', title: 'Joy' },
  { symbol: '😹', title: 'Joy Cat' },
];

export const Default = () => <SearchResultsList results={sampleResults} />;
