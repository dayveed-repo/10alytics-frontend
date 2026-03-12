import { cookies, headers } from "next/headers";
import Sidebar from "./Sidebar";
import DashboardNavAction from "./DashboardAction";
import { fetchAPI } from "../lib/secureRequest";
// import DashboardNavActions from "./DashboardNavActions";

const getPageTitle = (pathname: string) => {
  if (pathname === "/dashboard") return "Dashboard";
  if (pathname.includes("/profile")) return "Profile";
  if (pathname.includes("/resources")) return "Resources";
  return "";
};

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const headerList = await headers();
  const pathname = headerList.get("clientPagePath");

  const cookieStore = await cookies();
  const token = cookieStore.get("apiToken");

  const currentUser = await fetchAPI("/users/profile", token?.value);

  return (
    <main className="flex min-h-screen h-screen bg-[#FAFAFB] w-full overflow-hidden font-brF">
      <Sidebar />

      <div className="md:w-[88%] h-full max-h-full flex flex-col">
        <div className="w-full flex items-center justify-between bg-white py-3 px-7 border-b border-gray-200">
          <h3 className="text-[1.25rem] leading-6 font-semibold">
            {getPageTitle(pathname || "")}
          </h3>

          <DashboardNavAction
            token={token?.value}
            userData={currentUser?.user}
          />
        </div>

        {children}
      </div>
    </main>
  );
};

export default MainLayout;
