"use client";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { getSocket } from "../lib/socket";
import { fetchAPI } from "../lib/secureRequest";
import Notifications from "./dashboard/Notifications";
import { useAppStore } from "../store/appStore";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const DashboardNavAction = ({
  userData,
  token,
}: {
  userData: { [key: string]: any };
  token: string | undefined;
}) => {
  const user = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setAuth);
  const {
    notificationCount,
    setNotificationCount,
    incrementNotificationCount,
  } = useAppStore((state) => state);
  const [viewNotofcation, setviewNotofcation] = useState(false);

  const fetchNotifications = async () => {
    const notificationResponse = await fetchAPI(
      `/notifications/${user?.id}/counts?read=false`,
      token,
    );

    if (notificationResponse.status === "success") {
      setNotificationCount(notificationResponse.notificationsCount || 0);
    }
  };

  useEffect(() => {
    const socket = getSocket();
    if (user?.id) {
      socket.connect();

      socket.emit("register", user.id);

      socket.on("notification", (data: any) => {
        toast.success(data.message, { position: "top-right" });
        incrementNotificationCount();
        console.log("Notification Received:", data);
      });
    }

    return () => {
      socket.off("notification");
    };
  }, [user?.id]);

  useEffect(() => {
    if (user?.id) {
      console.log("I ran");
      fetchNotifications();
    }
  }, [user?.id]);

  useEffect(() => {
    if (userData.id) {
      setAuthUser(token || "", userData);
    }
  }, [userData]);

  return (
    <div className="flex space-x-5 relative">
      <Toaster />
      <div
        className="w-max h-max relative cursor-pointer rounded-lg hover:bg-gray-100"
        onClick={() => {
          setviewNotofcation(!viewNotofcation);
        }}
      >
        <Bell className="h-7 w-7 text-gray-500" />

        <p className="absolute py-1 -top-1.25 text-white -right-1.25 bg-primary rounded-full text-[8px] min-w-5 flex items-center justify-center">
          {notificationCount}
        </p>
      </div>

      <p className="text-sm font-medium">
        {(user?.firstName || "") + " " + (user?.lastName || "")}
      </p>

      {viewNotofcation && <Notifications token={token} />}
    </div>
  );
};

export default DashboardNavAction;
