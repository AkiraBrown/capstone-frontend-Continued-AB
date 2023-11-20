/* eslint-disable padded-blocks */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserProfile } from "../API/API";
import Sidebar from "../Sidebar/Sidebar";
// import Giftune from "../../Assets/GiftuneLogo2.png";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      // console.log(id, "Dashboard");
      let response = await getUserProfile(id);
      // console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // const endOfYearCalc = (dob) => {
  //   let date = new Date(dob);
  //   // Now: Calc the current time
  //   let currentDateInMilli = Date.now();
  //   let currentDate = new Date(currentDateInMilli);
  //   // EndOfYear: Calc the time at the end of the year
  //   let endOfYear = new Date(
  //     `${currentDate.getFullYear()}-12-31T23:59:59.599-05:00`
  //   );
  //   let endOfYearInMilli = endOfYear.getTime();
  //   // EndOfYear - now = Time before the end of the year
  //   return endOfYearInMilli - currentDateInMilli;
  //   // Sort by this ^^^^^
  // };

  let friendsList = user?.friendsOrderedByDOB?.map((friendDetails, index) => {
    return <Friend key={index} friendDetails={friendDetails} id={id} />;
  });
  // console.log(user, user.friendsOrderedByDOB);
  return (
    <div className="dashboard-container">
      {/* <div>Dashboard</div> */}
      {friendsList}
      {/* <Sidebar /> */}
    </div>
  );
}

function Friend({ friendDetails, id }) {
  console.log(friendDetails);
  let { first_name, last_name, wishlist, user_name } = friendDetails;
  let wishlistItem = wishlist.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.item_name}</a>
    </li>
  ));
  // let upcomingDate = date.toDateString().split(" ").splice(1, 2).join(" ");
  return (
    // <div className="friend-card">
    //   <div className="friend-details">
    //     <div className="friend-avatar-name">
    //       <Avatar />
    //       <div className="friend-name">
    //         {first_name} {last_name}{" "}
    //       </div>
    //     </div>

    //     <div className="friend-dob">upcomingDate</div>
    //   </div>
    //   <ul className="wishlist-items">
    //     <img />
    //     {wishlistItem}
    //   </ul>
    // </div>

    // -----------------------------------------------------------------
    <div className="dashboard-friend-card-container">
      <Link
        to={`/dashboard/${id}/friends/${wishlist[0].user_id}`}
        className="friend-list-link"
      >
        <div className="dashboard-friend-card-top">
          <div className="dashboard-friend-card-left">
            <div className="dashboard-img-placeholder"></div>
            <p className="dashboard-card-name">{user_name}</p>
          </div>
          <p className="dashboard-card-text">Birthday Date Here🎉</p>
        </div>
      </Link>
    </div>
  );
}

function Avatar() {
  return <div>Avatar</div>;
}

export default Dashboard;
