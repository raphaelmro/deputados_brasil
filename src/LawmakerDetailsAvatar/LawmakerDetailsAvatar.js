import React from "react";
import {convertUpperCaseToTitleCase} from "../util";

function LawmakerDetailsAvatar({ lawmakerDetails }) {
  return (
    <div className="tile is-child box">
      <figure
        className="image  figure-style"
        style={{ marginLeft: "15%" }}
      >
        <img
          src={lawmakerDetails.urlFoto}
          alt={convertUpperCaseToTitleCase(lawmakerDetails.nomeEleitoral)}
        />
      </figure>
      <div className="lawmaker-title">
        <p className="title">{convertUpperCaseToTitleCase(lawmakerDetails.nomeEleitoral)}</p>
        <p className="subtitle">{`${lawmakerDetails.siglaPartido}/${lawmakerDetails.siglaUf}`}</p>
      </div>
    </div>
  );
}

export default LawmakerDetailsAvatar;
