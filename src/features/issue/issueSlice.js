// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as issueAPI from "./issueApi";
// Thunks
// Fetch all leases
export const fetchIssues = createAsyncThunk(
  "issues/fetchIssues",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await issueAPI.fetchIssuesAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Fetch My leases(tenant)
export const fetchMyIssues = createAsyncThunk(
  "issues/fetchMyIssues",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await issueAPI.fetchMyIssueAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
//Fetch lease by Id
export const fetchIssueById = createAsyncThunk(
  "issues/fetchIssueById",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await issueAPI.fetchIssueByIdAPI(id, token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);

// create estate logic
export const addIssue = createAsyncThunk(
  "issues/addIssue",
  async (issue, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await issueAPI.createIssueAPI(issue, token);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const updateIssue = createAsyncThunk(
  "issues/updateIssue",
  async ({ id, formData }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await issueAPI.updateIssueAPI(id, formData, token);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const deleteIssue = createAsyncThunk(
  "issues/deleteIssue",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      await issueAPI.deleteIssueAPI(id, token);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Slice
const issueSlice = createSlice({
  name: "issues",
  initialState: {
    issues: [],
    currentIssue: null, // for editing / viewing one
    IStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    myIssues: [],
    IError: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentIssue(state) {
      state.currentIssue = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all issues
      .addCase(fetchIssues.pending, (state) => {
        state.IStatus = "loading";
        state.IError = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.IStatus = "succeeded";
        state.issues = action.payload.data || action.payload;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.IStatus = "failed";
        state.IError = action.payload;
      })
      // fetch all issues
      .addCase(fetchMyIssues.pending, (state) => {
        state.IStatus = "loading";
        state.IError = null;
      })
      .addCase(fetchMyIssues.fulfilled, (state, action) => {
        state.IStatus = "succeeded";
        state.myIssues = action.payload.data || action.payload;
      })
      .addCase(fetchMyIssues.rejected, (state, action) => {
        state.IStatus = "failed";
        state.IError = action.payload;
      })
      // fetch one product
      .addCase(fetchIssueById.pending, (state) => {
        state.IStatus = "loading";
        state.IError = null;
      })
      .addCase(fetchIssueById.fulfilled, (state, action) => {
        state.IStatus = "succeeded";
        state.currentIssue = action.payload;
      })
      .addCase(fetchIssueById.rejected, (state, action) => {
        state.IStatus = "failed";
        state.IError = action.payload;
      })
      // add product
      .addCase(addIssue.pending, (state) => {
        state.IStatus = "loading";
        state.IError = null;
      })
      .addCase(addIssue.fulfilled, (state, action) => {
        state.IStatus = "succeeded";
        state.issues.push(action.payload);
      })
      .addCase(addIssue.rejected, (state, action) => {
        state.IStatus = "failed";
        state.IError = action.payload;
      })
      // update Estate
      .addCase(updateIssue.pending, (state) => {
        state.IStatus = "loading";
        state.IError = null;
      })
      .addCase(updateIssue.fulfilled, (state, action) => {
        state.IStatus = "succeeded";
        const updated = action.payload;
        const index = state.issues.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          state.issues[index] = updated;
        }
        // if currentEstate is the one updated, update that too
        if (state.currentIssue && state.currentIssue.id === updated.id) {
          state.currentIssue = updated;
        }
      })
      .addCase(updateIssue.rejected, (state, action) => {
        state.IStatus = "failed";
        state.IError = action.payload;
      })
      // delete Category
      .addCase(deleteIssue.pending, (state) => {
        state.IStatus = "loading";
        state.IError = null;
      })
      .addCase(deleteIssue.fulfilled, (state, action) => {
        state.IStatus = "succeeded";
        const id = action.payload;
        state.issues = state.issues.filter((p) => p.id !== id);
        // clear currentEstate if it was deleted
        if (state.currentIssue && state.currentIssue.id === id) {
          state.currentIssue = null;
        }
      })
      .addCase(deleteIssue.rejected, (state, action) => {
        state.IStatus = "failed";
        state.IError = action.payload;
      });
  },
});
export const { clearCurrentIssue } = issueSlice.actions;
export default issueSlice.reducer;
