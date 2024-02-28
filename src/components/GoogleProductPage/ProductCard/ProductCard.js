import React from "react";
import "./ProductCard.scss";
function ProductCard({ data }) {
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

      <button className="card__wishlistBtn">Add to wishlist</button>
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
