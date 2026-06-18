import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
