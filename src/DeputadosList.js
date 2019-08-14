import React, { useEffect, useState } from "react";
import axios from "axios";
import Deputado from "./Deputado";
import { Row, Col } from "antd";

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
    <Row justify="center" align="top" gutter={24}>
      {deputados.map(deputado => {
        return (
          <Col
              xs={20} sm={16} md={12} lg={8} xl={4}
            style={{ display: "flex", alignContent: "space-between" }}
            span={4}
            key={deputado.id}
          >
            <Deputado
              id={deputado.id}
              nome={deputado.nome}
              foto={deputado.urlFoto}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default DeputadosList;
