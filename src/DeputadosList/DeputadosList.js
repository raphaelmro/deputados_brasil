import React, { useEffect, useState } from "react";
import axios from "axios";
import Deputado from "./Deputado/Deputado";
import "./DeputadosList.css";

import estados from "./estados-br";

function DeputadosList() {
  const [deputados, setDeputados] = useState([]);

  const fetchListDeputados = async () => {
    const response = await axios.get(
      `https://dadosabertos.camara.leg.br/api/v2/deputados`
    );
    setDeputados(response.data.dados);
  };
  useEffect(() => {
    fetchListDeputados();
  }, []);

  return (
    <div className="container custom-container">
      <div className="field">
        <div className="control">
          <div className="select">
            <select defaultValue="Brasil">
              {estados.UF.map(estado => {
                return <option key={estado.sigla}>{estado.sigla}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="columns is-multiline is-flex">
        {deputados &&
          deputados.map(deputado => {
            return (
              <Deputado
                key={deputado.id}
                id={deputado.id}
                nome={deputado.nome}
                foto={deputado.urlFoto}
              />
            );
          })}
      </div>
    </div>
  );
}

export default DeputadosList;
