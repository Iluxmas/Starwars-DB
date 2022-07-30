import React, { Component } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";

import SwapiService from "../../services/swapi-service";

import { SwapiProvider } from "../swapi-service-context/swapi-service-context";
import ErrorIndicator from "../error-indicator/error-indicator";
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";

import StarshipDetails from "../sw-components/starship-details";
import PersonDetails from "../sw-components/person-details";
import PlanetDetails from "../sw-components/planet-details";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson, getStarShip, getPersonImage, getStarShipImage } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          {/*  <Row left={} right={} / */}
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList />
          <PlanetList />
          <StarshipList />
        </div>
      </SwapiProvider>
    );
  }
}
