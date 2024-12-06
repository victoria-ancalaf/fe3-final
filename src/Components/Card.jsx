import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/Context";

const Card = ({ dentist }) => {
  const { dispatch, state } = useDentistStates();

  const findFav = state.favs.some((fav) => fav.id === dentist.id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: dentist });
  };

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="/images/doctor.jpg" alt="Doctor Profile" width={100} />
      <h4>{dentist.name}</h4>
      <h6>{dentist.id}</h6>
      <h5>{dentist.username}</h5>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
