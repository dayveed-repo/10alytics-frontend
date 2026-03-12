import Image from "next/image";

const TopSalesSection = () => {
  return (
    <div className="w-full bg-[#151516]">
      <div className="max-w-[90%] mx-auto flex items-center py-3">
        <Image
          height={0}
          width={0}
          src="/images/sales-card.svg"
          alt="card"
          className="w-auto h-10"
        />

        <Image
          height={0}
          width={0}
          src="/images/chevron-double-right.svg"
          alt="card"
          className="w-3 h-auto ml-4"
        />

        <h3 className="text-white text-[1rem] leading-[1.15rem] font-medium mx-5">
          Limited Time Offer - Enroll Now to join the February 2026 Cohort!
        </h3>

        <div className="border-[0.5px] border-white px-2.5 rounded-md py-[2px]">
          <p className="text-[0.5rem] leading-[100%] font-bold text-white">
            Time Left
          </p>

          <div className="flex items-center space-x-3 mt-0.5">
            <div className="space-y-1">
              <p className="text-[1.15rem] leading-5 font-medium text-white">
                12
              </p>

              <p className="text-[0.45rem] leading-[100%] font-regular text-white/80">
                Hours
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-[1.15rem] leading-5 font-medium text-white">
                25
              </p>

              <p className="text-[0.45rem] leading-[100%] font-regular text-white/80">
                Mins
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-[1.15rem] leading-5 font-medium text-white">
                45
              </p>

              <p className="text-[0.45rem] leading-[100%] font-regular text-white/80">
                Seconds
              </p>
            </div>
          </div>
        </div>

        <button className="border-[0.8px] hover:bg-white hover:text-black border-white rounded-md w-[117px] h-11 cursor-pointer text-white font-bold text-[15px] leading-[100%] ml-[22px]">
          Enroll Now
        </button>

        <div className="flex items-center space-x-4 ml-auto">
          <Image
            height={0}
            width={0}
            src="/images/Facebook.svg"
            alt="facebook"
            className="w-4.5 h-4.5"
          />

          <Image
            height={0}
            width={0}
            src="/images/Instagram.svg"
            alt="instagram"
            className="w-4.5 h-4.5"
          />

          <Image
            height={0}
            width={0}
            src="/images/youtube.svg"
            alt="youtube"
            className="w-4.5 h-4.5"
          />

          <Image
            height={0}
            width={0}
            src="/images/linked-in.svg"
            alt="linked-in"
            className="w-4.5 h-4.5"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSalesSection;
