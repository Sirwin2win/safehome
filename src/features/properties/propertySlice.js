import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as propertyAPI from './propertyAPI';
import axios from 'axios';



const url = 'https://api.safehomeproperties.com/api/properties';

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

export const fetchProperties =
  createAsyncThunk(
    "properties/fetchProperties",

    async (_, thunkAPI) => {
      try {
        const state =
          thunkAPI.getState();

        const filters =
          state.properties.filters;

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


export const fetchProperty = createAsyncThunk(
  'properties/fetchProperty',
  async (id, thunkAPI) => {
    try {
      const response = await propertyAPI.fetchPropertyByIdAPI(id);
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const addProperty = createAsyncThunk(
  'properties/addProperty',
  async (property, thunkAPI) => {
    try {
      const response = await propertyAPI.createPropertyAPI(property);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateProperty = createAsyncThunk(
  'properties/updateProperty',
  async ({ id, property }, thunkAPI) => {
    try {
      const response = await axios.patch(`${url}/${id}`, property);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);

export const deleteProperty = createAsyncThunk(
  'properties/deleteProperty',
  async (id, thunkAPI) => {
    try {
      await propertyAPI.deletePropertyAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Slice

const propertySlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    currentProperty: null,  // for editing / viewing one
    propStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    propError: null,
     total: 0,

  totalPages: 0,

  filters: {
    search: "",
    address: "",
    // category: "",
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
    clearCurrentProperty(state) {
      state.currentProperty = null;
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
        address: "",
        // category: "",
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
      .addCase(fetchProperties.pending, (state) => {
        state.propStatus = 'loading';
        state.propError = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.propStatus = 'succeeded';
        state.properties = action.payload.data;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.propStatus = 'failed';
        state.propError = action.payload;
      })

      // fetch one product
      .addCase(fetchProperty.pending, (state) => {
        state.propStatus = 'loading';
        state.propError = null;
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.propStatus = 'succeeded';
        state.currentProperty = action.payload;
      })
      .addCase(fetchProperty.rejected, (state, action) => {
        state.propStatus = 'failed';
        state.propError = action.payload;
      })

      // add product
      .addCase(addProperty.pending, (state) => {
        state.propStatus = 'loading';
        state.propError = null;
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.propStatus = 'succeeded';
        state.properties.push(action.payload);
      })
      .addCase(addProperty.rejected, (state, action) => {
        state.propStatus = 'failed';
        state.propError = action.payload;
      })

      // update product
      .addCase(updateProperty.pending, (state) => {
        state.propStatus = 'loading';
        state.propError = null;
      })
      .addCase(updateProperty.fulfilled, (state, action) => {
        state.propStatus = 'succeeded';
        const updated = action.payload;
         if (!updated) return;

  // ✅ Ensure image is string
  if (updated.image instanceof File) {
    updated.image = updated.image.name;
  }
        const index = state.properties.findIndex(p => p.id === updated.id);
        if (index !== -1) {
          state.properties[index] = updated;
        }
        // if currentProduct is the one updated, update that too
        if (state.currentProperty && state.currentProperty.id === updated.id) {
          state.currentProperty = updated;
        }
      })
      .addCase(updateProperty.rejected, (state, action) => {
        state.propStatus = 'failed';
        state.propError = action.payload;
      })

      // delete product
      .addCase(deleteProperty.pending, (state) => {
        state.propStatus = 'loading';
        state.propError = null;
      })
      .addCase(deleteProperty.fulfilled, (state, action) => {
        state.propStatus = 'succeeded';
        const id = action.payload;
        state.properties = state.properties.filter(p => p.id !== id);
        // clear currentProduct if it was deleted
        if (state.currentProperty && state.currentProperty.id === id) {
          state.currentProperty = null;
        }
      })
      .addCase(deleteProperty.rejected, (state, action) => {
        state.propStatus = 'failed';
        state.propError = action.payload;
      });
  }
});

export const { clearCurrentProperty , setFilter,  clearFilters,} = propertySlice.actions;
export default propertySlice.reducer;