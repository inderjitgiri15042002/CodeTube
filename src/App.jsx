import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import LikedVideos from "./pages/LikedVideos";
import WatchHistory from "./pages/WatchHistory";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchhistory" element={<WatchHistory />} />
      </Route>
    </Routes>
  );
};

export default App;
