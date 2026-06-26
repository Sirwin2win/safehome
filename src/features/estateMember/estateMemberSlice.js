// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as estateMemberAPI from "./estateMemberApi";
// Thunks
export const fetchEstateMembers = createAsyncThunk(
  "estateMembers/fetchEstateMembers",
  async (_, thunkAPI) => {
    try {
       const token = localStorage.getItem("token");
      const response = await estateMemberAPI.fetchEstateMembersAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const fetchEstateMember = createAsyncThunk(
  "estateMembers/fetchEstateMember",
  async (id, thunkAPI) => {
    try {
      const response = await estateMemberAPI.fetchEstateMemberIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// create estate logic
export const addEstateMember = createAsyncThunk(
  "estateMembers/addEstateMember",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await estateMemberAPI.createEstateMemberAPI(form, token);

      return response.data;
    } catch (err) {
      // return thunkAPI.rejectWithValue(err.response?.data || err.message);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

export const updateEstateMember = createAsyncThunk(
  "estates/updateEstateMember",
  async ({ id, status }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await estateMemberAPI.updateEstateMemberAPI(id, status, token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const deleteEstateMember = createAsyncThunk(
  "estates/deleteEstateMember",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      await estateMemberAPI.deleteEstateMemberAPI(id, token);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Slice
const estateMemberSlice = createSlice({
  name: "estateMembers",
  initialState: {
    estateMembers: [],
    currentEstateMember: null, // for editing / viewing one
    emStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentEstateMember(state) {
      state.currentEstateMember = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all estates
      .addCase(fetchEstateMembers.pending, (state) => {
        state.emStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEstateMembers.fulfilled, (state, action) => {
        state.emStatus = "succeeded";
        state.estateMembers = action.payload.data || action.payload;
      })
      .addCase(fetchEstateMembers.rejected, (state, action) => {
        state.emStatus = "failed";
        state.error = action.payload;
      })
      // fetch one product
      .addCase(fetchEstateMember.pending, (state) => {
        state.emStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEstateMember.fulfilled, (state, action) => {
        state.emStatus = "succeeded";
        state.currentEstateMember = action.payload;
      })
      .addCase(fetchEstateMember.rejected, (state, action) => {
        state.emStatus = "failed";
        state.error = action.payload;
      })
      // add product
      .addCase(addEstateMember.pending, (state) => {
        state.emStatus = "loading";
        state.error = null;
      })
      .addCase(addEstateMember.fulfilled, (state, action) => {
        state.emStatus = "succeeded";
        state.estateMembers.push(action.payload);
      })
      .addCase(addEstateMember.rejected, (state, action) => {
        state.emStatus = "failed";
        state.error = action.payload;
      })
    // update Estate
    .addCase(updateEstateMember.pending, (state) => {
      state.emStatus = "loading";
      state.error = null;
    })
    .addCase(updateEstateMember.fulfilled, (state, action) => {
      state.emStatus = "succeeded";
      const updated = action.payload;
      const index = state.estateMembers.findIndex((p) => p.id === updated.id);
      if (index !== -1) {
        state.estateMembers[index] = updated;
      }
      // if currentEstate is the one updated, update that too
      if (state.currentEstateMember && state.currentEstateMember.id === updated.id) {
        state.currentEstateMember = updated;
      }
    })
    .addCase(updateEstateMember.rejected, (state, action) => {
      state.emStatus = "failed";
      state.error = action.payload;
    })
    // // delete Category
    .addCase(deleteEstateMember.pending, (state) => {
      state.emStatus = "loading";
      state.error = null;
    })
    .addCase(deleteEstateMember.fulfilled, (state, action) => {
      state.emStatus = "succeeded";
      const id = action.payload;
state.estateMembers = state.estateMembers.filter((p) => p.id !== id);      // clear currentEstate if it was deleted
      if (state.currentEstateMember && state.currentEstateMember.id === id) {
        state.currentEstateMember = null;
      }
    })
    .addCase(deleteEstateMember.rejected, (state, action) => {
      state.emStatus = "failed";
      state.error = action.payload;
    });
  },
});
export const { clearCurrentEstate } = estateMemberSlice.actions;
export default estateMemberSlice.reducer;
