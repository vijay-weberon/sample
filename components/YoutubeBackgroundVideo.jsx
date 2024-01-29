import React from "react";
const YoutubeBackgroundVideo = () => {
  return (
    <div
      id="bgVideo"
      style={{
        position: "relative",
        textAlign: "center",
        padding: "10px 0px 0px",
        display: "none",
      }}
    >
      <div
        id="vHeader"
        style={{
          width: "100%",
          height: "0px",
          position: "absolute",
          backgroundColor: "black",
          top: "0px",
        }}
      ></div>
      <iframe
        id="video1"
        frameBorder="0"
        style={{ pointerEvents: "none" }}
        allow="autoplay; fullscreen"
        src=""
      ></iframe>
      <div
        id="vFooter"
        style={{
          width: "100%",
          height: "0px",
          position: "absolute",
          backgroundColor: "black",
          bottom: "20px",
        }}
      ></div>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        <a id="playSound">Play Sound</a>
      </div>
    </div>
  );
};

export default YoutubeBackgroundVideo;
