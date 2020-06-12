import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>loading des produits...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
