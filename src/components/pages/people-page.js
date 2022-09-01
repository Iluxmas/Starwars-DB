import React, { Component } from "react";

import Row from "../Row/row";
import { PersonList } from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";
import { useNavigate, useParams } from "react-router-dom";

import "./people-page.css";

export default function PeoplePage() {
  let navigate = useNavigate();
  let { id } = useParams();

  return <Row left={<PersonList onItemSelected={(id) => navigate(id)} />} right={<PersonDetails itemId={id} />} />;
}
