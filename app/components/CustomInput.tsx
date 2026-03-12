"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const CustomInput = ({
  label,
  value,
  type,
  onChange,
}: {
  label: string;
  value: string;
  type?: string;
  onChange: (val: string) => void;
}) => {
  const [visible, setvisible] = useState(false);

  return (
    <div className="w-full space-y-2">
      <p className="text-sm leading-5 text-foreground font-medium">{label}</p>

      <div className="border-[#E5E7EB] border bg-primary-grey rounded-lg py-2 px-3 flex items-center space-x-1 w-full focus-within:bg-transparent focus-within:border-primary focus-within:border-2">
        <input
          type={visible ? "text" : type || "text"}
          className="text-sm bg-transparent outline-none w-full"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />

        {type === "password" && (
          <>
            {visible ? (
              <FaEye
                className="text-sm text-[#9CA3AF] cursor-pointer"
                onClick={() => {
                  setvisible(!visible);
                }}
              />
            ) : (
              <FaEyeSlash
                className="text-sm text-[#9CA3AF] cursor-pointer"
                onClick={() => {
                  setvisible(!visible);
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
