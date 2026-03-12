import Image from "next/image";
import React from "react";

const AuthLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-30% from-transparent to-primary/30 w-full font-brF py-14">
      <div className="w-[90%] max-w-3xl">
        <Image
          height={0}
          width={0}
          src="/images/logo.svg"
          alt="10anlytics"
          className="h-10 w-auto mx-auto"
        />

        <h2 className="text-foreground text-3xl mt-5 text-center font-semibold font-cabinetG">
          {title}
        </h2>

        <div className="bg-white shadow-lg rounded-lg py-6 relative mt-8 px-6 max-w-150 mx-auto">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
