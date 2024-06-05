import GiftuneLogo from "../../../assets/GiftuneLogoFooter.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
function Footer() {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top sticky">
      <p className="col-md-4 d-flex mb-0 text-body-secondary">
        © 2024 Giftune, Inc
      </p>
      <NavLink
        to={"/"}
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img
          src={GiftuneLogo}
          alt="BottomLogo"
          className="bi me-2"
          width={"40"}
          height={"32"}
        />
      </NavLink>
      <ul className="nav col-md-4 justify-content-end">
        {user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-body-secondary" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-body-secondary"
                to={"/"}
                onClick={() => {
                  dispatch({ type: "LOG_OUT" });
                  window.localStorage.removeItem("jwtToken");
                }}
              >
                Logout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-body-secondary"
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-body-secondary" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-body-secondary"
                to={"/search-friends"}
              >
                Find Friends
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-body-secondary" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-body-secondary"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-body-secondary"
                to={"/signup"}
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-2 text-body-secondary"
                to={"/about"}
              >
                About
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </footer>
  );
}

export default Footer;
