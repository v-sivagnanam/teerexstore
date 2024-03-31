import React from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const cartItemCount = useSelector(state => state.cart.items);
  return (
    <header className={styles.header}>
      <h4>Teerex Store</h4>
      <div className={styles.buttonContainer}>
      <Link to="/" className={styles.link}>Product</Link>
      <Link to="/cart">
        <MdOutlineAddShoppingCart className={styles.cartIcon} />
        {cartItemCount.length > 0 && <span className={styles.cartItemCount}>{cartItemCount.length}</span>}
      </Link>
      </div>
    </header>
  );
};

export default Header;
