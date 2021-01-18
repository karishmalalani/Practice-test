import React ,  { useContext, useState } from "react";
import {myContext} from './UserForm'

const LocationComponent = () => {
  const {input} = useContext(myContext);
  return (
    <div>
      <h5>
        <strong>Ubicación</strong>: {input.location}
      </h5>
    </div>
  );
};

export default LocationComponent;
