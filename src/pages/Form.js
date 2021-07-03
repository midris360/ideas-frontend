// Import useState hook
import React, { useState } from "react";

//destructure out props, including router prop history
const Form = ({ initialIdea, handleSubmit, buttonLabel, history }) => {
  ////////////////
  // The Form Data State
  ////////////////
  // Initiallize the form with the initialIdea state
  const [formData, setFormData] = useState(initialIdea);

  //////////////////////////
  // Functions
  //////////////////////////

  // Standard React Form HandleChange Function
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to run when form is submitted
  const handleSubmisson = (event) => {
    //prevent form refresh
    event.preventDefault();
    //pass formData to handleSubmit prop function
    handleSubmit(formData);
    //push user back to main page
    history.push("/");
  };

  // Our Form, an input for the title and body fields and a submit button
  return (
    <form onSubmit={handleSubmisson}>
      <input
        type="string"
        onChange={handleChange}
        value={formData.title}
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.body}
        name="body"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;