import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import LikedVideos from "./pages/LikedVideos";
import WatchHistory from "./pages/WatchHistory";

const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchhistory" element={<WatchHistory />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
