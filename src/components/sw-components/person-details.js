import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapi from "../hoc-helpers/withSwapi";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};

export default withSwapi(PersonDetails, mapMethodsToProps);
