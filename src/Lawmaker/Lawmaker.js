import React from "react";
import "./Lawmaker.css";
import {Link} from "react-router-dom";

function Lawmaker({ id, name, avatar, partyAcronym, FUAcronym }) {
  return (
    <div className="column is-one-fifth">
      <Link to={`/deputado/detalhes/${id}`}>
          <div className="card-image">
            <figure className="image figure-box">
              <img className="foto-deputado" src={avatar} alt={name} />
            </figure>
          </div>
        <div className="content content-deputado">
            <p>{name} - {partyAcronym}/{FUAcronym}</p>
        </div>
      </Link>
    </div>
  );
}

export default Lawmaker;
