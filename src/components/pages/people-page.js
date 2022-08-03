import React, { Component } from "react";

import Row from "../Row/row";
import { PersonList } from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";
import "./people-page.css";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row left={<PersonList onItemSelected={this.onItemSelected} />} right={<PersonDetails itemId={selectedItem} />} />
    );
  }
}
