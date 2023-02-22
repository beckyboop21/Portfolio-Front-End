import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  async function handleSearch(event) {
    event.preventDefault();
    const strainLookup = event.target.value;

    // Make API call using Axios
    const response = await axios.get(`https://www.wikileaf.com/strains/?page=3/search?term=${searchTerm}`);

    // Sort results by name
    const sortedResults = response.data.results.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    // Call onSearch callback with sorted results
    onSearch(sortedResults);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search strains"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
