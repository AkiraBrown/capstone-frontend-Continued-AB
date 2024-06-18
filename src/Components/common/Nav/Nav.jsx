import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import GiftuneLogo from "../../assets/image_360.png";
function Nav() {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  return (
    <header
      className="p-2 mb-2 border-bottom bg-gradient"
      style={{ backgroundColor: "#DCBFFF" }}
    >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            to={"/"}
          >
            <img src={GiftuneLogo} alt="logo" className="me-2" />
          </NavLink>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
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
              {/* <div className="dropdown text-end">
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
                    <NavLink className="dropdown-item" to={"/dashboard"}>
                      Dashboard
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
              </div> */}
              {/*---------------- Divider---------- */}
              <button
                className="btn btn-outline-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu"
                onClick={() => setShow(!show)}
              >
                {/* &#9776; */}
                <GiHamburgerMenu />
              </button>
              <div
                className={`offcanvas offcanvas-start ${show ? "show" : ""}`}
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasMenu"
                aria-labelledby="offcanvasMenuLabel"
              >
                <div className="offcanvas-header ">
                  <div className="d-flex flex-column">
                    <img
                      src={user?.user_picture}
                      alt="profile_pic"
                      className="rounded-circle mx-auto mb-4"
                      width={64}
                      height={64}
                    />
                    <h5 className="offcanvas-title" id="offcanvasMenuLabel">
                      {user?.user_name}
                    </h5>
                  </div>
                  <button
                    className="btn-close "
                    data-bs-dismiss="offcanvas mb-4"
                    aria-label="Close"
                    onClick={() => setShow(false)}
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/"}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/dashboard"}>
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/google-products"}>
                        Search Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/user-wishlist"}>
                        Wishlist
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/about"}>
                        About
                      </NavLink>
                    </li>
                    <hr />
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
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
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Nav;
