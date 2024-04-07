// DEPENDENCIES
import React, { Suspense, lazy, useContext, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/common/spinner/Spinner";
import PrivateRoute from "./AlternateComponents/common/PrivateRoute/PrivateRoute";
import useAuthHooks from "./AlternateComponents/hooks/auth/useAuthHooks";

// Contexts

import { WishlistContext } from "./AlternateComponents/context/common/Context";
import { AuthContext } from "./AlternateComponents/context/AuthContext/AuthContext";

//_________________ Import Page Comps _______________________

import Nav from "./AlternateComponents/Nav/Nav";
import Footer from "./AlternateComponents/Footer/Footer";
import SidebarNav from "./AlternateComponents/SidebarNav/SidebarNav";
// // Pages

const LoginPage = lazy(() =>
  import("./AlternateComponents/Pages/LoginPage/LoginPage")
);
const UserWishlistPage = lazy(() =>
  import("./AlternateComponents/Pages/UserWishlistPage/UserWishlistPage")
);
const NotificationPage = lazy(() =>
  import("./AlternateComponents/Pages/NotificationPage/NotificationPage")
);
const SignupPage = lazy(() =>
  import("./AlternateComponents/Pages/SignupPage/SignupPage")
);
const HomePage = lazy(() =>
  import("./AlternateComponents/Pages/HomePage/HomePage")
);
const DashboardPage = lazy(() =>
  import("./AlternateComponents/Pages/DashboardPage/DashboardPage")
);

const GoogleProductPage = lazy(() =>
  import("./AlternateComponents/Pages/GoogleProductPage/GoogleProductPage")
);

function App() {
  useAuthHooks();
  const {
    state: { user },
  } = useContext(AuthContext);

  const [wishlist, setWishlist] = useState([]);
  const wishlistStateContextValues = { wishlist, setWishlist };

  return (
    <Suspense fallback={<Spinner />}>
      <ToastContainer autoClose={3000} />
      <Router>
        <WishlistContext.Provider value={wishlistStateContextValues}>
          <Nav />
          <main className={user && "page-container"}>
            <div className={user && "page-container__content"}>
              {user && <SidebarNav />}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/google-products"
                  element={
                    <PrivateRoute>
                      <GoogleProductPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/user-wishlist"
                  element={
                    <PrivateRoute>
                      <UserWishlistPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/notifications"
                  element={
                    <PrivateRoute>
                      <NotificationPage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </div>
          </main>
          <Footer />
        </WishlistContext.Provider>
      </Router>
    </Suspense>
  );
}

export default App;
