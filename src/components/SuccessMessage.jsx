import React from "react";

const SuccessMessage = ({ timePeriod }) => {
  return (
    <div className="bg-lime-50 h-screen flex items-center justify-center">
      <div className="bg-white  rounded-lg shadow-md text-center mobile:w-[85%] mobile:px-12 mobile:pt-12 mobile:text-6xl mobile:font-bold tablet:w-[70%] tablet:p-12 p-12 w-[55%] mobile:p-2 ">
        <div className="rounded-full h-56 w-56 bg-[#F8FAF5] mx-auto mb-6 flex items-center justify-center mobile:h-32 mobile:w-32 tablet:h-36 tablet:w-36 ">
          <i className="text-[#9ABC66] tablet:text-7xl text-[150px] mobile:text-5xl">
            ✓
          </i>
        </div>
        <h1 className="text-[#9ABC66] font-bold text-4xl mb-2 mobile:text-2xl tablet:text-3xl">
          Success
        </h1>
        <p className="text-gray-700 mobile:text-sm tablet:text-large">
          <span className="font-semibold ">
            Congratulations on purchasing
            <span className="text-[#9ABC66]">
              {timePeriod === 1
                ? " One Month "
                : timePeriod === 3
                ? " Three Months "
                : timePeriod === 6
                ? " Six Months "
                : ""}
            </span>
            yoga plan!
          </span>
          <br />
          <span className="text-sm font-semibold mobile:invisible tablet:invisible">
            Get ready to embark on a journey of health and well-being. We'll be
            sending you class details shortly.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
