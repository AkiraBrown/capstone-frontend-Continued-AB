import { useContext, useEffect } from "react";
import { grabUsersFriends } from "../../API/API";
import { upcomingDateCalc } from "../../common/Zodiac/Zodiac.lib";
import { AuthContext } from "../../common/context/AuthContext/AuthContext";
import { FriendsReducerContext } from "../../common/Reducers/FriendsReducer/FriendReducer";
function DashboardPage() {
  const {
    state: { user },
  } = useContext(AuthContext);
  const {
    // state: { friends },
    dispatch,
  } = useContext(FriendsReducerContext);

  useEffect(() => {
    fetchFriendsData();
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
        dispatch({ formatFriends });
      }
    } catch (error) {
      if (import.meta.env.DEV) console.log(error);
    }
  }

  return <main className="conatiner ">DashboardPage</main>;
}

export default DashboardPage;
