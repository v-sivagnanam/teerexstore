import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import { GoSearch } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import { togglePopup } from '../features/catalog/catalogSlice'
import { useDispatch } from 'react-redux';
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

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
      <button type="submit" className={styles.icons} ><GoSearch  /></button>
      <button onClick={() =>{dispatch(togglePopup())}} className={styles.icons}><FaFilter /></button>
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;
