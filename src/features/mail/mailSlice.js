// src/features/products/productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as mailAPI from "./mailApi";

// Thunks

export const addMail = createAsyncThunk(
  "mails/addMail",
  async (formData, thunkAPI) => {
    try {
      const response = await mailAPI.createMailAPI(formData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

export const resetMail = createAsyncThunk(
  "mails/resetMail",
  async ({ email }, thunkAPI) => {
    try {
      const { data } = await mailAPI.resetMailAPI(email);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || {
          message: "Unable to process password reset request.",
        },
      );
    }
  },
);

export const resetPassword = createAsyncThunk(
  "mails/resetPassword",
  async ({ token, password }, thunkAPI) => {
    try {
      const response = await mailAPI.resetPasswordAPI({
        token,
        password,
      });

      return response.data;
    } catch (error) {
      console.error(
        "Reset password API error:",
        error.response?.data || error.message,
      );

      return thunkAPI.rejectWithValue(
        error.response?.data || {
          message: "Unable to reset your password.",
        },
      );
    }
  },
);

// Slice

const mailSlice = createSlice({
  name: "mails",
  initialState: {
    mails: [],
    //currentMail: null,  // for editing / viewing one
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    resetStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    resetPasswordStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // add mail
      .addCase(addMail.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addMail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mails.push(action.payload);
      })
      .addCase(addMail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // reset mail
      .addCase(resetMail.pending, (state) => {
        state.resetStatus = "loading";
        state.error = null;
      })
      .addCase(resetMail.fulfilled, (state, action) => {
        state.resetStatus = "succeeded";
        state.mails.push(action.payload);
      })
      .addCase(resetMail.rejected, (state, action) => {
        state.resetStatus = "failed";

        state.error =
          action.payload?.message ||
          "Unable to process password reset request.";
      })

      // update mail
      .addCase(resetPassword.pending, (state) => {
        state.resetPasswordStatus = "loading";
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.resetPasswordStatus = "succeeded";
        state.mails.push(action.payload);
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPasswordStatus = "failed";
        state.error = action.payload;
      });
  },
});

// export const { clearCurrentCategory } = categorySlice.actions;

export default mailSlice.reducer;
