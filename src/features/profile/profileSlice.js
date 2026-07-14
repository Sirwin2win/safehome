// src/features/profile/profileSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as profileAPI from "./profileAPI";

// Get Profile
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await profileAPI.fetchProfileAPI(token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// Create or Update Profile
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (formData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await profileAPI.updateProfileAPI(formData, token);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// Delete Profile
export const deleteProfile = createAsyncThunk(
  "profile/deleteProfile",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      await profileAPI.deleteProfileAPI(token);

      return true;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

const profileSlice = createSlice({
  name: "profile",

  initialState: {
    profile: null,
    profileStatus: "idle",
    profileError: null,
  },

  reducers: {
    clearProfile(state) {
      state.profile = null;
      state.profileStatus = "idle";
      state.profileError = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch Profile
      .addCase(fetchProfile.pending, (state) => {
        state.profileStatus = "loading";
        state.profileError = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profileStatus = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.profileStatus = "failed";
        state.profileError = action.payload;
      })

      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.profileStatus = "loading";
        state.profileError = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profileStatus = "succeeded";

        // Merge updated fields with existing profile
        state.profile = {
          ...state.profile,
          ...action.payload,
        };
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.profileStatus = "failed";
        state.profileError = action.payload;
      })

      // Delete Profile
      .addCase(deleteProfile.pending, (state) => {
        state.profileStatus = "loading";
        state.profileError = null;
      })
      .addCase(deleteProfile.fulfilled, (state) => {
        state.profileStatus = "succeeded";
        state.profile = null;
      })
      .addCase(deleteProfile.rejected, (state, action) => {
        state.profileStatus = "failed";
        state.profileError = action.payload;
      });
  },
});

export const { clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
