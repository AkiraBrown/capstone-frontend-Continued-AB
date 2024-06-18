import { useReducer, createContext } from "react";
export const WishlistReducerContext = createContext({});
const initialState = [];
function WishlistReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.response];
    }
    case "delete": {
      return state.filter((item) => item.id !== action.response.id);
    }
    case "overwrite": {
      return action.response;
    }
    default:
      return state;
  }
}

export default function WishlistReducerComponent({ children }) {
  const [wishlist, dispatch] = useReducer(WishlistReducer, initialState);
  return (
    <WishlistReducerContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistReducerContext.Provider>
  );
}
