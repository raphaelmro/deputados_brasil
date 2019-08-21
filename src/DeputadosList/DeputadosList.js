import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Deputado from "../Deputado/Deputado";
import "./DeputadosList.css";

import { baseUrl } from "../api";
import estados from "../estados-br";
import LoadImage from "../LoadImage/LoadImage";

function DeputadosList() {
  const [deputados, setDeputados] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Brasil");

  const fetchListDeputados = useCallback(async () => {
    const response = await axios.get(`${baseUrl}/deputados`);
    setDeputados(response.data.dados);
    setLoaded(true);
  }, []);

  const fetchListDeputadosUf = useCallback(async () => {
    setLoaded(false);
    const response = await axios.get(
      `${baseUrl}/deputados?siglaUf=${selectedOption}`
    );
    setDeputados(response.data.dados);
    setLoaded(true);
  }, [selectedOption]);

  const handleSelectedOption = e => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    selectedOption === "Brasil" ? fetchListDeputados() : fetchListDeputadosUf();
  }, [fetchListDeputados, fetchListDeputadosUf, selectedOption]);

  return (
    <div className="container custom-container">
      <div className="field">
        <div className="control">
          <div className="select">
            <select value={selectedOption} onChange={handleSelectedOption}>
              {estados.UF.map(estado => {
                const { sigla } = estado;
                return <option key={sigla}>{sigla}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="columns is-multiline is-flex">
        {loaded ? (
          deputados.map(deputado => {
            const { id, nome, urlFoto, siglaPartido, siglaUf } = deputado;
            return <Deputado key={id} id nome={nome} foto={urlFoto} siglaPartido={siglaPartido} siglaUf={siglaUf} />;
          })
        ) : (
          <LoadImage />
        )}
      </div>
    </div>
  );
}

export default DeputadosList;
