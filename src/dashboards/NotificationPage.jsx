import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { markAsReadLocal } from "../features/notifications/notificationSlice";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifications = useSelector((state) => state.notifications.items);

  // Unread first, newest first
  const sortedNotifications = [...notifications].sort((a, b) => {
    if (a.isRead !== b.isRead) {
      return a.isRead ? 1 : -1;
    }

    return new Date(b.createdAt) - new Date(a.createdAt);
  });

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
      } catch (error) {
        console.error("Failed to mark notification as read:", error);
      }
    }

    // Navigate if notification has a link
    if (notification.link) {
      navigate(notification.link);
    }
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>

        <span className="text-sm text-gray-500">{unreadCount} unread</span>
      </div>
      <p className="text-center text-gray-500 my-10">
        Click on each row to mark as read
      </p>

      {/* Notifications List */}
      <div className="bg-white rounded-lg shadow border">
        {sortedNotifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No notifications available
          </div>
        ) : (
          sortedNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`p-4 border-b cursor-pointer transition hover:bg-gray-50 ${
                !notification.isRead
                  ? "bg-blue-50 border-l-4 border-l-blue-500"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className={`text-sm ${
                      !notification.isRead ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {notification.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {notification.message}
                  </p>

                  {notification.createdAt && (
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(notification.createdAt).toLocaleString()}
                    </p>
                  )}
                </div>

                {!notification.isRead && (
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
