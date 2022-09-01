import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapi from "../hoc-helpers/withSwapi";
import { useParams } from "react-router-dom";

const PersonDetails = (props) => {
  let { itemId } = useParams();
  return (
    <ItemDetails {...props} itemId={itemId}>
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
