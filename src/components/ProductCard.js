// ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.productCard}>
      <img src={product.imageURL} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price}</p>
      <button onClick={handleAddToCart} className={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
