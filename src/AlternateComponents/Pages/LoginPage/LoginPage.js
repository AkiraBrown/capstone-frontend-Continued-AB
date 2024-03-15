import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import useAuthHooks from "../../hooks/auth/useAuthHooks";
import { loginSession } from "../../API/API";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
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
      let result = await loginSession(dataObj);

      const jwtToken = result.token;
      const decodedToken = jwtDecode(jwtToken);
      window.localStorage.setItem("jwtToken", jwtToken);
      dispatch({
        type: "LOGIN",
        user: decodedToken,
      });
      toast.success("Login Successful", toast.POSITION.TOP_CENTER);
      navigate("/dashboard");
      setPassword("");
      setEmail("");
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.log(error);
      toast.error("User not found", toast.POSITION.TOP_CENTER);
    }
  }

  return (
    <div className="formBox">
      <form className="formBox__Container" onSubmit={handleOnSubmit}>
        <span className="formBox__Container__Title">Login</span>
        <span className="formBox__Container__Subtitle">
          Login with your credentials here!
        </span>
        <div className="formBox__Container__InputGroup">
          <input
            type="text"
            className="formBox__Container__InputGroup__Input"
            placeholder="E-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type={process.env.NODE_ENV === "development" ? "text" : "password"}
            className="formBox__Container__InputGroup__Input"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="formBox__Container__submitBtn">
          Login
        </button>
        <div className="formBox__Container__Section">
          <p className="formBox__Container__Section__Text">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="formBox__Container__Section__Text__Link"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
