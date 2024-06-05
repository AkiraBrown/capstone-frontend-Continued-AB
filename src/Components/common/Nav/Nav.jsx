import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { NavLink } from "react-router-dom";
import GiftuneLogo from "../../../assets/image_360.png";
function Nav() {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);
  return (
    <header className="p-3 mb-3 border-bottom">
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
                <div className="dropdown text-end">
                  <NavLink>
                    <img
                      src={user.user_picture}
                      alt="profile_pic"
                      width={"32"}
                      height={"32"}
                      className="rounded-circle"
                    />
                  </NavLink>
                  <ul className="dropdown-menu text-small">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
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
            ) : (
              <>
                <li>
                  <NavLink to={"/"} className="nav-link px-2 link-secondary">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/login"}
                    className="nav-link px-2 link-secondary"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/signup"}
                    className="nav-link px-2 link-secondary"
                  >
                    Signup
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
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
