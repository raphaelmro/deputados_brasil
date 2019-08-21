import React from "react";
import "./Deputado.css";
import {Link} from "react-router-dom";

function Deputado({ id, nome, foto, siglaPartido, siglaUf }) {
  return (
    <div className="column is-one-fifth">
      <Link to={`/deputado/detalhes/${id}`}>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img className="foto-deputado" src={foto} alt={nome} />
            </figure>
          </div>
        </div>
        <div className="content content-deputado">
            <p>{nome} - {siglaPartido}/{siglaUf}</p>
        </div>
      </Link>
    </div>
  );
}

export default Deputado;
