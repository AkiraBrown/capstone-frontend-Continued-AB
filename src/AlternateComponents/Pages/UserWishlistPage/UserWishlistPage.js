import "./UserWishlistPage.scss";
import { WishlistContext } from "../../context/common/Context";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useState, useContext, useEffect } from "react";
import { grabUsersWishlist } from "../../API/API";
import { toast } from "react-toastify";

function UserWishlistPage() {
  const [wishlistData, setWishlistData] = useState([]);
  const {
    state: { user },
  } = useContext(AuthContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  useEffect(() => {
    fetchUsersWishlistData();
    console.log(wishlist);
    // eslint-disable-next-line
  }, []);

  async function fetchUsersWishlistData() {
    try {
      const response = await grabUsersWishlist(user.id);
      console.log(response);
      setWishlistData(response);
      setWishlist(response);
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.log(error);

      toast.error("Something went wrong", toast.POSITION.TOP_CENTER);
    }
  }

  // async function handleDeleteWishlist() {}
  // async function handleEditWishlist() {}
  return (
    <div>
      UserWishlistPage
      <ul>
        {wishlistData.length !== 0 && (
          <>
            {wishlistData.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </>
        )}
      </ul>
    </div>
  );
}

export default UserWishlistPage;
