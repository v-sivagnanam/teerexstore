import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." className={styles.searchInput} />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;
