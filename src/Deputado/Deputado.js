import React from "react";
import "./Deputado.css";

function Deputado({ id, nome, foto }) {
  return (
    <div className="column is-one-fifth">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img className="foto-deputado" src={foto} alt={nome} />
          </figure>
        </div>
      </div>
      <div className="content content-deputado">
        <p>{nome}</p>
      </div>
    </div>
  );
}

export default Deputado;