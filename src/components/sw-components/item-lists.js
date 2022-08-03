import React from "react";
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/with-data";
import withSwapi from "../hoc-helpers/withSwapi";

const withChildFUnction = (Wrapper, fn) => {
  return (props) => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};

const ListWithChildren = withChildFUnction(ItemList, ({ name }) => <span>{name}</span>);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarShips,
  };
};

const PersonList = withSwapi(withData(ListWithChildren), mapPersonMethodsToProps);

const PlanetList = withSwapi(withData(ListWithChildren), mapPlanetMethodsToProps);

const StarshipList = withSwapi(withData(ListWithChildren), mapStarshipMethodsToProps);

export { PersonList, PlanetList, StarshipList };
