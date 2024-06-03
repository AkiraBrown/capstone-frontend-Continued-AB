import { useState, useEffect, useContext } from "react";
import {
  FriendsContext,
  NotificationContext,
} from "../../../context/common/Context";
import { toast } from "react-toastify";

//Icon Imports
import { IoMdMore } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
//API
import { addNewFriend, updateNotification } from "../../../API/API";

function NotiUnit({ data, handleDeleteNoti }) {
  const { FriendsData, setFriendsData } = useContext(FriendsContext);
  const { notifications, setNotifications } = useContext(NotificationContext);
  const [formatDate, setFormatDate] = useState("");
  const [isReadValue, setIsReadValue] = useState(data?.is_read);
  const [show, setShow] = useState(false);
  useEffect(() => {
    dateParser(data?.date_stamp);
    // setIsReadValue(data?.is_read);
    // eslint-disable-next-line
  }, []);
  function dateParser(inputDate) {
    const dateObj = new Date(inputDate);
    const options = { month: "long", day: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
    setFormatDate(formattedDate);
  }

  async function changeReadData(checkVal) {
    const newData = {
      id: data?.id,
      is_read: checkVal,
    };
    try {
      const result = await updateNotification(newData);
      if (result.length !== 0) {
        const updatedArr = notifications.map((item) => {
          return item.id === result.id ? (item = result) : item;
        });
        setNotifications(updatedArr);
      }
    } catch (error) {
      toast.error("Something Went Wrong", toast.POSITION.TOP_CENTER);
      console.log(error);
    }
  }
  async function handleAcceptFriendRequest(user_id, sender_id) {
    const data = {
      user_id: user_id,
      friend_id: sender_id,
    };
    try {
      const result = await addNewFriend(data);
      setFriendsData([...FriendsData], result);
      toast.success("You are now friends", toast.POSITION.TOP_CENTER);
      //   await handleDeleteNoti(collection?.id);
    } catch (error) {
      toast.error("Something Went Wrong", toast.POSITION.TOP_CENTER);
      console.log(error);
    }
  }
  function handleOnChange(checked) {
    setIsReadValue(!isReadValue);
    changeReadData(checked);
  }

  return (
    <div key={data?.id} className="Noti">
      {data?.msg_type === "purchase" ? (
        <>
          <input
            type="checkbox"
            className="Noti__read"
            checked={isReadValue}
            onChange={(e) => handleOnChange(e.target.checked)}
          />
          <p className="Noti__formatDate">{formatDate}</p>
          <p className="Noti__messages">{data?.messages}</p>
          <div className="Noti__dropdown">
            <button
              className="Noti__dropdown__options"
              onClick={() => setShow(!show)}
            >
              <IoMdMore />
            </button>
            <div className={`Noti__dropdown__content ${show && "show"}`}>
              <div className="Noti__dropdown__content__list">
                <button
                  className="Noti__dropdown__content__list__item"
                  onClick={() => handleDeleteNoti(data?.id)}
                >
                  <MdDelete />
                  <span>&#8192;</span>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {data?.msg_type === "request" && (
            <>
              <input
                className="Noti__read"
                type="checkbox"
                checked={isReadValue}
                onChange={(e) => handleOnChange(e.target.checked)}
              />
              <p className="Noti__formatDate">{formatDate}</p>
              <p className="Noti__messages">{`${data?.sender_name}: ${data?.messages}`}</p>
              <div className="Noti__dropdown">
                <button
                  className="Noti__dropdown__options"
                  onClick={() => setShow(!show)}
                >
                  <IoMdMore />
                </button>
                <div className={`Noti__dropdown__content ${show && "show"}`}>
                  <div className="Noti__dropdown__content__list">
                    <button
                      className="Noti__dropdown__content__list__item"
                      onClick={() =>
                        handleAcceptFriendRequest(
                          data?.user_id,
                          data?.sender_id
                        )
                      }
                    >
                      <FaCheck />
                      <span>&#8192;</span>
                      Accept Friend
                    </button>
                    <button
                      className="Noti__dropdown__content__list__item"
                      onClick={() => handleDeleteNoti(data?.id)}
                    >
                      <ImCross />
                      <span>&#8192;</span>
                      Decline Friend
                    </button>
                    <button
                      className="Noti__dropdown__content__list__item"
                      onClick={() => handleDeleteNoti(data?.id)}
                    >
                      <MdDelete />
                      <span>&#8192;</span>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default NotiUnit;
