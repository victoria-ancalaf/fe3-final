import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/Context";

const Card = ({ dentist }) => {
  const { dispatch, state } = useDentistStates();

  const findFav = state.favs.some((fav) => fav.id === dentist.id);

  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: dentist });
  };

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
        <img src="/images/doctor.jpg" alt="Doctor Profile" />
        <h4>{dentist.name}</h4>
        <div className="dentist-id">
          <h5>{dentist.id}</h5>
          <h5>{dentist.username}</h5>
        </div>
      </Link>
      <button onClick={toggleFav} className="favButton">
        {findFav ? "Remove 🌟" : "Add ⭐"}
      </button>
    </div>
  );
};

export default Card;
