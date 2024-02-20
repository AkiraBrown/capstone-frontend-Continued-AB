import { useEffect, useState } from "react";
import "./GoogleProductPage.css";
import { handleUserSearch } from "../API/SerpApi";

function GoogleProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    console.log("wassup");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await handleUserSearch({ search: searchTerm });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default GoogleProductPage;
