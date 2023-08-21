import { useState } from "react";

export const ButtonLoader = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center">
        <div className="relative">
          <div className="relative ">
            <div className="top_half top_5 before:bg-pink-500"> </div>
            <div className="top_half top_4 before:bg-yellow-500"> </div>
            <div className="top_half top_3 before:bg-violet-500"> </div>
            <div className="top_half top_2 before:bg-blue-500"> </div>
            <div className="top_half top_1 before:bg-green-500 after:bg-green-500">
              {" "}
            </div>
            <div className="relative z-50 px-20 py-4 text-xl font-bold capitalize text-foreground">
              <h1 className="animate-pulse">Loading</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Button = () => {
  return (
    <button type="submit" className="flex cursor-pointer items-center">
      <div className="relative">
        <div className="relative ">
          <div className="top_half before:bg-blue-500 after:bg-blue-600"> </div>
          <div className="relative z-50 px-20 py-4 text-xl font-bold capitalize text-foreground">
            Submit
          </div>
        </div>
      </div>
    </button>
  );
};
