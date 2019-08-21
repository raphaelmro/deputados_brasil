import React, { useEffect, useState } from "react";
import axios from "axios";
import loading from "../assets/loading.gif";
import Deputado from "../Deputado/Deputado";
import "./DeputadosList.css";

import estados from "../estados-br";

function DeputadosList() {
  const [deputados, setDeputados] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Brasil");

  const fetchListDeputados = async () => {
    const response = await axios.get(
      `https://dadosabertos.camara.leg.br/api/v2/deputados`
    );
    setDeputados(response.data.dados);
    setLoaded(true);
  };
  useEffect(() => {
    fetchListDeputados();
    setLoaded(false);
  }, []);

  const fetchListDeputadosUf = async () => {
    const response = await axios.get(
      `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${selectedOption}`
    );
    setDeputados(response.data.dados);
  };
  useEffect(() => {
    selectedOption === "Brasil" ? fetchListDeputados() : fetchListDeputadosUf();
  }, [selectedOption]);

  const handleSelectedOption = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="container custom-container">
      <div className="field">
        <div className="control">
          <div className="select">
            <select value={selectedOption} onChange={handleSelectedOption}>
              {estados.UF.map(estado => {
                const {sigla} = estado
                return <option key={sigla}>{sigla}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="columns is-multiline is-flex">
        {loaded ? (
          deputados.map(deputado => {
            const { id, nome, urlFoto } = deputado;
            return <Deputado key={id} id nome={nome} foto={urlFoto} />;
          })
        ) : (
          <figure className="image container is-128x128">
            <img src={loading} alt="Carregando" />
          </figure>
        )}
      </div>
    </div>
  );
}

export default DeputadosList;
