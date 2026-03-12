import { CheckIcon, CircleSmall } from "lucide-react";
import React from "react";

const PasswordCriteria = ({
  rules,
}: {
  rules: {
    length: boolean;
    uppercase: boolean;
    number: boolean;
    special: boolean;
  };
}) => {
  return (
    <div className="bg-primary-grey rounded-xl p-4">
      <div
        className={`flex items-center space-x-2 ${rules.length ? "text-green-600" : "text-gray-500"}`}
      >
        {rules.length ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <CircleSmall className="h-5 w-5" />
        )}
        <p className="text-xs">Must be at least 6 characters long</p>
      </div>

      <div
        className={`flex items-center space-x-2 ${rules.uppercase ? "text-green-600" : "text-gray-500"}`}
      >
        {rules.uppercase ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <CircleSmall className="h-5 w-5" />
        )}
        <p className="text-xs">Must have at least 1 uppercase letter</p>
      </div>

      <div
        className={`flex items-center space-x-2 ${rules.number ? "text-green-600" : "text-gray-500"}`}
      >
        {rules.number ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <CircleSmall className="h-5 w-5" />
        )}
        <p className="text-xs">Must have at least 1 number</p>
      </div>

      <div
        className={`flex items-center space-x-2 ${rules.special ? "text-green-600" : "text-gray-500"}`}
      >
        {rules.special ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <CircleSmall className="h-5 w-5" />
        )}
        <p className="text-xs">Must have at least 1 special character</p>
      </div>
    </div>
  );
};

export default PasswordCriteria;
