// features/notifications/notificationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",

  initialState: {
    items: [],
    unreadCount: 0,
  },

  reducers: {
    addNotification: (state, action) => {
      state.items.unshift(action.payload);

      state.unreadCount += 1;
    },

    setNotifications: (state, action) => {
      state.items = action.payload;

      state.unreadCount = action.payload.filter((n) => !n.is_read).length;
    },

    markAsRead: (state, action) => {
      const notification = state.items.find((n) => n.id === action.payload);

      if (notification && !notification.is_read) {
        notification.is_read = true;

        state.unreadCount -= 1;
      }
    },
  },
});

export const { addNotification, setNotifications, markAsRead } =
  notificationSlice.actions;

export default notificationSlice.reducer;
