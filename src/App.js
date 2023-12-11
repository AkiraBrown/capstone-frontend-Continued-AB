// DEPENDENCIES
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/common/spinner/Spinner";

import { RefreshContext } from "./components/common/context/context";

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const UserWishlist = React.lazy(() =>
  import("./components/UserWishlist/UserWishlist")
);
const AddWishlist = React.lazy(() =>
  import("./components/AddWishlist/AddWishlist")
);
const EditWishlist = React.lazy(() =>
  import("./components/EditWishlist/EditWishlist")
);
const FoundUser = React.lazy(() => import("./components/FoundUser/FoundUser"));

// COMPONENTS
const SignUpPage = React.lazy(() => import("./components/SignUpPage/Signup"));
const SearchPage = React.lazy(() =>
  import("./components/SearchPage/SearchPage")
);
const Nav = React.lazy(() => import("./components/Nav/Nav"));
const Sidebar = React.lazy(() => import("./components/Sidebar/Sidebar"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Login = React.lazy(() => import("./components/Login/Login"));
const FriendList = React.lazy(() =>
  import("./components/FriendList/FriendList")
);
const FriendsProfile = React.lazy(() =>
  import("./components/FriendsProfile/FriendsProfile")
);

function App() {
  const [user, setUser] = useState(null);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const refreshContextValue = {
    setToggleRefresh,
    toggleRefresh,
  };

  useEffect(() => {
    let userFromStorage = localStorage.getItem("user");
    let storedUser = JSON.parse(userFromStorage);
    setUser(storedUser);
  }, []);

  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <ToastContainer autoClose={3000} />
        <Nav user={user} setUser={setUser} />
        <main className={user ? "page-content" : ""}>
          <RefreshContext.Provider value={refreshContextValue}>
            {user && <Sidebar />}
          </RefreshContext.Provider>
          <Routes>
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/users/:id" element={<FoundUser />} />
            <Route
              path="/dashboard/:id/new"
              element={<AddWishlist user={user} />}
            />
            <Route
              path="/dashboard/:id/userwishlist"
              element={<UserWishlist user={user} />}
            />
            <Route path="/dashboard/:id/edit" element={<EditWishlist />} />
            <Route path="/dashboard/:id" element={<Dashboard user={user} />} />

            <Route
              path="/dashboard/:id/friends"
              element={
                <RefreshContext.Provider value={refreshContextValue}>
                  <FriendList />
                </RefreshContext.Provider>
              }
            />
            <Route
              path="/dashboard/:id/friends/:friendId"
              element={
                <RefreshContext.Provider value={refreshContextValue}>
                  <FriendsProfile />
                </RefreshContext.Provider>
              }
            />
          </Routes>
        </main>
        <Footer user={user} setUser={setUser} />
      </Router>
    </React.Suspense>
  );
}

export default App;
