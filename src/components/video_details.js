import React, { Component } from "react";

const VideoDetails = props => {
  if (!props.video) {
    return <h1>Loading....</h1>;
  }

  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      console.log(
      {url})
      <div>
        <iframe
          width="700px"
          height="450px"
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetails;
