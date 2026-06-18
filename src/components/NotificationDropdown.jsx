import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { markAsReadLocal } from "../features/notifications/notificationSlice";

export default function NotificationDropdown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifications = useSelector((state) => state.notifications.items);

  // 🔥 production pattern: unread first, then latest
  const unreadNotifications = notifications.filter((n) => !n.isRead);

  const latestNotifications = unreadNotifications.slice(0, 5);

  const handleNotificationClick = async (notification) => {
    if (!notification.isRead) {
      dispatch(markAsReadLocal(notification.id));

      const token = localStorage.getItem("token");

      try {
        await fetch(
          `https://api.safehomeproperties.com/api/notifications/${notification.id}/read`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );
      } catch (err) {
        console.error(err);
      }
    }

    // optional navigation
    // navigate(notification.link);
  };

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg border z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <h3 className="font-semibold">Notifications</h3>
        <span className="text-sm text-gray-500">
          {unreadNotifications.length} unread
        </span>
      </div>

      {/* Body */}
      {latestNotifications.length === 0 ? (
        <div className="p-4 text-gray-500">No unread notifications</div>
      ) : (
        latestNotifications.map((notification) => (
          <div
            key={notification.id}
            onClick={() => handleNotificationClick(notification)}
            className={`p-3 border-b cursor-pointer hover:bg-gray-100 ${
              !notification.isRead ? "bg-red-50 font-semibold" : ""
            }`}
          >
            <div className="text-sm">{notification.title}</div>
            <div className="text-xs text-gray-600">{notification.message}</div>
          </div>
        ))
      )}

      {/* Footer (View All) */}
      <button
        onClick={() => navigate("notifications")}
        className="w-full p-3 text-center text-blue-600 hover:bg-gray-50 font-medium"
      >
        View All Notifications
      </button>
    </div>
  );
}
