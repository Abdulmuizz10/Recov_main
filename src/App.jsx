import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import AuthLayouts from "./layouts/AuthLayouts";
import RootLayouts from "./layouts/RootLayouts";
import AdminLayouts from "./layouts/AdminLayouts";
import AdminHome from "./pages/AdminHome";
import AdminLostItems from "./pages/AdminLostItems";
import AdminFoundItems from "./pages/AdminFoundItems";
import AdminClaimSubmissions from "./pages/AdminClaimSubmissions";
import AdminResolvedPosts from "./pages/AdminResolvedPosts";
import { AuthContext } from "./context/AuthContext/AuthContext";

const App = () => {
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <main className="mx-auto relative">
      {loading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // or "light"
      />
      <Router>
        <ScrollToTop />
        <Routes>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
          <Route element={<RootLayouts setLoading={setLoading} />}>
            <Route
              path="/"
              element={<Home setLoading={setLoading} user={user} />}
            />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/post-details/:id" element={<PostDetails />} />
            <Route
              path="/profile"
              element={<Profile setLoading={setLoading} />}
            />
          </Route>

          <Route element={<AuthLayouts />}>
            <Route path="/login" element={<Login setLoading={setLoading} />} />
            <Route
              path="/sign-up"
              element={<SignUp setLoading={setLoading} />}
            />
            {/* <Route
            path="/auth/reset_password/:token"
            element={<ResetPassword />}
          /> */}
          </Route>

          <Route element={<AdminLayouts />}>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/lost" element={<AdminLostItems />} />
            <Route path="/admin/found" element={<AdminFoundItems />} />
            <Route
              path="/admin/submissions"
              element={<AdminClaimSubmissions />}
            />
            <Route path="/admin/resolved" element={<AdminResolvedPosts />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
