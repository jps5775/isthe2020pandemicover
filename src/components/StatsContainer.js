import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Stat from "./Stat";
import { FaSkull } from "react-icons/fa";
import { RiVirusLine, RiHotelBedLine } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";

function StatsContainer(props) {
  return (
    <Container>
      <Row style={{ paddingBottom: "5px" }}>
        <Col lg className="d-flex justify-content-center">
          <Stat
            statName="Total Cases"
            statValue={props.allStats.totalCases}
            statIcon={<RiHotelBedLine size={70} />}
          />
        </Col>
        <Col lg className="d-flex justify-content-center">
          <Stat
            statName="Total Recovered"
            statValue={props.allStats.totalRecovered}
            statIcon={<GiHealthNormal color="red" size={70} />}
          />
        </Col>
      </Row>
      <Row style={{ paddingBottom: "5px" }}>
        <Col lg className="d-flex justify-content-center">
          <Stat
            statName="Total Deaths"
            statValue={props.allStats.totalDeaths}
            statIcon={<FaSkull color="grey" size={70} />}
          />
        </Col>
        <Col lg className="d-flex justify-content-center">
          <Stat
            statName="Total Infected"
            statValue={props.allStats.totalInfected}
            statIcon={<RiVirusLine color="darkred" size={70} />}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default StatsContainer;
