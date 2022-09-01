import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import withSwapi from "../hoc-helpers/withSwapi";
import { useParams } from "react-router-dom";

const StarshipDetails = (props) => {
  let { itemId } = useParams();
  return (
    <ItemDetails {...props} itemId={itemId}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarShip,
    getImageUrl: swapiService.getStarShipImage,
  };
};

export default withSwapi(StarshipDetails, mapMethodsToProps);
