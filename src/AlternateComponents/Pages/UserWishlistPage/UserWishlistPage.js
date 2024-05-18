import "./UserWishlistPage.scss";
import { WishlistContext } from "../../context/common/Context";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext, useEffect, lazy } from "react";
import { grabUsersWishlist } from "../../API/API";
import { toast } from "react-toastify";

const WishlistCard = lazy(() => import("./WishlistCard/WishlistCard"));

function UserWishlistPage() {
  const {
    state: { user },
  } = useContext(AuthContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  useEffect(() => {
    fetchUsersWishlistData();

    // eslint-disable-next-line
  }, []);

  async function fetchUsersWishlistData() {
    try {
      const response = await grabUsersWishlist(user.id);

      setWishlist(response);
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.log(error);

      toast.error("Something went wrong", toast.POSITION.TOP_CENTER);
    }
  }

  return (
    <div className="wishlist">
      <ul className="wishlist__container">
        {wishlist.length !== 0 ? (
          <>
            {wishlist?.map((item, index) => {
              return <WishlistCard data={item} key={index} />;
            })}
          </>
        ) : (
          <>
            <span className="wishlist__container__empty">
              You have no wishlist items
            </span>
          </>
        )}
      </ul>
    </div>
  );
}

export default UserWishlistPage;
