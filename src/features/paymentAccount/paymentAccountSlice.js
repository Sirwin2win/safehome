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
// verify landlord payment account
export const verifyAccount = createAsyncThunk(
  "paymentAccounts/verifyAccount",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await paymentAccountAPI.verifyAccountAPI(form, token);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// create estate logic
export const addPaymentAccount = createAsyncThunk(
  "paymentAccounts/addPaymentAccount",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await paymentAccountAPI.createPaymentAccountAPI(
        form,
        token,
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// export const updateEstate = createAsyncThunk(
//   "estates/updateEstate",
//   async ({ id, formData }, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await estateAPI.updateEstateAPI(id, formData, token);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );
// export const deleteEstate = createAsyncThunk(
//   "estates/deleteEstate",
//   async (id, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       await estateAPI.deleteEstateAPI(id, token);
//       return id;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   },
// );
// Slice
const paymentAccountSlice = createSlice({
  name: "paymentAccounts",
  initialState: {
    paymentAccounts: [],
    currentpaymentAccount: null, // for editing / viewing one
    PAStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    verify: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentpaymentAccount(state) {
      state.currentpaymentAccount = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all estates
      .addCase(fetchEstates.pending, (state) => {
        state.PAStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEstates.fulfilled, (state, action) => {
        state.PAStatus = "succeeded";
        state.estates = action.payload.data || action.payload;
      })
      .addCase(fetchEstates.rejected, (state, action) => {
        state.PAStatus = "failed";
        state.error = action.payload;
      })
      // fetch one product
      .addCase(fetchEstate.pending, (state) => {
        state.PAStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEstate.fulfilled, (state, action) => {
        state.PAStatus = "succeeded";
        state.currentEstate = action.payload;
      })
      .addCase(fetchEstate.rejected, (state, action) => {
        state.PAStatus = "failed";
        state.error = action.payload;
      })
      // verify payment account
      .addCase(verifyAccount.pending, (state) => {
        state.PAStatus = "loading";
        state.error = null;
      })
      .addCase(verifyAccount.fulfilled, (state, action) => {
        state.PAStatus = "succeeded";
        state.verify = action.payload.data || action.payload;
      })
      .addCase(verifyAccount.rejected, (state, action) => {
        state.PAStatus = "failed";
        state.error = action.payload;
      })
      // add payment account
      .addCase(addPaymentAccount.pending, (state) => {
        state.PAStatus = "loading";
        state.error = null;
      })
      .addCase(addPaymentAccount.fulfilled, (state, action) => {
        state.PAStatus = "succeeded";
        state.estates.push(action.payload);
      })
      .addCase(addPaymentAccount.rejected, (state, action) => {
        state.PAStatus = "failed";
        state.error = action.payload;
      })
      // update Estate
      .addCase(updateEstate.pending, (state) => {
        state.PAStatus = "loading";
        state.error = null;
      })
      .addCase(updateEstate.fulfilled, (state, action) => {
        state.PAStatus = "succeeded";
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
        state.PAStatus = "failed";
        state.error = action.payload;
      })
      // delete Category
      .addCase(deleteEstate.pending, (state) => {
        state.PAStatus = "loading";
        state.error = null;
      })
      .addCase(deleteEstate.fulfilled, (state, action) => {
        state.PAStatus = "succeeded";
        const id = action.payload;
        state.estates = state.estates.filter((p) => p.id !== id);
        // clear currentEstate if it was deleted
        if (state.currentEstate && state.currentEstate.id === id) {
          state.currentEstate = null;
        }
      })
      .addCase(deleteEstate.rejected, (state, action) => {
        state.PAStatus = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearCurrentEstate } = estateSlice.actions;
export default estateSlice.reducer;
