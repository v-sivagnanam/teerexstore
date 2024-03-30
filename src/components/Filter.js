// Filters.js
import React, { useState } from 'react';
import styles from '../styles/Filters.module.css';

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    priceRange: '',
    type: '',
  });

  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: prevFilters[category] === value ? '' : value,
    }));
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className={styles.filters}>
      <h2>Filters</h2>
      <div className={styles.filter}>
        <h3>Gender:</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.gender === 'Men'}
            onChange={() => handleCheckboxChange('gender', 'Men')}
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.gender === 'Women'}
            onChange={() => handleCheckboxChange('gender', 'Women')}
          />
          Women
        </label>
      </div>
      <div className={styles.filter}>
        <h3>Color:</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.color === 'Blue'}
            onChange={() => handleCheckboxChange('color', 'Blue')}
          />
          Blue
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.color === 'Green'}
            onChange={() => handleCheckboxChange('color', 'Green')}
          />
          Green
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.color === 'Red'}
            onChange={() => handleCheckboxChange('color', 'Red')}
          />
          Red
        </label>
      </div>
      <div className={styles.filter}>
        <h3>Price Range:</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.priceRange === '251-450'}
            onChange={() => handleCheckboxChange('priceRange', '251-450')}
          />
          Rs251 - Rs450
        </label>
      </div>
      <div className={styles.filter}>
        <h3>Type:</h3>
        <label>
          <input
            type="checkbox"
            checked={filters.type === 'Polo'}
            onChange={() => handleCheckboxChange('type', 'Polo')}
          />
          Polo
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.type === 'Hoodie'}
            onChange={() => handleCheckboxChange('type', 'Hoodie')}
          />
          Hoodie
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.type === 'Basic'}
            onChange={() => handleCheckboxChange('type', 'Basic')}
          />
          Basic
        </label>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
