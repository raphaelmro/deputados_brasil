import React from "react";
import loading from "../assets/loading.gif";

import "./LoadImage.css";

function LoadImage() {
  return (
    <figure className="image container figure-custom">
      <img src={loading} alt="Carregando" className="load-image" />
    </figure>
  );
}

export default LoadImage;
