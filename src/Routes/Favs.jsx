import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/Context";

const Favs = () => {
  const {
    state: { favs },
  } = useDentistStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Favs;
