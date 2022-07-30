import React from "react";
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarShips } = swapiService;

const withChildFUnction = (Wrapper, fn) => {
  return (props) => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};

const ListWithChildren = withChildFUnction(ItemList, ({ name }) => (
  <span>{name}</span>
));

const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(ListWithChildren, getAllPlanets);

const StarshipList = withData(ListWithChildren, getAllStarShips);

export { PersonList, PlanetList, StarshipList };
