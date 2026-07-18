// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as serviceChargeAPI from "./serviceChargeApi";
// Thunks
// Fetch all Transactions
export const fetchserviceCharges = createAsyncThunk(
  "serviceCharges/fetchserviceCharges",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await serviceChargeAPI.fetchserviceChargesAPI(token);
      // console.log("API Response:", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Fetch My transactions(tenant)
export const fetchMyServiceCharges = createAsyncThunk(
  "serviceCharges/fetchMyTransactions",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await serviceChargeAPI.fetchMyServiceChargesAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

// Fetch Landlord transactions
// export const fetchLandlordTransactions = createAsyncThunk(
//   "transactions/fetchLandlordTransactions",
//   async (_, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await transactionAPI.fetchLandlordTransactionsAPI(token);
//       console.log("API Response:", response.data);
//       return response.data; // assuming your API returns array of products
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );

// create estate logic
export const initialize = createAsyncThunk(
  "serviceCharges/initialize",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await serviceChargeAPI.initializeAPI(form, token);

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
const serviceChargeSlice = createSlice({
  name: "serviceCharges",
  initialState: {
    serviceCharges: [],
    currentServiceCharges: null, // for editing / viewing one
    SCStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    myserviceCharges: [],
    // landlordTransactions: [],
  },
  reducers: {
    // optional non-async actions
    clearCurrentServiceCharges(state) {
      state.currentServiceCharges = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all transactions
      .addCase(fetchserviceCharges.pending, (state) => {
        state.SCStatus = "loading";
        state.error = null;
      })
      .addCase(fetchserviceCharges.fulfilled, (state, action) => {
        state.SCStatus = "succeeded";
        state.serviceCharges = action.payload.data || action.payload;
      })
      .addCase(fetchserviceCharges.rejected, (state, action) => {
        state.SCStatus = "failed";
        state.error = action.payload;
      })
      // fetch my service Charge
      .addCase(fetchMyServiceCharges.pending, (state) => {
        state.SCStatus = "loading";
        state.error = null;
      })
      .addCase(fetchMyServiceCharges.fulfilled, (state, action) => {
        state.SCStatus = "succeeded";
        state.myserviceCharges = action.payload.data || action.payload;
      })
      .addCase(fetchMyServiceCharges.rejected, (state, action) => {
        state.SCStatus = "failed";
        state.error = action.payload;
      })
      // // fetch Landlord leases
      // .addCase(fetchLandlordTransactions.pending, (state) => {
      //   state.SCStatus = "loading";
      //   state.error = null;
      // })
      // .addCase(fetchLandlordTransactions.fulfilled, (state, action) => {
      //   state.SCStatus = "succeeded";
      //   state.landlordTransactions = action.payload.data || action.payload;
      // })
      // .addCase(fetchLandlordTransactions.rejected, (state, action) => {
      //   state.SCStatus = "failed";
      //   state.error = action.payload;
      // })

      .addCase(initialize.pending, (state) => {
        state.SCStatus = "loading";
        state.error = null;
      })
      .addCase(initialize.fulfilled, (state, action) => {
        state.SCStatus = "succeeded";
        state.currentServiceCharges = action.payload.data || action.payload;
      })
      .addCase(initialize.rejected, (state, action) => {
        state.SCStatus = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearCurrentServiceCharges } = serviceChargeSlice.actions;
export default serviceChargeSlice.reducer;
