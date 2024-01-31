const SlotPicker = ({ startTime, endTime, isSelected, onClick }) => {
  return (
    <div className="flex cursor-pointer" onClick={onClick}>
      <input type="radio" className="w-5" checked={isSelected} />
      <div className="flex-col w-[98%] mt-3 bg-white rounded-2xl p-2 ml-3 py-4">
        <div className="flex items-center">
          <img src="/elda-health-app/clock.png" className="w-4 h-4" alt="" />
          <div className="ml-2 font-semibold">
            {startTime}-{endTime}
          </div>
        </div>
        <div className="text-[10px] mt-1 font-semibold">
          MON, TUE, WED, THU, FRI
        </div>
      </div>
    </div>
  );
};

export default SlotPicker;
