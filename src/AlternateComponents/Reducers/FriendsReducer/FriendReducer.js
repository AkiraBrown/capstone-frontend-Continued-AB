import { useReducer, createContext } from "react";
export const FriendsReducerContext = createContext({});
const initialState = {
  friends: [],
};

function FriendsReducer(items, action) {
  switch (action.type) {
    case "add": {
      return [...items, action];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function FriendsReducerComponent({ children }) {
  const [state, dispatch] = useReducer(FriendsReducer, initialState);
  return (
    <FriendsReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </FriendsReducerContext.Provider>
  );
}
