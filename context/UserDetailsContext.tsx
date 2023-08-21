import { createContext, useState, useReducer } from "react";

type InitialStateType = {
  userName: string;
  userEmail: string;
  userFeedbackMessage: string;
  isSubmitted: boolean;
};

// Initial Data
const userDetailsData: InitialStateType = {
  userName: "",
  userEmail: "",
  userFeedbackMessage: "",
  isSubmitted: false,
};

// Context
const UserDetailsContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: userDetailsData,
  dispatch: () => null,
});

// Reducer function
function reducer(state: InitialStateType, action: any) {
  switch (action.type) {
    case "details/save":
      return {
        ...state,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        userFeedbackMessage: action.payload.userFeedbackMessage,
        isSubmitted: true,
      };
    case "details/remove":
      return {
        ...state,
        userName: "",
        userEmail: "",
        userFeedbackMessage: "",
        isSubmitted: false,
      };
    default:
      // return error
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function UserDetailsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, userDetailsData);
  return (
    <UserDetailsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
}

export { UserDetailsContext, UserDetailsContextProvider };
