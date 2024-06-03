import { Link } from "react-router-dom";
import "./UserList.scss";
import profileImg from "../../../../Assets/profile-img-red.png";
// import { useContext } from "react";
// import { FriendsContext } from "../../../context/common/Context";

function UserList({ grabbedUser }) {
  return (
    <div className="user-container">
      <img
        className="user-container__profile-img"
        src={
          grabbedUser.user_picture ? `${grabbedUser.user_picture}` : profileImg
        }
        alt="..."
        style={{ maxHeight: "40px" }}
      />
      <Link className="user-container__username">{grabbedUser.user_name}</Link>
      {grabbedUser?.is_friend ? (
        <button className="user-container__confirmed-profile">
          View Profile
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default UserList;
