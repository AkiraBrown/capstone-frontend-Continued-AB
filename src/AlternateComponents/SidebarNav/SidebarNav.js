import { useContext } from "react";
import { TbCake } from "react-icons/tb";
import "./SidebarNav.scss";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { formatDate } from "../common/Zodiac/ZodiacFunctionLib";
// import failImage from "../../Assets/user-profile-img.webp";
function SidebarNav() {
  const {
    state: { user },
  } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__container__user-info">
          <img
            className="sidebar__container__user-info__image"
            src={user?.user_picture}
            alt="profile_img"
          />
          <h2 className="sidebar__container__user-info__username">
            {user.user_name}
          </h2>
          <p className="sidebar__container__user-info__birthday">
            <TbCake id="cake" size={"1.3rem"} />
            {user.dob && formatDate(user.dob)}
          </p>
        </div>
        <hr className="sidebar__container__divider" />
        <div className="sidebar__container__nav">
          <ul className="sidebar__container__nav__list">
            <li className="sidebar__container__nav__list__item">
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            <li className="sidebar__container__nav__list__item">
              <NavLink to={"/user-wishlist"}>Wishlist</NavLink>
            </li>
            <li className="sidebar__container__nav__list__item">
              <NavLink to={"/google-products"}>Look for products</NavLink>
            </li>
            <li className="sidebar__container__nav__list__item">
              <NavLink to={"/search-friends"}>Find Friends</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;
