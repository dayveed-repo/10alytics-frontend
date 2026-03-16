import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const users = [
  {
    id: 1,
    avatar: "/images/avatar-1.svg",
  },
  {
    id: 2,
    avatar: "/images/avatar-2.svg",
  },
  {
    id: 3,
    avatar: "/images/avatar-3.svg",
  },
  {
    id: 4,
    avatar: "/images/avatar-4.svg",
  },
];

const companies = [
  "/images/company-1.svg",
  "/images/company-2.svg",
  "/images/company-3.svg",
  "/images/company-4.svg",
  "/images/company-5.svg",
];

const HeroSection = () => {
  return (
    <div className="w-full bg-[#FFFEEC] relative pt-10 pb-16.75 overflow-x-clip">
      <Image
        height={0}
        width={0}
        src="/images/hero-grid.png"
        alt="Hero Grid"
        unoptimized
        className="top-0 left-6 w-full h-auto absolute"
      />

      <div className="relative z-20 flex flex-col items-center max-w-184 mx-auto space-y-5">
        <button className="relative flex items-center justify-center space-x-2 text-white font-bold font-cabinetG leading-8 rounded-2xl bg-[#1A3B42] min-h-9.25 min-w-63.75">
          <Image
            height={0}
            width={0}
            src="/images/btn-star.svg"
            alt="Star"
            className="-top-2.5 -left-2.5 w-7 h-7 absolute"
            priority
          />
          <p>Career Transformation Starts</p>

          <IoArrowForwardCircleOutline className="text-base" />
        </button>

        <h1 className="text-[#1C0D05] font-medium text-[4.75rem] leading-19 font-cabinetG text-center">
          Build Your Global <br />{" "}
          <span className="text-[#DB6700]">Tech Career</span>
        </h1>

        <p className="text-primary-text-gray font-medium text-[1.15rem] leading-7 text-center">
          Learn job-ready tech skills that employers actually hire for. At
          10Alytics, we help beginners, career switchers, and immigrants break
          into data, business, and emerging tech roles with confidence.
        </p>

        <div className="flex items-center space-x-7">
          <button className="rounded-2xl py-4 px-8 text-white font-medium text-[1rem] leading-6 bg-linear-to-r from-[#DB6700] to-[#89715F]">
            Talk to a Career Coach
          </button>

          <Image
            height={0}
            width={0}
            src="/images/play-card.svg"
            alt="Play"
            className="w-12.75 h-12.75"
          />
        </div>

        <div className="w-fit mx-auto flex items-center">
          <div className="flex -space-x-3">
            {users.map((user) => (
              <Image
                key={user.id}
                height={0}
                width={0}
                src={user.avatar}
                alt="Avatar"
                unoptimized
                className="w-8.5 h-auto"
              />
            ))}
          </div>

          <p className="text-primary-text-gray text-[0.875rem] leading-4.5 font-medium ml-2.25">
            Trusted by over 500 students
          </p>

          <p className="text-primary-text-gray text-[0.875rem] leading-4.5 font-medium ml-1.5">
            | 4.8
          </p>

          <div className="flex items-center space-x-1">
            <Image
              height={0}
              width={0}
              src="/images/trust-pilot.svg"
              alt="TrustPilot"
              className="w-5.25 h-auto"
            />
            <p className="text-[0.8125rem] leading-5.5 text-[#2E6F40] font-medium">
              Trustpilot
            </p>
          </div>

          <p className="text-primary-text-gray text-[0.875rem] leading-4.5 font-medium ml-0.75">
            | 4.8
          </p>

          <Image
            height={0}
            width={0}
            src="/images/google-logo.svg"
            alt="Google"
            className="w-5.25 h-auto"
          />
        </div>
      </div>

      <div className="border border-[#CACACA] p-6 rounded-3xl mt-14.5 max-w-259.75 mx-auto">
        <Image
          height={0}
          width={0}
          src="/images/hero-image.png"
          alt="Hero Image"
          unoptimized
          className="w-full h-auto max-h-[495px] object-cover shadow-2xl rounded-3xl"
        />
      </div>

      <div className="w-full max-w-[90%] mx-auto flex items-center mt-7 space-x-8">
        <p className="text-[#5A5555] text-[1.25rem] leading-[170%] font-medium max-w-[30%]">
          <span className="font-bold">Join</span>{" "}
          <span className="text-[#DB6700] font-bold">3,000+</span> 10Alytics
          alumni now working across leading global tech companies.
        </p>

        <div className="relative overflow-hidden w-[70%]">
          <div className="flex w-max animate-scroll">
            <div className="flex items-center gap-18.75 px-3">
              {companies.map((comp, i) => (
                <Image
                  key={i}
                  height={0}
                  width={0}
                  src={comp}
                  alt="Company"
                  className="w-auto h-10.5"
                />
              ))}
            </div>

            <div className="flex items-center gap-18.75 px-3">
              {companies.map((comp, i) => (
                <Image
                  key={i}
                  height={0}
                  width={0}
                  src={comp}
                  alt="Company"
                  className="w-auto h-10.5"
                />
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#FFFEEC] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#FFFEEC] to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
