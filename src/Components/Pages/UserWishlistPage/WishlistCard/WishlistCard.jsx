import { useContext } from "react";
import { WishlistReducerContext } from "../../../common/Reducers/WishlistReducer/WishlistReducer";
import { deleteItemFromWishlist } from "../../../API/API";
function WishlistCard({ data }) {
  const { dispatch } = useContext(WishlistReducerContext);
  async function handleClick() {
    try {
      const response = await deleteItemFromWishlist(data?.id);
      console.log(response);
      dispatch({ type: "delete", response });
    } catch (error) {
      if (import.meta.env.DEV) console.log(error);
    }
  }
  return (
    <div className="col">
      <div className="card">
        <img
          src={data?.thumbnail}
          alt={data?.product_id}
          className="card-img-top p-3"
          height={"300px"}
        />
        <div className="card-body">
          <p className="card-title text-truncate">{data?.title}</p>
          <p className="card-text text-truncate">{data?.source}</p>
          <p className="card-text text-wrap">{data?.price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group mx-auto">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleClick}
              >
                Delete
              </button>
              <a
                href={data?.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-secondary"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
