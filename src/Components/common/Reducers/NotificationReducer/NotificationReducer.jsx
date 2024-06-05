import { useReducer, createContext } from "react";
export const NotificationReducerContext = createContext({});
const initialState = {
  notifications: [],
};
function NotificationReducer(items, action) {
  switch (action.type) {
    case "add": {
      return [...items, action.addItem];
    }
    case "update": {
      return items.map((item) => {
        return item.id === action.id ? item === action : item;
      });
    }
    case "overwrite": {
      return {
        notifications: items,
      };
    }
    case "delete": {
      return items.filter((item) => item.id !== action.id);
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
}

export default function NotificationReducerComponent({ children }) {
  const [state, dispatch] = useReducer(NotificationReducer, initialState);
  return (
    <NotificationReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationReducerContext.Provider>
  );
}
