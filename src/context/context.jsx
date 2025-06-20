import React from "react";
import { videoData } from "../utils/constant";
import { createContext, useState } from "react";

export const VideoContext = createContext(null);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(videoData);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};
