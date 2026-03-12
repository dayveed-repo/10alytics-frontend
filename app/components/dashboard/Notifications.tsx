import { fetchAPI } from "@/app/lib/secureRequest";
import { useAppStore } from "@/app/store/appStore";
import { useAuthStore } from "@/app/store/authStore";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Notifications = ({ token }: { token: string | undefined }) => {
  const [notifications, setnotifications] = useState<{ [key: string]: any }[]>(
    [],
  );
  const [loading, setloading] = useState(false);
  const user = useAuthStore((state) => state.user);
  const { setNotificationCount } = useAppStore((state) => state);

  const fetchNotifications = async () => {
    setloading(true);
    const notsResponse = await fetchAPI(`/notifications/${user?.id}`, token);

    if (notsResponse.status === "success") {
      setnotifications(notsResponse.notifications);
      readNotifications();
    }

    setloading(false);
  };

  const readNotifications = async () => {
    setloading(true);
    const notsResponse = await fetchAPI(
      `/notifications/read/${user?.id}`,
      token,
    );

    if (notsResponse.status === "success") {
      fetchNotifications();
      setNotificationCount(0);
    }

    setloading(false);
  };

  useEffect(() => {
    if (user?.id) {
      fetchNotifications();
    }
  }, [user?.id]);

  //   useEffect(() => {
  //     if (notifications.length) {
  //       ReadNotifications();
  //     }
  //   }, [triggerRead]);

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-4 absolute top-full right-0 w-[60vh]">
      <h4 className="text-xl font-cabinetG font-semibold">Notifications</h4>

      <div className="mt-4 pt-4 border-t border-gray-200 max-h-[40vh] overflow-y-auto">
        {loading ? (
          <div className="space-y-3">
            {new Array(4).fill("").map((_) => (
              <Skeleton height={30} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id}>
                <div className="flex items-center justify-between">
                  <p
                    className={`text-xs  ${notification.read ? "text-gray-600 font-medium" : "text-foreground font-semibold"}`}
                  >
                    {notification.title}
                  </p>

                  <p className="text-[10px] text-gray-500 font-light">
                    {moment(notification?.createdAt).fromNow()}
                  </p>
                </div>

                <p
                  className={`text-[10px] ${notification.read ? "text-gray-600 font-normal" : "text-foreground/60 font-medium"}`}
                >
                  {notification.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
