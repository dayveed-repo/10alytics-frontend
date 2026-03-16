import Image from "next/image";
import React from "react";

const Conversion = () => {
  return (
    <div className="w-full py-6">
      <div className="flex max-w-[90%] w-fit mx-auto items-center space-x-2.5">
        <Image
          height={0}
          width={0}
          src="/images/actd-logo.png"
          alt="ACTD Logo"
          unoptimized
          className="w-auto h-17.5"
        />

        <p className="text-[1.375rem] leading-7 font-medium">
          Accredited by the American Council of Training and Development (ACTD).
        </p>
      </div>
    </div>
  );
};

export default Conversion;
