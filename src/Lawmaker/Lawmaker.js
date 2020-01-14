import React from "react";
import "./Lawmaker.css";
import { Link } from "react-router-dom";
import {convertUpperCaseToTitleCase} from "../util";

function Lawmaker({ id, name, avatar, partyAcronym, FUAcronym }) {
  return (
    <div className="column is-one-fifth">
      <Link to={`/deputado/detalhes/${id}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img className="foto-deputado" src={avatar} alt={name} />
            </figure>
          </div>
        </div>
        <div className="content content-deputado">
          <p>
            {convertUpperCaseToTitleCase(name)} - {partyAcronym}/{FUAcronym}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Lawmaker;
