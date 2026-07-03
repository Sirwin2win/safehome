// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as maintenanceAPI from "./maintenanceApi";
// Thunks
export const fetchMaintenances = createAsyncThunk(
  "maintenance/fetchMaintenances",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await maintenanceAPI.fetchMaintenancesAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// fetchMyMaintenanceAPI
// Fetch My leases
export const fetchMyMaintenance = createAsyncThunk(
  "maintenance/fetchMyMaintenance",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await maintenanceAPI.fetchMyMaintenanceAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// fetch Maintenance
export const fetchMaintenance = createAsyncThunk(
  "maintenance/fetchMaintenance",
  async (id, thunkAPI) => {
    try {
      const response = await maintenanceAPI.fetchMaintenanceIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// create estate logic
export const addMaintenance = createAsyncThunk(
  "maintenance/addMaintenance",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await maintenanceAPI.createMaintenanceAPI(form, token);

      return response.data;
    } catch (err) {
      // return thunkAPI.rejectWithValue(err.response?.data || err.message);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

export const updateMaintenance = createAsyncThunk(
  "maintenance/updateMaintenance",
  async ({ id, status }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await maintenanceAPI.updateMaintenanceAPI(
        id,
        status,
        token,
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const deleteMaintenance = createAsyncThunk(
  "maintenance/deleteMaintenance",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      await maintenanceAPI.deleteMaintenanceAPI(id, token);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Slice
const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    maintenance: [],
    myMaintenance: [],
    currentMaintenance: null, // for editing / viewing one
    mainStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentMaintenance(state) {
      state.currentMaintenance = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all estates
      .addCase(fetchMaintenances.pending, (state) => {
        state.mainStatus = "loading";
        state.error = null;
      })
      .addCase(fetchMaintenances.fulfilled, (state, action) => {
        state.mainStatus = "succeeded";
        state.maintenance = action.payload.data || action.payload;
      })
      .addCase(fetchMaintenances.rejected, (state, action) => {
        state.mainStatus = "failed";
        state.error = action.payload;
      })
      // fetch all myMaintenance
      .addCase(fetchMyMaintenance.pending, (state) => {
        state.mainStatus = "loading";
        state.error = null;
      })
      .addCase(fetchMyMaintenance.fulfilled, (state, action) => {
        state.mainStatus = "succeeded";
        state.myMaintenance = action.payload.data || action.payload;
      })
      .addCase(fetchMyMaintenance.rejected, (state, action) => {
        state.mainStatus = "failed";
        state.error = action.payload;
      })
      // fetch one product
      .addCase(fetchMaintenance.pending, (state) => {
        state.mainStatus = "loading";
        state.error = null;
      })
      .addCase(fetchMaintenance.fulfilled, (state, action) => {
        state.mainStatus = "succeeded";
        state.currentMaintenance = action.payload;
      })
      .addCase(fetchMaintenance.rejected, (state, action) => {
        state.mainStatus = "failed";
        state.error = action.payload;
      })
      // add product
      .addCase(addMaintenance.pending, (state) => {
        state.mainStatus = "loading";
        state.error = null;
      })
      .addCase(addMaintenance.fulfilled, (state, action) => {
        state.mainStatus = "succeeded";
        state.maintenance = action.payload;
      })
      .addCase(addMaintenance.rejected, (state, action) => {
        state.mainStatus = "failed";
        state.error = action.payload;
      })
      // update Estate
      .addCase(updateMaintenance.pending, (state) => {
        state.mainStatus = "loading";
        state.error = null;
      })
      .addCase(updateMaintenance.fulfilled, (state, action) => {
        state.mainStatus = "succeeded";
        const updated = action.payload;
        const index = state.maintenance.findIndex((p) => p.id === updated.id);
        if (index !== -1) {
          state.maintenance[index] = updated;
        }
        // if currentEstate is the one updated, update that too
        if (
          state.currentMaintenance &&
          state.currentMaintenance.id === updated.id
        ) {
          state.currentMaintenance = updated;
        }
      })
      .addCase(updateMaintenance.rejected, (state, action) => {
        state.mainStatus = "failed";
        state.error = action.payload;
      })
      // // delete Category
      .addCase(deleteMaintenance.pending, (state) => {
        state.mainStatus = "loading";
        state.error = null;
      })
      .addCase(deleteMaintenance.fulfilled, (state, action) => {
        state.mainStatus = "succeeded";
        const id = action.payload;
        state.maintenance = state.maintenance.filter((p) => p.id !== id); // clear currentEstate if it was deleted
        if (state.currentMaintenance && state.currentMaintenance.id === id) {
          state.currentMaintenance = null;
        }
      })
      .addCase(deleteMaintenance.rejected, (state, action) => {
        state.mainStatus = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearCurrentEstate } = maintenanceSlice.actions;
export default maintenanceSlice.reducer;
