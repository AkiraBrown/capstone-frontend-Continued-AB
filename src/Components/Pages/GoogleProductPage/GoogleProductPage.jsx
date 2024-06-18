import { useState, lazy } from "react";
import { handleUserSearch } from "../../API/SerpApi";
// import { WishlistReducerContext } from "../../common/Reducers/WishlistReducer/WishlistReducer";
import { CiSearch } from "react-icons/ci";
const ProductCard = lazy(() => import("./ProductCard/ProductCard"));

function GoogleProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productArr, setProductArr] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (searchTerm) {
        const formatSearchTerm = searchTerm.replace(/[&=]/g, "");
        const response = await handleUserSearch(formatSearchTerm);
        setProductArr(response);
      } else {
        throw new Error("Please submit a valid search term");
      }
    } catch (error) {
      if (import.meta.env.DEV) console.log(error);
    }
  }
  return (
    <div className="container text-center py-5">
      <form
        onSubmit={handleSubmit}
        className="d-flex pb-4 w-50 text-center mx-auto"
        role="search"
      >
        <input
          type="text"
          className="form-control me-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn">
          <CiSearch />
        </button>
      </form>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {productArr.length !== 0 ? (
          <>
            {productArr.map((item, idx) => {
              return <ProductCard key={item?.product_id || idx} data={item} />;
            })}
          </>
        ) : (
          <span className="mx-auto p-5">Search for some items</span>
        )}
      </div>
    </div>
  );
}

export default GoogleProductPage;
