import { useContext, useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import GiftuneLogo from "../../Assets/image_360.png";
import Hamburger from "./Hamburger/Hamburger";
import OpenHamburger from "./Hamburger/OpenHamburger";
function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  //swap topnav container and topnav in scss file
  return (
    <header className="topnav">
      <nav className="topnav__nav-links">
        {user ? (
          <>
            <div onClick={() => setHamburgerOpen(!hamburgerOpen)}>
              <>
                <Hamburger hamburgerOpen={hamburgerOpen} />
                {hamburgerOpen && <OpenHamburger />}
              </>
            </div>
            <img className="topnav__logo-nav" src={GiftuneLogo} alt="logo" />
            <NavLink
              to={"/"}
              onClick={() => {
                dispatch({ type: "LOG_OUT" });
                window.localStorage.removeItem("jwtToken");
              }}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <img
              className="topnav__logo-nav"
              src={GiftuneLogo}
              alt="nav-logo"
            />
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/signup"}>Signup</NavLink>
            <NavLink to={"find-friends"}>Find Friends</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Nav;
