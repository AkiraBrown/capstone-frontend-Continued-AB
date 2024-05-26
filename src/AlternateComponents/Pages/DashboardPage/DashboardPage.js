import { useEffect, useContext, lazy } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { FriendsContext } from "../../context/common/Context";
import { grabUsersFriends } from "../../API/API";
import { upcomingDateCalc } from "../../common/Zodiac/ZodiacFunctionLib";
import "./DashboardPage.scss";

const DashboardCard = lazy(() => import("./DashboardCard/DashboardCard"));

function DashboardPage() {
  const {
    state: { user },
  } = useContext(AuthContext);
  const { FriendsData, setFriendsData } = useContext(FriendsContext);

  useEffect(() => {
    fetchFriendsData();
    // eslint-disable-next-line
  }, []);
  async function fetchFriendsData() {
    try {
      const response = await grabUsersFriends(user.id);
      if (response.length !== 0) {
        let formatFriends = response.forEach((friend) => {
          friend.dobInMili = upcomingDateCalc(friend.dob);
        });
        formatFriends = formatFriends.sort((a, b) => a.dobInMili - b.dobInMili);
        setFriendsData(formatFriends);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Upcoming Birthdays</h2>
      {FriendsData.length !== 0 ? (
        <>
          {FriendsData.map((item, index) => {
            return <DashboardCard indivDate={item} ind={index} />;
          })}
        </>
      ) : (
        <>
          <h1>Sad news you have no friends</h1>
        </>
      )}
    </div>
  );
}

export default DashboardPage;
