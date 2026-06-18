import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setNotifications } from "../features/notifications/notificationSlice";

export const useNotificationInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token"); // or from redux/auth

        const notifRes = await axios.get(
          "https://api.safehomeproperties.com/api/notifications?page=1&limit=20",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data =
          notifRes?.data?.data ||
          notifRes?.data?.notifications ||
          notifRes?.data ||
          [];

        dispatch(setNotifications(data));
      } catch (err) {
        console.error("Failed to load notifications:", err);
      }
    };

    load();
  }, [dispatch]);
};
