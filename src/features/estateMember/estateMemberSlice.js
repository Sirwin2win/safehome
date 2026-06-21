// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as estateMemberAPI from "./estateMemberApi";
// Thunks
export const fetchEstateMembers = createAsyncThunk(
  "estateMembers/fetchEstateMembers",
  async (_, thunkAPI) => {
    try {
       const token = localStorage.getItem("token");
      const response = await estateMemberAPI.fetchEstateMembersAPI(token);
      return response.data; // assuming your API returns array of products
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
export const fetchEstateMember = createAsyncThunk(
  "estateMembers/fetchEstateMember",
  async (id, thunkAPI) => {
    try {
      const response = await estateMemberAPI.fetchEstateMemberByIdAPI(id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
// create estate logic
export const addEstateMember = createAsyncThunk(
  "estateMembers/addEstateMember",
  async (form, thunkAPI) => {
    try {
      //const token = thunkAPI.getState().auth.token; // adjust path as needed
      const token = localStorage.getItem("token");

      const response = await estateMemberAPI.createEstateMemberAPI(form, token);

      return response.data;
    } catch (err) {
      // return thunkAPI.rejectWithValue(err.response?.data || err.message);
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
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
const estateMemberSlice = createSlice({
  name: "estateMembers",
  initialState: {
    estateMembers: [],
    currentEstateMember: null, // for editing / viewing one
    emStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // optional non-async actions
    clearCurrentEstateMember(state) {
      state.currentEstateMember = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all estates
      .addCase(fetchEstateMembers.pending, (state) => {
        state.emStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEstateMembers.fulfilled, (state, action) => {
        state.emStatus = "succeeded";
        state.estateMembers = action.payload.data || action.payload;
      })
      .addCase(fetchEstateMembers.rejected, (state, action) => {
        state.emStatus = "failed";
        state.error = action.payload;
      })
      // fetch one product
      .addCase(fetchEstateMember.pending, (state) => {
        state.emStatus = "loading";
        state.error = null;
      })
      .addCase(fetchEstateMember.fulfilled, (state, action) => {
        state.emStatus = "succeeded";
        state.currentEstate = action.payload;
      })
      .addCase(fetchEstateMember.rejected, (state, action) => {
        state.emStatus = "failed";
        state.error = action.payload;
      })
      // add product
      .addCase(addEstateMember.pending, (state) => {
        state.emStatus = "loading";
        state.error = null;
      })
      .addCase(addEstateMember.fulfilled, (state, action) => {
        state.emStatus = "succeeded";
        state.estateMembers.push(action.payload);
      })
      .addCase(addEstateMember.rejected, (state, action) => {
        state.emStatus = "failed";
        state.error = action.payload;
      });
    // update Estate
    // .addCase(updateEstate.pending, (state) => {
    //   state.emStatus = "loading";
    //   state.error = null;
    // })
    // .addCase(updateEstate.fulfilled, (state, action) => {
    //   state.emStatus = "succeeded";
    //   const updated = action.payload;
    //   const index = state.estates.findIndex((p) => p.id === updated.id);
    //   if (index !== -1) {
    //     state.estates[index] = updated;
    //   }
    //   // if currentEstate is the one updated, update that too
    //   if (state.currentEstate && state.currentEstate.id === updated.id) {
    //     state.currentEstate = updated;
    //   }
    // })
    // .addCase(updateEstate.rejected, (state, action) => {
    //   state.emStatus = "failed";
    //   state.error = action.payload;
    // })
    // // delete Category
    // .addCase(deleteEstate.pending, (state) => {
    //   state.emStatus = "loading";
    //   state.error = null;
    // })
    // .addCase(deleteEstate.fulfilled, (state, action) => {
    //   state.emStatus = "succeeded";
    //   const id = action.payload;
    //   state.estates = state.estates.filter((p) => p.id !== id);
    //   // clear currentEstate if it was deleted
    //   if (state.currentEstate && state.currentEstate.id === id) {
    //     state.currentEstate = null;
    //   }
    // })
    // .addCase(deleteEstate.rejected, (state, action) => {
    //   state.emStatus = "failed";
    //   state.error = action.payload;
    // });
  },
});
export const { clearCurrentEstate } = estateMemberSlice.actions;
export default estateMemberSlice.reducer;
