import { useState, lazy } from "react";
import "./GoogleProductPage.scss";
import { handleUserSearch } from "../API/SerpApi";
const ProductCard = lazy(() => import("./ProductCard/ProductCard"));

function GoogleProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productArr, setProductArr] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    try {
      let response = await handleUserSearch({ search: searchTerm });
      setProductArr(response);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  }

  return (
    <>
      <div className="page-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            className="search-form__searchbar"
            value={searchTerm}
            placeholder="Search For Products..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-form__searchBtn">
            Search
          </button>
        </form>
        <div className="products-container">
          {productArr.map((item, index) => {
            return <ProductCard data={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default GoogleProductPage;
