import { useState } from "react";

export const ButtonLoader = () => {
  return (
    <>
      <div className="flex items-center cursor-pointer">
        <div className="relative">
          <div className="relative ">
            <div className="top_half before:bg-pink-500 top_5"> </div>
            <div className="top_half before:bg-yellow-500 top_4"> </div>
            <div className="top_half before:bg-violet-500 top_3"> </div>
            <div className="top_half before:bg-blue-500 top_2"> </div>
            <div className="top_half before:bg-green-500 after:bg-green-500 top_1">
              {" "}
            </div>
            <div className="z-50 relative py-4 px-20 text-xl font-bold capitalize text-foreground">
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
    <button type="submit" className="flex items-center cursor-pointer">
      <div className="relative">
        <div className="relative ">
          <div className="top_half before:bg-blue-500 after:bg-blue-600"> </div>
          <div className="z-50 relative py-4 px-20 text-xl font-bold capitalize text-foreground">
            Submit
          </div>
        </div>
      </div>
    </button>
  );
};
