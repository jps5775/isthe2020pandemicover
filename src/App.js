import React, { Component } from "react";
import { Card, Container, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import StatsContainer from "./components/StatsContainer";
import countries from "./content/countries.json";
import Footer from "./components/Footer";
import Select from "react-select";
import "./App.css";
import { FcGlobe } from "react-icons/fc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      choosenCountry: "Global",
      allStats: {
        totalCases: 0,
        totalRecovered: 0,
        totalDeaths: 0,
        totalInfected: 0,
      },
      containsError: false,
    };
  }

  componentDidMount() {
    this.getCovidStats();
  }

  componentDidUpdate() {
    this.getCovidStats();
  }

  async getCovidStats() {
    try {
      let countryStatsUrl =
        "https://disease.sh/v3/covid-19/" +
        (this.state.choosenCountry === "Global" ? "all" : "countries") +
        "/" +
        (this.state.choosenCountry === "Global"
          ? ""
          : this.state.choosenCountry) +
        (this.state.choosenCountry === "Global" ? "" : "?strict=true");

      let countryStats = await axios.get(countryStatsUrl);

      this.setState({
        allStats: {
          totalCases: countryStats.data.cases,
          totalRecovered: countryStats.data.recovered,
          totalDeaths: countryStats.data.deaths,
          totalInfected: countryStats.data.active,
        },
      });
    } catch (err) {
      console.log(err);
      this.setState({ containsError: true });
    }
  }

  // TODO:
  // https://coviddetail.com/global - sample app
  // - add R0 value and base the status on that value

  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Card
            style={{ textAlign: "center", margin: 30 }}
            className="box-shadow container-width-40rem"
          >
            <Card.Body>
              <h1 style={{ textAlign: "center" }}>
                <strong>Is the 2020 Pandemic Over?</strong>
              </h1>
            </Card.Body>
          </Card>
        </Row>

        <Row className="d-flex justify-content-center">
          <Card
            style={{ textAlign: "center", margin: 30 }}
            className="box-shadow container-width-30rem"
          >
            <h2>Status:</h2>
            <h2 style={{ color: "red" }}>Hell Naw bro!</h2>
          </Card>
        </Row>

        {!this.state.containsError ? (
          <div>
            <Row className="d-flex justify-content-center">
              <h4>Choose a country below:</h4>
            </Row>

            <Row className="d-flex justify-content-center">
              <FcGlobe size={70} />
            </Row>

            <Row className="d-flex justify-content-center">
              <Select
                className="width-600px"
                options={countries.map((opt) => ({ label: opt, value: opt }))}
                placeholder={this.state.choosenCountry}
                onChange={(opt) => this.setState({ choosenCountry: opt.value })}
              ></Select>
            </Row>

            <Row className="d-flex justify-content-center">
              <h6>
                <em>*Updates every 10 mins*</em>
              </h6>
            </Row>

            <StatsContainer
              choosenCountry={this.state.choosenCountry}
              allStats={this.state.allStats}
            ></StatsContainer>
          </div>
        ) : (
          <Spinner animation="border" role="status"></Spinner>
        )}
        <Footer />
      </Container>
    );
  }
}

export default App;
