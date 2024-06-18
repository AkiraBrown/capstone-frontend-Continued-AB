import { useReducer, createContext } from "react";
export const FriendsReducerContext = createContext({});
const initialState = [];

function FriendsReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action];
    }
    case "delete": {
      return state.filter((item) => item.id !== action.id);
    }
    case "overwrite": {
      return action.response;
    }
    default: {
      return action;
    }
  }
}

export default function FriendsReducerComponent({ children }) {
  const [friendsState, dispatch] = useReducer(FriendsReducer, initialState);
  return (
    <FriendsReducerContext.Provider value={{ friendsState, dispatch }}>
      {children}
    </FriendsReducerContext.Provider>
  );
}
