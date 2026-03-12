import TotalsCard from "@/app/components/dashboard/TotalCard";
import MainLayout from "@/app/components/MainLayout";
import Resources from "@/app/components/resources/Resources";
import { cookies } from "next/headers";
import { BsBox2HeartFill } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { IoFileTrayFull } from "react-icons/io5";

const Dashboard = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("apiToken");

  return (
    <MainLayout>
      <div className="text-sm p-6 max-h-[90%] overflow-y-scroll">
        <div className="grid grid-cols-3 gap-6">
          <TotalsCard
            title="Total Resources"
            value={20}
            iconBgColor="#664bff"
            customStatusElement={<IoFileTrayFull />}
          />
          <TotalsCard
            title="Total Users"
            value={20}
            iconBgColor="#f04c1f"
            customStatusElement={<ImUser />}
          />
          <TotalsCard
            title="Liked Resources"
            value={5}
            iconBgColor="#0e98fb"
            customStatusElement={<BsBox2HeartFill />}
          />
        </div>

        <div className="space-y-3 mt-6">
          <h3 className="font-cabinetG font-semibold text-lg">
            Recent Resources
          </h3>

          <Resources preview={true} token={token?.value} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
