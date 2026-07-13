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
      return response.data; // assuming your API returns array of products
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
//Fetch lease by Id
// export const fetchLeaseById = createAsyncThunk(
//   "transactions/fetchLeaseById",
//   async (id, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await leaseAPI.fetchLeaseByIdAPI(id, token);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );

// Fetch Landlord transactions
export const fetchLandlordTransactions = createAsyncThunk(
  "transactions/fetchLandlordTransactions",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await transactionAPI.fetchLandlordTransactionsAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Fetch Lease by Id
// Fetch account by landlord Id
// export const fetchLeaseById = createAsyncThunk(
//   "leases/fetchLeaseById",
//   async (landlordId, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await leaseAPI.fetchLeaseByIdAPI(landlordId, token);

//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );
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
// update lease status
// export const updateLease = createAsyncThunk(
//   "transactions/updateLease",
//   async ({ id, status }, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await leaseAPI.updateLeaseAPI(id, status, token);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );
// // update lease agreement
// export const updateLeaseAgreement = createAsyncThunk(
//   "transactions/updateLeaseAgreement",
//   async ({ id, payload }, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await leaseAPI.updateLeaseAgreementAPI(
//         id,
//         payload,
//         token,
//       );
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );

// // delete a lease
// export const deleteLease = createAsyncThunk(
//   "transactions/deleteLease",
//   async (id, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       await leaseAPI.deleteLeaseAPI(id, token);
//       return id;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );
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
      // fetch one lease
      // .addCase(fetchLeaseById.pending, (state) => {
      //   state.TranStatus = "loading";
      //   state.error = null;
      // })
      // .addCase(fetchLeaseById.fulfilled, (state, action) => {
      //   state.TranStatus = "succeeded";
      //   state.currentLease = action.payload.data || action.payload;
      // })
      // .addCase(fetchLeaseById.rejected, (state, action) => {
      //   state.TranStatus = "failed";
      //   state.error = action.payload;
      // })
      // add Lease
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
    // update Lease status
    // .addCase(updateLease.pending, (state) => {
    //   state.TranStatus = "loading";
    //   state.error = null;
    // })
    // .addCase(updateLease.fulfilled, (state, action) => {
    //   state.TranStatus = "succeeded";
    //   const updated = action.payload;
    //   const index = state.leases.findIndex((p) => p.id === updated.id);
    //   if (index !== -1) {
    //     state.leases[index] = updated;
    //   }
    //   // if currentLease is the one updated, update that too
    //   if (state.currentLease && state.currentLease.id === updated.id) {
    //     state.currentLease = updated;
    //   }
    // })
    // .addCase(updateLease.rejected, (state, action) => {
    //   state.TranStatus = "failed";
    //   state.error = action.payload;
    // })
    // // update Lease Agreement
    // .addCase(updateLeaseAgreement.pending, (state) => {
    //   state.TranStatus = "loading";
    //   state.error = null;
    // })
    // .addCase(updateLeaseAgreement.fulfilled, (state, action) => {
    //   state.TranStatus = "succeeded";
    //   const updated = action.payload;
    //   const index = state.leases.findIndex((p) => p.id === updated.id);
    //   if (index !== -1) {
    //     state.leases[index] = updated;
    //   }
    //   // if currentLease is the one updated, update that too
    //   if (state.currentLease && state.currentLease.id === updated.id) {
    //     state.currentLease = updated;
    //   }
    // })
    // .addCase(updateLeaseAgreement.rejected, (state, action) => {
    //   state.TranStatus = "failed";
    //   state.error = action.payload;
    // })
    // // // delete Lease
    // .addCase(deleteLease.pending, (state) => {
    //   state.TranStatus = "loading";
    //   state.error = null;
    // })
    // .addCase(deleteLease.fulfilled, (state, action) => {
    //   state.TranStatus = "succeeded";
    //   const id = action.payload;
    //   state.leases = state.leases.filter((p) => p.id !== id); // clear currentEstate if it was deleted
    //   if (state.currentLease && state.currentLease.id === id) {
    //     state.currentLease = null;
    //   }
    // })
    // .addCase(deleteLease.rejected, (state, action) => {
    //   state.TranStatus = "failed";
    //   state.error = action.payload;
    // });
  },
});
export const { clearCurrentTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
