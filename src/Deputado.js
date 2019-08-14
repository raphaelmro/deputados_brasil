import React from "react";
import { Card } from "antd";
import "./Deputado.css";

const { Meta } = Card;

const cardStyle = {
  fontSize: "10px",
};

function Deputado({ id, nome, foto }) {
  return (
    <Card
      hoverable
      style={{ width: "60%", padding: "4%" }}
      cover={<img alt={nome} src={foto} />}
      id={id}
    >
      <Meta
          style={{textAlign: "center"}}
        className={cardStyle}
        title={<span style={cardStyle}>{nome}</span>}
      />
    </Card>
  );
}

export default Deputado;
