import Axios from "./Axios";
//These request will be split off to separate api files

// MISC Calls
async function spinUpServer() {
  try {
    await Axios.get("/");
  } catch (error) {
    return error;
  }
}

// User account Calls
async function loginSession(data) {
  try {
    const response = await Axios.post("/user/login", data);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function signupSession(data) {
  try {
    const response = await Axios.post("/user/create-user", data);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function getAllUsers() {
  try {
    const response = await Axios.get("/user");
    return response.data;
  } catch (error) {
    return error;
  }
}
async function getUsersExceptLoggedInUser(id) {
  try {
    const response = await Axios.get(`/user/all-except/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

//----------------Wishlist Calls--------------------//

async function addWishlistItem(data) {
  try {
    const response = await Axios.post(`/wishlist/add-item`, data);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function grabUsersWishlist(id) {
  try {
    const response = await Axios.get(`/wishlist/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function deleteItemFromWishlist(id) {
  try {
    const response = await Axios.delete(`/wishlist/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function updateItemFromWishlist(data) {
  try {
    const response = await Axios.put(`/wishlist/update-item`, data);
    return response.data;
  } catch (error) {
    return error;
  }
}
//-----------------Friend Calls ----------------------//
async function grabUsersFriends(id) {
  try {
    const response = await Axios.get(`/friend/list/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function getUserFriendsList(id) {
  try {
    const response = await Axios.get(`/friend/friend-lookup/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function addNewFriend(data) {
  try {
    const response = await Axios.post(`/friend/add-new-friend`, data);
    return response.data;
  } catch (error) {
    return error;
  }
}

//------------------Notification Calls-------------------------//
async function getNotificationById(id) {
  try {
    let result = await Axios.get(`/notification/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
}
async function newNotification(data) {
  try {
    let result = await Axios.post(`/notification/new-notification`, data);
    return result.data;
  } catch (error) {
    return error;
  }
}
async function deleteNotification(id) {
  try {
    let result = await Axios.delete(`/notification/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
}
async function updateNotification(data) {
  try {
    let result = await Axios.put(`/notification/update-notification`, data);
    return result.data;
  } catch (error) {
    return error;
  }
}
// Friends Routes
async function deleteFriend(id, friendId) {
  try {
    let result = await Axios.delete(`/dashboard/${id}/friends/${friendId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

export {
  spinUpServer,
  loginSession,
  signupSession,
  grabUsersFriends,
  addWishlistItem,
  grabUsersWishlist,
  deleteItemFromWishlist,
  updateItemFromWishlist,
  getUserFriendsList,
  addNewFriend,
  getAllUsers,
  getUsersExceptLoggedInUser,
  getNotificationById,
  newNotification,
  deleteNotification,
  updateNotification,
  deleteFriend,
};
