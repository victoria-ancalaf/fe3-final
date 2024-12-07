import React from "react";
import Form from "../Components/Form";
import { useDentistStates } from "../Components/utils/Context";

const Contact = () => {
  const { state } = useDentistStates();

  return (
    <div className={`${state.theme} contact`}>
      <div className="contact-text">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
