"use client";
import { fetchAPI } from "@/app/lib/secureRequest";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ResourceCard from "./ResourceCard";

const Resources = ({
  preview,
  token,
}: {
  preview: boolean;
  token: string | undefined;
}) => {
  const [resources, setresources] = useState<{ [key: string]: any }[]>([]);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");

  const fetchResources = async () => {
    setloading(true);
    const resourcesResponse = await fetchAPI(
      `/resources?page=1&limit=${preview ? 4 : 20}${search ? `&title=${search}` : ""}`,
      token,
    );

    if (resourcesResponse.status === "success") {
      setresources(resourcesResponse.resources);
    }

    setloading(false);
  };

  useEffect(() => {
    fetchResources();
  }, [search]);

  return (
    <div>
      {!preview && (
        <div className="flex items-center justify-between">
          <p className="max-w-125 text-gray-500">
            Explore available learning resources, watch lessons, and continue
            building your knowledge across different topics.
          </p>
          <form>
            <input
              className="border border-gray-300 outline-none rounded-xl py-1.5 px-2 bg-primary-grey focus:bg-transparent focus-within:border-primary focus:border-2"
              placeholder="Search title"
              onChange={(e) => setsearch(e.target.value)}
            />
          </form>
        </div>
      )}

      <div className="mt-6">
        {loading ? (
          <div className="grid grid-cols-4 gap-6">
            {new Array(8).fill("").map((_) => (
              <Skeleton height={300} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                author={resource?.author || ""}
                dateAdded={resource?.createdAt}
                durationInMins={resource?.videoDurationInMins || 0}
                imageUrl={resource?.thumbnailUrl || ""}
                title={resource?.title || ""}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
