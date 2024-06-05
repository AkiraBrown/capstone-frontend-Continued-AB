import { useReducer, createContext } from "react";
export const WishlistReducerContext = createContext({});
const initialState = {
  wishlist: [],
};
function WishlistReducer(items, action) {
  switch (action.type) {
    case "add": {
      return [...items, action.addItem];
    }
    case "delete": {
      return items.filter((item) => item.id !== action.id);
    }
    case "overwrite": {
      return {
        wishlist: items,
      };
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default function WishlistReducerComponent({ children }) {
  const [state, dispatch] = useReducer(WishlistReducer, initialState);
  return (
    <WishlistReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistReducerContext.Provider>
  );
}
