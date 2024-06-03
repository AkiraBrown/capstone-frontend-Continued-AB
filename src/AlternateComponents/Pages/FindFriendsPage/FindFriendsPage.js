import { useEffect, useState, useContext, lazy } from "react";
import "./FindFriendsPage.scss";
// import { FaMagnifyingGlass } from "react-icons/fa6";
import { getUsersExceptLoggedInUser } from "../../API/API";
import { AuthContext } from "../../context/AuthContext/AuthContext";
// import { FriendsContext } from "../../context/common/Context";
const UserList = lazy(() => import("./UserList/UserList"));
function FindFriendsPage() {
  const {
    state: { user },
  } = useContext(AuthContext);
  // const { FriendsData } = useContext(FriendsContext);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  // const [mainUser, setMainUser] = useState({});

  useEffect(() => {
    fetchUsers();

    // eslint-disable-next-line
  }, []);

  async function fetchUsers() {
    try {
      const result = await getUsersExceptLoggedInUser(user?.id);
      console.log(result);
      setAllUsers(result);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(value) {
    setInput(value);
    handleFilter(value);
  }
  function handleFilter(input) {
    if (allUsers.length !== 0) {
      const filtered = allUsers?.filter((user) => {
        return user?.user_name.toLowerCase().includes(input);
      });
      setFilteredUsers(filtered.sort());
    }
  }

  return (
    <div className="search-page">
      <div className="search-page__content">
        <h3 className="search-page__content__title">Find Your Friend</h3>
        <div className="search-page__content__search-box">
          <input
            type="text"
            className="search-page__content__search-box__input"
            placeholder="search by username"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          {/* <button className="search-page__content__search-box__search-btn">
            <FaMagnifyingGlass />
          </button> */}
        </div>
        <div className="search-page__content__results">
          {input && (
            <>
              {filteredUsers.map((grabbedUser, index) => {
                return <UserList grabbedUser={grabbedUser} key={index} />; //<p key={id || index}>{user_name}</p>;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindFriendsPage;
