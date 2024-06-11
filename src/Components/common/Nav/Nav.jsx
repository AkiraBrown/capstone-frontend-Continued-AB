import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { NavLink } from "react-router-dom";
import GiftuneLogo from "../../assets/image_360.png";
function Nav() {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  return (
    <header className="p-2 mb-2 border-bottom bg-gradient bg-body-primary">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            to={"/"}
          >
            <img src={GiftuneLogo} alt="logo" className="me-2" />
          </NavLink>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {user ? (
              <>
                <li>
                  <NavLink to={"/"} className="nav-link px-2 link-secondary">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 link-secondary"
                    to={"/dashboard"}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className="nav-link px-2 link-secondary"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 link-secondary"
                    to={"/user-wishlist"}
                  >
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 link-secondary"
                    to={"/google-products"}
                  >
                    Search Products
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="nav-link px-2 link-secondary" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 link-secondary"
                    to={"/about"}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 link-secondary"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link px-2 link-secondary"
                    to={"/signup"}
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          {user && (
            <>
              <div className="dropdown text-end">
                <NavLink
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  to={"#"}
                  onClick={() => setShow(!show)}
                >
                  <img
                    src={user.user_picture}
                    alt="profile_pic"
                    width={"64"}
                    height={"64"}
                    className="rounded-circle"
                  />
                </NavLink>
                <ul
                  className={`dropdown-menu text-small ${show && "show"}`}
                  style={{}}
                  data-popper-placement="bottom-end"
                >
                  <li>
                    <NavLink className="dropdown-item" to={"/user-wishlist"}>
                      Wishlist
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={"/"}
                      onClick={() => {
                        dispatch({ type: "LOG_OUT" });
                        window.localStorage.removeItem("jwtToken");
                      }}
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Nav;
