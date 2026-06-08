// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as estateAPI from "./estateApi";
// Thunks
export const fetchEstates = createAsyncThunk(
  "estates/fetchEstates",
  async (_, thunkAPI) => {
    try {
      const response = await estateAPI.fetchEstatesAPI();
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const fetchEstate = createAsyncThunk(
  "estates/fetchEstate",
  async (id, thunkAPI) => {
    try {
      const response = await estateAPI.fetchEstateByIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// create estate logic
export const addEstate = createAsyncThunk(
  "estates/addEstate",
  async (estate, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await estateAPI.createEstateAPI(estate, token);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const updateEstate = createAsyncThunk(
  "estates/updateEstate",
  async ({ id, updatedFields }, thunkAPI) => {
    try {
      const response = await estateAPI.updateEstateAPI(id, updatedFields);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const deleteEstate = createAsyncThunk(
  "estates/deleteEstate",
  async (id, thunkAPI) => {
    try {
      await estateAPI.deleteEstateAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Slice
const estateSlice = createSlice({
  name: "estates",
  initialState: {
    estates: [],
    currentEstate: null, // for editing / viewing one
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentEstate(state) {
      state.currentEstate = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all estates
      .addCase(fetchEstates.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEstates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Estates = action.payload;
      })
      .addCase(fetchEstates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // fetch one product
      .addCase(fetchEstate.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEstate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentEstate = action.payload;
      })
      .addCase(fetchEstate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // add product
      .addCase(addEstate.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addEstate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.estates.push(action.payload);
      })
      .addCase(addEstate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // update Estate
      .addCase(updateEstate.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateEstate.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updated = action.payload;
        const index = state.estates.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          state.estates[index] = updated;
        }
        // if currentEstate is the one updated, update that too
        if (state.currentEstate && state.currentEstate.id === updated.id) {
          state.currentEstate = updated;
        }
      })
      .addCase(updateEstate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // delete Category
      .addCase(deleteEstate.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteEstate.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.payload;
        state.estates = state.estates.filter((p) => p.id !== id);
        // clear currentEstate if it was deleted
        if (state.currentEstate && state.currentEstate.id === id) {
          state.currentEstate = null;
        }
      })
      .addCase(deleteEstate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearCurrentEstate } = estateSlice.actions;
export default estateSlice.reducer;
