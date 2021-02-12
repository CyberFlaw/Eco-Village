import React from "react";
import Headder from "../Components/Appbar";

function Video() {
  return (
    <div>
      <Headder />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: 26 }}>Additional Videos</p>
        <div>
          <iframe
            title="vid1"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/75CDQjDc75E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            title="vid2"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/6vQZr4imyTk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            title="vid3"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/6be8GiyaZk8"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
