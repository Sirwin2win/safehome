import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productAPI from './productAPI';
import axios from 'axios';



const url = 'https://api.safehomeproperties.com/api/products';

// Thunks
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await productAPI.fetchProductsAPI();
//       return response.data;  // assuming your API returns array of products
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   }
// );

export const fetchProducts =
  createAsyncThunk(
    "products/fetchProducts",

    async (_, thunkAPI) => {
      try {
        const state =
          thunkAPI.getState();

        const filters =
          state.products.filters;

        // REMOVE EMPTY VALUES
        const cleanFilters =
          Object.fromEntries(
            Object.entries(filters).filter(
              ([_, value]) =>
                value !== "" &&
                value !== null &&
                value !== undefined
            )
          );

        const response =
          await axios.get(url, {
            params: cleanFilters,
          });

        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message ||
            error.message
        );
      }
    }
  );


export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (id, thunkAPI) => {
    try {
      const response = await productAPI.fetchProductByIdAPI(id);
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, thunkAPI) => {
    try {
      const response = await productAPI.createProductAPI(product);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, formData }, thunkAPI) => {
    try {
      const response = await axios.patch(`${url}/${id}`, formData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, thunkAPI) => {
    try {
      await productAPI.deleteProductAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Slice

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProduct: null,  // for editing / viewing one
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    productError: null,
    prodSuccess:'idle',
     total: 0,

  totalPages: 0,

  filters: {
    search: "",
    location: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    rooms: "",
    baths: "",
    page: 1,
    limit: 12,
  },
    
  },
  reducers: {
    // optional non-async actions
    clearCurrentProduct(state) {
      state.currentProduct = null;
    },
    setFilter: (
      state,
      action
    ) => {
      const { key, value } =
        action.payload;

      state.filters[key] = value;

      // reset page when changing filters
      if (key !== "page") {
        state.filters.page = 1;
      }
    },

    clearFilters: (state) => {
      state.filters = {
        search: "",
        location: "",
        category: "",
        minPrice: "",
        maxPrice: "",
        rooms: "",
        baths: "",
        page: 1,
        limit: 12,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.productError = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.productError = action.payload;
      })

      // fetch one product
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
        state.productError = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.productError = action.payload;
      })

      // add product
      .addCase(addProduct.pending, (state) => {
        state.status = 'loading';
        state.prodSuccess = 'loading';
        state.productError = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.prodSuccess = 'succeeded'
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.productError = action.payload;
      })

      // update product
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
        state.prodSuccess = 'loading';
        state.productError = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.prodSuccess = 'succeeded';
        const updated = action.payload;
         if (!updated) return;

  // ✅ Ensure image is string
  if (updated.image instanceof File) {
    updated.image = updated.image.name;
  }
        const index = state.products.findIndex(p => p.id === updated.id);
        if (index !== -1) {
          state.products[index] = updated;
        }
        // if currentProduct is the one updated, update that too
        if (state.currentProduct && state.currentProduct.id === updated.id) {
          state.currentProduct = updated;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.productError = action.payload;
      })

      // delete product
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
        state.productError = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const id = action.payload;
        state.products = state.products.filter(p => p.id !== id);
        // clear currentProduct if it was deleted
        if (state.currentProduct && state.currentProduct.id === id) {
          state.currentProduct = null;
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.productError = action.payload;
      });
  }
});

export const { clearCurrentProduct , setFilter,  clearFilters,} = productSlice.actions;
export default productSlice.reducer;