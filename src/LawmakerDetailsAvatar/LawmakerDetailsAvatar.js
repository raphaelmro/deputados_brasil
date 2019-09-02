import React from "react";

function LawmakerDetailsAvatar({ lawmakerDetails }) {
  return (
    <div className="tile is-child box">
      <figure
        className="image  figure-style"
        style={{ marginLeft: "15%" }}
      >
        <img
          src={lawmakerDetails.urlFoto}
          alt={lawmakerDetails.nomeEleitoral}
        />
      </figure>
      <div className="lawmaker-title">
        <p className="title">{lawmakerDetails.nomeEleitoral}</p>
        <p className="subtitle">{`${lawmakerDetails.siglaPartido}/${lawmakerDetails.siglaUf}`}</p>
      </div>
    </div>
  );
}

export default LawmakerDetailsAvatar;
