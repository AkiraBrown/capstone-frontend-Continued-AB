import { useContext } from "react";
import "./WishlistCard.scss";
import { toast } from "react-toastify";
import { WishlistContext } from "../../../context/common/Context";
import { deleteItemFromWishlist } from "../../../API/API";

function WishlistCard({ data }) {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  async function handleDeleteWishlist() {
    try {
      const response = await deleteItemFromWishlist(data.id);
      console.log(response);
      const formatWishlist = wishlist.filter((item) => item.id !== response.id);
      console.log(formatWishlist);
      setWishlist(formatWishlist);
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.log(error);

      toast.error("Something went wrong", toast.POSITION.TOP_CENTER);
    }
  }

  return (
    <div className="item">
      <div className="item__image-container">
        <img
          className="item__image-container__image"
          src={data?.thumbnail}
          alt={data.product_id}
        />
      </div>
      <div className="item__text-container">
        <h4 className="item__text-container__title">{data?.title}</h4>
        <p className="item__text-container__price">{data?.price}</p>
        <p className="item__text-container__source">{data?.source}</p>
        <p className="item__text-container__delivery">{data?.delivery}</p>
        <a
          className="item__text-container__link"
          href={data?.link}
          target="_blank"
          rel="noreferrer"
        >
          {data.source}
        </a>
      </div>

      <button className="item__btn" onClick={() => handleDeleteWishlist()}>
        Delete
      </button>
    </div>
  );
}

export default WishlistCard;
