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
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={data?.thumbnail}
          alt={data?.product_id}
          className="card-img-top"
        />

        <div className="card-body">
          <h5 className="card-title text-truncate">{data?.title}</h5>
          <p className="card-text pt-2">{data?.source}</p>
          <p className="card-text p-2">{data?.price}</p>
          <div className="btn-group">
            <button className="btn btn-outline-danger" onClick={handleClick}>
              Delete
            </button>
            <a
              href={data?.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
