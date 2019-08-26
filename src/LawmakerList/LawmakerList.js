import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Lawmaker from "../Lawmaker/Lawmaker";
import "./LawmakerList.css";
import { baseUrl } from "../api";
import estados from "../estados-br";

import LoadImage from "../LoadImage/LoadImage";

function LawmakerList() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Brasil");
  const [searchInput, setSearchInput] = useState("");

  const fetchLawmakerList = useCallback(async () => {
    const response = await axios.get(`${baseUrl}/deputados`);
    setData(response.data.dados);
    setLoaded(true);
  }, []);

  const fetchLawmakerListByFU = useCallback(async () => {
    setLoaded(false);
    const response = await axios.get(
      `${baseUrl}/deputados?siglaUf=${selectedOption}`
    );
    setData(response.data.dados);
    setLoaded(true);
  }, [selectedOption]);

  const handleSelectedOption = e => {
    setSelectedOption(e.target.value);
  };

  const handleSearchInput = query => {
    setSearchInput(query);
  };

  const fetchLawmakerBySearching = useCallback( async () => {
    setLoaded(false)
    if (searchInput.length === 0) {
      fetchLawmakerList();
    } else {
      const resultado = data.filter(lawmaker => {
        return lawmaker.nome.toLowerCase().includes(searchInput.toLowerCase());
      });
      setData(resultado);
      setLoaded(true)
    }
  },[searchInput, fetchLawmakerList, data])

  useEffect(() => {
    fetchLawmakerBySearching()
  },[fetchLawmakerBySearching])


  /*const setDisplayedLawmakers = _.debounce(async query => {
    await setSearchInput(query)
    const resultado = data.filter(lawmaker => {
      return lawmaker.nome.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log(resultado)
    setData(resultado);
  }, 200);*/

  useEffect(() => {
    selectedOption === "Brasil" ? fetchLawmakerList() : fetchLawmakerListByFU();
  }, [fetchLawmakerList, fetchLawmakerListByFU, selectedOption]);

  return (
    <div className="container custom-container">
      <div className="box">
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Nome do Deputado"
                  value={searchInput}
                  onChange={e => handleSearchInput(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="column is-one-fifth">
            <div className="field">
              <div className="control">
                <div className="select">
                  <select
                    value={selectedOption}
                    onChange={handleSelectedOption}
                  >
                    {estados.UF.map(estado => {
                      const { sigla } = estado;
                      return <option key={sigla}>{sigla}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns is-multiline is-flex">
        {loaded ? (
          data.map(lawmaker => {
            const { id, nome, urlFoto, siglaPartido, siglaUf } = lawmaker;
            return (
              <Lawmaker
                key={id}
                id={id}
                name={nome}
                avatar={urlFoto}
                partyAcronym={siglaPartido}
                FUAcronym={siglaUf}
              />
            );
          })
        ) : (
          <LoadImage />
        )}
      </div>
    </div>
  );
}

export default LawmakerList;
