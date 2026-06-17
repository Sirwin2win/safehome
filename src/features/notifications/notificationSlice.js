import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  unreadCount: 0,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.items = action.payload;

      state.unreadCount = action.payload.filter((n) => !n.isRead).length;
    },

    addNotification: (state, action) => {
      const exists = state.items.find((n) => n.id === action.payload.id);

      if (!exists) {
        state.items.unshift(action.payload);
        state.unreadCount += 1;
      }
    },

    setUnreadCount: (state, action) => {
      state.unreadCount = action.payload;
    },

    markAsReadLocal: (state, action) => {
      const id = action.payload;

      const item = state.items.find((n) => n.id === id);

      if (item && !item.isRead) {
        item.isRead = true;
        state.unreadCount -= 1;
      }
    },

    markAllAsReadLocal: (state) => {
      state.items.forEach((n) => (n.isRead = true));
      state.unreadCount = 0;
    },
  },
});

export const {
  setNotifications,
  addNotification,
  setUnreadCount,
  markAsReadLocal,
  markAllAsReadLocal,
} = notificationSlice.actions;

export default notificationSlice.reducer;
