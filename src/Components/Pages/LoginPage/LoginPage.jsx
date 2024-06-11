import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../common/context/AuthContext/AuthContext";
import { loginSession } from "../../API/API";
import { jwtDecode } from "jwt-decode";
import useAuthHooks from "../../common/hooks/Auth/useAuthHooks";
// import GiftuneLogo from "../../assets/GiftuneLogo3Nav.png";
function LoginPage() {
  const [checkToken] = useAuthHooks();
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (checkToken()) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const dataObj = { email, password };
      const response = await loginSession(dataObj);
      console.log(response);
      if (response.token.message === "error")
        throw new Error("Something Went wrong");
      const jwtToken = response.token;
      const decodedToken = jwtDecode(jwtToken);
      window.localStorage.setItem("jwtToken", jwtToken);
      dispatch({
        type: "LOGIN",
        user: decodedToken,
      });
      setPassword("");
      setEmail("");
      navigate("/dashboard");
    } catch (error) {
      if (import.meta.env.DEV) console.log(error);
    }
  }

  return (
    <main className="w-50 m-auto align-items-center">
      <form onSubmit={handleOnSubmit} className="pb-5">
        <div className="row mb-3 p-5 m-3">
          <h1 className="h3 mb-5 fw-normal text-center">Login</h1>
          <div className="row mb-3 input-group">
            <label htmlFor="emailInput" className="col-sm-2 input-group-text">
              Email
            </label>
            <input
              type="text"
              className="form-control form-control-md"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="row mb-3 input-group">
            <label
              htmlFor="passwordInput"
              className="col-sm-2 input-group-text"
            >
              Password
            </label>

            <input
              type={import.meta.env.dev ? "text" : "password"}
              id="passwordInput"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-auto mx-auto mb-3 row"
        >
          Login
        </button>
        <div className="row mb-3 p-5 ">
          <span className="p-4 mx-auto text-center">
            {"Don't have an account? "}
            <Link to={"/signup"}>Sign up here!</Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
