// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as permissionAPI from "./permissionApi";
// Thunks
export const fetchPermissions = createAsyncThunk(
  "permissions/fetchPermissions",
  async (_, thunkAPI) => {
    try {
      const response = await permissionAPI.fetchPermissionsAPI();
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const fetchPermission = createAsyncThunk(
  "permissions/fetchPermission",
  async (id, thunkAPI) => {
    try {
      const response = await permissionAPI.fetchPermissionByIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const addPermission = createAsyncThunk(
  "permissions/addPermission",
  async (permission, thunkAPI) => {
    try {
      const response = await permissionAPI.createPermissionAPI(permission);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const updatePermission = createAsyncThunk(
  "permissions/updatePermission",
  async ({ id, updatedFields }, thunkAPI) => {
    try {
      const response = await permissionAPI.updatePermissionAPI(
        id,
        updatedFields,
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const deletePermission = createAsyncThunk(
  "permissions/deletePermission",
  async (id, thunkAPI) => {
    try {
      await permissionAPI.deletePermissionAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Slice
const permissionSlice = createSlice({
  name: "permissions",
  initialState: {
    permissions: [],
    currentPermission: null, // for editing / viewing one
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentPermission(state) {
      state.currentPermission = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all products
      .addCase(fetchPermissions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPermissions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.permissions = action.payload;
      })
      .addCase(fetchPermissions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // fetch one product
      .addCase(fetchPermission.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPermission.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentPermission = action.payload;
      })
      .addCase(fetchPermission.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // add product
      .addCase(addPermission.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addPermission.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.permissions.push(action.payload);
      })
      .addCase(addPermission.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // update Permission
      .addCase(updatePermission.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updatePermission.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updated = action.payload;
        const index = state.permissions.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          state.permissions[index] = updated;
        }
        // if currentPermission is the one updated, update that too
        if (
          state.currentPermission &&
          state.currentPermission.id === updated.id
        ) {
          state.currentPermission = updated;
        }
      })
      .addCase(updatePermission.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // delete Permission
      .addCase(deletePermission.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deletePermission.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.payload;
        state.permissions = state.permissions.filter((p) => p.id !== id);
        // clear currentPermission if it was deleted
        if (state.currentPermission && state.currentPermission.id === id) {
          state.currentPermission = null;
        }
      })
      .addCase(deletePermission.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearCurrentPermission } = permissionSlice.actions;
export default permissionSlice.reducer;
