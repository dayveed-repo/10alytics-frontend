import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const TotalsCard = ({
  title,
  value,
  customStatusElement,
  iconBgColor,
}: {
  title: string;
  value: number;
  customStatusElement?: React.ReactNode;
  iconBgColor: string;
}) => {
  return (
    <div
      className={`w-full border border-gray-200 rounded-[10px] p-4 bg-white space-x-4 flex items-center`}
    >
      <div
        className="h-14 w-14 text-white rounded-full flex items-center justify-center text-3xl"
        style={{ background: iconBgColor }}
      >
        {customStatusElement}
      </div>

      <div className="space-y-2">
        <h4 className="text-gray-500 text-sm">{title}</h4>

        <h3 className="text-foreground text-2xl font-semibold leading-8">
          {value.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </h3>
      </div>
    </div>
  );
};

export default TotalsCard;
