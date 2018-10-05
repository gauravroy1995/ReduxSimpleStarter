import React, { Component } from "react";
import VideoListItem from "./video_listitems";
const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return (
    <div>
      <ul className="col-md-4 list-group">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
