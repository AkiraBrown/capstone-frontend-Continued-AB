import "./NotificationPage.scss";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { NotificationContext } from "../../context/common/Context";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { getNotificationById, deleteNotification } from "../../API/API";
import NotiUnit from "./NotiUnit/NotiUnit";
function NotificationPage() {
  const [toggleActive, setToggleActive] = useState(false);
  const [search, setSearch] = useState("");
  const [sortCheck, setSortCheck] = useState(true);
  const { notifications, setNotifications } = useContext(NotificationContext);
  const [filterData, setFilterData] = useState([]);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  // useEffect(() => {
  //   if (search !== "") {
  //     let format = filterData.filter((item) => {
  //       let localMsg = item.messages.toLowerCase();
  //       return localMsg.includes(search);
  //     });
  //     format = sortByDate(format, sortCheck);
  //     setFilterData(format);
  //   }
  //   // eslint-disable-next-line
  // }, [search]);
  // useEffect(() => {
  //   if (notifications.length !== 0 && !toggleActive) {
  //     setFilterData(notifications);
  //   } else {
  //     let format = notifications.filter(({ is_read }) => is_read === false);
  //     format = sortByDate(format, sortCheck);
  //     setFilterData(format);
  //   }
  //   // eslint-disable-next-line
  // }, [toggleActive]);

  useEffect(() => {
    if (notifications.length !== 0 && !toggleActive) {
      setFilterData(notifications);
    } else {
      let format = notifications.filter(({ is_read }) => is_read === false);
      format = sortByDate(format, sortCheck);
      setFilterData(format);
    }
    if (search !== "") {
      let format = filterData.filter((item) => {
        let localMsg = item.messages.toLowerCase();
        return localMsg.includes(search);
      });
      format = sortByDate(format, sortCheck);
      setFilterData(format);
    }
    // eslint-disable-next-line
  }, [toggleActive, search]);

  async function fetchData() {
    try {
      let result = await getNotificationById(user?.id);
      if (result.length !== 0) {
        if (result?.response) setNotifications([]);
        result = sortByDate(result, sortCheck);
        setNotifications(result);
        setFilterData(result);
      } else {
        toast.info("No New Notifications", toast.POSITION.TOP_CENTER);
      }
    } catch (error) {
      toast.error("Something Went Wrong", toast.POSITION.TOP_CENTER);
      console.log(error);
    }
  }
  function sortByDate(arr, order) {
    return order
      ? arr.sort((a, b) => new Date(a.date_stamp) - new Date(b.date_stamp)) // Ascending Order
      : arr.sort((a, b) => new Date(b.date_stamp) - new Date(a.date_stamp)); //Descending Order
  }

  async function handleDeleteNoti(id) {
    try {
      const result = await deleteNotification(id);
      if (result.length !== 0) {
        const filterData = notifications.filter((item) => item.id !== id);
        setNotifications(filterData);
      } else {
        throw new Error("Notification Could not be deleted");
      }
    } catch (error) {
      toast.error("Something went wrong", toast.POSITION.TOP_CENTER);
      console.log(error);
    }
  }
  return (
    <div className="noti-container">
      <h1 className="noti-container__title">Notifications</h1>
      <div className="noti-container__functionals">
        <div className="noti-container__functionals__group">
          <button
            className={`noti-container__functionals__group__btn ${
              !toggleActive && "active"
            }`}
            onClick={() => setToggleActive(!toggleActive)}
          >
            All
          </button>
          <button
            className={`noti-container__functionals__group__btn ${
              toggleActive && "active"
            }`}
            onClick={() => setToggleActive(!toggleActive)}
          >
            Unread
          </button>
        </div>
        <input
          className="noti-container__functionals__search"
          type="text"
          placeholder="Filter by message"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <select
          className="noti-container__functionals__sort"
          onChange={(e) => setSortCheck(!sortCheck)}
        >
          <option value={"Ascending"}>Ascending</option>
          <option value={"Descending"}>Descending</option>
        </select>
      </div>
      <div className="noti-container__content">
        <>
          {notifications.length === 0 ? (
            <div>No Notifications</div>
          ) : (
            <>
              {toggleActive || search !== "" ? (
                <>
                  {filterData.map((item) => {
                    return (
                      <NotiUnit
                        data={item}
                        key={item?.id}
                        handleDeleteNoti={handleDeleteNoti}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {notifications.map((item) => {
                    return (
                      <NotiUnit
                        data={item}
                        key={item?.id}
                        handleDeleteNoti={handleDeleteNoti}
                      />
                    );
                  })}
                </>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default NotificationPage;
