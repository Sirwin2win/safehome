// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as leaseAPI from "./leaseApi";
// Thunks
// Fetch all leases
export const fetchLeases = createAsyncThunk(
  "leases/fetchLeases",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await leaseAPI.fetchLeasesAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Fetch My leases
export const fetchMyLeases = createAsyncThunk(
  "leases/fetchMyLeases",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await leaseAPI.fetchMyLeasesAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Fetch Landlord leases
export const fetchLandlordLeases = createAsyncThunk(
  "leases/fetchLandlordLeases",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await leaseAPI.fetchLandlordLeasesAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Fetch Lease by Id
export const fetchLease = createAsyncThunk(
  "leases/fetchLease",
  async (id, thunkAPI) => {
    try {
      const response = await leaseAPI.fetchLeaseByIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// create estate logic
export const addLease = createAsyncThunk(
  "leases/addLease",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await leaseAPI.createLeaseAPI(form, token);

      return response.data;
    } catch (err) {
      // return thunkAPI.rejectWithValue(err.response?.data || err.message);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

export const updateLease = createAsyncThunk(
  "leases/updateLease",
  async ({ id, status }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await leaseAPI.updateLeaseAPI(id, status, token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const deleteLease = createAsyncThunk(
  "leases/deleteLease",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      await leaseAPI.deleteLeaseAPI(id, token);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Slice
const leaseSlice = createSlice({
  name: "leases",
  initialState: {
    leases: [],
    currentLease: null, // for editing / viewing one
    leStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    myLease: [],
    landlordLeases: [],
  },
  reducers: {
    // optional non-async actions
    clearCurrentLease(state) {
      state.currentLease = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all leases
      .addCase(fetchLeases.pending, (state) => {
        state.leStatus = "loading";
        state.error = null;
      })
      .addCase(fetchLeases.fulfilled, (state, action) => {
        state.leStatus = "succeeded";
        state.leases = action.payload.data || action.payload;
      })
      .addCase(fetchLeases.rejected, (state, action) => {
        state.leStatus = "failed";
        state.error = action.payload;
      })
      // fetch my leases (tenant)
      .addCase(fetchMyLeases.pending, (state) => {
        state.leStatus = "loading";
        state.error = null;
      })
      .addCase(fetchMyLeases.fulfilled, (state, action) => {
        state.leStatus = "succeeded";
        state.myLease = action.payload.data || action.payload;
      })
      .addCase(fetchMyLeases.rejected, (state, action) => {
        state.leStatus = "failed";
        state.error = action.payload;
      })
      // fetch Landlord leases
      .addCase(fetchLandlordLeases.pending, (state) => {
        state.leStatus = "loading";
        state.error = null;
      })
      .addCase(fetchLandlordLeases.fulfilled, (state, action) => {
        state.leStatus = "succeeded";
        state.landlordLeases = action.payload.data || action.payload;
      })
      .addCase(fetchLandlordLeases.rejected, (state, action) => {
        state.leStatus = "failed";
        state.error = action.payload;
      })
      // fetch one lease
      .addCase(fetchLease.pending, (state) => {
        state.leStatus = "loading";
        state.error = null;
      })
      .addCase(fetchLease.fulfilled, (state, action) => {
        state.leStatus = "succeeded";
        state.currentLease = action.payload;
      })
      .addCase(fetchLease.rejected, (state, action) => {
        state.leStatus = "failed";
        state.error = action.payload;
      })
      // add product
      .addCase(addLease.pending, (state) => {
        state.leStatus = "loading";
        state.error = null;
      })
      .addCase(addLease.fulfilled, (state, action) => {
        state.leStatus = "succeeded";
        state.leases.push(action.payload);
      })
      .addCase(addLease.rejected, (state, action) => {
        state.leStatus = "failed";
        state.error = action.payload;
      })
      // update Estate
      .addCase(updateLease.pending, (state) => {
        state.leStatus = "loading";
        state.error = null;
      })
      .addCase(updateLease.fulfilled, (state, action) => {
        state.leStatus = "succeeded";
        const updated = action.payload;
        const index = state.leases.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          state.leases[index] = updated;
        }
        // if currentEstate is the one updated, update that too
        if (state.currentLease && state.currentLease.id === updated.id) {
          state.currentLease = updated;
        }
      })
      .addCase(updateLease.rejected, (state, action) => {
        state.leStatus = "failed";
        state.error = action.payload;
      })
      // // delete Category
      .addCase(deleteLease.pending, (state) => {
        state.leStatus = "loading";
        state.error = null;
      })
      .addCase(deleteLease.fulfilled, (state, action) => {
        state.leStatus = "succeeded";
        const id = action.payload;
        state.leases = state.leases.filter((p) => p.id !== id); // clear currentEstate if it was deleted
        if (state.currentLease && state.currentLease.id === id) {
          state.currentLease = null;
        }
      })
      .addCase(deleteLease.rejected, (state, action) => {
        state.leStatus = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearCurrentEstate } = leaseSlice.actions;
export default leaseSlice.reducer;
