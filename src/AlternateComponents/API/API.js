import Axios from "./Axios";

async function spinUpServer() {
  try {
    await Axios.get("/");
  } catch (error) {
    return error;
  }
}
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

async function grabUsersFriends(id) {
  try {
    const response = await Axios.get(`/alt/friends/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function addWishlistItem(data) {
  try {
    const response = await Axios.post(`/wishlist/add-item`, data);
    return response.data;
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
};
