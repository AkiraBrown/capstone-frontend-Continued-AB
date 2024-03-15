import { Navigate } from "react-router-dom";
import useAuthHooks from "../../hooks/auth/useAuthHooks";
function PrivateRoute({ children }) {
  const [checkToken] = useAuthHooks();
  if (checkToken()) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default PrivateRoute;
