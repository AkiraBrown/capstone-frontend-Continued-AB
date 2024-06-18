import { useContext, useEffect, useState } from "react";
import { WishlistReducerContext } from "../../../common/Reducers/WishlistReducer/WishlistReducer";
import { AuthContext } from "../../../common/context/AuthContext/AuthContext";
import { addWishlistItem } from "../../../API/API";
function ProductCard({ data }) {
  const [exists, setExists] = useState(false);
  const { wishlist, dispatch } = useContext(WishlistReducerContext);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    setExists(
      wishlist.filter(({ product_id }) => product_id === data.product_id)
        .length !== 0
    );
  }, [wishlist]);

  async function addToWishlist() {
    const formatDataObj = {
      user_id: user.id,
      title: data?.title,
      link: data?.link,
      product_link: data?.product_link,
      product_id: data?.product_id,
      source: data?.source,
      price: data?.price,
      thumbnail: data?.thumbnail,
      delivery: data?.delivery,
    };
    try {
      const response = await addWishlistItem(formatDataObj);
      dispatch({ type: "add", response });
    } catch (error) {
      if (import.meta.env.DEV) console.log(error);
    }
  }

  return (
    <>
      {!exists && (
        <div className="col">
          <div className="card">
            <img
              src={data?.thumbnail}
              alt={data?.id}
              className="card-img-top p-3"
              height={"300px"}
            />
            <div className="card-body">
              <p className="card-text text-truncate">{data?.title}</p>
              <p className="card-text text-wrap">{data?.source}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group mx-auto">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={addToWishlist}
                  >
                    Add To Wishlist
                  </button>
                  <button className="btn btn-sm btn-outline-secondary">
                    <a href={data?.link} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
