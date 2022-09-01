import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import { SwapiProvider } from "../swapi-service-context/swapi-service-context";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import Layout from "../layout/layout";
import StarshipDetails from "../sw-components/starship-details";
import PersonDetails from "../sw-components/person-details";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Router>
            <Header />
            <RandomPlanet />
            <Routes>
              <Route index element={<Layout />}></Route>
              <Route path="people*" element={<PeoplePage />} />
              <Route path="people/:itemId" element={<PersonDetails />} />

              <Route path="planets" element={<PlanetPage />} />
              <Route path="starships" element={<StarshipPage />} />
              <Route path="starships/:itemId" element={<StarshipDetails />} />
            </Routes>
          </Router>
        </div>
      </SwapiProvider>
    );
  }
}
