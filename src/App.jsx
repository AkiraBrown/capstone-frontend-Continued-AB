import { Suspense, lazy, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Components/common/PrivateRoute/PrivateRoute";
import useAuthHooks from "./Components/common/hooks/Auth/useAuthHooks";
import Spinner from "./Components/common/Spinner/Spinner";

//Contexts
import { AuthContext } from "./Components/common/context/AuthContext/AuthContext";
import FriendsReducerComp from "./Components/common/Reducers/FriendsReducer/FriendReducer";
import NotificationsReducerComp from "./Components/common/Reducers/NotificationReducer/NotificationReducer";
import WishlistReducerComp from "./Components/common/Reducers/WishlistReducer/WishlistReducer";

// Common Comps
import Nav from "./Components/common/Nav/Nav";
import Footer from "./Components/common/Footer/Footer";
import SidebarNav from "./Components/common/SidebarNav/SidebarNav";

const LoginPage = lazy(() => import("./Components/Pages/LoginPage/LoginPage"));
const UserWishlistPage = lazy(() =>
  import("./Components/Pages/UserWishlistPage/UserWishlistPage")
);
const SignupPage = lazy(() =>
  import("./Components/Pages/SignupPage/SignupPage")
);
const GoogleProductPage = lazy(() =>
  import("./Components/Pages/GoogleProductPage/GoogleProductPage")
);
const FriendsProfilePage = lazy(() =>
  import("./Components/Pages/FriendsProfilePage/FriendsProfilePage")
);
const FindFriendsPage = lazy(() =>
  import("./Components/Pages/FindFriendsPage/FindFriendsPage")
);
const HomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));
const Dashboard = lazy(() =>
  import("./Components/Pages/DashboardPage/DashboardPage")
);
const AboutPage = lazy(() => import("./Components/Pages/AboutPage/AboutPage"));
function App() {
  useAuthHooks();

  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <FriendsReducerComp>
            <NotificationsReducerComp>
              <WishlistReducerComp>
                <Nav />
                {user && <SidebarNav />}
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
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
                    path="/friends/:id"
                    element={
                      <PrivateRoute>
                        <FriendsProfilePage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/search-friends"
                    element={
                      <PrivateRoute>
                        <FindFriendsPage />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Footer />
              </WishlistReducerComp>
            </NotificationsReducerComp>
          </FriendsReducerComp>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
