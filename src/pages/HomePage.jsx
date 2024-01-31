import React from "react";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
   
      <div className="flex-col w-full p-10">
        <div className="flex justify-between mb-5">
          <div>
            <p className="text-green-600 text-xl font-semibold">
              Yoga for Mind
            </p>
            <p className="mt-3">
              Watch Out Lead Yoga Therapist
              <a href="google.com" className="underline ml-1 text-red-500">
                Ms Uma Subramaniam
              </a>{" "}
              explain Yoga for Mind{" "}
            </p>
          </div>
          <div className=" rounded-lg">
            <iframe
              className="rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/v7SN-d4qXx0?si=ExbqKreSfZJ7eIbX"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <div>
            <p className="text-green-600">Is this for you?</p>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex-col justify-center">
              <div className="text-center w-10 m-auto">
                <img
                  src="/elda-health-app/computer.png"
                  className="w-10 h-10"
                  alt="computer png"
                ></img>
              </div>
              <div className="text-center">
                <p>Hard to feel calm or sleep because of stress</p>
              </div>
              <div className="text-center mt-5">
                <button className="rounded-full px-7 py-1 border-red-400 border-[1px] text-red-400 font-semibold hover:bg-red-500 hover:text-white">
                  Book trial @ 99
                </button>
              </div>
            </div>
            <div>
              <div className="text-center w-10 m-auto">
                <img
                  src="/elda-health-app/heart.png"
                  className="w-10 h-10"
                  alt="heart pic"
                ></img>
              </div>
              <div className="text-center">
                <p>If you have palpitations and breathing trouble</p>
              </div>
              <div className="text-center mt-5">
                <NavLink  to='/products'>
                <button className="bg-red-400 rounded-full px-7 py-1 text-white hover:bg-red-500 font-semibold">
                  I want to buy
                </button>
                </NavLink>
              </div>
            </div>
            <div>
              <div className="text-center w-10 m-auto">
                <img
                  src="/elda-health-app/run.png"
                  className="w-10 h-10"
                  alt="running man pic"
                ></img>
              </div>
              <div className="text-center">
                <p>
                  You have been advised by doctores to avoid physical activityp
                </p>
              </div>
              <div className="text-center mt-5">
                <a href="google.com" className="underline">
                  I have a question
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default HomePage;
