import React from "react";

function LawmakerDetailsAvatar({ lawmakerDetails }) {
  return (
    <div className="tile is-child">
      <figure className="image is-4by3 figure-style">
        <img
          src={lawmakerDetails.urlFoto}
          alt={lawmakerDetails.nomeEleitoral}
        />
      </figure>
      <p className="title">{lawmakerDetails.nomeEleitoral}</p>
      <p className="subtitle">{`${lawmakerDetails.siglaPartido}/${lawmakerDetails.siglaUf}`}</p>
    </div>
  );
}

export default LawmakerDetailsAvatar;
