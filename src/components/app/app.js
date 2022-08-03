import React, { Component } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";

import SwapiService from "../../services/swapi-service";
import { SwapiProvider } from "../swapi-service-context/swapi-service-context";
import ErrorIndicator from "../error-indicator/error-indicator";

import PeoplePage from "../pages/people-page";
import "./app.css";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </div>
      </SwapiProvider>
    );
  }
}
