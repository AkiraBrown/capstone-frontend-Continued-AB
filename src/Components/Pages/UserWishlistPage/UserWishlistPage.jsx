import { useContext, useEffect, lazy } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../common/context/AuthContext/AuthContext";
import { WishlistReducerContext } from "../../common/Reducers/WishlistReducer/WishlistReducer";
import { grabUsersWishlist } from "../../API/API";
const WishlistCard = lazy(() => import("./WishlistCard/WishlistCard.jsx"));

function UserWishlistPage() {
  const { wishlist, dispatch } = useContext(WishlistReducerContext);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    fetchUserWishlistData();
  }, []);

  async function fetchUserWishlistData() {
    try {
      const response = await grabUsersWishlist(user?.id);
      dispatch({ type: "overwrite", response });
    } catch (error) {
      if (import.meta.env.DEV) console.log(error);
    }
  }

  return (
    <div className="container text-center py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {wishlist.length === 0 ? (
          <>
            <div className="container text-center fw-bold p-4">
              <h4>{"Let's add some items to your wishlist"}</h4>
              <NavLink className="btn btn-primary" to={"/google-products"}>
                {"Let's Go"}
              </NavLink>
            </div>
          </>
        ) : (
          <>
            {wishlist.map((item) => {
              return <WishlistCard data={item} key={item.id} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default UserWishlistPage;
