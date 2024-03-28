import "./Footer.scss";
import { useContext } from "react";
import GiftuneLogo from "../../Assets/GiftuneLogoFooter.png";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { NavLink } from "react-router-dom";
function Footer() {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__brand">
          <img
            className="footer__content__brand__image"
            src={GiftuneLogo}
            alt="Logo"
          />
          <p className="footer__content__brand__slogan">
            "Where heartfelt gifting meets perfect harmony."
          </p>
        </div>
        <div className="footer__content__links">
          <ul className="footer__content__links__navLinks">
            {user ? (
              <li>
                <NavLink
                  className={"footer__content__links__navLinks__link"}
                  onClick={() => {
                    dispatch({ type: "LOG_OUT" });
                    window.localStorage.removeItem("jwtToken");
                  }}
                  to={"/"}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    className={"footer__content__links__navLinks__link"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"footer__content__links__navLinks__link"}
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={"footer__content__links__navLinks__link"}
                    to={"/signup"}
                  >
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer__bottom">
        <p className="footer__bottom__text">
          An app designed to keep you on top of your loved ones upcoming
          birthdays, where you can effortlessly select the perfect gift from a
          diverse array of options.
        </p>
        <span className="footer__bottom__copyright">copyright ©</span>
        <br />
      </div>
    </footer>
  );
}

export default Footer;
