import React from "react";

const DateItem = ({ date, nameOfDate, isSelected, onClick }) => {
  return (
    <div
      className={`flex-col justify-center items-center rounded-lg ml-5 text-center px-3 py-1 w-32 text-sm border-green-700 border-2 font-semibold cursor-pointer ${
        isSelected ? " bg-green-700 text-white" : "bg-white text-green-1000"
      }`}
      onClick={onClick}
    >
      <div>{date}</div>
      <div>{nameOfDate}</div>
    </div>
  );
};

export default DateItem;
