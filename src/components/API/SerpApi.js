const { getJson } = require("serpapi");

async function handleShoppingSearch(search, region = "us", language = "en") {
  getJson(
    {
      api_key: process.env.SERP_API_KEY,
      engine: "google_shopping",
      google_domain: "google.com",
      gl: region,
      hl: language,
      q: search,
    },
    (json) => {
      console.log(json);
    }
  );
}

module.exports = {
  handleShoppingSearch,
};
