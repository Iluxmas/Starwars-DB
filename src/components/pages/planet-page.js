import React, { Component } from "react";

import Row from "../Row/row";
import { PlanetList } from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";
import "./people-page.css";

export default class PlanetPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row left={<PlanetList onItemSelected={this.onItemSelected} />} right={<PlanetDetails itemId={selectedItem} />} />
    );
  }
}
