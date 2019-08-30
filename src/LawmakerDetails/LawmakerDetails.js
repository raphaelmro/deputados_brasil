import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "../api";
import LoadImage from "../LoadImage/LoadImage";
import "./LawmakerDetails.css";

function LawmakerDetails(props) {
  const { id } = props.match.params;
  const [lawmaker, setLawmaker] = useState([]);
  const [lawmakerExpenses, setLawmakerExpenses] = useState([])
  const [loaded, setLoaded] = useState(false);

  const fetchLawmakerDetail = useCallback(async () => {
    setLoaded(false);
    await axios.get(`${baseUrl}/deputados/${id}`).then(res => {
      setLawmaker(res.data.dados);
    });
    setLoaded(true);
  }, [id]);

  const fetchLawmakerExpenses = useCallback(async () => {
    await axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas`)
        .then(res => {
          setLawmakerExpenses(res.data.dados)
        })
  }, [id])

  useEffect(() => {
    fetchLawmakerDetail();
    fetchLawmakerExpenses();
  }, [fetchLawmakerDetail, fetchLawmakerExpenses]);
  const {
    nomeCivil,
    dataNascimento,
    ufNascimento,
    municipioNascimento,
    escolaridade,
    email,
    ultimoStatus
  } = lawmaker;

  console.log(lawmakerExpenses)
  return (
    <section className="section">
      <div className="container">
        {loaded ? (
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child">
                <figure className="image is-4by3 figure-style">
                  <img
                    src={ultimoStatus.urlFoto}
                    alt={ultimoStatus.nomeEleitoral}
                  />
                </figure>
                <p className="title">{ultimoStatus.nomeEleitoral}</p>
                <p className="subtitle">{`${ultimoStatus.siglaPartido}/${ultimoStatus.siglaUf}`}</p>
              </div>
            </div>
            <div className="tile is-9 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">Detalhes</p>
                <div className="columns">
                  <div className="column">
                    <table className="table is-striped is-fullwidth">
                      <tbody>
                        <tr>
                          <td className="td-style">Nome</td>
                          <td>{nomeCivil}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Nome Eleitoral</td>
                          <td>{ultimoStatus.nomeEleitoral}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Nascimento</td>
                          <td>{dataNascimento}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Município de Nascimento</td>
                          <td>{`${municipioNascimento}/${ufNascimento}`}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Escolaridade</td>
                          <td>{escolaridade}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Email</td>
                          <td>{email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="column">
                    <table className="table is-striped is-fullwidth">
                      <tbody>
                        <tr>
                          <td className="td-style">Gabinete</td>
                          <td>{ultimoStatus.gabinete.nome}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Prédio</td>
                          <td>{ultimoStatus.gabinete.predio}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Sala</td>
                          <td>{ultimoStatus.gabinete.sala}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Andar</td>
                          <td>{ultimoStatus.gabinete.andar}</td>
                        </tr>
                        <tr>
                          <td className="td-style">Telefone</td>
                          <td>{`(61) ${ultimoStatus.gabinete.telefone}`}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="tile is-child box">
                <p className="title">Despesas Recentes</p>
                <table className="table is-striped is-fullwidth is-narrow">
                  <thead>
                    <tr>
                      <th>Data do Documento</th>
                      <th>Tipo de Despesa</th>
                      <th>Tipo de Documento</th>
                      <th>Fornecedor</th>
                      <th>Valor do Documento</th>
                      <th>Valor Líquido</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lawmakerExpenses.map(expense =>{
                      return (
                          <tr>
                            <td>{`${expense.mes}/${expense.ano}`}</td>
                            <td>{expense.tipoDespesa}</td>
                            <td>{expense.tipoDocumento}</td>
                            <td>{expense.nomeFornecedor}</td>
                            <td>{expense.valorDocumento}</td>
                            <td>{expense.valorLiquido}</td>
                          </tr>)
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <LoadImage />
        )}
      </div>
    </section>
  );
}

export default LawmakerDetails;
