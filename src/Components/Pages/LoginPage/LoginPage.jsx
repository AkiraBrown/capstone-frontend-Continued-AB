import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../common/context/AuthContext/AuthContext";
import { loginSession } from "../../API/API";
import { jwtDecode } from "jwt-decode";
import useAuthHooks from "../../common/hooks/Auth/useAuthHooks";
import GiftuneLogo from "../../assets/GiftuneLogo3Nav.png";
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
      const jwtToken = response.token;
      const decodedToken = jwtDecode(jwtToken);
      window.localStorage.setItem("jwtToken", jwtToken);
      dispatch({
        type: "LOGIN",
        user: decodedToken,
      });
    } catch (error) {
      if (import.meta.env.Dev) console.log(error);
    }
  }

  return (
    <main className="w-50 m-auto align-items-center">
      <form onSubmit={handleOnSubmit}>
        <div className="row mb-3">
          <img
            src={GiftuneLogo}
            alt="Logo"
            width={114}
            height={"auto"}
            className="mb-4"
          />
          <h1 className="h3 mb-3 fw-normal">Login</h1>
          <div className="row mb-3">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-md"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="passwordInput" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
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
        </div>
        <div className="row mb-3 p-3 ">
          <button type="submit" className="btn btn-primary w-50 mx-auto ">
            Login
          </button>
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
