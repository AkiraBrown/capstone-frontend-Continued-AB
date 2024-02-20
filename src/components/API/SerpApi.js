import Axios from "./Axios";

async function handleUserSearch(data) {
  try {
    let response = await Axios.post("/serp/search", data);
    return response.data;
  } catch (error) {
    return error;
  }
}
async function checkBackendActive() {
  try {
    const response = await Axios.get("/serp");
    return response.data;
  } catch (error) {
    return error;
  }
}

export { handleUserSearch, checkBackendActive };
