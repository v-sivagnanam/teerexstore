import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, imageURL } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, price, imageURL, quantity: 1 });
      }
      state.total += price;
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const itemToRemove = state.items.find(item => item.id === idToRemove);
      state.total -= itemToRemove.price * itemToRemove.quantity;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      const prevQuantity = itemToUpdate.quantity;
      itemToUpdate.quantity = quantity;
      state.total += (quantity - prevQuantity) * itemToUpdate.price;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
