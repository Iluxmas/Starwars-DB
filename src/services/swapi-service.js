export default class SwapiService {
  _apiBase = "https://swapi.dev/api";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`could not fetch ${url}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const people = await this.getResource(`/people/`);
    return people.results.map((person) => this._transformPerson(person));
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map((planet) => this._transformPlanet(planet));
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarShips = async () => {
    const ships = await this.getResource(`/starships/`);
    return ships.results.map((ship) => this._transformStarShip(ship));
  };

  getStarShip = async (id) => {
    const ship = await this.getResource(`/starships/${id}/`);
    return this._transformStarShip(ship);
  };

  getPersonImage = ({ id }) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };
  getStarShipImage = ({ id }) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  };
  getPlanetImage = ({ id }) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  };

  _getDataId = (item) => {
    return item.url.match(/\d+/)[0];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._getDataId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._getDataId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  _transformStarShip = (starship) => {
    return {
      id: this._getDataId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };
}
