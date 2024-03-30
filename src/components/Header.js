import React from 'react';
// import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Teerex Store</h1>
      <button className={styles.cartButton}>
        {/* <FaShoppingCart className={styles.cartIcon} /> */}
      </button>
    </header>
  );
};

export default Header;
