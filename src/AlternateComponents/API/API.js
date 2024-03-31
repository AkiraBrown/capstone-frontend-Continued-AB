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
    const response = await Axios.post("/alt/login", data);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function signupSession(data) {
  try {
    const response = await Axios.post("/alt/create-user", data);
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
};
