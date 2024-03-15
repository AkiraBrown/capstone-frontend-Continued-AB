import { useState, lazy } from "react";
import "./GoogleProductPage.scss";
import { handleUserSearch } from "../API/SerpApi";
import { toast } from "react-toastify";
const ProductCard = lazy(() => import("./ProductCard/ProductCard"));

function GoogleProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productArr, setProductArr] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);

    try {
      if (searchTerm) {
        const formatSearchTerm = searchTerm.replace(/[&=]/g, "");
        let response = await handleUserSearch(formatSearchTerm);
        console.log(response);
        setProductArr(response);
      } else {
        throw new Error("Please submit a valid search term");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Please submit a valid search term",
        toast.POSITION.TOP_CENTER
      );
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
        <section className="products-container">
          {productArr.length === 0 || !productArr ? (
            <>
              <h3>Search for some products</h3>
            </>
          ) : (
            <>
              {productArr.map((item, index) => {
                return <ProductCard data={item} key={index} />;
              })}
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default GoogleProductPage;
