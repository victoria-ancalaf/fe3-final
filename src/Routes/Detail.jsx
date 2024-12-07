import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDentistStates } from "../Components/utils/Context";

const Detail = () => {
  const { state } = useDentistStates();

  const params = useParams();
  console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentist(res.data);
    });
  }, []);

  return (
    <div className={`${state.theme} details`}>
      <h1>Detail Dentist id: {dentist.id} </h1>
      <div className="info-den">
        <div>
          <img src="/images/doctor.jpg" alt="avatar" width={200} />
        </div>
        <div>
          <h2>Name: {dentist.name}</h2>
          <h2>Email: {dentist.email}</h2>
          <h2>Phone: {dentist.phone}</h2>
          <h2>Website: {dentist.website}</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
