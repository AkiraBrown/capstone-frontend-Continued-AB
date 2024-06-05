import { useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../context/AuthContext/AuthContext";

function useAuthHooks() {
  const { dispatch } = useContext(AuthContext);
  const jwtToken = window.localStorage.getItem("jwtToken");
  let decodedToken;
  if (jwtToken) {
    decodedToken = jwtDecode(jwtToken);
  }

  useEffect(() => {
    let isAuth = checkToken();

    if (!isAuth) {
      dispatch({ type: "LOG_OUT" });
    } else {
      dispatch({ type: "LOGIN", user: decodedToken });
    }
    // eslint-disable-next-line
  }, []);
  function checkToken() {
    if (jwtToken) {
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        window.localStorage.removeItem("jwtToken");
        return false;
      } else {
        return true;
      }
    }
  }
  return [checkToken];
}

export default useAuthHooks;
