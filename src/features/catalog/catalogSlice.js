// // features/catalog/catalogSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     try {
//       const response = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// const initialState = {
//   products: [],
//   status: 'idle',
//   error: null,
// };

// export const catalogSlice = createSlice({
//   name: 'catalog',
//   initialState,
//   reducers: {
//     setFilters: (state, action) => {
//       // Handle filter logic here
//     },
//   },
//   extraReducers: {
//     [fetchProducts.pending]: (state) => {
//       state.status = 'loading';
//     },
//     [fetchProducts.fulfilled]: (state, action) => {
//       state.status = 'succeeded';
//       state.products = action.payload;
//     },
//     [fetchProducts.rejected]: (state, action) => {
//       state.status = 'failed';
//       state.error = action.error.message;
//     },
//   },
// });


// export default catalogSlice.reducer;



import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
    const response = await axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
    console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setFilters: (state, action) => {
              // Handle filter logic here
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = catalogSlice.actions;

export default catalogSlice.reducer;
