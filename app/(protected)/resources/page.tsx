import MainLayout from "@/app/components/MainLayout";
import Resources from "@/app/components/resources/Resources";
import { cookies } from "next/headers";

const ResourcesPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("apiToken");

  return (
    <MainLayout>
      <div className="p-6 max-h-[90%] overflow-y-scroll">
        <div className="space-y-4">
          <Resources preview={false} token={token?.value} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;
