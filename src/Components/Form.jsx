import React, { useState } from "react";

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (
      userInfo.name.trim().length > 5 &&
      regexEmail.test(userInfo.email)
    ) {
      setShow(true);
      setError(false);
      console.log(userInfo);
      
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input
          type="text"
          value={userInfo.name}
          onChange={(event) =>
            setUserInfo({ ...userInfo, name: event.target.value })
          }
        />
        <label>Email:</label>
        <input
          type="text"
          value={userInfo.email}
          onChange={(event) =>
            setUserInfo({ ...userInfo, email: event.target.value })
          }
        />
        <button>Enviar</button>
        {error ? <h4>Por favor verifique su información nuevamente</h4> : null}
      </form>
      {show && (
        <h3>Gracias {userInfo.name}, te contactaremos cuando antes vía mail</h3>
      )}
    </div>
  );
};

export default Form;
