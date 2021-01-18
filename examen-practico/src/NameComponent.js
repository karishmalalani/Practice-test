import React , { useContext, useState } from "react";
import {myContext} from './UserForm'

const NameComponent = () => {
  const {input} = useContext(myContext);
  return (
    <div style={{ marginTop: "30px" }}>
      <h5>
        <strong>Nombre</strong>: {input.name}
      </h5>
    </div>
  );
};

export default NameComponent;
