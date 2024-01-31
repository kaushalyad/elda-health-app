import React from "react";
import { NavLink } from "react-router-dom";

const PlanPicker = ({
  actualPrice,
  discountedPrice,
  timePeriod,
  monthPrice,
}) => {
  return (
    <div className="bg-white rounded-xl mt-3 py-2 px-2 shadow-green-500 border-[1px] border-green-500 ">
      <div className="flex justify-between">
        {timePeriod === 1 ? (
          <p className="font-semibold text-xl">{timePeriod} Month</p>
        ) : (
          <p className="font-semibold text-xl">{timePeriod} Months</p>
        )}
        <p className="text-sm  font-semibold text-gray-500">
          {monthPrice}/month
        </p>
      </div>
      <div className="flex justify-between mt-1">
        <div className="flex">
          <div className="flex text-gray-400 line-through">
            <p>&#8377;</p>
            <p>{actualPrice}</p>
          </div>
          <div className="text-green-600 flex ml-1 font-semibold text-lg">
            <p>&#8377;</p>
            <p>{discountedPrice}</p>
          </div>
        </div>
        <NavLink to={"/products/" + discountedPrice}>
          <button className="bg-red-400 px-2 py-1 rounded-xl text-white text-xs font-semibold hover:bg-red-500">
            BUY NOW
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PlanPicker;
