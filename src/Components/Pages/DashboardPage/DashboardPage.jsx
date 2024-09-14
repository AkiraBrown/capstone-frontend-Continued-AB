import { useContext, useEffect, useState } from "react";
import { grabUsersFriends } from "../../API/API";
import { upcomingDateCalc } from "../../common/Zodiac/Zodiac.lib";
import { AuthContext } from "../../common/context/AuthContext/AuthContext";
import { FriendsReducerContext } from "../../common/Reducers/FriendsReducer/FriendReducer";
import { toast } from "react-toastify";
import dashboardImg from "../../assets/dashboard-placeholder.png";

function DashboardPage() {
  const {
    state: { user },
  } = useContext(AuthContext);
  const { friendsState, dispatch } = useContext(FriendsReducerContext);
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    fetchFriendsData();
    console.log(user);
    const temp = upcomingDateCalc(user.dob);
    setBirthDate(temp.toDateString());
    console.log(temp.toDateString());
    console.log(friendsState);
    // eslint-disable-next-line
  }, []);
  async function fetchFriendsData() {
    try {
      const response = await grabUsersFriends(user?.id);
      if (response.length !== 0) {
        let formatFriends = response.forEach((friend) => {
          friend.dobInMili = upcomingDateCalc(friend.dob);
          formatFriends = formatFriends.sort(
            (a, b) => a.dobInMili - b.dobInMili
          );
        });
        dispatch({ type: "overwrite", formatFriends });
      }
    } catch (error) {
      if (import.meta.env.DEV) console.log(error);
      toast("Something went wrong");
    }
  }

  return (
    <main className="container">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">{`Welcome ${user.first_name} ${user.last_name}`}</h1>
        {user.user_picture && (
          <img
            src={user.user_picture}
            alt={user.user_name}
            className="m-4"
            style={{
              borderRadius: "30px",
              height: "300px",
              boxShadow: "10px 5px 5px RGB(220,191,255)",
            }}
          />
        )}
        <h2 className="text-capitalize fw-bold">Birthday: {birthDate}</h2>
        {friendsState.length !== 0 ? (
          <>
            {friendsState.map((element) => {
              <div key={element?.id}>{element.first_name}</div>;
            })}
          </>
        ) : (
          <>
            <div className="container col-xxl-8 px-4 py-5">
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                  <img
                    src={dashboardImg}
                    alt="dashboard"
                    className="d-block mx-lg-auto img-fluid"
                  />
                </div>
                <div className="col-lg-6">
                  <p className="lead">
                    {"Let's stay connected with our friends and family!"}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default DashboardPage;
