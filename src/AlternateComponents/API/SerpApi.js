import Axios from "./Axios";

async function handleUserSearch(searchTerm) {
  try {
    let response = await Axios.get(`/serp/search/?search=${searchTerm}`);
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
