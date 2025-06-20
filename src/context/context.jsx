import { videos } from "../utils/constant";
import { createContext, useState } from "react";

export const VideoContext = createContext(null);

export const VideTheme = ({ children }) => {
  const [videos, setVideos] = useState(videos);
  return <VideoContext.Provider>{children}</VideoContext.Provider>;
};
