import { useContext } from "react";
import { toast } from "react-toastify";
import "./ProductCard.scss";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { addWishlistItem } from "../../../API/API";
function ProductCard({ data }) {
  const {
    state: { user },
  } = useContext(AuthContext);
  async function addToWishlist() {
    /*
    user_id,
    title,
    link,
    product_link,
    product_id,
    source,
    price,
    thumbnail,
    delivery,
    */

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
    // console.log(formatDataObj);
    try {
      const response = await addWishlistItem(formatDataObj);
      console.log(response);

      /*TODO
      - We need a check to see if this item already exists on the user's wishlist
      - Data needs to persist if the user logs in again
          - create a context that grabs the user's wihslist and stores it
          - compares user's wishlist to the against the results to see if it already is in wishlist
          - Consideration towards performance is needed for this to work correctly
      
      */
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", toast.POSITION.TOP_CENTER);
    }
  }
  return (
    <div className="card">
      <div className="card__image-container">
        <img
          className="card__thumbnail"
          src={data?.thumbnail}
          alt={data?.product_id}
        />
      </div>
      <div className="card__text-container">
        <h4 className="card__title">{data?.title}</h4>
        <p className="card__price">{data?.price}</p>
        <p className="card__source">{data?.source}</p>
        <p className="card__delivery">{data?.delivery}</p>
      </div>

      <button className="card__wishlistBtn" onClick={() => addToWishlist()}>
        Add to wishlist
      </button>
    </div>
  );
}

export default ProductCard;
/*
{
  "data": {
    "position": 1,
    "title": "Mushroom Coffee • 30 Servings • Reishi, Turkey Tail, Shitake, King Trumpet, Lions ...",
    "link": "https://www.ryzesuperfoods.com/products/mushroom-coffee",
    "product_link": "https://www.google.com/shopping/product/7361294905872830495?gl=us",
    "product_id": "7361294905872830495",
    "serpapi_product_api": "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&product_id=7361294905872830495",
    "source": "RYZE Superfoods",
    "price": "$27.00",
    "extracted_price": 27,
    "old_price": "$36.00",
    "extracted_old_price": 36,
    "thumbnail": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcCS_ZizdIrJ97fzMymqN4ir2Hh4m0JRuaU6p7QUcxuamdZyJ1N3ff63dPBnpGKqZ8kXXgmecu&usqp=CAE",
    "tag": "SALE",
    "extensions": "[\"SALE\"]",
    "delivery": "Free delivery by Sat, Mar 2",
    "store_rating": 5,
    "store_reviews": 7800
  }
}
*/
