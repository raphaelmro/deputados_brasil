import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Lawmaker from "../Lawmaker/Lawmaker";
import "./LawmakerList.css";

import { baseUrl } from "../api";
import estados from "../estados-br";
import LoadImage from "../LoadImage/LoadImage";

function LawmakerList() {
  const [lawmakers, setLawmakers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Brasil");

  const fetchLawmakerList = useCallback(async () => {
    const response = await axios.get(`${baseUrl}/deputados`);
    setLawmakers(response.data.dados);
    setLoaded(true);
  }, []);

  const fetchLawmakerListByFU = useCallback(async () => {
    setLoaded(false);
    const response = await axios.get(
      `${baseUrl}/deputados?siglaUf=${selectedOption}`
    );
    setLawmakers(response.data.dados);
    setLoaded(true);
  }, [selectedOption]);

  const handleSelectedOption = e => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    selectedOption === "Brasil" ? fetchLawmakerList() : fetchLawmakerListByFU();
  }, [fetchLawmakerList, fetchLawmakerListByFU, selectedOption]);

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
          lawmakers.map(lawmaker => {
            const { id, nome, urlFoto, siglaPartido, siglaUf } = lawmaker;
            return <Lawmaker key={id} id={id} name={nome} avatar={urlFoto} partyAcronym={siglaPartido} FUAcronym={siglaUf} />;
          })
        ) : (
          <LoadImage />
        )}
      </div>
    </div>
  );
}

export default LawmakerList;
