import { useReducer, createContext } from "react";
export const NotificationReducerContext = createContext({});
const initialState = [];
function NotificationReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.addItem];
    }
    case "update": {
      return state.map((item) => {
        return item.id === action.id ? item === action : item;
      });
    }
    case "delete": {
      return state.filter((item) => item.id !== action.id);
    }
    case "overwrite": {
      return action.response;
    }

    default:
      return state;
  }
}

export default function NotificationReducerComponent({ children }) {
  const [NotificationState, dispatch] = useReducer(
    NotificationReducer,
    initialState
  );
  return (
    <NotificationReducerContext.Provider
      value={{ NotificationState, dispatch }}
    >
      {children}
    </NotificationReducerContext.Provider>
  );
}
