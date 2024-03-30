import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/catalog/catalogSlice';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
// import ErrorMessage from './ErrorMessage';
import Filters from './Filter'; // Import the Filters component
import styles from '../styles/ProductListing.module.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.catalog);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    priceRange: '',
    type: '',
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearch = query => {
    setSearchQuery(query.toLowerCase());
  };

  const handleFilter = selectedFilters => {
    setFilters(selectedFilters);
  };

  const checkPriceRange = (price, range) => {
    const [min, max] = range.split('-').map(Number);
    return min <= price && price <= max;
  };

  const filteredProducts = items.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery) ||
      product.color.toLowerCase().includes(searchQuery) ||
      product.type.toLowerCase().includes(searchQuery);

    const matchesFilters =
      (filters.gender === '' || product.gender === filters.gender) &&
      (filters.color === '' || product.color === filters.color) &&
      (filters.priceRange === '' || checkPriceRange(product.price, filters.priceRange)) &&
      (filters.type === '' || product.type === filters.type);

    return matchesSearch && matchesFilters;
  });



  return (
    <div className={styles.productListing}>
    <SearchBar onSearch={handleSearch} />
    <div className={styles.container}>
      <div className={styles.filters}>
        <Filters onFilter={handleFilter} />
      </div>
      <div className={styles.cards}>
        {status === 'loading' && <p>Loading...</p>}
        {/* {status === 'failed' && <ErrorMessage message={error} />} */}
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProductListing;
