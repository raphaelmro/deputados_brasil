import React from "react";
import {convertUpperCaseToTitleCase} from "../util";

function Details({ lawmaker }) {
  const {
    nomeCivil,
    dataNascimento,
    ufNascimento,
    municipioNascimento,
    escolaridade,
    email,
    ultimoStatus
  } = lawmaker;
  return (
    <div className="tile is-child box">
      <p className="title">Detalhes</p>
      <div className="columns">
        <div className="column">
          <table className="table is-striped is-fullwidth">
            <tbody>
              <tr>
                <td className="td-style">Nome</td>
                <td>{convertUpperCaseToTitleCase(nomeCivil)}</td>
              </tr>
              <tr>
                <td className="td-style">Nome Eleitoral</td>
                <td>{convertUpperCaseToTitleCase(ultimoStatus.nomeEleitoral)}</td>
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
  );
}

export default Details;
