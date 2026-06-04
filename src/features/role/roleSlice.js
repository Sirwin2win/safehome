// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as roleAPI from "./roleApi";
// Thunks
export const fetchRoles = createAsyncThunk(
  "roles/fetchRoles",
  async (_, thunkAPI) => {
    try {
      const response = await roleAPI.fetchRolesAPI();
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const fetchRole = createAsyncThunk(
  "roles/fetchRole",
  async (id, thunkAPI) => {
    try {
      const response = await roleAPI.fetchRoleByIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const addRole = createAsyncThunk(
  "roles/addRole",
  async (role, thunkAPI) => {
    try {
      const response = await roleAPI.createRoleAPI(role);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const updateRole = createAsyncThunk(
  "roles/updateRole",
  async ({ id, updatedFields }, thunkAPI) => {
    try {
      const response = await roleAPI.updateRoleAPI(id, updatedFields);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const deleteRole = createAsyncThunk(
  "roles/deleteRole",
  async (id, thunkAPI) => {
    try {
      await roleAPI.deleteRoleAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Slice
const roleSlice = createSlice({
  name: "roles",
  initialState: {
    roles: [],
    currentRole: null, // for editing / viewing one
    roleStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    roleError: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentRole(state) {
      state.currentRole = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all products
      .addCase(fetchRoles.pending, (state) => {
        state.roleStatus = "loading";
        state.roleError = null;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.roleStatus = "succeeded";
        state.roles = action.payload;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.roleStatus = "failed";
        state.roleError = action.payload;
      })
      // fetch one product
      .addCase(fetchRole.pending, (state) => {
        state.roleStatus = "loading";
        state.roleError = null;
      })
      .addCase(fetchRole.fulfilled, (state, action) => {
        state.roleStatus = "succeeded";
        state.currentRole = action.payload;
      })
      .addCase(fetchRole.rejected, (state, action) => {
        state.roleStatus = "failed";
        state.roleError = action.payload;
      })
      // add product
      .addCase(addRole.pending, (state) => {
        state.roleStatus = "loading";
        state.roleError = null;
      })
      .addCase(addRole.fulfilled, (state, action) => {
        state.roleStatus = "succeeded";
        state.roles.push(action.payload);
      })
      .addCase(addRole.rejected, (state, action) => {
        state.roleStatus = "failed";
        state.roleError = action.payload;
      })
      // update Role
      .addCase(updateRole.pending, (state) => {
        state.roleStatus = "loading";
        state.roleError = null;
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.roleStatus = "succeeded";
        const updated = action.payload;
        const index = state.roles.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          state.roles[index] = updated;
        }
        // if currentRole is the one updated, update that too
        if (state.currentRole && state.currentRole.id === updated.id) {
          state.currentRole = updated;
        }
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.roleStatus = "failed";
        state.roleError = action.payload;
      })
      // delete Role
      .addCase(deleteRole.pending, (state) => {
        state.roleStatus = "loading";
        state.roleError = null;
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.roleStatus = "succeeded";
        const id = action.payload;
        state.roles = state.roles.filter((p) => p.id !== id);
        // clear currentRole if it was deleted
        if (state.currentRole && state.currentRole.id === id) {
          state.currentRole = null;
        }
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.roleStatus = "failed";
        state.roleError = action.payload;
      });
  },
});
export const { clearCurrentRole } = roleSlice.actions;
export default roleSlice.reducer;
