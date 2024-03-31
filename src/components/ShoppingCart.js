import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import styles from '../styles/ShoppingCart.module.css';
import { MdDeleteOutline } from "react-icons/md";

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

  if (items.length === 0) {
    return (
      <div className={styles.shoppingCart}>
        <h2 className={styles.cartTitle}>Shopping Cart</h2>
        <p>No items found in the cart.</p>
      </div>
    );
  }

  return (
    <div className={styles.shoppingCart}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {items.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.cartItemDetails}>
              <img src={item.imageURL} alt={item.name} className={styles.cartItemImage} />
              <div className={styles.cartItemInfo}>
                <p className={styles.cartItemName}>{item.name}</p>
                <p className={styles.cartItemPrice}>Price: ${item.price}</p>
              </div>
            </div>
            <div className={styles.cartItemActions}>
              <div className={styles.quantityControl}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className={styles.quantityInput}
                />
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} className={styles.removeFromCartButton}>Remove</button>
              <MdDeleteOutline className={styles.removeicon} onClick={() => handleRemoveFromCart(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartTotal}>
        <p className={styles.totalText}>Total: ${total}</p>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
