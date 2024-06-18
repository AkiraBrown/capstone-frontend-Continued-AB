import { useContext, useEffect, lazy } from "react";
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
    <div className="container-md mx-auto p-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {wishlist.map((item) => {
        return <WishlistCard data={item} key={item.id} />;
      })}
    </div>
  );
}

export default UserWishlistPage;
