import { createContext, useReducer } from "react";

export const AuthContext = createContext({});
const initialState = {
  user: {},
};
function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: {
          email: action.user.email,
          user_name: action.user.user_name,
          id: action.user.id,
          user_picture: action.user.user_picture,
          first_name: action.user.first_name,
          last_name: action.user.last_name,
          dob: action.user.dob,
        },
      };
    case "LOG_OUT":
      return {
        user: null,
      };
    default:
      return state;
  }
}

export default function AuthContextComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
