import { useReducer, createContext } from "react";
export const FriendsReducerContext = createContext({});
const initialState = {
  friends: [],
};

function FriendsReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action];
    }
    case "overwrite": {
      return {
        friends: state,
      };
    }
    case "delete": {
      return state.filter((item) => item.id !== action.id);
    }
    default: {
      return state;
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
