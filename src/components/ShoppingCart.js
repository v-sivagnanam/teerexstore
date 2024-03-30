import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import styles from '../styles/ShoppingCart.module.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className={styles.shoppingCart}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {items.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div>
              <img src={item.imageURL} alt={item.name} className={styles.cartItemImage} />
            </div>
            <p className={styles.cartItemName}>{item.name}</p>

            <div className={styles.cartItemActions}>
              <input
                type="number"
                value={item.quantity}
                onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                className={styles.quantityInput}
              />
              <span className={styles.cartItemPrice}>${item.price}</span>
              <button onClick={() => handleRemoveFromCart(item.id)} className={styles.removeFromCartButton}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartTotal}>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
