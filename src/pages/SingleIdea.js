import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our idea, including router prop match
const SingleIdea = ({ ideas, match, edit, deleteIdea }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const idea = ideas.find((idea) => idea.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{idea.title}</h1>
      <h2>{idea.body}</h2>
      <button onClick={(event) => edit(idea)}>Edit</button>
      <button onClick={(event) => deleteIdea(idea)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleIdea;