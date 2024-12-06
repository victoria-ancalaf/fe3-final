import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
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

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    <h2>{dentist.name}</h2>
    <h2>{dentist.email}</h2>
    <h2>{dentist.phone}</h2>
    <h2>{dentist.website}</h2>
    </>
  );
};

export default Detail;
