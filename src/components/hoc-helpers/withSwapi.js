import React from "react";
import { SwapiConsumer } from "../swapi-service-context/swapi-service-context";

const withSwapi = (Wrapper, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapper {...props} {...serviceProps} />;
        }}
      </SwapiConsumer>
    );
  };
};

export default withSwapi;
