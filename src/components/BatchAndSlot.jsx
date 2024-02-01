import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SlotPicker from "./SlotPicker";
import ItemSlider from "./DateSlider";
const BatchAndSlot = ({ actualPrice, discountedPrice, monthPlan }) => {
  const [selectedOne, setSelectedOne] = useState(false);
  const [selectedTwo, setSelectedTwo] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex-col bg-lime-50 p-10 mobile:p-5">
      <div className="flex-col">
        <div>
          <p className="text-lime-700 text-xl font-semibold mobile:text-lg">Yoga for Mind</p>
          <img
            src="/elda-health-app/mindyogapic.jpg"
            alt="yoga pic"
            className=" m-auto mt-4 rounded-xl"
          />
        </div>
        <div>
          <p className="text-lime-700 text-xl font-semibold mt-3 mobile:text-lg">
            What is Yoga for Mind?
          </p>
          <p className="mt-2 text-gray-600 font-semibold mobile:text-sm">
            The Yoga for Mind sessions involve minimal physical movement and
            relies on techniques such as pranayama and meditation, Suited for
            women who cannot perform more physical forms of Yoga and are looking
            for relief from concerns such as stress,anxiety,low mood etc.
          </p>
          <p className="mt-2 text-xs font-thin">
            Yoga {">"} Yoga for Mind {">"} Package
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="flex justify-between">
            <p className="text-lime-700 text-xl mt-4 font-semibold mobile:text-lg">
              {monthPlan} Month Yoga for Mind
            </p>
            <div>
              <div className="flex text-green-600 font-semibold text-xl mobile:text-lg">
                <p>&#8377;</p>
                <p>{discountedPrice}</p>
              </div>
              <div className="flex line-through text-gray-400">
                <p>&#8377;</p>
                <p>{actualPrice}</p>
              </div>
            </div>
          </div>
          <p className="mt-1">
            5 days a week{" "}
            <button
              className="text-red-400"
              onClick={() => {
                navigate(-1);
              }}
            >
              Change plan
            </button>
          </p>
        </div>
        <div>
          <p className="text-lime-700 text-lg mt-3 font-semibold mobile:text-base">
            Pick a start date
          </p>
          <p className=" mt-1 mb-6 mobile:text-sm">
            Dates are available only for the next 2 weeks
          </p>

          <ItemSlider />
        </div>
      </div>
      <div>
        <p className="text-lime-700 text-lg mt-3 font-semibold mobile:text-base">
          Select Time Slot
        </p>
        <form>
          <SlotPicker
            startTime={"05:00 PM"}
            endTime={"05:40 PM"}
            onClick={() => {
              setSelectedOne(!selectedOne);
              setSelectedTwo(false);
            }}
            isSelected={selectedOne}
          ></SlotPicker>
          <SlotPicker
            startTime={"08:00 AM"}
            endTime={"08:40 AM"}
            onClick={() => {
              setSelectedTwo(!selectedTwo);
              setSelectedOne(false);
            }}
            isSelected={selectedTwo}
          ></SlotPicker>
        </form>
        <NavLink to={"/products/"+discountedPrice+"/success"}>
          <button className="bg-red-400 px-4 py-2 font-semibold rounded-full text-white ml-16 mt-3 hover:bg-red-500">
            BUY PACKAGE
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BatchAndSlot;
