"use client";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { eraseCookie } from "../lib/cookies";
import Image from "next/image";
import { LuUserCog } from "react-icons/lu";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { getSocket } from "../lib/socket";

const sidebarItems = [
  {
    name: "Home",
    route: "/dashboard",
    icon: AiOutlineHome,
  },
  {
    name: "Resources",
    route: "/resources",
    icon: IoFileTrayFullOutline,
  },
  {
    name: "Settings",
    route: "/settings",
    icon: LuUserCog,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const LogOut = () => {
    eraseCookie("apiTokenExp");
    eraseCookie("apiToken");
    const socket = getSocket();
    socket.disconnect();

    router.push("/login");
  };

  return (
    <div className="w-[12%] px-4 py-5 h-full flex bg-white flex-col items-center border-r border-gray-200">
      <Image
        height={0}
        width={0}
        src="/images/logo.svg"
        alt="10anlytics"
        className="h-14 w-auto mx-auto"
      />

      <div className="space-y-3 mt-6 w-full">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.route}
              className={`flex items-center p-2 rounded-lg hover:text-primary transition-colors ${
                pathname.includes(item.route)
                  ? "bg-primary/20 text-primary"
                  : "bg-transparent text-gray-500"
              }`}
            >
              <Icon className={`text-2xl`} />
              <span className={`text-sm font-medium  ml-1.5`}>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div
        onClick={LogOut}
        className={`flex flex-col cursor-pointer items-center justify-center p-3 rounded-lg bg-transparent text-red-400 hover:text-red-500 hover:bg-red-50 transition-colors relative mt-auto`}
      >
        <AiOutlineLogout className={`text-2xl`} />
        <span className={`text-sm font-medium  mt-1.5`}>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
