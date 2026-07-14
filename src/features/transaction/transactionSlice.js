// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as transactionAPI from "./transactionApi";
// Thunks
// Fetch all Transactions
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await transactionAPI.fetchTransactionsAPI(token);
      // console.log("API Response:", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Fetch My transactions(tenant)
export const fetchMyTransactions = createAsyncThunk(
  "transactions/fetchMyTransactions",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await transactionAPI.fetchMyTransactionsAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

// Fetch Landlord transactions
export const fetchLandlordTransactions = createAsyncThunk(
  "transactions/fetchLandlordTransactions",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await transactionAPI.fetchLandlordTransactionsAPI(token);
      console.log("API Response:", response.data);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

// create estate logic
export const initialize = createAsyncThunk(
  "transactions/initialize",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await transactionAPI.initializeAPI(form, token);

      return response.data;
    } catch (err) {
      // return thunkAPI.rejectWithValue(err.response?.data || err.message);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// Slice
const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    currentTransactions: null, // for editing / viewing one
    TranStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    myTransactions: [],
    landlordTransactions: [],
  },
  reducers: {
    // optional non-async actions
    clearCurrentTransactions(state) {
      state.currentTransactions = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all transactions
      .addCase(fetchTransactions.pending, (state) => {
        state.TranStatus = "loading";
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.TranStatus = "succeeded";
        state.transactions = action.payload.data || action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.TranStatus = "failed";
        state.error = action.payload;
      })
      // fetch my leases (tenant)
      .addCase(fetchMyTransactions.pending, (state) => {
        state.TranStatus = "loading";
        state.error = null;
      })
      .addCase(fetchMyTransactions.fulfilled, (state, action) => {
        state.TranStatus = "succeeded";
        state.myTransactions = action.payload.data || action.payload;
      })
      .addCase(fetchMyTransactions.rejected, (state, action) => {
        state.TranStatus = "failed";
        state.error = action.payload;
      })
      // fetch Landlord leases
      .addCase(fetchLandlordTransactions.pending, (state) => {
        state.TranStatus = "loading";
        state.error = null;
      })
      .addCase(fetchLandlordTransactions.fulfilled, (state, action) => {
        state.TranStatus = "succeeded";
        state.landlordTransactions = action.payload.data || action.payload;
      })
      .addCase(fetchLandlordTransactions.rejected, (state, action) => {
        state.TranStatus = "failed";
        state.error = action.payload;
      })

      .addCase(initialize.pending, (state) => {
        state.TranStatus = "loading";
        state.error = null;
      })
      .addCase(initialize.fulfilled, (state, action) => {
        state.TranStatus = "succeeded";
        state.currentTransactions = action.payload.data || action.payload;
      })
      .addCase(initialize.rejected, (state, action) => {
        state.TranStatus = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearCurrentTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
