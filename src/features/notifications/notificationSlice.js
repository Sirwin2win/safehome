import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "https://api.safehomeproperties.com/api/notifications";

// Fetch My transactions(tenant)
export const fetchMyNotifications = createAsyncThunk(
  "notifications/fetchMyNotifications",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${API_BASE}/my-notice`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  },
);
const initialState = {
  items: [],
  myNotice: [],
  noticeStatus: "idle",
  error: null,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.items = action.payload;
    },

    addNotification: (state, action) => {
      const data = action.payload;

      // ✅ safety guard
      if (!data?.id) return;

      // prevent duplicates
      const exists = state.items.some((n) => n.id === data.id);

      if (!exists) {
        state.items.unshift(data);
      }
    },

    markAsReadLocal: (state, action) => {
      const id = action.payload;

      const item = state.items.find((n) => n.id === id);

      if (item) {
        item.isRead = true;
      }
    },

    markAllAsReadLocal: (state) => {
      state.items.forEach((n) => {
        n.isRead = true;
      });
    },

    clearNotifications: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all myNotice
      .addCase(fetchMyNotifications.pending, (state) => {
        state.noticeStatus = "loading";
        state.error = null;
      })
      .addCase(fetchMyNotifications.fulfilled, (state, action) => {
        state.noticeStatus = "succeeded";
        state.myNotice = action.payload.data || action.payload;
      })
      .addCase(fetchMyNotifications.rejected, (state, action) => {
        state.noticeStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setNotifications,
  addNotification,
  markAsReadLocal,
  markAllAsReadLocal,
  clearNotifications,
} = notificationSlice.actions;

/**
 * ✅ Derived selector (single source of truth)
 */
export const selectUnreadCount = (state) =>
  state.notifications.items.filter((n) => !n.isRead).length;

export default notificationSlice.reducer;
