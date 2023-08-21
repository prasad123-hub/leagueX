import React, { useContext } from "react";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { Heading } from "@/components/heading";

export const Card = () => {
  const { state, dispatch } = useContext(UserDetailsContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "details/remove" });
        }}
        className="inline-flex items-center border-none bg-transparent text-sm font-semibold text-foreground"
      >
        <LeftArrow /> <span className="ml-3 inline-block">Back To Form</span>
      </button>
      <div className="mt-8">
        <Heading>Thank You For Your Feedback !</Heading>
      </div>
      <div className="mt-8 rounded-md border border-border p-10">
        <div className="border-b border-border pb-4">
          <p className="text-md italic leading-relaxed tracking-wider text-foreground/80">
            {state.userFeedbackMessage}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <Avatar name={state.userName} />
          <div>
            <h6 className="font-heading text-lg font-semibold text-foreground">
              {state.userName}
            </h6>
            <p className="text-sm text-foreground/60">{state.userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-left ml-3"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
};

const Avatar = ({ name }: { name: string }) => {
  const initialLetter = name.split(" ")[0].charAt(0);
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
      <span className="text-lg font-medium leading-none text-white">
        {initialLetter}
      </span>
    </span>
  );
};
