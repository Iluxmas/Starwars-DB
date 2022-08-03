import React, { Component } from "react";

import Row from "../Row/row";
import { StarshipList } from "../sw-components/item-lists";
import StarshipDetails from "../sw-components/starship-details";
import "./people-page.css";

export default class StarshipPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
