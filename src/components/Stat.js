import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Stat.css";

function Stat(props) {
  let val = Number(props.statValue).toLocaleString();
  return (
    <Card className="box-shadow container-width-30rem">
      <Card.Body>
        <Row>
          <Col>{props.statIcon}</Col>
          <Col>
            <Row>
              <h5 style={{ color: "grey" }}>{props.statName}</h5>
            </Row>
            <Row>
              <h3>
                <strong>{val}</strong>
              </h3>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Stat;
