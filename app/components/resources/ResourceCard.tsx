import { Calendar, User } from "lucide-react";
import moment from "moment";
import Image from "next/image";

const ResourceCard = ({
  imageUrl,
  title,
  author,
  durationInMins,
  dateAdded,
}: {
  imageUrl: string;
  title: string;
  author: string;
  durationInMins: number;
  dateAdded: string;
}) => {
  return (
    <div className="rounded-xl bg-white p-3 shadow-md">
      <Image
        height={0}
        width={0}
        src={imageUrl}
        alt={title}
        unoptimized={true}
        priority={true}
        className="w-full h-32 rounded-xl object-cover"
      />

      <div className="mt-3 flex items-start justify-between space-x-1">
        <h4 className="font-semibold text-base">{title}</h4>

        <p className="text-xs text-gray-400 font-light min-w-max">
          {durationInMins} Mins
        </p>
      </div>

      <div className="flex items-center space-x-3 mt-2">
        <div className="text-xs text-gray-400 space-x-1.5 flex items-center">
          <User className="h-4 w-4" />

          <p>{author}</p>
        </div>

        <div className="text-xs text-gray-400 space-x-1.5 flex items-center">
          <Calendar className="h-4 w-4" />

          <p>{moment(dateAdded).format("DD/MM/YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
